<?php

echo "Hello World2!";
echo '<br>';

$body = file_get_contents('php://input');
echo $body;
echo '<br>';

$url = $_SERVER['REQUEST_URI'];

parse_str($url, $output);
echo $output['id'];
echo '<br>';
echo $output['fen'];
