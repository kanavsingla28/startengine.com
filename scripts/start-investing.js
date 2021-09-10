
let projectsDb = JSON.parse(localStorage.getItem("projectsDb"));
let industriesObj = {};

projectsDb.sort((a,b)=>{
    return b.raisedFull.substring(1).replace(",","") - a.raisedFull.substring(1).replace(",","");
})
document.querySelector(".text-success").textContent = projectsDb.length;

function displayProjects(projectsDb){
    projectsDb.forEach((project) =>{
        // Project Main Div Start
        let tombstoneDiv = document.createElement("div");
        tombstoneDiv.addEventListener('click',()=>{
            projectDetailsToDB(project);
        });
        // Project Image Div Start
        let tombStoneCoverDiv = document.createElement("div");
        tombStoneCoverDiv.setAttribute("class","tombstone-cover");
        let tombStoneImage = document.createElement("img");
        tombStoneImage.setAttribute("src",project.imageSmallURL);
        tombStoneCoverDiv.appendChild(tombStoneImage);
        // Project Image Div End

        // Project Cover Banner Div Start
        let tombStoneCoverBannerDiv = document.createElement("div");
        tombStoneCoverBannerDiv.setAttribute("class","cover-banner");
        tombStoneCoverBannerDiv.textContent = project.coverBanner;
        // Project Cover Banner Div End

        // Project Content Div Start
        let tombStoneContentDiv = document.createElement("div");
        tombStoneContentDiv.setAttribute("class","tombstone-content");
        let tombStoneContentHeading = document.createElement("h5");
        tombStoneContentHeading.setAttribute("class","desc");
        tombStoneContentHeading.textContent = project.projectName;
        let tombStoneContentTagline = document.createElement("p");
        tombStoneContentTagline.setAttribute("class","tagline");
        tombStoneContentTagline.textContent = project.tagline;
        tombStoneContentDiv.append(tombStoneContentHeading,tombStoneContentTagline);
        // Project Content Div End

        // Project Progress Div Start
        let tombStoneProgressDiv = document.createElement("div");
        tombStoneProgressDiv.setAttribute("class","tombstone-progress");
        let tombStoneProgressBar = document.createElement("div");
        tombStoneProgressBar.setAttribute("class","progress-bar-success");
        tombStoneProgressDiv.appendChild(tombStoneProgressBar);
        // Project Progress Div End

        // Project Stats Div Start
        let tombStoneStatsDiv = document.createElement("div");
        tombStoneStatsDiv.setAttribute("class","tombstone-stats");

        let raisedDiv = document.createElement("div");
        raisedDiv.setAttribute("class","stat");
        let raisedAmount = document.createElement("div");
        raisedAmount.setAttribute("class","num");
        raisedAmount.textContent = project.raisedShort;
        let statsTitleRaised = document.createElement("span");
        statsTitleRaised.textContent = "Raised";
        raisedDiv.append(raisedAmount,statsTitleRaised);

        let investorsDiv = document.createElement("div");
        investorsDiv.setAttribute("class","stat");
        let investorsNum = document.createElement("div");
        investorsNum.setAttribute("class","num");
        investorsNum.textContent = project.investorsShort;
        let statsTitleInvestors = document.createElement("span");
        statsTitleInvestors.textContent = "Investors";
        investorsDiv    .append(investorsNum,statsTitleInvestors);

        let minInvestDiv = document.createElement("div");
        minInvestDiv.setAttribute("class","stat");
        let minInvestNum = document.createElement("div");
        minInvestNum.setAttribute("class","num");
        minInvestNum.textContent = project.minInvestShort;
        let statsTitleMinInvest = document.createElement("span");
        statsTitleMinInvest.textContent = "Min Invest";
        minInvestDiv.append(minInvestNum,statsTitleMinInvest);

        tombStoneStatsDiv.append(raisedDiv,investorsDiv,minInvestDiv)

        tombStoneContentDiv.append(tombStoneProgressDiv,tombStoneStatsDiv);
        // Project Stats Div End
        // Project Main Div End

        //Finally appending individual project Div to parent div
        tombstoneDiv.append(tombStoneCoverDiv,tombStoneCoverBannerDiv,tombStoneContentDiv);
        document.querySelector(".all-tombstones").appendChild(tombstoneDiv);
        
        if(industriesObj.hasOwnProperty(project.category)) industriesObj[project.category]++;
        else industriesObj[project.category] = 1;

    });
}
displayProjects(projectsDb);

