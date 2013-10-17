/**
 TerrainObject
 @class Can't be constructed. Objects are created by loading containers.
 @extends MatterObject
 @property {Number} [] The heights of the cells serialized as 1D array (indexed property)
 @property width {Integer} The number of cells along the width axis
 @property length {Integer} The number of cells along the length axis
 @property bitDepth {Integer} The number of bits per height value
*/
function TerrainObject(){

	/**
	 Updates the terrain and uploads the new values to the GPU.
	 (Not resource friendly, handle with care! Only update when all operations are done!)
	*/
	this.updateModel = function(){
		//[native code]
	}

}