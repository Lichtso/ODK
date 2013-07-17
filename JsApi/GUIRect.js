/**
 GUIRect
 @class Prototype for all GUI elements, can't be constructed.
 @property {Integer} x Position x
 @property {Integer} y Position y
 @property {Integer} width Size along the x axis form the center to the border
 @property {Integer} height Size along the y axis form the center to the border
 @property {Boolean} visible Determines if element is visible
 @property {Boolean} focus Determines if element is focused
 @property {GUIRect} parent The parent element
*/
function GUIRect(){

	/**
	 Removes this element (and all of it's children).
	 @returns {undefined}
	*/
	this.remove = function(){
		//[native code]
	}

	/**
	 Updates this elements content, useful when the content is changed directly.
	*/
	this.updateContent = function(){
		//[native code]
	}

}