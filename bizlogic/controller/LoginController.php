<?php

class LoginController
{
    private $connection, $table = 'user';
    public $username, $password, $rowCount;

    public function __construct($connection)
    {
        $this->connection = $connection;
    }

    public function login()
    {
        try
        {
            $query = $this->connection->prepare('SELECT * FROM '.$this->table.' WHERE username=:username;');
            $query->bindParam('username', $this->username);
            $query->execute();
            $rowCount = $query->rowCount();
            $rowData = $query->fetch(PDO::FETCH_ASSOC);
            if($rowCount===1)
            {
                if($rowData['password']===$this->password)
                {
                    $this->rowCount = $rowCount;
                }
                else
                {
                    $this->rowCount = $rowCount - 1;
                }
            }
            else
            {
                $this->rowCount = $rowCount - 2;
            }
        }
        catch(PDOException $exception)
        {
            echo json_encode("Server side error! ".$exception);
        }
    }
}