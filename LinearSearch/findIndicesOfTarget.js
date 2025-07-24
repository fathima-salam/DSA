function linearSearch(array,target){
    let arr=[];
    for(let i=0;i<array.length;i++){
        if(array[i]===target){
            arr.push(i);
        }
    }
    return arr;
}
let arr = [1, 3, 7, 3, 5], target = 3;
console.log(linearSearch(arr,target));