/**
 RigidObject
 @class Can't be constructed. Objects are created by loading containers.
 @extends GraphicObject
 @property model {String}
 @property mass {Number}
 @property kinematic {Boolean}
 @property angularDamping {Number}
 @property linearDamping {Number}
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
	 Can either set the transformation via a Matrix4,
     or get the transformation as a cloned instance.
     @param {Matrix4} [transformation] The new transformation
     @returns {Matrix4} The transformation of this object
	*/
	this.transformation = function(){
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
	 Applies an angular impulse.
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
     or get the animation time as a cloned instance.
     @param {Number} [animationTime] Time in seconds elapsed since the start point of the animation
     @returns {Number} The time in seconds elapsed since the start point of the animation
	*/
	this.textureAnimationTime = function(){
		//[native code]
	}


}