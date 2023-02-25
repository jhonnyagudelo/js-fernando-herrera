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
console.log(`Nombre: ${personajes?.nombre}`);
console.log("Nombre", personajes["nombre"]);
console.log(`Edad ${personajes?.edad}`);
console.log(`Corrs ${personajes?.coords?.lat}`);
console.log(`No. Trajes ${personajes?.trajes.length}`);
console.log(`No. Trajes ${personajes?.trajes[personajes.trajes.length - 1]}`);

const x = "vivo";
console.log("Vivo", personajes[x]);
console.log("Ultimo film", personajes["ultima-pelicula"]);

delete personajes?.edad;
console.log(personajes);

const entriesPares = Object?.entries(personajes);
console.log(entriesPares);

Object.freeze(personajes);

personajes.dinero = 1000000;
