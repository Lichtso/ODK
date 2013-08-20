var KEYS = {};

KEYS.Context = function( options ){

	this.DomElements = options.domElements || new Array();
	this.keyBindings = options.keyBindings || new Array();
	this.preventDefault = options.preventDefault || false;

	this.add = add;
	this.remove = remove;
	this.attach = attach;
	this.destroy = destroy;
	this.handleEvent = handleEvent;

}

function attach( elementId ){

	var domElement = document.getElementById( elementId );

	if( domElement  != undefined ){

		this.DomElements.push( domElement );

		domElement.keyContext = this;

		domElement.addEventListener('mouseclick', this.handleEvent,true)
		domElement.addEventListener('mousedown', this.handleEvent, true);
		domElement.addEventListener('mouseup', this.handleEvent,true);
		domElement.addEventListener('mouseover', this.handleEvent,true);
		domElement.addEventListener('mousemove', this.handleEvent,true);
		domElement.addEventListener('DOMMouseScroll', this.handleEvent,true);
		domElement.addEventListener('mousewheel', this.handleEvent,true);
		domElement.addEventListener('keyup', this.handleEvent,true);
		domElement.addEventListener('keydown', this.handleEvent,true);
		domElement.addEventListener('keypress', this.handleEvent,true);
		domElement.addEventListener('contextmenu', function(evt){evt.preventDefault();},true);

	}
}

function destroy(){

	for(var i in this.DomElements){

		domElement = this.DomElements[i];

		domElement.keyContext = undefined;

		domElement.removeEventListener('mouseclick', this.handleEvent,true)
		domElement.removeEventListener('mousedown', this.handleEvent, true);
		domElement.removeEventListener('mouseup', this.handleEvent,true);
		domElement.removeEventListener('mouseover', this.handleEvent,true);
		domElement.removeEventListener('mousemove', this.handleEvent,true);
		domElement.removeEventListener('DOMMouseScroll', this.handleEvent,true);
		domElement.removeEventListener('mousewheel', this.handleEvent,true);
		domElement.removeEventListener('keyup', this.handleEvent,true);
		domElement.removeEventListener('keydown', this.handleEvent,true);
		domElement.removeEventListener('keypress', this.handleEvent,true);
		domElement.removeEventListener('contextmenu', function(evt){evt.preventDefault();},true);

	}

}

function add( binding ){

	if( binding )
		this.keyBindings.push(binding);

}

function remove( args ){

	for (var i = this.keyBindings.length - 1; i >= 0; i--) {
		if(this.keyBindings[i].id == args){
			this.keyBindings.splice(i, 1);
		}
	}
	
}

function handleEvent( event ){

	var ctx = this.keyContext;

	if(ctx.preventDefault)event.preventDefault();

	var modifier = undefined;
	var key = event.which;
	if (event.altKey) modifier = 'alt';
	else if(event.ctrlKey) modifier = 'ctrl';
	else if(event.shiftKey) modifier = 'shift';

	for(var i in ctx.keyBindings){

		if((ctx.keyBindings[i].keys.indexOf(key) > -1 )&&(ctx.keyBindings[i].modifier == modifier)){

			if(ctx.keyBindings[i].preventDefault)event.preventDefault();

			if(event.type==='mousedown')ctx.keyBindings[i].receiver.mousedown(event);
			if(event.type==='mouseup')ctx.keyBindings[i].receiver.mouseup(event);
			if(event.type==='mouseclick')ctx.keyBindings[i].receiver.mouseclick(event);
			if(event.type==='mouseover')ctx.keyBindings[i].receiver.mouseover(event);
			if(event.type==='mousemove')ctx.keyBindings[i].receiver.mousemove(event);
			if(event.type==='mousewheel')ctx.keyBindings[i].receiver.mousewheel(event);
			if(event.type==='DOMMouseScroll')ctx.keyBindings[i].receiver.mousewheel(event);
			if(event.type==='keyup')ctx.keyBindings[i].receiver.keyup(event);
			if(event.type==='keydown')ctx.keyBindings[i].receiver.keydown(event);
			if(event.type==='keypress')ctx.keyBindings[i].receiver.keypress(event);

		}

	}

}

KEYS.KeyBinding = function( options ){

	this.keys = options.keys;
	this.modifier = options.modifier;
	this.receiver = options.receiver;
	this.id = options.id;
	this.preventDefault = options.preventDefault || true;

}


