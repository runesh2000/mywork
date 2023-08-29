<?php
    class student
    {
        // Attributes
       public $student_name = "Ahmed";
       public $student_age = 20;


       //Methods
       public function sayWelcome()
       {
        return "Welcome";
       }
    }

    $student1 = new student();
    echo($student1->sayWelcome());
    // $student1->print_r(sayWelcome());
    // print_r($student1->student_name = "Mohamed");
    // print_r($student1->student_name);
    // print_r($student1->student_age);
    // print_r($student1);
?>