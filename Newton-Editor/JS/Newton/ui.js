Newton.resizeCanvasToDiv = function(){

	var width = $("#mainCanvas").width(); 
	var height = $("#mainCanvas").height();
	this.threejs.camera.aspect = width/height;
	this.objectForId(this.selectedCamera).bounds.width = width;
	this.objectForId(this.selectedCamera).bounds.height = height;
	this.threejs.camera.updateProjectionMatrix();
	this.threejs.renderer.setSize(width, height);
	
}

Newton.log = function(message){
	
	var tag = document.createElement("p");
	var entry = document.createTextNode("["+ Math.round(new Date().getTime()/1000) +"] >> "+message);
	tag.appendChild(entry);
	this.DOMRefs.logConsole.appendChild(tag);
	this.DOMRefs.logConsole.scrollTop = this.DOMRefs.logConsole.scrollHeight;

}

Newton.updateOutlineView = function(){
	for(i in this.objectTemplates){
		var divName = "#"+this.objectTemplates[i].daeData.name;
		if(!$(divName).length > 0){
			var node = document.createElement("li");
			var label = document.createTextNode(this.objectTemplates[i].daeData.name);
			node.appendChild(label);
			node.id = this.objectTemplates[i].daeData.name;
			node.onclick = handleTemplateClick;
			$("#object-templates").append(node);
			$("#object-templates").treeview({add:node});
			Newton.log("Template added: "+node.id);
		}
	}
	for(i in this.objects){
		var name = this.objects[i].mesh.name +"_"+ this.objects[i].identifier;
		var divName = "#" + name;
		if(!$(divName).length > 0){
			var node = document.createElement("li");
			var label = document.createTextNode(name);
			node.appendChild(label);
			node.id = name;
			node.newtonId = this.objects[i].identifier;
			node.onclick = handleInstanceClick;
			$("#object-instances").append(node);						
			$("#object-instances").treeview({add:node});
			Newton.log("Instance added: "+node.id);
		}
	}

}

function modal(divId, encapsulated){
	encapsulated = encapsulated || false;
	if(encapsulated)
		$.modal.close();
	$(divId).modal();

}

function handleTemplateClick(event){

	Newton.objectDispatcher.dispatchInstanceForTemplate(event.target.id);

}

function handleInstanceClick(event){

	//Newton.selectObject(event.target.newtonId);
	Newton.selectCamera(event.target.newtonId);

}

