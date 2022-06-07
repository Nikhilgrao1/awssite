var myData = [
        ["Honda","Civic","4dr"],
        ["Honda","Civic","2dr"],
        ["Honda","Accord","4dr"],
        ["Honda","Accord","Hybrid"],
        ["Toyota","Corolla","Regular"],
        ["Toyota","Corolla","Hybrid"],
        ["Toyota","Corolla","Hatchback"],
        ["Toyota","Camery","Hybrid"],
        ["Toyota","Camery","Normal"],
        ["Mercedes","C Class","Normal"],
        ["Mercedes","D Class","Normal"],
        ["Mercedes","E Class","Normal"],
        ["Mercedes","F Class","Normal"],
        ["Planning","Structure","Normal"]
];


function makeDropDown(data,level1Filter){
   const filteredArray = data.filter(r => r[0] === level1Filter);

   const uniqueList = getUniqueValues(filteredArray,1);

   const selectLevel2 = document.getElementById("level2");
   populateDropDown(selectLevel2,uniqueList);
 }


// asdasd
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








console.log(filteredArray);
console.log(uniqueList);
