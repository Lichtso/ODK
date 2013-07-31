/**
 LightObject
 @class Can't be constructed. Objects are created by loading containers.
 @extends PhysicObject
 @property {Number} range (READONLY) The range of the light source
 @property {String} collisionShape (Not accessible for light objects)
*/
function LightObject(){

	/**
	 Can either set the color via a quaternion representing the colors,
     or get the colors as a cloned instance.
     @param {Quaternion} [color4] The colors as a quaternion (RGBA)
     @returns {Quaternion} A copy of the color quaternion
	*/
	this.color = function(){
		//[native code]
	}

}