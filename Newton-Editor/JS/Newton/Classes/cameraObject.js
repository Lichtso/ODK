var NewtonCameraObject = function(){

	this.transformation = {

		matrix: new THREE.Matrix4(1,0,0,0,
								  0,1,0,0,
								  0,0,1,0,
								  0,0,0,1)

	};

	this.script = {

		resource: null

	};

	this.bounds = {

		fov: 90,
		near: 0,
		far: 1000,
		width: 10,
		height: 10

	};

	this.identifier = Newton.nextId();
	this.objectType = "cameraObject";
	this.mesh = {};
	this.mesh.NewtonID = this.identifier;
	this.mesh.name = "camera";

}