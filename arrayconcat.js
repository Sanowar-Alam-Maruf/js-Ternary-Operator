// 01
let nam1=[10,20,30,40,50,60];
let nam2=[5,15,25,35,45,55];
let totalNum1=nam1.concat(nam2); // 01
let totalNum2=[...nam1,...nam2]; // 02
console.log(totalNum1);
console.log(totalNum2);

//parat 02
let numArray=['A','B','C','D','E','F'];
let num='G'
let newArray=numArray.concat(num);
console.log(newArray);

//part 03
let nameAr=['rafik','salam','rabbi','raju','onik'];
let joinName=nameAr.join(" ");
let joinName2=nameAr.join("+");
let joinName3=nameAr.join(",");
let joinName4=nameAr.join("|");
console.log(joinName4);

// part 04
let reading='JavaScript arrays come with a rich set of built-in methods that facilitate various operations';
let newRead=reading.split()
console.log(newRead);

// 05 
let texts='JavaScript arrays come with a rich';
let newTexts=texts.split('') . reverse(). join('')
console.log(newTexts);
