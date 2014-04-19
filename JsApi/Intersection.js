/**
 Intersection
 @class Is part of the singleton Engine. Globally Accessible singleton, can't be instantiated.
*/
function Intersection(){

	/**
	 Tests all objects against a ray
	 @param {Vector3} origin A vector representing the origin of the ray
	 @param {Vector3} direction A vector representing the direction of the ray
	 @param {Integer} filterMask Default is 0xFFFF
	 @param {Boolean} nearest If true then only the first object in the direction of the ray will be returned
	 @return {Object} A hash map containing the objects that intersect with the ray, the hit points and hit normals
	*/
	this.rayCast = function(){
		//[native code]
	}

	/**
	 Tests all objects against a AABB
	 @param {Vector3} min The minimum position of the AABB
	 @param {Vector3} may The maximum position of the AABB
	 @param {Integer} filterMask Default is 0xFFFF
	 @return {BaseObject[]} A array containing the objects that intersect with the AABB
	*/
	this.aabbIntersection = function(){
		//[native code]
	}

	/**
	 Tests all objects against a sphere
	 @param {Vector3} center The center position of the sphere
	 @param {Number} radius The radius of the sphere
	 @param {Integer} filterMask Default is 0xFFFF
	 @return {BaseObject[]} A array containing the objects that intersect with the sphere
	*/
	this.sphereIntersection = function(){
		//[native code]
	}

}