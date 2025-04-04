// GENERO DEI NUMMERI RANDOM PER L'UTENTE E PER IL COMPUTER

// console.log(randomUser);

const randomPc = Math.floor(Math.random() * 7);

console.log("randomPc", randomPc);

const randomUser = Math.floor(Math.random() * 7);
console.log("randomUser", randomUser);

let outputText = "user vince";

if (randomPc >= randomUser) {
  outputText = "Pc vince";
}

console.log(outputText);
