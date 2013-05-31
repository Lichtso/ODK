/**
 GUIRect
 @class Prototype for all GUI elements, can't be constructed.
 @property {Number} x Position x
 @property {Number} y Position y
 @property {Number} width Self explaining, isn't it?
 @property {Number} height See above
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
	 Moves this element (and all it's children) to another parent.
	 @returns {undefined}
	*/
	this.moveToParent = function(){
		//[native code]
	}

	/**
	 Updates tis elements content, useful when the content is changed directly.
	*/
	this.updateContent = function(){
		//[native code]
	}


}