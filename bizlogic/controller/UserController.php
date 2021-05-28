<?php


class UserController
{
    private $connection, $table='user';
    public $rowsData;

    public function __construct($connection)
    {
        $this->connection = $connection;
    }

    public function index()
    {
        try
        {
            $query = $this->connection->prepare('SELECT id, name, username, email FROM '.$this->table.';');
            $query->execute();
            $rowsData = $query->fetchAll();
            if($rowsData)
            {
                $this->rowsData = $rowsData;
            }
        }
        catch(PDOException $exception)
        {
            echo json_encode("Server side error! ".$exception);
        }
    }

}