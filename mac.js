/* Author E.W.Ayers
When this file is run it will output a file that can be used
on macs to have composition characters.

```
deno run mac.js > ~/Library/KeyBindings/DefaultKeyBinding.dict
```
*/
import {translations} from "./translations.js";

const compose_map = {
  "↑": "\\UF700",
  "↓": "\\UF701",
  "→": "\\UF703",
  "←": "\\UF702",
  "~": "\\~",
  "^": "\\^",
  "#": "\\#",
  $: "\\$",
  "@": "\\@",
  "\\": "\\\\",
  '"': '\\"',
};

function mapkey(x) {
  for (const k in compose_map) {
    x = x.split(k).join(compose_map[k]);
  }
  return x;
}

function mul(x, n) {
  acc = "";
  for (let i = 0; i < n; i++) {
    acc += x;
  }
  return acc;
}

async function run() {
  const encoder = new TextEncoder("utf-8");
  let o = {};
  for (const k in translations) {
    let cs = k.split("");
    let v = translations[k];
    let acc = o;
    for (const c of cs) {
      if (!acc[c]) {
        acc[c] = {};
      }
      acc = acc[c];
    }
    acc.insert = v;
  }
  function f(acc, tabs = "") {
    let { insert, ...rest } = acc;
    let ks = Object.getOwnPropertyNames(rest);
    if (ks.length === 0 && insert !== undefined) {
      return `("insertText:","${insert}")`;
    }
    let es = ks.map(
      (k) => `${tabs}  "${mapkey(k)}" = ${f(rest[k], tabs + "  ")};`
    );
    if (insert !== undefined) {
      es.push(`${tabs}  " " = ("insertText:","${insert}");`);
    }
    return `{\n${es.join("\n")}\n${tabs}}`;
  }
  let main = f(o, "    ");
  // note; \\UF710 causes the 'compose key' to be triggered when F13 is pressed.
  // you can see a list of other available keybindings at
  // https://web.archive.org/web/20160314030051/http://osxnotes.net/keybindings.html
  let output = `{\n  "\\UF710" = ${main};\n}`;
  await Deno.writeAll(Deno.stdout, encoder.encode(output));
}

run();
