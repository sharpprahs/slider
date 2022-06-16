var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  let sir = document.getElementById("2");
   if ((slideIndex-1) == 0){
     dots[0].className += " active";
  }
  else if ((slideIndex-1) == 1){
     dots[6].className += " active";
  } else if ((slideIndex-1) == 2){
     dots[12].className += " active";
  } else if ((slideIndex-1) == 3){
     dots[18].className += " active";
  } else if ((slideIndex-1) == 4){
     dots[24].className += " active";
  }


  // dots[slideIndex-1].className += " active";
}

// function grower(evt, cityName) {
//     var i,a,g,tabcontent, tablinks, title_left_side;
//     tabcontent = document.getElementsByClassName("tabcontent");
//     title_left_side = document.getElementsByClassName("title_left_side");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//         title_left_side[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tablinks");
//     for (g = 0; g < tablinks.length; g++) {
//         tablinks[g].className = tablinks[g].className.replace(" active", "");
//     }
//     salam = document.getElementsByClassName(cityName);
//     for (a = 0; a < salam.length; a++) {
//        salam[a].style.display = "block";
//    }
//    evt.currentTarget.className += " active";
// }
//     //

// // Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();