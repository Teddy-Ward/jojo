// When the user scrolls the page, execute myFunction
window.onscroll = function() {myNavFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myNavFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// Look for elements with animation class
const scrollElements = document.querySelectorAll(".js-scroll");

// Check if in view
const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};
// Out of view
const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};
// add & removing class
const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});


// check if container is in view then add or remove class
var $sections = $(".container");
$(window).scroll(function () {
  var currentScroll = $(this).scrollTop();
  var $currentSection;
  $sections.each(function () {
    var divPosition = $(this).offset().top;
    if (divPosition - 100 < currentScroll) {
      $currentSection = $(this);
    }
    if ($currentSection) {
      var id = $currentSection.attr("id");
      $("a").removeClass("active");
      $("[href='#" + id + "']").addClass("active");
    }
  });
});

// when link clicked scroll to it
$(document).ready(function () {
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $("html, body").animate(
      {
        scrollTop: $target.offset().top
      },
      1000,
      "swing"
    );
  });

  var $sections = $(".container");
  $(window).scroll(function () {
    var currentScroll = $(this).scrollTop();
    var $currentSection;
    $sections.each(function () {
      var divPosition = $(this).offset().top;
      if (divPosition - 100 < currentScroll) {
        $currentSection = $(this);
      }
      if ($currentSection) {
        var id = $currentSection.attr("id");
        $("a").removeClass("active");
        $("[href='#" + id + "']").addClass("active");
      }
    });
  });
});

//logo animation
const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
	span.addEventListener('click', (e) => {
		e.target.classList.add('active');
	});
	span.addEventListener('animationend', (e) => {
		e.target.classList.remove('active');
	});
	
	// Initial animation
	setTimeout(() => {
		span.classList.add('active');
	}, 300 * (idx+10))
});


//responsive nav
var tglbtn = document.getElementById("nav-toggle");
var navlst = document.getElementById("nav-list")

tglbtn.addEventListener('click', () => {navlst.classList.toggle("active");});


$(document).click(function (e)
{
  if (!$("#navbar").is(e.target) && $("#navbar").has(e.target).length == 0)
  {
   navlst.classList.remove("active");
  }
});