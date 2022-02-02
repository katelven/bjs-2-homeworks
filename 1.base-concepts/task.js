"use strict";
function solveEquation(a, b, c) {
  let arr = [];

  let x1;
  let x2;
  let d = b**2 - 4*a*c;
  
  if(d > 0){
    x1 = (-b + Math.sqrt(d))/(2*a);
    x2 = (-b - Math.sqrt(d))/(2*a);
    arr.push(x1,x2);
  } else if(d === 0){
    x1 = -b/2*a;
    arr.push(x1);
   } 
    return arr; 
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let percentCheck = Number(percent);
  let contributionCheck = Number(contribution);
  let amountCheck = Number(amount);

  if (percentCheck != Number(percent)) {
    totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
    return totalAmount;
  } else if (contributionCheck != Number(contribution)) {
    totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
    return totalAmount;
  } else if (amountCheck != Number(amount)) {
    totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
    return totalAmount;
  } 
    let credit = amount - contribution;
    let month = date.getMonth();
    let year = date.getFullYear();
    let now = new Date(Date.now());
    let nowMonth = now.getMonth();
    let nowYear = now.getFullYear();
    let monthTest = (year-nowYear)*12+(month-nowMonth);
    let total = credit * (percent/12/100 + (percent/12/100 / (((1 + percent/12/100)**monthTest - 1))));
    totalAmount = total * monthTest;

    return Number(totalAmount.toFixed(2));
}
