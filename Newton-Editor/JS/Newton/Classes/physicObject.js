var NewtonPhysicObject = function(){

	this.transformation = {

		matrix: new THREE.Matrix4(1,0,0,0,
								  0,1,0,0,
								  0,0,1,0,
								  0,0,0,1)

	};

	this.script = {

		resource: null

	};

	this.physicsBody = {

		id: null

	};

	this.isParameterGUIShown = false;

	this.showParameterGUI = function(id){

		var container = document.createElement("div");

		var transformationHeader = document.createElement("h4");
		var transformationHeaderText = document.createTextNode("Transformation");
		transformationHeader.appendChild(transformationHeaderText);
		container.appendChild(transformationHeader);

		var matrixInputDesc = document.createElement("p");
		var matrixInputDescText = document.createTextNode("Matrix:");
		matrixInputDesc.appendChild(matrixInputDescText);
		container.appendChild(matrixInputDesc);
		var matrixInput = document.createElement("input");
		matrixInput.type = "text";
		matrixInput.id = "matrixInput";
		matrixInput.newtonObject = this;
		matrixInput.onkeyup = function(e){
			e.preventDefault();
			if(e.which != 13)return;
			try{
				var vals = e.target.value.split(",");
				for(var i=0; i<16; i++){
					e.target.newtonObject.transformation.matrix.elements[i] = +vals[i];
					e.target.newtonObject.updateParameterGUI();
				} 
			}catch(e){
				e.target.newtonObject.updateParameterGUI();
			}
		}
		container.appendChild(matrixInput);

		var translationInputDesc = document.createElement("p");
		var translationInputDescText = document.createTextNode("Translation:");
		translationInputDesc.appendChild(translationInputDescText);
		container.appendChild(translationInputDesc);
		var translationInput = document.createElement("input");
		translationInput.type = "text";
		translationInput.id = "translationInput";
		translationInput.newtonObject = this;
		translationInput.onkeyup = function(e){
			e.preventDefault();
			if(e.which != 13)return;
			try{
				var vals = e.target.value.split(",");
				e.target.newtonObject.transformation.matrix.setPosition({x:+vals[0], y:+vals[1], z:+vals[2]});
				e.target.newtonObject.updateParameterGUI();
			}catch(e){
				e.target.newtonObject.updateParameterGUI();
			}
		}
		container.appendChild(translationInput);

		var rotationInputDesc = document.createElement("p");
		var rotationInputDescText = document.createTextNode("Rotation:");
		rotationInputDesc.appendChild(rotationInputDescText);
		container.appendChild(rotationInputDesc);
		var rotationInput = document.createElement("input");
		rotationInput.type = "text";
		rotationInput.id = "rotationInput";
		rotationInput.newtonObject = this;
		rotationInput.onkeyup = function(e){
			e.preventDefault();
			if(e.which != 13)return;
			try{
				var vals = e.target.value.split(",");
				e.target.newtonObject.transformation.matrix.setRotationFromQuaternion({x:+vals[0], y:+vals[1], z:+vals[2], w:+vals[3]});
				e.target.newtonObject.updateParameterGUI();
			}catch(e){
				e.target.newtonObject.updateParameterGUI();
			}
		}
		container.appendChild(rotationInput);
		
		var scaleInputDesc = document.createElement("p");
		var scaleInputDescText = document.createTextNode("Scale:");
		scaleInputDesc.appendChild(scaleInputDescText);
		container.appendChild(scaleInputDesc);
		var scaleInput = document.createElement("input");
		scaleInput.type = "text";
		scaleInput.id = "scaleInput";
		scaleInput.newtonObject = this;
		scaleInput.onkeyup = function(e){
			e.preventDefault();
			if(e.which != 13)return;
			try{
				var vals = e.target.value.split(",");
				e.target.newtonObject.transformation.matrix.scale({x:+vals[0], y:+vals[1], z:+vals[2]});
				e.target.newtonObject.updateParameterGUI();
			}catch(e){
				e.target.newtonObject.updateParameterGUI();
			}
		}
		container.appendChild(scaleInput);

		container.appendChild(document.createElement("hr"));

		var physicsHeader = document.createElement("h4");
		var physicsHeaderText = document.createTextNode("Physics");
		physicsHeader.appendChild(physicsHeaderText);
		container.appendChild(physicsHeader);

		var physicsBodyInputDesc = document.createElement("p");
		var physicsBodyInputDescText = document.createTextNode("Physics body:");
		physicsBodyInputDesc.appendChild(physicsBodyInputDescText);
		container.appendChild(physicsBodyInputDesc);
		var physicsBodyInput = document.createElement("input");
		physicsBodyInput.type = "button";
		physicsBodyInput.value = "Edit...";
		physicsBodyInput.id = "physicsBodyInput";
		container.appendChild(physicsBodyInput);

		container.appendChild(document.createElement("hr"));

		var scriptHeader = document.createElement("h4");
		var scriptHeaderText = document.createTextNode("Script");
		scriptHeader.appendChild(scriptHeaderText);
		container.appendChild(scriptHeader);

		var scriptSourceInputDesc = document.createElement("p");
		var scriptSourceInputDescText = document.createTextNode("Script source:");
		scriptSourceInputDesc.appendChild(scriptSourceInputDescText);
		container.appendChild(scriptSourceInputDesc);
		var scriptSourceInput = document.createElement("input");
		scriptSourceInput.type = "text";
		scriptSourceInput.id = "scriptSourceInput";
		scriptSourceInput.newtonObject = this;
		scriptSourceInput.onkeyup = function(e){
			e.preventDefault();
			if(e.which != 13)return;
			try{
				e.target.newtonObject.script.resource = e.target.value;
				e.target.newtonObject.updateParameterGUI();
			}catch(e){
				e.target.newtonObject.updateParameterGUI();
			}
		}
		container.appendChild(scriptSourceInput);

		container.appendChild(document.createElement("hr"));

		document.getElementById(id).appendChild(container);
		this.updateParameterGUI();
		this.isParameterGUIShown = true;

	}

	this.updateParameterGUI = function(){

		var matrixString = "";
		for(var i = 0; i < 16; i++){
			matrixString += this.transformation.matrix.elements[i];
			matrixString += ", ";
		}
		document.getElementById("matrixInput").value = matrixString;

		var attributes = this.transformation.matrix.decompose();

		var translationString = attributes[0].x+", "+attributes[0].y+", "+attributes[0].z;
		document.getElementById("translationInput").value = translationString;

		var rotationString = attributes[1].x+", "+attributes[1].y+", "+attributes[1].z+", "+attributes[1].w;
		document.getElementById("rotationInput").value = rotationString;

		var scaleString = attributes[2].x+", "+attributes[2].y+", "+attributes[2].z;
		document.getElementById("scaleInput").value = scaleString;

		document.getElementById("scriptSourceInput").value = this.script.resource;

	}

}