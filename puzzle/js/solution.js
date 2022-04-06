

function generate(){
    console.log("generate");
    var n=3;
    var grid=[];
    for (var i=0;i<n;i++){
        grid.push([]);
    }

    //a 'line' is a row or a column or a diagonal
    // a line can be 0 or 1
    // 0 means the line is not blocked  by a hole yet
    // 1 means the line is blocked by a hole

    var numLines=2*n+2;
    var lines=[];
    for(var i=0;i<numLines;i++){
        lines.push(0);
    }
    console.log("lines "+lines);

    //try to set all lines to 1 
    var numHoles=1;
    


    //fill grid
    for(var row=0;row<n;row++){
        for(var col=0;col<n;col++){
            grid[row][col]=row*n+col;
        }
    }

    //show grid    
    for(var row=0;row<n;row++){
        var rowString="";
        for(var col=0;col<n;col++){
            rowString+=""+grid[row][col]+" ";
        }
        console.log(rowString);
    }
   




}