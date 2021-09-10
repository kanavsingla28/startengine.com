// Unique Id that will be assigned to new user
let uniqueUserId = JSON.parse(localStorage.getItem("uniqueUserCounter"));
if(uniqueUserId==null) uniqueUserId = 1010;

// Function invoked on User Sign Up
function signUp(){
    let allUsers = JSON.parse(localStorage.getItem("allUsers"));
    if(allUsers==null) allUsers=[];
    var newUsertoAdd = {
        id: uniqueUserId,
        userFName: document.querySelector("#fName").value,
        userLName: document.querySelector("#lName").value,
        userEmail: document.querySelector("#email").value,
        userPass: document.querySelector("#password").value
    };
    if(allUsers.length!=0 && userExists(newUsertoAdd.userEmail)){
        document.querySelector("#sign-up-id").textContent = "User already exists...";
        setTimeout(()=>{
            document.querySelector("#sign-up-id").textContent = "Sign Up";
        },1200)
        return;
    }
    allUsers.push(newUsertoAdd);
    localStorage.setItem("loggedDetails",JSON.stringify([{isLogged:true},newUsertoAdd]))
    localStorage.setItem("uniqueUserCounter",JSON.stringify(++uniqueUserId));
    localStorage.setItem("allUsers",JSON.stringify(allUsers));

    document.querySelector("#sign-up-id").textContent = "Sign Up Successful...";

    let pageFrom = JSON.parse(localStorage.getItem("userComingfrom"));
    if(pageFrom=="projectDetailsPage"){
        setTimeout(()=>{
            location.href = "./investment_user_details.html";
        },1500)
    }else{
        setTimeout(()=>{
            location.href = "./../index.html";
        },1500)
    }
    localStorage.removeItem("userComingfrom");
}

function userExists(newUserEmail){
    let allUsers = JSON.parse(localStorage.getItem("allUsers"));
    for(var i=0; i<allUsers.length; i++){
        if(allUsers[i].userEmail==newUserEmail) return true;
    }
    return false;
}

let userIdforLogin = null;
let loginButton = document.querySelector("#login-btn-id");
// Function Invoked on User Login
function logIn(){
    let mailEntered = document.querySelector("#email").value;
    let passEntered = document.querySelector("#password").value;
    if(checkUserDetails(mailEntered,passEntered)){
        localStorage.setItem("loggedDetails",JSON.stringify([{isLogged:true},userIdforLogin]));
        loginButton.textContent = "Login Success...";
        let pageFrom = JSON.parse(localStorage.getItem("userComingfrom"));
        if(pageFrom=="projectDetailsPage"){
            setTimeout(()=>{
                location.href = "./investment_user_details.html";
            },1500)
        }else{
            setTimeout(()=>{
                location.href = "./../index.html";
            },1500)
        }
        localStorage.removeItem("userComingfrom");
    }else{
        loginButton.textContent = "Invalid Credentials...";
        setTimeout(()=>{
            loginButton.textContent = "Login";
        },1000)
    }
}



function checkUserDetails(mailEntered,passEntered){
    let allUsers = JSON.parse(localStorage.getItem("allUsers"));
    if(allUsers==null) return false;
    for(var i=0; i<allUsers.length; i++){
        if(allUsers[i].userEmail==mailEntered && allUsers[i].userPass==passEntered){
            userIdforLogin = allUsers[i];
            return true;
        }
    }
    return false;
}