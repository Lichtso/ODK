var NewtonSpotLight = function(){

	this.bounds = {

		cutoff: Math.PI/4,
		range: 20

	};

	this.color = {

		r: 1,
		g: 1,
		b: 1

	};

	this.script = {

		resource: null

	};

	this.transformation = {

		matrix: new THREE.Matrix4(1,0,0,0,
									0,1,0,0,
									0,0,1,0,
									0,0,0,1)

	};

	this.setCutoff = function(cutoff){

		this.bounds.cutoff = cutoff;
		this.mesh.children[2].geometry.vertices = new THREE.CylinderGeometry(0,(Math.tan(this.bounds.cutoff*0.5)*this.bounds.range),this.bounds.range,4,0, false).vertices;
		this.mesh.children[3].angle = cutoff/2;

	}

	this.setRange = function(range){

		this.bounds.range = range;
		this.mesh.children[2].geometry.vertices = new THREE.CylinderGeometry(0,(Math.tan(this.bounds.cutoff*0.5)*this.bounds.range),this.bounds.range,4,0, false).vertices;
		this.mesh.children[2].position.y = -range/2;
		this.mesh.children[3].distance = range;

	}

	this.setColor = function(r, g, b){

		this.color.r = r;
		this.color.g = g;
		this.color.b = b;
		this.mesh.children[3].color = this.color;
		this.material.color = this.color;

	}

	this.setTransform = function(matrix){

		this.mesh.applyMatrix(matrix);
		this.transformation.matrix = this.mesh.matrix;

	}

	this.setScript = function(resource){

		this.script.resource = resource;

	}

	this.mesh = new THREE.Object3D();

	this.material = new THREE.MeshBasicMaterial({
		wireframe: true,
		color: this.color		
	});

	var sphere = new THREE.Mesh(
		new THREE.SphereGeometry(0.5,6,6),
		this.material
	);

	var cone = new THREE.Mesh(

		new THREE.CylinderGeometry(0,(Math.tan(this.bounds.cutoff*0.5)*this.bounds.range),this.bounds.range,4,0, false),
		this.material

	); 

	var spotTarget = new THREE.Object3D();

	this.mesh.add(spotTarget);
	this.mesh.add(sphere);
	this.mesh.add(cone);

	this.mesh.children[2].position.y -= this.bounds.range/2;
	spotTarget.position.y = -this.bounds.range;
	var spotlight = new THREE.SpotLight(this.color);
	this.mesh.add(spotlight);

	spotlight.target = spotTarget;
	spotlight.angle = this.bounds.cutoff/2;
	spotlight.distance = this.bounds.range;
	spotlight.castShadow = true;
	spotlight.shadowMapWidth = 1024;
	spotlight.shadowMapHeight = 1024;
	spotlight.shadowCameraNear = 500;
	spotlight.shadowCameraFar = 4000;
	spotlight.shadowCameraFov = 30;

}