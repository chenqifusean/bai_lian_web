<?php
include 'concat.php';
$query="select * from bai_lian_love_shop";
$reslult=mysql_query($query);
$arr=array();
for($i=0;$i<mysql_num_rows($reslult);$i++){
    $arr[$i]=mysql_fetch_array($reslult,MYSQL_ASSOC);
}

echo json_encode($arr);
?>