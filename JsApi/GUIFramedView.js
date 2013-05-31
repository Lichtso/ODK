/**
 GUIFramedView
 @class
 @extends GUIView 
 @constructor
 @param {GUIView} parent The parent view (master view is GUIScreenView())
 @property {Number} innerShadow The size of the inner shadow
 @property {Number} cornerRadius The corner radius (for rounded corners)
*/
function GUIFramedView(){

	/**
     Can either set the color via a quaternion representing the colors,
     or get the colors as a cloned instance.
     @param {Quaternion} [color4] The colors as a quaternion (RGBA)
     @returns {Quaternion} A copy of the color quaternion
	*/
	this.topColor = function(){
		//[native code]
	} 

	/**
     Can either set the color via a quaternion representing the colors,
     or get the colors as a cloned instance.
     @param {Quaternion} [color4] The colors as a quaternion (RGBA)
     @returns {Quaternion} A copy of the color quaternion
	*/
	this.bottomColor = function(){
		//[native code]
	} 

	/**
     Can either set the color via a quaternion representing the colors,
     or get the colors as a cloned instance.
     @param {Quaternion} [color4] The colors as a quaternion (RGBA)
     @returns {Quaternion} A copy of the color quaternion
	*/
	this.borderColor = function(){
		//[native code]
	} 


}