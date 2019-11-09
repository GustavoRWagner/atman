<?php
require __DIR__."/vendor/autoload.php";



use Source\Sys\Connect;

$pdo1 = Connect::getInstance();
$pdo2 = Connect::getInstance();

var_dump($pdo1, $pdo2);