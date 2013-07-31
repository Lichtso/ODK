/**
 TerrainObject
 @class Can't be constructed. Objects are created by loading containers.
 @extends GraphicObject
 @property width {Integer} The width of the terrain in units
 @property length {Integer} The length of the terrain in units
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

	//!!!

}