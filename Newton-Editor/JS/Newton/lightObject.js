var NewtonPositionalLight = function(){

	this.bounds = {

		omniDirectional: true,
		range: 10

	};

	this.color = {

		r: 255,
		g: 255,
		b: 255

	};

	this.script = {

		resource: null

	};

	this.transformation = {

		rotate: new THREE.Quaternion();
		translate: new THREE.Vector3();
		scale: new THREE.Vector3();

	};

	this.positionalLight = null;

}

var NewtonSpotLight = function(){

	this.bounds = {

		cutoff: 5,
		range: 10

	};

	this.color = {

		r: 255,
		g: 255,
		b: 255

	};

	this.script = {

		resource: null

	};

	this.transformation = {

		rotate: new THREE.Quaternion();
		translate: new THREE.Vector3();
		scale: new THREE.Vector3();

	};

	this.spotLight = null;

	var geometry = new THREE.Geometry();

	var sphere = new THREE.SphereGeometry(0.5,4,4);
	var cone = new THREE.CylinderGeometry(0,this.bounds.cutoff,this.bounds.range,4,0, false);
	console.log(cone);
	for (var i = cone.vertices.length - 1; i >= 0; i--) {
		cone.vertices[i].y -=5;
	};

	THREE.GeometryUtils.merge(geometry, sphere);
	THREE.GeometryUtils.merge(geometry, cone);

	this.mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({

		wireframe: true,
		color: 'white'

	}));

}

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

		rotate: new THREE.Quaternion();
		translate: new THREE.Vector3();
		scale: new THREE.Vector3();

	};

}



