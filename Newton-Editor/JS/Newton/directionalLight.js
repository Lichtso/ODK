var NewtonDirectionalLight = function(){

	this.bounds = {

		vector: new THREE.Vector3(10,10,10)

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

	this.setTransform = function(matrix){

		this.mesh.applyMatrix(matrix);
		this.transformation.matrix = this.mesh.matrix;

	}

	this.mesh = new THREE.Object3D();
	this.material = new THREE.MeshBasicMaterial({

		color: this.color,
		wireframe: true

	});
	this.rayMaterial = new THREE.LineBasicMaterial({color: this.color,linewidth: 1, opacity: 1});

	var sphere = new THREE.Mesh(

		new THREE.SphereGeometry(0.5,4,4),
		this.material

	);

	var rayGeometry = new THREE.Geometry();
	rayGeometry.vertices.push(new THREE.Vector3(0, 0, 0));
	rayGeometry.vertices.push(new THREE.Vector3(0, -10, 0));
	var ray = new THREE.Line(rayGeometry, this.rayMaterial);

	var cone = new THREE.Mesh(

		new THREE.CylinderGeometry(0.2,0,1,6,0, false),
		this.material

	);
	cone.position.y = -10;

	var directionalLight = new THREE.DirectionalLight();
	directionalLight.color = this.color;

	this.mesh.add(sphere);
	this.mesh.add(ray);
	this.mesh.add(cone);
	this.mesh.add(directionalLight);

}
