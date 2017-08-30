$(document).ready(function() {
var photofolder = "../images/chingapulariphotos-2017/";
var videofolder = "../videos/chingapularivideos-2017/";
$.ajax({
    url : photofolder,
    success: function (data) {
        var num=0;
        var picLen = $(data).find("a").length - 1;
        if(picLen === 1)
        {
          $(".chingapulari-photos").append('<div class="alert alert-warning" role="alert">'+picLen+' picture is available in this gallery. Please click on the picture to see full view of picture.</div>');
        }
        else
        {
          $(".chingapulari-photos").append('<div class="alert alert-warning" role="alert">'+picLen+' pictures are available in this gallery. Please click on the pictures to see full view of all pictures.</div>');
        }
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|jpg|png|gif)$/) ) {
               num++;
               if(num < 5)
               {
                //$("body").append( "<img src='"+ folder + val +"'>" );
                $(".chingapulari-photos").append("<div class='column' style='width:330px;'>"+
                "<img src='"+ photofolder + val +"' style='width:100%' onclick='openModal();currentSlide("+num+")' class='hover-shadow cursor'>"+
              "</div>");
            }
                $(".chingapulari-slides").append("<div class='mySlides'>"+
                    "<div class='numbertext'> "+ num +" / "+picLen+" </div>"+
                    "<img src='"+ photofolder + val +"' style='width:100%'>"+
                "</div>");

               // $(".chingapulari-columns").append("<div class='column'>"+
               //     "<img src='"+ photofolder + val +"' style='width:100%' onclick='openModal();currentSlide("+num+")' class='hover-shadow cursor'>"+
               //     "</div>");
            }

        });
        $(".chingapulari-photos").append('<a href="javascript:void(0);" onclick="openModal();currentSlide(1)" class="btn" role="button">More Pictures</a>');
      }
});

    $.ajax({
      url: videofolder,
    success:function(data)
    {
      var num =0;
       var picLen = $(data).find("a").length - 1;
        /*if(picLen === 1)
        {
          $(".chingapulari-videos").append('<div class="alert alert-warning" role="alert">'+picLen+' video is available in this gallery. Please click on the video to see full view of video.</div>');
        }
        else
        {
          $(".chingapulari-videos").append('<div class="alert alert-warning" role="alert">'+picLen+' videos are available in this gallery. Please click on the videos to see full view of all videos.</div>');
        }*/
      $(data).find("a").attr("href",function(i,val)
      {
        if( val.match(/\.(mp4)$/))
        {
          num++;
           if(num < 5)
           {
          $(".chingapulari-videos").append("<h5>Videos</h5>"+
            "<video width='320' height='240' controls>"+
             "<source src='"+ videofolder + val +"' type='video/mp4'>"+
             "Your browser does not support the video tag."+
            "</video>");
          }
          $(".chingapulari-videoSlides").append("<div class='videoSlides'>"+
                    "<div class='numbertext'> "+ num +" / "+picLen+" </div>"+
                    "<video width='100%' height='100%' controls>"+
                    "<source src='"+ videofolder + val +"' type='video/mp4'>"+
                    "Your browser does not support the video tag."+
                    "</video>"+
                "</div>");
        }
      })
      $(".chingapulari-videos").append('<a href="javascript:void(0);" onclick="openVideoModal();currentVideoSlide(1)" class="btn" role="button">More Videos</a>');
    }});

});
  function openModal() {
            document.getElementById('myModal').style.display = "block";
        }

    function closeModal() {
        document.getElementById('myModal').style.display = "none";
    }
    function openVideoModal() {
            document.getElementById('videoModal').style.display = "block";
            document.getElementById('myModal').style.display = "none";
        }

    function closeVideoModal() {
        document.getElementById('videoModal').style.display = "none";
        document.getElementById('myModal').style.display = "none";
    }

    var slideIndex = 1;
    showSlides(slideIndex);
    showVideoSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    function plusVideoSlides(n) {
        showVideoSlides(slideIndex += n);
    }

    function currentVideoSlide(n) {
        showVideoSlides(slideIndex = n);
    }
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        // var dots = document.getElementsByClassName("demo");
        var captionText = document.getElementById("caption");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        // for (i = 0; i < dots.length; i++) {
        //     dots[i].className = dots[i].className.replace(" active", "");
        // }

        if (slides.length > 0) {
            slides[slideIndex - 1].style.display = "block";
            // dots[slideIndex - 1].className += " active";

            captionText.innerHTML = dots[slideIndex - 1].alt;
        }
    }
    function showVideoSlides(n) {
        var i;
        var slides = document.getElementsByClassName("videoSlides");
        // var dots = document.getElementsByClassName("demo");
        var captionText = document.getElementById("caption");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        // for (i = 0; i < dots.length; i++) {
        //     dots[i].className = dots[i].className.replace(" active", "");
        // }

        if (slides.length > 0) {
            slides[slideIndex - 1].style.display = "block";
            // dots[slideIndex - 1].className += " active";

            captionText.innerHTML = dots[slideIndex - 1].alt;
        }
    }
