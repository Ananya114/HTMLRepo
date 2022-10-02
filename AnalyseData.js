function analyseData(data){
    return new Promise((resolve, reject)=>{
        if (Number.isInteger(data)){
            if (data%2!=0){
                setTimeout(()=>{
                    console.log("Odd");
                    resolve();
                }, 1000)
            }
            else{
                setTimeout(()=>{
                    reject("Even");
                }, 2000)
            }
        }
        else{
            reject("Error");
        }
    }
    )
}
analyseData(4).catch((err)=>{console.log(err);});