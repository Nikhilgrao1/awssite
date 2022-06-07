
alert("Script Here")
const menBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');
const menu = document.querySelector('.menu');
//offset when the nav bar activates
const offset = 50;

//Add click event to menu button
menBtn.addEventLisener('click', () => {
  //Toggle the menu-open class
  menu.classList.toggle('menu-open');
  });
window.addEventLisener("scroll",()=> {
     if (pageYOffset > offset) {
       navbar.classList.add('navbar-active'); }
       else {
         navbar.classList.remove('navbar-active');}
       });

// Get elements from DOM
const menBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');
const menu = document.querySelector('.menu');
//offset when the nav bar activates
const offset = 50;
//Add click event to menu button
menBtn.addEventListener('click', () =>
{
//Toggle the menu-open class
menu.classList.toggle('menu-open');
}
);
window.addEventListener
("scroll",()=>
{
   if (pageYOffset > offset) {
     navbar.classList.add('navbar-active'); }
     else {
       navbar.classList.remove('navbar-active');}
 }
);

var myData = [
       ["Planning","Finishing Activities"],
       ["Planning","Structure Activities"],
       ["Planning","StairCase Finishes"],
       ["Planning","Service Room"],
       ["Planning","Site Projections"],
       ["Planning","Critical Isses"],
       ["Planning","BP"],
       ["Planning","Villas"],
       ["Planning","Place Holder"],
       ["Planning","Place Holder"],
       ["FINANCE","Place Holder"],
       ["HR","Place Holder"],
       ["MEP","Place Holder"],
       ["BUSINESS Excellence","Place Holder"]
];

function makeDropDown(data,level1Filter){
  const filteredArray = data.filter(r => r[0] === level1Filter);

  const uniqueList = getUniqueValues(filteredArray,1);

  const selectLevel2 = document.getElementById("level2");
  populateDropDown(selectLevel2,uniqueList);
}

function applyDropDown(){
 const selectLevel1Value =  document.getElementById("level1").value;
 makeDropDown(myData,selectLevel1Value)
}

function afterDocumentLoads(){
 populateFirstLevelDropDown();
 applyDropDown();
}

function getUniqueValues(data,index){
 const uniqueOptions = new Set();
 data.forEach(r => uniqueOptions.add(r[index]));
 return[...uniqueOptions];
}

function populateFirstLevelDropDown(){
 const uniqueList = getUniqueValues(myData,0);
 const el = document.getElementById("level1");
 populateDropDown(el,uniqueList);
}

function populateDropDown(el,listArray){
 el.innerHTML = "";
 listArray.forEach(item => {
   const option = document.createElement("option");
   option.textContent = item;
   el.appendChild(option);
 });
}
document.getElementById("level1").addEventListener("change",applyDropDown);
document.addEventListener("DOMContentLoaded",afterDocumentLoads);