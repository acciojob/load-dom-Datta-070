//your JS code here. If required.
document.addEventListener("DOMContentLoaded", f(){
	let body= document.querySelector("body");
	if(body.hasChildNodes()){
		body.innerHTML="";
	}
	let ans=document.createTextNode("DOM load success");
	body.appendChild(ans);
});