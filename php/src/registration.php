<?php

require_once __DIR__ . '/helpers.php';

// получение данных из формы регистрации

$login = $_POST['login'];
$password = $_POST['password'];

// запись данных в бд

$connect = getDB();

$sql = "INSERT INTO `users` (login, pfssword) VALUES ('$login', '$password')";

if ($connect -> query($sql) === TRUE) {
     echo 'Регистрация прошла успешно!';
} else {
    echo 'Данный пользователь уже зарегистрирован :(';
}