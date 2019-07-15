window.onload = function () {
    // localStorage.setItem("key", []);
    // $('.nav-right').click(function () {

    //     //存储数据
    //     if ($('#nope').val() != '') {
    //         var lastname = localStorage.getItem("key1");
    //         if (lastname) {
    //             localStorage.setItem("key1", lastname + ',' + $('#nope').val());
    //         } else {
    //             localStorage.setItem("key1", $('#nope').val());
    //         }

    //     }

    // })



    
    var lastname = localStorage.getItem("key1");
    console.log(lastname)

    var arr = lastname.split(',')
    console.log(arr)
    for (var i = 0; i < arr.length; i++) {

        htmla= `
        <span  class="spann">
            ${arr[i]}
        </span>`
        console.log($('.spann').html())
        if($('bottom-c').text()!=arr[i]){
            $('.bottom-c').prepend(htmla)
        }
       

    }










    // 页面跳转

    $('.nav-right').click(function(){

        location.href = '../html/index.html'
    })






}