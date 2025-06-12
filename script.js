const all = document.querySelector(".all");
const favourite = document.querySelector(".favourite");
const unFavourite = document.querySelector(".unFavourite");
const imageOfWatches = document.querySelector(".imageOfWatches");

const allData = [
    {
        "watchsrc":"./image/watch1.png",
        "name":"MoonStar",
        "description":"This watch is so hard but not heavy and wahta is good about bad.",
        "isActive":false,
    },
    {
        "watchsrc":"./image/watch2.png",
        "name":"RoseGold",
        "description":"Is one is unique gesign in the wholw  word with new shap.",
        "isActive":false,
    },
    {
        "watchsrc":"./image/watch3.png",
        "name":"ShodowDail",
        "description":"This  you is in becutbye huni kiny and wahta is good abd bad.",
        "isActive":true,
    },
    {
        "watchsrc":"./image/watch4.png",
        "name":"MultiChrono",
        "description":"Kinary is irh  sdfu fhsu this ie  siye iha company sdif of the einition.",
        "isActive":false,
    },
    {
        "watchsrc":"./image/watch5.png",
        "name":"TitanCore",
        "description":"Cool me not but in the havey not heavy and wahta so jug with you minin.",
        "isActive":true,
    },
    {
        "watchsrc":"./image/watch6.png",
        "name":"Obsidian",
        "description":"Lorem ipsum dolor sit amet consectetur . so you are the best ont but i am the cool one the woeh.",
        "isActive":false,
    },
    {
        "watchsrc":"./image/watch7.png",
        "name":"ShodowTriangle",
        "description":"How is the heath is the watch tell inhg dsinsidhd not heavy and wahta is good abd bad.",
        "isActive":false,
    },
    {
        "watchsrc":"./image/watch8.png",
        "name":"ShodowTime",
        "description":"This cool is bafd gunij iethe uh oerew abd bad.",
        "isActive":false,
    },
    {
        "watchsrc":"./image/watch9.png",
        "name":"Multi-G",
        "description":"The warch iht  eiyh world is cool but not best is good abd bad.",
        "isActive":true,
    },
]

const favouriteData = allData.filter((dataItem)=>dataItem.isActive == true);
const unfavouriteData = allData.filter((dataItem)=>dataItem.isActive == false);

all.addEventListener("click",()=> {
    displayWatches(allData,"all");
});
favourite.addEventListener("click",()=> {
    displayWatches(favouriteData,"favourite");
});
unFavourite.addEventListener("click",()=> {
    displayWatches(unfavouriteData,"unFavourite");
});

window.onload = function(){
displayWatches(allData);
 }

function displayWatches(data){
    imageOfWatches.innerHTML = "";
    data.forEach((watches) => {
        const watch = document.createElement("div");
        watch.classList.add("watch");
        const img = document.createElement("img");
        img.src = watches.watchsrc;
        img.classList.add("watchImage");
        const part = document.createElement("div");
        part.classList.add("part");
        const part1 = document.createElement("div");
        part1.classList.add("part1");
        const h3 = document.createElement("h3");
        h3.classList.add("headingOfWatch");
        h3.textContent = watches.name;
        const p = document.createElement("p");
        p.classList.add("paraOfWatch");
        p.textContent=watches.description;
        const part2 = document.createElement("div");
        part2.classList.add("part2");
        const button = document.createElement("button");
        button.classList.add("button");
        button.textContent = "Remove";
        button.addEventListener("click",()=>{
            removeWatch(watches.name,Status);
        });
        const label = document.createElement("label");
        label.classList.add("toggle-switch");
        const input = document.createElement("input");
        input.type = "checkbox";
        input.addEventListener("click",(e)=>{
            input.checked = e.target.checked;
            swapcheckbox(watches.name,e.target.checked,Status);
        })
        const span = document.createElement("span");
        span.classList.add("slider");

        imageOfWatches.appendChild(watch);
        watch.appendChild(img);
        watch.appendChild(part);
        part.appendChild(part1);
        part1.appendChild(h3);
        part1.appendChild(p);
        part.appendChild(part2);
        part2.appendChild(button);
        part2.appendChild(label);
        label.appendChild(input);
        label.appendChild(span);

    });
}

function  removeWatch(_watchbrand,Status) {
    allData = filter((dataItem)=>{
        dataItem.name != _watchbrand;
    });

    const favouriteData = allData.filter((dataItem)=>dataItem.isActive == true);
    const unfavouriteData = allData.filter((dataItem)=>dataItem.isActive == false);

    if(Status == "all"){
        displayWatches(allData,"all");
    }
    else if(Status == "favourite"){
        displayWatches(favouriteData,"favourite");
    }
    else{
        displayWatches(unfavouriteData,"unaFvourite");
    }
    
}

function swapcheckbox(watchbrand,state,Status){
    allData = allData.map( (dataItem) =>{
        if(watchbrand == dataItem.name){
            dataItem.isActive = state;
        }
        return dataItem;
    })

    const favouriteData = allData.filter((dataItem)=>dataItem.isActive == true);
    const unfavouriteData = allData.filter((dataItem)=>dataItem.isActive == false);

    if(Status == "all"){
        displayWatches(allData,"all");
    }
    else if(Status == "favourite"){
        displayWatches(favouriteData,"favourite");
    }
    else{
        displayWatches(unfavouriteData,"unaFvourite");
    }

}