/* 
 * Logic Code
 */
var Loop = {};
var Board = {};
Board.fadespeed = "Fast";
Board.color='rgb(100,200,200)';
Board.elementUnit=3;
Loop.fps = 64;
var canvas = document.getElementById('lifeCanvas');
if (canvas.getContext){var context = canvas.getContext("2d");}

$(document).ready(function()
{ 
   $('.play').hide();
   canvas.width=$(window).width();
   canvas.height=$(window).height();
   initBoard();
   Loop.draw();
   Loop.intervalId=setInterval(Loop.run, 1000 / Loop.fps);
});

function initBoard()                                            //Setup Grid As Array
{
        var array=[];
        Board.horizontalUnits=canvas.width/Board.elementUnit;
        Board.verticalUnits=canvas.height/Board.elementUnit;
        for(x=0;x<=Board.horizontalUnits;x++)
            {
            array[x]=[];
            for(y=0;y<=Board.verticalUnits;y++)    
                {  
                array[x][y]=Math.round(Math.random());
                }
            }
        Board.array=array;
        Board.generation=0;
};

Loop.draw = function() {
        Board.generation++;
        Board.displayGeneration();
        Loop.getFade();
        context.fillStyle = Board.color;
        for(x=1;x<(Board.horizontalUnits-1);x++)
            {
            for(y=1;y<(Board.verticalUnits-1);y++)
                {
                if(Board.array[x][y]==1)
                    {
                    if(Board.color=="Lite Brite")
                       {
                        r=Math.floor((Math.random()*255));
                        g=Math.floor((Math.random()*255));
                        b=Math.floor((Math.random()*255));
                        context.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
                       } 
                    context.fillRect(x*Board.elementUnit, y*Board.elementUnit , Board.elementUnit, Board.elementUnit);
                    }
                }
            
            }
};
Loop.update = function() {
    var sumNeighbors;
    var nextgenArray=[];
    for(x=0;x<=Board.horizontalUnits;x++)
    {
    nextgenArray[x]=[];
    for(y=0;y<=Board.verticalUnits;y++)
    {
    if(x>=1&&y>=1&&y<=(Board.verticalUnits-1)&&x<=(Board.horizontalUnits-1))        //Calculations run on smaller grid...
        {
        sumNeighbors=0;

        sumNeighbors+=Board.array[x+1][y];                                          //...so that x++, y++, etc. dont attempt to reach outside array
        sumNeighbors+=Board.array[x+1][y-1];
        sumNeighbors+=Board.array[x+1][y+1];
        sumNeighbors+=Board.array[x][y-1];
        sumNeighbors+=Board.array[x][y+1];
        sumNeighbors+=Board.array[x-1][y-1];
        sumNeighbors+=Board.array[x-1][y];
        sumNeighbors+=Board.array[x-1][y+1];      

        if(Board.array[x][y]==1 && sumNeighbors<2){nextgenArray[x][y]=0;}       //Conway's Rules
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

Loop.getFade = function() {
    if(Board.fadespeed=="None")
    {context.fillStyle = 'rgb(0,0,0)';
    context.fillRect (0, 0, canvas.width-1, canvas.height-1);}
    else if(Board.fadespeed=="Fast")
    {context.fillStyle = 'rgba(0,0,0,.40)';
    context.fillRect (0, 0, canvas.width-1, canvas.height-1);}
    else if(Board.fadespeed=="Medium")
    {context.fillStyle = 'rgba(0,0,0,.20)';
    context.fillRect (0, 0, canvas.width-1, canvas.height-1);}
    else if(Board.fadespeed=="Slow")
    {context.fillStyle = 'rgba(0,0,0,.10)';
    context.fillRect (0, 0, canvas.width-1, canvas.height-1);}
    else if(Board.fadespeed=="Snail")
    {context.fillStyle = 'rgba(0,0,0,.01)';
    context.fillRect (0, 0, canvas.width-1, canvas.height-1);}
            
};

Board.displayGeneration = function(){
    $('.generation').text("Generation " + Board.generation);
};

/* 
 * Link Code below
 */
 
$(function(){$('.gpslink').click(function(){
        $('.gpslink').each(function(){$(this).removeClass("active");});
        Loop.fps=$(this).text(); 
        $(this).addClass("active");
        clearInterval(Loop.intervalId);
        Loop.intervalId=setInterval(Loop.run, 1000 / Loop.fps);
        });});
    
 $(function(){$('.pause').click(function(){
        $(this).hide();
        $('.play').show();
        clearInterval(Loop.intervalId);
        });});   
    
 $(function(){$('.play').click(function(){
        $(this).hide();
        $('.pause').show(); 
        Loop.intervalId=setInterval(Loop.run, 1000 / Loop.fps);
        });}); 
    
$(function(){$('.fadespeed').click(function(){
        $('.fadespeed').each(function(){$(this).removeClass("active");});
        Board.fadespeed=$(this).text();
        $(this).addClass("active");
        });});
    
$(function(){$('.color').click(function(){
        $('.color').each(function(){$(this).removeClass("active");});
        Board.color=$(this).attr('name');
        $(this).addClass("active");
        });});
    
$(function(){$('.repopulate').click(function(){
    initBoard();
    });});

