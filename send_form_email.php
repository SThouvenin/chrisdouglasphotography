<?php
if(isset($_GET["submit"])) {
$recipient = "shannon.thouvenin@gmail.com"; //my email
echo $subject = 'Email message from Chris Douglas Photography Site';
echo $name = $_GET ["yourName"];
echo $email = $_GET["yourEmail"];
echo $phone = $_GET["yourPhone"];
echo $location = $_GET["yourLocate"];
echo  $message = $_GET["yourMessage"];

 $mailBody="Name: $name\nEmail: $email\n\n$message"; 

 mail($recipient, $subject, $mailBody, "From: $name <$email>");

echo $thankYou="<p>Thank you! We will be in contact with you shortly.</p>";

}
?>