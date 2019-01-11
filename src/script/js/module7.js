define(['config'], function () {
    require(['jquery'], function () {
        
        $('#loginId').on('blur', function () {
            if ($('#loginId').val() == ''){
                $('.erro_show').show();
                $('.erro_show').html('请输入用户名');
            } else {
                $('.erro_show').hide();
                $('button').on('click', function () {
                    var $username = $('#loginId').val();
                    var $password=$('#password').val();
                    if($('#password').val()=='') {
                        $('.erro_show').show();
                        $('.erro_show').html('密码不能为空');
                    } else {
                            console.log($username)
                        $.ajax({
                            type: 'post',
                            async: true,
                            url: 'http://127.0.0.1/bainian_shop/php/login.php',
                            data: {
                                username: $username,
                                password:$password,
                            }
                        }).done(function (data) {
                            
                            $('.erro_show').html('登陆成功');
                        });

                    }





                });
            }

        });



    })
});