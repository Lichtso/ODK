var NewtonRigidObject = function(){

	this.physicsBody = {

		this.id = null,
		this.mass = 0.0

	};

	this.model = {

		resource: null

	};

	this.textureAnimation = new Array();
	this.integrity = null;
	this.angularVelocity = new THREE.Vector3(0, 0, 0);
	this.linearVelocity = new THREE.Vector3(0, 0, 0);
	this.angularFactor = new THREE.Vector3(0, 0, 0);
	this.linearFactor = new THREE.Vector3(0, 0, 0);

	this.damping = {

		angular: 0.0,
		linear: 0.0

	};



}