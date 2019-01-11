define(['config'], function () {
    require(['jquery'], function () {
        //1.打开页面看是否有cookie，有并渲染页面
        var arrsid = [];
        var arrnum = [];
        if (getcookie('cookiesid') && getcookie('cookienum')) {
            kong();
            var s = getcookie('cookiesid').split(',');//数组sid
            var n = getcookie('cookienum').split(',');//数组num
            $.each(s, function (i, value) {
                goodslist(s[i], n[i]);
            });
        }

        function kong() {
            if (getcookie('cookiesid') && getcookie('cookienum')) {
                $('.empty_cart').hide();
            } else {
                $('.empty_cart').show();
            }
        }


        function goodslist(id, count) {
            $.ajax({
                type: 'post',
                async: true,
                url: 'http://127.0.0.1/bainian_shop/php/cart.php',
                dataType: 'json'
            }).done(function (data) {
                $.each(data, function (index, value) {
                    if (id == value.s_id) {
                        var $clonebox = $('.all_shop_list:hidden').clone(true, true);
                        $clonebox.find('.box_img').find('img').attr('src', value.s_index_img);
                        $clonebox.find('.box_img').find('img').attr('sid', value.s_id);
                        $clonebox.find('.shop_name').find('a').html(value.s_title);
                        $clonebox.find('.shop_price').find('span').html(value.s_price);
                        $clonebox.find('.shop_num').find('input').val(count);
                        $clonebox.find('.name').find('span').html(s.size);
                        //计算每个商品的价格。
                        $clonebox.find('.all_price').html((value.s_price * count).toFixed(2));
                        $clonebox.css('display', 'block');
                        $('.all_shop').append($clonebox);
                    }
                });

                //5.全选操作
                $('.quanxuan').on('change', function () {
                    $('.all_shop_list:visible').find(':checkbox').prop('checked', $(this).prop('checked'));
                    $('.quanxuan').prop('checked', $(this).prop('checked'));
                    priceall();//取消选项，重算总和。
                });

                var $inputs = $('.all_shop_list:visible').find(':checkbox');
                $('.all_shop').on('change', $inputs, function () {//事件的委托的this指向被委托的元素
                    if ($('.all_shop:visible').find('input:checkbox').length == $('.all_shop:visible').find('input:checked').size()) {
                        $('.quanxuan').prop('checked', true);
                    } else {
                        $('.quanxuan').prop('checked', false);
                    }
                    priceall();//取消选项，重算总和。
                });

                //6.数量的改变
                //改变商品数量++
                $('.add').on('click', function () {
                    var $count = $(this).parents('.shop_num').find('input').val();//值
                    $count++;
                    if ($count >= 10) {
                        $count = 10;
                    }
                    $(this).parents('.shop_num').find('input').val($count);//赋值回去

                    $(this).parents('.shop_num').parents('.all_shop_list').find('.all_price').html(singlegoodsprice($(this)));//改变后的价格
                    priceall();
                    setcookie($(this));


                });

                //改变商品数量--
                $('.jian').on('click', function () {
                    var $count = $(this).parents('.shop_num').find('input').val();;
                    $count--;
                    if ($count <= 1) {
                        $count = 1;
                    }
                    $(this).parents('.shop_num').find('input').val($count);
                    $(this).parents('.shop_num').parents('.all_shop_list').find('.all_price').html(singlegoodsprice($(this)));//改变后的价格
                    priceall();
                    setcookie($(this));
                });


                //删除单个商品的函数(委托)
                $('.all_shop').on('click', '.delete', function (ev) {
                    cookietoarray();//得到数组,上面的删除cookie需要。
                    if (confirm('你确定要删除吗？')) {
                        $(this).parents('.action-box').parents('.all_shop_list').remove();//通过当前点击的元素找到整个一行列表，删除
                    }
                    delgoodslist($(this).parents('.action-box').siblings('box_img').find('img').attr('sid'), arrsid);
                    priceall();
                });

                //直接输入改变数量
                $('.shop_num input').on('input', function () {
                    var $reg = /^\d+$/g; //只能输入数字
                    var $value = parseInt($(this).val());
                    if ($reg.test($value)) {//是数字
                        if ($value >= 99) {//限定范围
                            $(this).val(99);
                        } else if ($value <= 0) {
                            $(this).val(1);
                        } else {
                            $(this).val($value);
                        }
                    } else {//不是数字
                        $(this).val(1);
                    }
                    $(this).parents('.goods-item').find('.b-sum').find('strong').html(singlegoodsprice($(this)));//改变后的价格
                    $(this).parents('.shop_num').parents('.all_shop_list').find('.all_price').html(singlegoodsprice($(this)));
                    priceall();
                    setcookie($(this));
                });

                //删除全部商品的函数
                $('.delet_all').on('click', function () {
                    cookietoarray();//得到数组,上面的删除cookie需要。
                    if (confirm('你确定要全部删除吗？')) {
                        $('.all_shop_list:visible').each(function () {
                            if ($(this).find('input:checkbox').is(':checked')) {//复选框一定是选中的
                                $(this).remove();
                                delgoodslist($(this).find('img').attr('sid'), arrsid);
                            }
                        });
                        priceall();
                    }
                });







            })
        }




        function delgoodslist(sid, arrsid) {//sid：当前删除的sid，arrsid:cookie的sid的值
            var $index = -1;
            $.each(arrsid, function (index, value) {//删除的sid对应的索引位置。 index:数组项的索引
                if (sid == value) {
                    $index = index;//如果传入的值和数组的值相同，返回值对应的索引。
                }
            });
            arrsid.splice($index, 1);//删除数组对应的值
            arrnum.splice($index, 1);//删除数组对应的值
            addcookie('cookiesid', arrsid.toString(), 7);//添加cookie
            addcookie('cookienum', arrnum.toString(), 7);//添加cookie
        }



        function setcookie(obj) { //obj:当前操作的对象
            cookietoarray();//得到数组
            var $index = obj.parents('.shop_num').siblings('.box_img').find('img').attr('sid');//通过id找数量的位置
            arrnum[$.inArray($index, arrsid)] = obj.siblings('input').val();
            addcookie('cookienum', arrnum.toString(), 7);
        }

        function cookietoarray() {
            if (getcookie('cookiesid') && getcookie('cookienum')) {
                arrsid = getcookie('cookiesid').split(',');//cookie商品的sid  
                arrnum = getcookie('cookienum').split(',');//cookie商品的num
            }
        }


        //7.计算数量改变后单个商品的价格
        function singlegoodsprice(obj) { //obj:当前元素
            var $dj = parseFloat(obj.parent().siblings('.shop_price').children('span').html());//单价
            var $cnum = parseInt(obj.siblings('input').val());//数量
            return ($dj * $cnum).toFixed(2);//结果
        }

        function priceall() {
            var $sum = 0;
            var $count = 0;
            $('.all_shop_list:visible').each(function (index, element) {
                if ($(element).find('.all_select2 input').prop('checked')) {
                    $sum += parseInt($(element).find('.shop_num').find('input').val());
                    $count += parseFloat($(element).find('.all_price').html());
                }
            });
            $('.choose').find('span').html($sum);
            $('.name span').html($sum);
            $('.zongji').html('￥' + $count.toFixed(2));
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
        // ===================
    })
});





