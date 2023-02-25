const elMayor = (a, b) => (a > b ? a : b);

const membresia = (miembro) => (miembro ? "2 dolares" : "10 dolares");

console.log(elMayor(20, 15));
console.log(membresia(true));
console.log(membresia(false));

const amigo = false;
const amigosArr = ["Peter", "Loki", amigo ? "Thor" : "Hulk"];
console.log(amigosArr);

const nota = 65;
const grado =
  nota >= 95
    ? "A+"
    : nota >= 90
      ? "A"
      : nota >= 85
        ? "B+"
        : nota >= 75
          ? "B"
          : nota >= 70
            ? "C+"
            : nota >= 65
              ? "C"
              : "F";

console.log({ nota, grado });

const grado_nota = {
  95: "A+",
  90: "A",
  85: "B+",
  80: "B",
  75: "C+",
  70: "C",
  65: "F",
};

const verificar = grado_nota[nota];
console.log(verificar);
