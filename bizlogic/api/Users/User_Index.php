<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Method: POST");
header("Content-Type=application/json;charset=UTF-8");
header("Access-Control-Max-Age: 3600");

include_once '../../controller/DbController.php';
include_once '../../controller/UserController.php';

$DbController = new DbController();
$connection = $DbController->getConnection();

$UserController = new UserController($connection);
$UserController->index();
if($UserController->rowsData)
{
    http_response_code(200);
    echo json_encode($UserController->rowsData);
}
else
{
    http_response_code(404);
    echo json_encode("Details not loading! Server side error!");
}