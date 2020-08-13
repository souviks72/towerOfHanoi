let body = document.body;

let wrapper = createCustomElement('wrapper',"div");
body.appendChild(wrapper);

//-----------H1 NAME---------------------
let name = createCustomElement('name',"div");
wrapper.appendChild(name);
let h1Name = document.createElement("h1");
h1Name.innerText = "Tower Of Hanoi";
name.appendChild(h1Name);

//--------RULES---------------------------
let rulesDiv = createCustomElement('rules',"div");
wrapper.appendChild(rulesDiv);
let rulesUl = document.createElement("ul");

let gameRules = [
    'GOAL: Place all disks on the destination tower',
    'Only one disk can be moved at a time',
    'Each move consists of taking an upper most disk from one stack and placing it on top of another stack',
    'No disk may be placed on top of a smaller disk',
    'Time Limit: 60 Seconds'
];
for(let i=0;i<5;i++){
    let li = document.createElement('li');
    li.innerText = gameRules[i];
    rulesUl.appendChild(li);
}
rulesDiv.appendChild(rulesUl);
let playBtn = document.createElement("button");
playBtn.setAttribute("id","play");
playBtn.innerText = "PLAY";
rulesDiv.appendChild(playBtn);

//-----------CONTAINER---------------------------
let container = createCustomElement('container',"div");

let header = createCustomElement('header','div');
container.appendChild(header);

let res = createCustomElement('res','div');
header.appendChild(res);
let resetBtn = createCustomElement('reset','button');
resetBtn.innerText = 'RESET';
res.appendChild(resetBtn);
let timeDiv = createCustomElement('time','div');
timeDiv.innerText="TIME";
header.appendChild(timeDiv);

let towers  = createCustomElement('towers','div');
container.appendChild(towers);

let tower1 = createCustomElement('tower-1','div');
let tower2 = createCustomElement('tower-2','div');
let tower3 = createCustomElement('tower-3','div');
towers.append(tower1,tower2,tower3);

for(let i=1;i<=5;i++){
    let d  =createCustomElement(`div${i}`,'div');
    tower1.appendChild(d);
}

//-------------PLAY-------------------------------
playBtn.addEventListener('click',function(){
    body.removeChild(wrapper);
    body.appendChild(container);

    let sec = 10;
    timeDiv.innerText = sec;
    
    let timerId = 
    setInterval(function(){
        if(sec===1)
            clearInterval(timerId);
        sec--;
        timeDiv.innerText = sec;
    },1000);
    
    if(sec<=0)
        alert("Time up");
    
});
//-------------UTILITIES------------------------
function createCustomElement(className,type){
    let el = document.createElement(`${type}`);
    el.classList.add(`${className}`);
    //console.log(el);
    return el;
}
