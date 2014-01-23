/**
 GearPhysicLink
 @class Represents two gears. Doesn't fix the objects in place, you are free to place them wherever you want.
 @param {RigidObject} objectA The first object
 @param {RigidObject} objectB The second object
 @param {Vector3} axisA The axis the first object rotates around
 @param {Vector3} axisB The axis the second object rotates around
 @param {Number} ratio The ratio of the gears radii (objectA to objectB). 1 means that they rotate equally.
 @extends PhysicLink
 @property {Number} ratio The ratio of the gears radii (objectA to objectB). 1 means that they rotate equally.
*/
function GearPhysicLink(){

	/**
	 Can set the axisA via a Vector3,
     or get the axisA as a cloned instance.
     @param {Matrix4} [axisA] The new axisA vector
     @returns {Matrix4} A copy of the axisA vector
	*/
	this.axisA = function(){
		//[native code]
	}

	/**
	 Can set the axisB via a Vector3,
     or get the axisB as a cloned instance.
     @param {Matrix4} [axisB] The new axisB vector
     @returns {Matrix4} A copy of the axisB vector
	*/
	this.axisB = function(){
		//[native code]
	}
	
}