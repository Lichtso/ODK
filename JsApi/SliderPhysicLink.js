/**
 SliderPhysicLink
 @class Represents a slider. 
 @param {RigidObject} objectA The first object
 @param {RigidObject} objectB The second object
 @param {Matrix4} frameA A matrix as description of the axis of the slider relative to objectA
 @param {Matrix4} frameB A matrix as description of the axis of the slider relative to objectB
 @extends PhysicLink
 @property {Number} hingeAngle (READONLY) The current angle between both objects (measured relative to the initial position)
 @property {Number} sliderPos (READONLY) The current position of the slider (measured relative to the initial position)
 @property {Number} angularLimitMin The minimal hingeAngle as a hard limit
 @property {Number} angularLimitMax The maximal hingeAngle as a hard limit
 @property {Boolean} angularMotorEnabled Activates the motor around the axis if set to true
 @property {Number} angularMotorVelocity The velocity of the motor around the axis
 @property {Number} angularMotorForce The maximal force of the motor around the axis
 @property {Number} linearLimitMin The minimal sliderPos as a hard limit
 @property {Number} linearLimitMax The maximal sliderPos as a hard limit
 @property {Boolean} linearMotorEnabled Activates the motor along the axis if set to true
 @property {Number} linearMotorVelocity The velocity of the motor along the axis
 @property {Number} linearMotorForce The maximal force of the motor along the axis
*/
function SliderPhysicLink(){

	/**
	 Can set the frameA via a Matrix4,
     or get the frameA as a cloned instance of the links's frameA matrix.
     @param {Matrix4} [frameA] The new frameA matrix
     @returns {Matrix4} A copy of the frameA matrix
	*/
	this.frameA = function(){
		//[native code]
	}

	/**
	 Can set the frameB via a Matrix4,
     or get the frameB as a cloned instance of the links's frameB matrix.
     @param {Matrix4} [frameB] The new frameB matrix
     @returns {Matrix4} A copy of the frameB matrix
	*/
	this.frameB = function(){
		//[native code]
	}
	
}