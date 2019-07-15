$(function(){
    var reg= /^1[3458]\d{9}$/;
    $('.btn-save').click(function(){
        if($('.iptname').val()==''){
            $('.ws-toast').show().html('请输入收货人姓名').fadeOut(3000)            
        }else{
            if($('.ipttel').val()==''){
                $('.ws-toast').show().html('请输入手机号').fadeOut(3000)         
            }else{
                if(reg.test($('.ipttel').val())){
                   if($('.iptsheng').val()==''){
                        $('.ws-toast').show().html('请填写省份').fadeOut(3000)      
                   }else{
                       if($('.iptaddress').val()==''){
                            $('.ws-toast').show().html('请填写详细地址').fadeOut(3000)      
                       }else{
                        location.href='buy.html#'+"iptname"+"@"+"ipttel"+"@"+"iptaddress"+"@"+"iptsheng"
                       }
                   }
                }else{
                    $('.ws-toast').show().html('手机号码格式错误').fadeOut(3000)      
                }
            }
        }
        setCookie('iptname',$('.iptname').val(),15)
        setCookie('ipttel',$('.ipttel').val(),15)
        setCookie('iptaddress',$('.iptaddress').val(),15)
        setCookie('iptsheng',$('.iptsheng').val(),15)


        // location.href='buy.html'
    })
})