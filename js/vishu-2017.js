$(document).ready(function() {
var photofolder = "../images/Vishuimages-2017/";

$.ajax({
    url : photofolder,
    success: function (data) {
        var num=0;
        var picLen = $(data).find("a").length - 1;
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|JPG|jpg|png|gif)$/) ) {
               num++;
               if(num < 5)
               {
                //$("body").append( "<img src='"+ folder + val +"'>" );
                $(".vishuInitialSlides").append("<div class='column'>"+
                  "<img src='"+ photofolder + val +"' style='width:100%' onclick='openModal();currentSlide("+ num +")' class='hover-shadow cursor'>"+
                "</div>");
               }
                $(".vishuSlides").append("<div class='mySlides'>"+
                    "<div class='numbertext'>"+ num +" / "+picLen+"</div>"+
                    "<img src='"+ photofolder + val +"' style='width:100%'>"+
                   "</div>");
               /*$(".vishuColumns").append("<div class='column'>"+
                   "<img src='"+ photofolder + val +"' style='width:100%' onclick='openModal();currentSlide("+num+")' class='hover-shadow cursor'>"+
                   "</div>");*/
            }
        });
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
