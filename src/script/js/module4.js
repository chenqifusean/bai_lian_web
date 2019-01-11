define(['config'], function () {
    require(['jquery'], function () {
        $.ajax({
            type: 'post',
            async: true,
            url: 'http://127.0.0.1/bainian_shop/php/registor.php',
            data: {
            },
            dataType: 'json',

        }).done(function (data) {


        }).fail(function () {

        });




    })
});