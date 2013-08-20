var ToolHandler = function(){
	
	this.selectedTool = undefined;

	this.keydown = function(event){}
	this.keyup = function(event){}
	this.mouseclick = function(event){Newton.log("!!!");}
	this.mousedown = function(event){document.getElementById('mainCanvas').focus();}
	this.mouseup = function(event){}
	this.mouseover = function(event){}
	this.mousemove = function(event){}
	this.mousewheel = function(event){}
	this.keypress = function(event){}

}