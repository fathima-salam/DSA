function bubbleSort(arr){
    let n= arr.length;
    let count=0;
    for(let i=0;i<n;i++){
        for(let j=0;j< n-i-1;j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                count++;
            }
        }
    }
    return count;;
}

let arr =[ 2,3,4,5,1];
console.log(bubbleSort(arr));
