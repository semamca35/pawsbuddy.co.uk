function btnHandler(e,t,n){var r=document.querySelector(e);r&&r.addEventListener(t,function(e){e.preventDefault(),n(e)},!1)}function flagIfEmpty(e){e.value.length<1&&e.classList.add("needs-content")}!function(){var e=document.querySelectorAll("form");if(0!=e.length)for(var t=0;t<e.length;t++)e[t].addEventListener("submit",function(e){e.preventDefault();for(var t=e.target,n=t.querySelectorAll(".needs-content"),r=0;r<n.length;r++)n[r].classList.remove("needs-content");for(var l=t.querySelectorAll(".required"),o=0;o<l.length;o++)flagIfEmpty(l[o]);if(0<(n=t.querySelectorAll(".needs-content")).length)return!1;t.submit()},!1)}(),btnHandler("#source","change",function(e){var t=e.target.selectedIndex,n=e.target.options[t].value,r=document.querySelector(".source-other");"Other"==n?r.classList.remove("nope"):r.classList.add("nope")});