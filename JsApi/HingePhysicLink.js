/**
 HingePhysicLink
 @class Represents a hinge.
 @param {RigidObject} objectA The first object
 @param {RigidObject} objectB The second object
 @param {Matrix4} frameA A matrix as description of the axis of the hinge relative to objectA
 @param {Matrix4} frameB A matrix as description of the axis of the hinge relative to objectB
 @extends PhysicLink
 @property {Matrix4} frameA A matrix as description of the axis of the hinge relative to objectA
 @property {Matrix4} frameB A matrix as description of the axis of the hinge relative to objectB
 @property {Number} hingeAngle The current angle between both objects (measured relative to the initial position)
 @property {Number} angularLimitMin The minimal hingeAngle as a hard limit
 @property {Number} angularLimitMax The maximal hingeAngle as a hard limit
 @property {Boolean} angularMotorEnabled Activates the motor around the axis if set to true
 @property {Number} angularMotorVelocity The velocity of the motor around the axis
 @property {Number} angularMotorForce The maximal force of the motor around the axis
*/
function HingePhysicLink(){}