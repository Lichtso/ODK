var Newton = {};
	
// Namespaces
Newton.threejs = {};
Newton.DOMRefs = {};

Newton.objectTemplates = new Array();
Newton.containerTemplates = new Array(); 

Newton.objects = new Array();
Newton.lights = new Array();
Newton.UIElements = new Array();
Newton.animations = new Array();

Newton.currentTool = undefined;
Newton.selectedObject = undefined;

Newton.nextId = 0;


Newton.init = function(){

	this.getDOMRefs();
	this.initThree();
	this.initKeys();
	this.initUI();
	this.initAnimation(); 

}

Newton.getDOMRefs = function(){

	this.DOMRefs.canvas = document.getElementById("mainCanvas");
	this.DOMRefs.logConsole = document.getElementById("console");
	this.DOMRefs.toolbox = document.getElementById("toolbox"); 

}

Newton.initThree = function(){

	this.colladaUploadHelper = new colladaUploadHelper();
	this.threejs.renderer = new THREE.WebGLRenderer();
	this.threejs.projector = new THREE.Projector();
	this.threejs.camera = new THREE.PerspectiveCamera(
														prefs.camViewAngle,
														prefs.camAspect,
														prefs.camNear,
														prefs.camFar
													)
	this.threejs.camera.eulerOrder = 'ZYX';
	this.threejs.scene = new THREE.Scene();
	this.threejs.scene.add(this.threejs.camera);
	this.threejs.camera.useTarget = false;
	this.threejs.camera.position.z = 10;
	this.threejs.camera.position.y = 6;
	this.threejs.camera.rotation.x -= Math.PI/8;
	this.threejs.renderer.setSize(prefs.sceneWidth, prefs.sceneHeight);
	this.threejs.renderer.shadowMapEnabled = true;
	this.threejs.renderer.setClearColorHex( 0x848484, 1 );
	this.DOMRefs.canvas.appendChild(this.threejs.renderer.domElement);

}

Newton.initKeys = function(){

	this.canvasContext = new KEYS.Context({});
	this.canvasContext.attach("mainCanvas");
	this.canvasContext.add(new KEYS.KeyBinding({
		keys:[87,65,83,68],
		receiver: new camTranslation(), 
		id:"translation"
	}));

	this.canvasContext.add(new KEYS.KeyBinding({
		keys:[2],
		receiver: new camRotation(), 
		id:"rotation"
	}));
	this.canvasContext.add(new KEYS.KeyBinding({
		keys:[3],
		receiver: new objectPicker(), 
		id:"picker"
	}));
	/*this.canvasContext.add(new KEYS.KeyBinding({
		keys:[1],
		receiver: mainTool, 
		id:"tool",
		preventDefault: false
	}));*/

}

Newton.initUI = function(){

	var size = 100, step = 1;
	var zeroPlane = new NewtonUIElement();
	var geometry = new THREE.Geometry();
	var material = new THREE.LineBasicMaterial( { color: 0xBDBDBD, opacity: 1 } );

	for ( var i = - size; i <= size; i += step ) {

	    geometry.vertices.push( new THREE.Vector3( - size, 0, i ) );
	    geometry.vertices.push( new THREE.Vector3(   size, 0, i ) );

	    geometry.vertices.push( new THREE.Vector3( i, 0, - size ) );
	    geometry.vertices.push( new THREE.Vector3( i, 0,   size ) );

	}

	zeroPlane.identifier = "zeroPlane";
	zeroPlane.mesh = new THREE.Line( geometry, material, THREE.LinePieces );

	this.UIElements.push(zeroPlane);
	this.threejs.scene.add(zeroPlane.mesh);

	// Axes 

	var xAxis = new NewtonUIElement();
	var yAxis = new NewtonUIElement();
	var zAxis = new NewtonUIElement();

	var red = new THREE.LineBasicMaterial({color: 0xff0000,linewidth: 2, opacity: 0.5});
	var green = new THREE.LineBasicMaterial({color: 0x00ff00,linewidth: 2, opacity: 0.5});
	var blue = new THREE.LineBasicMaterial({color: 0x0000ff,linewidth: 2, opacity: 0.5});

	var geometry_x = new THREE.Geometry();
	geometry_x.vertices.push(new THREE.Vector3(-100, 0, 0));
	geometry_x.vertices.push(new THREE.Vector3(100, 0, 0));

	var geometry_y = new THREE.Geometry();
	geometry_y.vertices.push(new THREE.Vector3(0, -100, 0));
	geometry_y.vertices.push(new THREE.Vector3(0, 100, 0));

	var geometry_z = new THREE.Geometry();
	geometry_z.vertices.push(new THREE.Vector3(0, 0, -100));
	geometry_z.vertices.push(new THREE.Vector3(0, 0, 100));

	xAxis.mesh = new THREE.Line(geometry_x, green);
	yAxis.mesh = new THREE.Line(geometry_y, blue);
	zAxis.mesh = new THREE.Line(geometry_z, red);

	xAxis.identifier = "xAxis";
	yAxis.identifier = "yAxis";
	zAxis.identifier = "zAxis";

	this.UIElements.push(xAxis);
	this.UIElements.push(yAxis);
	this.UIElements.push(zAxis);

	this.threejs.scene.add(xAxis.mesh);
	this.threejs.scene.add(yAxis.mesh);
	this.threejs.scene.add(zAxis.mesh);

}

Newton.initAnimation = function(){

	this.animations['camera'] = new NewtonAnimatedTranslation(this.threejs.camera, 10);

}

Newton.renderFrame = function(){

	for (var i in this.animations) {
		this.animations[i].tick();
	}
	this.threejs.renderer.render(this.threejs.scene, this.threejs.camera);

}

Newton.start = function(){

	this.init();
	checkBrowserRequirements();
	this.renderFrame();
	this.resizeCanvasToDiv();
	animate();
	this.log("Newton has started.");
	this.debug();

}

Newton.debug = function(){

	//this.test = new NewtonDirectionalLight();
	this.test = new NewtonSpotLight();
	//this.test = new NewtonPositionalLight();
	//test.mesh.position.y = 5;
	//Newton.threejs.scene.add(this.test.mesh);
	this.test.setCutoff(Math.PI/8);
	this.test.setRange(40);
	this.test.setColor(0.02, 0.45, 0.48);
	this.test.setTransform( new THREE.Matrix4().makeRotationX( -Math.PI/5 ) );
	//this.test.setTransform( new THREE.Matrix4().makeTranslation( 4, 0, 0 ) );
	//this.test.setOmniDirectional(false);
	//this.test.setBounds(new THREE.Vector3(3,3,3));
	this.test.hideUI();
	this.test.showUI();

	var lol = new THREE.Mesh(new THREE.SphereGeometry(1,6,6), new THREE.MeshLambertMaterial({color:'white'}));
	lol.position.y = -10;
	lol.position.z = 10;
	//lol.receiveShadow = true;
	Newton.threejs.scene.add(lol);

}
