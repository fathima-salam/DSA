function SumofEven(n){
    if(n===0)return 0;
    if(n%2==0){
        return n+SumofEven(n-1);
    }else{
        return SumofEven(n-1);
    }
}

console.log(SumofEven(5));