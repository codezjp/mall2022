
var lnks = document.getElementsByName("shoe");
var beforeIndex=0;
for(var j=0;j<lnks.length;j++){
	lnks[j].onclick=function(){
		
		var index = this.getAttribute("i");
		var menus = document.getElementsByName("shoe");
		for(var k=0;k<menus.length;k++){
			menus[k].parentElement.removeAttribute("class")
		}
		menus[index].parentElement.className="chos";
		var width =document.getElementById("shoeItem").clientWidth*4*index;
		
		$("#jnBrandList").animate({left:-width+"px"},3000);
	
		
	}
	
	
}