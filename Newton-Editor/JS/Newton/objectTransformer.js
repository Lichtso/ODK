var ObjectTransformer = function(){

	this.grabbedObject = undefined;
	this.mode = 0; //0 - translation, 1 - rotation, 2 - scale

	this.grabObject = function(object){

		this.dropObject();
		this.grabbedObject = object;
		object.showUI();
		this.showUI();

	}

	this.dropObject = function(){

		if(this.grabbedObject) this.grabbedObject.hideUI();

	}

	this.showUI = function(){

		this.container.position = this.grabbedObject.container.position;

	}

	this.changeMode = function(mode){

		if(mode == 0){
			hideObjectHierarchy(this.rotationUI);
			hideObjectHierarchy(this.scalingUI);
			showObjectHierarchy(this.translationUI);
		}else if(mode == 1){
			hideObjectHierarchy(this.translationUI);
			hideObjectHierarchy(this.scalingUI);
			showObjectHierarchy(this.rotationUI);
		}else if(mode == 2){
			hideObjectHierarchy(this.translationUI);
			hideObjectHierarchy(this.rotationUI);
			showObjectHierarchy(this.scalingUI);
		}

	}

	this.container = new THREE.Object3D();

	this.scalingUI = new THREE.Object3D();
	this.rotationUI = new THREE.Object3D();
	this.translationUI = new THREE.Object3D();

	var xAxisGeometry = new THREE.Geometry();
	xAxisGeometry.vertices.push(new THREE.Vector3(0, 0, 0));
	xAxisGeometry.vertices.push(new THREE.Vector3(1.5, 0, 0));

	var yAxisGeometry = new THREE.Geometry();
	yAxisGeometry.vertices.push(new THREE.Vector3(0, 0, 0));
	yAxisGeometry.vertices.push(new THREE.Vector3(0, 1.5, 0));

	var zAxisGeometry = new THREE.Geometry();
	zAxisGeometry.vertices.push(new THREE.Vector3(0, 0, 0));
	zAxisGeometry.vertices.push(new THREE.Vector3(0, 0, 1.5));

	this.scalerXAxis = new THREE.Line(xAxisGeometry, greenLineMaterial);
	this.scalerXAxis.newtonID = "scalerXAxis";
	this.scalerYAxis = new THREE.Line(yAxisGeometry, blueLineMaterial);
	this.scalerYAxis.newtonID = "scalerYAxis";
	this.scalerZAxis = new THREE.Line(zAxisGeometry, redLineMaterial);
	this.scalerZAxis.newtonID = "scalerZAxis";

	this.scalerXZPlane = new THREE.Mesh(new THREE.PlaneGeometry( 0.75, 0.75, 1, 1 ), greenTranslucentMaterial);
	this.scalerXZPlane.newtonID = "scalerXZPlane";
	this.scalerXZPlane.applyMatrix(new THREE.Matrix4().makeRotationX( -Math.PI/2 ));
	this.scalerXZPlane.position.z += 0.375;
	this.scalerXZPlane.position.x += 0.375;

	this.scalerXYPlane = new THREE.Mesh(new THREE.PlaneGeometry( 0.75, 0.75, 1, 1 ), blueTranslucentMaterial);
	this.scalerXYPlane.newtonID = "scalerXYPlane";
	this.scalerXYPlane.position.x += 0.375;
	this.scalerXYPlane.position.y += 0.375;

	this.scalerZYPlane = new THREE.Mesh(new THREE.PlaneGeometry( 0.75, 0.75, 1, 1 ), redTranslucentMaterial);
	this.scalerZYPlane,newtonID = "scalerZYPlane";
	this.scalerZYPlane.applyMatrix(new THREE.Matrix4().makeRotationY( Math.PI/2 ));
	this.scalerZYPlane.position.z += 0.375;
	this.scalerZYPlane.position.y += 0.375;

	this.scalerXDongle = new THREE.Mesh(new THREE.SphereGeometry( 0.125, 8, 8 ), greenSolidMaterial);
	this.scalerXDongle.position.x += 1.5;
	this.scalerXDongle.newtonID = "scalerXDongle";
	this.scalerYDongle = new THREE.Mesh(new THREE.SphereGeometry( 0.125, 8, 8 ), blueSolidMaterial);
	this.scalerYDongle.position.y += 1.5;
	this.scalerYDongle.newtonID = "scalerYDongle";
	this.scalerZDongle = new THREE.Mesh(new THREE.SphereGeometry( 0.125, 8, 8 ), redSolidMaterial);
	this.scalerZDongle.position.z += 1.5;
	this.scalerZDongle.newtonID = "scalerZDongle";

	this.scalingUI.add(this.scalerXAxis);
	this.scalingUI.add(this.scalerYAxis);
	this.scalingUI.add(this.scalerZAxis);
	this.scalingUI.add(this.scalerXDongle);
	this.scalingUI.add(this.scalerYDongle);
	this.scalingUI.add(this.scalerZDongle);
	this.scalingUI.add(this.scalerXYPlane);
	this.scalingUI.add(this.scalerXZPlane);
	this.scalingUI.add(this.scalerZYPlane);

	hideObjectHierarchy(this.scalingUI);

	this.translationXAxis = new THREE.Line(xAxisGeometry, greenLineMaterial);
	this.translationXAxis.newtonID = "translationXAxis";
	this.translationYAxis = new THREE.Line(yAxisGeometry, blueLineMaterial);
	this.translationYAxis.newtonID = "translationYAxis";
	this.translationZAxis = new THREE.Line(zAxisGeometry, redLineMaterial);
	this.translationZAxis.newtonID = "translationZAxis";

	this.translationXZPlane = new THREE.Mesh(new THREE.PlaneGeometry( 0.75, 0.75, 1, 1 ), greenTranslucentMaterial);
	this.translationXZPlane.newtonID = "translationXZPlane";
	this.translationXZPlane.applyMatrix(new THREE.Matrix4().makeRotationX( -Math.PI/2 ));
	this.translationXZPlane.position.z += 0.375;
	this.translationXZPlane.position.x += 0.375;

	this.translationXYPlane = new THREE.Mesh(new THREE.PlaneGeometry( 0.75, 0.75, 1, 1 ), blueTranslucentMaterial);
	this.translationXYPlane.newtonID = "translationXYPlane";
	this.translationXYPlane.position.x += 0.375;
	this.translationXYPlane.position.y += 0.375;

	this.translationZYPlane = new THREE.Mesh(new THREE.PlaneGeometry( 0.75, 0.75, 1, 1 ), redTranslucentMaterial);
	this.translationZYPlane,newtonID = "translationZYPlane";
	this.translationZYPlane.applyMatrix(new THREE.Matrix4().makeRotationY( Math.PI/2 ));
	this.translationZYPlane.position.z += 0.375;
	this.translationZYPlane.position.y += 0.375;

	this.translationXDongle = new THREE.Mesh(new THREE.CylinderGeometry(0.2,0,0.75,6,0, false), greenSolidMaterial);
	this.translationXDongle.applyMatrix( new THREE.Matrix4().makeRotationZ(Math.PI/2));
	this.translationXDongle.position.x += 1.875;
	this.translationXDongle.newtonID = "translationXDongle";
	this.translationYDongle = new THREE.Mesh(new THREE.CylinderGeometry(0.2,0,0.75,6,0, false), blueSolidMaterial);
	this.translationYDongle.applyMatrix( new THREE.Matrix4().makeRotationX(Math.PI));
	this.translationYDongle.position.y += 1.875;
	this.translationYDongle.newtonID = "translationYDongle";
	this.translationZDongle = new THREE.Mesh(new THREE.CylinderGeometry(0.2,0,0.75,6,0, false), redSolidMaterial);
	this.translationZDongle.applyMatrix( new THREE.Matrix4().makeRotationX(-Math.PI/2));
	this.translationZDongle.position.z += 1.875;
	this.translationZDongle.newtonID = "translationZDongle";

	this.translationUI.add(this.translationXAxis);
	this.translationUI.add(this.translationYAxis);
	this.translationUI.add(this.translationZAxis);
	this.translationUI.add(this.translationXDongle);
	this.translationUI.add(this.translationYDongle);
	this.translationUI.add(this.translationZDongle);
	this.translationUI.add(this.translationXZPlane);
	this.translationUI.add(this.translationXYPlane);
	this.translationUI.add(this.translationZYPlane);

	hideObjectHierarchy(this.translationUI);

	this.container.add(this.scalingUI);
	this.container.add(this.translationUI);
	this.container.add(this.rotationUI);

	Newton.threejs.scene.add(this.container);

}





























