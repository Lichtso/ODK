var NewtonSpotLight = function(){

	this.bounds = {

		cutoff: Math.PI/4,
		range: 20

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

		matrix: new THREE.Matrix4(1,0,0,0,
									0,1,0,0,
									0,0,1,0,
									0,0,0,1)

	};

	var geometry = new THREE.Geometry();

	var sphere = new THREE.SphereGeometry(0.5,16,16);
	var cone = new THREE.CylinderGeometry(0,(Math.tan(this.bounds.cutoff*0.5)*this.bounds.range),this.bounds.range,4,0, false);
	console.log(cone);
	for (var i = cone.vertices.length - 1; i >= 0; i--) {
		cone.vertices[i].y -=this.bounds.range/2;
	};

	THREE.GeometryUtils.merge(geometry, sphere);
	THREE.GeometryUtils.merge(geometry, cone);

	this.mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({

		wireframe: true,
		color: rgbToHex(this.color.r, this.color.g, this.color.b)

	}));

	this.spotTarget = new THREE.Object3D();

	this.mesh.add(this.spotTarget);

	this.spotTarget.position.y -= this.bounds.range;

	this.spotlight = new THREE.SpotLight(rgbToHex(this.color.r, this.color.g, this.color.b));
	this.mesh.add(this.spotlight);
	this.spotlight.target = this.spotTarget;
	this.spotlight.castShadow = true;
	this.spotlight.shadowMapWidth = 1024;
	this.spotlight.shadowMapHeight = 1024;

	this.spotlight.shadowCameraNear = 500;
	this.spotlight.shadowCameraFar = 4000;
	this.spotlight.shadowCameraFov = 30;

	this.mesh.matrix = this.transformation.matrix;

	console.log(this.mesh);

	this.update = function(){



	}

}