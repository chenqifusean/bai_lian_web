define(['config'], function () {
    require(['jquery', 'jqvalidate'], function () {

        $(function () {
            $('#form1').validate({
                rules: {
                    username: {
                        required: true,
                        minlength: 6,
                        maxlength: 20,
                        remote: {
                            type: 'post',
                            url: 'http://127.0.0.1/bainian_shop/php/registor.php'
                        }
                    },
                    password: {
                        required: true,
                        minlength: 8,
                        maxlength:20
                    },
                    repass: {
                        required: true,
                        equalTo: '#password'
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    telphone:{
                        required:true,
                        maxlength:11
                    }
                    
                },
                messages: {
                    username: {
                        required: '用户名不能为空',
                        minlength: '用户名不能小于6',
                        maxlength: '用户名不能大于20',
                        remote: '用户名已存在'
                    },
                    password: {
                        required: '密码不能为空',
                        minlength: '密码不能小于8位',
                        maxlength:'密码不能大于20位'
                    },
                    repass: {
                        required: '密码重复不能为空',
                        equalTo: '密码不匹配'
                    },
                    email: {
                        required: '电子邮箱不能为空',
                        email: '你输入的格式有误'
                    },
                    telphone:{
                        required: '密码不能为空', 
                        maxlength:'电话号码格式不正确'
                    }
                }

            });
        });

        $.validator.setDefaults({
            //添加校验成功后的执行函数--修改提示内容，并为正确提示信息添加新的样式(默认是valid)
            success: function (label) {
                label.text('√').css('color', 'green').addClass('valid');
            }
        });








    })
});