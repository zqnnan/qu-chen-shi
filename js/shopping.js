$(function () {
    // console.log(history)
    $('.goback').click(function () {
        location.href = 'index.html'
    })
    //获取数据
    var index = localStorage.getItem('aa')
    var wenzi = []
    var localarr=[]  //点击删除时候的缓存数据i
    var price=[]   //价格
    // console.log(index)
    for (var i = 0; i < index; i++) {
        var shuju = localStorage.getItem('local' + i)
        if (shuju != null) {
            // console.log(i)
            var arr = shuju.split(',')
            localarr.push(i)
             wenzi.push(arr[1])
             price.push(arr[3])
            // console.log(arr+'你好')
            var html = `
                     <div class="product">
                        <div class="checkB checkA check"></div>
                        <div class="product-img">
                            <img src="${arr[0]}">
                        </div>
                        <div class="product-txt">
                            <div class="detail-txt1">
                                <div class="name-detail">${arr[1]}</div>
                                <div class="liang">30ml</div>
                            </div>
                            <div class="detail-txt2">
                                <div class="danjia">${arr[3]}</div>
                                <div class="count">x<span class="count-num">${arr[4]}</span></div>
                            </div>
                            <div class="number">
                                <div class="btn-number btn-reduce disabled">-</div>
                                <div class="form-control-wrap">1</div>
                                <div class="btn-number btn-add">+</div>
                            </div>
                            <div class="btn-delete">
                                <img src="./img/delete.png" alt="">删除
                            </div>
                        </div>
                     </div>
            `
            $('.slogen-list').after(html)
          
        }
    }
  
    // 全选
    
    
    $('.check-top').click(function () {
      
        
        
        if($(this).hasClass('check')){
           
            $('.numprice').html(0)
            $('.checkA').removeClass('check')
           
        }else{
            $('.checkA').addClass('check')
            
            var qian=[]
            for(var k=0;k<$('.danjia').length;k++){
                
                // console.log( $('.danjia').eq(k).html())
            
                var q1= $('.danjia').eq(k).html();
                var q2=$('.form-control-wrap').eq(k).html();
                var numprice=q1.substring(1)
                var zongshu=numprice*q2
                 qian.push(zongshu)
            
            }
            // console.log(qian)
            var numarr=0;
            for(var o=0;o<qian.length;o++){
                numarr+=qian[o]
            }
            // console.log(numarr)
            $('.numprice').html(parseFloat(numarr))
            
           
        }

        $(this).toggleClass('check')

    })

    $('.checkA').click(function () {
        $(this).toggleClass('check')
    })

 


    //  判断是否选中
    // if($('.checkA').hasClass('check')){
    //     $('.form-control-wrap')
    // }



    $('.btn-delete').click(function () {

        var aa = $(this).index('.btn-delete')
        $('.product').eq(aa).hide()

        var wen = $('.name-detail').eq(aa).html()
        for(var i=0;i<wenzi.length;i++){
            if(wenzi[i]==wen){
                
                var er = localStorage.getItem('local'+localarr[i]);
               var er1= er.split(',')
                console.log(er1)
                console.log(er1[4])
                var er = localStorage.getItem('aa'); 
                var san=er-er1[4]
                localStorage.setItem('aa', san);

                localStorage.removeItem('local'+localarr[i])
                

            

                


            }
        }
    })
   

    $('.btn').click(function(){
        setCookie('jine',$('.numprice').html(),15)
        location.href='buy.html#'+'halou'
    })


  

    // console.log($('.checkA '))
// 
    // console.log( $('.danjia'))







  $('.checkA ').click(function(){

      if($(this).hasClass('check')){
        
        var z1=$(this).parent().find('.count-num').html()
        var z12=$(this).parent().find('.danjia').html()
        var z2=z12.substring(1)
        console.log(z1,z2)
        var zongshu1=z1*z2

        var qw=parseFloat($('.numprice').html())+parseInt(zongshu1)
        $('.numprice').html(parseFloat(qw))

    }else{
        var z1=$(this).parent().find('.count-num').html()
        var z12=$(this).parent().find('.danjia').html()
        var z2=z12.substring(1)
        console.log(z1,z2)
        var zongshu1=z1*z2

        var qw=parseFloat($('.numprice').html())-parseInt(zongshu1)
        $('.numprice').html(parseFloat(qw))
    }

    })
    
    for (let i = 0; i < $('.form-control-wrap').length; i++) {
        $('.form-control-wrap').eq(i).html($('.count-num').eq(i).html())
    }

    $('.btn-add').click(function () {
        var aa = $(this).index('.btn-add')
        var a = $('.form-control-wrap').eq(aa).html()
        a++
        $('.form-control-wrap').eq(aa).html(a)
        $('.count-num').eq(aa).html(a)
        if($('.checkA').hasClass('check')){
            var danjiadd=$(this).parent().parent().find('.danjia').html()
            var zq3=danjiadd.substring(1)
            console.log(zq3)
            var qw2=parseFloat($('.numprice').html())+parseInt(zq3)
            $('.numprice').html(parseFloat(qw2))
        }
    })
    $('.btn-reduce').click(function () {
        var aa = $(this).index('.btn-reduce')
        var a = $('.form-control-wrap').eq(aa).html()
        if (a <= 1) {
            $('.tishi').show().fadeOut(2000)
        } else {
            a--
            $('.form-control-wrap').eq(aa).html(a)
            $('.count-num').eq(aa).html(a)

            if($('.checkA').hasClass('check')){
                // alert($(this))
                var danjia=$(this).parent().parent().find('.danjia').html()
                var zq2=danjia.substring(1)
                
                var qw1=parseFloat($('.numprice').html())-parseInt(zq2)
                $('.numprice').html(qw1)
            }
        }
       

    })



  



    var qian=[]
    for(var k=0;k<$('.danjia').length;k++){
        
        // console.log( $('.danjia').eq(k).html())
    
        var q1= $('.danjia').eq(k).html();
        var q2=$('.form-control-wrap').eq(k).html();
        var numprice=q1.substring(1)
        var zongshu=numprice*q2
         qian.push(zongshu)
    
    }
    // console.log(qian)
    var numarr=0;
    for(var o=0;o<qian.length;o++){
        numarr+=qian[o]
    }
    // console.log(numarr)
    $('.numprice').html(parseFloat(numarr))













})