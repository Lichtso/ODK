/**
 CamObject
 @class Can't be constructed. Objects are created by loading containers.
 @extends BaseObject
 @property {Number} fov The camera's field of view in radians
 @property {Number} near The camera's near plane
 @property {Number} far The camera's far plane
 @property {Boolean} isMainCam Is this CamObject as the main camera
*/

function CamObject(){

	/**
	 Gets a ray pointing away from the camera beginning at a certain point on the screen.
	 The ray is represented as a hash map, containing two vectors, .origin and .direction. 
	 @param {Number} x The x value of the starting point
	 @param {Number} y The y value of the satrting point
	 @returns {Object} A hash map respresenting the ray
	*/
	this.getViewRay = function(){
		//[native code]
	}

}