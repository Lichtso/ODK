var NewtonSoundObject = function(){

	this.transformation = {

		matrix: new THREE.Matrix4(1,0,0,0,
								  0,1,0,0,
								  0,0,1,0,
								  0,0,0,1)

	};

	this.script = {

		resource: null;

	};

	this.soundTrack = {

		resource: null

	};

	this.mode = 'looping'; //looping, hold, dispose
	this.volume = 100;
	this.isPlaying = 0;
	this.timeOffset = 0;

}