function selectionSort(arr){
    let n=arr.length;
    for(let i=0;i<n-1;i+=2){
        let minIndex = i;
        for(let j = i+2 ; j < n ; j+=2 ){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        if(minIndex !== i){
            [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]];
        }
    }
    return arr;
}

let array = [5, 99, 3, 10, 8, 22, 1, 7];
console.log(selectionSort(array))