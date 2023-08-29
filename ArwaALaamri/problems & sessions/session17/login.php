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
        <h1>Login</h1>
      <form method="post">
        <div class="form-input">
          <label for="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div class="form-input">
          <label for="password">Password</label>
          <input type="password" id="password" name="password"  />
        </div>
        <input type="submit" id="submitBtn" name="login" value="Login"/>
      </form>
    </div>
  <?php
    if(isset($_POST['login']))
    {
      $uname = $_POST['username'];
      $upass = $_POST['password'];
      $gett = "SELECT * FROM `user` where `username` = '$uname'";
      $qdone = mysqli_query($bdconnect , $gett);
      // print_r($qdone);
      $ok = mysqli_fetch_assoc($qdone);
      // print_r($ok['password']);
      // print_r(mysqli_num_rows($qdone));
  
        if(mysqli_num_rows($qdone) > 0)
        {
          if($ok['password'] == $upass)
          {
            session_start();
            $_SESSION['username'] = $uname;
            header('location: index.php');

            // echo("<script>window.alert('Logged')</script>");
          }
          else
          {
            echo("<h1>Username or password maybe wrong</h1>");
          }
        }
      }
  ?>
<script src="js/script.js"></script>
  </body>
</html>