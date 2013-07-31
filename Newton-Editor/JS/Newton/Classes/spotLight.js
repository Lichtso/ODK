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
		this.cone.geometry.vertices = new THREE.CylinderGeometry(0,(Math.tan(this.bounds.cutoff*0.5)*this.bounds.range),this.bounds.range,6,0, false).vertices;
		this.light.angle = cutoff/2;

	}

	this.setRange = function(range){

		this.bounds.range = range;
		this.cone.geometry.vertices = new THREE.CylinderGeometry(0,(Math.tan(this.bounds.cutoff*0.5)*this.bounds.range),this.bounds.range,6,0, false).vertices;
		this.cone.position.y = -range/2;
		this.light.distance = range;

	}

	this.setColor = function(r, g, b){

		this.color.r = r;
		this.color.g = g;
		this.color.b = b;
		this.light.color = this.color;
		this.wireframeMaterial.color = this.color;

	}

	this.setTransform = function(matrix){

		this.container.applyMatrix(matrix);
		this.transformation.matrix = this.container.matrix;

	}

	this.setScript = function(resource){

		this.script.resource = resource;

	}

	this.showUI = function(){

		this.cone.visible = true;

	}

	this.hideUI = function(){

		this.cone.visible = false;

	}

	this.container = new THREE.Object3D();

	this.wireframeMaterial = new THREE.MeshBasicMaterial({
		wireframe: true,
		color: this.color		
	});

	this.cone = new THREE.Mesh(

		new THREE.CylinderGeometry(0,(Math.tan(this.bounds.cutoff*0.5)*this.bounds.range),this.bounds.range,6,0, false),
		this.wireframeMaterial

	);

	this.spriteTexture = THREE.ImageUtils.loadTexture( assets.spotLight.textureSrc );
	this.spriteMaterial = new THREE.SpriteMaterial( { map: this.spriteTexture, useScreenCoordinates: false, color: "#000000", depthWrite: false, depthTest: false } );
	this.spriteMaterial.color = this.color;
	this.sprite = new THREE.Sprite( this.spriteMaterial );
	this.sprite.position.set( 0, 0, 0 );
	this.sprite.scale.set( assets.spotLight.textureWidth, assets.spotLight.textureHeight, 1.0 ); 

	this.spotTarget = new THREE.Object3D();

	this.cone.position.y -= this.bounds.range/2;
	this.spotTarget.position.y = -this.bounds.range;
	this.light = new THREE.SpotLight(this.color);

	this.light.target = this.spotTarget;
	this.light.angle = this.bounds.cutoff/2;
	this.light.distance = this.bounds.range;

	this.container.add(this.spotTarget);
	this.container.add(this.sprite);
	this.container.add(this.cone);
	this.container.add(this.light);

	Newton.threejs.scene.add(this.container);

}