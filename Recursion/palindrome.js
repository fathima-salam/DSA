function palindrome(num){
    function helper(num){
        if(num<10)return String(num);
        return num%10 + helper(Math.floor(num/10));
    }
    return num === Number(helper(num));
}
console.log(palindrome(121));