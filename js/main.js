$(document).ready(function(){
      $(".nav-item").click(function(){ 
        $('.nav-item').find('.nav-link').removeClass('active')
        $(this).find('.nav-link').addClass('active')
    })
    /*pop in */
    
    $(".btn-signin").click(function(){

        $(".sign-in-form").addClass("show-signin")
    });

    $(".sign-in-close").click(function(){

        $(".sign-in-form").removeClass("show-signin")
    });

    $("input[type='email']").keyup(function(){
        var emailVal =  $(this).val();
        if(emailVal.length >= 5){
        $('.submit-now').attr('disabled', false)
        $(this).removeClass('error').addClass('success').removeClass('text-danger')
        $('.email-success').removeClass('text-danger').addClass('text-success')
        $('.email-label').addClass('shadow-success').removeClass('shadow-danger')
        }else{
        $('.submit-now').attr('disabled', true)
        $(this).addClass('error').removeClass('success').addClass('text-danger')
        $('.email-success').addClass('text-danger')
        $('.email-label').addClass('shadow-danger').removeClass('shadow-success')
        }
    })

    /*end pop in */
    $('.why-us .box').click(function(){
        $('.why-us  .box').removeClass('active')
        $(this).addClass('active')
    })
    
    $('.menu .btn').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    })

    /* why us */
    $('.owl-carousel').owlCarousel({
        loop:false,
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
$('.owl-carousel button.owl-dot[role="button"]').hide()
$('.owl-dot').click(function(){
    $('.owl-carousel button.owl-dot[role="button"]').css('display','none ')
})

var width = $(document).width();
console.log(width)
if (width > 720) {
    $(".owl-dots").addClass('menu-btns').html('<button  class="btn owl-dot d-block fw-semibold breakfast  active">Breakfast</button><button  class="btn owl-dot d-block fw-semibold lunch  ">Lunch</button><button  class="btn owl-dot d-block fw-semibold dinner   ">Dinner</button><button  class="btn owl-dot d-block fw-semibold desert  ">Desert</button><button  class="btn owl-dot d-block fw-semibold soups  ">Soups</button><button  class="btn owl-dot d-block fw-semibold drinks   ">Drinks</button>')

}else{$(".owl-dots").addClass('menu-btns').html('<button  class="btn owl-dot d-inline-block fw-semibold breakfast  active">Breakfast</button><button  class="btn owl-dot d-none fw-semibold breakfast  active">Breakfast</button><button  class="btn owl-dot d-none fw-semibold breakfast   active">Breakfast</button><button  class="btn owl-dot d-inline-block fw-semibold lunch  ">Lunch</button><button  class="btn owl-dot d-none fw-semibold lunch  ">Lunch</button><button  class="btn owl-dot d-none fw-semibold lunch  ">Lunch</button><button  class="btn owl-dot d-inline-block fw-semibold dinner   ">Dinner</button><button  class="btn owl-dot d-none fw-semibold dinner   ">Dinner</button><button  class="btn owl-dot d-none fw-semibold dinner   ">Dinner</button><button  class="btn owl-dot d-inline-block fw-semibold desert  ">Desert</button><button  class="btn owl-dot d-none fw-semibold desert  ">Desert</button><button  class="btn owl-dot d-none fw-semibold desert  ">Desert</button><button  class="btn owl-dot d-inline-block fw-semibold soups  ">Soups</button><button  class="btn owl-dot d-none fw-semibold soups  ">Soups</button><button  class="btn owl-dot d-none fw-semibold soups  ">Soups</button><button  class="btn owl-dot d-inline-block fw-semibold drinks me-0 pe-0  ">Drinks</button><button  class="btn owl-dot d-none fw-semibold drinks   ">Drinks</button><button  class="btn owl-dot d-none fw-semibold drinks   ">Drinks</button>')


}
/*  

    var  nextwidth =-342;
    var  prevwidth = 0;
    $('.owl-stage').css('transition','all 0.25s ease')

    $('.breakfast').click(function(){
        $('.owl-stage').css({'transform':'translate3d(0px, 0px, 0px) '})
         nextwidth =-342;
         prevwidth = 0;
    })
    $('.lunch').click(function(){
        $('.owl-stage').css('transform','translate3d(-1026px, 0px, 0px)')
         nextwidth =-1026+-342;
         prevwidth = -1026+342;
    })
    $('.dinner').click(function(){
        $('.owl-stage').css('transform','translate3d(-2052px, 0px, 0px)')
         nextwidth =-2052+-342;
         prevwidth =-2052+342;
    })
    $('.desert').click(function(){
        $('.owl-stage').css('transform','translate3d(-3078px, 0px, 0px)')
         nextwidth =-3078+-342;
         prevwidth =-3078+342;
    })
    $('.soups').click(function(){
        $('.owl-stage').css('transform','translate3d(-4104px, 0px, 0px)')
         nextwidth =-4104+-342;
         prevwidth =-4104+342;
    })
    $('.drinks').click(function(){
        $('.owl-stage').css('transform','translate3d(-5130px, 0px, 0px)')
         nextwidth =-5130;
         prevwidth =-5130;
    })

    $('.owl-prev').click(function(){
        $('.owl-stage').css({'transform':'translate3d('+prevwidth+'px, 0px, 0px) '})
        var max= 0;
        prevwidth = (prevwidth + 342);
       
        $('.owl-prev').click(function(){
            nextwidth = (nextwidth - 342)
        })
    
    })

    $('.owl-next').click(function(){
        $('.owl-stage').css({'transform':'translate3d('+nextwidth+'px, 0px, 0px) '})
        var max= -5472;
        nextwidth = (nextwidth - 342);
        if(nextwidth <= max){nextwidth = (nextwidth + 342) }
        $('.owl-prev').click(function(){
            nextwidth = (nextwidth + 342)
        })
    })*/

$('.menu .owl-prev').html('<img src="img/menu/arrow-right.svg" alt="">')
    $('.menu .owl-next').html('<img src="img/menu/arrow-left.svg" alt="">').addClass('ms-3')

    /* end why us */
    /* 
        var width = $(document).width();
        var nextwidth=0 ;
        var prevwidth=0 ;
        if (width < 720) {
            $('.breakfast').click(function(){
                $('.owl-stage').css({'transform':'translate3d(0px, 0px, 0px) '})
                    nextwidth =0;
                    prevwidth =0;
            })
            $('.lunch').click(function(){
                $('.owl-stage').css('transform','translate3d(-922px, 0px, 0px)')
                  nextwidth =-922+-342;
                  nextwidth =-922+342;
            })
            $('.dinner').click(function(){
                $('.owl-stage').css('transform','translate3d(-1844px, 0px, 0px)')
                   nextwidth =-1844+-342;
                   nextwidth =-1844+342;
            })
            $('.desert').click(function(){
                $('.owl-stage').css('transform','translate3d(-2766px, 0px, 0px)')
                  nextwidth =-2766+-342;
                  nextwidth =-2766+342;
            })
            $('.soups').click(function(){
                $('.owl-stage').css('transform','translate3d(-3688px, 0px, 0px)')
                  nextwidth =-3688+-342;
                  nextwidth =-3688+342;
            })
            $('.drinks').click(function(){
                $('.owl-stage').css('transform','translate3d(-4610px, 0px, 0px)')
                   nextwidth =-4610+-342;
                   nextwidth =-4610+342;
            })

        }else{

            $('.breakfast').click(function(){
                $('.owl-stage').css({'transform':'translate3d(0px, 0px, 0px) '})
                 nextwidth =0;
                 prevwidth =0;
            })
            $('.lunch').click(function(){
                $('.owl-stage').css('transform','translate3d(-1026px, 0px, 0px)')
                  nextwidth =-1026+-342;
                  nextwidth =-1026+342;
            })
            $('.dinner').click(function(){
                $('.owl-stage').css('transform','translate3d(-2052px, 0px, 0px)')
                nextwidth =-3078+-342;
                nextwidth =-3078+342;
            })
            $('.desert').click(function(){
                $('.owl-stage').css('transform','translate3d(-3078px, 0px, 0px)')
                nextwidth =-3078+-342;
                nextwidth =-3078+342;
            })
            $('.soups').click(function(){
                $('.owl-stage').css('transform','translate3d(-4104px, 0px, 0px)')
                  nextwidth =-4104+-342;
                  nextwidth =-4104+342;
            })
            $('.drinks').click(function(){
                $('.owl-stage').css('transform','translate3d(-5130px, 0px, 0px)')
                   nextwidth =-5130+-342;
                   nextwidth =-5130+342;
            })
        }
        $('.owl-prev').click(function(){
            $('.owl-stage').css({'transform':'translate3d('+nextwidth+'px, 0px, 0px) '})
        })
    
        $('.owl-next').click(function(){
            $('.owl-stage').css({'transform':'translate3d('+nextwidth+'px, 0px, 0px) '})
        })
    */
})