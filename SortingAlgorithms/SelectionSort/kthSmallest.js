function kThsmallest(arr,k){
    let n=arr.length;
    for(let i=0;i<n-1;i++){
        let minIndex = i;
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j;
            }
        }
        if(minIndex !== i){
            [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]];
        }
    }
    return arr[k-1];
}

let arr = [12, 3, 5, 7, 19];
console.log(kThsmallest(arr,3));