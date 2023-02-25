// const crearPersona = (nombre, apellido) => {
//   return {
//     nombre,
//     apellido,
//   };
// };

const crearPersona = (nombre, apellido) => ({ nombre, apellido });
const persona = crearPersona("Jhonny", "Stiven");
console.log(persona);

const imprimeArgumentos = (edad, ...args) => {
  // console.log({ edad, args });
  return args;
};

const [casado, vivo, nombre, apellido] = imprimeArgumentos(
  10,
  true,
  false,
  "Jhonny",
  "Agudelo"
);

console.log({ casado, vivo, nombre, apellido });

let personajes = {
  nombre: "Tony Stark",
  codeName: "IronMan",
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    lng: -118.7,
  },
  trajes: ["Mark I", "Mark V", "HulkBuster"],
  direccion: {
    zip: 1080265,
    ubicacion: "Malibu, California",
  },
  "ultima-pelicula": "Infinity War",
};

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
  console.log({ nombre });
  console.log({ codeName });
  console.log({ vivo });
  console.log({ edad });
  console.log({ trajes });
};

imprimePropiedades(personajes);
