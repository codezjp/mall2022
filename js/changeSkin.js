$(document).ready(function () {

    $("#skin li").click(function () {
        $("#skin li").removeAttr("class"); 
        $(this).attr("class", "selected");
        $("#cssfile").attr("href", "styles/skin/" + $(this).attr("id") + ".css")

    })
}) 