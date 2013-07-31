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

		this.container.applyMatrix(matrix);
		this.transformation.matrix = this.container.matrix;

	}

	this.setColor = function(r, g, b){

		this.color.r = r;
		this.color.g = g;
		this.color.b = b;
		this.meshMaterial.color = this.color;
		this.spriteMaterial.color = this.color;
		this.wireFrameMaterial.color = this.color;
		this.light.color = this.color;

	}

	this.setBounds = function(vector){

		this.bounds.vector = vector;
		this.cone.position.y = -this.bounds.vector.y/4;
		this.ray.geometry.vertices[1].y = -this.bounds.vector.y/4;
		this.box.geometry.vertices = new THREE.CubeGeometry(this.bounds.vector.x, this.bounds.vector.y, this.bounds.vector.z, 1, 1, 1).vertices;
		this.light.distance = getLongestElementOfVector(this.bounds.vector)/100;

	}

	this.setScript = function(resource){

		this.script.resource = resource;

	}

	this.showUI = function(){

		this.ray.visible = true;
		this.cone.visible = true;

	}

	this.hideUI = function(){

		this.ray.visible = false;
		this.cone.visible = false;

	}

	this.container = new THREE.Object3D();

	this.meshMaterial = new THREE.MeshBasicMaterial({});
	this.meshMaterial.color = this.color;
	this.wireFrameMaterial = new THREE.MeshBasicMaterial({ wireframe:true});
	this.wireFrameMaterial.color = this.color;
	this.meshMaterial.color = this.color;
	this.rayMaterial = new THREE.LineBasicMaterial({color: "#000000",linewidth: 1.5, opacity: 1});
	this.rayMaterial.color = this.color;

	var rayGeometry = new THREE.Geometry();
	rayGeometry.vertices.push(new THREE.Vector3(0, 0, 0));
	rayGeometry.vertices.push(new THREE.Vector3(0, -this.bounds.vector.z/2, 0));
	this.ray = new THREE.Line(rayGeometry, this.rayMaterial);

	this.cone = new THREE.Mesh(

		new THREE.CylinderGeometry(0.2,0,1,6,0, false),
		this.meshMaterial

	);
	this.cone.position.y = -this.bounds.vector.y/4;

	this.box = new THREE.Mesh(

		new THREE.CubeGeometry(this.bounds.vector.x, this.bounds.vector.y, this.bounds.vector.z, 1, 1, 1),
		this.wireFrameMaterial

	);

	this.spriteTexture = THREE.ImageUtils.loadTexture( assets.directionalLight.textureSrc );
	this.spriteMaterial = new THREE.SpriteMaterial( { map: this.spriteTexture, useScreenCoordinates: false, color: "#000000", depthWrite: false, depthTest: false} );
	this.spriteMaterial.color = this.color;
	this.sprite = new THREE.Sprite( this.spriteMaterial );
	this.sprite.position.set( 0, 0, 0 );
	this.sprite.scale.set( assets.directionalLight.textureWidth, assets.directionalLight.textureHeight, 1.0 );

	this.light = new THREE.DirectionalLight(this.color, 1.0);
	this.light.color = this.color;
	this.light.distance = getLongestElementOfVector(this.bounds.vector);
	
	this.container.add(this.sprite);
	this.container.add(this.box);
	this.container.add(this.ray);
	this.container.add(this.cone);
	this.container.add(this.light);

	Newton.threejs.scene.add(this.container);

}










