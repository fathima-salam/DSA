function countZero(num){
    if(num === 0)return 0;
    function helper(n){
        if(n === 0)return 0;
        let lastDIgit = (n % 10 === 0) ? 1: 0;
        return lastDIgit + helper(Math.floor(n/10));
    }
    return helper(num);
}

console.log(countZero(108019000));