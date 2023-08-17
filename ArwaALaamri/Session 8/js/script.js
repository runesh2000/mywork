// setTimeout(()=>{
//    setTimeout(()=>{
//     setTimeout(()=>{
//         setTimeout(()=>{
//             console.log("Welcome");
//         } , 4000)
//     } , 3000)
//    } , 2000 )
// } ,1000 )

// let box = document.getElementById('box')
// let btn = document.getElementById('btn')
// // let x = setTimeout(()=>{
// //     box.style.display = 'block'
// // } , 3000)

// // console.log(x);
// btn.addEventListener('click' , ()=>{
//     // clearTimeout(x)
//     clearInterval(x)
// })

// let x = setInterval(() => {
//     console.log("jifoeahqfui");
// }, 1000);


// setTimeout(()=>{
//     box.style.display = 'block'
// } , 3000)

// let box1 = document.getElementById("box1");
// let box2 = document.getElementById("box2");
// let box3 = document.getElementById("box3");
// let box4 = document.getElementById("box4");

// setTimeout(()=>{
//     box1.style.display = 'block'
// }, 1000)
// setTimeout(() => {
//   box2.style.display = "block";
// }, 2000);
// setTimeout(() => {
//   box3.style.display = "block";
// }, 3000);
// setTimeout(() => {
//   box4.style.display = "block";
// }, 4000);

// window.addEventListener('scroll' , ()=>{
//     // console.log("jfiwhfi");
//     console.log(Math.floor(window.scrollY));
//     if(window.scrollY >= 600)
//     {
//         document.body.style.background = 'red'
//     }
//     else
//     {
//         document.body.style.background = 'transparent'
//     }
// })
// let header = document.getElementById("header");
// let nav = document.getElementById("nav");

// window.addEventListener('scroll' , ()=>{
//     // console.log(window.scrollY);
//     if(window.scrollY >= 200)
//     {
//         nav.style.width = "100%";
//         nav.style.top = "0";
//         nav.style.height = "50px";
//     }
//     else
//     {
//         nav.style.width = "70%";
//         nav.style.top = "40px";
//         nav.style.height = "80px";
//     }
// // })
// let btn = document.getElementById('btn')
// window.addEventListener('scroll' , ()=>{
//     console.log(Math.floor(window.scrollY));
//     if(window.scrollY >= 400)
//     {
//         btn.style.display = 'block'
//         btn.addEventListener('click' , ()=>{
//             window.scrollTo({
//                 top :0,
//                 left : 0,
//                 behavior : 'smooth'
//             })
//         })
//     }
//     else
//     {
//         btn.style.display = 'none'
//     }
// })


let main = document.getElementById('main')
let group = document.getElementsByTagName('li')
if(localStorage.getItem('colors') !== null)
{
    let y = JSON.parse(localStorage.getItem("colors"));
    main.style.background = y
}
for( let i = 0 ; i < group.length ; i++)
{
    group[i].addEventListener('click' , function(){
        let x =group[i].getAttribute('liColor')
        main.style.background = x
        localStorage.setItem('colors' , JSON.stringify(x))
    })
}

// let mainImg = document.getElementById("mainImg")
// let imgs = document.getElementsByClassName('image')
// let sources = ["images/bg.jpeg", "images/cat.jpg", "images/logo1.webp"];
// for (let i = 0; i < imgs.length; i++) {
//     imgs[i].addEventListener('click' , ()=>{
//         // let source = imgs[i].getAttribute('src')
//         mainImg.setAttribute('src' , sources[i])
//     })
// }

console.log(window.localStorage);