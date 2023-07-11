<?php

$post = (!empty($_POST)) ? true : false;

if($post)
{
$email = trim($_POST['email']);
$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$message = htmlspecialchars($_POST['message']);
$tel = htmlspecialchars($_POST["phone"]);
$company = htmlspecialchars($_POST["company_name"]);
$transport = htmlspecialchars($_POST["type_transport"]);
$goods = htmlspecialchars($_POST["cargo_name"]);
$weight = htmlspecialchars($_POST["weight"]);
$from = htmlspecialchars($_POST["cargo_from"]);
$to = htmlspecialchars($_POST["cargo_to"]);
$error = '';

if(!$name)
{
$error .= 'Your name is not correct<br />';
}

function ValidateTel($valueTel)
{
$regexTel = "/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/";
if($valueTel == "") {
return false;
} else {
$string = preg_replace($regexTel, "", $valueTel);
}
return empty($string) ? true : false;
}
if(!$email)
{
$error .= "wrong email<br />";
}
if($email && !ValidateTel($email))
{
$error .= "please repeat email<br />";
}
if(!$error)

// (length)
if(!$message || strlen($message) < 1)
{
$error .= "Please your correct email<br />";
}
if(!$error)
{


$name_tema = "=?utf-8?b?". base64_encode($name) ."?=";

$subject ="New message from website bs-georgia.ge";
$subject1 = "=?utf-8?b?". base64_encode($subject) ."?=";
/*
$message ="\n\n?????????: ".$message."\n\n???: " .$name."\n\n???????: ".$tel."\n\n";
*/
$message1 ="\n\nName: ".$name."\n\nPhone: " .$tel1."\n\nEmail: " .$email."\n\nCompany name: " .$company."\n\nType of transportation: " .$transport."\n\nCargo name: " .$goods."\n\nWeight (kg): " .$weight."\n\nFrom country [city]: " .$from."\n\nTo country [city]: " .$to."\n\nMessage: ".$message."\n\n";	


$header = "Content-Type: text/plain; charset=utf-8\n";

$header .= "From: New Order from .$email\n\n";	
$mail = mail("ops@bsgeorgia.ge", $subject, iconv ('utf-8', 'windows-1251', $message1), iconv ('utf-8', 'windows-1251', $header));

if($mail)
{
echo 'OK';
}

}
else
{
echo '<div class="notification_error">'.$error.'</div>';
}

}
?>