function calculateInterest(principal, rate, years){
  let sum=principal;
  for (let i=0; i<=years; i++){
    sum+=sum*rate;
  }
  return sum;
}
function calculateMonthlyContribution(contribution, rate, years){
  let sumContrib=0;
  let rataLunara=rate/12;
  let totalLuni=years*12;
  for(let i=0; i<=totalLuni; i++){
    sumContrib+=contribution;
    sumContrib+=sumContrib*rataLunara;
  }
  return sumContrib;
}
function printSavings(name, principal, rate, years, contribution) {
console.log(`Suma acumulată în cont în urma aplicării dobânzii compuse anuale: ${calculateInterest(principal, rate, years).toFixed(2)}`);
console.log(`Suma acumulată în cont la efectuarea contribuțiilor lunare (+ dobânda compusă pentru fiecare lună): ${calculateMonthlyContribution(contribution, rate, years).toFixed(2)}`);
console.log(`${name}, suma totală pe care o vei avea în cont după ${years} ani este ${calculateMonthlyContribution(contribution, rate, years).toFixed(2)} lei.`);
}
printSavings('Ioana', 1000, 0.05, 10, 50);