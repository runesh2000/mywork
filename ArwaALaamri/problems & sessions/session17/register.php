<?php
include('config.php');
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/style.css" />
    <title>Document</title>
  </head>
  <body>
    <div class="container">
      <h1>Register</h1>
      <form method="post">
        <div class="form-input">
          <label for="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div class="form-input">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div class="form-input">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div class="form-input">
          <label for="mobile">Mobile</label>
          <input type="text" id="mobile" name="mobile" />
        </div>
        <div class="form-input">
          <label for="address">Address</label>
          <input type="text" id="address" name="address" />
        </div>
        <input type="submit" id="submitBtn" name="submitbtn" />
      </form>
    </div>
    <?php
        if(isset($_POST['submitbtn']))
        {
            $uname = $_POST['username'];
            $upass = $_POST['password'];
            $uemail = $_POST['email'];
            $umobile = $_POST['mobile'];
            $uaddress = $_POST['address'];
            $quer = "INSERT INTO `user` (`username`,`password`,`email`,`mobile`,`address`) VALUES ('$uname','$upass','$uemail','$umobile','$uaddress')";
            $qdone = mysqli_query($bdconnect , $quer);
        }
    ?>

    <script src="js/script.js"></script>
  </body>
</html>