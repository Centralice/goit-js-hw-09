import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */let l={email:"",message:""};const t=document.querySelector(".feedback-form");t.addEventListener("input",n);o();function n(e){const a=e.target.name;l[a]=e.target.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(l))}function o(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(!e)return;const{email:a,message:s}=t.elements;a.value=e.email,s.value=e.message}t.addEventListener("submit",m);function m(e){e.preventDefault(),!t.elements.email.value||!t.elements.message.value?alert("Please, fill in all fields"):(console.log(l),localStorage.clear(),t.reset())}
//# sourceMappingURL=commonHelpers2.js.map
