function thirdLargest(array){
    let largest = -1;
    let seclargest = -1;
    let thirdLargest = -1;
    for(let i=0;i<array.length;i++){
        if(array[i] > largest){
            thirdLargest = seclargest;
            seclargest = largest;
            largest = array[i];
        }else if(array[i] > seclargest && array[i] != largest){
            thirdLargest = seclargest;
            seclargest = array[i];
        }else if(array[i] > thirdLargest && array[i]!=seclargest && array[i] != largest){
            thirdLargest =array[i];
        }
    }
    return thirdLargest
}
let arr = [12, 5, 20, 8, 15];
console.log(thirdLargest(arr));