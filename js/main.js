$(document).ready(function() {

    let $btns = $('.projects-section .button-group button');
    
    $btns.click(function(e){
        $('.projects-section .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.projects-section .grid').isotope({
            filter : selector
        });
        return false;
    })

    $('projects-section .button-group #btn1').trigger('click');

    $('.projects-section .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery:{enabled:true}
    });

    //owl carousel
    $('.site-main .testimonials .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            544: {
                items: 2
            }

        }
    });

    function sendEmail(){
        Email.send({
            Host : "smtp.gmail.com",
            Username : "gmailID",
            Password : "passwordforGmail",
            To : 'braphics@gmail.com',
            From : document.getElementById("email").value,
            Subject : "New Contact Form Message",
            Body : "Name: " + document.getElementById("name").value
                + "<br> Email: " + document.getElementById("email").value
                + "<br> Message: " + document.getElementById("message").value
        }).then(
          message => alert("Message has been sent! I'll contact you soon.")
        );
    }

    //navigation sticky nav bar
    // let nav_offset_top = $('.header_area').height() + 50;

    // function navbarFixed() {
    //     if ($('.header_area').length) {
    //         $(window).scroll(function () {
    //             let scroll = $(window).scrollTop();
    //             if (scroll >= nav_offset_top) {
    //                 $('.header_area .main-menu').addClass('navbar_fixed');
    //             } else {
    //                 $('.header_area .main-menu').removeClass('navbar_fixed');
    //             }
    //         })
    //     }
    // }

    // navbarFixed();

});
