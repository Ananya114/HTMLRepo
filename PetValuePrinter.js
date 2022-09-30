function printPairs(obj,name,value){
    obj[name]=value;
    return obj;
}
console.log(printPairs({piano:500},"Brutus",400));