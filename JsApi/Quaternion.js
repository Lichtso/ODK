/**
 Quaternion
 @class
 @constructor
 @param {Quaternion} [quaternion] Quaternion to copy
 @param {Object} [map] Map with keys: "x", "y", "z" (for yaw, pitch, roll)
 @param {Number[]} [values] Array of values: [yaw, pitch, roll]
 @param {Number} [yaw] Must be passed together as yaw, pitch, roll
 @param {Number} [pitch] Must be passed together as yaw, pitch, roll
 @param {Number} [roll] Must be passed together as yaw, pitch, roll
 @param {Object} [map] Map with keys: "x", "y", "z", "w"
 @param {Number[]} [values] Array of values: [x, y, z, w]
 @param {Number} [x] Must be passed together as x, y, z, w
 @param {Number} [y] Must be passed together as x, y, z, w
 @param {Number} [z] Must be passed together as x, y, z, w
 @param {Number} [w] Must be passed together as x, y, z, w
 @param {Vector3} [vector] Must be passed together as vector, angle
 @param {Number} [angle] Must be passed together as vector, angle
 @property {Number} x X-Value
 @property {Number} y Y-Value
 @property {Number} z Z-Value
 @property {Number} w W-Value
*/
function Quaternion(){

	/**
	 Convertes Quaternion to a String
	 @returns {String} 'x y z w'
	*/
	this.toString = function(){
		//[native code]
	};

	/**
	 Convertes Vector3 to a Array
	 @returns {Array} [x, y, z, w]
	*/
	this.toJSON = function(){
		//[native code]
	};

	/**
	 Gets angle between Quaternion and another Quaternion,
	 or the angle of this Quaternion
	 This method does not modify the quaternions.
	 @param {Quaternion} [quaternion] The quaternion between which the angle is calculated
	 @returns {Number} The calculated angle 
	*/
	this.getAngle = function(){
		//[native code]
	};

	/**
	 Gets axis of quaternion
	 @returns {Vector3} Vector3 representation of axis
	*/
	this.getAxis = function(){
		//[native code]
	};

	/**
	 Gets inverse quaternion
	 @returns {Quaternion} Inverse Quaternion
	*/
	this.getInverse = function(){
		//[native code]
	}

	/**
	 Gets the sum of this quaternion and another.
	 This method does not modify the quaternions.
	 @param {Quaternion} quaternion The quaternion which is added
	 @returns {Quaternion} The resulting quaternion
	*/
	this.getSum = function(){
		//[native code]
	}

	/**
	 Gets the difference between this quaternion and another.
	 This method does not modify the quaternions.
	 @param {Quaternion} quaternion The quaternion which is subtracted
	 @returns {Quaternion} The resulting quaternion
	*/
	this.getDifference = function(){
		//[native cde]
	}

	/**
	 Multiplies quaternion with another quaternion or a scalar.
	 You have to pass at least one of those arguments, but you can't pass both.
	 This method does not modify the quaternion(s).
	 @param {Quaternion} [quaternion] The quaternion to multiply with
	 @param {Number} [scalar] The scalar to multiply with
	 @returns {Quaternion} The resulting quaternion
	*/
	this.getProduct = function(){
		//[native code]
	}

	/**
	 Gets dot product of this quaternion and another.
	 This method does not modify the quaternions.
	 @param {Quaternion} quaternion The quaternion needed to calculate the dot product
	 @returns {Number} The dot product
	*/
	this.getDotProduct = function(){
		//[native code]
	}

	/**
	 Gets the length of the quaternion.
	 This method does not modify the quaternions.
	 @returns {Number} Length of the quaternion
	*/
	this.getLength = function(){
		//[native code]
	}

	/**
	 Gets the normalized quaternion.
	 This method does not modify the quaternions.
	 @returns {Quaternion} The normalized quaternion
	*/
	this.getNormalized = function(){
		//[native code]
	}

	/**
	 Calculates the spherical linear interpolation between this and another Quaternion.
	 This method does not modify the quaternions.
	 @param {Quaternion} quaternion Quaternion to interpolate to
	 @param {Number} t Interpolation from 0.0 (only self) to 1.0 (only other)
	 @return {Quaternion}
	*/
	this.getInterpolation = function(){
		//[native code]
	}

 	/**
     Perfoms quaternion addition on this instance.
     @param {Quaternion} quaternion Quaternion to add
     @returns {Quaternion} its self as result
 	*/	
	this.add = function(){
		//[native code]
	}


	/**
     Perfoms quaternion subtraction on this instance.
     @param {Quaternion} quaternion Quaternion to subtract
     @returns {Quaternion} its self as result
	*/
	this.sub = function(){
		//[native code]
	}


	/**
     Perfoms quaternion multiplication on this instance.
     @param {Quaternion} quaternion Quaternion to muliply with
     @returns {Quaternion} its self as result
	*/
	this.mult = function(){
		//[native code]
	}

	/**
	 Inverts this instance.
	 @returns {Quaternion} its self as result
	*/
	this.invert = function(){
		//[native code]
	}

	/**
     Normalizes this instance.
     @returns {Quaternion} its self as result
	*/
	this.normalize = function(){
		//[native code]
	}

}




