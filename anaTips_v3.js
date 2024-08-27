let facturi=[22,295,176,440,37,105,10,1100,86,52], tips=[], totals=[];

function calcTip(sumConsum){
  return sumConsum>=50 && sumConsum <=300 ? sumConsum*0.15 : sumConsum*0.20;
}
for( let i=0; i<facturi.length; i++){
  let tip=calcTip(facturi[i]);
  tips.push(tip);
  totals.push(tip+facturi[i]);
}
console.log(`All tips: ${tips}`);
console.log(`All bils (Total+Tips): ${totals}`);

function calcAverage(arr){
  let sum=arr.reduce((accumulator, currentValue)=> accumulator+currentValue);
  return sum/arr.length;
}
console.log(`Total average: ${calcAverage(totals)}`);


