const error=document.getElementById("error");

function add_item(e){
   
    let item=document.getElementById("box");
    let list_item=document.getElementById("list-item")
    if(item.value!=""){
        let makeLi=document.createElement("li");

          // Create a span element for the to-do item text
     let itemText = document.createElement("span");
     itemText.textContent = item.value;
     makeLi.appendChild(itemText);

     // Create a delete icon using Font Awesome
     let deleteIcon = document.createElement("i");
     deleteIcon.className = "fas fa-trash-alt";
     makeLi.appendChild(deleteIcon);

     // Add the list item to the to-do list
     list_item.appendChild(makeLi);

     item.value = "";
     error.textContent = "";

     // Set up the click event for the delete button
     deleteIcon.onclick = function () {
         list_item.removeChild(makeLi);
     };
        
    }else{
        error.textContent="Please add a To-Do Item First";
    }
 
}

  