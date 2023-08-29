<?php
    class person
    {
        // Attributes
        public $name ;
        public $age;

        // methods

        public function __construct($x , $y)
        {
            $name = $x;
            $age = $y;
            echo("Welcome " . $x . " abo age " . $y . "<br>");
        }
        // public function ok()
        // {
        //     return "Welcome";
        // }
    }

    $first_person = new person("Ahmed" , 40 );
    $second_person = new person("Mohamed" , 30);
    
    // $first_person -> name = "mohamed"
    // echo($first_person -> ok());
?>