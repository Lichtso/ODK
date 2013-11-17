/**
 BaseObject
 @class Can't be constructed. Objects are created by loading containers.
 @extends BaseClass
*/
function BaseObject(){

	/**
	 Can either set the transformation via a Matrix4,
     or get the transformation as a cloned instance of the object's transformation matrix.
     @param {Matrix4} [transformation] The transformation matrix
     @returns {Matrix4} A copy of the transformation matrix
	*/
	this.transformation = function(){
		//[native code]
	}

	/**
     Gets a link by it's index.
     @params {Integer} index The link's index
     @returns {BaseLink} The requested link
	*/
	this.getLink = function(){
		//[native code]
	}

	/**
     Gets the number of links for this object.
     @returns {Integer} Number of links
	*/
	this.getLinkCount = function(){
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

}