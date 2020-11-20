<?php
 
$name = $_POST['user_name'];
$phone = $_POST['userPhone'];
$location = $_POST['adress'];
$promo = $_POST['user_promo'];
$date = $_POST['user_date'];
$find = $_POST['user_find'];
$file_url = $_POST['fileURL'];


$token = "1046029664:AAG13PJGy5KcRhxqLjG8wLxg-UrZVdegyy8";
 
$chat_id = "-420556821";

 
  

$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Местоположение: ' => $location,
  'Промокод: ' => $promo,
  'Дата: ' => $date,
  'От куда нас нашли: ' => $find,
);
 
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};
 
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
 
if ($sendToTelegram) {
  echo "Thank you";
} else {
  echo "Error";
}
?>