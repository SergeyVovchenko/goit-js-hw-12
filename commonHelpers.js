import{a as b,i as p,S as w}from"./assets/vendor-b0d10f48.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const d=document.querySelector(".load-btn"),u=document.querySelector(".js-loader");let m="",f=15,l=1;async function g(t){const o="https://pixabay.com",i="/api/";m!==t&&(m=t,l=1);const a=new URLSearchParams({key:"43954842-86e0551d49d52b31999082e7b",q:t,page:`${l}`,per_page:`${f}`,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${o}${i}?${a}`;return(await b(e)).data}async function x(){l+=1,d.classList.add("is-hidden"),u.classList.add("loader");const t=await g(m);return Math.round(t.totalHits/f)<=l?(p.show({message:"We are sorry, but you have reached the end of search results.",backgroundColor:"#be25f6",messageColor:"#FFF",messageSize:"16px",position:"topRight",maxWidth:"432px"}),u.classList.remove("loader"),d.classList.add("is-hidden"),l=1,t):(u.classList.remove("loader"),d.classList.remove("is-hidden"),t)}function y(t){return t.map(({largeImageURL:o,webformatURL:i,tags:a,likes:e,views:s,comments:r,downloads:L})=>`<li class='images-list'>
            <a class='link-img' href='${o}' download onclick="return false">
            <img class='images' src='${i}' alt='${a}' width='360' height='152'/>
            <ul class='info-wrap'>
            <li class='info-container'> <p class='info-title'>Likes</p> <p class='info-value'>${e}</p> </li>
            <li class='info-container'> <p class='info-title'>Views</p> <p class='info-value'>${s}</p> </li>
            <li class='info-container'> <p class='info-title'>Comments</p> <p class='info-value'>${r}</p> </li>
            <li class='info-container'> <p class='info-title'>Downloads</p> <p class='info-value'>${L}</p> </li>
            </ul>
            </a>
            </li>`).join("")}const S=document.querySelector(".search-form");let n=document.querySelector(".images-box");const c=document.querySelector(".load-btn");S.addEventListener("submit",q);c.addEventListener("click",v);function q(t){t.preventDefault();const o=t.target.elements.query.value.trim();if(c.classList.add("is-hidden"),!o){p.show({message:"Please enter a search query!",backgroundColor:"#EF4040",messageColor:"#FFF",messageSize:"16px",position:"topRight",maxWidth:"432px"}),n.innerHTML="";return}g(o).then(i=>{if(i.hits.length===0){p.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#FFF",messageSize:"16px",position:"topRight",maxWidth:"432px"}),n.innerHTML="";return}const a=y(i.hits);Math.round(i.totalHits/i.hits.length)>1?(n.innerHTML=a,c.classList.remove("is-hidden"),h.refresh()):(c.classList.add("is-hidden"),n.innerHTML=a,h.refresh())}).catch(i=>{console.log(i)}),t.target.elements.query.value=""}let h=new w(".images-box a",{captionDelay:250,captionsData:"alt",captionClass:"text-center"});async function v(){const t=await x(),o=y(t.hits);n.insertAdjacentHTML("beforeend",o),h.refresh();let a=document.querySelector(".images-list").getBoundingClientRect().height;window.scrollBy({left:0,top:a*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
