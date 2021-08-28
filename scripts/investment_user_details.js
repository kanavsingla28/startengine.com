

var projectDetails=JSON.parse(localStorage.getItem("projectDetails"));



let projectname=document.getElementById("investment_name");
projectname.innerText=projectDetails[0].projectName;


let logo=document.getElementById("investment_company_logo");
logo.src=projectDetails[0].imageLSmallURL;
console.log('Image url:',projectDetails[0].imageSmallURL);

let min_invest=document.getElementById("min_inv");
min_invest.innerText=projectDetails[0].minInvestShort;


let shareoffer=document.getElementById("sharedoffered");
shareoffer.innerText=projectDetails[0].sharedOfferedFull;

let avg_inv=document.getElementById("avg_inv");
avg_inv.innerText=projectDetails[0].minInvestFull