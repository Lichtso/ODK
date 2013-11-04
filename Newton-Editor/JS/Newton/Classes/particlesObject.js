var NewtonParticlesObject = function(){

	this.attributes = {

		particles: 10,
		systemLife: 10

	};

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

		this.id = null,
		this.mass = 0.0

	};

	this.texture = {

		resource: null

	};

	this.life = 10;
	this.size = 1;
	this.spawnBox = new THREE.Vector3(1, 1, 1);
	this.velocity = new THREE.Vector3(1, 0, 0);
	this.force = new THREE.Vector3(1, 1, 1);
	this.transformAligned = true;

}