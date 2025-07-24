function linearSearch(array,target){
    let count=0
    for(let i=0;i<array.length;i++){
        if(array[i]===target){
            count++;
        }
    }
    return count;
}
let arr = [5, 7, 5, 5, 9], target = 5;
console.log(linearSearch(arr,target));