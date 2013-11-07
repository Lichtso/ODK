var cameraTranslation = function(){

	this.keydown = function(event){

		if(event.which == 87){
			Newton.animations['camera'].translateZ = -10;
		}
		if(event.which == 65){
			Newton.animations['camera'].translateX = -10;
		}
		if(event.which == 83){
			Newton.animations['camera'].translateZ = 10;
		}
		if(event.which == 68){
			Newton.animations['camera'].translateX = 10;
		}

		var matrix = new THREE.Matrix4();
		matrix.elements.set(Newton.threejs.camera.matrix.elements);
		Newton.objectForId(Newton.selectedCamera).transformation.matrix.elements.set(matrix.elements);
		delete matrix;
	}

	this.keyup = function(event){

		if(event.which == 87){
			Newton.animations['camera'].translateZ = false;
		}
		if(event.which == 65){
			Newton.animations['camera'].translateX = false;
		}
		if(event.which == 83){
			Newton.animations['camera'].translateZ = false;
		}
		if(event.which == 68){
			Newton.animations['camera'].translateX = false;
		}

		var matrix = new THREE.Matrix4();
		matrix.elements.set(Newton.threejs.camera.matrix.elements);
		Newton.objectForId(Newton.selectedCamera).transformation.matrix.elements.set(matrix.elements);
		delete matrix;
	}

}

var cameraRotation = function(){

	this.isMouseDown = false;
	this.lastPosition = new THREE.Vector2();

	this.mousedown = function(event){
		this.lastPosition.set(event.layerX, event.layerY);
		this.isMouseDown = true;
	}

	this.mousemove = function(event){
		if(this.isMouseDown){
			var diff = this.lastPosition.sub(new THREE.Vector2(event.layerX, event.layerY));
			Newton.threejs.camera.rotation.x += diff.y*(Math.PI/180)/8;
			Newton.threejs.camera.rotation.y += diff.x*(Math.PI/180)/8;
			this.lastPosition.set(event.layerX, event.layerY);
		}
		var matrix = new THREE.Matrix4();
		console.log(JSON.stringify(matrix));
		matrix.elements.set(Newton.threejs.camera.matrix.elements);
		console.log(JSON.stringify(matrix));
		Newton.objectForId(Newton.selectedCamera).transformation.matrix.elements.set(matrix.elements);
		console.log(JSON.stringify(Newton.objects[1].transformation.matrix));
		delete matrix;
	}

	this.mouseup = function(event){
		this.isMouseDown = false;
	}

}

var objectTranslation = function(){

	this.isMouseDown = false;
	this.lastPosition = new THREE.Vector2();

	this.mousedown = function(event){

		this.lastPosition.set(event.layerX, event.layerY);
		this.isMouseDown = true;

	}

	this.mousemove = function(event){

		if(this.isMouseDown){

			var diff = this.lastPosition.sub(new THREE.Vector2(event.layerX, event.layerY));
			//Newton.objectForId(Newton.selectedObject).position.x += diff.x;
			//Newton.objectForId(Newton.selectedObject).position.z += diff.z;

			var object = Newton.objectForId(Newton.selectedObject);

			var vector = new THREE.Vector3( diff.x, diff.y, 0.5 );
			Newton.threejs.projector.unprojectVector(vector, Newton.threejs.camera);
			vector = vector.sub(Newton.threejs.camera.position).normalize();
			vector.x = vector.x;
			vector.y = -vector.y;
			vector.z = vector.z;
			vector.multiplyScalar(.1);

			object.mesh.position = object.mesh.position.add(vector);

			this.lastPosition.set(event.layerX, event.layerY);

			delete vector;

		}
	}

 	this.mouseup = function(event){

 		this.isMouseDown = false;

 	}

}

var objectPicker = function(){
	
	this.isMouseDown = false;
	this.mouseDownPos = undefined;

	this.mousedown = function(event){

		this.isMouseDown = true;
		this.mouseDownPos = new THREE.Vector2(event.layerX, event.layerY);

	}

	this.mousemove = function(event){

		if(this.isMouseDown){

			//Do magic?

		}

	}

	this.mouseup = function(event){

		var currentPosRounded = new THREE.Vector2(Math.floor(event.layerX), Math.floor(event.layerY));
		var initialPosRounded = new THREE.Vector2(Math.floor(event.layerX),Math.floor(event.layerY));

		if((currentPosRounded.x == initialPosRounded.x)&&(currentPosRounded.y == initialPosRounded.y)){

			var mouse = new THREE.Vector2();

			mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
			mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

			var vector = new THREE.Vector3( mouse.x, mouse.y, 0.5 );
			Newton.threejs.projector.unprojectVector(vector, Newton.threejs.camera);

			var raycaster = new THREE.Raycaster(Newton.threejs.camera.position, vector.sub(Newton.threejs.camera.position).normalize());

			var intersect = raycaster.intersectObjects(Newton.threejs.scene.children)[0];

			console.log(intersect.object.NewtonID);

			Newton.selectObject(intersect.object.NewtonID);

			console.log(Newton.selectedObject);

			Newton.log("selectedObject: "+Newton.selectedObject.identifier);
		
		}

	}

}

var mainTool = function(){

}			