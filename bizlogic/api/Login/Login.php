<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Method: POST");
    header("Content-Type=application/json;charset=UTF-8");
    header("Access-Control-Max-Age: 3600");

    include_once '../../controller/DbController.php';
    include_once '../../controller/LoginController.php';

    $data = json_decode(file_get_contents('php://input'));

    $DbController = new DbController();
    $connection = $DbController->getConnection();

    $LoginController = new LoginController($connection);
    $LoginController->username = isset($data->username) ? $data->username : die();
    $LoginController->password = isset($data->username) ? $data->username : die();
    $LoginController->login();
    $rowCount = $LoginController->rowCount;
    if($rowCount===1)
    {
        http_response_code(200);
        echo json_encode("Login success!");
    }
    else if($rowCount===0)
    {
        http_response_code(404);
        echo json_encode("Login details invalid!");
    }
    else
    {
        http_response_code(404);
        echo json_encode("user does not exist!");
    }