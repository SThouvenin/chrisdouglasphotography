<?php
if(isset($_POST["submit"])) {
$recipient = "shannon.thouvenin@gmail.com"; //my email
echo $subject = 'Email message from Chris Douglas Photography Site';
echo $name = $_POST ["yourName"];
echo $email = $_POST["yourEmail"];
echo $phone = $_POST["yourPhone"];
echo $location = $_POST["yourLocate"];
echo  $message = $_POST["yourMessage"];

 $mailBody="Name: $name\nEmail: $email\n\n$message"; 

 mail($recipient, $subject, $mailBody, "From: $name <$email>");

echo $thankYou="<p>Thank you! We will be in contact with you shortly.</p>";

}
?>