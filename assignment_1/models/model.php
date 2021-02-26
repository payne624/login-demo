<?php
    Class Model{

        private $conn;
        private $table="login";
        private $table2="status";
        private $table3="friends";

        public $registeruser;
        public $registerpass;
        public $user;
        public $user_2;
        public $action;
        public $password;
        public $status;
        public $address;
        public $name;

        public function __construct($db){
            $this->conn=$db;
        }

        public function create(){
            $query=' INSERT INTO '.$this->table.' SET user_id = :username, password = :userpassword, name = :name , address = :useradd  ';

            $stmt=$this->conn->prepare($query);

            $this->registeruser=htmlspecialchars(strip_tags($this->registeruser));
            $this->registerpass=htmlspecialchars(strip_tags($this->registerpass));
            $this->name=htmlspecialchars(strip_tags($this->name));
            $this->address=htmlspecialchars(strip_tags($this->address));


            $stmt->bindParam(':username',$this->registeruser);
            $stmt->bindparam(':userpassword',$this->registerpass);
            $stmt->bindparam(':name',$this->name);
            $stmt->bindparam(':useradd',$this->address);


            if($stmt->execute()){
                return true;
            }

            printf('ERROR:'.$stmt->error);


            return false;


        }

        public function read(){
            $query=" SELECT * FROM ".$this->table." WHERE user_id = :username ";

            $stmt=$this->conn->prepare($query);

            $this->registeruser=htmlspecialchars(strip_tags($this->user));
            
            $stmt->bindParam(':username',$this->registeruser);

            if($stmt->execute()){

            $row=$stmt->fetch(PDO::FETCH_ASSOC);

            $this->user=$row['user_id'];
            $this->password=$row['password'];
            $this->name=$row['name'];
            $this->address=$row['address'];

            
            }else{
                
            }
           
        }

        public function post(){
            $query=' INSERT INTO '.$this->table2.' SET user_id = :username, status = :status ';

            $stmt=$this->conn->prepare($query);

            $this->user=htmlspecialchars(strip_tags($this->user));
            $this->status=htmlspecialchars(strip_tags($this->status));

            $stmt->bindParam(':username',$this->user);
            $stmt->bindparam(':status',$this->status);


            if($stmt->execute()){
                return true;
            }

            printf('ERROR:'.$stmt->error);


            return false;


        }


        public function read_all(){
            $query='SELECT * FROM '.$this->table;

            $stmt=$this->conn->prepare($query);

            $stmt->execute();

            return $stmt;
        }


        public function send_req(){
            $query=' INSERT INTO '.$this->table3.' SET user_one_id = :user_one_id, user_two_id = :user_two_id,status = :status, action_user = :action ';

            $stmt=$this->conn->prepare($query);

            $this->user=htmlspecialchars(strip_tags($this->user));
            $this->user_2=htmlspecialchars(strip_tags($this->user_2));
            $this->action=htmlspecialchars(strip_tags($this->action));
            $this->status=0;

            $stmt->bindParam(':user_one_id',$this->user);
            $stmt->bindparam(':user_two_id',$this->user_2);
            $stmt->bindParam(':action',$this->action);
            $stmt->bindparam(':status',$this->status);


            if($stmt->execute()){
                return true;
            }

            printf('ERROR:'.$stmt->error);


            return false;


        }

        public function req_pending(){
            $query='SELECT * FROM '.$this->table3.' WHERE user_one_id = :user OR user_two_id = :user AND status = :status';

            $stmt=$this->conn->prepare($query);

            $this->user=htmlspecialchars(strip_tags($this->user));
            $this->status=0;

            $stmt->bindParam(':user',$this->user);
            $stmt->bindparam(':status',$this->status);
            

            $stmt->execute();

            return $stmt;
        }
        public function get_user_data(){
            $query=" SELECT * FROM ".$this->table." WHERE user_id = :username ";

            $stmt=$this->conn->prepare($query);

            $this->registeruser=htmlspecialchars(strip_tags($this->user));
            
            $stmt->bindParam(':username',$this->registeruser);

            if($stmt->execute()){

            $row=$stmt->fetch(PDO::FETCH_ASSOC);

            $this->user=$row['user_id'];
            $this->name=$row['name'];
            $this->address=$row['address'];

            
            }else{
                
            }
           
        }

        
        


    }




?>