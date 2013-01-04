<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <title>{{ pkg.name }}</title>
    <link rel="stylesheet" type="text/css" href="{{ css }}" media="all" />
  </head>
  <body>
  <div class="navbar navbar-fixed-top">
    <div class="navbar-inner">
      <div class="container">
        <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </a>
          <a class="brand" href="#home">Lineman Bootstrap Boilerplate</a>
          <a class="brand author" href="http://www.twitter.com/dmosher"><span class="muted">by</span> @dmosher</a>
          <div class="nav-collapse">
            <ul class="nav">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#animals">Animals</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
 	</div>
  <div class="container">
    <div id="alerts"></div>
    <div id="page"></div>
  </div>
  <script type="text/javascript" src="{{ js }}"></script>
  </body>
</html>