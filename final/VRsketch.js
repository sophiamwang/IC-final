// sketch.js file

// variable to hold a reference to our A-Frame world
var world;
var getVariables = {};

// our models
var ground, wine, table, garden,grapes;
var wineOBJ,wineMTL,grapeOBJ,grapeMTL,wineX,wineY,wineZ,wineRotationX,wineRotationY,wineScaleX,wineScaleY,wineScaleZ;

function setup() {
	
	//parse elements from main.js
	var nameValuePairs = location.search.substring(1).split("&");
	for (var i = 0; i < nameValuePairs.length; i++) {
		var splitPairs = nameValuePairs[i].split("=");
		getVariables[ splitPairs[0] ] = splitPairs[1];
	};
	console.log(getVariables);

	
	//change a-sky based on user chosen climate
	if(getVariables.temperature == "warm"){
		document.getElementById("theSky").setAttribute("src","#skyWarm");
	} 
	else if(getVariables.temperature == "cool"){
		document.getElementById("theSky").setAttribute("src","#skyCool");
	}
	else if (getVariables.temperature == "moderate"){
		document.getElementById("theSky").setAttribute("src","#skyModerate");
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
	//parse text because now it is seperated by %20 instead of space
	var wineText = getVariables.wineType.split("%20");
	var stringRes='';
	for (var i = 0; i<wineText.length;i++){
		stringRes += (" " +wineText[i]);
	}
	console.log(stringRes);
	document.getElementById("wineType").setAttribute("value",stringRes);

	//set grape
	if (getVariables.grape =="pinot"){
		grapeOBJ = 'grapes_obj';
		grapeMTL ='grapes_mtl';
		wineOBJ ='pinot_obj';
		wineMTL ='pinot_mtl';
		wineX= 0;
		wineY=0;
		wineZ=0.5;
		wineRotationX=0;
		wineRotationY=180;
		wineScaleX=0.06;
		wineScaleY=0.06;
		wineScaleZ=0.06;
	}
	else if(getVariables.grape=="syrah"){
		grapeOBJ = 'grapes_obj';
		grapeMTL ='grapes_mtl';
		wineOBJ ='syrah_obj';
		wineMTL ='syrah_mtl';
		wineX= 0;
		wineY=0.2;
		wineZ=0.5;
		wineRotationX=0;
		wineRotationY=180;
		wineScaleX=1;
		wineScaleY=1;
		wineScaleZ=1;	
	}
	else if(getVariables.grape=="cabernet"){
		grapeOBJ = 'grapes_obj';
		grapeMTL ='grapes_mtl';
		wineOBJ ='cabernet_obj';
		wineMTL ='cabernet_mtl';
		wineX= 0;
		wineY=0.1;
		wineZ=0.7;
		wineRotationX=0;
		wineRotationY=180;
		wineScaleX=0.007;
		wineScaleY=0.007;
		wineScaleZ=0.007
	};



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
		asset: wineOBJ,
		mtl: wineMTL,
		x: wineX,
		y: wineY,
		z: wineZ,
		rotationX:wineRotationX,
		rotationY:wineRotationY,
		scaleX:wineScaleX,
		scaleY:wineScaleY,
		scaleZ:wineScaleZ,

	});
	world.add(wine);
	console.log(wineOBJ);

	table = new OBJ({
		asset:'table_obj',
		mtl:'table_mtl',
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


