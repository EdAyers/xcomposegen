import { translations as lts } from "./lean-translations.js";
// const lts = {}

const custom_translations = {
  c: "○", ll: "≪", re: "▬", "-2": "⁻²", "-3": "⁻³",
  compose: "\u2384",
  // greek letters
  a: "α",
  ae: "æ",
  b: "β",
  z: "ℤ",
  al: "α",
  be: "β",
  ga: "γ",
  de: "δ",
  ep: "ε",
  ze: "ζ",
  et: "η",
  th: "θ",
  io: "ι",
  ka: "κ",
  la: "λ",
  mu: "μ",
  nu: "ν",
  xi: "ξ",
  pi: "π",
  rh: "ρ",
  si: "σ",
  ta: "τ",
  ph: "φ",
  ch: "χ",
  ps: "ψ",
  om: "ω",
  // Greek letters
  g: "Γ", Ga: "Γ",
  De: "Δ",
  Th: "Θ",
  La: "Λ",
  Xi: "Ξ",
  Pi: "Π", p: "Π",
  Si: "Σ",
  Ph: "Φ",
  Ps: "Ψ",
  Om: "Ω",
  // greek(ish) variants
  vt: "ϑ",
  vph: "ϕ",
  vpi: "ϖ",
  vk: "ϰ",
  vrh: "ϱ",
  n: "∇",
  na: "ℕ",
  pa: "∂",
  vsi: "ς",
  // mathcal
  A: "𝒜", B: "ℬ", C: "𝒞", D: "𝒟", E: "ℰ", F: "ℱ", G: "𝒢", H: "ℋ", I: "ℐ", J: "𝒥", K: "𝒦", L: "𝒧", M: "𝒨", N: "𝒩", O: "𝒪", P: "𝒫", Q: "𝒬", R: "𝒭", S: "𝒮", T: "𝒯", U: "𝒰", V: "𝒱", W: "𝒲", X: "𝒳", Y: "𝒴", Z: "𝒵",
  // mathbb
  bba: "𝔸", bbb: "𝔹", bbc: "ℂ", bbd: "𝔻", bbe: "𝔼", bbf: "𝔽", bbg: "𝔾", bbh: "ℍ", bbi: "𝕀", bbj: "𝕁", bbk: "𝕂", bbl: "𝕃", bbm: "𝕄", bbn: "ℕ", bbo: "𝕆", bbp: "ℙ", bbq: "ℚ", bbr: "ℝ", bbs: "𝕊", bbt: "𝕋", bbu: "𝕌", bbv: "𝕍", bbw: "𝕎", bbx: "𝕏", bby: "𝕐", bbz: "ℤ",
  bb0: "𝟘", bb1: "𝟙", bb2: "𝟚", bb3: "𝟛", bb4: "𝟜", bb5: "𝟝", bb6: "𝟞", bb7: "𝟟", bb8: "𝟠", bb9: "𝟡",
  // common letterlikes
  aff: "𝔸",
  proj: "ℙ",
  nat: "ℕ",
  real: "ℝ",
  rat: "ℚ",
  cplx: "ℂ", cp: "ℂ",
  exp: "𝔼",
  // fractions
  half: "½",
  "1/2": "½",
  third: "⅓",
  "1/3": "⅓",
  "2/3": "⅔",
  quarter: "¼",
  "1/4": "¼",
  "3/4": "¾",
  "1/5": "⅕",
  "2/5": "⅖",
  "3/5": "⅗",
  "4/5": "⅘",
  "1/6": "⅙",
  "5/6": "⅚",
  "1/7": "⅐",
  "1/8": "⅛",
  "3/8": "⅜",
  "5/8": "⅝",
  "7/8": "⅞",
  "1/9": "⅑",
  "1/10": "⅒",
  // logic
  fa: "∀",
  ex: "∃",
  we: "∧",
  ve: "∨",
  nex: "∄",
  tf: "∴",
  bc: "∵",
  inv: "⁻¹",
  "-1": "⁻¹",
  v: "⁻¹",
  "-": "⁻¹",
  em: "∅",

  "_ip1": "ᵢ₊₁",
  "_np1": "ₙ₊₁",
  "^ip1": "ⁱ⁺¹",
  "^im1": "ⁱ⁻¹",
  "^np1": "ⁿ⁺¹",
  "^nm1": "ⁿ⁻¹",

  // brackets
  "<": "‹",
  ">": "›",
  "(": "⟨",
  ")": "⟩",
  "((": "⟪",
  "))": "⟫",

  "[": "⟦",
  "]": "⟧",
  "{": "⦃",
  "}": "⦄",

  "lc": "⌈",
  "lf": "⌊",
  "rc": "⌉",
  "rf": "⌋",
  // arrows
  to: "→",
  from: "←",
  "=>": "⇒",
  inj: "↪",
  mon: "↣", mo: "↣",
  epi: "↠",
  Hom: "⟹",
  "~~>": "⟿",
  mt: "↦",
  lt: "↝",
  rt: "√", ro: "√",
  // ⇠ ⇡ ⇢ ⇣
  "-r-l": "⇄",
  "-u-d": "⇅",
  "-l-r": "⇆",
  "-l-l": "⇇",
  "-u-u": "⇈",
  "-r-r": "⇉",
  "-d-d": "⇊",

  // relations
  tr: "▸",
  tl: "◂",
  tu: "▴",
  td: "▾",
  ir: "⊲",
  il: "⊳",
  ire: "⊴",
  ile: "⊵",
  iu: "∇",
  id: "∆",
  vr: "≺",
  vl: "≻",
  vre: "≼",
  vle: "≽",
  vu: "⋎",
  vd: "⋏",

  ent: "⊢",
  ente: "⊨",
  top: "⊤",
  bot: "⊥",
  "|r": "⊢",
  "|l": "⊣",
  "|re": "⊨",
  "|le": "⫤",
  "|u": "⊥",
  "|d": "⊤",
  "|dl": "⋋",
  "|dr": "⋌",

  in: "∈",
  inl: "∋",
  ninl: "∌",
  nin: "∉",
  leq: "≤",
  geq: "≥",
  propto: "∝",

  // "≮":"nlr", "≯":"nll",  "≰": "nlre", "nlle":"≱",
  // ⊄ ⊅ ⊈ ⊉
  // ⋢ ⋣
  // ⋪ ⋫ ⋬ ⋭
  lrl: "≶",
  llr: "≷",
  lll: "≫",
  lrr: "≪",
  lrrr: "⋘",
  llll: "⋙",
  "~": "∼",
  "n~": "≁",
  "~~": "≈",
  "n~~": "≉",
  "~-": "≃",
  "~=": "≅",
  "~~~": "≋",
  neq: "≠",
  "==": "≡",

  join: "⊔",
  meet: "⊓",
  nand: "⍲",
  nor: "⍱",
  // misc
  infty: "∞",
  pm: "±",
  mp: "∓",
  empty: "∅",
  par: "∂",
  i: "∫",
  deg: "°",
  ".1": "ℹ",
  "im": "ℹ",
  iou: "⩉",

  // operators
  ".": "·",  // U+00b7 Middle dot
  "bullet": "∙", // U+2219 Mathematical symbols bullet operator
  bu: "•", // U+2022 General punctuation bullet
  o: "∘", // U+2218
  x: "×", // U+00D7
  bx: "◾", // U+25fe
  st: "⋆", // U+22c6
  di: "⋄",
  dv: "÷",
  sec: "§",

  opl: "⊕",

  c: "○",
  "c+": "⊕", "cc+": "⨁",
  "c-": "⊖",
  cx: "⊗", ccx: "⨂", // ⦻
  "c/": "⊘", // ⦱ ⦲ ⦳ ⦴
  "c.": "⊙", "cc.": "⨀",
  co: "⊚", // ⦾
  "c*": "⊛",
  "c=": "⊜",
  "c\\": "⦸", // ⦰
  "c|": "⦶",
  "c||": "⦷",
  cbu: "⦿",
  cdv: "⦼",
  "c-u": "⦽",
  clr: "⧀",
  cll: "⧁",
  cbot: "⦹", "ccbot": "⦺",
  "cco": "⧂",
  "cc=": "⧃",

  "-o": "⊸",
  "o-": "⟜",

  s: "□",
  "s+": "⊞",
  "s-": "⊟",
  sx: "⊠",
  "s.": "⊡",
  "s/": "⧄",
  "s\\": "⧅",
  "s*": "⧆",
  sc: "⧇",
  ss: "⧈",

  "cu+": "⊎",
  sqrt: "√",
  "3rt": "∛",
  "4rt": "∜",

  qll: "⍄",
  qlr: "⍃",
  "q=": "⌸",
  qdv: "⌹",
  qdi: "⌺",
  qo: "⌻",
  qc: "⌼",
  qlu: "⍌",
  qid: "⍍",
  qld: "⍓",
  qiu: "⍔",
  qu: "⍐",
  qd: "⍗",
  "q:": "⍠",
  ql: "⍇",
  qr: "⍈",
  "q/": "⍁",
  "q\\": "⍂",
  q: "⎕",
  "q?": "⍰",
  qneq: "⍯",
  "q'": "⍞",

  "''": "¨",
  "''ed": "⍡",
  "''iu": "⍢",
  "''st": "⍣",
  "''o": "⍤",
  "''c": "⍥",
  "''~": "⍨",
  "''ll": "⍩",
  "~iu": "⍫",
  "'_": "⍘",
  id_: "⍙",
  d_: "⍚",
  o_: "⍛",
  c_: "⍜",
  ";_": "⍮",
  eu_: "⍊",
  "|-l": "⍅",
  "|-r": "⍆",
  "--u": "⍏",
  "--d": "⍖",
  "|id": "⍋",
  "|iu": "⍒",
  "|~": "⍭",
  "|cu": "⍦",
  "|cr": "⍧",
  "|c": "⌽",

  enc: "⍎",
  dec: "⍕",
  lamp: "⍝",
  "-,": "⍪",
  beam: "⌶",
  slimq: "⌷",
  "-/": "⌿",
  "-\\": "⍀",
  " ": "‿",
  tie: "‿",

  // superscripts
  "-": "⁻¹",
  sq: "²",
  cube: "³",
  "^0": "⁰",
  "^i": "ⁱ",
  "^4": "⁴",
  "^5": "⁵",
  "^6": "⁶",
  "^7": "⁷",
  "^8": "⁸",
  "^9": "⁹",
  "^+": "⁺",
  "^-": "⁻",
  "^=": "⁼",
  "^(": "⁽",
  "^)": "⁾",
  "^n": "ⁿ",
  op: "ᵒᵖ",

  "^^": "⌃",
  "^-^": "⌅",
  "^--^": "⌆",
  "^sul": "⌜",
  "^cd": "⏜",
  "^cr": "ʾ",
  "^cl": "ʿ",
  "^lr": "˂",
  "^ll": "˃",
  "^ld": "˄",
  "^lu": "˅",
  "^o_": "º",
  "^a_": "ª",
  "^s": "ˢ",
  "^ga": "ˠ",
  "^l": "ˡ",
  "^?": "ˀ",
  "^w": "ʷ",
  "^x": "ˣ",

  // combining diacritics
  "^cu": "\u02d8",
  "^~": "\u02dc",
  "^.": "\u02d9",
  "not": "\u0338",

  // subscripts
  // ₐ ₑ ₒ ₓ ₔ ₕ ₖ ₗ ₘ ₙ ₚ ₛ ₜ ₊ ₋ ₌ ₍ ₎
  0: "₀",
  1: "₁",
  2: "₂",
  3: "₃",
  4: "₄",
  5: "₅",
  6: "₆",
  7: "₇",
  8: "₈",
  9: "₉",
  10: "₁₀",
  11: "₁₁",
  12: "₁₂",
  13: "₁₃",
  14: "₁₄",
  15: "₁₅",
  16: "₁₆",
  17: "₁₇",
  18: "₁₈",
  19: "₁₉",
  20: "₂₀",
  21: "₂₁",
  22: "₂₂",
  23: "₂₃",
  24: "₂₄",
  25: "₂₅",
  26: "₂₆",
  27: "₂₇",
  28: "₂₈",
  29: "₂₉",
  // circled
  c1: "①",
  c2: "②",
  c3: "③",
  c4: "④",
  c5: "⑤",
  c6: "⑥",
  c7: "⑦",
  c8: "⑧",
  c9: "⑨",
  c10: "⑩",
  c11: "⑪",
  c12: "⑫",
  c13: "⑬",
  c14: "⑭",
  c15: "⑮",
  c16: "⑯",
  c17: "⑰",
  c18: "⑱",
  c19: "⑲",
  // chess
  wk: "♔",
  wq: "♕",
  wr: "♖",
  wb: "♗",
  wn: "♘",
  wp: "♙",
  bk: "♚",
  bq: "♛",
  br: "♜",
  bb: "♝",
  bn: "♞",
  bp: "♟",

  // just for fun,
  skull: "☠",
  nuke: "☢",
  bio: "☣",
  warn: "⚠",
  d1: "⚀",
  d2: "⚁",
  d3: "⚂",
  d4: "⚃",
  d5: "⚄",
  d6: "⚅",
  storm: "⛈",
  rain: "⛆",
  benzene: "⌬",
  eye: "👁",
  eyes: "👀",
  lips: "👄",
  bear: "ᴥ", // ⌃ᴥ⌃
  thonk: "ಠ",
  hole: "🕳️", // (ಠ🕳️ಠ)
  grimace: "😬",
  moon: "🌝",
  fire: "🔥",
  thumb: "👍",
  rofl: "🤣",
  eyebrow: "🤨",
  hmm: "🧐",
  eyeroll: "🙄",
  puzzle: "🧩",
  robot: "🤖", brain: "🧠", heart: "❤️",
  cow: "🐮", chicken: "🐔", pig: "🐷",

  // Lean 3 uses these fences a lot.
  ",": "⟨",

  // ▼  Runic
  // U+16A0  ᚠ ᚡ ᚢ ᚣ ᚤ ᚥ ᚦ ᚧ ᚨ ᚩ ᚪ ᚫ ᚬ ᚭ ᚮ ᚯ
  // U+16B0  ᚰ ᚱ ᚲ ᚳ ᚴ ᚵ ᚶ ᚷ ᚸ ᚹ ᚺ ᚻ ᚼ ᚽ ᚾ ᚿ
  // U+16C0  ᛀ ᛁ ᛂ ᛃ ᛄ ᛅ ᛆ ᛇ ᛈ ᛉ ᛊ ᛋ ᛌ ᛍ ᛎ ᛏ
  // U+16D0  ᛐ ᛑ ᛒ ᛓ ᛔ ᛕ ᛖ ᛗ ᛘ ᛙ ᛚ ᛛ ᛜ ᛝ ᛞ ᛟ
  // U+16E0  ᛠ ᛡ ᛢ ᛣ ᛤ ᛥ ᛦ ᛧ ᛨ ᛩ ᛪ ᛫ ᛬ ᛭ ᛮ ᛯ
  // U+16F0  ᛰ ᛱ ᛲ ᛳ ᛴ ᛵ ᛶ ᛷ ᛸ
};

const abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

/** Creates a list of strings showing combining characters in action. */
function combineTestStrings() {
  let ranges = [[0x0300, 0x0370], [0x20D0, 0x20F1]]
  let acc = []
  for (let [a, b] of ranges) {
    for (let i = a; i < b; i++) {
      let c = String.fromCharCode(i)
      acc.push(`${i.toString(16)} - X${c}Z - x${c}z\n`)
    }
  }
  return acc
}

/** Here, I have a set of combining characters for decorating letters.
 * Unfortunately, different fonts interpret these in different ways.
 * For example, the overbar U+305 placed between two letters is sometimes drawn over the first letter, sometimes the second, and sometimes between the two.
 * There does not seem to be a lot of agreement on this so I am going to do whatever looks best in PragmataPro.
 * `combineTestStrings()` makes a list of test strings for looking at these characters.
 */
function mkCombine(r = {}) {
  const combine = {
    // above letter
    "'": "x́",
    "`": "x̀",
    hat: "x̂",
    ld: "x̂",
    "~": "x̃",
    "-": "x\u0304",
    cu: "x\u0306",
    ".": "x\u0307",
    "..": "x\u0308",
    "...": "x\u20db",
    "....": "x\u20dc",
    o: "x\u030a",
    lu: "x\u030c",
    cd: "x\u0311",
    "~~": "x\u034c",
    r: "x\u20d7",
    l: "x\u20d6",
    // below letter
    "_.": "x\u0323",
    "_..": "x\u0324",
    "_o": "x\u0325",
    "_~": "x\u0330",
    "_": "x\u0331",
    "_r": "x\u20ef",
    "_l": "x\u20ee",
  };
  const pair_over_combine = {
    cu: "x\u035dy",
    "-": "x\u035ey",
    "~": "x\u0360y",
    cd: "x\u3610y",
  };
  const pair_under_combine = {
    cu: "x\u035cy",
    r: "x\u0362y",
    "-": "x\u035fy",
  };
  const other_combine = {
    "/": "x\u0338",
    "//": "x\u20eb",
    "|": "x\u20d2",
    "||": "x\u20e6",
  };
  for (const k in combine) {
    r[`${k}`] = combine[k].split("x").join("");
  }
  for (const a of abc) {
    for (const k in combine) {
      r[`${a}${k}`] = combine[k].split("x").join(a);
    }
  }

  for (const k in pair_over_combine) {
    r[`##^${k}`] = pair_over_combine[k].split("x").join("").split("y").join("");
  }
  for (const k in pair_under_combine) {
    r[`##_${k}`] = pair_under_combine[k]
      .split("x")
      .join("")
      .split("y")
      .join("");
  }
  for (const k in other_combine) {
    r[`#${k}`] = other_combine[k].split("x").join("");
  }
  return r;
  // [todo] does doing pairings make the XCompose file too big?
}

