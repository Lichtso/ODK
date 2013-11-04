var NewtonPhysicObject = function(){

	this.transformation = {

		matrix: new THREE.Matrix4(1,0,0,0,
								  0,1,0,0,
								  0,0,1,0,
								  0,0,0,1)

	};

	this.script = {

		resource: null;

	};

	this.physicsBody = {

		this.id = null

	};

}