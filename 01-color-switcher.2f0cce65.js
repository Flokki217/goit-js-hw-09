!function(){var o=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");o.addEventListener("click",(function(){changeColor=setInterval((function(){bodyColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)),document.body.style.backgroundColor=bodyColor}),1e3),o.disabled=!0})),t.addEventListener("click",(function(){clearInterval(changeColor),o.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.2f0cce65.js.map
