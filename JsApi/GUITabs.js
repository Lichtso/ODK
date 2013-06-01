/**
 GUITabs
 @class
 @extends GUIView
 @constructor
 @param {GUIView} parent The parent view (master view is GUIScreenView())
 @property {String} sizeAlignment "none", "height", "width", "all"
 @property {String} orientation "left", "bottom", "right", "top", "vertical", "horizontal"
 @property {Integer} selected Index of selected child view
 @property {Boolean} deactivatable Determines if it is possible to not have any tab selected
 @property {Function} onchange Anonymous function that is called when the active tab is changed
*/
function GUITabs(){};