/**
 PhysicObject
 @class Can't be constructed. Objects are created by loading containers.
 @extends BaseObject
 @property {String} collisionShape Name of the collision shape as declared in the collision shapes file
*/
function PhysicObject(){

	/**
	 Generates a hash containing information about the collision shape.
	 Contains the shape's type as well as type specific information as declared in
	 CollisionShapes.xsd.
	 @returns {Object} The shape's information as a hash
	*/
	this.collisionShapeInfo = function(){
		//[native code]
	}

}