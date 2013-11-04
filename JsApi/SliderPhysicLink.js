/**
 SliderPhysicLink
 @class Represents a alider. 
 @param {RigidObject} objectA The first object
 @param {RigidObject} objectB The second object
 @param {Matrix4} frameA A matrix as description of the axis of the slider relative to objectA
 @param {Matrix4} frameB A matrix as description of the axis of the slider relative to objectB
 @extends PhysicLink
 @property {Matrix4} frameA A matrix as description of the axis of the slider relative to objectA
 @property {Matrix4} frameB A matrix as description of the axis of the slider relative to objectB
 @property {Number} hingeAngle (READONLY) The current angle between both objects (measured relative to the initial position)
 @property {Number} sliderPos (READONLY) The current position of the slider (measured relative to the initial position)
 @property {Number} angularLimitMin The minimal hingeAngle as a hard limit
 @property {Number} angularLimitMax The maximal hingeAngle as a hard limit
 @property {Boolean} angularMotorEnabled Activates the motor around the axis if set to true
 @property {Number} angularMotorVelocity The velocity of the motor around the axis
 @property {Number} angularMotorForce The maximal force of the motor around the axis
 @property {Number} linearLimitMin The minimal sliderPos as a hard limit
 @property {Number} linearLimitMax The maximal sliderPos as a hard limit
 @property {Boolean} linearMotorEnabled Activates the motor along the axis if set to true
 @property {Number} linearMotorVelocity The velocity of the motor along the axis
 @property {Number} linearMotorForce The maximal force of the motor along the axis
*/
function SliderPhysicLink(){}