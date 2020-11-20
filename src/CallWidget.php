<?php
 
$name = $_POST['user_name'];
$phone = $_POST['textmask'];



$token = "1046029664:AAG13PJGy5KcRhxqLjG8wLxg-UrZVdegyy8";
 
$chat_id = "-420556821";




$arr = array(
  'Заказал(а) звонок' => $name,
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,

);
 
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};
 
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
 
if ($sendToTelegram) {
  include "ThankYou.php";
} else {
  echo "Error";
}
?>