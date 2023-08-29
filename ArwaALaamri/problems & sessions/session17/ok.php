<?php
    include('config.php');

    $quer = "SELECT `imgsrc` FROM `imagedata`";
    $qdone = mysqli_query($bdconnect , $quer);
    print_r($qdone);
    $ok = mysqli_fetch_assoc($qdone);

    $imgsrc = $ok['imgsrc'];
    print_r($imgsrc);
?>
<img src="<?php echo($imgsrc)?>" alt="">