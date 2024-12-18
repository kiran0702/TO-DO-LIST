var newtask=document.getElementById("newtask")
var listitems=document.getElementById("listitems")
var tasks=document.getElementById("tasks")

function add(){
  var new_ele= document.createElement("li");
  new_ele.innerHTML=tasks.value + "<button onclick='rem(event)'>Done ✅</button>"
  listitems.append(new_ele)
}

function rem(event){
  event.target.parentElement.remove()
}