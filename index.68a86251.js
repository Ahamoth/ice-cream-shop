var modalPM3=document.querySelector("[data-buy-product3-modal]"),overlayPM3=document.querySelector("[data-buy-product3-overlay]"),openModalBtnPM3=document.querySelector("[data-buy-product3-open]"),closeModalBtnPM3=document.querySelector("[data-buy-product3-close]"),openModalPM3=function(){modalPM3.classList.remove("is-hidden"),overlayPM3.classList.remove("is-hidden")};openModalBtnPM3.addEventListener("click",openModalPM3,{passive:!0});var closeModalPM3=function(){modalPM3.classList.add("is-hidden"),overlayPM3.classList.add("is-hidden")};closeModalBtnPM3.addEventListener("click",closeModalPM2,{passive:!0}),document.addEventListener("keydown",(function(e){"Escape"!==e.key||modalPM3.classList.contains("is-hidden")||closeModalPM3()}),{passive:!0});
//# sourceMappingURL=index.68a86251.js.map