$(function () {
    // 选框
    $('.user').click(function () {
        $('.checkbox').toggleClass('check')
    })






    //  获取4随机数
    function suiji() {
        var num = "";
        for (var i = 0; i < 4; i++) {
            num += parseInt(Math.random() * 10);
        }
        return num;
    }
    var Num = suiji();
    $('.btn1').html(Num)



    // 6位随机书
    function suiji1() {
        var num = "";
        for (var i = 0; i < 6; i++) {
            num += parseInt(Math.random() * 10);
        }
        return num;
    }
    var Num1 = suiji1();


    $('.btn').click(function () {
        if ($('#sjh').val() == '') {
            $('.tishi').show().html(' 请输入手机号')
        } else {
            alert(Num1)
        }
    })




    // 点击登录
    var re = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;

    $('.go').click(function () {

        if ($('#sjh').val() == '') {
            $('.tishi').show().html('请输入手机号')
        }
        else {
            if ($('#tup').val() == '') {
                $('.tishi').show().html(' 请输入图片验证码')
            }
            else if ($('#yzm').val() == '') {
                $('.tishi').show().html(' 请输入验证码')
            }
            else {
                if ($('.checkbox').attr('class') == "checkbox check") {
                    var lastname = localStorage.getItem("key");
                    if (lastname) {
                        var arr = lastname.split(",");
                        console.log(arr)
                        for (var i = 0; i < arr.length; i++) {
                            if (arr[i] == $('#sjh').val()) {
                                // alert('已注册')
                                location.href = '../html/index.html'
                                return; //账号已经存在直接返回
                            } else {
                                localStorage.setItem("key", lastname + ',' + $('#sjh').val());
                                console.log(2)
                                location.href = '../html/index.html'
                            }
                        }
                    } else {
                        localStorage.setItem("key", $('#sjh').val());
                        console.log(1)
                        location.href = '../html/index.html'
                    }

                }

            }

        }


    })
 



    
    //实时获取手机号
    $('#sjh').on('input', function () {
        if ($('#sjh').val() == '') {
            $('.tishi').show().html(' 请输入手机号')
        } else {
            if (re.test($('#sjh').val())) {
                $('.tishi').hide()
            } else {
                $('.tishi').show().html(' 手机号格式输入错误')
            }
        }

    })
    //实时验证码1
    $('#tup').on('input', function () {
        if ($('#tup').val() == '') {
            $('.tishi').show().html(' 请输入图片验证码')
        }
        else if ($('#tup').val() == Num) {
            $('.tishi').hide()
        } else {

            $('.tishi').show().html(' 图片验证码输入错误')

        }

    })
    //实时验证码2
    $('#yzm').on('input', function () {
        if ($('#yzm').val() == '') {
            $('.tishi').show().html(' 请输入验证码')
        }
        else if ($('#yzm').val() == Num1) {
            $('.tishi').hide()
        } else {

            $('.tishi').show().html(' 验证码输入错误')

        }

    })



    //跳转
 $('.left').click(function(){

    location.href = 'index.html'
 })






})
