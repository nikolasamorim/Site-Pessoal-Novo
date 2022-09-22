window.addEventListener("scroll", function() {
    var up = document.querySelector("#up");
    up.classList.toggle("sky", window.scrollY > 500);
});