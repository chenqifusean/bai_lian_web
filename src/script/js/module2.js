define(['config'], function () {

    require(['jquery'], function () {
        var num = location.search.substring(6);
        $.ajax({
            type: 'post',
            async: true,
            url: 'http://127.0.0.1/bainian_shop/php/main.php',
            dataType: 'json',

        }).done(function (data) {

            //打开页面发送ajax请求，获取数据拼接字符串
            var str = '';
            var arr = data[num - 1].s_img_url.split(';');
            var b_arr = data[num - 1].s_bimg_url.split(';')
            $.each(arr, function (i, n) {
                str += '<li class="some_imgn"><img src="' + arr[i] + '" bigimg="' + b_arr[i] + '"></li>';
            });
            $('.some_img').html(str);

            $('#s_title').html(data[num - 1].s_title);

            var m = `<i>¥</i>&nbsp;${data[num - 1].s_price}`;
            $('#FlashPrice').html(m);

        }).done(function () {


            //鼠标滑过最下面的小图，切换放大镜的图片
            $('.big_phone').attr('src', $('.some_imgn img').eq(0).attr('bigimg'));
            $('.small_pic img').attr('src', $('.some_imgn img').eq(0).attr('src'));

            $('.some_imgn img').on('mouseover', function () {
                var spic_url = $(this).attr('src');
                $('.small_pic img').attr('src', spic_url);
                $('.big_phone').attr('src', $(this).attr('bigimg'));
            });

            //放大镜效果
            var spic = $('.small_pic'),
                s_phone = $('.small_phone'),
                bpic = $('.big_pic'),
                b_phone = $('.big_phone');
            spic.on('mouseover', function () {
                bpic.show();
                s_phone.show();
                var w = (spic.width() * bpic.width()) / (b_phone.width());
                var h = (spic.width() * bpic.width()) / (b_phone.width());
                s_phone.width(w);
                s_phone.height(h);
                var bili = (bpic.width()) / s_phone.width();
                $(document).on('mousemove', function (ev) {
                    var offset = spic.offset();
                    var l = ev.pageX - offset.left - (s_phone.width() / 2);
                    var t = ev.pageY - offset.top - (s_phone.height() / 2);
                    if (l <= 0) {
                        l = 0;
                    } else if (l >= spic.width() - s_phone.width()) {
                        l = spic.width() - s_phone.width();
                    }
                    if (t <= 0) {
                        t = 0;
                    } else if (t >= spic.height() - s_phone.height()) {
                        t = spic.height() - s_phone.height();
                    }

                    s_phone.css({
                        top: t,
                        left: l
                    });
                    b_phone.css({
                        top: -t * bili,
                        left: -l * bili
                    });


                });
                spic.on('mouseout', function () {
                    bpic.hide();
                    s_phone.hide();
                });

            });

            //加入购物车

            // 点击加减增加加入购物车的数量
            $('.jia').on('click', function () {
                $('.num').val(parseInt($('.num').val()) + 1);
            })
            $('.jian').on('click', function () {
                if ($('.num').val() <= 0) {
                    $('.num').val(1);
                } else {
                    $('.num').val(parseInt($('.num').val()) - 1);
                }
            })

            //加入购物车
            var arrsid = []; //商品的sid
            var arrnum = []; //商品的数量
            $('.push_buy_car').on('click', function () {
                var $sid = num;
                cookietoarray();//获取已经存在的cookie值。

                if ($.inArray($sid, arrsid) != -1) {

                    var $num = parseInt(arrnum[$.inArray($sid, arrsid)]) + parseInt($('.num').val());
                    arrnum[$.inArray($sid, arrsid)] = $num;
                    addcookie('cookienum', arrnum.toString(), 10);

                } else {
                    arrsid.push($sid);
                    addcookie('cookiesid', arrsid.toString(), 10);
                    arrnum.push($('.num').val());
                    addcookie('cookienum', arrnum.toString(), 10);
                }

            })

            function cookietoarray() {
                if (getcookie('cookiesid') && getcookie('cookienum')) {
                    arrsid = getcookie('cookiesid').split(',');
                    arrnum = getcookie('cookienum').split(',');
                }
            }

            function addcookie(key, value, days) {
                var d = new Date();
                d.setDate(d.getDate() + days);
                document.cookie = key + '=' + encodeURIComponent(value) + ';expires=' + d;
            }

            function getcookie(key) {
                var strarr = decodeURIComponent(document.cookie).split('; ');
                for (var i = 0; i < strarr.length; i++) {
                    var newarr = strarr[i].split('=');
                    if (newarr[0] == key) {
                        return newarr[1];
                    }
                }
            }

            function delcookie(key) {
                addcookie(key, '', -1);
            }

            function delcookie(key) {
                addcookie(key, '', -1);
            }
            // ===================
        });


    })
});


