<?php

$to = 'contact@sabinbot.com';

function url()
{
   return sprintf(
      "%s://%s",
      isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off' ? 'https' : 'http',
      $_SERVER['SERVER_NAME']
   );
}

if ($_POST) {

   $email = trim(stripslashes($_POST['email']));
   $contact_message = trim(stripslashes($_POST['message']));


   if ($subject == '') {
      $subject = "Contact for anything";
   }

   // Set Message
    $message .= "Email address: " . $email . "<br />";
    $message .= "Message: $contact_message";

//   $message .= "Message: <br /> $contact_message";

   // Set From: header
   $from = $name . " <" . $email . ">";

   // Email Headers
   $headers = "From: " . $from . "\r\n";
   $headers .= "Reply-To: " . $email . "\r\n";
   $headers .= "MIME-Version: 1.0\r\n";
   $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

   ini_set("sendmail_from", $to); // for windows server
   $mail = mail($to, $subject, $message, $headers);

   if ($mail) {
      echo "OK";
   } else {
      echo "Something went wrong. Please try again.";
   }

}

?>