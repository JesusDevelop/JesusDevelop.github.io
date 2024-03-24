<?php
date_default_timezone_set("America/Lima");
$servername = "localhost";
$database = "bd_devint";
$username = "root";
$password = "";
$mysqli = new mysqli($servername, $username, $password, $database);
if ($mysqli->connect_errno) {
    printf("Falló la conexión: %s\n", $mysqli->connect_error);
    exit();
}
?>