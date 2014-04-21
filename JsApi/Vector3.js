/**
 3D vector
 @class
 @constructor
 @param {Vector3} [vector] Vector3 to copy
 @param {Object} [map] Map with keys: "x", "y", "z"
 @param {Number[]} [values] Array of values: [x, y, z]
 @param {Number} [x] Must be passed together as x, y, z
 @param {Number} [y] Must be passed together as x, y, z
 @param {Number} [z] Must be passed together as x, y, z
 @property {Number} x X-Coord
 @property {Number} y Y-Coord
 @property {Number} z Z-Coord
*/
function Vector3() {

	/**
	 Convertes Vector3 to a String
	 @returns {String} 'x y z'
	*/
	this.toString = function() {
		//[native code]
	};

	/**
	 Convertes Vector3 to a Array
	 @returns {Array} [x, y, z]
	*/
	this.toJSON = function() {
		//[native code]
	};

	/**
	 Calculates the angle between this and another Vector3.
	 This method does not modify the vectors.
	 @param {Vector3} vec other Vector3
	 @returns {Number} radians
	*/
	this.getAngle = function() {
		//[native code]
	};

	/**
	 Calculates the sum of this and another Vector3.
	 This method does not modify the vectors.
	 @param {Vector3} vec other Vector3
	 @returns {Vector3}
	*/
	this.getSum = function() {
		//[native code]
	};

	/**
	 Calculates the difference between this and another Vector3.
	 This method does not modify the vectors.
	 @param {Vector3} vec other Vector3
	 @returns {Vector3}
	*/
	this.getDiff = function() {
		//[native code]
	};

	/**
	 Calculates the product of this and another Vector3 or a Number.
	 This method does not modify the vectors.
	 @param {Vector3|Number} factor factor
	 @returns {Vector3}
	*/
	this.getProduct = function() {
		//[native code]
	};

	/**
	 Calculates the quotient of this and another Vector3 or a Number.
	 This method does not modify the vectors.
	 @param {Vector3|Number} vec other Vector3
	 @returns {Vector3}
	*/
	this.getQuotient = function() {
		//[native code]
	};

	/**
	 Calculates the dot product of this and another Vector3.
	 This method does not modify the vectors.
	 @param {Vector3} vec other Vector3
	 @returns {Number}
	*/
	this.getDot = function() {
		//[native code]
	};

	/**
	 Calculates the cross product of this and another Vector3.
	 This method does not modify the vectors.
	 @param {Vector3} vec other Vector3
	 @returns {Vector3}
	*/
	this.getCross = function() {
		//[native code]
	};

	/**
	 Calculates the length of this Vector3.
	 This method does not modify the vector.
	 @returns {Number}
	*/
	this.getLength = function() {
		//[native code]
	};

	/**
	 Calculates the direction of this Vector3.
	 This method does not modify the vector.
	 @returns {Vector3}
	*/
	this.getNormalized = function() {
		//[native code]
	};

	/**
	 Calculates the linear interpolation between this and another Vector3.
	 This method does not modify the vectors.
	 @param {Vector3} vec Vector3 to interpolate to
	 @param {Number} t Interpolation from 0.0 (only self) to 1.0 (only other)
	 @returns {Vector3}
	*/
	this.getInterpolation = function() {
		//[native code]
	};

	/**
	 Adds another to this Vector3 and stores the result in this Vector3.
	 @param {Vector3} vec other Vector3
	 @returns {Vector3} its self as result
	*/
	this.add = function() {
		//[native code]
	};

	/**
	 Subtracts another from this Vector3 and stores the result in this Vector3.
	 @param {Vector3} vec other Vector3
	 @returns {Vector3} its self as result
	*/
	this.sub = function() {
		//[native code]
	};

	/**
	 Multiplies this Vector3 with another or a Number and stores the result in this Vector3.
	 @param {Vector3|Number} vec other Vector3
	 @returns {Vector3} its self as result
	*/
	this.mult = function() {
		//[native code]
	};

	/**
	 Divides this Vector3 by another or a Number and stores the result in this Vector3.
	 @param {Vector3|Number} vec other Vector3
	 @returns {Vector3} its self as result
	*/
	this.divide = function() {
		//[native code]
	};

	/**
	 Calculates the cross product of this and another Vector3 and stores the result in this Vector3.
	 @param {Vector3} vec other Vector3
	 @returns {Vector3} its self as result
	*/
	this.cross = function() {
		//[native code]
	};

	/**
	 Normalizes this Vector3.
	 @returns {Vector3} its self as result
	*/
	this.normalize = function() {
		//[native code]
	};

}