var NewtonPhysicsCylinder = function(){
	
	this.id = null;
	this.size = new THREE.Vector3(1, 1, 1);

}

var NewtonPhysicsBox = function(){
	
	this.id = null;
	this.size = new THREE.Vector3(1, 1, 1);

}

var NewtonPhysicsSphere = function(){

	this.id = null;
	this.radius = 1;

}

var NewtonPhysicsCapsule = function(){
	
	this.id = null;
	this.radius = 1;
	this.length = 1;
	this.direction = 'x';

}

var NewtonPhysicsCone = function(){
	
	this.id = null;
	this.radius = 1;
	this.length = 1;
	this.direction = 'x';

}

var NewtonPhysicsSphereCompoundElement = function(){

	this.position = new THREE.Vector3();
	this.radius = 1;

}

var NewtonPhysicsSphereCompound = function(){

	this.id = null;
	this.elements = new Array();

}

var NewtonPhysicsCompoundElement = function(){

	this.transformation = {

		matrix: new THREE.Matrix4(1,0,0,0,
								  0,1,0,0,
								  0,0,1,0,
								  0,0,0,1)

	};

	this.collisionShape = null;

}

var NewtonPhysicsCompound = function(){

	this.id = null;
	this.elements = new Array();

}

var NewtonPhysicsVertexCloud = function(){

	this.id = null;
	this.data = new Array();
	this.vertexCount = 0;

}

var NewtonPhysicsStaticPlane = function(){

	this.id = null;
	this.data = new THREE.Vector3();
	this.distance = 0.0;

}




