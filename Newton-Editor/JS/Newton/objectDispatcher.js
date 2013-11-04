var NewtonObjectDispatcher = function(){

	this.dispatchInstanceForTemplate = function(templateName){

		for(i in Newton.objectTemplates){

			if(Newton.objectTemplates[i].daeData.name === templateName){

				var instance = new NewtonObjectInstance();
				instance.template = Newton.objectTemplates[i];
				instance.mesh = Newton.objectTemplates[i].daeData.clone();
				instance.identifier = Newton.nextId();
				instance.mesh.NewtonID = instance.identifier;
				Newton.objects.push(instance);
				Newton.threejs.scene.add(instance.mesh);
				Newton.updateOutlineView();
				return instance.identifier;

			}

		}

		Newton.log("The requested template was not found: "+templateName);

	}

	this.objectForId = function(id){

		for(i in Newton.objects){

			if(Newton.objects[i].identifier == id)
				return Newton.objects[i];

		}

		return undefined;

	}

}