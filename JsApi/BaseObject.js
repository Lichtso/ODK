/**
 BaseObject
 @class Can't be constructed. Objects are created by loading containers.
 @extends BaseClass
 @property {Integer} linkCount Gets the number of connected links
*/
function BaseObject(){

	/**
	 Can set the transformation via a Matrix4,
     or get the transformation as a cloned instance.
     @param {Matrix4} [transformation] The transformation matrix
     @returns {Matrix4} A copy of the transformation matrix
	*/
	this.transformation = function(){
		//[native code]
	}

	/**
	 Returns the TransformLink to this object's parent (if any)
	 @returns {TransformLink} Link to the parent or undefined, if object has no parent
	*/
	this.getTransformUpLink = function(){
		//[native code]
	}

	/**
	 Returns the BoneLink to this object's parent (if any)
	 @returns {BoneLink} Link to the parent or undefined, if object has no parent
	*/
	this.getBoneUpLink = function(){
		//[native code]
	}

	/**
	 Iterates the connected BaseLinks.
     @param {Function} [callback] Callback function called for each link
	*/
	this.iterateLinks = function(){
		//[native code]
	}

}