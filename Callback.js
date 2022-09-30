add=(a,b)=>{
    console.log(a+b);
}
mult=(a,b,callback)=>{
    setTimeout(()=>{
        console.log(a*b);
        callback(a,b);
    }, 1000);
}
div=(a,b)=>{
    console.log(a/b);
}
mult(3,2,
    function(){
        add(3,2);
        div(3,2);
    });