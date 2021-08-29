//variable declarations 
let add = document.getElementById("add");
let toDoContainer = document.getElementById("toDoContainer");
let input = document.getElementById("input");
let clearButton = document.getElementById("clear");
var count = 0;

//clicking the add button 
add.addEventListener('click',function(){ 
    
    //check empty input 
    if(input.value==""){
        alert("cannot be empty");
        return;
    }


    //variable delcarations
    var toDoElement = document.createElement('p');
    var checkBox = document.createElement('input');
    var deleteButton = document.createElement('button');
    var toDoRow = document.createElement('div');
    var text = document.createElement('div');
    var rowButtons = document.createElement('div');

    //Assinging attributes, types and innerHTMLs to the elements created 
    toDoRow.setAttribute("id", "toDoRow" + count);   
    toDoElement.setAttribute("id","text" + count);
    checkBox.setAttribute("id","checkBox" + count);
    deleteButton.setAttribute("id","delete" + count);
    rowButtons.setAttribute("id","rowButton" + count);
    count++; //increment row count
    deleteButton.innerHTML = ("remove");
    checkBox.type = "checkbox";
    toDoElement.innerText = input.value;
    input.value = ""; //clears text field 

    //Styling
    toDoElement.classList.add("paragraphStyling");
    toDoRow.classList.add("rowStyling");
    checkBox.classList.add("checkBox");
    deleteButton.classList.add("deleteButton");
    rowButtons.classList.add("rowButtons");
    text.classList.add("text");
    
    //Appending elements 
    toDoContainer.appendChild(toDoRow);
    toDoRow.appendChild(text);
    toDoRow.appendChild(rowButtons);
    text.appendChild(toDoElement);
    rowButtons.appendChild(checkBox);
    rowButtons.appendChild(deleteButton);
    
    //calling functions 
    check(checkBox,toDoElement); //call function for checking rows
    remove(deleteButton,toDoRow,count)
})

//clear button 
clearButton.addEventListener('click',function(e){
    document.getElementById("toDoContainer").innerHTML = "";
    count = 0; //reset count after clicking clear 
})

//cross out a to do element 
function check(checkBox,text){
    checkBox.addEventListener('change',function(e){
        if(checkBox.checked){
            text.style.textDecoration = "line-through";
            text.style.color = "grey";
        }
        if(!checkBox.checked){
            text.style.textDecoration = "none";
            text.style.color = "black";
        }
    })
}

//removing a row 
function remove(removeButton,row){
    removeButton.addEventListener("click",function(e){
        row.remove();
    })
}

