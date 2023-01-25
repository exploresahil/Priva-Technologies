const date=new Date,options={day:"2-digit",month:"2-digit",year:"numeric"},ISToffset=0,ISTtime=new Date(date.getTime()+0),dateString=ISTtime.toLocaleDateString("en-IN",options).replace(/\//g,"-"),currentDate=document.getElementById("current-date");currentDate.innerHTML=dateString;const currentTime=document.getElementById("current-time");function updateTime(){const e=new Date,t=new Date(e.getTime()+0).toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0});currentTime.innerHTML=t}setInterval(updateTime,1e3);const ready=new SplitType(".ready",{charClass:"readyChar"});gsap.from(".readyChar",{y:-500,stagger:.05,delay:.5,duration:.3,ease:Power1.easeOut,repeat:-1,repeatDelay:2}),gsap.to(".readyChar",{y:500,stagger:.05,delay:2.5,duration:.3,ease:Power1.easeOut,repeat:-1,repeatDelay:2});const readyafter=new SplitType(".ready-after",{charClass:"ready-afterChar"});gsap.from(".ready-afterChar",{y:-500,stagger:.05,duration:.3,ease:Power1.easeOut,repeat:-1,repeatDelay:2}),gsap.to(".ready-afterChar",{y:500,stagger:.05,delay:.5,duration:.3,ease:Power1.easeOut,repeat:-1,repeatDelay:2});const numberPad=document.getElementById("number-pad"),mobileNumber=document.getElementById("mobile-number"),numbers=["1","2","3","4","5","6","7","8","9",".","0","<"];let cursorPos=3;for(let e of numbers){const t=document.createElement("button");t.innerText=e,t.addEventListener("click",(function(){"<"===e?mobileNumber.selectionStart>3&&(mobileNumber.value=mobileNumber.value.slice(0,mobileNumber.selectionStart-1)+mobileNumber.value.slice(mobileNumber.selectionStart),cursorPos--):mobileNumber.value.length<13&&(mobileNumber.value=mobileNumber.value.substr(0,mobileNumber.selectionStart)+e+mobileNumber.value.substr(mobileNumber.selectionStart),cursorPos++)})),numberPad.appendChild(t)}mobileNumber.addEventListener("keydown",(function(e){"Backspace"===e.code&&mobileNumber.value.length>3&&mobileNumber.selectionStart>3&&(e.preventDefault(),mobileNumber.value=mobileNumber.value.slice(0,mobileNumber.selectionStart-1)+mobileNumber.value.slice(mobileNumber.selectionStart),cursorPos--)}));
//# sourceMappingURL=script.js.map