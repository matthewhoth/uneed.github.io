$(document).ready(function () {
  AOS.init({ disable: "mobile" });
});

$(".head").click(function () {
  $(this).toggleClass("active");
  $(this).parent().find(".arrow").toggleClass("arrow-animate");
  $(this).parent().find(".content").first().slideToggle(380);
});

// icon from Font Awesome was used in accordion-1

function uniqueRotateReverse() {
  var firstChild = $(".unique-slider div:first-child").clone(); // Clone the first child
  $(".unique-slider div").removeClass("firstSlide"); // Remove the 'firstSlide' class from all divs
  $(".unique-slider div:first-child").remove(); // Remove the first child from the beginning
  $(".unique-slider").append(firstChild); // Append the cloned first child to the end
  $(firstChild).addClass("firstSlide"); // Add the 'firstSlide' class to the newly appended child
}

window.setInterval(function () {
  uniqueRotateReverse();
}, 4000);
