// Etape 1 : Retourner un tableau de caractères
let stringTest = "HELLO WORLD";

getLatinCharacterList = (text) => {
  return text.split("");
};

getLatinCharacterList(stringTest);
console.log(getLatinCharacterList(stringTest));

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
};

let charactersTest = "A";
translateLatinCharacter = (characters) => {
  return latinToMorse[characters];
};

translateLatinCharacter(charactersTest);
console.log(translateLatinCharacter(charactersTest));
