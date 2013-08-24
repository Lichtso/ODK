/**
 PhysicLink
 @class Abstract class, can't be instantiated.
 @extends BaseLink
 @property {Number} burstImpulse The amount of force needed to destroy the link
 @property {Boolean} collisionDisabled Wether the linked object collide or not (Useful for arrows stuck in walls etc.)
 @property {Number} appliedForceObjectA The linear force applied on objectA
 @property {Number} appliedTorqueObjectA The angular force applied on objectA
 @property {Number} appliedForceObjectB The linear force applied on objectB
 @property {Number} appliedTorqueObjectB The angular force applied on objectB
*/
function PhysicLink(){}