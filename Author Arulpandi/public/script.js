$(document).ready(function() {
    $('.nav-button').click(function(){
        $('.nav-button').toggleClass('change')
    })
});

$(window).scroll(function(){
    let position = $(this).scrollTop(); //returns the scroll position as number
    if(position >= 200) {
        $('.nav-menu').addClass('nav-scroll');
    } else {
        $('.nav-menu').removeClass('nav-scroll');
    }
})































