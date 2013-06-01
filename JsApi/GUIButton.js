/**
 GUIButton
 @class
 @extends GUIFramedView 
 @constructor
 @param {GUIView} parent The parent view (master view is GUIScreenView())
 @property {String} sizeAlignment "none", "height", "width", "all"
 @property {Integer} paddingX Horizontal padding
 @property {Integer} paddingY Vertical padding
 @property {Boolean} enabled Wether the button is enabled for user input or not
 @property {String} state "released", "highlighted", "pressed"
 @property {String} type "normal", "delete", "add", "edit", "lockable"
 @property {Function} onclick Anonymous function that is called when this element is clicked
*/
function GUIButton(){};