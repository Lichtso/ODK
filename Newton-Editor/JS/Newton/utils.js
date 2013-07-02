function animate() {
	
	// note: three.js includes requestAnimationFrame shim
	requestAnimationFrame(animate);
	Newton.renderFrame();

}

function hideObjectHierarchy(object){

	object.traverse(function ( child ) { if(child)child.visible = false; } );

}

function showObjectHierarchy(object){

	object.traverse(function ( child ) { if(child)child.visible = true; } );
}

function checkBrowserRequirements(){

	Newton.log("Checking browser requirements...");
	// File API
	if (window.File && window.FileReader && window.FileList && window.Blob) {
	  Newton.log("[ OK ] - File API");
	} else {
	  Newton.log("[ FAILED ] - File API");
	}


	if(window.WebGLRenderingContext){
		Newton.log("[ OK ] - webGL");
	}else{
		Newton.log("[ FAILED ] - webGL");
	}

}
 
function rotateAroundWorldAxis(object, axis, radians) {
    rotWorldMatrix = new THREE.Matrix4();
    rotWorldMatrix.makeRotationAxis(axis.normalize(), radians);
    rotWorldMatrix = rotWorldMatrix.multiply(object.matrix);        // pre-multiply
    object.matrix = rotWorldMatrix;
    object.rotation.setEulerFromRotationMatrix(object.matrix);

}

function rotateVectorAroundAxis(vector, axis, radians) {
	var matrix = new THREE.Matrix4().makeRotationAxis( axis, radians );
	vector.applyProjection( matrix );

}

function vectorToString(vector){
	var retval = "[ "
	retval += vector.x.toString() + " | ";
	retval += vector.y.toString() + " | ";
	retval += vector.z.toString()+ " ] ";
	return retval;

}

function getLongestElementOfVector(vector){

	if((vector.x > vector.y)&&(vector.x > vector.z))return vector.x;
	if((vector.y > vector.x)&&(vector.y > vector.z))return vector.y;
	else return vector.z;

}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}