<?php
   include('configuration.php')
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <form method="post">
        <input type="text" placeholder="Username" name="inputusername">
        <input type="password" placeholder="password" name="inputpassword">
        <input type="text" placeholder="phone" name="inputmobile">
        <input type="submit" value="Submit" name="btn">
    </form>
    <?php
        if(isset($_POST['btn']))
        {
            $uname = $_POST['inputusername'];
            $pass = $_POST['inputpassword'];
            $mobile =  $_POST['inputmobile'];
            $querydone = "INSERT INTO `userdata` (`username` , `userpassword`,`usermobile`) VALUES ('$uname' ,'$pass' , '$mobile')";
            $finalquery = mysqli_query($configuration,  $querydone);
        }
        $getData = "SELECT * FROM `userdata`";
        $result=mysqli_query($configuration,  $getData);
        foreach($result as $row)
        {
            print_r($row['username']);
        }
        // print_r($result);
    ?>


    <?php

    // $names = ["Ahmed" , "Mohamed" , "Ali" , "Omar" , "Amr"];

    // for($i = 0 ; $i < count($names) ; $i++)
    // {
    //     print_r($names[$i] . "<br>");
    // }
    // $arr = ['Ahmed'=> 1 , 'Omar' => 2 , "Ali" => 3];
    // print_r($arr['Ahmed']);

    // $students = ["student1" => "Mohamed" , "student2" => "Ahmed"];
    // print_r($students['student1']);
    //    function getSum($num1 , $num2)
    //    {
    //     $result = $num1 + $num2;
    //     echo($result);
    //    }
    //    getSum(5,10);

    // for($i = 0 ; $i <=50 ; $i++)
    // {
    //     echo($i . "<br>");
    // }
    ?>
    <!-- <script>
        let x
        x = 5
    </script> -->
    <!-- <script>
        let x = [1,2,3,4,5,6,7,8]
    </script> -->

    <script src="script.js"></script>
</body>

</html>