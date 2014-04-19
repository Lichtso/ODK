/**
 MatterObject
 @class Can't be constructed. Objects are created by loading containers.
 @extends PhysicObject
 @property {Number} integrity If the integrity drops below 0, the object will be deleted. 
 @property {Number} angularFriction Rolling friction
 @property {Number} linearFriction Sliding friction
 @property {Number} restitution Coefficient of restitution
*/
function MatterObject(){

	/**
	 Attachs a quadratic decal with 1 unit edge length.
	 @param {Number} life The lifetime of the decal in seconds
	 @param {Matrix4} transformation Where the decal is inserted (relative to this MatterObject)
	 @param {String} diffuse Path of the diffuse texture
	 @param {String} [heightmap] Path of the optional heightmap texture
	 @returns {Undefined}
	*/
	this.attachDecal = function(){
		//[native code]
	}

}