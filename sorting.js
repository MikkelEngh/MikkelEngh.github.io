let list = [
    {name: 'Ronaldo', date: '1985-2-05', category: 'At', pace: 90, dribbling: 99, shooting: 99, defense: 45, passing: 80, physicality: 88},
    {name: 'Messi', date: '1984-6-24', category: 'At', pace: 85, dribbling: 99, shooting: 99, defense: 45, passing: 80, physicality: 72}
];
 
const inputNameEl = document.getElementById("name");
const inputDateEl = document.getElementById("date");
const inputCategoryEl = document.getElementById("category");
const inputPaceEl = document.getElementById("pace");
const inputShootingEl = document.getElementById("shooting");
const inputPassingEl = document.getElementById("passing");
const inputDribblingEl = document.getElementById("dribbling");
const containerEl = document.getElementById("container");
const addToListEl = document.getElementById("add");
const sortNameEl = document.getElementById("sortName");
const sortDateEl = document.getElementById("sortDate");
const sortCategoryEl = document.getElementById("sortCategory");
const sortPaceEl = document.getElementById("sortPace");
const sortShootingEl = document.getElementById("sortShooting");
const sortPassingEl = document.getElementById("sortPassing");
const sortDribblingEl = document.getElementById("sortDribbling");
const inputDefenseEl = document.getElementById("defense");
const inputPhysicalityEl = document.getElementById("physicality");
const sortDefenseEl = document.getElementById("sortDefense");
const sortPhysicalityEl = document.getElementById("sortPhysicality");
 
addToListEl.addEventListener("click", addToList);
sortNameEl.addEventListener("click", sortByName);
sortDateEl.addEventListener("click", sortByDate);
sortCategoryEl.addEventListener("click", sortByCategory);
sortPaceEl.addEventListener("click", sortByPace);
sortShootingEl.addEventListener("click", sortByShooting);
sortPassingEl.addEventListener("click", sortByPassing);
sortDribblingEl.addEventListener("click", sortByDribbling);
sortDefenseEl.addEventListener("click", sortByDefense);
sortPhysicalityEl.addEventListener("click", sortByPhysicality);
inputNameEl.addEventListener("focus", clearPlaceholder);
inputDateEl.addEventListener("focus", clearPlaceholder);
inputCategoryEl.addEventListener("focus", clearPlaceholder);
inputPaceEl.addEventListener("focus", clearPlaceholder);
inputShootingEl.addEventListener("focus", clearPlaceholder);
inputPassingEl.addEventListener("focus", clearPlaceholder);
inputDribblingEl.addEventListener("focus", clearPlaceholder);
inputDefenseEl.addEventListener("focus", clearPlaceholder);
inputPhysicalityEl.addEventListener("focus", clearPlaceholder);

function clearPlaceholder(event) {
  event.target.placeholder = "";
}
function addToList() {
    let n = inputNameEl.value;
    let d = inputDateEl.value;
    let c = inputCategoryEl.value;
    let pace = inputPaceEl.value;
    let shooting = inputShootingEl.value;
    let passing = inputPassingEl.value;
    let dribbling = inputDribblingEl.value;
    let defense = inputDefenseEl.value;
    let physicality = inputPhysicalityEl.value
   
    let newObject = { name: n, date: d, category: c, pace: pace, shooting: shooting, passing: passing, dribbling: dribbling, defense: defense, physicality: physicality };
    console.log(newObject);
    list.push(newObject);
    showList();
  }


function showList() {
    containerEl.innerHTML = "";
    containerEl.style.position = "relative";

    for (let i = 0; i < list.length; i++) {
        let o = list[i];

        let divEl = document.createElement("div");
        divEl.style.position = "relative";

        let pEl = document.createElement("div");
        pEl.innerHTML = `<div>${o.pace}</div><div>${o.dribbling}</div><div>${o.shooting}</div><div>${o.defense}</div><div>${o.passing}</div><div>${o.physicality}</div>`;
        pEl.classList += "statContainer";

        let nameCont = document.createElement("div");
        nameCont.innerHTML = `${o.name}`;
        nameCont.classList = "nameCont";

        let dateCont = document.createElement("div");
        dateCont.innerHTML = `${o.date}`;
        dateCont.classList = "dateCont";

        let katCont = document.createElement("div");
        katCont.innerHTML = `${o.category}`;
        katCont.classList = "katCont";

        let overallCont = document.createElement("div");
        overallCont.innerHTML = calculateOverall(o);
        overallCont.classList = "overallCont"; 
        overallCont.id = `overall_${i}`;

        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "X";
        deleteBtn.addEventListener("click", removeFromList);

        let card = document.createElement("img");
        card.classList = "fifaCard";
        card.src = "fifacard.png";

        divEl.appendChild(katCont);
        divEl.appendChild(dateCont);
        divEl.appendChild(nameCont);
        divEl.appendChild(pEl);
        divEl.appendChild(card);
        divEl.appendChild(deleteBtn);
        divEl.appendChild(overallCont);

        containerEl.appendChild(divEl);
    }
}

function calculateOverall(player) {
    const sum =
        parseInt(player.pace) +
        parseInt(player.dribbling) +
        parseInt(player.shooting) +
        parseInt(player.defense) +
        parseInt(player.passing) +
        parseInt(player.physicality);

    const overall = sum / 5.5;
    return overall.toFixed(0);
}


function sortByPace(){
    list.sort(comparePace);
    showList();
}
 
function sortByShooting(){
    list.sort(compareShooting);
    showList();
}
 
function sortByPassing(){
    list.sort(comparePassing);
    showList();
}
 
function sortByDribbling(){
    list.sort(compareDribbling);
    showList();
}
function sortByDefense(){
    list.sort(compareDefense);
    showList();
}
 
function sortByPhysicality(){
    list.sort(comparePhysicality);
    showList();
}
function sortByName() {
    list.sort(compareName);
    showList();
}
 
function sortByDate() {
    list.sort(compareDate);
    showList();
}

function sortByCategory() {
    list.sort(compareCategory);
    showList();
}

function comparePace(a, b) {
    return a.pace - b.pace;
}
 
function compareShooting(a, b) {
    return a.shooting - b.shooting;
}
 
function comparePassing(a, b) {
    return a.passing - b.passing;
}
 
function compareDribbling(a, b) {
    return a.dribbling - b.dribbling;
}

 
function compareDefense(a, b) {
    return a.defense - b.defense;
}
 
function comparePhysicality(a, b) {
    return a.physicality - b.physicality;
}
  
function compareName(a, b) {
    if (a.name > b.name) {
        return 1;
    } else if (a.name < b.name) {
        return -1;
    } else {
        return 0;
    }
}
 
function compareDate(a, b) {
    let dateA = new Date(a.date);
    let dateB = new Date(b.date);
    return dateA - dateB;
}
 
function compareCategory(a, b) {
    if (a.category > b.category) {
        return 1;
    } else if (a.category < b.category) {
        return -1;
    } else {
        return 0;
    }
}
 
function removeFromList(e) {
    let id = e.target.id;
    list.splice(id, 1);
    showList();
}