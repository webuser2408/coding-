var input = document.getElementById("value")
var tasklist = document.getElementsByClassName("tasklist")[0]
function addtask(){
   
    
    if(input.value.trim() != ""){
        li = document.createElement("li")
        li.innerHTML = input.value + '<button class="btn-edit" onclick ="taskedit(this)">Edit</button>' + '<button class="btn-remove" onclick="taskremove(this)">Remove</button>';
        tasklist.appendChild(li)
    }

    else{
        alert("Plz Enter Task ");
    }



}

function taskremove(btn){
    li = btn.parentNode;
    tasklist.removeChild(li);
}

function taskedit(btn){
    text = btn.parentNode[0]
    console.log(text)
}