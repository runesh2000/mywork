// let element = document.createElement('div')
// // // element.classList.add('box')
// // element.setAttribute('class' , 'box')
// // element.setAttribute('id' , 'x')
// document.body.appendChild(element)

// creating div (parent)
// let divElement = document.createElement('div')
// divElement.setAttribute('id' , 'container')
// divElement.classList.add('container')
// //creating child
// let hElement = document.createElement('h1')
// hElement.innerHTML = "Welcome"
// divElement.appendChild(hElement);
// document.body.appendChild(divElement)

// document.write('<h1>Welcome</h1>')

//---------------------------------------------------------------------

let productName = document.getElementById("productname");
let productPrice = document.getElementById("productprice");
let productCategory = document.getElementById("productcategory");
let productDescription = document.getElementById("productdescription");
let addBtn = document.getElementById("addBtn");
let arrOfProducts = [];

if (localStorage.getItem("products") !== null) {
  arrOfProducts = JSON.parse(localStorage.getItem("products"));
  loopData();
}
addBtn.addEventListener("click", () => {
  let productData = {
    pname: productName.value,
    pprice: productPrice.value,
    pcategory: productCategory.value,
    pdescription: productDescription.value,
  };
  arrOfProducts.push(productData);
  loopData();
  clearData();
  localStorage.setItem("products", JSON.stringify(arrOfProducts));
});

function loopData() {
  let tableData = "";
  let idCounter = 1;
  for (let i = 0; i < arrOfProducts.length; i++) {
    tableData += `
            <tr>
                <td>${idCounter++}</td>
                <td>${arrOfProducts[i].pname}</td>
                <td>${arrOfProducts[i].pprice}</td>
                <td>${arrOfProducts[i].pcategory}</td>
                <td>${arrOfProducts[i].pdescription}</td>
                <td><button id="delBtn" onclick="deleteData(${i})">Delete</button></td>
                <td><button id="updateBtn">Update</button></td>
            </tr>
        `;
  }
  document.getElementById("info").innerHTML = tableData;
}
function deleteData(element) {
  arrOfProducts.splice(element, 1);
  loopData();
  localStorage.setItem("products", JSON.stringify(arrOfProducts));
}
function clearData() {
  productName.value = "";
  productPrice.value = "";
  productCategory.value = "";
  productDescription.value = "";
}

let username;

console.log(usf);