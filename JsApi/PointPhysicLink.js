/**
 PointPhysicLink
 @class Represents a ball joint.
 @param {RigidObject} objectA The first object
 @param {RigidObject} objectB The second object
 @param {Vector3} pointA The point relative to the first object, where the ball joint is placed
 @param {Vector3} PointB The point relative to the second object, where the ball joint is placed
 @extends PhysicLink
*/
function PointPhysicLink(){

	/**
	 Can set the pointA via a Vector3,
     or get the pointA as a cloned instance.
     @param {Matrix4} [pointA] The new pointA vector
     @returns {Matrix4} A copy of the pointA vector
	*/
	this.pointA = function(){
		//[native code]
	}

	/**
	 Can set the pointB via a Vector3,
     or get the pointB as a cloned instance.
     @param {Matrix4} [pointB] The new pointB vector
     @returns {Matrix4} A copy of the pointB vector
	*/
	this.pointB = function(){
		//[native code]
	}
	
}