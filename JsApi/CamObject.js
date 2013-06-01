/**
 CamObject
 @class Can't be constructed. Objects are created by loading containers.
 @extends BaseObject
 @property {Number} fov The camera's field of view in radians
 @property {Number} near The camera's near plane
 @property {Number} far The camera's far plane
 @property {Number} width The camera's width (needed for aspect ratio or for orthogonal projection, set automatically)
 @property {Number} height The camera's height (needed for aspect ratio or for orthogonal projection, set automatically)
*/

function CamObject(){

	/**
	 Gets a ray pointing away from the camera beginning at a certain point on the screen.
	 The ray is represented as a hash, containing two vectors, .origin and .direction. 
	 @param {Number} x The x value of the starting point
	 @param {Number} y The y value of the satrting point
	 @returns {Object} A hash respresenting the ray
	*/
	this.getViewRay = function(){
		//[native code]
	}

	/**
	 Sets this CamObject as the main camera.
	 @returns {Undefined}
	*/
	this.setMainCam = function(){
		//[native code]
	}

}

/**
 Gets the current main camera.
 @function getMainCam
 @memberof CamObject
 @static
*/
function getMainCam(){}