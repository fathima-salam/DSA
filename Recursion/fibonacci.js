function fibo(num){
    if(num === 0)return 0;
    if(num === 1)return 1;
    return fibo(num-1)+fibo(num-2);
}
function printFIbo(num){
    for(let i=0;i<num;i++){
        console.log(fibo(i));
    }
}

printFIbo(7);