$(document).ready(function() {

    AOS.init();

    $(window).on("scroll",function( event ) {
        var pct = $(document).scrollTop()/$(document).height()+.4,
            bg = `radial-gradient(circle, rgba(0,0,0,${pct}) 0%, rgba(18,18,18,1) 100%)`;
        $("#particles-js").css("background", bg);
    });


    var i = 0;
    var txt = "I'm Karson Hodge, a Fullstack Developer."; /* The text */
    var speed = 70; /* The speed/duration of the effect in milliseconds */
    document.getElementById("body-text").innerHTML = ""
    function typeWriter() {

        if (i < txt.length) {
            document.getElementById("body-text").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();


    window.onscroll = function() {myFunction()};

// Get the header
    var header = document.getElementById("header");

// Get the offset position of the navbar
    var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }




const app = Vue.createApp({
    data() {
        return {
            message: "Hello World!",
            count: 0,
            xPos: 0,
            yPos: 0,
            school1Show: false,
            school2Show: false
        }
    },
    methods: {
        mousePos(event) {
            this.xPos = event.offsetX
            this.yPos = event.offsetY
        },
        showSchool(){
            this.school1Show = !this.school1Show;
            if(this.school1Show){
                $("#schoolSec").css("display", "flex");
            }
            else{
                $("#schoolSec").css("display", "none");
            }

        },

        showSchool2(){
            this.school2Show = !this.school2Show;
            if(this.school2Show){
                $("#schoolFirst").css("display", "flex");
            }
            else{
                $("#schoolFirst").css("display", "none");
            }

        }

    }
})

app.mount('#app');


});

