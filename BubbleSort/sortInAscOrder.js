function bubbleSort(arr){
    let n= arr.length;
    for(let i=0;i<n;i++){
        for(let j=0;j< n-i-1;j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
        }
    }
    return arr;
}

let arr =[ 1,3,2,4,5,4,5,6];
console.log(bubbleSort(arr));
