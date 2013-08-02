/**
 Animation
 @class Globally accessible singleton, does not need to be constructed.
*/
function Animation(){

	/**
	 Adds a set of frames to a objects animation track
	 @param (Object) object The object whichs property shall be animated
	 @param (String) property The name of the property to animate
	 @param (Boolean) looping If set to true, frames won't be removed but rotate in the queue
	 @param (Number[]) accelerations The acceleration value of each frame
	 @param (Number[]) durations The duration of each frame in seconds
	 @param (Value[]) values The value to be animated to in each frame
	*/
	this.addFrames = function(){
		//[native code]
	}

	/**
	 Removes a set of frames from a objects animation track
	 @param (Object) object The object of the animated property
	 @param (String) property The name of the animated property
	 @param (Integer) first The index of the first frame to be removed
	 @param (Integer) length The number of frames to be removed
	*/
	this.removeFrames = function(){
		//[native code]
	}

	/**
	 Generates a hash map containing information about a animation track.
	 Contains the animations time in seconds, if it is looping and the frames left to animate.
	 @param (Object) object The object of the animated property
	 @param (String) property The name of the animated property
	 @return (Object) The animation track's information as a hash map
	*/
	this.getTrackInfo = function(){
		//[native code]
	}

	/**
	 Starts a new timer which fires a callback function in the defined intervals.
	 The callback function must return true; to be called again, else the timer will stop.
	 It can also stop its self by calling stopTimer(this); while being fired.
	 @param (Function) callback This function will be called everytime the timer fires
	 @param (Number) time The length of the intervals in seconds
	 @return (Function) Returns the callback function as identifier for this timer
	*/
	this.startTimer = function(){
		//[native code]
	}

	/**
	 Stops a existing timer returned by startTimer().
	 @param (Function) callback The callback function as identifier for the timer
	 @return (Boolean) Returns true on success or false if the timer was not found
	*/
	this.stopTimer = function(){
		//[native code]
	}

}