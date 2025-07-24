function max(array){
    let max = -1;
    for(let i=0;i<array.length;i++){
        if(array[i] > max){
            max = array[i];
        }
    }
    return max;
}
let arr = [12, 5, 20, 8, 15];
console.log(max(arr));