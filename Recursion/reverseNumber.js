function reverseNumber(num){
    if(num < 10)return String(num);
    return num%10 + reverseNumber(Math.floor(num/10));
}
console.log(Number(reverseNumber(334)));