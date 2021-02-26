<?php

class Database{

    private $servername='localhost';
    private $serveruser="doordoor_root";
    private $serverpass="doorman@7654";
    private $databasename="doordoor_user_address";
    private $conn;


    public function connect() {
        $this->conn=null;
        try{
            $this->conn=new PDO('mysql:host='.$this->servername.';dbname='.$this->databasename, $this->serveruser, $this->serverpass);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
        }catch(PDOException $error){
            echo "Connection Error :".$error->getMessage();
        }
        return $this->conn;
    }
}
?>