/**
 HingePhysicLink
 @class Represents a hinge.
 @param {RigidObject} objectA The first object
 @param {RigidObject} objectB The second object
 @param {Matrix4} frameA A matrix containing a description of the axis of the hinge relative to objectA
 @param {Matrix4} frameB A matrix containing a description of the axis of the hinge relative to objectB
 @extends PhysicLink
 @property {Matrix4} frameA A matrix containing a description of the axis of the hinge relative to objectA
 @property {Matrix4} frameB A matrix containing a description of the axis of the hinge relative to objectB
 @property {Number} hingeAngle The current angle between both objects (measured relative to the initial position)
 @property {Number} angularLimitMin
 @property {Number} angularLimitMax
 @property {Boolean} angularMotorEnabled
*/
function HingePhysicLink(){}