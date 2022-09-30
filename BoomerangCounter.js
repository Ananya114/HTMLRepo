function countBoomerang(arr){
    let count=0;
    for (let i=0;i<arr.length;){
        for (let j=arr.length-1;j>i;){
            let boomerang=true;
            let tempi=i, tempj=j;
            if ((tempj-tempi)%2==0){
                do{
                    if(tempi==tempj){
                        if(arr[tempi]==arr[tempi-1]){
                            boomerang=false;
                            break;
                        }
                        else{
                            boomerang=true;
                            break;
                        }
                    }
                    else{
                        if (arr[tempi]==arr[tempj]){
                            tempi++; tempj--;
                        }
                        else{
                            boomerang=false;
                            break;
                        }
                    }
                }while(tempi<=tempj);
            }
            else
            boomerang=false;
            if(boomerang){
                count++;
                i=tempi-1;
                break;
            }
            else{
                j--;
            }
        }
        i++;
    }
    return count;
}
let arr=[3,7,3,1,-1,1,5,6,5];  
console.log(countBoomerang(arr));