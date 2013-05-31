/**
 Matrix4
 @class
 @constructor
 @param {Number[]} [values] 16-element Array
 @param {Matrix4} [matrix] matrix to copy
 @property {Vector3} x RowX
 @property {Vector3} y RowY
 @property {Vector3} z RowZ
 @property {Vector3} w RowW
 @property {Quaternion} rotation Rotation quaternion
*/
function Matrix4(){

	/**
	 Gets string representation of matrix.
	 @returns {String} a11 - a44
	*/
	this.toString = function(){
		//[native code]
	}

	/**
     Gets JSON representation of matrix.
     @returns {Array} [a11 - a44]
	*/
	this.toJSON = function(){
		//[native code]
	}

	/**
     Changes the matrix' structure to an indentity matrix.
	*/
	this.setIdentity = function(){
		//[native code]
	}

	/**
 	 Gets the inverse matrix.
 	 This method does not modify the matrix.
 	 @returns {Matrix4} Inverse matrix
	*/
	this.getInverse = function(){
		//[native code]
	}

	/**
	 Perfoms matrix mutiplication with another matrix and returns the result.
	 This method does not modify the matrix.
	 @param {Matrix4} matrix The matrix to multiply with
	 @returns {Matrix4} Result of multiplication
	*/
	this.getProduct = function(){
		//[native code]
	}

	/**
	 Rotates a vector using the matrix and returns the result.
	 This method does not modify the matrix or the vector.
	 @param {Vector3} vector The vector to rotate
	 @returns {Vector3} The rotated vector
	*/
	this.getRotated = function(){
		//[native code]
	}

	/**
	 Transfoms a vector using the matrix and returns the result.
	 This method does not modify the matrix or the vector.
	 @param {Vector3} vector The vector to transform
	 @returns {Vector3} The transformated vector
	*/
	this.getTransformed = function(){
		//[native code]
	}

	/**
	 Multiplies this matrix with another.
	 @param {Matrix4} matrix the matrix to multiply with
	*/
	this.mult = function(){
		//[native code]
	}

	/**
	 Scales the matrix using a vector.
	 @param {Vector3} vector The vector to scale with
	*/
	this.scale = function(){
		//[native code]
	}

	/**
 	 Changes the rotation of this matrix using a quaternion or a Vector3 and an angle.
 	 @param {Quaternion} [quaternion] The quaternion to perform the rotation with
 	 @param {Vector3} [vector] The vector to perform the rotation with, must be passed together with an angle
 	 @param {Number} [angle] The angle to be passed together with the vector
	*/
	this.rotate = function(){
		//[native code]
	}

	/**
     Translates the matrix using a Vector3.
     @param {Vector3} vector The Vector representing the translation
	*/
	this.translate = function(){
		//[native code]
	}


}