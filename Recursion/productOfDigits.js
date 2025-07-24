function productOfDigits(num){
    if(num===0) return 1;
    return num%10 * productOfDigits(Math.floor(num/10));
}

console.log(productOfDigits(11));