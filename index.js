const dateTimer = Date.now(); // Date en milliseconds
const aEncoder = "eee";

const alphabetAscii = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  " ",
  ".",
  ",",
  "!",
  "?",
  "-",
  "_",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "+",
  "=",
  "[",
  "]",
  "{",
  "}",
  "|",
  "/",
  "\\",
  ":",
  ";",
  "'",
  '"',
  "<",
  ">",
  "`",
  "~",
  "é",
  "è",
  "ê",
  "à",
  "â",
  "ù",
  "û",
  "ç",
  "ô",
  "î",
  "ï",
  "ë",
  "ä",
  "ö",
  "ü",
  "ÿ",
  "ñ",
  "É",
  "È",
  "Ê",
  "À",
  "Â",
  "Ù",
  "Û",
  "Ç",
  "Ô",
  "Î",
  "Ï",
  "Ë",
  "Ä",
  "Ö",
  "Ü",
  "Ÿ",
  "Ñ",
  "€",
  "£",
  "¥",
  "§",
  "°",
  "µ",
  "¶",
  "•",
  "÷",
  "×",
  "¶",
  "±",
  "½",
  "¼",
  "¾",
  "¿",
  "¡",
  "™",
  "®",
  "©",
  "¢",
  "∞",
  "§",
  "¶"
];

function average(number) {
  const numberOfChar = number.toString().length;
  let sum = 0;

  for (let i = 0; i < numberOfChar; i++) {
    sum += Math.pow(parseInt(number.toString()[i]), 2);
  }

  return sum / numberOfChar;
}

function encode() {
  const multiple = Math.round(average(dateTimer));

  let result = "";
  const msg = aEncoder.split("");
  for (i = 0; i < msg.length; i++) {
    const index = alphabetAscii.indexOf(msg[i]);
    let newIndex = index + (multiple - 1);
    if (newIndex > alphabetAscii.length || newIndex < 0) {
      newIndex = index;
    }
    result += alphabetAscii[newIndex];
  }
  return result;
}

function decode(timeUsedForEncode, encoded) {
  const multiple = Math.round(average(timeUsedForEncode));
  let result = "";
  const msg = encoded.split("");
  for (i = 0; i < msg.length; i++) {
    const index = alphabetAscii.indexOf(msg[i]);
    let newIndex = -((multiple - 1) - index);
    if (newIndex > alphabetAscii.length || newIndex < 0) {
      newIndex = index;
    }
    result += alphabetAscii[newIndex];
  }
  return result;
}

console.log(`Code crypté: ${encode()}`);
console.log("Code décrypté: ", decode(dateTimer, encode()));
