
function signout(){


   
    
    var user_data= JSON.parse(localStorage.getItem("loggedDetails"));
    user_data[0].isLogged=false;
    localStorage.setItem("loggedDetails",JSON.stringify(user_data));

         location.href="./index.html";

}
var user_data= JSON.parse(localStorage.getItem("loggedDetails"));
if(user_data!=null) check_if_logedin_navbar();

function check_if_logedin_navbar(){
    
   var status= user_data[0].isLogged;


    if(status===true){
       
let nav_anchor_Signin=document.getElementById("nav_anchor_Signin");
let mini_nav_sigin=document.getElementById("drop_username_mini");
mini_nav_sigin.innerText=user_data[1].userFName + " "+user_data[1].userLName;
nav_anchor_Signin.innerText=  user_data[1].userFName + " "+user_data[1].userLName;

document.getElementById('drop_username').innerText=user_data[1].userFName + " "+user_data[1].userLName;
nav_anchor_Signin.removeAttribute('href');
mini_nav_sigin.removeAttribute('href');


let index_mini_logout=document.querySelector("#index_mini_logout_p");

index_mini_logout.setAttribute("onclick","signout()");
index_mini_logout.innerText="Sign Out"
                  

   
        }
    
}
function showdropdown(){
 
     let user_data= JSON.parse(localStorage.getItem("loggedDetails"));
         if(user_data[0].isLogged==true){

    let x = document.querySelector(".index_nav_drop");

    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  }

function showdropdown_mini(){

 
}



  function showtransition(){
    let x=document.querySelector("#nav_transition");
    if (x.style.visibility === "hidden") {
      x.style.visibility = "visible";
    } else {
      x.style.visibility = "hidden";
    }
  }


  
   


function email_success_display(e){
    
var p=document.querySelector("#index_email_valid");
p.innerText="Email Registered Successfully!  Thank You  😄";
e.preventDefault();
}

