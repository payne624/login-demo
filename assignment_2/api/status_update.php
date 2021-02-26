<?php


header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With ');

include_once '../config/config.php';
include_once '../models/model.php';


$database=new Database();
$db=$database->connect();

$create=new Model($db);

$data=json_decode(file_get_contents("php://input"));

$create->status=$data->status;
$create->user=$data->user_id;

if($create->post()){
    echo json_encode(
        array('message'=>'Account Created')
    );
}else{
    echo json_encode(
        array('message'=>'Account creation unsuccessfull')
    );
}



?>