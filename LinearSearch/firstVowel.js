function firstVowel(str,v){
    let vowels = "aeiou";
    for(let x of str){
        if(vowels.includes(x))return x;
    }
    return -1;
}

console.log(firstVowel("brocamp","o"));



