/**
 GUILabel
 @class A simple text label
 @extends GUIRect
 @constructor
 @param {GUIView} parent The parent view (master view is GUIScreenView())
 @property {String} sizeAlignment "left", "middle", "right"
 @property {String} textAlignment "left", "middle", "right"
 @property {String} text The text of the label
 @property {String} font The name of the used font
 @property {Integer} fontHeight The height of the used font
*/
function GUILabel(){

	/**
	 Can either set the color via a quaternion representing the colors,
     or get the colors as a cloned instance.
     @param {Quaternion} [color4] The colors as a quaternion (RGBA)
     @returns {Quaternion} A copy of the color quaternion
	*/
	this.color = function(){
		//[native code]
	}

} 