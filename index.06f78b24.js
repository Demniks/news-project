var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},s=e.parcelRequired7c6;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in n){var s=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,s.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=s);var a=s("2shzp");var o={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let i;const c=new Uint8Array(16);function r(){if(!i&&(i="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!i))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return i(c)}const d=[];for(let e=0;e<256;++e)d.push((e+256).toString(16).slice(1));function l(e,t=0){return(d[e[t+0]]+d[e[t+1]]+d[e[t+2]]+d[e[t+3]]+"-"+d[e[t+4]]+d[e[t+5]]+"-"+d[e[t+6]]+d[e[t+7]]+"-"+d[e[t+8]]+d[e[t+9]]+"-"+d[e[t+10]]+d[e[t+11]]+d[e[t+12]]+d[e[t+13]]+d[e[t+14]]+d[e[t+15]]).toLowerCase()}var u=function(e,t,n){if(o.randomUUID&&!t&&!e)return o.randomUUID();const s=(e=e||{}).random||(e.rng||r)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=s[e];return t}return l(s)};const m=document.querySelector(".mobile_category_menu"),g=document.querySelector(".category_list"),p=document.querySelector(".dropdown"),y=document.querySelector(".dropdown_content"),b=document.querySelector(".mobile_category_list"),v=document.querySelector(".category_btn"),h=document.querySelector(".mobile_category_btn"),f=document.querySelector(".category_mob_icon"),_=document.querySelector(".mob-btn-span"),L=document.querySelector(".category_icon"),w=document.querySelector(".list-news"),k=document.querySelector(".empty"),S=document.querySelector(".checkbox-header__input"),x=document.querySelector(".mob-menu__checkbox-input"),E=document.querySelector(".weather-card"),q=document.querySelector(".calendar__input"),A=document.querySelector(".next-page"),C=document.querySelector(".prev-page");C.disabled=!0;b.classList.remove("category_hidden"),b.classList.add("category_mobile_hidden");let $=0,M=0;function T(e){const t=e.composedPath().includes(m);t||b.classList.contains("category_mobile_hidden")||"Categories"!==_.textContent?t||"Categories"===_.textContent||(b.classList.add("category_mobile_hidden"),f.classList.remove("rotate"),document.removeEventListener("click",T)):(b.classList.add("category_mobile_hidden"),h.classList.remove("is-active-category-btn"),f.classList.remove("rotate"),document.removeEventListener("click",T))}function j({section:e,display_name:t}){return`\n  <li>\n  <button class="cat-menu-btn" type="button" data-section="${e}" data-name='${t}'> ${t}</button>\n  </li>\n  `}function U(e,t,n){for(const t of e)t.classList.toggle("dark-categories-btn");t.classList.toggle("dark-categories-btn"),n.classList.toggle("dark-categories-btn")}function N(e){const t=e.composedPath().includes(p);t||v.classList.contains("has-active-button-inside")?!t&&v.classList.contains("has-active-button-inside")&&(y.classList.add("category_hidden"),v.classList.add("is-active-other-btn"),L.classList.remove("rotate"),document.removeEventListener("click",N)):(y.classList.add("category_hidden"),v.classList.remove("is-active-other-btn"),L.classList.remove("rotate"),document.removeEventListener("click",N))}window.matchMedia("(max-width: 767.98px)").matches?$=4:window.matchMedia("(min-width: 1280px)").matches?$=9:window.matchMedia("(min-width: 768px)").matches&&($=8),h.addEventListener("click",(function(e){b.classList.toggle("category_mobile_hidden"),document.addEventListener("click",T),"Categories"===_.textContent?(h.classList.toggle("is-active-category-btn"),f.classList.toggle("rotate")):f.classList.toggle("rotate")})),b.addEventListener("click",(function(e){if("BUTTON"!==e.target.tagName)return;const t=e.target.dataset.section,n=e.target.dataset.name;b.classList.add("category_mobile_hidden"),h.classList.add("is-active-category-btn"),f.classList.remove("rotate"),f.style.fill="white",null!=n&&n.length<11?_.textContent=n:_.textContent=`${n.substring(0,9)}...`;B(t)})),async function(){try{const e="https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=AKwAkjVAbzaYm1bK9yzcr2BnwjHsxavz";return(await a.default.get(e)).data}catch(e){console.error(e)}}().then((e=>{const t=e.results,n=t.reduce(((e,t)=>e+j(t)),"");b.insertAdjacentHTML("beforeend",n);const s=t.splice(0,6),a=t,o=s.reduce(((e,t)=>e+j(t)),""),i=a.reduce(((e,t)=>e+j(t)),"");g.insertAdjacentHTML("afterbegin",o),y.insertAdjacentHTML("beforeend",i);const c=document.querySelectorAll(".cat-menu-btn");if(JSON.parse(localStorage.getItem("isDarkMode"))){for(let e of c)e.classList.add("dark-categories-btn");v.classList.add("dark-categories-btn"),h.classList.add("dark-categories-btn")}S.addEventListener("click",(()=>{U(c,v,h)})),x.addEventListener("click",(()=>{U(c,v,h)}))})),v.addEventListener("click",(function(e){y.classList.toggle("category_hidden"),L.classList.toggle("rotate"),v.classList.toggle("is-active-other-btn"),document.addEventListener("click",N)})),g.addEventListener("click",(function(e){if(e.target.classList.contains("category_btn")||e.target.classList.contains("desk-btn-span")||e.target.classList.contains("category_icon")||"BUTTON"!==e.target.tagName)return;y.classList.contains("category_hidden")||(y.classList.add("category_hidden"),L.classList.remove("rotate"));const t=document.querySelector(".is-active-category-btn");t&&(t.classList.remove("is-active-category-btn"),v.classList.remove("is-active-other-btn"),v.classList.remove("has-active-button-inside"));e.composedPath().includes(y)?(e.target.classList.add("is-active-category-btn"),v.classList.add("is-active-other-btn"),v.classList.add("has-active-button-inside")):e.target.classList.add("is-active-category-btn");document.removeEventListener("click",N);const n=e.target.dataset.section;M=0,B(n),A.addEventListener("click",(()=>{!function(e){M+=$,C.disabled=!1,B(e),R()}(n)})),C.addEventListener("click",(()=>{!function(e){M-=$,0===M&&(C.disabled=!0);B(e),R()}(n)}))})),w.addEventListener("click",(function(e){if("A"===e.target.nodeName){e.target.setAttribute("data-is-read",!0);const t=e.target.parentElement.parentElement.parentElement,n=document.createElement("p");n.innerText="Already read",n.classList.add("have-read"),t.appendChild(n);t.getAttribute("data-id")}}));const D={attributes:!0,attributeFilter:["data-date"]},H=new MutationObserver((function(e,t){const n=q.dataset.date.split(".").join("/");E.style.display="none";Array.prototype.slice.call(w.childNodes).filter((e=>e.dataset.pub_date===n)).length>0?w.childNodes.forEach((e=>{e.dataset.pub_date!==n?e.style.display="none":e.style.display="block"})):(w.childNodes.forEach((e=>e.style.display="none")),w.insertAdjacentHTML("afterbegin",'<li style="margin:0 auto"><img src="https://cdn.dribbble.com/users/2382015/screenshots/6065978/media/8b4662f8023e4e2295f865106b5d3aa7.gif" alt="no news"></img></li>'))}));function B(e){(async function(e){try{const t=`https://api.nytimes.com/svc/news/v3/content/all/${e}.json?api-key=AKwAkjVAbzaYm1bK9yzcr2BnwjHsxavz&limit=${$}&offset=${M}`;return(await a.default.get(t)).data}catch(e){console.error(e),w.innerHTML="",k.style.display="block",E.style.display="none"}})(e).then((({results:e,num_results:t})=>{if(null===e)w.innerHTML="",k.style.display="block",E.style.display="none";else{const n=e.reduce(((e,t)=>e+function({title:e,multimedia:t,section:n,abstract:s,published_date:a,url:o}){var i;const c=u(),r=(null==t||null===(i=t[2])||void 0===i?void 0:i.url)||"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",d=110;s.length>d&&(s=s.slice(0,d-3)+"...");const l=new Date(a),m=l.getDate().toString().padStart(2,"0"),g=(l.getMonth()+1).toString().padStart(2,"0"),p=l.getFullYear().toString(),y=`${m}/${g}/${p}`;return`<li class="list-news__item" data-id="${c}" data-pub_date="${y}" >\n            <article class="item-news__article">\n              <div class="item-news__wrapper-img">\n                <img class="item-news__img" src="${r}" alt="photo">\n                <p class="item-news__category">${n}</p>\n                <div class="article_flag">\n                  <button class="article_flag--add"><span class="article_flag_text">Add to favorite</span>\n                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="#4440f7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95C22 5.216 19.761 3 17 3s-5 3-5 3s-2.239-3-5-3Z"/></svg>\n                  </button>\n                  <button class="article_flag--remove is-hidden"><span class="article_flag_text">Remove from favorite</span>\n                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#4b48da" stroke="#4b48da" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95C22 5.216 19.761 3 17 3s-5 3-5 3s-2.239-3-5-3Z"/></svg>\n                  </button>\n                </div>\n              </div>\n              <h2 class="item-news__title">${""===e?"Title not found":e}</h2>\n              <p class="item-news__description">${""===s?"Description not found":s}</p>\n              <div class="item-news__info">\n                <span class="item-news__info-date">${y}</span>\n                <a class="item-news__info-link" href="${o}" target="_blank" rel="noreferrer noopener">Read more</a>\n              </div>\n            </article>\n          </li>`}(t)),"");k.style.display="none",E.style.display="block",w.innerHTML=n,A.disabled=t-450<M,H.observe(q,D)}}))}function R(){const{height:e}=w.firstElementChild.getBoundingClientRect();console.log(e),window.scrollBy({top:-4*e,behavior:"smooth"})}
//# sourceMappingURL=index.06f78b24.js.map