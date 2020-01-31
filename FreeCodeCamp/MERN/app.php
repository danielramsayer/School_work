<?php 

    $incomingContentType = $_SERVER['CONTENT_TYPE'];

    if ($incomingContentType != 'application/json') {
        header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error');
        exit();
    }

    $content = trim(file_get_contents("php://input"));
    $decoded - json_decode($content, true);
    $data = array();
    if ($decoded['name'] == 'james') {

    }
    header('Content-Type: application/json');
    echo json_encode(array("data" => $data));

?>