(()=>{"use strict";(()=>{const e=document.querySelector(".header-modal"),t=document.querySelector(".overlay"),n=document.querySelector(".button"),o=document.querySelector(".header-modal__close");n.addEventListener("click",(()=>{e.classList.remove("header-modal"),t.style.display="block"})),o.addEventListener("click",(()=>{e.classList.add("header-modal"),t.style.display="none"}))})(),(e=>{const t=document.querySelectorAll(".count_1 span"),n=document.querySelectorAll(".count_2 span"),o=document.querySelectorAll(".count_3 span"),l=document.querySelectorAll(".count_4 span");let r;const a=function(e){return String(e).padStart(2,"0")},c=()=>{let c=(()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,days:Math.floor(t/60/60/24),hours:Math.floor(t/60/60%24),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}})();t.forEach((e=>e.textContent=a(c.days))),n.forEach((e=>e.textContent=a(c.hours))),o.forEach((e=>e.textContent=a(c.minutes))),l.forEach((e=>e.textContent=a(c.seconds))),c.timeRemaining<0&&(clearInterval(r),t.forEach((e=>e.textContent="00")),n.forEach((e=>e.textContent="00")),o.forEach((e=>e.textContent="00")),l.forEach((e=>e.textContent="00")))};c(),r=setInterval(c,1e3)})("13 august 2022"),(()=>{const e=document.querySelector(".smooth-scroll");e.style.display="none",window.addEventListener("scroll",(()=>{document.documentElement.scrollTop<730?e.style.display="none":e.style.display="block"})),seamless.polyfill(),e.addEventListener("click",(e=>{e.preventDefault();const t=document.getElementById("header");t&&seamless.elementScrollIntoView(t,{behavior:"smooth",block:"start"})}))})(),(()=>{const e=document.querySelector(".services-modal"),t=document.querySelector(".overlay"),n=document.querySelectorAll(".service-button"),o=document.querySelector(".services-modal__close");n.forEach((n=>{n.addEventListener("click",(()=>{e.classList.remove("services-modal"),t.style.display="block"}))})),o.addEventListener("click",(()=>{e.classList.add("services-modal"),t.style.display="none"}))})(),document.querySelectorAll('input[placeholder="ваше имя"]').forEach((e=>{e.addEventListener("input",(e=>e.target.value=e.target.value.replace(/[^а-яa-z\s]/gi,"")))})),function(e,t="+7 (__) --"){const n=document.querySelectorAll(e);function o(e){const n=e.keyCode,o=t,l=o.replace(/\D/g,""),r=this.value.replace(/\D/g,"");let a=0,c=o.replace(/[_\d]/g,(function(e){return a<r.length?r.charAt(a++)||l.charAt(a):e}));a=c.indexOf("_"),-1!=a&&(c=c.slice(0,a));let s=o.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");s=new RegExp("^"+s+"$"),(!s.test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=c),"blur"==e.type&&this.value.length<5&&(this.value="")}for(const e of n)e.addEventListener("input",o),e.addEventListener("focus",o),e.addEventListener("blur",o)}('input[placeholder="ваш телефон"]',"+7 (___) ___-__-__"),(()=>{try{const e=document.querySelector("#calc"),t=e.querySelector("#calc-type"),n=e.querySelector("#calc-type-material"),o=e.querySelector("#calc-input"),l=e.querySelector("#calc-total"),r=()=>{const e=+t.value,r=+n.value;let a=0;a=e&&r?e*r*o.value:0,l.value=a};e.addEventListener("input",(e=>{e.target!==t&&e.target!==n&&e.target!==o||r()}))}catch(e){console.log(e.message)}})(),(({someElem:e=[]})=>{const t=document.querySelectorAll(".form-horizontal"),n=document.createElement("div");t.forEach((t=>{t.addEventListener("submit",(o=>{o.preventDefault(),((t,o=(()=>{const e=document.createElement("div");return e.classList.add("sk-wave"),e.innerHTML="<div class='sk-rect sk-rect-1'></div>\n                            <div class='sk-rect sk-rect-2'></div>\n                            <div class='sk-rect sk-rect-3'></div>\n                            <div class='sk-rect sk-rect-4'></div>\n                            <div class='sk-rect sk-rect-5'></div>",e})())=>{const l=t.querySelectorAll("input"),r=new FormData(t),a={};var c;r.forEach(((e,t)=>{a[t]=e})),n.classList.add("black"),n.textContent="",n.insertAdjacentElement("afterbegin",o),t.append(n),e.forEach((e=>{try{const t=document.getElementById(e.id);0<+t.value&&(a[e.id]=t.value)}catch(e){console.log(e.message)}})),(e=>{let t=!0;return(e=>{e.forEach((e=>{("fio"===e.name&&""===e.value||"phone"===e.name&&""===e.value)&&e.classList.add("error"),("fio"!==e.name||/^[а-яёЁa-z\s]{2,}$/gi.test(e.value))&&("phone"!==e.name||/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10,}$/g.test(e.value))||e.classList.add("error"),e.addEventListener("input",(e=>{e.preventDefault(),("fio"===e.target.name&&/^[а-яёЁa-z\s]{2,}$/gi.test(e.target.value)||"phone"===e.target.name&&/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10,}$/g.test(e.target.value))&&e.target.classList.remove("error")}))}))})(e),e.forEach((e=>{e.classList.contains("error")&&(t=!1)})),t})(l)?(c=a,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(c),headers:{"Content-type":"application/json"}}).then((e=>e.json()))).then((e=>{n.textContent="Спасибо! Наш менеджер с вами свяжется!",l.forEach((e=>{e.value=""}))})).catch((e=>{n.textContent="Ошибка!"})):n.textContent="Ошибка! Введите данные правильно.",setTimeout((()=>n.textContent=""),3e3)})(t)}))}))})({someElem:[{id:"calc-total"}]})})();