export const alphabets = {
  mr: "𝐚,𝐛,𝐜,𝐝,𝐞,𝐟,𝐠,𝐡,𝐢,𝐣,𝐤,𝐥,𝐦,𝐧,𝐨,𝐩,𝐪,𝐫,𝐬,𝐭,𝐮,𝐯,𝐰,𝐱,𝐲,𝐳,𝐀,𝐁,𝐂,𝐃,𝐄,𝐅,𝐆,𝐇,𝐈,𝐉,𝐊,𝐋,𝐌,𝐍,𝐎,𝐏,𝐐,𝐑,𝐒,𝐓,𝐔,𝐕,𝐖,𝐗,𝐘,𝐙,0,1,2,3,4,5,6,7,8,9",
  mi: "𝑎,𝑏,𝑐,𝑑,𝑒,𝑓,𝑔,ℎ,𝑖,𝑗,𝑘,𝑙,𝑚,𝑛,𝑜,𝑝,𝑞,𝑟,𝑠,𝑡,𝑢,𝑣,𝑤,𝑥,𝑦,𝑧,𝐴,𝐵,𝐶,𝐷,𝐸,𝐹,𝐺,𝐻,𝐼,𝐽,𝐾,𝐿,𝑀,𝑁,𝑂,𝑃,𝑄,𝑅,𝑆,𝑇,𝑈,𝑉,𝑊,𝑋,𝑌,𝑍,0,1,2,3,4,5,6,7,8,9",
  mc: "𝒶,𝒷,𝒸,𝒹,ℯ,𝒻,ℊ,𝒽,𝒾,𝒿,𝓀,ℓ,𝓂,𝓃,ℴ,𝓅,𝓆,𝓇,𝓈,𝓉,𝓊,𝓋,𝓌,𝓍,𝓎,𝓏,𝒜,ℬ,𝒞,𝒟,ℰ,ℱ,𝒢,ℋ,ℐ,𝒥,𝒦,ℒ,ℳ,𝒩,𝒪,𝒫,𝒬,ℛ,𝒮,𝒯,𝒰,𝒱,𝒲,𝒳,𝒴,𝒵,0,1,2,3,4,5,6,7,8,9",
  // "ms": '𝗮,𝗯,𝗰,𝗱,𝗲,𝗳,𝗴,𝗵,𝗶,𝗷,𝗸,𝗹,𝗺,𝗻,𝗼,𝗽,𝗾,𝗿,𝘀,𝘁,𝘂,𝘃,𝘄,𝘅,𝘆,𝘇,𝗔,𝗕,𝗖,𝗗,𝗘,𝗙,𝗚,𝗛,𝗜,𝗝,𝗞,𝗟,𝗠,𝗡,𝗢,𝗣,𝗤,𝗥,𝗦,𝗧,𝗨,𝗩,𝗪,𝗫,𝗬,𝗭,0,1,2,3,4,5,6,7,8,9', // too similar to ascii style
  mf: "𝔞,𝔟,𝔠,𝔡,𝔢,𝔣,𝔤,𝔥,𝔦,𝔧,𝔨,𝔩,𝔪,𝔫,𝔬,𝔭,𝔮,𝔯,𝔰,𝔱,𝔲,𝔳,𝔴,𝔵,𝔶,𝔷,𝔄,𝔅,ℭ,𝔇,𝔈,𝔉,𝔊,ℌ,ℑ,𝔍,𝔎,𝔏,𝔐,𝔑,𝔒,𝔓,𝔔,ℜ,𝔖,𝔗,𝔘,𝔙,𝔚,𝔛,𝔜,ℨ,0,1,2,3,4,5,6,7,8,9",
  mb: "𝕒,𝕓,𝕔,𝕕,𝕖,𝕗,𝕘,𝕙,𝕚,𝕛,𝕜,𝕝,𝕞,𝕟,𝕠,𝕡,𝕢,𝕣,𝕤,𝕥,𝕦,𝕧,𝕨,𝕩,𝕪,𝕫,𝔸,𝔹,ℂ,𝔻,𝔼,𝔽,𝔾,ℍ,𝕀,𝕁,𝕂,𝕃,𝕄,ℕ,𝕆,ℙ,ℚ,ℝ,𝕊,𝕋,𝕌,𝕍,𝕎,𝕏,𝕐,ℤ,𝟘,𝟙,𝟚,𝟛,𝟜,𝟝,𝟞,𝟟,𝟠,𝟡", // [todo] fix numbers
};

