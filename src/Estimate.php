<?php
 
$name = $_POST['user_name'];
$phone = $_POST['textmask'];



$token = "1046029664:AAG13PJGy5KcRhxqLjG8wLxg-UrZVdegyy8";
 
$chat_id = "-420556821";

$thank_you = file_get_contents("../src/components/ThankYou/ThankYou.html");

readfile("../src/components/ThankYou/ThankYou.html");
$arr = array(
  'Оценка уборки для' => $name,
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,

);
 
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};
 
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
 
if ($sendToTelegram) {
  echo file_get_contents("../src/components/ThankYou/ThankYou.html");
} else {
  echo "Error";
}
?>