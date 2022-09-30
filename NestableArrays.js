function nestable(arr1, arr2){
    if(Math.min(...arr1)>Math.min(...arr2) && Math.max(...arr1)<Math.max(...arr2)){
        return true;
    }
    else{
        return false;
    }
}

const arr1=[2, 5, 1, 4, 5];
const arr2=[4, 0, 4, 5, 6]
console.log(nestable(arr1, arr2));