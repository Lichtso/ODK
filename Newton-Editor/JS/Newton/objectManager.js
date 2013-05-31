Newton.newInstanceForTemplate = function(templateName){

	console.log(templateName);

	for(i in this.objectTemplates){

		if(this.objectTemplates[i].daeData.name === templateName){
			console.log(".");
			var instance = new NewtonObjectInstance();
			instance.template = this.objectTemplates[i];
			instance.mesh = this.objectTemplates[i].daeData.clone();
			instance.identifier = Newton.nextId;
			instance.mesh.NewtonID = instance.identifier;
			instance.mesh.castShadow = true;
			instance.mesh.receiveShadow = true;
			console.log("NextID:  %o", Newton.nextId);
			Newton.nextId++;
			console.log(instance);
			this.objects.push(instance);
			this.threejs.scene.add(instance.mesh);
			Newton.updateOutlineView();
			return;
		}

	}
	Newton.log("The requested template was not found: "+templateName);
}

Newton.objectForId = function(id){
	for(i in this.objects){
		if(this.objects[i].identifier = id)
			return this.objects[i];
	}
	return undefined;
}

function selectObject(id){

	Nexton.selectObject = Newton.objectForId(id);

}