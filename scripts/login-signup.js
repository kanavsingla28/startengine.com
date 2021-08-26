// Unique Id that will be assigned to new user
let uniqueUserId = JSON.parse(localStorage.getItem("uniqueUserCounter"));
if(uniqueUserId==null) uniqueUserId = 1010;

// Function invoked on User Sign Up
function signUp(){
    console.log("Testing scripting working or not")
    let allUsers = JSON.parse(localStorage.getItem("allUsers"));
    if(allUsers==null) allUsers=[];
    allUsers.push({
        id: uniqueUserId,
        userFName: document.querySelector("#fName").value,
        userLName: document.querySelector("#lName").value,
        userEmail: document.querySelector("#email").value,
        userPass: document.querySelector("#password").value
    });
    localStorage.setItem("loggedDetails",JSON.stringify([{isLogged:true,userLogged:uniqueUserId}]))
    localStorage.setItem("uniqueUserCounter",JSON.stringify(++uniqueUserId));
    localStorage.setItem("allUsers",JSON.stringify(allUsers));

    document.querySelector("#sign-up-id").textContent = "Sign Up Successful...";

    setTimeout(()=>{
        location.href = "./../index.html";
    },1500)
}
//document.querySelector("#sign-up-id").addEventListener('click',signUp);

let userIdforLogin = null;

// Function Invoked on User Login
function logIn(){
    let mailEntered = document.querySelector("#email").value;
    let passEntered = document.querySelector("#password").value;
    if(checkUserDetails(mailEntered,passEntered)){
        localStorage.setItem("loggedDetails",JSON.stringify([{isLogged:true,userLogged:userIdforLogin}]));
        document.querySelector("#login-btn-id").textContent = "Login Success...";
        setTimeout(()=>{
            location.href = "./../index.html";
        },1500)
    }else{
        console.log("User Name not correct");
    }
}



function checkUserDetails(mailEntered,passEntered){
    let allUsers = JSON.parse(localStorage.getItem("allUsers"));
    for(var i=0; i<allUsers.length; i++){
        if(allUsers[i].userEmail==mailEntered && allUsers[i].userPass==passEntered){
            userIdforLogin = allUsers[i].id;
            return true;
        }
    }
    return false;
}
//document.querySelector("#login-btn-id").addEventListener("click",logIn);