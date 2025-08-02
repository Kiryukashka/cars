<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'phpmailer/src/Exception.php';
  require 'phpmailer/src/PHPMailer.php';

  $mail = new PHPMailer(true);
  $mail->charSet = 'UTF-8';
  $mail->setLanguage('ua', 'phpmailer/language/');
  $mail->IsHTML(true);

  //Від кого письмо
  $mail->setFrom('info@fls.guru', 'Huesos');
  //Кому відправити
  $mail->addAddress('k14190402@gmail.com');
  //Тема письма
  $mail->Subject = 'Hello idi naxyi';

  $body = '<h1>Otsosi pidrila</h1>';

  if(trim(!empty($_POST['name']))) {
    $body.='<p><strong>Name:</strong> '.$_POST['name'].'</p>';
  }
  if(!empty($_POST['email'])) {
    $body.='<p><strong>E-mail:</strong> '.$_POST['E-mail'].'</p>';
  }
  if(trim(!empty($_POST['message']))) {
    $body.='<p><strong>Message:</strong> '.$_POST['message'].'</p>';
  }

  $mail->Body = $body;

  if(!$mail->send()) {
    $message = 'Помилка';
  }else {
    $message = 'Данні відправлено!';
  }

  $response = ['message' => $message];

  header('Content-type: application/json');
  echo json_encode($response);
?>