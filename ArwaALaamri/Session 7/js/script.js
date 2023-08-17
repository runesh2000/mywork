// let element = document.getElementById('x')
// let text = "<h1>Sara</h1>"
// element.innerHTML = text
// element.innerHTML += "Mohamed"
// console.log(element);

// // for(let i = 0 ; i <= element.length ; i++)
// // {
// //     console.log(element[i]);
// // }

// let text = document.getElementById('text')

// text.innerHTML = "Ahmed <br>"
// text.innerHTML += "Amr";
// text.innerHTML += "Ali";
// text.innerHTML += "Amr";

// let btn = document.getElementById('btn')

// btn.addEventListener('click' , function(){
//     let inp1 = document.getElementById("inp1");
//     let inp2 = document.getElementById("inp2");
//     let text = document.getElementById('text')
//     let result = parseInt(inp1.value) + parseInt(inp2.value)
//     text.innerHTML = result
//     // console.log(result);
// })


// let x = "5"
// console.log(typeof(+x));

// let btn = document.getElementById('btn')
// btn.addEventListener('dblclick' , function(){
//     let box = document.getElementsByClassName('box')[0]
//     box.classList.toggle('hide')
// })

// btn.addEventListener('click' , function(){
//     let box = document.getElementsByClassName('box')[0]
//     // box.style.backgroundColor = 'red'
//     // box.style.transition = '1s'
//     // box.style.width = "500px"
//     box.classList.add('x')
// })

// let box = document.getElementsByClassName('box')[0]
// let text = document.getElementById('text')
// box.addEventListener("mouseenter" , function(){
//     // console.log("Welcome");
//     text.innerHTML = "Welcome"
// })
// box.addEventListener('mouseleave', function(){
//     text.innerHTML = "Bye"
// })
// box.addEventListener('mousedown' , function(){
//     text.innerHTML = "Clicked"
//     console.log('clicked');
// })
// box.addEventListener('mouseup' , function(){
//     text.innerHTML = "Up"
// })
// box.addEventListener('mousemove' , function(){
//     console.log("Mouse Moved");
// })

// console.log(window);

// window.addEventListener('keydown' , function(letter){
//     console.log(letter);
//     // if(letter.code === "KeyX")
//     // {
//     //     // console.log(letter.code);
//     //     document.body.style.background = "red"
//     // }
// })
// window.addEventListener("keyup", function (letter) {
//   // console.log(letter.code);
//   if (letter.code === "KeyX") {
//     // console.log(letter.code);
//     document.body.style.background = "green";
//   }
// });

//  let box = document.getElementsByClassName("box")[0];

setTimeout(function(){
    console.log("Welcome");
} , 3000)