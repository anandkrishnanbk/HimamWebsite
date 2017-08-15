<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title></title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="../libs/bootstrap-3.3.7/dist/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css">
    <link href="../libs/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="../css/himam.css" rel="stylesheet">
    <script src="../libs/js/jquery-3.2.1.min.js"></script>
    <script src="../libs/bootstrap-3.3.7/dist/js/bootstrap.min.js"></script>
</head>
<body id="myPage">
  <div class="top-container">
    <div class="align-right">
      <!-- <a href=""><i class="fa fa-youtube-play" aria-hidden="true"></i></a> -->
       <a href="https://www.facebook.com/groups/1865093743813082/"><i class="fa fa-facebook" aria-hidden="true"></i></a>
     </div>
  </div>
    <nav class="navbar navbar-default navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <div class="logo"><img src="../images/logo.gif" width="100" height="100" border="0" alt="logo" /></a></div>


                <!--<li class="nav navbar-nav navbar-right"><a href="#Login">Login</a></li></ul>-->
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="../index.html" class="active"><span>Home</span></a></li>
                    <li><a href="../partials/main-gallery.html"><span>Gallery </span></a></li>
                    <!-- <li><a href="../partials/services.html"><span>About Us</span></a></li> -->
                    <li><a href="../partials/main-events.html"><span>Events </span></a></li>
                    <li class="active"><a href="../partials/contact.php"><span>Contact Us</span></a></li>
                    <li><a href="" class="active"><span>Login</span></a></li>
                </ul>
            </div>
        </div>
    </nav>
    </html>
<?
    $errors='';
    if (isset($_POST["submit"])){
    if ($_POST["name"]==''){
    $errors=$errors . "<br>Please enter your Name.";
    }
    if ($_POST["email"]==''){
    $errors=$errors . "<br> Please enter your email.";
    }
    if ($_POST["phone"]==''){
	$errors=$errors . "<br> Please enter your phone.";
	}

    }
    else {
    $errors="unsub";
    }
    if ($errors==''){
    $msg="Thanks for your feedback to HIMAM Carolinas";
    $reply="HIMAM";
    $from=$_POST["email"];
    $to = "himamnc@gmail.com";
    $subject = "Email from Himam Website";
    $body = 'Name:' . stripslashes($_POST["name"]) ."\n";
    $body .= 'Email:' . stripslashes($_POST["email"]) ."\n";
    $body .= 'Phone:' . stripslashes($_POST["phone"]) ."\n";
    $body .= 'Comment:' . stripslashes($_POST["comments"]) ."\n";
    if (mail($to, $subject, $body)) {
    echo("<center><br><br><h1>Thank you for Contacting HIMAM.<br></h1></center><br><br>");
   $headers = "From: $from\r\nReply-to: $from";
    mail($from,$reply,$msg);

    } else {
    echo("<p>Error sending message. Please try again.</p>");
    }
    }
    else { ?>


<form method=post action=contact.php>
<div>
        <div class="left1">

            <div id="contact" class="container">
                <h3 class="text-center">Contact Us</h3>
                <!-- <p class="text-center"><em>We want to hear from you</em></p> -->

                <div class="row">
                    <div class="note col-md-4">
                        <!-- <p>Want a drop a note.</p> -->
                        <p><span class="glyphicon glyphicon-map-marker"></span>Morrisville, NC 27560, USA</p>
                        <!-- <p class="mailtohimam">
                          <span class="glyphicon glyphicon-envelope">
                          </span>
                          <a href="mailto:himamnc@gmail.com">mailto: himamnc@gmail.com
                          </a>
                        </p> -->
                    </div>
                    <div class="col-md-8">
                        <div class="row">
                            <div class="col-sm-6 form-group">
                                <input class="form-control" id="name" name="name" placeholder="Name" type="text" value="<?php echo $name;?>" required>
                            </div>
                            <div class="col-sm-6 form-group">
                                <input class="form-control" id="email" name="email" placeholder="Email" type="email"value="<?php echo $email;?>" required>
                            </div>
 <div class="col-sm-6 form-group">
                                <input class="form-control" id="phone" name="phone" placeholder="Phone" type="phone"value="<?php echo $phone;?>" required>
                            </div>
                        </div>
                        <textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5"><? echo(stripslashes($_POST["comments"])); ?></textarea>
                        <br>
                        <div class="row">
                            <div class="col-md-12 form-group">
                                 <input type="submit" name="submit" value="Submit" class="btn pull-right">
                            </div>
                        </div>
                    </div>
                </div>
                <br>
            </div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>

            <div></div>
            </form>

                <? } ?>
            <hr class="bottom-space">


 <footer>
            <div class="container">
              <div class="row">
                <div class="col-md-3 col-lg-3 col-sm-12">
                   <h5>CONTACT US</h5>
                   <p><i class="fa fa-map-marker" aria-hidden="true"></i><a>Hindu Malayalee Mandalam of Carolinas,<br><span style="margin-left:25px;">P.O. Box 1122,</span><br><span style="margin-left:25px;">Morrisville, NC 27560</span></a></p>
                   <p><i class="fa fa-envelope" aria-hidden="true"></i><a href="mailto:himamnc@gmail.com">Email: himamnc@gmail.com</a></p>
                   <!-- <p><i class="fa fa-phone" aria-hidden="true"></i><a>(242)-344-5656</a></p> -->
                </div>
                <div class="col-md-3 col-lg-3 col-sm-12">
                  <h5>QUICK LINKS</h5>
                  <a><i class="fa fa-caret-right" aria-hidden="true"></i> Latest  News</a>
                  <a href="../partials/main-events.html"><i class="fa fa-caret-right" aria-hidden="true"></i> Calendar of Events- Year 2017</a>
                </div>
                <div class="col-md-3 col-lg-3 col-sm-12">
                  <h5>FOLLOW US</h5>
                  <a href="https://www.facebook.com/groups/1865093743813082/" target="_blank"><i class="fa fa-caret-right" aria-hidden="true"></i> Facebook</a>
                  <!-- <a><i class="fa fa-caret-right" aria-hidden="true"></i> YouTube</a> -->
                </div>
                <div class="col-md-3 col-lg-3 col-sm-12">
                  <p></p>
                </div>
                <div class="copyright col-md-12 col-lg-12 col-sm-12">
                  <p>© Copyright 2017. All Rights Reserved to himamnc.org</p>
                </div>
                </div>
            </div>
      </footer>
