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
body.appendChild(container);
container.style.display = "none";

let header = createCustomElement('header','div');
container.appendChild(header);

let res = createCustomElement('res','div');
header.appendChild(res);
let resetBtn = createCustomElement('reset','button');
resetBtn.innerText = 'RESET';
res.appendChild(resetBtn);
resetBtn.addEventListener('click',function(){
    location.reload();
})
let timeDiv = createCustomElement('time','div');
timeDiv.innerText="TIME";
header.appendChild(timeDiv);

let towers  = createCustomElement('towers','div');
container.appendChild(towers);

let tower1 = createCustomElement('tower-1','div');
let tower2 = createCustomElement('tower-2','div');
let tower3 = createCustomElement('tower-3','div');
towers.append(tower1,tower2,tower3);

for(let i=1;i<=3;i++){
    let d  = createCustomElement(`div${i}`,'div');
    d.setAttribute("id",i);
    tower1.appendChild(d);
}

//-------------PLAY-------------------------------
playBtn.addEventListener('click',function(){
    wrapper.style.display="none";
    container.style.display = "flex";

    let c = 0;
    let sec = 10;
    timeDiv.innerText = sec;
    
    let timerId = 
    setInterval(function(){
        if(sec===1)
            clearInterval(timerId);
        sec--;
        timeDiv.innerText = sec;
    },1000);
    
    let t = null;

    tower1.addEventListener('click',function(){
        if(t!==null && t!=tower1.firstChild){
            let n = tower1.childElementCount;
            
            if(n>0){
                let top = parseInt(tower1.firstChild.getAttribute("id"));
                let tn = parseInt(t.getAttribute("id"));
                if(tn<top){
                    
                    let childrenNodes = tower1.children;
                    if(childrenNodes.length===2){
                        let fc = tower1.firstChild;
                        let lc = tower1.lastChild;
                        tower1.childNodes = null;
                        tower1.append(t);
                        t.style.marginBottom = "0px";
                        t=null;
                        tower1.append(fc);
                        tower1.append(lc);
                    }else if(childrenNodes.length===1){
                        let fc = tower1.firstChild;
                        tower1.childNodes = null;
                        tower1.appendChild(t);
                        tower1.appendChild(fc);
                        t.style.marginBottom = "0px";
                        t=null;
                        fc=null;
                    }else{
                        tower1.appendChild(t);
                        t.style.marginBottom = "0px";
                        t=null
                    }
                }else{
                    t.marginBottom = "0px";
                    t=null;
                }
            }else{
                tower1.appendChild(t);
                t.style.marginBottom = "0px";
                t=null;
            }
        }else if(t===null){
            t = tower1.firstChild;
            t.style.marginBottom = "10px";
        }
        
    });

    tower2.addEventListener('click',function(){
        if(t!==null && t!=tower2.firstChild){
            let n = tower2.childElementCount;
            console.log(n);
            if(n>0){
                let top = parseInt(tower2.firstChild.getAttribute("id"));
                let tn = parseInt(t.getAttribute("id"));
                if(tn<top){
                    
                    let childrenNodes = tower2.children;
                    if(childrenNodes.length===2){
                        let fc = tower2.firstChild;
                        let lc = tower2.lastChild;
                        tower2.childNodes = null;
                        tower2.append(t);
                        t.style.marginBottom = "0px";
                        t=null;
                        tower2.append(fc);
                        tower2.append(lc);
                    }else if(childrenNodes.length===1){
                        let fc = tower2.firstChild;
                        tower2.childNodes = null;
                        tower2.appendChild(t);
                        tower2.appendChild(fc);
                        t.style.marginBottom = "0px";
                        t=null;
                        fc=null;
                    }else{
                        tower2.appendChild(t);
                        t.style.marginBottom = "0px";
                        t=null
                    }
                }else{
                    console.log("LARGE");
                    t.marginBottom = "0px";
                    t=null;
                }
            }else{
                tower2.appendChild(t);
                t.style.marginBottom = "0px";
                t=null;
            }
        }else if(t===null){
            t = tower2.firstChild;
            t.style.marginBottom = "10px";
        }
        
    });

    tower3.addEventListener('click',function(){
        if(t!==null && t!=tower3.firstChild){
            let n = tower3.childElementCount;
            if(n>0){
                let top = parseInt(tower3.firstChild.getAttribute("id"));
                let tn = parseInt(t.getAttribute("id"));
                if(tn<top){
                    
                    let childrenNodes = tower3.children;
                    if(childrenNodes.length===2){
                        let fc = tower3.firstChild;
                        let lc = tower3.lastChild;
                        tower3.childNodes = null;
                        tower3.append(t);

                        t.style.marginBottom = "0px";
                        t=null;
                        tower3.append(fc);
                        tower3.append(lc);
                        if(tower3.childElementCount === 3){
                            setTimeout(()=>{
                                alert("You WON!!");
                                location.reload();
                            },100)
                            
                        }
                    }else if(childrenNodes.length===1){
                        let fc = tower3.firstChild;
                        tower3.childNodes = null;
                        tower3.appendChild(t);
                        tower3.appendChild(fc);
                        t.style.marginBottom = "0px";
                        t=null;
                        fc=null;
                    }else{
                        tower3.appendChild(t);
                        
                        t.style.marginBottom = "0px";
                        t=null
                    }

                }else{
                    t.marginBottom = "0";
                    t=null;
                }
            }else{
                tower3.appendChild(t);
                t.style.marginBottom = "0px";
                t=null;
            }
        }else if(t===null){
            t = tower3.firstChild;
            t.style.marginBottom = "10px";
        }
    });
});
//-------------UTILITIES------------------------
function createCustomElement(className,type){
    let el = document.createElement(`${type}`);
    el.classList.add(`${className}`);
    //console.log(el);
    return el;
}
