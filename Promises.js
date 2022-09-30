add=(a,b)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{console.log(a+b);}, 1000);
        resolve();
    })
}
mult=(a,b)=>{
    return new Promise((resolve, reject)=>{
        let errorHere=true;
        if(!errorHere){
            setTimeout(()=>{console.log(a*b);}, 1000);
            resolve();
        }
        else{
            reject("Error occured here");
        }
        })
    }
div=(a,b)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{console.log(a/b);}, 1000);
        resolve();
    })
}
mult(3,2).then(add(3,2)).then(div(3,2)).catch((err)=>{console.log("Exception: "+err)});