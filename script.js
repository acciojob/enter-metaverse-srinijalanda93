function changes(){
	//before create ,append need to remove the p tag
	const deleElePTag=document.querySelector("#status");
	deleElePTag.remove();
	//step 1 create the tagElement
let headingTag=document.createElement("h1");
//step -2 set the properties
headingTag.innerText="Enter Metaverse";
// step -3 create the parentnode obj, attach to the body(parent node)
let parentElement=document.querySelector("body");
//append the childelement to the parent
//parentElement.appendChild(headingTag);
// Append the child element to the parent
parentElement.insertBefore(headingTag, document.getElementById("enterBtn"));
	return parentElement;
}