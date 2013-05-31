var colladaUploadHelper = function(){

	this.files = undefined;
	this.filename = undefined;

	this.uploadCollada = function(files){
		this.files = files;
		var extension; //file.name.split( '.' )[1].toLowerCase();

		for(i in this.files){

			file = this.files[i];

			if(file.constructor !== File)
				continue;

			console.log("File: %o", file);
			extension = file.name.split('.')[1].toLowerCase();

			if(extension === 'dae'){

				console.log("In here.");

				var reader = new FileReader();

				reader.onload = function(event){

					var contents = event.target.result;
					var parser = new DOMParser();

					var xml = parser.parseFromString(contents, 'text/xml');
					var loader = new THREE.ColladaLoader();
					loader.options.convertUpAxis = true;
					
					loader.parse(xml, function(collada){

						var scene = collada.scene;
						scene.updateMatrix();

						for(c in scene.children){

							if(scene.children[c].geometry !== undefined){

								if(Newton.colladaUploadHelper.filename){
									Newton.colladaUploadHelper.requestTexture(
										Newton.colladaUploadHelper.filename, scene.children[c]
										);
								}

								var template = new NewtonObjectTemplate();
								template.daeData = scene.children[c];
								Newton.objectTemplates.push(template);
								Newton.updateOutlineView();

							}
						} 

						//Newton.threejs.scene.add(scene);
					});
				}
				reader.readAsText(file);
			}
		}
		$.modal.close();
	}

	this.requestTexture = function(textureName, mesh){

		var img = new Image();
		var texture = new THREE.Texture(img);
		


		img.onload = function(e) {
			// Material needs manual update
			console.log("img onload");
			texture.image = img;
			texture.needsUpdate = true;
			mesh.material = new THREE.MeshLambertMaterial({'map': texture});
		}

		textureName = textureName.replace("./","");

		for(var i in this.files){
			if(this.files[i].name == textureName){ 

				var reader = new FileReader();
				reader.onload = function(e) {
					img.src = e.target.result;
				};
				reader.readAsDataURL(this.files[i]);
			}
		}

	} 

}