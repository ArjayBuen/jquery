// $("h1").css("color","red");
//$("button");
// console.log($("h1").css("color"));
// $("h1").css("font-size");

$("h1").addClass("big-title margin-50");
// $("h1").removeClass("big-title");

// $("h1").hasClass("margin-50");

$("h1").text("bye");
// $("button").text("Dont Click Me!");
$("button").html("<em>Hey</em>");

// console.log($("img").attr("src"));
// $("a").attr("href", " to change link");

$("h1").click(function(){
    $("h1").css("color","white");
});

// for (let index = 0; index < 5; index++) {
//     document.querySelectorAll("button")[index].addEventListener("click", function(){
//         document.querySelector("h1").style.color="purple";
//     }); 
// }    //below is similar but shorter code of this loop

$("button").click(function(){
    $("h1").css("color","purple");
});

$("input").keypress(function(event){
    console.log(event.key);
});

$(document).keypress(function(event){
    $("h1").text(event.key);
});

$("h1").on("mouseover",function(){
    $("h1").css("color","green");
});

// $("h1").before("<button>New</button>");
// $("h1").after("<button>New</button>");
// $("h1").prepend("<button>New</button>");//inside h1 before text
// $("h1").append("<button>New</button>");//inside h1 after text
//  $("button").remove();


$("button").click(function(){
    // $("h1").slideToggle(); //$("h1").slideUp(); //$("h1").slideDown();
    //$("h1").fadeToggle(); //$("h1").fadeOut(); //$("h1").fadeIn();
    //$("h1").toggle(); //$("h1").hide(); //$("h1").show();


    $("h1").animate({opacity:0.5});//customize animation with numerical value only
    $("h1").slideUp().slideDown().animate({opacity:0.5});//chain animation
});
