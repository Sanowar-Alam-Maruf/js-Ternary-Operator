//part 01
let nam1=[10,20,30,40,50,60];
function nam2(a,b,c,d,e,f) {
   let nam3=[a,b,c,d,e,f]
    return [...nam1,...nam3]
}
let total=nam2(5,15,25,35,45,55)
console.log(total);


//part 02
let numArray=['A','B','C','D','E','F'];
function gug(a) {
    return numArray.concat(a);
}
let res=gug('G')
console.log(res);
