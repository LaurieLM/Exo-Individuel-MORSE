// Etape 1 : Retourner un tableau de caractères
let stringLatinTest = "Hello, World";

getLatinCharacterList = (text) => {
  return text.split("");
};

getLatinCharacterList(stringLatinTest);
console.log(getLatinCharacterList(stringLatinTest));

// Etape 2 : Correspondance Alphabet Latin -> Alphabet Morse
const latinToMorse = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  " ": "/",
};

let charactersLatinTest = "A";
translateLatinCharacter = (charactersLatin) => {
  return latinToMorse[charactersLatin];
};

translateLatinCharacter(charactersLatinTest);
console.log(translateLatinCharacter(charactersLatinTest));

// Etape 3 : Correspondance Alphabet Latin -> Alphabet Morse pour une phrase entière
stringLatinTest = "HELLO WORLD";
encode = (text) => {
  //Appeler le fonction getLatinCharacterList
  getLatinCharacterList(text);
  console.log(getLatinCharacterList(text));
  //Boucler sur chaque caractère du tableau
  for (let i = 0; i < getLatinCharacterList(text).length; i++) {
    let charLatin = getLatinCharacterList(text)[i];
    translateLatinCharacter(charLatin);
    console.log(translateLatinCharacter(charLatin));
  }
};

encode(stringLatinTest);

// Etape 4 : Correspondance Alphabet Morse -> Alphabet Latin + espace entre les mots
const morseToLatin = {
  "-": "T",
  "--": "M",
  "---": "O",
  "--.": "G",
  "--.-": "Q",
  "--..": "Z",
  "-.": "N",
  "-.-": "K",
  "-.--": "Y",
  "-.-.": "C",
  "-..": "D",
  "-..-": "X",
  "-...": "B",
  ".": "E",
  ".-": "A",
  ".--": "W",
  ".---": "J",
  ".--.": "P",
  ".-.": "R",
  ".-..": "L",
  "..": "I",
  "..-": "U",
  "..-.": "F",
  "...": "S",
  "...-": "V",
  "....": "H",
  "/": " ",
};

let morseTextTest = ".... . .-.. .-.. --- / .-- --- .-. .-.. -..";

// Retourne un tableau de caractères Morse
getMorseCharacterList = (morseText) => {
  return morseText.split(" ");
};

// Traduis un caractère Morse en caractère Latin
translateMorseCharacter = (morseCharacter) => {
  return morseToLatin[morseCharacter];
};

decode = (text) => {
  //Appeler le fonction getMorseCharacterList
  getMorseCharacterList(text);
  console.log(getMorseCharacterList(text));
  //Boucler sur chaque caractère du tableau
  for (let i = 0; i < getMorseCharacterList(text).length; i++) {
    let charMorse = getMorseCharacterList(text)[i];
    translateMorseCharacter(charMorse);
    console.log(translateMorseCharacter(charMorse));
  }
};

decode(morseTextTest);
