function bubbleSort(arr){
    let n= arr.length;
    let half= Math.floor(n/2);
    for(let i=0;i<half;i++){
        for(let j=0;j< half-i-1;j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
        }
    }
return arr;}

let arr = [9, 7, 5, 3, 2, 8, 1, 0];
console.log(bubbleSort(arr));
