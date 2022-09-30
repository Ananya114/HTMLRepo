const x=4;
console.log(addAll(x));
function addAll(x){
    var sum=0;
    for (let i=1;i<=x;i++){
        sum+=i;
    }
    return sum;
}