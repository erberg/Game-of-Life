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
    <style>
      body {
        padding-top: 60px; /* 60px to make the container go all the way to the bottom of the topbar */
      }
    </style>
    <link href="/application/bootstrap/css/bootstrap-responsive.css" rel="stylesheet">
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

  <body>

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
              <li class="active"><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div><!--/.nav-collapse -->
        </div>
      </div>
    </div>

    <div class="container">
        
    <canvas id="lifeCanvas" width="800px" height="800px"></canvas> 
    <div class="appendme"> </div>
    </div> <!-- /container -->

    <!-- Le javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="/application/bootstrap/js/jquery.js"></script>
    <script src="/application/bootstrap/js/bootstrap-transition.js"></script>
    <script src="/application/bootstrap/js/bootstrap-alert.js"></script>
    <script src="/application/bootstrap/js/bootstrap-modal.js"></script>
    <script src="/application/bootstrap/js/bootstrap-dropdown.js"></script>
    <script src="/application/bootstrap/js/bootstrap-scrollspy.js"></script>
    <script src="/application/bootstrap/js/bootstrap-tab.js"></script>
    <script src="/application/bootstrap/js/bootstrap-tooltip.js"></script>
    <script src="/application/bootstrap/js/bootstrap-popover.js"></script>
    <script src="/application/bootstrap/js/bootstrap-button.js"></script>
    <script src="/application/bootstrap/js/bootstrap-collapse.js"></script>
    <script src="/application/bootstrap/js/bootstrap-carousel.js"></script>
    <script src="/application/bootstrap/js/bootstrap-typeahead.js"></script>
    <script src="/application/life.js"></script>

  </body>
</html>

