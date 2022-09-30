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
//performing 1+2*3/2 sync=4.5 async=
Add(1,2);
Multiply(3,2);
divide(2,2);