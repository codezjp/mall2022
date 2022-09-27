$(document).ready(function () {
    $("#inputSearch").focus(function () {
        $(this).attr("class","focus")
        if ($(this).val() == this.defaultValue)
            $(this).val("");
    })

    $("#inputSearch").blur(function () {
        $(this).attr("class", "")
        if ($(this).val() == "")
            $(this).val("请输入商品名称");
    })

})  