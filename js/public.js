$(function(){
    var name=getCookie('name')
    var newP=getCookie('newP')
    var oldP=getCookie('oldP')
    var img=getCookie('img')
    var img1=escape(img)
    console.log(img)
    console.log(img1)
    $('.name').html(name)
    $('.newP').html(newP)
    $('.pricetxt').html(newP)
    $('.oldP').html(oldP)
    $('.item_long_name').html(name)
    $('.img').html(`<img src="${img}" alt="">`)
    $('.imgbox').html(`<img src="${img}" alt="">`)

    var count=1;
	$('.btn-add').click(function(){
		count++
		$('.form-control-wrap').html(count)
		setCookie('numPrice',$('.form-control-wrap').html()*$('.pricetxt').html(),15)
	})
		$('.btn-reduce').click(function(){
			if(count==1){return}
			count--
			$('.form-control-wrap').html(count)
		})
        $(".guige-num").click(function(){
            $(this).addClass('active').siblings().removeClass('active')
            $('.guige1').html('已选择')
            $('.guige2').html($(this).html())
        })
    $('.toindex').click(function(){
        location.href='index.html'
    })
    $('.goback').click(function(){
        location.href='index.html'
    })
    $('.togouwuche').click(function(){
        window.open('shopping.html','_self')
    })
    $('.togou').click(function(){
        $('.ws-toast').show()
    })
    $('.tobuy').click(function(){
        $('.buy-box').css('bottom', '0rem')
    })
    $('.shizi').click(function(){
        $('.buy-box').css('bottom', '-11rem')
    })
    $('.sure').click(function(){
        setCookie('aaaaaa',$('.form-control-wrap').html(),15)
        if($('.guige-num').eq(0).attr('class')=='guige-num active'){
            location.href='buy.html'
        }
        if($('.guige-num').eq(1).attr('class')=='guige-num active'){
            location.href='buy.html'
        }
         
    })
})