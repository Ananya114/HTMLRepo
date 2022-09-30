function mergeSort(arr1,arr2){
    return [...new Set((arr1.concat(arr2)).sort())];
}
arr1=[1,2,3,4,5];
arr2=[9,8,1,2,3];
console.log(mergeSort(arr1,arr2));