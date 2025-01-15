//MENU
window.matchMedia("(max-width: 1024px)").matches;{
    $("nav ul").css("display", "none")    
}

$("#menu-btn").click(function() {
    $("nav ul").toggle();
})

/*========================== THEMES =============================*/
 /*   $("#dark-theme").click(function() {
        $("#dark-theme").css("display", "none")
        $("#light-theme").css("display", "block")
    })
    $("#light-theme").click(function() {
        $("#light-theme").css("display", "none")
        $("#dark-theme").css("display", "block")
    })

let themeSwitches = document.getElementsByClassName('themeswitch')
let style = localStorage.getItem('style')

if (style == null) {
    setTheme('dark');
} else {
    setTheme(style);
}

for (let i of themeSwitches){
    i.addEventListener('click', function() {
        let theme = this.dataset.theme;
        setTheme(theme);
    })
}

function setTheme(theme){
    if (theme == 'dark'){
        document.getElementById('theme-style').href = './themes/light-theme.css'
    } else if (theme == 'light'){
        document.getElementById('theme-style').href = './themes/dark-theme.css'
    }
    localStorage.setItem('style', theme);
}
*/
//========================== TYPING ANIMATION =============================
var typed = new Typed(".items", {
    strings: ["Clothes", "Jewelry", "Shoes", "Necklaces"],
    typeSpeed: 50,
    backSpeed: 160,
    loop: true,
})

//========================== SCROLL TO TOP =============================
scrollToTopBtn = document.getElementById("scroll-to-top");
    
window.onscroll = function(){scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
    } else {
            scrollToTopBtn.style.display = "none";
    }
}

var rootElement = document.documentElement;

function scrollToTop() {
    rootElement.scrollTo({
        top:0,
        behavior: "smooth"
    });
}

scrollToTopBtn.addEventListener("click", scrollToTop);

//IMG SLIDE
$(document).ready(function() {
 
    $(".img-slide").owlCarousel({
   
        autoPlay: 3000, //Set AutoPlay to 3 seconds
   
        items : 3,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3],
        itemsTablet: [768,2],
        itemsTabletSmall: [500, 2],	
        itemsMobile: [479,1]
   
    });
   
});
