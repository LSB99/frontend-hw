let s = "When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be."

let change = s.replace(/[aeiouAEIOU]/g,"모");

for(let i=0;i<change.length;i++){
    if(change[i]=="모"){
        console.log(i);
    }
}

