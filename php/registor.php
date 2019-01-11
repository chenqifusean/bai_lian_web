<?php
include './concat.php';
if(isset($_POST['username'])){
    $user_name=$_POST['username'];
    $result=mysql_query("select * from bailian_user where user_name='$user_name'");
    if(mysql_fetch_array($result)){
        echo 'false';
    }else{
        echo 'true';
    }

}

if(isset($_POST['submit'])){
        $user=$_POST['username'];
        $tel=$_POST['telphone'];   
		$pass=sha1($_POST['password']);
		$email=$_POST['email'];
        
        $query="insert bailian_user values(NULL,'$user','$pass','$tel','$email',NOW())";
        echo $query;
        mysql_query($query);
        
     header('location:http://127.0.0.1/bainian_shop/src/login.html');
}
       

?>