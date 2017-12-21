$(document).ready(function(){

    $(".nav").click(function(){
        $("#menu").fadeIn();
    });


    $("#menu").click(function(){
        $(this).fadeOut();
    });

});



$(document).scroll(function(){

    var y = $(document).scrollTop();

    if (y > 0 && y < 650) {
        $("#subject").html("check it out");
    }

    if (y > 650 && y < 1350) {
        $("#subject").html("travel & outdoors");
    }

    if (y > 1350 && y < 2100) {
        $("#subject").html("arts & entertainment");
    }

    if (y > 2100 && y < 2800) {
        $("#subject").html("food & drink");
    }

    if (y > 2800 && y < 3450) {
        $("#subject").html("mn life");
    }

    if (y > 3450 && y < 4000) {
        $("#subject").html("events");
    }

});