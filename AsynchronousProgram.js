Add=(a,b)=>{
    console.log(a+b);
}
Multiply=(a,b)=>{
    setTimeout(()=>{
        console.log(a*b);
    }, 1000);
}
divide=(a,b)=>{
    console.log(a/b);
}
Add(1,2);
Multiply(3,2);
divide(2,2);