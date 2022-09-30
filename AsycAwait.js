add=(a,b)=>{
    setTimeout(()=>{
        console.log(a+b);
    }, 2000)
}
mult=(a,b)=>{
    setTimeout(()=>{
        console.log(a*b);
    }, 1000)
}
div=(a,b)=>{
    setTimeout(()=>{
        console.log(a/b);
    }, 1000)
}

async function menu(){
    await add(1,2);
    await mult(3,2);
    await div(2,2);
}

menu();