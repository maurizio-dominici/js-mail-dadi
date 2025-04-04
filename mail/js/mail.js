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
let outputText = "Accesso negato";
// console.table(emailList, typeof emailList);
// console.log(emailUser);

for (let i = 0; i < emailList.length; i++) {
  //   console.log("ciao");
  const currentEmail = emailList[i];

  if (emailUser === currentEmail) {
    outputText = alert("Accesso effettuato");
    // console.log("accesso effettuato");
  }
}
console.table(emailList);

console.log(emailUser);
