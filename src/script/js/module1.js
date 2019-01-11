define(['config'], function () {
    require(['jquery','jqlzload'], function () {
        $.ajax({
            type: 'post',
            async: true,
            url: 'http://127.0.0.1/bainian_shop/php/main.php',
            data: {
            },
            dataType: 'json',

        }).done(function (data) {
           //打开页面发送ajax请求，获取数据拼接字符串
                var str='';
                $.each(data, function (i, n) {
                    str+= `<li><a class="content_img" href="./details.html?s_id=${n.s_id}" target="_blank"><img class="lazy" data-original="${n.s_index_img}" alt="" ></a><div class="content_text">${n.s_title}</div><div class="content_pirce"><div>￥<span class="jiage">${n.s_price}</span><a href="javascript: ;" class="geta">收藏</a></div></div></li>`;
                   
                });

                $('.section13_wrap ul').html(str);
                
                $(function() {
                    $("img.lazy").lazyload({
                        effect: "fadeIn"
                    });
                });
    
        }).fail(function () {
            
        });










    })
});