<?php
header('content-type:text/html;charset=utf-8');

define('HOST','127.0.0.1');
	define('USERNAME','root');
	define('PASSWORD','12345678');
	$conn=@mysql_connect(HOST,USERNAME,PASSWORD);
	if(!$conn){
		die("数据库连接失败".mysql_error());  
	}



    if(!mysql_select_db('bai_lian_shop_city')){
		die("数据库名称不存在");
	}else{
		mysql_select_db('bai_lian_shop_city');
	}
	
	mysql_query('SET NAMES UTF8');

?>