function print(n){
    if(n===0)return 1;
    print(n-1);  
    console.log(n);
}

print(5);