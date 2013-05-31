var NewtonDirectionalLight = function(){

	this.bounds = {

		vector: new THREE.Vector3();

	};

	this.color = {

		r: 255,
		g: 255,
		b: 255

	};

	this.script = {

		resource: null;

	};

	this.transformation = {

		rotate: new THREE.Quaternion(),
		translate: new THREE.Vector3(),
		scale: new THREE.Vector3()

	};

}
