// var userName = "ahmed"

// switch(userName)
// {
//     case "mohamed" && "Amr":
//     console.log("Welcome Mr Mohamed");
//     break;
//     case "ahmed":
//     console.log("Welcome Mr ahmed");
//     break;
//     case "Ali":
//     console.log("Welcome Mr Ali");
//     break
//     default:
//     console.log("Thank You");
// }

// var x = '/'
// var number1 = 5
// var number2 = 10

// switch(x)
// {
//     case '+':
//     console.log(number1 + number2);
//     break;
//     case '-':
//     console.log(number1 -number2);
//     break;
//     case '*':
//     console.log(number1 * number2);
//     break
//     case '/':
//     console.log(number1/number2);
//     break;
//     case '%':
//     console.log(number1 % number2);
//     break
//     default:
//     console.log("Invalid Char");
// }

// var x = 5
// console.log(++x); // 6  // 6
// console.log(x); // 6 // 6
// console.log(x++); // 6 // 6
// console.log(x++); // 7 // 6
// console.log(++x); // 8 // 7
// console.log(++x); // 9 // 8
// console.log(x); // 9 //8

// var counter = 51

// // while(counter <= 50)
// // {
// //     console.log(counter);
// //     counter++
// // }

// do {
//   console.log(counter);
//   counter++;
// } while (counter <= 50);

// var numbers = [1,2,3,4,5,6,7,8,9,10]
// var counter = 0
// while(counter < numbers.length)
// {
//     console.log(numbers[counter]);
//     counter++
// }

// for(var x = 1 ; x <= 20 ; x++)
// {
//     console.log(x);
// }

// var numbers = [1,2,3,4,5,6,7,8,9,10]
// for(var i = 0 ; i < numbers.length ; i++)
// {
//     console.log(numbers[i]);
// }

// var names = ["Mohamed" , "Sara" , "Ahmed" , "Mariam" , "Ali" , "Kareem"]

// for(var i = 0 ; i < names.length ; i++)
// {
//     console.log(names[i]);
// }

// var number1 = 100;
// var number2 = 200;

// function calcSum()
// {
//     console.log(number1 + number2);
// }

// calcSum()

// var x = 50;
// var y = 80;
// function getTotal(){
//     var total = x + y
//     return total
// }

// console.log(getTotal());

// function sayHello(x)
// {
//     console.log(x);
// }
// sayHello(50);
// sayHello("ahmed");
// sayHello(true);
// sayHello("50");

// function getSum(num1 , num2)
// {
//     return num1 + num2
// }

// console.log(getSum(10, 20));
// console.log(getSum(100, 200));
// console.log(getSum(67, 718296));

// switch(x)
// {
//     case '+':
//     console.log(number1 + number2);
//     break;
//     case '-':
//     console.log(number1 -number2);
//     break;
//     case '*':
//     console.log(number1 * number2);
//     break
//     case '/':
//     console.log(number1/number2);
//     break;
//     case '%':
//     console.log(number1 % number2);
//     break
//     default:
//     console.log("Invalid Char");
// }

// function gett(num1, num2, char) {
//   switch (char) {
//     case "+":
//       return num1 + num2;
//       break;
//     case "-":
//       return num1 - num2;
//       break
//     case "*":
//       return num1 * num2;
//       break
//       case '/':
//       return num1 /num2
//       break;
//       default :
//       return "Error"
//   }
// }

// console.log(gett(10, 20, "a"));

// var promp = prompt("Enter your number")
// function getSum(x)
// {
//     console.log(x);
// }
// getSum(67156)

// Questions of PDF
//2-
// function sayYesOrNo(number){
//     if(number % 3 === 0 && number % 4 ===0)
//     {
//         return "Yes"
//     }
//     else
//     {
//         return "No"
//     }
// }
// console.log(sayYesOrNo(36));

// 3-

// function getMaxNumber(number1 , number2)
// {
//     if(number1 > number2)
//     {
//         return "Number1 is The max number " + number1
//     }
//     else if (number2 > number1)
//     {
//         return "Number2 is The max number " + number2
//     }
//     else
//     {
//         return "Number1 is equal to number2"
//     }
// }
// console.log(getMaxNumber(20,10));

// 4-
// function getPostiveNumber(number){
//     if(number > 0)
//     {
//         return "Postive"
//     }
//     else if(number <0)
//     {
//         return "Negative"
//     }
//     else
//     {
//         return "Equal to Zero"
//     }
// }

// console.log(getPostiveNumber(0));

// 5-

// function getMaxMin(num1, num2, num3) {
//   if (num1 > num2 && num1 > num3 && num3 > num2) {
//     console.log("Max number is " +num1 + "Min number is " +num2)
//   }
//   else if(num2 > num1 && num2 > num3 && num3 >num1)
//   {
//     console.log("Max is number2 " + num2 + "Min is num1 " + num1);
//   }
//   else if (num3 >num1 && num3 > num2 && num2 >num1)
//   {
//     console.log("Max is Number3 " + num3 + " Min is number1 " + num1);
//   }
// }

// getMaxMin(10,20,30)

// 6-7

// function getEvenOdd(number)
// {
//     if(number % 2 === 0)
//     {
//         console.log("This number is even " + number);
//     }
//     else
//     {
//         console.log("Odd");
//     }
// }

// getEvenOdd(101)

// 8-

// function getVowel(x)
// {
//     switch (x[0]) {
//       case "a":
//         console.log("Vowel");
//         break;
//       case "e":
//         console.log("Vowel");
//         break;
//       case "i":
//         console.log("Vowel");
//         break;
//       case "o":
//         console.log("Vowel");
//         break;
//       case "u":
//         console.log("Vowel");
//         break;
//         default: 
//         console.log("Constant");
//     }
// }
// getVowel("Mohamed")


// var x  = "mohamed"
// for(var i = 0 ; i < x.length ; i++)
// {
//     console.log(x[i]);
// }

// 9-

// function printNumbers(number)
// {
//     for(var i = 1 ; i <= number ; i++)
//     {
//         console.log(i);
//     }
// }
// printNumbers(60)

// 10-

// function getMulipy(number)
// {
//     for(var i = 1 ; i <= 12 ; i++)
//     {
//         console.log(number * i);
//     }
// }
// getMulipy(2)


// 11- 

function getEvenNumbers(number)
{
    for(var i = 1 ; i <=number ; i++)
    {
        if(i % 2 ===0)
        {
            console.log(i);
        }
    }
}
getEvenNumbers(50)