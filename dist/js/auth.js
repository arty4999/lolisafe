var lsKeys={token:"token"},page={token:localStorage[lsKeys.token],user:null,pass:null,unhide:function(){document.querySelector("#loader").classList.add("is-hidden"),document.querySelector("#login").classList.remove("is-hidden")},onAxiosError:function(e){console.error(e);var r={520:"Unknown Error",521:"Web Server Is Down",522:"Connection Timed Out",523:"Origin Is Unreachable",524:"A Timeout Occurred",525:"SSL Handshake Failed",526:"Invalid SSL Certificate",527:"Railgun Error",530:"Origin DNS Error"}[e.response.status]||e.response.statusText,o=e.response.data&&e.response.data.description?e.response.data.description:"There was an error with the request, please check the console for more information.";return swal(e.response.status+" "+r,o,"error")},do:function(e,r){var o=page.user.value.trim();if(!o)return swal("An error occurred!","You need to specify a username.","error");var n=page.pass.value.trim();if(!n)return swal("An error occurred!","You need to specify a password.","error");r.classList.add("is-loading"),axios.post("api/"+e,{username:o,password:n}).then((function(o){if(!1===o.data.success)return r.classList.remove("is-loading"),swal("Unable to "+e+"!",o.data.description,"error");localStorage.token=o.data.token,window.location="dashboard"})).catch((function(e){r.classList.remove("is-loading"),page.onAxiosError(e)}))},verify:function(){axios.post("api/tokens/verify",{token:page.token}).then((function(e){if(!1===e.data.success)return page.unhide(),swal("An error occurred!",e.data.description,"error");window.location="dashboard"})).catch((function(e){page.unhide(),page.onAxiosError(e)}))}};window.onload=function(){page.user=document.querySelector("#user"),page.pass=document.querySelector("#pass");var e=document.querySelector("#authForm");e.addEventListener("submit",(function(e){e.preventDefault()}));var r=document.querySelector("#loginBtn");r&&r.addEventListener("click",(function(r){e.checkValidity()&&page.do("login",r.currentTarget)}));var o=document.querySelector("#registerBtn");o&&o.addEventListener("click",(function(r){e.checkValidity()&&page.do("register",r.currentTarget)})),page.token?page.verify():page.unhide()};
//# sourceMappingURL=auth.js.map
