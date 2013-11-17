/**
 BoneLink
 @class Links the skeletal animation of one parent objects model to the child objects.
 @extends BaseLink
 @property {String} bone The name of the bone in the COLLADA file
*/
function BoneLink(){

	/**
	 Gets the bones children
	 @retrun {String[]} A list of the bones children names
	*/
	this.getBoneChildren = function(){
		//[native code]
	}

	/**
	 Gets the bones relative matrix.
     @returns {Matrix4} A copy of the relative matrix
	*/
	this.getRelativeMat = function(){
		//[native code]
	}

	/**
	 Gets the bones absolute matrix.
     @returns {Matrix4} A copy of the absolute matrix
	*/
	this.getAbsoluteMat = function(){
		//[native code]
	}

}