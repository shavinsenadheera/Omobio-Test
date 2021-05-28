<?php


class DbController
{
    private $connection;
    private $host = "localhost";
    private $dbname = "exam";
    private $username = "root";
    private $password = "";

    public function getConnection()
    {
        try
        {
            $connection = new PDO(
                "mysql:host=".$this->host.";dbname=".$this->dbname,
                $this->username,
                $this->password
            );

            $this->connection = $connection;
        }
        catch(PDOException $exception)
        {
            echo json_encode("Database connection cannot create! ".$exception);
        }

        return $this->connection;
    }
}