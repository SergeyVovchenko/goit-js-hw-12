import{a as b,i as u,S as w}from"./assets/vendor-b0d10f48.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const c=document.querySelector(".load-btn"),d=document.querySelector(".js-loader");let m="",f=15,n=1;async function h(t){const o="https://pixabay.com",i="/api/";m!==t&&(m=t,n=1);const a=new URLSearchParams({key:"43954842-86e0551d49d52b31999082e7b",q:t,page:`${n}`,per_page:`${f}`,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${o}${i}?${a}`;return(await b(e)).data}async function x(){n+=1,c.classList.add("is-hidden"),d.classList.add("loader");const t=await h(m);return Math.round(t.totalHits/f)<=n?(u.show({message:"We are sorry, but you have reached the end of search results.",backgroundColor:"#be25f6",messageColor:"#FFF",messageSize:"16px",position:"topRight",maxWidth:"432px"}),d.classList.remove("loader"),c.classList.add("is-hidden"),n=1,t):(d.classList.remove("loader"),c.classList.remove("is-hidden"),t)}function g(t){return t.map(({largeImageURL:o,webformatURL:i,tags:a,likes:e,views:s,comments:r,downloads:L})=>`<li class='images-list'>
            <a class='link-img' href='${o}' download onclick="return false">
            <img class='images' src='${i}' alt='${a}' width='360' height='152'/>
            <ul class='info-wrap'>
            <li class='info-container'> <p class='info-title'>Likes</p> <p class='info-value'>${e}</p> </li>
            <li class='info-container'> <p class='info-title'>Views</p> <p class='info-value'>${s}</p> </li>
            <li class='info-container'> <p class='info-title'>Comments</p> <p class='info-value'>${r}</p> </li>
            <li class='info-container'> <p class='info-title'>Downloads</p> <p class='info-value'>${L}</p> </li>
            </ul>
            </a>
            </li>`).join("")}const S=document.querySelector(".search-form");let l=document.querySelector(".images-box");const p=document.querySelector(".load-btn");S.addEventListener("submit",q);p.addEventListener("click",v);function q(t){t.preventDefault();const o=t.target.elements.query.value.trim();if(p.classList.add("is-hidden"),!o){u.show({message:"Please enter a search query!",backgroundColor:"#EF4040",messageColor:"#FFF",messageSize:"16px",position:"topRight",maxWidth:"432px"}),l.innerHTML="";return}h(o).then(i=>{if(i.hits.length===0){u.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#FFF",messageSize:"16px",position:"topRight",maxWidth:"432px"}),l.innerHTML="";return}else{const a=g(i.hits);l.innerHTML=a,p.classList.remove("is-hidden"),y.refresh()}}).catch(i=>{console.log(i)}),t.target.elements.query.value=""}let y=new w(".images-box a",{captionDelay:250,captionsData:"alt",captionClass:"text-center"});async function v(){const t=await x(),o=g(t.hits);l.insertAdjacentHTML("beforeend",o),y.refresh();let a=document.querySelector(".images-list").getBoundingClientRect().height;window.scrollBy({left:0,top:a*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map