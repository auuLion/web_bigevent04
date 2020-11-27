//对路径地址进行封装
$(function () {
    $.ajaxPrefilter(function (options) {
        options.url = "http://ajax.frontend.itheima.net" + options.url
        //获取需要权限的路径配置相应的请求头
        if (options.url.indexOf('/my/') !== -1) {
            options.headers = {
                Authorization: localStorage.getItem('token') || ''
            }
        }
        //对身份进行认证
        options.complete = function (res) {
            console.log(res);
            if (res.responseJSON.status == 0 && res.responseJSON.message == '获取用户基本信息失败！') {
                location.href = '/login.html'
                localStorage.removeItem('token')
            }
        }
    })

})