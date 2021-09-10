
let projectDetails = JSON.parse(localStorage.getItem("projectDetails"));
document.title = `${projectDetails[0].projectName} | StartEngine `;
document.querySelector(".title").textContent = projectDetails[0].projectName;
document.querySelector(".project-tagline").textContent = projectDetails[0].tagline;
document.querySelector(".gce-original-image").setAttribute("style",`background-image: url(./../images/${projectDetails[0].imageLargeName});`);
document.querySelector(".website-link").setAttribute("href",projectDetails[0].websiteLink);
document.querySelector("#project-location").textContent = projectDetails[0].location;
document.querySelector(".project-category").textContent = projectDetails[0].category;
document.querySelector(".elevator-pitch").textContent = projectDetails[0].projectDescription;
document.querySelector(".multi-raise-se-number").textContent = projectDetails[0].raisedFull;
document.querySelector("#investors-num>h5").textContent = projectDetails[0].investorsFull;
document.querySelector("#valuation-num>h5").textContent = projectDetails[0].valuationFull;
document.querySelector("#price-per-share-num>h5").textContent = projectDetails[0].pricePerShareFull;
document.querySelector("#min-investment-num>h5").textContent = projectDetails[0].minInvestFull;
document.querySelector("#shares-offered-type>h5").textContent = projectDetails[0].sharedOfferedFull;
document.querySelector("#offering-type-equity>h5").textContent = projectDetails[0].offeringTypeFull;
document.querySelector("#offering-max-num>h5").textContent = projectDetails[0].offeringMaxFull;
document.querySelector("#offering-type>h5").textContent = projectDetails[0].offeringFull;
document.querySelector(".banner-text").textContent = projectDetails[0].belowInvestNowFull;


document.querySelector(".invest-now-btn").addEventListener('click',setFlowStatus);
let isLoggedIn = JSON.parse(localStorage.getItem("loggedDetails"));
function setFlowStatus(){
    localStorage.setItem("userComingfrom",JSON.stringify("projectDetailsPage"));
    if(isLoggedIn==null || isLoggedIn[0].isLogged==false){
        location.href = "./login.html";                
    }else if(isLoggedIn[0].isLogged==true){
        location.href = "./investment_user_details.html";
    }
}