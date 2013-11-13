/**
 Quaternion
 @class
 @constructor
 @param {Number[]} [values] Array of values: x, y, z, w
 @param {Quaternion} [quaternion] Quaternion to copy
 @param {Vector3} [vector] Vector3, must be passed together with angle
 @param {Number} [angle] Angle to be passed together with Vector3
 @property {Number} 0|x X-Value
 @property {Number} 1|y Y-Value
 @property {Number} 2|z Z-Value
 @property {Number} 3|w W-Value
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
	 Sets the rotation via Vector3 and an angle.
	 @param {Vector3} axis The rotation axis
	 @param {Number} angle Angle
	*/
	this.setRotation = function(){
		//[native code]
	}

 	/**
     Perfoms quaternion addition on this instance.
     @param {Quaternion} quaternion Quaternion to add
 	*/	
	this.add = function(){
		//[native code]
	}


	/**
     Perfoms quaternion subtraction on this instance.
     @param {Quaternion} quaternion Quaternion to subtract
	*/
	this.sub = function(){
		//[native code]
	}


	/**
     Perfoms quaternion multiplication on this instance.
     @param {Quaternion} quaternion Quaternion to muliply with
	*/
	this.mult = function(){
		//[native code]
	}


	/**
     Normalizes this instance.
	*/
	this.normalize = function(){
		//[native code]
	}

}




