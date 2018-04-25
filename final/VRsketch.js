// sketch.js file

// variable to hold a reference to our A-Frame world
var world;
var getVariables = {};

// our models
var ground, wine, table, garden,grapes;
var grapeOBJ,grapeMTL,wineOBJ,wineMTL;

function setup() {
	
	//parse elements from main.js
	var nameValuePairs = location.search.substring(1).split("&");
	for (var i = 0; i < nameValuePairs.length; i++) {
		var splitPairs = nameValuePairs[i].split("=");
		getVariables[ splitPairs[0] ] = splitPairs[1];
	};
	console.log("object"+getVariables);

	//change text based on which wine
	var text= document.getElementById("text");
	text.value = getVariables.wineType;
	console.log("text"+text.value);
	
	//change a-sky based on user chosen climate
	if(getVariables.temperature == "warm"){
		document.getElementById("theSky").src = "#skyWarm";
	} 
	else if(getVariables.temperature == "cool"){
		document.getElementById("theSky").src = "#skyCool";
	}
	else if (getVariables.temperature == "moderate"){
		document.getElementById("theSky").src = "#skyModerate";
	};
	console.log(document.getElementById("theSky").src);



	//no canvas needed
	noCanvas();
	

	// construct the A-Frame world
	// this function requires a reference to the ID of the 'a-scene' tag in our HTML document
	world = new World('VRScene');
	
	//create composite objects
	container = new Container3D({x:0, y:1, z:-5});
	world.add(container);

	//change text
	document.getElementById("text").setAttribute("value","");

	//set grape
	if (getVariables.grape =="pinot"){
		grapeOBJ = '';
		grapeMTL = '';
	}
	else if(getVariables.grape=="syrah"){
		grapeOBJ = '';
		grapeMTL = '';
	}
	else if(getVariables.grape=="cabernet"){
		grapeOBJ = '';
		grapeMTL = '';
	}

	//create floor plane
	ground = new Plane({
		x:0, 
		y:-3.5,
		z:0, 
		width: 30, 
		height: 30, 
		red:96,
		green:128,
		blue:56,
		rotationX:-90,
	});
	world.add(ground);

//add obj
	garden = new OBJ({
		asset:"garden_obj",
		mtl: "garden_mtl",
		x:0,
		y:-3.5,
		z:0,
		scaleX:1,
		scaleY:1,
		scalez:1,

	});
	world.add(garden);
	// add OBJ models
	grapes = new OBJ({
		asset: grapeOBJ,
		mtl: grapeMTL,
		x:0,
		y:3,
		z:1,
		scaleX:2,
		scaleY:2,
		scaleZ:2,

	});
	// container.addChild(grapes);
	world.add(grapes);

	wine = new OBJ({
		asset: 'wine_obj',
		mtl: 'wine_mtl',
		x: 0,
		y: 0.2,
		z: 0.5,
		rotationX:0,
		rotationY:180,
		scaleX:1,
		scaleY:1,
		scaleZ:1,

	});
	world.add(wine);

	table = new OBJ({
		asset:grapeOBJ,
		mtl:grapeMTL,
		x: -0.1,
		y: -3.5,
		z: 0.3,
		rotationX:0,
		rotationY:180,
		scaleX:0.13,
		scaleY:0.13,
		scaleZ:0.13,

	});
	world.add(table);	

}


function draw(){
	container.spinY(0.3);
}

function mousePressed() {
}


