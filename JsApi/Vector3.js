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
	 @return {String} 'x y z'
	*/
	this.toString = function() {
		//[native code]
	};

	/**
	 Convertes Vector3 to a Array
	 @return {Array} [x, y, z]
	*/
	this.toJSON = function() {
		//[native code]
	};

	/**
	 Calculates the angle between this and another Vector3.
	 This method does not modify the vectors.
	 @param {Vector3} vec
	 @return {Number} radians
	*/
	this.getAngle = function(vec) {
		//[native code]
	};

	/**
	 Calculates the sum of this and another Vector3.
	 This method does not modify the vectors.
	 @param {Vector3} vec
	 @return {Vector3}
	*/
	this.getSum = function(vec) {
		//[native code]
	};

	/**
	 Calculates the difference between this and another Vector3.
	 This method does not modify the vectors.
	 @param {Vector3} vec
	 @return {Vector3}
	*/
	this.getDiff = function(vec) {
		//[native code]
	};

	/**
	 Calculates the product of this and another Vector3 or a Number.
	 This method does not modify the vectors.
	 @param {Vector3|Number} vec
	 @return {Vector3}
	*/
	this.getProduct = function(vec) {
		//[native code]
	};

	/**
	 Calculates the quotient of this and another Vector3 or a Number.
	 This method does not modify the vectors.
	 @param {Vector3|Number} vec
	 @return {Vector3}
	*/
	this.getQuotient = function(vec) {
		//[native code]
	};

	/**
	 Calculates the dot product of this and another Vector3.
	 This method does not modify the vectors.
	 @param {Vector3} vec
	 @return {Number}
	*/
	this.getDot = function(vec) {
		//[native code]
	};

	/**
	 Calculates the cross product of this and another Vector3.
	 This method does not modify the vectors.
	 @param {Vector3} vec
	 @return {Vector3}
	*/
	this.getCross = function(vec) {
		//[native code]
	};

	/**
	 Calculates the length of this Vector3.
	 This method does not modify the vector.
	 @return {Number}
	*/
	this.getLength = function() {
		//[native code]
	};

	/**
	 Calculates the direction of this Vector3.
	 This method does not modify the vector.
	 @return {Vector3}
	*/
	this.getNormalized = function() {
		//[native code]
	};

	/**
	 Calculates the linear interpolation between this and another Vector3.
	 This method does not modify the vectors.
	 @param {Vector3} vec Vector3 to interpolate to
	 @param {Number} t Interpolation from 0.0 (only self) to 1.0 (only other)
	 @return {Vector3}
	*/
	this.getInterpolation = function(vec, t) {
		//[native code]
	};

	/**
	 Adds another to this Vector3 and stores the result in this Vector3.
	 @param {Vector3} vec
	 @returns {Vector3} its self as result
	*/
	this.add = function(vec) {
		//[native code]
	};

	/**
	 Subtracts another from this Vector3 and stores the result in this Vector3.
	 @param {Vector3} vec
	 @returns {Vector3} its self as result
	*/
	this.sub = function(vec) {
		//[native code]
	};

	/**
	 Multiplies this Vector3 with another or a Number and stores the result in this Vector3.
	 @param {Vector3|Number} vec
	 @returns {Vector3} its self as result
	*/
	this.mult = function(vec) {
		//[native code]
	};

	/**
	 Divides this Vector3 by another or a Number and stores the result in this Vector3.
	 @param {Vector3|Number} vec
	 @returns {Vector3} its self as result
	*/
	this.divide = function(vec) {
		//[native code]
	};

	/**
	 Calculates the cross product of this and another Vector3 and stores the result in this Vector3.
	 @param {Vector3} vec
	 @returns {Vector3} its self as result
	*/
	this.cross = function(vec) {
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