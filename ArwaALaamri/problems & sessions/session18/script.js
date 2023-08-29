// let x = setTimeout(function(){
//     // alert("Welcome")
//     document.body.innerHTML = "<h1>Welcome</h1>"
// } , 5000)
// console.log(x);
// let y = setTimeout(function(){
//     // alert("Welcome")
//     document.body.innerHTML = "<h1>Welcome</h1>"
// } , 5000)
// console.log(y);
// let z = setTimeout(function(){
//     // alert("Welcome")
//     document.body.innerHTML = "<h1>Welcome</h1>"
// } , 5000)
// console.log(z);
// // setInterval(function()
// // {
// //     console.log("Welcome");
// // } , 2000)
let img = document.getElementById('x')
let s = ['images/cat.jpg' , 'images/logo1.webp' , 'images/one.jpg' , 'images/two.jpeg']
let counter = 0
setInterval(()=>{
    img.setAttribute('src' , s[counter])
    counter++
    if(counter > s.length -1)
    {
        counter = 0
    }

} , 1000)

// for(let i = 0 ; i <s.length ; i++)
// {
//     console.log(s[i]);
// }