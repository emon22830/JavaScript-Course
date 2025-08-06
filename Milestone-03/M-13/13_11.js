//Practise Problem -01
var balance = 1000;
var orangePrice = 400;
var applePrice = 300;

var totalBill = orangePrice+applePrice;

var returnMoney = balance - totalBill;

console.log(returnMoney);


//practise problem-02
var mathematics = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 35.45;
var bangla = 99.50;
var totalSubjects = 5;

var allSubjectsMarks = mathematics+biology+chemistry+physics+bangla;
var averageMarks = allSubjectsMarks/totalSubjects;

console.log(averageMarks.toFixed(2));


//practise problem-03
var num = 119;
var dividedNumber = 119%5;
console.log(dividedNumber);

//
// const a = isNaN('11');
// console.log(a);

const a = isNaN(2-10);
console.log(a);

