// Newton Object Template for storing collada object describtions
var NewtonObjectTemplate = function(){

	this.templateInstance = undefined;

	this.setTemplate = function(obj){

		this.templateInstance = JSON.parse(JSON.stringify(obj));

	}

	

}

// Newton Object instance
var NewtonObjectInstance = function(){

	this.identifier = undefined;

	// Pointer to it's template
	this.template = undefined;

	// Pointer to it's actual mesh
	this.mesh = undefined;

	// Flag to determine if object is part of container
	this.container = undefined;
}

// Container template to store info
var NewtonContainerTemplate = function(){

	// Keeps templates to objects in container
	this.objectTemplates = new Array();

}

var NewtonContainerInstance = function(){


	// Pointer to it's template
	this.template = undefined;

	// Keeps instance objects of it's child nodes
	this.objects = new Array();

	// Position relative to parent Container/Scene
	this.position = new THREE.Vector3();

	// Flag to determine if container is part of container
	this.container = undefined;

}

//Newton UI Element for storing geometry
var NewtonUIElement = function(){

	// Name for outline view
	this.identifier = undefined;

	this.mesh = undefined;

	this.hidden = false;

}

var NewtonAnimatedTranslation = function(object3D){

	this.object3D = object3D || undefined;
	
	this.translateX = false;
	this.translateY = false;
	this.translateZ = false;

	this.tick = function(){
		if(this.translateX != false)
			this.object3D.translateX(this.translateX/60);
		if(this.translateY != false)
			this.object3D.translateY(this.translateY/60);
		if(this.translateZ != false)
			this.object3D.translateZ(this.translateZ/60);
	}

}