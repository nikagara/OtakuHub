<?php

require_once __DIR__ . '/helpers.php';  


// получение данных из формы регистрации
// $sql = "SELECT FROM `users`";
$login = $_POST['login'];
$password = $_POST['password'];

// запись данных в бд

$connect = getDB();

$sql = "INSERT INTO `users` (login, password) VALUES ('$login', '$password')";

if ($connect -> query($sql) === TRUE) {
    //  echo 'Регистрация прошла успешно!';
    header("Location: /login.html");
} else {
    echo 'Данный пользователь уже зарегистрирован :(';
}