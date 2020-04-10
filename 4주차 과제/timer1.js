
let count = 1;
let id = setInterval(function(){
    console.log(count+"초 후 ", new Date());
    count++;

    if(count>10){
        clearInterval(id);
    }
},1000);


