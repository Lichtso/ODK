var objectTransformer = function(){

	this.grabbedObject = undefined;
	this.mode = 0; //0 - translation, 1 - rotation, 2 - scale

	this.grabObject = function(object){

		this.dropObject();
		this.grabbedObject = object;
		object.showUI();
		this.showUI();

	}

	this.dropObject = function(){

		this.grabbedObject.hideUI();

	}

	this.showUI = function(){

	}

	this.scalingUI = new THREE.Object3D();
	this.rotationUI = new THREE.Object3D();
	this.translationUI = new THREE.Object3D();

	

}