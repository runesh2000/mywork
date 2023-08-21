// let img = document.querySelector('img')
// let ss = ['images/bg.jpeg' , 'images/cat.jpg' , 'images/logo1.webp']
// let x = 0
// setInterval(()=>{
//     x++
//     img.setAttribute('src' , ss[x])
//     if(x > ss.length -1)
//     {
//         x=0
//     }
// } , 2000)

let main = document.getElementById('main')
let items = document.getElementsByClassName('items')
for(let i = 0 ; i < items.length ; i++)
{
    // console.log(items[i]);
    items[i].addEventListener('click' , function(){
        if(i == 0)
        {
            main.style.background = 'red'
            main.innerHTML = "RED"
        }
        else if(i == 1)
        {
            main.style.background = 'black'
            main.innerHTML = "BLACK"
        }
        else
        {
            main.style.background = 'green'
            main.innerHTML = 'GREEN'
        }

        
    })
}