// var userName = "Ahmed";
// var userName = undefined
// var age = 25;
// var output = `I'm ${userName} and I'm ${age++} years old`
// console.log(age);
// console.log(output);

// var number = 10

// function getNumber()
// {
//     var number = 20
//     console.log(number);
// }

// getNumber()
// console.log(number);

// var number = 10
// var x = true
// if(x === true)
// {
//     var number = 20
// }
// console.log(number);

// var i = "Mohamed"
// for(var i = 1 ; i <= 10 ; i++)
// {
//     console.log(i);
// }
// console.log(i);

// var x = 5
// var x = 8
// console.log(x);

// console.log(userName);
// userName = "Ali"

// const aaaa = "Ahmed"

// console.log(window);

// const number = 5
// function getNumber()
// {
//     const number = 10
//     console.log(number);
// }
// getNumber()
// console.log(number);

// let number = 5
// let name = "Ahmed";
// let age = 25
// let x = true
// if(x)
// {
//     let number = 10
//     let name = "Sara"
//     let age = 39307
//     console.log(number , age ,name);
// }
// console.log(number, age, name);

// let i = "Ali"
// for(let i = 1 ; i <=10 ; i++)
// {
//     console.log(i);
// }
// console.log(i);

// for(const i = 0 ; i <= 10 ; i++)
// {
//     console.log(i);
// }

// let userName = "Ahmed"
// let userName = "Ali"
// console.log(userName);

// const name = "Ahmed"
// name = "Ali"
// console.log(name);

// let aaaa = 1
// console.log(window);

// console.log(x);
// const x = 5
// console.log(x);

// function getName(x)
// {
//     console.log(x);
// }

// getName("Hello")

// const get_Name = x => console.log(x);
// get_Name("Mohamed")

// const getNumbers = number =>
// {
//     for(let i = 1 ; i <= number ; i++)
//     {
//         if(i % 2 === 0)
//         {
//             console.log(`${i} This is Even Number`);
//         }
//         else
//         {
//             console.log(`${i} Is Odd Number`);
//         }
//     }
// }

// getNumbers(40)

// const numbers1 = [1,2,3,4,5]
// const numbers2 = numbers1
// numbers1.push(20)
// console.log(numbers2);
// const numbers1 = [1,2,3,4,5]
// const numbers2 = [...numbers1,6,7,8,9,10]
// // numbers2.push(50)
// console.log(numbers1);

// const names = ["Ahmed", "Sara" , "Mohamed" , "Ali" , "Amr"]
// const [name1, ,name3 , ...x] = names

// name1 = names[0];
// name2 = names[1];
// console.log(names[2]);

// const user = {
//     userName : "Mohamed",
//     age : 30,
//     address : "Cairo"
// }
// const {userName ,...userData} = user
// console.log(userData);

// const users = [
//     {
//         userName : "Ahmed",
//         age : 50,
//         mobile: ["01017866053" , "0111996336"]
//     }
// ]

// const [{mobile}] = users
// const [mob1 , mob2] = mobile
// console.log(mob2);

// const numbers = [1,2,3,4,5,6,7,8,9,10]
// numbers.forEach(function(el,idx){
//     console.log(idx);
// })
// for(let i = 0 ; i < numbers.length ; i++)
// {
//     console.log(numbers[i]);
// }

// const names = ["Ahmed" , "Ali" , "Amr" , "Mohamed" , "Sara"]

// names.map(el => console.log(el))

// const y = (z) => console.log();

// const user = {
//         userName : "Ahmed",
//         age : 50,
//         mobile: ["01017866053" , "0111996336"]
//     }
// user.map(el => console.log(el.userName))

// const users = [
//   {
//     userName: "Ahmed",
//     age: 30,
//     mobile: "0174252644",
//   },
//   {
//     userName: "Mohamed",
//     age: 30,
//     mobile: "0174252644",
//   },
//   {
//     userName: "Ali",
//     age: 30,
//     mobile: "0174252644",
//   },
//   {
//     userName: "Sara",
//     age: 30,
//     mobile: "0174252644",
//   },
//   {
//     userName: "Amr",
//     age: 30,
//     mobile: "0174252644",
//   }
// ]
// const newUsers = users.map(el => console.log(el))

// const x = [1,2,3,4,5,6,7,8,9,10]
// const newX = x.filter(el => el > 5)
// console.log(newX);

// const getMaxAndMin = (num1, num2, num3) => {
//   if (num1 > num2 && num2 > num3) {
//     console.log(`${num1} is the maximum and ${num3} is the min`);
//   }else if (num1 > num2 && num3 > num2) {
//     console.log(`${num1} is the maximum and ${num2} is the min`);
//   } else if (num2 > num1 && num1 > num3) {
//     console.log(`${num2} is the max and ${num3} is the min`);
//   } else if (num3 > num2 && num2 > num1) {
//     console.log(`${num3} is the maximum and ${num1} is the min`);
//   } else if (num1 > num2 && num3 > num2) {
//     console.log(`${num1} is the maximum and ${num2} is the min`);
//   } else {
//     console.log("all numbers are equal");
//   }
// };

// getMaxAndMin(5,5,3);

// console.log(Math.min(3,2,1));

// const getGrades = (g1,g2,g3,g4,g5) =>{
//     let total = g1 + g2 + g3 + g4 + g5
//     console.log(`Total Grades are ${total}`);
//     let average = total / 5
//     console.log(`Average is ${average}`);
//     let percentage = total * 0.8
//     console.log(`Percentage is ${percentage}`);
// }
// getGrades(60,80,95,100,75)

// const getMonth = (number) => {
//   if (number > 0 && number <= 12) {
//     if (
//       number === 1 ||
//       number === 3 ||
//       number === 5 ||
//       number === 7 ||
//       number === 8 ||
//       number === 10 ||
//       number === 12
//     ) {
//       console.log("This month is 31 Day");
//     } else if (number === 2) {
//       console.log("This month is 28 day");
//     } else {
//       console.log("This month is 30 day");
//     }
//   }
//   else
//   {
//     console.log("Number is out of range");
//   }
// };
// getMonth(-16);


console.log(2**4);