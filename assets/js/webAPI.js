//对路径地址进行封装
$(function () {
    $.ajaxPrefilter(function (options) {
        options.url = "http://ajax.frontend.itheima.net" + options.url
    })
})