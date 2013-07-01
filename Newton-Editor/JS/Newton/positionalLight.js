var NewtonPositionalLight = function(){

	this.bounds = {

		omniDirectional: true,
		range: 10

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

	this.setOmniDirectional = function(omni){

		if(this.bounds.omniDirectional == omni)
			return;
		this.bounds.omniDirectional = omni;
		this.setRange(this.bounds.range);
		if(omni == true)
			this.mesh.children[1].position.y = 0;
		else
			this.mesh.children[1].position.y = this.bounds.range/4;
	}

	this.setRange = function(range){

		this.mesh.children[1].geometry.vertices = new THREE.CubeGeometry(range, (this.bounds.omniDirectional? range : range/2), range, 1, 1, 1).vertices;
		this.mesh.children[2].distance = range;
		this.bounds.range = range;

	}

	this.setColor = function(r, g, b){

		this.color.r = r;
		this.color.g = g;
		this.color.b = b;
		this.material.color = this.color;
		this.mesh.children[2].color = this.color;

	}

	this.setScript = function(resource){

		this.script.resource = resource;

	}

	this.setTransform = function(matrix){

		this.mesh.applyMatrix(matrix);
		this.transformation.matrix = this.mesh.matrix;

	}

	this.mesh = new THREE.Object3D();
	this.material = new THREE.MeshBasicMaterial({

		color: this.color,
		wireframe: true

	});

	var sphere = new THREE.Mesh(
		new THREE.SphereGeometry(0.5,4,4),
		this.material
	);

	var boundingVolume = new THREE.Mesh(
		new THREE.SphereGeometry( this.bounds.range , 8, 8),
		this.material
	);

	var pointlight = new THREE.PointLight(this.color);
	pointlight.distance = this.bounds.range;

	this.mesh.add(sphere);
	this.mesh.add(boundingVolume);
	this.mesh.add(pointlight);

}