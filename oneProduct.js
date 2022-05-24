[
    {"id": "0", "name":"Shirt 0", "avatar":"./photos/shopping-1.png" , "description": "This is Noble shirt 0."},
    {"id": "1","name":"Shirt 1", "avatar":"./photos/shopping-2.png" , "description": "This is Noble shirt 1."},
    {"id": "2","name":"Shirt 2", "avatar":"./photos/shopping-3.jpeg" , "description": "This is Noble shirt 2."}
  ]
  function loadId(){
    //KEYS WITH PROPERTIES FOR INDIVIDUAL PRODUCTS//
    let arrayIds = [
      {"id": "0", "name":"Shirt 0", "avatar":"photos/shopping-2.png" , "description": "This is Noble shirt 0."},
      {"id": "1","name":"Shirt 1", "avatar":"photos/shopping-2.png" , "description": "This is Noble shirt 1."},
      {"id": "2","name":"Shirt 2", "avatar":"photos/shopping-2.png" , "description": "This is Noble shirt 2."}
    ]
    console.log('whatever');
    let searchParams = new URLSearchParams(window.location.search)
    let grabName=document.getElementById('productName');
    let grabDescription=document.getElementById('productDescription');
    let param = parseInt(searchParams.get('chosenproduct'));    
    let grabPhoto=document.getElementById("grabPhoto");
    grabPhoto.src = arrayIds[param].avatar;
    //let searchParams = new URLSearchParams(window.location.search);
    searchParams.has('chosenproduct');
    //let param = parseInt(searchParams.get('chosenproduct'));

    grabName.innerHTML = arrayIds[param].name;
    grabDescription.innerHTML = arrayIds[param].description;
    grabPhoto = arrayIds[param].avatar;
  }

  function myFunction() {
    let grabPhoto=document.getElementById("grabPhoto");
    grabPhoto.src = "immigrants.png";

  }