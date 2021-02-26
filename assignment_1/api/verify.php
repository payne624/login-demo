<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    


    include_once '../config/config.php';
    include_once '../models/model.php';

    $database=new Database();
    $db=$database->connect();

    $post=new Model($db);

    $send_data=json_decode(file_get_contents("php://input"));


    $post->user=$send_data->login;

    $post->read();


    if($send_data->login==$post->user&&$send_data->password==$post->password){
        $data_arr=array(
            'message'=>"true",
            'user' => $post->user
        );
    }else{
        $data_arr=array(
            'message'=>"false",
            'user' => $post->password
        );

    }
    
   

  
    echo(json_encode($data_arr));





?>