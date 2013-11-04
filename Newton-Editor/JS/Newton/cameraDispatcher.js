var NewtonCameraDispatcher = function(){
	
	this.dispatchCamera = function(){

		var cam = new NewtonCameraObject();
		cam.identifier = Newton.nextId();
		cam.mesh.NewtonID = cam.identifier;
		cam.mesh.name = "camera";
		Newton.objects.push(cam);
		Newton.updateOutlineView();
		return cam.identifier;

	}

}