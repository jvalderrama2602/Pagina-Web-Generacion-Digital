<?php
// Check for empty fields
if( empty($_POST['email']) 		||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
//$name = $_POST['name'];
$email_address = $_POST['email'];
//$phone = $_POST['phone'];
//$message = $_POST['message'];
	
// Create the email and send the message
$to = 'servicios@gendigital.com.ve'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Formulario de contacto web";
$email_body = "Haz recibido un nuevo mensaje.\n\n"."Email: $email_address\n\n";
$headers = "From: noreply@gendigital.com.ve\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
return true;			
// empty($_POST['name']) empty($_POST['email'])       ||
//   empty($_POST['phone'])     ||
//   empty($_POST['message'])   || 
// $email_body = "Haz recibido un nuevo mensaje.\n\n"."Aqui los detalles:\n\nName: $name\n\nEmail: $email_address\n\n Phone: $phone\n\nMessage:\n$message";

?>
