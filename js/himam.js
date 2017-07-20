//$(document).ready(function() {
//$('.thumbnail').click(function(){
//      $('.modal-body').empty();
//  	var title = $(this).parent('a').attr("title");
//  	$('.modal-title').html(title);
//  	$($(this).parents('div').html()).appendTo('.modal-body');
//  	$('#myModal').modal({show:true});
//    });

//});

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
            var dots = document.getElementsByClassName("demo");
            var captionText = document.getElementById("caption");
            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
           
            if (slides.length > 0) {
                slides[slideIndex - 1].style.display = "block";
                dots[slideIndex - 1].className += " active";
            
                captionText.innerHTML = dots[slideIndex - 1].alt;
            }
        }


