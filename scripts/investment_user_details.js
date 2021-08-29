

var projectDetails=JSON.parse(localStorage.getItem("projectDetails"));



let projectname=document.getElementById("investment_name");
projectname.innerText=projectDetails[0].projectName;


let logo=document.getElementById("investment_company_logo");
//logo.src=projectDetails[0].imageLSmallURL;
logo.setAttribute('src',"https://d19j0qt0x55bap.cloudfront.net/production/startups/5f512e074ce5a834e88d5853/images/startup_image/thumb_flowerturbineslogo.jpg");
console.log('Image url:',projectDetails[0].imageSmallURL);



let min_invest=document.getElementById("min_inv");
min_invest.innerText=projectDetails[0].minInvestShort;


let shareoffer=document.getElementById("sharedoffered");
shareoffer.innerText=projectDetails[0].sharedOfferedFull;

let avg_inv=document.getElementById("avg_inv");
avg_inv.innerText=projectDetails[0].minInvestFull;



function complete_payment(e){
    e.preventDefault();
    console.log("payment processing..")
    setTimeout(function(){alert("Your payment is Complete<thank You")},3000);
    var verification_text=document.querySelector("#verification_text");
    verification_text.style.display= 'block';
}