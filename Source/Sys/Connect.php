<?php


namespace Source\Sys;

use \PDO;
use \PDOException;

class Connect
{
    const HOST = "localhost";
    const USER = "root";
    const DBNAME = "atman";
    const PASSWD = "";

    const OPTIONS = [
        PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8",
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
        PDO::ATTR_CASE => PDO::CASE_NATURAL
    ];

    private static $instance;

    /**
     * @return PDO
     */
    public static function getInstance()
    {
        if (empty(self::$instance)) {
            try {
                self::$instance = new PDO(
                    "mysql:host=". self::HOST .";dbname=". self::DBNAME,
                    self::USER,
                    self::PASSWD,
                    self::OPTIONS
                );
            } catch (PDOException $exception) {
                die("<h1>Erro ao conectar ao banco</h1>");
            }
        }
        return self::$instance;
    }

    final public function __construct()
    {
    }

    final private function __clone()
    {

    }

}