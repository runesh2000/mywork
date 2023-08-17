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
    if(validation() === true)
    {
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
    }
    else
    {
        alert("Wrong Product Price")
    }
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
                <td><button id="updateBtn" onclick="updateData(${i})">Update</button></td>
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

let saveBtn = document.getElementById("saveBtn");
let y;
function updateData(indexedElement) {
  y = indexedElement;
  productName.value = arrOfProducts[indexedElement].pname;
  productPrice.value = arrOfProducts[indexedElement].pprice;
  productCategory.value = arrOfProducts[indexedElement].pcategory;
  productDescription.value = arrOfProducts[indexedElement].pdescription;
  addBtn.classList.toggle("show");
  saveBtn.classList.toggle("show");
}
saveBtn.addEventListener("click", () => {
  arrOfProducts[y].pname = productName.value;
  arrOfProducts[y].pprice = productPrice.value;
  arrOfProducts[y].pcategory = productCategory.value;
  arrOfProducts[y].pdescription = productDescription.value;
  loopData();
  clearData();
  addBtn.classList.toggle("show");
  saveBtn.classList.toggle("show");
  localStorage.setItem("products", JSON.stringify(arrOfProducts));
});
function clearData() {
  productName.value = "";
  productPrice.value = "";
  productCategory.value = "";
  productDescription.value = "";
}

// let regex = /^968[0-9]{8}$/;
// let number = 96812345678
// console.log(regex.test(number));

function validation()
{
    let priceRegex = /^([1-9][0-9]{2}|1000)$/;
    if(priceRegex.test(productPrice.value) === true)
    {
        return true
    }
    else
    {
        return false
    }
}


// if(validation() === true)
// {

// }