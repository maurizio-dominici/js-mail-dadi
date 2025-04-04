const suffix = "@gmail.com";
const emailList = [
  `maurizio ${suffix}`,
  `federico ${suffix}`,
  `massimo ${suffix}`,
  `andrea ${suffix}`,
  `luca ${suffix}`,
  `antonio ${suffix}`,
  `alessia ${suffix}`,
  `francesca ${suffix}`,
];

const emailUser = prompt("inserisci la tua mail");

// console.table(emailList, typeof emailList);
// console.log(emailUser);

for (let i = 0; i < emailList.length; i++) {
  //   console.log("ciao");

  if (emailUser === emailList[i]) {
    console.log("accesso effettuato");
  }
  //   const currentEmail = emailList[i];
  //   console.table(currentEmail);
}
