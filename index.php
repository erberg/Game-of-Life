<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Bootstrap, from Twitter</title>
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
          <a class="brand" href="#">Conway's Game of Life</a>
          <div class="nav-collapse collapse">
          <ul class="nav">
              <li class="dropdown" id="menu-fps">
                        <a href="#menu-fps" class="dropdown-toggle" data-toggle="dropdown">Generations Per Second<b class="caret"></b></a>
                        <ul class="dropdown-menu">
                          <li><a href="1">1</a></li>
                          <li><a href="2">2</a></li>
                          <li><a href="4">4</a></li>
                          <li><a href="8">8</a></li>
                          <li><a href="16">16</a></li>
                          <li><a href="32">32</a></li>
                          <li><a href="64">64</a></li>
                          <li><a href="128">128</a></li>
                        </ul>
              </li>
              <li class="dropdown" id="menu-patterns">
                        <a href="#menu-patterns" class="dropdown-toggle" data-toggle="dropdown">Known Patterns<b class="caret"></b></a>
                        <ul class="dropdown-menu">
                          <li><a href="1">1</a></li>
                        </ul>
              </li>
              <li class="dropdown" id="menu-fun">
                        <a href="#menu-fun" class="dropdown-toggle" data-toggle="dropdown">Fun Stuff<b class="caret"></b></a>
                        <ul class="dropdown-menu">
                           <li class="dropdown-submenu">
                           <a tabindex="-1" href="#">Fade Between Generations</a>
                           <ul class="dropdown-menu">
                           <li><a href="128" class="active">None</a></li>
                           <li><a href="128">Fast</a></li>
                           <li><a href="128">Medium</a></li>
                           <li><a href="128">Slow</a></li>
                           </ul>
                           </li>
                          <li><a href="2">Lite Brite</a></li>
                        </ul>
              </li>
              <li><a href="Pause">Pause</a></li>
              <li><a href="index.php">Random Reset</a></li>
          </ul>
          </div><!--/.nav-collapse -->
          
        </div>
      </div>
    </div>
    <script>$(function(){$('.dropdown-toggle').dropdown();}); </script>

   

    <canvas id="lifeCanvas"></canvas> 

    <!-- Le javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="/application/bootstrap/js/jquery.js"></script>
    <script src="/application/bootstrap/js/bootstrap.js"></script>
    <script src="/application/life.js"></script>

  </body>
</html>

