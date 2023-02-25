let juegos = ["Mario", "Zelda", "Metroid", "Chromo"];

console.log(`Largo: ${juegos?.length}`);
let primero = juegos[0];
let ultimo = juegos[juegos?.length - 1];
console.log({ primero, ultimo });

juegos?.forEach((elemento, indice, arr) => {
  console.log(elemento, indice, arr);
});

let nuevalongitud = juegos?.push("F-Zero");
console.log(nuevalongitud);

let prueba = [...juegos, "holi"];
console.log(prueba);

let nuevaLongitudes = juegos?.unshift("Fireee");
console.log({ nuevaLongitudes, juegos });

let _prueba = ["holii2", ...juegos];
console.log(_prueba);

let pos = 1;

let juegosBorrados = juegos?.splice(pos, 2);
console?.log(juegosBorrados);

let metroidIndex = 
