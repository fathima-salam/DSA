function linearSearch(array,target){
    for(let i=0;i<array.length;i++){
        if(array[i]===target){
            return i;
        }
    }
    return ;
}
let arr = [10, 20, 30, 40, 50], target = 30;
console.log(linearSearch(arr,target));