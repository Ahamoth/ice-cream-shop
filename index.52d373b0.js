!function(){var e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),o=document.querySelector(".main-nav__list-mobile"),c=function(){var n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open"),bodyScrollLock[n?"enableBodyScroll":"disableBodyScroll"](document.body)};t.addEventListener("click",c),n.addEventListener("click",c),o.addEventListener("click",(function(e){if("A"!==e.target.nodeName)return;c()})),window.matchMedia("(min-width: 1200px)").addEventListener("change",(function(n){n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))}();
//# sourceMappingURL=index.52d373b0.js.map