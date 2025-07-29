function selectionSort(arr){
    let n=arr.length;
    let count = 0;
    for(let i=0;i<n-1;i++){
        let minIndex = i;
        for(let j = i+1 ; j < n ; j++ ){
        count++;
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        if(minIndex !== i){
            [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]];
        }
    }
    return count;
}

let arr = [8, 4, 1, 3];
console.log(selectionSort(arr))