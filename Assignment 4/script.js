document.addEventListener("DOMContentLoaded", () => {

const locationDisplay = document.getElementById("locationDisplay");
const datetimeDisplay = document.getElementById("datetimeDisplay");
const searchBtn = document.getElementById("searchBtn");
const input = document.getElementById("locationInput");

/* DATE TIME */
function updateTime(){
const now = new Date();
datetimeDisplay.innerText = now.toLocaleString();
}
setInterval(updateTime,1000);
updateTime();

/* DAYS */
function getDays(){
const days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
let today=new Date().getDay();
let result=[];
for(let i=0;i<7;i++){
result.push(days[(today+i)%7]);
}
return result;
}

const labels = getDays();

/* RANDOM DATA */
function randomData(min,max){
return Array.from({length:7},()=>Math.floor(Math.random()*(max-min+1)+min));
}

/* CHARTS */
let tempChart = new Chart(document.getElementById("temperatureChart"),{
type:"line",
data:{
labels:labels,
datasets:[{
label:"Temp",
data:randomData(20,35),
borderColor:"#00e0ff",
backgroundColor:"rgba(0,224,255,0.2)",
fill:true,
tension:0.3
}]
},
options:{responsive:true,maintainAspectRatio:false}
});

let humChart = new Chart(document.getElementById("humidityChart"),{
type:"bar",
data:{
labels:labels,
datasets:[{
label:"Humidity",
data:randomData(40,90),
backgroundColor:"#00e0ff"
}]
},
options:{responsive:true,maintainAspectRatio:false}
});

let windChart = new Chart(document.getElementById("windChart"),{
type:"pie",
data:{
labels:labels,
datasets:[{
data:randomData(5,25),
backgroundColor:[
"#00e0ff","#0099ff","#00ffaa","#66ffff","#3399ff","#00ccff","#00ffcc"
]
}]
},
options:{responsive:true,maintainAspectRatio:false}
});

/* SEARCH */
searchBtn.addEventListener("click",()=>{
let city = input.value;
locationDisplay.innerText = city;

/* UPDATE DATA */
tempChart.data.datasets[0].data = randomData(20,35);
humChart.data.datasets[0].data = randomData(40,90);
windChart.data.datasets[0].data = randomData(5,25);

tempChart.update();
humChart.update();
windChart.update();
});

});