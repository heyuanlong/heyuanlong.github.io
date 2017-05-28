function load_js_file(id,newJS)
	{
	var oldjs = null; 
	var t = null; 
	var oldjs = document.getElementById(id); 
	if(oldjs) oldjs.parentNode.removeChild(oldjs); 
	var scriptObj = document.createElement("script"); 
	scriptObj.src = newJS; 
	scriptObj.type = "text/javascript"; 
	scriptObj.id   = id; 
	document.getElementsByTagName("head")[0].appendChild(scriptObj);
}

function getDateYYYYmmdd()
{
	var myDate = new Date();
	var year = myDate.getFullYear();
	var month = myDate.getMonth() + 1; 
	var day = myDate.getDate();
	var js_str = year;
	 if(month < 10)
		js_str += "0";
	js_str += month
	if(day < 10)
		js_str += "0";
	js_str += day
	return js_str
}