document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// nav bar fixed animate
var navbar = document.getElementById("navbar");
var sticky = 100;
window.onscroll = function () {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
};

/** Counter animation */

let nCount = function (selector) {
    $(selector).each(function () {
        $(this).animate({
            Counter: $(this).text()
        }, {
            duration: 1500,
            easing: "swing",
            step: function (value) {
                $(this).text(Math.ceil(value) + "%");
            }
        });
    });
};

let a = 0;
$(window).scroll(function () {
    let oTop = $(".percentage").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() >= oTop) {
        a++;
        nCount(".rect>h1");
    }
});

function viewMore() {
    $("#star-drives").slideToggle(1000, function () { });
}