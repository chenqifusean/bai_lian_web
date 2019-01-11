<?php
include 'concat.php';


    $user=$_POST['username'];
    $pass=sha1($_POST['password']);  
    $query=mysql_query("select * from bailian_user where user_name='$user' and password='$pass'");
    if(mysql_fetch_array($query)){
        echo "true";
        header('location:http://127.0.0.1/bainian_shop/src/main.html')；
    }else{
        echo "false";
    }
    


?>