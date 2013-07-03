var NewtonPositionalLight = function(){

	this.bounds = {

		omniDirectional: true,
		range: 15

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

	this.container = new THREE.Object3D();

	this.setOmniDirectional = function(omni){

		if(this.bounds.omniDirectional == omni)
			return;
		this.bounds.omniDirectional = omni;

	}

	this.setRange = function(range){

		this.light.distance = range;
		console.log(this.container);
		this.sphere.geometry.vertices = new THREE.SphereGeometry(range,8,8).vertices;
		this.bounds.range = range;

	}

	this.setColor = function(r, g, b){

		this.color.r = r;
		this.color.g = g;
		this.color.b = b;
		this.meshMaterial.color = this.color;
		this.spriteMaterial.color = this.color;
		this.light.color = this.color;

	}

	this.setScript = function(resource){

		this.script.resource = resource;

	}

	this.setTransform = function(matrix){

		this.container.applyMatrix(matrix);
		this.transformation.matrix = this.container.matrix;

	}

	this.showUI = function(){

		this.sphere.visible = true;

	}

	this.hideUI = function(){

		this.sphere.visible = false;

	}

	this.meshMaterial = new THREE.MeshBasicMaterial({

		color: this.color,
		wireframe: true

	});

	this.sphere = new THREE.Mesh(
		new THREE.SphereGeometry(this.bounds.range,8,8),
		this.meshMaterial
	);

	this.spriteTexture = THREE.ImageUtils.loadTexture( assets.positionalLight.textureSrc );
	this.spriteMaterial = new THREE.SpriteMaterial( { map: this.spriteTexture, useScreenCoordinates: false, color: "#000000", depthWrite: false, depthTest: false } );
	this.spriteMaterial.color = this.color;
	this.sprite = new THREE.Sprite( this.spriteMaterial );
	this.sprite.position.set( 0, 0, 0 );
	this.sprite.scale.set( assets.positionalLight.textureWidth, assets.positionalLight.textureHeight, 1.0 ); // imageWidth, imageHeight

	this.light = new THREE.PointLight(this.color);
	this.light.distance = this.bounds.range;

	this.container.add(this.sphere);
	this.container.add(this.sprite);
	this.container.add(this.light);
	Newton.threejs.scene.add(this.container);

}