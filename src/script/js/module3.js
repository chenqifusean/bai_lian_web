define(['config'], function () {
    require(['jquery'], function () {


        //点击广告栏关闭
        $('#close').on('click',function(){
            $('.guanggao').hide();
        });



        //滚动条移动到遮到网页上部时显示一个新的搜索栏
        $(window).on('scroll',function(){
            if($(window).scrollTop()>=300){
                $('.header_pretend').show();
            }else{
                $('.header_pretend').hide();
            }
        });






        //楼梯
        $(window).on('scroll', function () {
            var $top = $(window).scrollTop();
            if ($top >= $('.section3').offset().top) {
                $('.louti').show();
            } else {
                $('.louti').hide();
            }

            $('.loucheng').each(function (i, n) {
                var $scrolltop = $(this).offset().top + ($(this).offset().top) /4;
                if ($scrolltop > $top) {
                    $('.louti li').eq(i+1).addClass('active').siblings().removeClass('active');
                    return false;
                }

            });
        });

        $('.last').on('click', function () {
            $('html,body').animate({
                scrollTop: 0
            });
        });

        $('.louti li').not('.last').on('mouseover', function () {
            $(this).addClass('active').siblings('li').removeClass('active');
            var $top = $('.loucheng').eq($(this).index()).offset().top;
            console.log($('.loucheng').eq($(this).index()));
            $('html,body').stop(true,true).animate({
                scrollTop: $top
            });
        });



        //鼠标滑过轮播图的zuo边的部件菜单
        $('.section1_li_1').hover(
            function () {
                $('.section1_l_box').show();
            },
            function () {
                $('.section1_l_box').hide();
            }
        );



        // doudou的动画
        var $dou = $('.small_rabi1');
        var flag=true;
        var timer=null;
        $('.dou_ul li').on('mouseenter', function () {
            var $left = 90 * ($(this).index()) + $dou.width() / 4 + 10;
            $dou.css({
                left: $left,
                top:0
            });
            timer=setTimeout(function(){
                $dou.stop(true,true).animate({
                    top: -13
                });
            },500);

            $('.dou_ul li').on('mouseleave', function () {
                $dou.css({
                    left: 0,
                    top:0
                });
                clearTimeout(timer);
            });
        });

        //中间的轮播图
        var $box=$('.lunbo_pic');
			var $btns=$('.lunbo_big ol li');
			var $pics=$('.lunbo_pic li');
			var $num=0;
            var $timer=null;
            var $s1=$('.section1');
            var $arr=[{background:'rgb(242, 194, 111)'},{background:'rgb(238, 205, 169)'},{background:'rgb(249, 205, 144)'},{background:'rgb(255, 225, 189)'},{background:'rgb(251, 207, 172)'},{background:'rgb(253, 174, 199)'},{background:'rgb(236, 183, 169)'},{background:'rgb(255, 212, 181)'}];
            
            $box.hover(function(){
				$('.jiantou_left,.jiantou_right').show();
				clearInterval($timer);
			},function(){
                $('.jiantou_left,.jiantou_right').hide();
				$timer=setInterval(function(){
					$('.jiantou_right').click();
				},2000);
			});
			$btns.on('mouseover',function(){
				$num=$(this).index();
				tabswitch();
            });

			$('.jiantou_right').on('click',function(){
				$num++;
				if($num>$btns.length-1){
					$num=0;
                }
				tabswitch();
            });

			$('.jiantou_left').on('click',function(){
				$num--;
				if($num<0){
					$num=$btns.length-1;
				}
				tabswitch();
            });

			$timer=setInterval(function(){
				$('.jiantou_right').click();
			},2000);


			function tabswitch(){
                $s1.css({
                    background: $arr[$num].background
                });
				$btns.eq($num).addClass('add2').siblings('li').removeClass('add2');
				$pics.eq($num).animate({
					opacity:1
				}).siblings('li').animate({
					opacity:0
				})
            }

       



    })
});