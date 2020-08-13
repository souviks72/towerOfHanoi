let body = document.body;

let wrapper = document.createElement("div");
wrapper.classList.add('wrapper');
body.appendChild(wrapper);

let container = document.querySelector('.container');
container.style.display = 'none';

//-----------H1 NAME---------------------
let name = document.createElement("div");
name.classList.add("name");
wrapper.appendChild(name);
let h1Name = document.createElement("h1");
h1Name.innerText = "Tower Of Hanoi";
name.appendChild(h1Name);

//--------RULES---------------------------
let rulesDiv = document.createElement("div");
rulesDiv.classList.add("rules");
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

//-------------PLAY-------------------------------
playBtn.addEventListener('click',function(){
    wrapper.style.display = 'none';
    container.style.display = 'flex'
});
//-------------GAME SCREEN------------------------