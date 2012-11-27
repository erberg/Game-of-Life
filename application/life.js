/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var Loop = {};
var Board = {};
Loop.fps = 20;
Board.units=100;
var canvas = document.getElementById('lifeCanvas');
if (canvas.getContext){var context = canvas.getContext("2d");}


$(document).ready(function()
{
   initBoard();
   Loop.draw();
   setInterval(Loop.run, 1000 / Loop.fps);
});

function initBoard()
{
        var array=[];
        Board.elementwidth=canvas.width/Board.units;
        Board.elementheight=canvas.height/Board.units;
        for(x=0;x<Board.units;x++)
            {
            array[x]=[];
            for(y=0;y<=Board.units;y++)
                {  
                array[x][y]=Math.round(Math.random());
                }
            }
        Board.array=array;
};

Loop.draw = function() {

        for(x=0;x<Board.units;x++)
            {
            for(y=0;y<=Board.units;y++)
                {
                if(Board.array[x][y]==1)
                    {
                    //r=Math.floor((Math.random()*255));
                    //g=Math.floor((Math.random()*255));
                    //b=Math.floor((Math.random()*255));
                    //context.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
                    context.fillStyle = 'rgb(100,100,100)';
                    context.fillRect (x*Board.elementwidth, y*Board.elementheight , Board.elementwidth, Board.elementheight);
                    }
                 else
                    {
                    context.fillStyle = 'rgb(0,0,0)';
                    context.fillRect (x*Board.elementwidth, y*Board.elementheight , Board.elementwidth, Board.elementheight);}
                    }
            
                }
};
Loop.update = function() {
                var sumNeighbors;
                var nextgenArray=[];
                for(x=0;x<Board.units;x++)
                {
                nextgenArray[x]=[];
                for(y=0;y<=Board.units;y++)
                {
                        sumNeighbors=0;
                        var xplus=x+1;
                        var xmin=x-1;
                        var yplus=y+1;
                        var ymin=y-1;
                        
                        if(xplus<Board.units){xplus=1;} else xplus=0;
                        if(xmin>=0){xmin=1;} else xmin=0;
                        if(yplus<Board.units){yplus=1;} else yplus=0;
                        if(ymin>=0){ymin=1;} else ymin=0;
                        
                        if(xplus==1) sumNeighbors+=Board.array[x+1][y]; 
                        if(xplus==1&&ymin==1) sumNeighbors+=Board.array[x+1][y-1];
                        if(xplus==1&&yplus==1) sumNeighbors+=Board.array[x+1][y+1];
                        if(ymin==1) sumNeighbors+=Board.array[x][y-1];
                        if(yplus==1) sumNeighbors+=Board.array[x][y+1];
                        if(ymin==1&&xmin==1) sumNeighbors+=Board.array[x-1][y-1];
                        if(xmin==1) sumNeighbors+=Board.array[x-1][y];
                        if(xmin==1&&yplus==1) sumNeighbors+=Board.array[x-1][y+1];      
                    
                    if(Board.array[x][y]==1 && sumNeighbors<2){nextgenArray[x][y]=0;}
                    else if(Board.array[x][y]==1&&sumNeighbors<=3){nextgenArray[x][y]=1;}
                    else if(Board.array[x][y]==0&&sumNeighbors==3){nextgenArray[x][y]=1;}
                    else if(Board.array[x][y]==1&&sumNeighbors<=8){nextgenArray[x][y]=0;}
                    else nextgenArray[x][y]=Board.array[x][y];
                }
            
                }
                
                Board.array=nextgenArray;   

};

Loop.run = function() {
  Loop.update();
  Loop.draw();
};


