<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

if (isset($_POST['send'])) {
  // Establish database connection
  $servername = 'localhost';
  $username = 'root';
  $password = ''; // Your MySQL root password
  $dbname = 'envoymarketingdata';

  $con = mysqli_connect($servername, $username, $password, $dbname);

  if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
  }

  // Get form data
  $name = mysqli_real_escape_string($con, $_POST['user']);
  $company = mysqli_real_escape_string($con, $_POST['company']);
  $email = mysqli_real_escape_string($con, $_POST['email']);
  $mobile = mysqli_real_escape_string($con, $_POST['mobile']);
  $message = mysqli_real_escape_string($con, $_POST['message']);

  // Save to database
  $query = "INSERT INTO userinfodata (user, company, email, mobile, message) VALUES ('$name', '$company', '$email', '$mobile', '$message')";
  if (mysqli_query($con, $query)) {
    echo "Record inserted successfully.<br>";
  } else {
    die("Error inserting record: " . mysqli_error($con));
  }

  mysqli_close($con);

  $mail = new PHPMailer(true);

  try {
    // Server settings
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'deepalijaiswar00@gmail.com';
    $mail->Password = 'ncxtnzqubjztwfbk'; // Your app-specific password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;

    // Recipients
    $mail->setFrom('deepalijaiswar00@gmail.com', 'Contact Form');
    $mail->addAddress('deepalijaiswar00@gmail.com', 'Deepali');

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'New Contact Form Submission';
    $mail->Body = "Sender Name: $name <br> Sender Company: $company <br> Sender Email: $email <br> Sender Mobile: $mobile <br> Message: $message";

    $mail->send();
    echo 'Message has been sent';
  } catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
  }

  // Redirect to index.html
  header('Location: index.html');
  exit();
}
?>
