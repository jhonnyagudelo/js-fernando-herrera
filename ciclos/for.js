const heroes = ["Batman", "Superman", "Mujer maravilla", "Aquaman"];

console.warn("For tradicional");

for (let i = 0; i < heroes?.length; i++) {
  const element = heroes[i];
  console.log(element);
}

console.warn("For in");
for (const i in heroes) {
  if (heroes.hasOwnProperty(i)) {
    const element = heroes[i];
    console.log(element);
  }
}
console.warn("For of");
for (const heroe of heroes) {
  console.log(heroe);
}
