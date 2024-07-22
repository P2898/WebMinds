var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay:{
        delay:2500,
        disableInteraction: false,
    },
    breakpoints:{
        640:{
            slidesPerview: 1,
        },
        768:{
            slidesPerview: 2,
        },
        1024:{
            slidesPerview: 3,
        },
    },

});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay:{
        delay:2500,
        disableInteraction: false,
    },
    breakpoints:{
        450:{
            slidesPerview: 2,
        },
        768:{
            slidesPerview: 3,
        },
        991:{
            slidesPerview: 4,
        },
        1200:{
            slidesPerview: 5,
        },
    },

});
