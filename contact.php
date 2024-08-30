<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact</title>
  <link href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.css" rel="stylesheet" type="text/css" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="./assets/css/style.css">
  <link rel="stylesheet" href="./assets/css/header.css">
</head>
<body>
  <div>
    <div class="upperHeader">
      <div class="container">
        <div class="connectUs">
          <ul>
            <li><a href="mailto:sales@envoymarketinganddistributors.in" target="_self" id="mail" title="">sales@envoymarketinganddistributors.in</a></li>
            <li><a href="tel:+919820712686" target="_blank" id="mobile" title="">9820712686</a></li>
            <li><a href="tel:02235785032" target="_blank" id="telephone" title="">02235785032</a></li>
          </ul>
          <ul>
            <li><a href="https://wa.me/9820712686" target="_blank" id="whatsapp" title="whatsapp">whatsapp</a></li>
            <li><a href="https://www.instagram.com/envoy.marketing?igsh=YmVtbXQ4eXM1NDBs&utm_source=qr" target="_self" id="instagram" title="instagram">instagram</a></li>
            <li><a href="https://www.facebook.com/Envoy2017" target="_blank" id="facebook" title="facebook">facebook</a></li>
            <li><a href="https://www.linkedin.com/company/envoy-marketing-distributors/" target="_self" id="linkedin" title="linkedin">linkedin</a></li>
            <li><a href="" target="_self" id="twitter" title="twitter">twitter</a></li>
          </ul>
        </div>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <a class="navbar-brand" href="./index.html">
          <img src="./assets/images/envoy-logo.jpg" alt="envoy logo" class="envoy-logo">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="./index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./cru.html">CRU</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./WiebeTech.html">WiebeTech</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./digistor.html">DIGISTOR</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./ioSafe.html">ioSafe</a>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link" href="./canonPTZ.html">Canon PTZ</a>
            </li> -->
            <li class="nav-item">
              <a class="nav-link" href="">Embassy</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./aboutUs.html">About us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="./contact.php">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <section class="my-5">
      <div class="container">
        <div class="py-5">
          <h2 class="text-center">Contact Us</h2>
        </div>
        <div class="w-80 m-auto">
          <form action="userinfo.php" method="post">
            <div class="form-group">
              <label>Name</label>
              <input type="text" name="user" class="form-control" autocomplete="off" required>
            </div>
            <div class="form-group">
              <label>Company Name</label>
              <input type="text" name="company" class="form-control" autocomplete="off">
            </div>
            <div class="form-group">
              <label>Email Id</label>
              <input type="email" name="email" class="form-control" autocomplete="off" required>
            </div>
            <div class="form-group">
              <label>Mobile</label>
              <input type="text" name="mobile" class="form-control" autocomplete="off" required>
            </div>
            <div class="form-group">
              <label>Message</label>
              <textarea class="form-control" name="message" autocomplete="off"></textarea>
            </div>
            <div class="form-group">
              <button type="submit" name="send" class="btn btn-success">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <div id="footer"></div>
  </div>

  <script src="./assets/js/script.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
  <script>
    $(function() {
      $("#header").load("header.html");
      $("#footer").load("footer.html");
    });
  </script>
</body>
</html>
