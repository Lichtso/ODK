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
     Removes a link by it's index.
     @param {Integer} index The link's index
     @returns {Boolean} success True if the link was removed successfully
	*/
	this.removeLink = function(){
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
	 Returns the link to this object's parent (if any)
	 @returns {BaseLink} Link to the parent or undefined, if object has no parent
	*/
	this.getParentLink = function(){
		//[native code]
	}

}