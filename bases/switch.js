const dia = 5;
switch (dia) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
}

const dia_semana = {
  0: "Domingo",
  1: "Lunes",
  2: "Martes",
};

semana_default = "No es ni lunes, martes o domingo";

const verificar_dia = dia_semana[dia] || semana_default;
console.log(verificar_dia);
