/**
 Matrix4
 @class
 @constructor
 @param {Number[]} [values] 16-element Array
 @param {Matrix4} [matrix] matrix to copy
*/
function Matrix4(){

	/**
 	 Can set x via a Vector3,
     or get x as a cloned instance.
     @param {Vector3} [x] The x vector
     @returns {Vector3} A clone of x vector
	*/
	this.x = function(){
		//[native code]
	}

	/**
 	 Can set y via a Vector3,
     or get y as a cloned instance.
     @param {Vector3} [y] The y vector
     @returns {Vector3} A clone of y vector
	*/
	this.y = function(){
		//[native code]
	}

	/**
 	 Can set z via a Vector3,
     or get z as a cloned instance.
     @param {Vector3} [z] The z vector
     @returns {Vector3} A clone of z vector
	*/
	this.z = function(){
		//[native code]
	}

	/**
 	 Can set w via a Vector3,
     or get w as a cloned instance.
     @param {Vector3} [w] The w vector
     @returns {Vector3} A clone of w vector
	*/
	this.w = function(){
		//[native code]
	}

	/**
 	 Can set the rotation via a Quaternion,
     or get the rotation as a cloned instance.
     @param {Quaternion} [w] The rotation quaternion
     @returns {Quaternion} A clone of the rotation quaternion
	*/
	this.rotation = function(){
		//[native code]
	}

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