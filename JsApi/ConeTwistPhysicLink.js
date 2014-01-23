/**
 ConeTwistPhysicLink
 @class Represents a three axis rotation constraint.
 @param {RigidObject} objectA The first object
 @param {RigidObject} objectB The second object
 @param {Matrix4} frameA A matrix as description of the axis of the joint relative to objectA
 @param {Matrix4} frameB A matrix as description of the axis of the joint relative to objectB
 @extends PhysicLink
 @property {Number} swingSpanA Defines the max angle on the X axis
 @property {Number} swingSpanB Defines the max angle on the Y axis
 @property {Number} twistSpan Defines the max angle on the Z axis
 @property {Number} twistAngle (READONLY) The current angle around the axis between both objects (measured relative to the initial position)
*/
function ConeTwistPhysicLink(){

	/**
	 Can set the frameA via a Matrix4,
     or get the frameA as a cloned instance.
     @param {Matrix4} [frameA] The new frameA matrix
     @returns {Matrix4} A copy of the frameA matrix
	*/
	this.frameA = function(){
		//[native code]
	}

	/**
	 Can set the frameB via a Matrix4,
     or get the frameB as a cloned instance.
     @param {Matrix4} [frameB] The new frameB matrix
     @returns {Matrix4} A copy of the frameB matrix
	*/
	this.frameB = function(){
		//[native code]
	}
	
}