/**
 ParticlesObject
 @class Can't be constructed. Objects are created by loading containers.
 @extends PhysicObject
 @property {Integer} maxParticles (Readonly) The maximum number of particles
 @property {String} texture The filename of the used texture
 @property {Boolean} transformAligned Wether the particles are aligned towards the camera or towards their own transformation
 @property {Number} systemLife The lifetime of the particle system in seconds (or -1.0 for eternal life)
 @property {Number} lifeMin The minimum lifetime of a particle in seconds
 @property {Number} lifeMax The maximum lifetime of a particle in seconds
 @property {Number} sizeMin The minimum size of a particle
 @property {Number} sizeMax The maximum size of a particle
*/
function ParticlesObject(){

	/**
 	 Can set the global force (e.g. gravity) via a Vector3,
     or get the gloal force as a cloned instance.
     @param {Vector3} [force] The gloabl force to be applied
     @returns {Vector3} A clone of the system's global force
	*/
	this.force = function(){
		//[native code]
	}

	/**
	 Can set the minimum position via a Vector3,
     or get the minimum position as a cloned instance.
     The min. and max. position define a box in which the particles are spawned.
     @param {Vector3} [position] The minimum position
     @returns {Vector3} A clone of the system's minimum position
	*/
	this.posMin = function(){
		//[native code]
	}

	/**
	 Can set the maximum position via a Vector3,
     or get the maximum position as a cloned instance.
     The min. and max. position define a box in which the particles are spawned.
     @param {Vector3} [position] The maximum position
     @returns {Vector3} A clone of the system's maximum position
	*/
	this.posMax = function(){
		//[native code]
	}

	/**
	 Can set the minimum direction via a Vector3,
     or get the minimum direction as a cloned instance.
     The min. and max. direction define a vector space, the particles will be spawned
     with a constant velocity that is a member of this vector space.
     @param {Vector3} [direction] The minimum direction
     @returns {Vector3} A clone of the system's minimum direction
	*/
	this.dirMin = function(){
		//[native code]
	}

	/**
	 Can set the maximum direction via a Vector3,
     or get the maximum direction as a cloned instance.
     The min. and max. direction define a vector space, the particles will be spawned
     with a constant velocity that is a member of this vector space.
     @param {Vector3} [direction] The maximum direction
     @returns {Vector3} A clone of the system's maximum direction
	*/
	this.dirMax = function(){
		//[native code]
	}

}