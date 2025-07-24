function reverseWord(word,left,right){
    if(left>=right)return word;
    [word[left],word[right]]=[word[right],word[left]];
    return reverseWord(word,left+1,right-1);
}
let str="fathima salam";
let result=[];
let words=str.split(" ");
for(let word of words){
    let w=word.split("");
    let res=reverseWord(w,0,word.length-1);
    result.push(res.join(""));
}
console.log(result.join(" "));