let s = "When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be."

for(let i=0;i<s.length-1;i++){
    
    let t = s.slice(i,i+1);
 
    if(t=='a' || t=='A'){
        console.log(i);
    }

    else if(t=='e' || t=='E'){
        console.log(i);
    }

    else if(t=='i' || t=='I'){
        console.log(i);
    }

    else if(t=='o' || t=='O'){
        console.log(i);
    }

    else if(t=='u' || t=='U'){
        console.log(i);
    }
}




