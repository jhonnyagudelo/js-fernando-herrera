function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}

const saludar2 = function(nombre) {
  console.log(`Hola ${nombre}`);
};

const salud = (nombre) => {
  console.log(nombre);
};

function getAleatorio() {
  return Math.random();
}

saludar("jhonny");

const getAleatorio2 = () => Math.random();

console.log(getAleatorio2());
