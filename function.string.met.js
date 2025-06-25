// length
function len(a) {
    let text=a;
    return (text.length)
}
let res=len('my name is sanowar alam maruf')
console.log(res);

// toUpperCase
function len02(a) {
    let text02=a;
    return (text02.toUpperCase())
}
let res02=len02('sanowar alam maruf')
console.log(res02);

//toLowerCase
function len03(a) {
    let text03=a;
   return (text03.toLowerCase())
}
let res03=len03("SANOWAR ALAM MARUF")
console.log(res03);

//includes
let sentence="The Ternary Operator in Java Script is a shortcut for writing simple if-else statements";
function len04(a) {
    let text04=a;
    return (sentence.includes(text04))
}
let res04=len04('Java')
console.log(res04);

//indexOf
let word='shortcut';
function len05(a) {
    let text05=a;
    return (word.indexOf(text05))
}
let res05=len05('r')
console.log(res05);
