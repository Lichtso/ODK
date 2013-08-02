/**
 GearPhysicLink
 @class Represents two gears. Doesn't fix the objects in place, you are free to place them wherever you want.
 @param {RigidObject} objectA The first object
 @param {RigidObject} objectB The second object
 @param {Vector3} axisA The axis the first object rotates around
 @param {Vector3} axisB The axis the second object rotates around
 @param {Number} ratio The ratio of the gears radii (objectA to objectB). 1 means that they rotate equally.
 @extends PhysicLink
 @property {Vector3} axisA The axis the first object rotates around
 @property {Vector3} axisB The axis the second object rotates around
 @property {Number} ratio The ratio of the gears radii (objectA to objectB). 1 means that they rotate equally.
*/
function GearPhysicLink(){}