function projectDetailsToDB(project){
    console.log("Saving Project:",project);
    localStorage.setItem('projectDetails',JSON.stringify([project]));
    location.href = './project-details.html';
}


let industriesArr = [];
for(keys in industriesObj){
    if(industriesObj[keys]>1) industriesArr.push(keys);
}
industriesArr.sort();
let categoryOption = document.createElement("option");
categoryOption.setAttribute("value","All Industries");
categoryOption.textContent = "All Industries";
document.querySelector(".category").appendChild(categoryOption);
//Making options in category select box
industriesArr.forEach((category)=>{
    let categoryOption = document.createElement("option");
    categoryOption.setAttribute("value",category);
    categoryOption.textContent = category;
    document.querySelector(".category").appendChild(categoryOption);
});

function categoryChange(){
    //console.log(`Selected ${document.querySelector(".category").value} `);
    document.querySelector(".ordering").value= "mostFunded";
    document.querySelector(".investment-type").value = "default";
    let selectedCategory = document.querySelector(".category").value;
    if(selectedCategory=="All Industries"){
        removeProjects();
        displayProjects(projectsDb);
        document.querySelector(".text-success").textContent = projectsDb.length;
    }else{
        let filteredObjects = [];
        projectsDb.forEach((project)=>{
            if(project.category==selectedCategory) filteredObjects.push(project);
        })
        removeProjects();
        displayProjects(filteredObjects);
        document.querySelector(".text-success").textContent = filteredObjects.length;
    }
    
}
document.querySelector(".category").addEventListener('change',categoryChange);

function orderByFunding(){
    //console.log(`Selected ${document.querySelector(".ordering").value} `);
    document.querySelector(".category").value = "All Industries";
    document.querySelector(".investment-type").value = "default";
    let selectedFunding = document.querySelector(".ordering").value;
    if(selectedFunding=="mostFunded"){
        removeProjects();
        displayProjects(projectsDb);
        document.querySelector(".text-success").textContent = projectsDb.length;
    }else{
        let filteredObjects = [...projectsDb];
        filteredObjects.sort((a,b)=>{
            return a.investorsFull.replace(",","") - b.investorsFull.replace(",","");
        })
        removeProjects();
        displayProjects(filteredObjects);
        document.querySelector(".text-success").textContent = filteredObjects.length;
    }
}
document.querySelector(".ordering").addEventListener('change',orderByFunding);

function filterProgress(){
    document.querySelector(".category").value = "All Industries";
    document.querySelector(".ordering").value= "mostFunded";
    let selectedProgress = document.querySelector(".investment-type").value;
    if(selectedProgress=="default" || selectedProgress=="inProgress"){
        removeProjects();
        displayProjects(projectsDb);
        document.querySelector(".text-success").textContent = projectsDb.length;
    }else{
        let filteredObjects = [];
        projectsDb.forEach((project)=>{
            if(project.progressStatus==selectedProgress) filteredObjects.push(project);
        })
        removeProjects();
        displayProjects(filteredObjects);
        document.querySelector(".text-success").textContent = filteredObjects.length;
    }
}
document.querySelector(".investment-type").addEventListener('change',filterProgress);

function removeProjects(){
    let removeProjects = document.querySelectorAll(".all-tombstones>div");
    removeProjects.forEach((rmProject)=>{
        rmProject.remove();
    });
}