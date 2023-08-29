<?php
    include('confing.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<!-- <form method="post" enctype="multipart/form-data">

    <input type="text" name="imgname" id="">
    <input type="password" name="imgpass" id="">
    <input type="file" name="image[]" id="" multiple>
    <input type="submit" name="submit" id="">
</form> -->

<!-- 
<form method="get" action="about.php">

    <input type="text" name="imgname" id="">
    <input type="password" name="imgpass" id="">
    <input type="submit" name="submit" id="">
</form> -->
<?php

// SELECT * FROM `products` where seller_score = $_GET['seller_score']
    // if(isset($_GET['submit']))
    // {
    //     $inpname = $_GET['imgname'];
    //     $inppass = $_POST['imgpass'];
    //     $sora = $_FILES['image'];

    //     for($i = 0; $i < count($sora['name']) ; $i++)
    //     {
    //         $path = 'images/' . $sora['name'][$i];
    //         $tmp = $sora['tmp_name'][$i];
    //         $quer = "INSERT INTO `multiimage` (`name`,`pass`,`images`) VALUES ('$inpname','$inppass','$path')";
    //         $done = mysqli_query($dbconnect ,$quer);
    //         move_uploaded_file($tmp , $path);
    //     }
    //     // print_r(count($sora['name']));
    //     // print_r($path);
    // }
?>

</body>
</html>