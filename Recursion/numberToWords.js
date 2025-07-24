function NumberToWords(num){
    let words = ["Zero","one","two","three","four","five", "six", "seven", "eight", "nine"];
    if(num<10){
        console.log( words[num]);
        return;
    }
    NumberToWords(Math.floor(num/10));
    console.log(words[num%10]);
}

NumberToWords(0);