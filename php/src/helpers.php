<?php

const DB_HOST = 'localhost';
const DB_NAME = 'otaku_hub';
const DB_USER = 'root';
const DB_PASSWORD = '';

function getDB()  {
    return mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
}