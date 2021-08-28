
function signout(){


    console.log("hello");
    /* ------set islooged=false------ */
    var user_data= JSON.parse(localStorage.getItem("loggedDetails"));
    user_data[0].isLogged=false;
    localStorage.setItem("loggedDetails",JSON.stringify(user_data));

    /* ---remove dropdown--- */
    var get_dropdown=document.getElementsByClassName("index_nav_drop");
    get_dropdown.style.display= 'none';
    
         location.href="/index.html";

}

function check_if_logedin_navbar(){
    /*--------get-status------ */
   var user_data= JSON.parse(localStorage.getItem("loggedDetails"));
   var status= user_data[0].isLogged;

   console.log(status);
   /* ------------------- */

    if(status===true){
       /* remove anchor tag SignIn and add name*/
let nav_anchor_Signin=document.getElementById("nav_anchor_Signin");

     nav_anchor_Signin.innerText= user_data[1].userFName + " "+user_data[1].userLName;

          document.getElementById('drop_username').innerText=user_data[1].userFName + " "+user_data[1].userLName;
          nav_anchor_Signin.removeAttribute('href');
                  
   nav_anchor_Signin.setAttribute("click",showdropdown);
   
        }else{
}

}
function showdropdown(){
    console.log("hello11")
    var get_dropdown=document.querySelector(".index_nav_drop");
    console.log(get_dropdown.classList);
/* 
   if(get_dropdown.style.display.value==='none'){
    get_dropdown.style.display='block';
    console.log("setblock");
   }else if(get_dropdown.style.display==='block'){
    console.log("setnone");
    get_dropdown.style.display=='none';
   } */
    if(get_dropdown.classList.contains("classdisplay")){
          get_dropdown.classList.remove('classdisplay');
        }
        else{
        get_dropdown.setAttribute('class','classdisplay');
        console.log("set none");
    } 
   /*  get_dropdown.style.display= 'block'; 
 */
}
check_if_logedin_navbar();