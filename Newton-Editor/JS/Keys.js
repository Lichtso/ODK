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

		domElement.addEventListener('mouseclick', this.handleEvent,false)
		domElement.addEventListener('mousedown', this.handleEvent, false);
		domElement.addEventListener('mouseup', this.handleEvent,false);
		domElement.addEventListener('mouseover', this.handleEvent,false);
		domElement.addEventListener('mousemove', this.handleEvent,false);
		domElement.addEventListener('DOMMouseScroll', this.handleEvent,false);
		domElement.addEventListener('mousewheel', this.handleEvent,false);
		domElement.addEventListener('keyup', this.handleEvent,false);
		domElement.addEventListener('keydown', this.handleEvent,false);
		domElement.addEventListener('keypress', this.handleEvent,false);
		domElement.addEventListener('contextmenu', function(evt){evt.preventDefault();},false);

	}
}

function destroy(){

	for(var i in this.DomElements){

		domElement = this.DomElements[i];

		domElement.keyContext = undefined;

		domElement.removeEventListener('mouseclick', this.handleEvent,false)
		domElement.removeEventListener('mousedown', this.handleEvent, false);
		domElement.removeEventListener('mouseup', this.handleEvent,false);
		domElement.removeEventListener('mouseover', this.handleEvent,false);
		domElement.removeEventListener('mousemove', this.handleEvent,false);
		domElement.removeEventListener('DOMMouseScroll', this.handleEvent,false);
		domElement.removeEventListener('mousewheel', this.handleEvent,false);
		domElement.removeEventListener('keyup', this.handleEvent,false);
		domElement.removeEventListener('keydown', this.handleEvent,false);
		domElement.removeEventListener('keypress', this.handleEvent,false);
		domElement.removeEventListener('contextmenu', function(evt){evt.preventDefault();},false);

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

		if(( ctx.keyBindings[i].keys.indexOf(key) > -1 )&&( ctx.keyBindings[i].modifier == modifier )){

			if( ctx.keyBindings[i].preventDefault )event.preventDefault();

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


