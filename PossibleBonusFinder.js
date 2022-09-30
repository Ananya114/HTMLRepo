function possibleBonus(a,b){
    if (b-a>0 && b-a<=6)
    return true
    else
    return false
}
let a=5;
let b=3;
console.log(possibleBonus(a,b));