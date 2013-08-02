/**
 RigidObject
 @class Can't be constructed. Objects are created by loading containers.
 @extends GraphicObject
 @property model {String} Path to the model file
 @property mass {Number} Mass in of this RigidObject in kg
 @property kinematic {Boolean} If set to true, this RigidObject will push others away without changing its own transformation.
 @property angularDamping {Number} Factor of damping applied to the rotation, from 0 (dampingless) to 1 (static)
 @property linearDamping {Number} Factor of damping applied to the translation, from 0 (dampingless) to 1 (static)
*/
function RigidObject(){

	/**
	 Can either set the angular velocity via a Vector3,
     or get the angular velocity as a cloned instance.
     @param {Vector3} [angularVelocity] The new angular velocity
     @returns {Vector3} The angular velocity of this object
	*/
	this.angularVelocity = function(){
		//[native code]
	}

	/**
	 Can either set the linear velocity via a Vector3,
     or get the linear velocity as a cloned instance.
     @param {Vector3} [linearVelocity] The new linear velocity
     @returns {Vector3} The linear velocity of this object
	*/
	this.linearVelocity = function(){
		//[native code]
	}

	/**
	 Can either set the angular factor via a Vector3,
     or get the angular factor as a cloned instance.
     @param {Vector3} [angularFactor] The new angular factor
     @returns {Vector3} The angular factor of this object
	*/
	this.angularFactor = function(){
		//[native code]
	}

	/**
	 Can either set the linear factor via a Vector3,
     or get the linear factor as a cloned instance.
     @param {Vector3} [linearFactor] The new linear factor
     @returns {Vector3} The linear factor of this object
	*/
	this.linearFactor = function(){
		//[native code]
	}

	/**
     Applies an impulse at a given point relative the the object's transformation.
     (Applies a linear and an angular impulse)
     @param {Vector3} impulse The impulse to be applied
     @param {Vector3} point The point where the impulse will be applied
	*/
	this.applyImpulseAtPoint = function(){
		//[native code]
	}

	/**
	 Applies an angular impulse at the center of mass.
	 @param {Vector3} angularImpulse The angular impulse to be applied
	*/
	this.applyAngularImpulse = function(){
		//[native code]
	}

	/**
	 Applies a linear impulse at the center of mass.
	 @param {Vector3} linearImpulse The linear impulse to be applied
	*/
	this.applyLinearImpulse = function(){
		//[native code]
	}

	/**
     Gets a child node of the object's skeleton by it's name.
     Returns undefined if the node is not found.
     Node names are separated by '/'.
     @param {String} name The node's name
     @returns {BoneObject} The node
	*/
	this.findBoneByPath = function(){
		//[native code]
	}

	/**
     Can either set the animation time (like a playhead) in seconds,
     or get the animation time.
     @param {Number} [animationTime] Time in seconds elapsed since the start point of the animation
     @returns {Number} The time in seconds elapsed since the start point of the animation
	*/
	this.textureAnimationTime = function(){
		//[native code]
	}


}