function print(n){
    if(n===0)return 1;
    console.log(n);
    return print(n-1);
}
print(8);