document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', myFunctionForSticky);
    var navbar = document.getElementById("side_nav");
    var vh_top = window.innerHeight / 100 * 13;

    function myFunctionForSticky() {
      if (window.pageYOffset >= vh_top) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }
})