const suffix = "@gmail.com";

const emailList = [
  `maurizio${suffix}`,
  `federico${suffix}`,
  `massimo${suffix}`,
  `andrea${suffix}`,
  `luca${suffix}`,
  `antonio${suffix}`,
  `alessia${suffix}`,
  `francesca${suffix}`,
];

const emailUser = prompt("inserisci la tua mail");
let outputText = "";
// console.table(emailList, typeof emailList);
// console.log(emailUser);

for (let i = 0; i < emailList.length; i++) {
  //   console.log("ciao");
  const currentEmail = emailList[i];

  if (emailUser === currentEmail) {
    outputText = alert("accesso effettuato");
    // console.log("accesso effettuato");
  } else {
    outputText = alert("accesso negato");
  }
}

console.table(emailList);
console.log(outputText);
