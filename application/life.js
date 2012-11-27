/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var Loop = {};
var Board = {};
Loop.fps = 25;
Board.units=150;
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
        for(x=0;x<=Board.units;x++)         //Padding added for Adjacent Cell Rules
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

        for(x=1;x<(Board.units-1);x++)
            {
            for(y=1;y<(Board.units-1);y++)
                {
                if(Board.array[x][y]==1)
                    {
                    r=Math.floor((Math.random()*255));
                    g=Math.floor((Math.random()*255));
                    b=Math.floor((Math.random()*255));
                    context.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
                    //context.fillStyle = 'rgb(100,100,100)';
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
                for(x=0;x<=Board.units;x++)
                {
                nextgenArray[x]=[];
                for(y=0;y<=Board.units;y++)
                {
                        if(x>=1&&y>=1&&y<=(Board.units-1)&&x<=(Board.units-1))
                        {
                        sumNeighbors=0;

                        sumNeighbors+=Board.array[x+1][y]; 
                        sumNeighbors+=Board.array[x+1][y-1];
                        sumNeighbors+=Board.array[x+1][y+1];
                        sumNeighbors+=Board.array[x][y-1];
                        sumNeighbors+=Board.array[x][y+1];
                        sumNeighbors+=Board.array[x-1][y-1];
                        sumNeighbors+=Board.array[x-1][y];
                        sumNeighbors+=Board.array[x-1][y+1];      
                    
                        if(Board.array[x][y]==1 && sumNeighbors<2){nextgenArray[x][y]=0;}
                        else if(Board.array[x][y]==1&&sumNeighbors<=3){nextgenArray[x][y]=1;}
                        else if(Board.array[x][y]==0&&sumNeighbors==3){nextgenArray[x][y]=1;}
                        else if(Board.array[x][y]==1&&sumNeighbors<=8){nextgenArray[x][y]=0;}
                        else nextgenArray[x][y]=Board.array[x][y];
                        }else nextgenArray[x][y]=0;
                }
            
                }
                
                Board.array=nextgenArray;   

};

Loop.run = function() {
  Loop.update();
  Loop.draw();
};


