function seclargest(array){
    let largest = -1;
    let seclarget = -1

    for(let i=0;i<array.length;i++){
        if(array[i] > largest){
            seclarget = largest;
            largest = array[i];
        }else if(array[i] > seclarget && array[i] != largest){
            seclarget = array[i];
        }
    }
    return seclarget
}
let arr = [12, 5, 20, 8, 15,100];
console.log(seclargest(arr));