document.addEventListener('DOMContentLoaded', function () {
    // Add hamburger menu on mobile
    const toggleButton = document.querySelector('.navbar .mobile-menu-toggle');
    const mobileMenu = document.querySelector('.navbar .mobile-items');

    toggleButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
    });

    // video modal
    const modal = document.querySelector('#videoModal');
    const videoButton = document.querySelector('.preview-video-button');
    const closeButton = document.querySelector('.modal-close-button');
    const videoPlayer = document.getElementById('videoPlayer');

    // open modal when clicked
    videoButton.addEventListener('click', function () {
        // show modal
        modal.style.display = 'block';
        // replace the source attribute with the video url
        videoPlayer.src = 'https://www.youtube.com/embed/AAZCyDXIv-8?si=lEj-94rjnV-qZpN_';
        // close modal on close button clicked
        closeButton.addEventListener('click', function() {
            modal.style.display ='none';
            videoPlayer.src = '';
        });

        // close modal on outer click
        window.addEventListener('click', function (event) {
            if(event.target == modal) {
                modal.style.display = 'none';
                videoPlayer.src = '';
            }
        })
    })


});

// Change navbar after scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');

    if(window.scrollY > 0) {
        navbar.classList.add('navbar-scroll');       
    }
    else {
        navbar.classList.remove('navbar-scroll');
    }
})

let slideIndex = 0;
let mediaQuery = window.matchMedia("(max-width: 992px)"); 

// Function to start slides if the media query matches
function checkViewport() {
    if (mediaQuery.matches) {
        showSlides();
    } else {
        resetSlides(); // Optionally reset the slides when not in mobile view
    }
}

// Function to show slides
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("reviews-item");
    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3000);
}

function resetSlides() {
    let slides = document.getElementsByClassName("reviews-item");
    let dots = document.getElementsByClassName("dot");
    
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
}

checkViewport();

mediaQuery.addEventListener("change", checkViewport);

// add slideshow gallery
let slideIndexGallery = 1;
showSlidesGallery(slideIndexGallery);

// Next/previous controls
function plusGallerySlides(n) {
  showSlidesGallery(slideIndexGallery += n);
}

// Thumbnail image controls
function currentGallerySlide(n) {
  showSlidesGallery(slideIndexGallery = n);
}

function showSlidesGallery(n) {
  let i;
  let slide = document.getElementsByClassName("imageFull");
  let dot = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
// debug
console.log("Total slides:", slide.length);
console.log("Current slide index:", n);
  
  if (n > slide.length) {slideIndexGallery = 1}
  if (n < 1) {slideIndexGallery = slide.length}
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
    // debug
    console.log("Hiding slide:", i + 1);
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }
  slide[slideIndexGallery-1].style.display = "block";
  dot[slideIndexGallery-1].className += " active";
  captionText.innerHTML = dot[slideIndexGallery-1].alt;

//   debug
console.log("Showing slide:", slideIndexGallery);
}

// document.addEventListener('DOMContentLoaded', function() {
//     let gallerySlideIndex = 1;
//     showGallerySlides(gallerySlideIndex);

//     document.querySelectorAll('.demo').forEach((thumbnail, index) => {
//         thumbnail.addEventListener('click', function() {
//             currentGallerySlide(index + 1);
//         });
//     });

//     function plusGallerySlides(n) {
//         showGallerySlides(gallerySlideIndex += n);
//     }

//     function currentGallerySlide(n) {
//         showGallerySlides(gallerySlideIndex = n);
//     }

//     function showGallerySlides(n) {
//         let gallerySlides = document.querySelectorAll(".screenshots .imageFull");
//         let galleryDots = document.querySelectorAll(".screenshots .demo");
        
//         if (n > gallerySlides.length) {gallerySlideIndex = 1}
//         if (n < 1) {gallerySlideIndex = gallerySlides.length}
        
//         gallerySlides.forEach(slide => slide.style.display = "none");
//         galleryDots.forEach(dot => dot.classList.remove("active"));
        
//         gallerySlides[gallerySlideIndex-1].style.display = "block";
//         galleryDots[gallerySlideIndex-1].classList.add("active");
//     }

//     showGallerySlides(gallerySlideIndex);

//     function checkGalleryScreenSize() {
//         let screenshotsSmall = document.querySelector('.screenshots-small');
//         if (window.innerWidth >= 769 && window.innerWidth <= 992) {
//             screenshotsSmall.style.display = 'block';
//         } else {
//             screenshotsSmall.style.display = 'none';
//         }
//     }

//     window.addEventListener('load', checkGalleryScreenSize);
//     window.addEventListener('resize', checkGalleryScreenSize);
// });






