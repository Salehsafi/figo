$(document).ready(function(){
      $(".nav-item").click(function(){ 
        $('.nav-item').find('.nav-link').removeClass('active')
        $(this).find('.nav-link').addClass('active')
    })
    
    $('.why-us .box').click(function(){
        $('.why-us  .box').removeClass('active')
        $(this).addClass('active')
    })
    
    $('.menu .btn').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    })

    /* why us */
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
}})
$('.owl-prev').html('<img src="img/menu/arrow-right.svg" alt="">')
    $('.owl-next').html('<img src="img/menu/arrow-left.svg" alt="">').addClass('ms-3')
   
    /* end why us */
})