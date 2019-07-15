$(function(){
    var name=getCookie('name')
    var newP=getCookie('newP')
    var num=getCookie('aaaaaa')
    var img=getCookie('img')
    for(var i=0;i<newP.length;i++){
        var nump=newP.substring(1,i+1)
    }
    var numprice=num*nump;
    // console.log(numprice,newP)
    $('.name-detail').html(name)
    $('.danjia').html(newP)
    $('.count-num').html(num)
    $('.numprice').html(numprice)
    // $('.numprice').html(numprice)
    $('.product-img').html(`<img src="${img}" alt="">`)
    $('.address-wrap').click(function(){
        location.href='address.html'
    })
    var jine=getCookie('jine')
    console.log(location.hash)
    if(location.hash=='#halou'){
        $('.numprice').html(jine)
        $('.product11').hide()
        $('.address-wrap').hide()
        var index = localStorage.getItem('aa')
        for (var i = 0; i < index; i++) {
            var shuju = localStorage.getItem('local' + i)
            if (shuju != null) {
                var arr = shuju.split(',')
                console.log(arr)
                var html=`
                        <div class="product">
                        <div class="product-img"><img src="${arr[0]}"></div>
                        <div class="product-txt">
                            <div class="detail-txt1">
                                <div class="name-detail">${arr[1]}</div>
                                <div class="liang">30ml</div>
                            </div>
                            <div class="detail-txt2">
                                <div class="danjia">${arr[3]}</div>
                                <div class="count">x<span class="count-num">${arr[4]}</span></div>
                            </div>
                        </div>
                    </div>
                `
                $('.address-wrap').after(html)
            }
        }
    }

    if(location.hash=='#iptname@ipttel@iptaddress@iptsheng'){
        $('.no-address').hide()
        $('.has-address').show()
        var s =  location.hash.split("#")[1].split("@")
        var a1 = getCookie(s[0])
        var a2 = getCookie(s[1])
        var a3 = getCookie(s[2])
        var a4 = getCookie(s[3])
        console.log(a1,a2,a3,a4)
        $('.user1').html('收货人：'+a1)
        $('.ipttel').html(a2)
        $('.address').html('收货地址：'+a4+a3)
    }else{
        $('.no-address').show()
        $('.has-address').hide()
    }
    $('.btn-close').click(function(){
        $('.pay-modal-wrap').hide()
    })
    $('.btn').click(function(){
        if(location.hash){
            $('.pay-modal-wrap').show()
        }else{
            alert('请添加收货地址')
        }
    })
   $('.btn-pay').click(function(){
       alert('您已支付')
       $('.pay-modal-wrap').hide()
       location.href='index.html'
        // 

        for(var i=0;i<20;i++){
          localStorage.removeItem('local'+i)
          localStorage.removeItem('aa')
        
        }





   })
})