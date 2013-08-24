/**
 (READONLY) Seconds elapsed since the last game tick.
 @type Number
*/
var animationFactor = 0.0;

/**
 Path to the current loaded container (level).
 Can also be written to load another one
 @type String
*/
var levelID = '';

/**
 Loads a container and inserts its objects in the level.
 
 @param {Matrix4} transformation Where the container is inserted
 @param {String} path 'Container.xml'
 @return {Array} List of the loaded objects or null on failture
*/
function loadContainer(transformation, path) {
	//[native code]
}

/**
 Prints a message on the console and std::out.
 
 @param {Object} data to be printed
*/
function log(data) {
	//[native code]
}

/**
 Loads a module if necessary.
 
 @param {String} path '../Package/File.js' or 'File.js'
 @return {Object} The module
*/
function require(path) {
	//[native code]
}

/**
 Localizes a given string in the selected language.
 
 @param {String} key The key in the language table.
 @return {String} The localize value in the language table.
*/
function localizeString(key) {
	//[native code]
}

/**
 Saves the current loaded container (level), 
 localData and globalData are additional data, 
 you can also pass null if you don't want to store additional information.
 
 @param {String} localData Stores arbitrary data in the level file (can only access the loaded level).
 @param {String} globalData Stores arbitrary data globally, can be accesed from everywhere.
 @param {String} description Stores a human readable description of the save game, can be accesed from everywhere.
 @return {Boolean} Success
*/
function saveLevel(localData, globalData, description) {
	//[native code]
}