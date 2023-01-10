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
      break;
    default:
      alert(" Dan korektno unet");
      break;
  }
  
}
