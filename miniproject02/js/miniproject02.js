$(document).ready(function () {

    $(".circle1").click(function() {
        $(".circle1").animate({left: '110px', top:'93%'});
        $(".circle2").animate({left: '1100px', top:'2%'});
        $(".circle3").animate({left: '1400px', top:'80%'});
        $(".circle4").animate({left: '300px', top:'20%'});
        $(".stayhealthy").animate({left: '8%'}, 'slow');
        $(".washyourhands").animate({right: '8%'}, 'slow');
        $(".line1").animate({top:'-20%', left: '32%'}, 'slow');
        $(".line2").animate({top:'-20%', left: '34%'}, 'slow');
        $(".line3").animate({top:'-20%', left: '36%'}, 'slow');
    });



    $(".circle1").mouseenter(function () {
        $(".circle1").fadeTo("fast", 0.5);
        $(".circle2").fadeTo("fast", 0.5);
        $(".circle3").fadeTo("fast", 0.5);
        $(".circle4").fadeTo("fast", 0.5);
    });

    $(".circle1").mouseleave(function () {
        $(".circle1").fadeTo("fast", 1);
        $(".circle2").fadeTo("fast", 1);
        $(".circle3").fadeTo("fast", 1);
        $(".circle4").fadeTo("fast", 1);
    });





});