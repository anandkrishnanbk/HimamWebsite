$(document).ready(function() {
var photofolder = "../images/ramayanamphotos-2017/";

$.ajax({
    url : photofolder,
    success: function (data) {
        var num=0;
        var picLen = $(data).find("a").length - 1;
        if(picLen === 1)
        {
            $(".ramayanInitialSlides").append('<div class="alert alert-warning" role="alert">'+picLen+' picture is available in this gallery. Please click on the picture to see full view of picture.</div>');
        }
        else
        {
            $(".ramayanInitialSlides").append('<div class="alert alert-warning" role="alert">'+picLen+' pictures are available in this gallery. Please click on the pictures to see full view of all pictures.</div>');
        }
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|JPG|jpg|png|gif)$/) ) {
               num++;
               if(num < 5)
               {
                //$("body").append( "<img src='"+ folder + val +"'>" );
                $(".ramayanInitialSlides").append("<div class='column'>"+
                  "<img src='"+ photofolder + val +"' style='width:100%' onclick='openModal();currentSlide("+ num +")' class='hover-shadow cursor'>"+
                "</div>");
               }
                $(".ramayanSlides").append("<div class='mySlides'>"+
                    "<div class='numbertext'>"+ num +" / "+picLen+"</div>"+
                    "<img src='"+ photofolder + val +"' style='width:100%'>"+
                   "</div>");
               /*$(".ramayanColumns").append("<div class='column'>"+
                   "<img src='"+ photofolder + val +"' style='width:100%' onclick='openModal();currentSlide("+num+")' class='hover-shadow cursor'>"+
                   "</div>");*/
            }
        });
        $(".ramayanInitialSlides").append('<a href="javascript:void(0);" onclick="openModal();currentSlide(1)" class="btn" role="button">More Pictures</a>');
    }
});
});
  function openModal() {
            document.getElementById('myModal').style.display = "block";
        }

        function closeModal() {
            document.getElementById('myModal').style.display = "none";
        }

        var slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
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

                //captionText.innerHTML = dots[slideIndex - 1].alt;
            }
        }
