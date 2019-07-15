$(function () {
    // 头部跳转
    $('.tomyobj').click(function () {
        location.href = 'myobj.html'
    })
    $('.toshop').click(function () {
        var cg=localStorage.getItem('key');
        if(cg==null){
            alert('请登录您的账号')
            location.href = 'onload.html'
        }else{
            location.href = 'shopping.html'
        }
       
    })
    // 时分秒的倒计时
    var s = 60, m = 60, h = 01;
    var timer1 = setInterval(function () {
        s--;
        $('.time-s').html(s)
        if (s == 0) { s = 60; }
    }, 1000)
    var timer2 = setInterval(function () {
        m--;
        $('.time-m').html(m)
        if (m == 0) { m = 60; }
    }, 60000)
    var timer3 = setInterval(function () {
        h--;
        $('.time-h').html(h)
        if (h == 0) { h = 1; }
    }, 600000)



    $.ajax({
        type: 'GET',
        url: '../json/index.json',
        data: {},
        dataType: 'json',
    }).done(function (list) {
        var data = list.data.result0;
        console.log(data)
        var html = '';
        data.forEach(function (txt) {
            html += `
            <div class="slide-ms">
                            <div class="ms-img">
                                <img src="${txt.img}" alt="">
                                <div class="tagms">${txt.type}</div>
                            </div>
                            <div class="name">${txt.title}</div>
                            <div class="priceA">
                                <div class="new-price">${txt.newprice}</div>
                                <div class="old-price">${txt.oldprice}</div>
                            </div>
                        </div>
            `
        })
        $('#content2').html(html)
    })

    $.ajax({
        type: 'GET',
        url: '../json/index.json',
        data: {},
        dataType: 'json',
    }).done(function (list) {
        var data = list.data.result1;
        console.log(data)
        var html = '';
        data.forEach(function (txt) {
            html += `
            <li>
                <div class="ms-img">
                    <img src="${txt.img}" alt="">
                    <div class="tagms">${txt.type}</div>
                </div>
                <div class="namepro">${txt.title}</div>
                <div class="priceA">
                    <div class="new-price">${txt.newprice}</div>
                    <div class="old-price">${txt.oldprice}</div>
                    <div class="cart-btn"></div>
                </div>
            </li>
            `
        })
        $('.content1').html(html)
    })
    $.ajax({
        type: 'GET',
        url: '../json/index.json',
        data: {},
        dataType: 'json',
    }).done(function (list) {
        var data = list.data.result2;
        console.log(data)
        var html = '';
        data.forEach(function (txt) {
            html += `
            <li>
                <div class="brand-img">
                    <img src="${txt.img}" alt="">
                </div>
                <div class="circle">
                    <img src="${txt.imglogo}" alt="">
                </div>
                <div class="brand-txt">${txt.title}</div>
            </li>
            `
        })


        $('.content2').html(html)




    })
    $.ajax({
        type: 'GET',
        url: '../json/index.json',
        data: {},
        dataType: 'json',
    }).done(function (list) {
        var data = list.data.result4;
        console.log(data)
        var html = '';
        data.forEach(function (txt) {
            html += `
            <li><img src="${txt.img}" alt=""></li>
            `
        })
        $('.content4').html(html)
    })

    $.get('../json/index.json', function (str) {
        var data = str.data.result3.data1;
        var list = data[0].list1;
        var html
        var htmla
        html += `<img src="${data[0].Titleimg}">`
        var imgg = html.substring(9)
        $('.content3 .topic-image').html(imgg)





        for (let i = 0; i < list.length; i++) {
            htmla += `<div class="swiper-slide">
                                <div class="item-logo">
                                    <img src="${list[i].img}" alt="">
                                    <div class="tags-wrap">${list[i].type}</div>
                                </div>
                                <div class="item-name">${list[i].title}</div>
                                <div class="item-price">
                                    <span class="sale-price">${list[i].newprice}</span>
                                    <span class="origin-price">${list[i].oldprice}</span>
                                </div>
                            </div> `


            var imgg1 = htmla.substring(9)
            $('.content3 .swiper-wrapper').html(imgg1)
        }
    })



    $('.content1').delegate('.ms-img', 'click', function () {

        setCookie('name', $(this).next().html(), 15)
        setCookie('img', $($(this).find('img')).attr('src'), 15)
        setCookie('newP', $(this).next().next().children().eq(0).html(), 15)
        setCookie('oldP', $(this).next().next().children().eq(1).html(), 15)

        location.href = 'public.html'
    })




    // var newci = getCookie('cishu')
    // $('.num').html(newci)



    //  判断缓冲有没有aa 有获取 没有就定义
    if (localStorage.getItem("aa") == "") {
        var inn = 0
    } else {
        var inn = localStorage.getItem("aa");
    }

    /* ------------------------加购---------------- */

    $('.content1').delegate('.cart-btn', 'click', function () {

    





        $('.num').show()
        inn++

        var oldq = $(this).prev().html()    //旧钱
        var xinq = $(this).prev().prev().html()  //新钱
        var wenzi = $(this).parent().prev().html()  //文字说明
        var imgg = $(this).parent().prev().prev().find('img').attr('src')  //图片
        var num = 1                                                            //索引

        //1如果local是空，添加，
        //如果不是 对比


        var newarr = []
        localStorage.setItem('aa', inn);

        var jishu= localStorage.getItem('aa')
        $('.num').html(jishu)

        if (localStorage.getItem("local1") == null) {
            // alert(1)
            // localStorage.setItem('aa', inn);
           
            localStorage.setItem("local" + inn, [imgg, wenzi, oldq, xinq, num]);
          
        } else {
            // alert(2)
            aa = localStorage.getItem("aa");
            for (let i = 1; i <= aa; i++) {
                var lastname = localStorage.getItem("local" + i);
                console.log(lastname)
                if (lastname == null) {

                } else {
                    var arr = lastname.split(',')
                    console.log(arr)
                    var zizi = arr[1] + ',' + arr[4] + ',' + i

                    var enen = newarr.push(zizi)
                }

            }
            console.log(typeof newarr[0])  //cookie 里所有文字的数组

            console.log(newarr)
            var flage = false;
            for (var index = 0; index < newarr.length; index++) {
                if (newarr[index].split(',')[0] == wenzi) {
                    // alert(12)
                    var xinshu = newarr[index].split(',')[1]  //存汉字 和次数 还有点击数
                    xinshu++

                    var index1 = index + 1

                    localStorage.setItem("local" + newarr[index].split(',')[2], [imgg, wenzi, oldq, xinq, xinshu]);
                    flage = true;
                    return;
                } else {
                    flage = false;
                }
            }
            if (!flage) {
                // alert(inn)
                
                localStorage.setItem("local" + inn, [imgg, wenzi, oldq, xinq, num]);
                return;
            }
        }
   
       



    })

    //跳转
    $('.tomyobj').click(function () {
        location.href = '../html/onload.html'
    })

    $('#search').click(function () {

        location.href = '../html/sousuo.html'
    })





    window.onscroll = function () {
        var top=document.documentElement.scrollTop;
        if(top>300){
            $('.top').show()
          }else{
            $('.top').hide() 
          }




    }






})