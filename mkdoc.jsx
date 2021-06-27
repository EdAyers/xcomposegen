import {alphabets, arrow_sets, my_translations, translations as all_translations} from './translations.js'
import S from 'https://dev.jspm.io/react-dom/server';
import React from 'https://dev.jspm.io/react';
import { translations as lean_translations } from "./lean-translations.js";

const abc = "abcdefghijklmnopqrstuvwxyz".split("")
const aA = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
const cols = "abcdefghijklmnopqrstuvwxyz0123456!\"#$%&'*+,-_./:;<=>?@\\^|~()[]{}".split("")
const rows = ["",...cols]
const gopn = Object.getOwnPropertyNames(my_translations)
const leankey = Object.getOwnPropertyNames(lean_translations).filter(k => my_translations[k] === undefined)
// cols.push(...Object.getOwnPropertyNames(alphabets), "mt", "ep", "hp", "lt", "mo")
// rows.push()

function C(props) {
    return <code style={{fontFamily: "PragmataPro Liga"}} className={[props.className].join(" ")}>{props.children}</code>
}

function R({children:c}) {
  let t = all_translations[c]
  let is_start = false
  if (!t) {
    const sw = gopn.filter(k => k.startsWith(c)).sort((a,b) => a.length - b.length)

    c = sw[0]
    t = c && all_translations[c]
    is_start = !!t
  }

  if (!t) {
      t = " "
  }
  return <C className={[
      is_start ? "o-50" : "",
      leankey.some(k => c === k) ? "green" : ""
  ].join(" ")}>{t}</C>
}

function T({rows, cols}) {
    return  <table style={{tableLayout: "fixed", width: `${(cols.length + 1) * 2}em`}}>
            <thead>
                <tr className="bg-light-blue">
                    <th>{"\u2384"}</th>
                    {cols.map(c => <th key={c}><C>{c}</C></th>)}
                </tr>
            </thead>
            <tbody>
                {rows.map(c2 => <tr className="striped--light-gray" key={c2}><th className="bg-light-blue"><C>{c2}</C></th>{cols.map(c1 => <td key={c1}><R>{[c1,c2].join("")}</R></td>)}</tr>)}
            </tbody>
        </table>
}

function Main() {
    return  <html lang="en">
    <head>
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <title>Table</title>
        <link rel="stylesheet" href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"/>
    </head>
    <body>
        <T rows={rows} cols={cols}/>
        <T cols={["mr", "mi", "mc", "mf", "mb", "bb", "^", "_"]} rows={aA}/>
        <T cols={[ ..."efghjkpxyz".split(""), "-", "=", "mt", "hp", "lt", "mo",]} rows={["l", "r", "d", "u","lr", "ud", "ul", "ur", "dr", "dl", "rr", "ll", "llrr", "mt"]}/>
        <T cols={[ ..."cilstv|".split("")]} rows={["l", "le","r", "re", "d", "u", "uu", "dd"]}/>
        <T cols={["#'","#`","#ld", "#~", "#cu", "#.", "#..", "#o", "#lu", "#cd", "#~~", "#r", "#l"]} rows={abc}/>
        <T rows={["#.", "#..", "#o", "#~", "#-", "#r", "#l"]} cols={abc}/>
    </body>
    </html>
}

async function run() {
    const encoder = new TextEncoder("utf-8");
    let output = S.renderToString(<Main/>)
    await Deno.writeAll(Deno.stdout, encoder.encode(output));
}

run();