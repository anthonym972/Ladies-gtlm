<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");

$email = $_POST['email'];
$email2 = $_POST['email2'];

echo json_encode(array('success' => $email == $email2));
?>