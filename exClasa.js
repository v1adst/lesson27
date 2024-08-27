//Ex.4 Calculati și afișați suma numerelor de la 1 la 10 (folosind metoda .reduce()).
let array=[];
for (let i=0; i<=10; i++){
  array.push(i);
}
console.log(`Suma numerelor de la 1-10 este: ${array.reduce((ac,cv)=> ac+cv)}`);

console.log('-----');

//Ex.5 Calculati și afișați suma numerelor pare între 10 și 30 (folosind metoda .reduce()).
let array2=[];
for (let i=10; i<=30; i++){
  if (i%2===0){
    array2.push(i);
  }
}
console.log(array2);
console.log(`Suma numerelor pare de la 10-30 este: ${array2.reduce((ac,cv)=> ac+cv)}`);

console.log('-----');

//Ex.6 Calculați și afișați media tuturor numerelor dintr-un array (folosind metoda .reduce()).
const array3=[];
for (let i=1; i<=10; i++){
  let number=Math.floor(Math.random()*2000);
  array3.push(number);
}
console.log(array3);
console.log(`Media tuturor numere este: ${array3.reduce((ac,cv)=> ac+cv)/array3.length}`);