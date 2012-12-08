<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Conway's Game of Life - Web Application by Eric R. Berg</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Le styles -->
    <link href="/application/bootstrap/css/bootstrap.css" rel="stylesheet">
    <link href="">
    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <!-- Fav and touch icons -->
    <link rel="shortcut icon" href="/application/bootstrap/ico/favicon.ico">
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/application/bootstrap/ico/apple-touch-icon-144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/application/bootstrap/ico/apple-touch-icon-114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/application/bootstrap/ico/apple-touch-icon-72-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="/application/bootstrap/ico/apple-touch-icon-57-precomposed.png">
  </head>

  <body style="overflow:hidden;width:100%;height:100%;background-color:black;">

    <div class="navbar navbar-inverse navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container">
          <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </a>
          <a class="brand" href="#">Game of Life</a>
          <div class="nav-collapse collapse">
          <ul class="nav">
              <li class="dropdown" id="menu-gps">
                        <a href="#menu-gps" class="dropdown-toggle" data-toggle="dropdown">Generations Per Second<b class="caret"></b></a>
                        <ul class="dropdown-menu gps">
                          <li><a href="#" class="gpslink">1</a></li>
                          <li><a href="#" class="gpslink">2</a></li>
                          <li><a href="#" class="gpslink">4</a></li>
                          <li><a href="#" class="gpslink">8</a></li>
                          <li><a href="#" class="gpslink">16</a></li>
                          <li><a href="#" class="gpslink">32</a></li>
                          <li><a href="#" class="gpslink active">64</a></li>
                          <li><a href="#" class="gpslink">128</a></li>
                        </ul>
              </li>
              <li class="dropdown" id="menu-fun">
                        <a href="#menu-fun" class="dropdown-toggle" data-toggle="dropdown">Fun Stuff<b class="caret"></b></a>
                        <ul class="dropdown-menu">
                           <li class="dropdown-submenu">
                           <a tabindex="-1" href="#">Fade Between Generations</a>
                           <ul class="dropdown-menu">
                           <li><a href="#" class="fadespeed">None</a></li>
                           <li><a href="#" class="fadespeed active">Fast</a></li>
                           <li><a href="#" class="fadespeed">Medium</a></li>
                           <li><a href="#" class="fadespeed">Slow</a></li>
                           <li><a href="#" class="fadespeed">Snail</a></li>
                           </ul>
                           </li>
                           <li class="dropdown-submenu">
                           <a tabindex="-1" href="#">Color Schemes</a>
                           <ul class="dropdown-menu colors">
                           <li><a href="#" class="color active" name="rgb(100,200,200)">Mossy</a></li>
                           <li><a href="#" class="color" name="rgb(150,50,50)">Red</a></li>
                           <li><a href="#" class="color" name="rgb(50,150,50)">Green</a></li>
                           <li><a href="#" class="color" name="rgb(0,100,200)">Blue</a></li>
                           <li><a href="#" class="color" name="epilepsy">Epilepsy</a></li>
                           </ul>
                           </li>
                        </ul>
              </li>
              <li><a href="#" class="pause">Pause</a></li>
              <li><a href="#" class="play">Play</a></li>
              <li><a href="#" class="repopulate">Repopulate</a></li>
          </ul>
          </div><!--/.nav-collapse -->
          
        </div>
      </div>
    </div>
    <script>$(function(){$('.dropdown-toggle').dropdown();}); </script>

   
    <div class="generation" style="position: absolute;left: 10px;bottom:10px;color:white;background-color:black;"></div>
    <canvas id="lifeCanvas"></canvas> 

    <!-- Le javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="/application/bootstrap/js/jquery.js"></script>
    <script src="/application/bootstrap/js/bootstrap.js"></script>
    <script src="/application/life.js"></script>

  </body>
</html>

