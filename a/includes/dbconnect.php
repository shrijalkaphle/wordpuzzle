<?php
    $server = $_SERVER['SERVER_NAME'];;
    
    $user = 'root';
    $password = '';
    $db = 'wordpuzzle';

    // Deployment
    // $db = 'researc6_wordpuzzle';
    // $user = 'researc6_user';
    // $password = 'w0rdpuzzle123';

    $conn = new mysqli($server,$user,$password,$db);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