export const arrow_sets = {
  "": {
    r: "→", l: "←", u: "↑", d: "↓", lr: "↔", ud: "↕", rr: "⟶",
    // ll: "⟵"
  },
  "-": {
    r: "→",
    l: "←",
    u: "↑",
    d: "↓",
    lr: "↔",
    ud: "↕",
    rr: "⟶",
    ll: "⟵",
    llrr: "⟷",
    ul: "↖︎",
    ur: "↗",
    dr: "↘︎",
    dl: "↙",
  },
  mt: { r: "↦", l: "↤", u: "↥", d: "↧", rr: "⟼", ll: "⟻" },

  l: {
    // r: "<",
    // l: ">",
    re: "≤", le: "≥", u: "∨", d: "∧", uu: "⋁", dd: "⋀",
    rn: "≮", ln: "≯", rne: '≰', lne: '≱',
  },
  s: {
    r: "⊏",
    l: "⊐",
    re: "⊑",
    rne: '⋢',
    le: "⊒",
    lne: '⋣',
    u: "⊔",
    d: "⊓",
    uu: "⨆",
    dd: "⨅",
    ul: "↰",
    ur: "↱",
    dl: "↲",
    dr: "↳",
    rd: "↴",
  },
  c: {
    r: "⊂",
    l: "⊃",
    re: "⊆",
    le: "⊇",
    u: "∪",
    d: "∩",
    uu: "⋃",
    dd: "⋂",
    nr: "⊄",
    nl: "⊅",
    rne: "⊈",
    lne: "⊉",
  },
  h: {
    l: "↼",
    lu: "↼",
    r: "⇀",
    ru: "⇀",
    u: "↾",
    ur: "↾",
    d: "⇂",
    dr: "⇂",
    ld: "↽",
    ul: "↿",
    rd: "⇁",
    dl: "⇃",
  },
  "=": {
    l: "⇐",
    u: "⇑",
    r: "⇒",
    d: "⇓",
    lr: "⇔",
    le: "⇚",
    re: "⇛",
    ud: "⇕",
    ul: "⇖",
    ur: "⇗",
    dr: "⇘",
    dl: "⇙",
    rr: "⟹",
    ll: "⟸",
    llrr: "⟺",
    "mtl": "⤆", "mt": "⤇",
  },
  "n=": {
    l: "⇍",
    lr: "⇎",
    r: "⇏",
  },
  e: { l: "↞", r: "↠", u: "↟", d: "↡" },
  hp: { l: "↩", r: "↪", d: "↷", "ul": "⤣", "ur": "⤤", "dr": "⤥", "dl": "⤦" },
  lt: { r: "↝", l: "↜" },
  mo: { l: "↢", r: "↣" },
  f: { l: "⥢", r: "⥤", u: "⥣", d: "⥥" },
  "z": { r: "⇝", l: "⇜", lr: "↭", d: "↯", rr: "⟿" },
  p: { l: "⇦", u: "⇧", r: "⇨", d: "⇩", mt: "⇰", ud: "⇳" },
  g: { u: "⇈", d: "⇊", l: "⇇", r: "⇉", rr: "⇶" },
  j: { u: "⇅", d: "⇵", l: "⇆", r: "⇄" },
  k: { u: "⇡", d: "⇣", l: "⇠", r: "⇢" },
  x: { u: "⤧", "r": "⤨", d: "⤩", l: "⤪" },
  y: { r: "⥼", l: "⥽", d: "⥾", u: "⥿" },
};

const arrow_map = {
  u: "↑",
  l: "←",
  r: "→",
  "d": "↓",
};

export const my_translations = {};


mkCombine(my_translations);

for (const a in arrow_sets) {
  for (const x in arrow_sets[a]) {
    my_translations[a + x] = arrow_sets[a][x];
    let xx = x;
    for (const m in arrow_map) {
      xx = xx.split(m).join(arrow_map[m]);
    }
    my_translations[a + xx] = arrow_sets[a][x];
  }
}

for (const a in alphabets) {
  const ABC = alphabets[a].split(",");
  for (let i = 0; i < abc.length; i++) {
    my_translations[a + abc[i]] = ABC[i];
  }
}

for (const k in custom_translations) {
  my_translations[k] = custom_translations[k];
}

export const translations = { ...lts, ...my_translations }
