document.addEventListener("DOMContentLoaded",function(){
  document.querySelector("#submit").disabled=true;
  document.querySelector("#task").onkeyup=function(){
    if(document.querySelector("#task").value.length >5){
        document.querySelector("#submit").disabled=false;

    } 
    else{document.querySelector("#submit").disabled=true;}
}
  document.querySelector("form").onsubmit=function(){
    const task =document.querySelector("#task").value;
    const li = document.createElement("li");
    li.innerHTML = task;
    document.querySelector("#tasks").appendChild(li);
    document.querySelector("#task").value='';
    document.querySelector("#submit").disabled=true;
    return false;


  }
  
  






})