const videoJuegos = ["Mario3", " MegaMan", "Chrono trigger"];
console.log({ videoJuegos });
console.log(videoJuegos[0]);

let arregloCosas = [
  true,
  123,
  "Fernando",
  1 + 2,
  function() { },
  () => { },
  { a: 1 },
  ["X", "Megamen", "zero", "Dr,Light"],
];

// console.log({ arregloCosas });
// console.log(arregloCosas[2]);
console.log(arregloCosas[7][3]);
console.log(arregloCosas[7]?.map((i) => i));
