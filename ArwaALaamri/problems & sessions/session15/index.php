<?php
    include('config.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post" enctype="multipart/form-data">
        <input type="text" style="width:500px" name="inputname" placeholder="imgname"><br>
        <input type="password" name="inputpassword" id="" placeholder="pw"><br>
        <input type="file" name="inputimage" id=""><br>
        <input type="submit" name="submit" id="">
    </form>
    <?php
        if(isset($_POST['submit']))
        {
            $imgname = htmlspecialchars($_POST['inputname']);
            $imgpassword = htmlspecialchars($_POST['inputpassword']);
            $image = $_FILES['inputimage'];
            $path = 'images/' . $image['name'];
            // print_r($path);
            $insertmethod = "INSERT INTO `imagedata`(`imgname`,`imgpw`,`imgsrc`)VALUES ('$imgname','$imgpassword','$path')";
            $finalconnection = mysqli_query($dbconnection , $insertmethod);
        }
    ?>
    <!-- <img src="images/cat.jpg" alt=""> -->
</body>
</html>