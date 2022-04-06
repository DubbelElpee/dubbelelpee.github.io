var ar=[44,-77,5];


function count10(){
    console.clear();
   
 
    for(var i=0;i<10;i++){
       
        console.log(i+1);
       
    }

    for(var i=0;i<ar.length; i++){
        if(ar[i] > 0) { ar[i] = "cat"; }	else { ar[i] = "dog"; }

    }
    console.log(ar);
}

function countDown10(){
    console.clear();
    for(var i=0;i<10;i++){
        
        console.log(20-i);
    }
}

function count20(){
    console.clear();
    for(var i=0;i<10;i++){
        
        console.log(2*i+2);
    }
}

function count100_90(){
    console.clear();
    for(var i=0;i<10;i++){
        console.log(100-i);
    }
}