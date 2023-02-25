let a = 5;
let hoy = new Date();
let dia = hoy.getDay();

if (a > 10) {
  console.log("A es mayo que 10 años");
} else {
  console.log("Es menor de 10 años");
}

console.log("fin del programa");

if (dia === 0) {
  console.log("Martes");
} else if (dia === 1) {
  console.log("Lunes");
} else if (dia === 2) {
  console.log("Martes");
} else {
  console.log("No es lunes ni martes");
}

const diasLetras = {
  0: "Domingo",
  1: "Lunes",
  2: "Martes",
  3: "Miercoles",
  4: "Jueves",
  5: "Viernes",
  6: "Sabado",
};

console.log(diasLetras[0]);
