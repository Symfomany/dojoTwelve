function accum(chaine) {
  let reg1 = new RegExp(`[a-z]`, "i");
  let filtreChaine = [...chaine.toLowerCase()].filter(x => reg1.test(x));
  let calcul = "";
  filtreChaine.forEach((element, index) => {
    calcul = calcul + element.toUpperCase() + element.repeat(index) + "-";
  });

  let tiret = calcul.substr(0, calcul.length - 1);
  console.log(tiret);

  //console.log(filtreChaine);
}

let test = accum("§cwA-t__");
// console.log(test);
