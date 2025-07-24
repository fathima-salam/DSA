function sumOfOdd(n){
    if(n === 0) return 0;
    if(n%2!==0){
        return n+sumOfOdd(n-1);
    }else{
        return sumOfOdd(n-1);
    }
}
console.log(sumOfOdd(5));