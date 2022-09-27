$(document).ready(function () {
    $("#nav li>a").hover(function () {
        $(this).next().show(); 
    }, function () {
        $(this).next().hide();
    })


}) 