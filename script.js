const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
     if(inputBox.value === ''){
        alert("you must write something");
     }
     else{

        //add to our list
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        //creating a cancel mark for our list
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
     }
     inputBox.value = "";
     saveData();
} 

listContainer.addEventListener("click",function(el){
    
    //when task is complete toggle checked
    if(el.target.tagName === "LI"){
        el.target.classList.toggle("checked");
        saveData();
    }

    //to remove from list
    else if(el.target.tagName === "SPAN"){
        el.target.parentElement.remove();
        saveData();
    }
}, false)

    
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();