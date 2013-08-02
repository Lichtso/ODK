/**
 LightObject
 @class Can't be constructed. Objects are created by loading containers.
 @extends PhysicObject
 @property {Number} range (READONLY) The range of the light source
 @property {String} collisionShape (Not accessible for light objects)
*/
function LightObject(){

	/**
	 Can either set the color via a Vector3 representing the color,
     or get the color as a cloned instance.
     @param {Vector3} [color3] The color as Vector3 (RGB)
     @returns {Vector3} A copy of the color as Vector3
	*/
	this.color = function(){
		//[native code]
	}

}