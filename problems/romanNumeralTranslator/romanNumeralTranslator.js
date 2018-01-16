
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var regs = /[IVXLCDM]/;
var re = new RegExp('C,D');

var translateRomanNumeral = function(romanNumeral) {
// TODO: Implement me!
/* START SOLUTION */


var myArray = [];
var myVals = [];
var length = romanNumeral;
var sum = 0;
var none;

for(var k=0; k<romanNumeral.length; k++){


  myArray.push(romanNumeral[k]);
  var strs = romanNumeral[k];
  if(!strs.match(regs)){
  //if(re.test(romanNumeral[k])){
  //if(romanNumeral[k].match(regs)){
    console.log("*************  REGS");
    console.log(romanNumeral[k]);
    return null;
  }
}
//console.log(myArray);
for(var t=0; t<myArray.length; t++){

  myVals[t] = DIGIT_VALUES[myArray[t]];
  //console.log(DIGIT_VALUES);
}
//console.log(myVals);
if(myVals[0] < myVals[1]){

  for(var z=1; z<myVals.length; z++){
    sum += myVals[z];
  }

  sum -= myVals[0];
}else{
  for(var z=0; z<myVals.length; z++){
    sum += myVals[z];
  }

}



return sum;
  /* END SOLUTION */
};



//var myTrans = translateRomanNumeral('CX');
var myTrans = translateRomanNumeral;

//myTrans('XL');
console.log(myTrans('XL'));
console.log(myTrans('XX'));
console.log(myTrans('LX'));
console.log(myTrans('III'));
console.log(myTrans('IV'));
console.log(myTrans('IC'));
console.log(myTrans('IU'));
console.log();
