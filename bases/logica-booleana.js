const regresaTrue = () => {
  console.log("regresa true");
  return true;
};

const regresaFalse = () => {
  console.log("regresa false");
  return false;
};

console.warn("Not o la negacion");

console.log(true);
console.log(!true);
console.log(!false);

console.log(!regresaFalse());

console.warn("And");

console.log(true && true); //true;
console.log(true && !false); //true;

console.warn("=========");

console.log(regresaFalse() && regresaTrue()); //false;
console.log(regresaTrue() && regresaFalse()); //false;

console.warn("==== && =====");
regresaFalse() && regresaTrue();

console.warn("==== OR ====");
console.log(true || false); //true
console.log(false || false); //false
console.log(regresaTrue() || regresaFalse()); //false;
