function vikendIliNe() {
  // program using switch statement
  let dan = document.getElementById("dan").value.trim().toLowerCase();
  let result = document.getElementById("result");

  switch (dan) {
    case "ponedeljak":
    case "utorak":
    case "sreda":
    case "cetvrtak":
    case "petak":
      result.innerHTML += ` Dan : ${dan} nije vikend`;
      break;
    case "nedelja":
    case "subota":
      result.innerHTML += ` Dan : ${dan} je vikend`;
    default:
      result.innerHTML += ` Dan : ${dan} korektno unet`;
      break;
  }
  console.log(`The value is ${a}`);
}
