function addProductToSessionStorage(productDiv){
    //create or check if exists local storage currentProduct key
    console.log("productDiv" + productDiv);
    let productId = productDiv.id;
    console.log("productId" + productId);
    let stringUrl = "file:///Users/GovernorBrown/Documents/Github/ECommProject/Ecommerce-NOBLE/oneProduct.html";
    let url = new URL(stringUrl);
    console.log("url is " + url.toString());
    let params =url.searchParams;
    params.append("q", productId);
    console.log("url is " + url.toString());
    location.replace(url.toString());
    //location.replace("file:///Users/GovernorBrown/Documents/Github/ECommProject/oneProduct.html");
    //assign to currentProduct key in local storag the productId param as a value using put or post call
    
}function myFunction() {
   
    location.replace("file:///Users/GovernorBrown/Documents/Github/ECommProject/Ecommerce-NOBLE/oneProduct.html");
      
  }// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}