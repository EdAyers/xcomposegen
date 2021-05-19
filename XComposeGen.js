import translations from "./translations.js";
/*
https://github.com/rrthomas/pointless-xcompose/
https://github.com/kragen/xcompose
*/
let input_file = "./vscode/settings.json";
let output_file = "~/.XCompose";

const compose_map = {
  "(": "parenleft",
  ")": "parenright",
  "\\": "backslash",
  "/": "slash",
  "&": "ampersand",
  "~": "asciitilde",
  ";": "semicolon",
  ",": "comma",
  ".": "period",
  "*": "asterisk",
  "<": "less",
  "|": "bar",
  "-": "minus",
  "+": "plus",
  "=": "equal",
  _: "underscore",
  "'": "apostrophe",
  "[": "bracketleft",
  "]": "bracketright",
  "!": "exclam",
  "@": "at",
  "{": "braceleft",
  "}": "braceright",
  ">": "greater",
  ":": "colon",
  "?": "question",
  "→": "Right",
  "←": "Left",
  "↑": "Up",
  "↓": "Down",
  "^": "asciicircum",
  "#": "numbersign",
  "`": "grave",
  '"': "quotedbl",
  " ": "space",
};

for (const c of "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789") {
  compose_map[c] = c;
}

async function run() {
  const encoder = new TextEncoder("utf-8");
  let output = `include "%L"\n`;
  for (const k in translations) {
    let v = translations[k];
    let v2 = "<Multi_key> ";
    for (const c of k) {
      const s = compose_map[c];
      if (!s) {
        throw new Error(`Symbol ${c} does not exist in compose map`);
      }
      v2 += "<" + s + "> ";
    }
    v2 += `: "${v}"\n`;
    output += v2;
  }
  await Deno.writeAll(Deno.stdout, encoder.encode(output));
}

run();

// deno run XComposeGen.js > ~/.XCompose
