/**
 Dof6PhysicLink
 @class Represents a three axis linear and three axis angular constraint.
 @param {Matrix4} frameA A matrix as description of dof6 relative to objectA
 @param {Matrix4} frameB A matrix as description of dof6 relative to objectB
 @extends PhysicLink
*/
function Dof6PhysicLink(){

	/**
	 Can set the frameA via a Matrix4
     or get the frameA as a cloned instance.
     @param {Matrix4} [frameA] The new frameA matrix
     @returns {Matrix4} A copy of the frameA matrix
	*/
	this.frameA = function(){
		//[native code]
	}

	/**
	 Can set the frameB via a Matrix4
     or get the frameB as a cloned instance.
     @param {Matrix4} [frameB] The new frameB matrix
     @returns {Matrix4} A copy of the frameB matrix
	*/
	this.frameB = function(){
		//[native code]
	}

	/**
	 Can set the stiffness of a spring,
     or get the current value.
     A value below or equal to 0.0 deactivates the spring.
     @param {Integer} [index] The index of the spring
     @param {Number} [stiffness] The new stiffness
     @returns {Number} The stiffness
	*/
	this.springStiffness = function(){
		//[native code]
	}

	/**
	 Can set the damping of a spring,
     or get the current value.
     @param {Integer} [index] The index of the spring
     @param {Number} [damping] The new damping
     @returns {Number} The damping
	*/
	this.springDamping = function(){
		//[native code]
	}

	/**
	 Can set the equilibrium point of a spring,
     or get the current value.
     @param {Integer} [index] The index of the spring
     @param {Number} [equilibrium] The new equilibrium point
     @returns {Number} The equilibrium point
	*/
	this.springEquilibrium = function(){
		//[native code]
	}

	/**
	 Can enable or disable a motor.
	 @param {Integer} [index] The index of the motor
     @param {Boolean} [enabled]
     @returns {Boolean} Ture if the motor is enabled
	*/
	this.motorEnabled = function(){
		//[native code]
	}

	/**
	 Can set or get the velocity of a motor.
	 @param {Integer} [index] The index of the motor
     @param {Number} [velocity]
     @returns {Number} The velocity of the motor
	*/
	this.motorVelocity = function(){
		//[native code]
	}

	/**
	 Can set or get the force of a motor.
	 @param {Integer} [index] The index of the motor
     @param {Number} [force]
     @returns {Number} The force of the motor
	*/
	this.motorForce = function(){
		//[native code]
	}

	/**
	 Can set the lower angular limit via a Vector3
     or get the lower angular limit as a cloned instance.
     @param {Vector3} [frameA] The new lower angular limit
     @returns {Vector3} A copy of the lower angular limit
	*/
	this.angularLimitMin = function(){
		//[native code]
	}

	/**
	 Can set the upper angular limit via a Vector3
     or get the upper angular limit as a cloned instance.
     @param {Vector3} [frameA] The new upper angular limit
     @returns {Vector3} A copy of the upper angular limit
	*/
	this.angularLimitMax = function(){
		//[native code]
	}

	/**
	 Can set the lower linear limit via a Vector3
     or get the lower linear limit as a cloned instance.
     @param {Vector3} [frameA] The new lower linear limit
     @returns {Vector3} A copy of the lower linear limit
	*/
	this.linearLimitMin = function(){
		//[native code]
	}

	/**
	 Can set the upper linear limit via a Vector3
     or get the upper v limit as a cloned instance.
     @param {Vector3} [frameA] The new upper linear limit
     @returns {Vector3} A copy of the upper linear limit
	*/
	this.linearLimitMax = function(){
		//[native code]
	}


}