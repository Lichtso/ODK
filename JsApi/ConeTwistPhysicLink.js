/**
 ConeTwistPhysicLink
 @class Represents a three axis rotation constraint.
 @param {RigidObject} objectA The first object
 @param {RigidObject} objectB The second object
 @param {Matrix4} frameA A matrix as description of the axis of the joint relative to objectA
 @param {Matrix4} frameB A matrix as description of the axis of the joint relative to objectB
 @extends PhysicLink
 @property {Matrix4} frameA A matrix as description of the axis of the joint relative to objectA
 @property {Matrix4} frameB A matrix as description of the axis of the joint relative to objectB
 @property {Number} swingSpanA Defines the max angle on the X axis
 @property {Number} swingSpanB Defines the max angle on the Y axis
 @property {Number} twistSpan Defines the max angle on the Z axis
 @property {Number} twistAngle (READONLY) The current angle around the axis between both objects (measured relative to the initial position)
*/
function ConeTwistPhysicLink(){}