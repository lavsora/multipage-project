(()=>{"use strict";const t=({sectionId:t,modalClass:e,overlayClass:s,openButtonClass:n,closeButtonClass:a})=>{const r=document.querySelector(t),c=document.querySelector(e),o=document.querySelector(s);document.querySelectorAll(".document-overlay").forEach((t=>{t.style.display="none"})),((t,e,s)=>{t.addEventListener("click",(t=>{t.preventDefault(),t.target.matches(e)&&(o.style.display="block",s.style.display="block")}))})(r,n,c),((t,e)=>{document.querySelector(t).addEventListener("click",(()=>{o.style.display="none",e.style.display="none"}))})(a,c)};(()=>{const t=document.querySelector(".comments-container");(()=>{const e=document.createElement("div");e.classList.add("sk-wave"),e.innerHTML="<div class='sk-rect sk-rect-1'></div>\n                            <div class='sk-rect sk-rect-2'></div>\n                            <div class='sk-rect sk-rect-3'></div>\n                            <div class='sk-rect sk-rect-4'></div>\n                            <div class='sk-rect sk-rect-5'></div>",t.innerHTML="",t.append(e)})();const e=e=>{t.innerHTML=`\t\t<div class="review-margin-bottom row comment-item">\n\t\t\t\t\t\t<div class="col-xs-3 col-sm-2">\n\t\t\t\t\t\t\t<div class="review-user">\n\t\t\t\t\t\t\t\t<img src="${e[0].image}" alt="" class="img-responsive avatar">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="col-xs-9 col-sm-9">\n\t\t\t\t\t\t\t<div class="review-inner review-green review-arrow review-arrow-left">\n\t\t\t\t\t\t\t\t<p class="text-normal">${e[0].author}</p>\n\t\t\t\t\t\t\t\t<p>${e[0].comment}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n                    \n                    <div class="review-margin-bottom row comment-item">\n\t\t\t\t\t\t<div class="col-xs-9 col-sm-9">\n\t\t\t\t\t\t\t<div class="review-inner review-gray review-arrow review-arrow-right">\n\t\t\t\t\t\t\t\t<p class="text-normal">${e[1].author}</p>\n\t\t\t\t\t\t\t\t<p>${e[1].comment}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="col-xs-3 col-sm-2">\n\t\t\t\t\t\t\t<div class="review-user">\n\t\t\t\t\t\t\t\t<img src="${e[1].image}" alt="" class="img-responsive avatar">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n                    \n                    <div class="row comment-item">\n                        <div class="col-xs-3 col-sm-2">\n                            <div class="review-user">\n                                <img src="${e[2].image}" alt="" class="img-responsive avatar">\n                            </div>\n                        </div>\n                        <div class="col-xs-9 col-sm-9">\n                            <div class="review-inner review-orange review-arrow review-arrow-left">\n                                <p class="text-normal">${e[2].author}</p>\n                                <p>${e[2].comment}</p>\n                            </div>\n                        </div>\n                    </div>`};fetch("./comments.json").then((t=>t.json())).then((t=>{e(t.comments),setInterval((()=>(t=>{const s=t.splice(t.length-6,1)[0];t.splice(t.length,1,s),e(t)})(t.comments)),2e4)}))})(),(t=>{const e=document.querySelectorAll(".count_1 span"),s=document.querySelectorAll(".count_2 span"),n=document.querySelectorAll(".count_3 span"),a=document.querySelectorAll(".count_4 span");let r;const c=function(t){return String(t).padStart(2,"0")},o=()=>{let o=(()=>{let e=(new Date(t).getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,days:Math.floor(e/60/60/24),hours:Math.floor(e/60/60%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();e.forEach((t=>t.textContent=c(o.days))),s.forEach((t=>t.textContent=c(o.hours))),n.forEach((t=>t.textContent=c(o.minutes))),a.forEach((t=>t.textContent=c(o.seconds))),o.timeRemaining<0&&(clearInterval(r),e.forEach((t=>t.textContent="00")),s.forEach((t=>t.textContent="00")),n.forEach((t=>t.textContent="00")),a.forEach((t=>t.textContent="00")))};o(),r=setInterval(o,1e3)})("20 august 2022"),(()=>{const t=document.querySelector(".smooth-scroll");t.style.display="none",window.addEventListener("scroll",(()=>{document.documentElement.scrollTop<730?t.style.display="none":t.style.display="block"})),seamless.polyfill(),t.addEventListener("click",(t=>{t.preventDefault();const e=document.getElementById("header");e&&seamless.elementScrollIntoView(e,{behavior:"smooth",block:"start"})}))})(),document.querySelectorAll('input[name="fio"]').forEach((t=>{t.addEventListener("input",(t=>t.target.value=t.target.value.replace(/[^а-яa-z\s]/gi,"")))})),function(t,e="+7 (__) --"){const s=document.querySelectorAll(t);function n(t){const s=t.keyCode,n=e,a=n.replace(/\D/g,""),r=this.value.replace(/\D/g,"");let c=0,o=n.replace(/[_\d]/g,(function(t){return c<r.length?r.charAt(c++)||a.charAt(c):t}));c=o.indexOf("_"),-1!=c&&(o=o.slice(0,c));let l=n.substr(0,this.value.length).replace(/_+/g,(function(t){return"\\d{1,"+t.length+"}"})).replace(/[+()]/g,"\\$&");l=new RegExp("^"+l+"$"),(!l.test(this.value)||this.value.length<5||s>47&&s<58)&&(this.value=o),"blur"==t.type&&this.value.length<5&&(this.value="")}for(const t of s)t.addEventListener("input",n),t.addEventListener("focus",n),t.addEventListener("blur",n)}('input[name="phone"]',"+7 (___) ___-__-__"),(()=>{try{const t=document.querySelector("#calc"),e=t.querySelector("#calc-type"),s=t.querySelector("#calc-type-material"),n=t.querySelector("#calc-input"),a=t.querySelector("#calc-total"),r=()=>{const t=+e.value,r=+s.value;let c=0;c=t&&r?t*r*n.value:0,a.value=c};t.addEventListener("input",(t=>{t.target!==e&&t.target!==s&&t.target!==n||r()}))}catch(t){}})(),(({someElem:t=[]})=>{const e=document.querySelectorAll("form"),s=document.createElement("div");e.forEach((e=>{e.addEventListener("submit",(n=>{n.preventDefault(),((e,n=(()=>{const t=document.createElement("div");return t.classList.add("sk-wave"),t.innerHTML="<div class='sk-rect sk-rect-1'></div>\n                            <div class='sk-rect sk-rect-2'></div>\n                            <div class='sk-rect sk-rect-3'></div>\n                            <div class='sk-rect sk-rect-4'></div>\n                            <div class='sk-rect sk-rect-5'></div>",t})())=>{const a=e.querySelectorAll("input"),r=new FormData(e),c={};var o;r.forEach(((t,e)=>{c[e]=t})),s.classList.add("black"),s.textContent="",s.insertAdjacentElement("afterbegin",n),e.append(s),t.forEach((t=>{try{const e=document.getElementById(t.id);0<+e.value&&(c[t.id]=e.value)}catch(t){}})),(t=>{let e=!0;return(t=>{t.forEach((t=>{("fio"===t.name&&""===t.value||"phone"===t.name&&""===t.value)&&t.classList.add("error"),("fio"!==t.name||/^[а-яёЁa-z\s]{2,}$/gi.test(t.value))&&("phone"!==t.name||/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10,}$/g.test(t.value))||t.classList.add("error"),t.addEventListener("input",(t=>{t.preventDefault(),("fio"===t.target.name&&/^[а-яёЁa-z\s]{2,}$/gi.test(t.target.value)||"phone"===t.target.name&&/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10,}$/g.test(t.target.value))&&t.target.classList.remove("error")}))}))})(t),t.forEach((t=>{t.classList.contains("error")&&(e=!1)})),e})(a)?(o=c,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(o),headers:{"Content-type":"application/json"}}).then((t=>t.json()))).then((t=>{s.textContent="Спасибо! Наш менеджер с вами свяжется!",a.forEach((t=>{t.value=""}))})).catch((t=>{s.textContent="Ошибка!"})):s.textContent="Ошибка! Введите данные правильно.",setTimeout((()=>s.textContent=""),3e3)})(e)}))}))})({someElem:[{id:"calc-total"}]}),t({sectionId:"#header",modalClass:".header-modal",overlayClass:".overlay",openButtonClass:".open-modal-header",closeButtonClass:".header-modal__close"}),t({sectionId:"#services",modalClass:".services-modal",overlayClass:".overlay",openButtonClass:".open-modal-services",closeButtonClass:".services-modal__close"}),t({sectionId:"#documents",modalClass:".img-modal",overlayClass:".overlay",openButtonClass:".img-responsive",closeButtonClass:".img-modal__close"}),(()=>{const t=document.querySelector(".benefits-arrows"),e=document.querySelectorAll(".benefits__item"),s=document.querySelector(".services-arrows"),n=document.querySelectorAll(".services-item"),a=(t,e,s)=>{t[e].classList.remove(s)},r=(t,e,s)=>{t[e].classList.add(s)},c=(t,e)=>{window.addEventListener("resize",(()=>{document.body.clientWidth<576?(t.forEach((t=>{t.classList.remove(e)})),t[0].classList.add(e)):document.body.clientWidth>576&&(6===t.length?(t.forEach((t=>{t.classList.remove(e)})),t[0].classList.add(e),t[1].classList.add(e),t[2].classList.add(e)):4===t.length&&(t.forEach((t=>{t.classList.remove(e)})),t[0].classList.add(e),t[1].classList.add(e)))}))},o=(t,e,s,n,c,o,l)=>{let i=document.querySelectorAll(n),d=0,m=0;t.addEventListener("click",(t=>{t.preventDefault(),(t.target.matches(s)||t.target.matches(e))&&(document.body.clientWidth>576?t.target.matches(s)?(a(i,m,c),document.querySelector(o).appendChild(i[m]),m++,l++,m>=i.length&&(m=0),l>=i.length&&(l=0),r(i,l,c)):t.target.matches(e)&&(a(i,l,c),l--,m--,l<0&&(l=i.length-1),m<0&&(m=i.length-1),document.querySelector(o).prepend(i[m]),r(i,m,c)):document.body.clientWidth<576&&(a(i,d,c),t.target.matches(s)?d++:t.target.matches(e)&&d--,d>=i.length&&(d=0),d<0&&(d=i.length-1),r(i,d,c)))}))};c(e,"benefits__item--active"),c(n,"services-item--active"),o(t,".arrow-left",".arrow-right",".benefits__item","benefits__item--active",".benefits-wrap",2),o(s,".arrow-left",".arrow-right",".services-item","services-item--active",".services-items",1)})()})();