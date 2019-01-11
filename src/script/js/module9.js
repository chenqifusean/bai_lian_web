define(['config'], function () {
    require(['jquery'], function () {
        function last(obj) {
            var $obj = obj;
            var $ul = $obj.find('ul'),
                $picli = $obj.find('ul').find('li'),
                $btn = $obj.find('ol').find('li'),
                $num = 0,
                $picliwid = $obj.find('ul').find('li').eq(0).width(),
                $timer = null;

            //复制第一个和最后一个picli分别加在首未；固定ul的width
            $ul.append($picli.first().clone());
            $ul.width(($picli.size() + 1) * $picliwid);
            //一开始就要执行；
            $btn.eq(0).find('div').animate({ width: 30 });
            //鼠标化过btn,ol li div的宽度变为100%;
            $btn.on('mouseover', function () {
                clearInterval($timer);
                $num = $(this).index();
                $(this).siblings('li').find('div').width(0);
                $(this).find('div').width(30);
                $ul.css('left', -$picliwid * $num);
            });

            //自动轮播
            function selfdo() {
                tab();
                if ($num > 2) {
                    $num = 0;
                    $btn.eq($num).siblings('li').find('div').width(0);
                    $btn.eq($num).find('div').animate({
                        width: 30
                    }, 1000);

                } else {
                    tab();
                    $btn.eq($num).siblings('li').find('div').width(0);
                    $btn.eq($num).find('div').animate({
                        width: 30
                    }, 1000);
                }

            }

            $timer = setInterval(function () {
                $num++;
                selfdo();
            }, 2000);


            //切换图片
            function tab() {
                $ul.stop(true, true).animate({
                    left: -$picliwid * ($num)
                }, function () {
                    if (parseInt($ul.css('left')) == -$picliwid * $btn.size()) {
                        $ul.css('left', 0);
                        $num = 0;
                    }
                })
            }

            $ul.on('mouseout', function () {
                $timer = setInterval(function () {
                    $num++;
                    selfdo();
                }, 2000);
            });

            $ul.on('mouseover', function () {
                clearInterval($timer);
            });

        }
        var obj3 = $('.section3_left');
        last(obj3);

        var obj4 = $('.section4_left');
        last(obj4);

        var obj5 = $('.section5_left');
        last(obj5);

        var obj6 = $('.section6_left');
        last(obj6);

        var obj7 = $('.section7_left');
        last(obj7);

        var obj8 = $('.section8_left');
        last(obj8);

        var obj9 = $('.section9_left');
        last(obj9);

        var obj10 = $('.section10_left');
        last(obj10);

        var obj11 = $('.section11_left');
        last(obj11);

    })
});