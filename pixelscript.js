var pixels2;

var reset;

var newpix = []

var rowsize;

var limit = 400000;

var bsize = 10;
//var width;
//var height;

var textureVariance = 25;

var pixes;

var pixPressure;

var pixRan;

var pixRanLiquid;

var liquidAnimTimer = 0;

var liquidFrame = 0;

function preload() {

	//pixels2=loadJSON('save.json');


	//reset=loadJSON('reset.json');


	//width=windowWidth;
	//height=windowHeight;
	//pixels2=Object.entries(pixels2)



	/*for(var i=0; i<1000*1000*4; i++){

	newpix.push(pixels.i)


	}*/

}

function setup() {


	var loadSave = getItem("save");

	if (loadSave !== null) {

		loadingSave = true;

	}

	createCanvas(1000, 800);

	noCursor();

	pixelDensity(1);
	background(0, 0, 0)

	loadPixels();

	reset = pixels

	pixes = new Array(pixels.length / 4)

	pixRan = new Array(pixels.length / 4)

	pixPressure = new Array(pixels.length / 4).fill(0);

	pixRanLiquid = new Array(pixels.length)


	for (var i = 0; i < pixRan.length; i++) {

		pixRan[i] = (random() * textureVariance) - (textureVariance / 2);



	}

	for (var i = 0; i < pixRanLiquid.length; i++) {

		pixRanLiquid[i] = (random() * textureVariance) - (textureVariance / 2);



	}




	//console.log(pixRan);

	rowsize = (width);
	//console.log(pixels)

	//console.log(pixels2[0])




}
var air = undefined
var sand = { id: 1, friction: 1, speed: 1, viscosity: 0, liquid: false, flammable: true, r: 194, g: 178, b: 128 }
var stone = { id: 2, friction: 4, speed: 3, viscosity: 0, liquid: false, flammable: false, r: 100, g: 100, b: 100 }
var dirt = { id: 3, friction: 1, speed: 3, viscosity: 0, liquid: false, flammable: false, r: 155, g: 118, b: 83 }
var grass = { id: 4, friction: 1, speed: 2, viscosity: 0, liquid: false, flammable: false, r: 30, g: 150, b: 30 }
var water = { id: 5, friction: 1, speed: 3, viscosity: 6, liquid: true, flammable: false, r: 110, g: 110, b: 255 }
var oil = { id: 6, friction: 1, speed: 3, viscosity: 2, liquid: true, flammable: true, r: 44, g: 36, b: 22 }
var fire = { id: 7, friction: 1, speed: 0, viscosity: 0, liquid: false, flammable: false, r: 255, g: 0, b: 0 }
var metal = { id: 8, friction: 0, speed: 0, viscosity: 0, liquid: false, flammable: false, r: 80, g: 80, b: 80 }
var fuse = { id: 9, friction: 0, speed: 0, viscosity: 0, liquid: false, flammable: true, r: 100, g: 220, b: 100 }
var lava = { id: 10, friction: 1, speed: 3, viscosity: 2, liquid: true, flammable: false, r: 207, g: 48, b: 16 }



{


	var tempsave = [];

	var bc = 0;



	var pixelsize = 10;

	var keys = []

	var lastmouse = {
		x: 0,
		y: 0
	}




	var mp = false;

	var preloaded = false;

	var pixelcount = 0;

	//noStroke();

	var pcolor = {
		r: 194,
		g: 178,
		b: 128
	}

	var vertexArray = [];

	var sortf = function (a, b) {
		return a[0] - b[0];
	};


	var convertToMap = function (num) {

		var py = floor(num / rowsize);


		var px = (num) % (rowsize);

		//println(px);

		return {
			x: px,
			y: py
		};
	};

	//println(convertToMap(numb).x+","+convertToMap(numb).y);

	var convertFromMap = function (x, y) {
		var num = 0;

		num = (x) + ((y) * rowsize);

		return num;
	};


	//println(convertFromMap(convertToMap(numb).x,convertToMap(numb).y));



	var updatepixels = false;

	var testing = true;

	var fpscount = 0;
	var fpsaverage = 0;
	var fpstimer = 0;

	var paused = false;

}

var chosen = sand;

var bruh = false;

var loadingSave = false;

var draw = function () {


	if (loadingSave == true) {



		var loadSave = getItem("save");

		var tempSave2 = new Array(pixels.length / 4).fill(undefined);



		for (var i = 0; i < loadSave.length; i++) {

			if (loadSave[i] != -1) {
				if (loadSave[i] == 1) {

					tempSave2[i] = sand;

				}

				/*var sand = { id: 1, friction: 1, speed: 1, viscosity: 0, liquid: false, flammable: true, r: 194, g: 178, b: 128 }
var stone = { id: 2, friction: 4, speed: 3, viscosity: 0, liquid: false, flammable: false, r: 100, g: 100, b: 100 }
var dirt = { id: 3, friction: 1, speed: 3, viscosity: 0, liquid: false, flammable: false, r: 155, g: 118, b: 83 }
var grass = { id: 4, friction: 1, speed: 2, viscosity: 0, liquid: false, flammable: false, r: 30, g: 150, b: 30 }
var water = { id: 5, friction: 1, speed: 3, viscosity: 6, liquid: true, flammable: false, r: 110, g: 110, b: 255 }
var oil = { id: 6, friction: 1, speed: 3, viscosity: 2, liquid: true, flammable: true, r: 44, g: 36, b: 22 }
var fire = { id: 7, friction: 1, speed: 0, viscosity: 0, liquid: false, flammable: false, r: 255, g: 0, b: 0 }
var metal = { id: 8, friction: 0, speed: 0, viscosity: 0, liquid: false, flammable: false, r: 80, g: 80, b: 80 }
var fuse = { id: 9, friction: 0, speed: 0, viscosity: 0, liquid: false, flammable: true, r: 100, g: 220, b: 100 }
var lava = { id: 10, friction: 1, speed: 3, viscosity: 2, liquid: true, flammable: false, r: 207, g: 48, b: 16 } */

				if (loadSave[i] == 1) {

					tempSave2[i] = sand;

				}

				if (loadSave[i] == 2) {

					tempSave2[i] = stone;

				}
				if (loadSave[i] == 3) {

					tempSave2[i] = dirt;

				}
				if (loadSave[i] == 4) {

					tempSave2[i] = grass;

				}
				if (loadSave[i] == 5) {

					tempSave2[i] = water;

				}
				if (loadSave[i] == 6) {

					tempSave2[i] = oil;

				}
				if (loadSave[i] == 7) {

					tempSave2[i] = fire;

				}
				if (loadSave[i] == 8) {

					tempSave2[i] = metal;

				}
				if (loadSave[i] == 9) {

					tempSave2[i] = fuse;

				}
				if (loadSave[i] == 10) {

					tempSave2[i] = lava;

				}
			}


		}

		loadingSave = false;
		//console.log(tempSave2)
		pixes = tempSave2;
		paused = false;

	}



	noStroke();

	var skips = [];

	var skippixel = new Array(pixes.length)




	var onscreenm = 0;
	//console.log(frameRate())
	var check = 0;

	//frameRate(5)

	//run

	if (paused === false) {

		for (var n = pixes.length; n > width; n = n - (width)) {

			for (var i = n; i > n - (width); i--) {

				if (pixes[i] !== undefined && pixes[i].liquid == false) {
					pixPressure[i] = 0;
				}

				//gravityfric
				if (pixes[i] !== undefined && pixes[i].friction > 0 && pixes[i + width] !== undefined && pixes[i].id !== 7) {


					if (pixes[i + (width) + 1] === undefined && pixes[i + (width)] !== undefined || pixes[i + (width) - 1] === undefined && pixes[i + (width)] !== undefined || pixes[i + (width) + 1].liquid === true && pixes[i + (width)] !== undefined || pixes[i + (width) - 1].liquid === true && pixes[i + (width)] !== undefined) {


						var check = (Math.random() * 2) - 1;



						if (check >= 0) {


							check = 1;

						}


						if (check < 0) {

							check = -1;


						}

						if (i + (width * pixes[i].friction) + (check) < pixes.length && pixes[i + (width * pixes[i].friction) + (check)] === undefined || pixes[i + (width * pixes[i].friction) + (check)] !== undefined && pixes[i + (width * pixes[i].friction) + (check)].liquid === true && pixes[i].liquid === false) {

							var savec = pixes[i];
							var savet = pixes[i + (width * pixes[i].friction) + (check)];

							pixes[i + (width * pixes[i].friction) + (check)] = savec;

							pixes[i] = savet;

						}


					}


				}

				//liquid
				if (pixes[i] !== undefined && pixes[i].liquid === true) {


					if (pixes[i + 1] === undefined || pixes[i - 1] === undefined) {
						if (skippixel[i] === false || skippixel[i] === undefined) {

							var check = (Math.random() * 2) - 1;



							if (check >= 0) {


								check = 1;

							}


							if (check < 0) {

								check = -1;


							}



							if (pixes[i + check] === undefined && pixes[i + width] !== undefined) {

								for (var p = pixes[i].viscosity; p > 0; p--) {


									if (pixes[i + ((check) * p)] === undefined && pixes[i + (width)] !== undefined) {

										//console.log("yeet")


										pixes[i + ((check) * p)] = pixes[i]

										pixes[i] = undefined;


										skippixel[i + ((check) * p)] = true







									}

								}


							}



						}


					}




					/*if (pixes[i - width] == undefined && pixes[i + width] != undefined && pixes[i + width].liquid == true && pixPressure[i] > 1) {

						if (pixes[i - (width * 2)] == undefined) {
							pixes[i - (width * 2)] = pixes[i];
							pixes[i] = undefined;
							pixPressure[i] = 0;
						}


					}*/

					//pixPressure[i] = Math.max(pixPressure[i], Math.max(pixPressure[i - 1], pixPressure[i + 1]) - 1);


					/*if (pixes[i - 1] != undefined && pixes[i - 1].liquid == true && pixPressure[i - 1] < pixPressure[i] - 1) {
						pixPressure[i - 1] = pixPressure[i] - 1;
					}*/


					/*if (pixes[i - width] == undefined && pixes[i + width] != undefined && pixes[i + width].liquid == true && pixPressure[i] > 1) {

						if (pixes[i - (width * pixPressure[i])] == undefined) {
							pixes[i - (width * pixPressure[i])] = pixes[i];
							pixes[i] = undefined;
							pixPressure[i] = 0;
						}

					}*/





					/*if (pixes[i - width] !== undefined && pixes[i - width].liquid == false && pixPressure[i] < pixPressure[i - 1] - 1) {
						pixPressure[i] = pixPressure[i - 1] - 1;
					}*/











				}

				//seep
				if (pixes[i] !== undefined && pixes[i].liquid === true && pixes[i + width] !== undefined) {


					if (pixes[i + 1] === undefined || pixes[i - 1] === undefined) {
						if (skippixel[i] === false || skippixel[i] === undefined) {

							var check = (Math.random() * 2) - 1;



							if (check >= 0) {


								check = 1;

							}


							if (check < 0) {

								check = -1;


							}



							if (pixes[i + check] === undefined && pixes[i + width] !== undefined) {

								for (var p = pixes[i].viscosity; p > 0; p--) {


									if (pixes[i + ((check) * p)] === undefined && pixes[i + (width)] !== undefined) {

										//console.log("yeet")


										pixes[i + ((check) * p)] = pixes[i]

										pixes[i] = undefined;


										skippixel[i + ((check) * p)] = true







									}

								}


							}



						}


					}

					if (pixes[i - width] !== undefined && pixes[i] !== undefined && pixes[i].friction !== 0) {





						var seep = random(-3, 1)

						if (seep > 0) {


							if (pixes[i - width].liquid === false && pixes[i].friction !== 0 && pixes[i - width].friction !== 0) {

								var savec = pixes[i]
								var savet = pixes[i - width];

								pixes[i - width] = savec;
								pixes[i] = savet;

							}

							else if (pixes[i - width].liquid === true && pixes[i].id > pixes[i - width].id && pixes[i].friction !== 0 && pixes[i - width].friction !== 0) {
								var savec = pixes[i]
								var savet = pixes[i - width];

								pixes[i - width] = savec;
								pixes[i] = savet;

							}


						}

					}

				}

				//fire
				if (pixes[i] !== undefined && pixes[i].id === 7) {


					var firedecay = random(0, 10);

					var check = (Math.random() * 2) - 1;





					if (firedecay > 4) {


						pixes[i] = undefined;

					}
					//console.log(check)
					if (check > 0) {

						if (pixes[i - width] === undefined) {

							pixes[i - width] = fire;




						}



						else if (pixes[i - 1] === undefined) {

							pixes[i - 1] = fire;


						}

						else if (pixes[i + 1] === undefined) {

							pixes[i + 1] = fire;


						}


					}

					if (check >= 0) {


						check = 1;

					}


					if (check < 0) {

						check = -1;


					}


					if (pixes[i - width] !== undefined && pixes[i - width].flammable === true) {

						if (firedecay > 6) {
							pixes[i - width] = fire;
						}


					}

					else if (pixes[i + width] !== undefined && pixes[i + width].flammable === true) {

						if (firedecay > 4) {
							pixes[i + width] = fire;
						}




					}

					if (pixes[i + 1] !== undefined && pixes[i + 1].flammable === true) {

						if (firedecay > 5) {
							pixes[i + 1] = fire;
						}




					}

					else if (pixes[i - 1] !== undefined && pixes[i - 1].flammable === true) {

						if (firedecay > 6.5) {
							pixes[i - 1] = fire;
						}




					}




				}







			}

			for (var i = n - (width); i < n; i++) {


				//gravityfric
				if (pixes[i] !== undefined && pixes[i].friction > 0 && pixes[i + width] !== undefined && pixes[i].id !== 7) {


					if (pixes[i + (width) + 1] === undefined && pixes[i + (width)] !== undefined || pixes[i + (width) - 1] === undefined && pixes[i + (width)] !== undefined || pixes[i + (width) + 1].liquid === true && pixes[i + (width)] !== undefined || pixes[i + (width) - 1].liquid === true && pixes[i + (width)] !== undefined) {


						var check = (Math.random() * 2) - 1;



						if (check >= 0) {


							check = 1;

						}


						if (check < 0) {

							check = -1;


						}

						if (i + (width * pixes[i].friction) + (check) < pixes.length && pixes[i + (width * pixes[i].friction) + (check)] === undefined || pixes[i + (width * pixes[i].friction) + (check)] !== undefined && pixes[i + (width * pixes[i].friction) + (check)].liquid === true && pixes[i].liquid === false) {

							var savec = pixes[i];
							var savet = pixes[i + (width * pixes[i].friction) + (check)];

							pixes[i + (width * pixes[i].friction) + (check)] = savec;

							pixes[i] = savet;

						}


					}


				}

				//down
				if (pixes[i] !== undefined && pixes[i].speed > 0 && pixes[i].id !== 7) {
					for (var p = pixes[i].speed; p > 0; p--) {
						if (pixes[i + (width * p)] === undefined && i + (width * p) < pixes.length) {

							//console.log("yeet")



							pixes[i + (width * p)] = pixes[i];

							pixes[i] = undefined;



						}

					}
				}

				//liquid
				if (pixes[i] !== undefined && pixes[i].liquid === true) {


					if (pixes[i + 1] === undefined || pixes[i - 1] === undefined) {
						if (skippixel[i] === false || skippixel[i] === undefined) {

							var check = (Math.random() * 2) - 1;



							if (check >= 0) {


								check = 1;

							}


							if (check < 0) {

								check = -1;


							}



							if (pixes[i + check] === undefined && pixes[i + width] !== undefined) {

								for (var p = pixes[i].viscosity; p > 0; p--) {


									if (pixes[i + ((check) * p)] === undefined && pixes[i + (width)] !== undefined) {

										//console.log("yeet")


										pixes[i + ((check) * p)] = pixes[i]

										pixes[i] = undefined;


										skippixel[i + ((check) * p)] = true







									}

								}


							}



						}


					}

					/*if (pixes[i - width] !== undefined && pixes[i - width].liquid == true && pixPressure[i] < pixPressure[i] + 1) {
						pixPressure[i] = pixPressure[i - width] + 1;
					}

					if (pixPressure[i - 1] > pixPressure[i] + 1) {
						pixPressure[i] = pixPressure[i - 1] - 1;
					}

					if (pixPressure[i + 1] > pixPressure[i] + 1) {
						pixPressure[i] = pixPressure[i + 1] - 1;
					}*/

					/*if (pixes[i + width] !== undefined && pixes[i + width].liquid == true && pixPressure[i + width] - 1 > pixPressure[i]) {
						pixPressure[i] = pixPressure[i + width] - 1;
					}

					if (pixes[i + 1] != undefined && pixes[i + 1].liquid == true && pixPressure[i + 1] < pixPressure[i] - 1) {
						pixPressure[i + 1] = pixPressure[i] - 1;
					}*/





				}





				//seep
				if (pixes[i] !== undefined && pixes[i].liquid === true && pixes[i + width] !== undefined) {


					if (pixes[i + 1] === undefined || pixes[i - 1] === undefined) {
						if (skippixel[i] === false || skippixel[i] === undefined) {

							var check = (Math.random() * 2) - 1;



							if (check >= 0) {


								check = 1;

							}


							if (check < 0) {

								check = -1;


							}



							if (pixes[i + check] === undefined && pixes[i + width] !== undefined) {

								for (var p = pixes[i].viscosity; p > 0; p--) {


									if (pixes[i + ((check) * p)] === undefined && pixes[i + (width)] !== undefined) {

										//console.log("yeet")


										pixes[i + ((check) * p)] = pixes[i]

										pixes[i] = undefined;


										skippixel[i + ((check) * p)] = true







									}

								}


							}



						}


					}

					if (pixes[i - width] !== undefined && pixes[i] !== undefined && pixes[i].friction !== 0) {





						var seep = random(-3, 1)

						if (seep > 0) {


							if (pixes[i - width].liquid === false && pixes[i].friction !== 0 && pixes[i - width].friction !== 0) {

								var savec = pixes[i]
								var savet = pixes[i - width];

								pixes[i - width] = savec;
								pixes[i] = savet;

							}

							else if (pixes[i - width].liquid === true && pixes[i].id > pixes[i - width].id && pixes[i].friction !== 0 && pixes[i - width].friction !== 0) {
								var savec = pixes[i]
								var savet = pixes[i - width];

								pixes[i - width] = savec;
								pixes[i] = savet;

							}


						}

					}

				}

			}





		}

	}


	for (var i = 0; i < pixes.length; i++) {

		if (pixes[i] !== undefined) {

			//console.log(pixRan[i])

			var variance = pixRan[i];

			var pressure = pixPressure[i] / 2;

			if (pressure == undefined) {
				pressure = 0;
			}

			if (pixes[i].liquid == true) {
				variance = pixRanLiquid[i + (pixes.length * liquidFrame)];


			}

			variance = 0;

			pixels[(i * 4)] = (pixes[i].r + variance) - pressure;
			pixels[(i * 4) + 1] = (pixes[i].g + variance) - pressure;
			pixels[(i * 4) + 2] = (pixes[i].b + variance) - pressure;




		}

		if (pixes[i] === undefined) {

			pixels[(i * 4)] = bc;
			pixels[(i * 4) + 1] = bc;
			pixels[(i * 4) + 2] = bc;


		}

	}


	/*
	
		for (var i = 0; i < pixes.length; i++) {
	
	
	
			if (pixes[i - 1] == undefined && pixPressure[i] > 1) {
	
				pixes[i - 1] = pixes[i];
				pixes[i] = undefined;
	
			}
	
		}
	
		for (var i = pixes.length; i > 0; i--) {
	
	
			if (pixes[i + 1] == undefined && pixPressure[i] > 1) {
	
				pixes[i + 1] = pixes[i];
				pixes[i] = undefined;
	
			}
	
		}
	
	
		pixPressure.fill(0)
	
	
		for (var i = 0; i < pixes.length; i++) {
	
			if (pixes[i] != undefined && pixes[i].liquid == true) {
	
				if (pixes[i - width] == undefined) {
					pixPressure[i] = 1;
				}
	
				if (pixes[i - width] != undefined && pixes[i - width].liquid == true) {
	
					pixPressure[i] = pixPressure[i - width] + 1;
	
				}
	
				if (pixes[i - 1] != undefined && pixes[i - 1].liquid == true && pixPressure[i - 1] > pixPressure[i]) {
					pixPressure[i] = pixPressure[i - 1];
				}
	
	
	
	
	
			}
	
	
	
	
		}
	
		var oldpixes = pixes;
	
		for (var i = pixes.length; i > 0; i--) {
	
			if (pixes[i] != undefined && pixes[i].liquid == true) {
	
	
	
				if (pixes[i + width] != undefined && pixes[i + width].liquid == true) {
	
					pixPressure[i] = pixPressure[i + width] - 1;
	
				}
	
				if (pixes[i + 1] != undefined && pixes[i + 1].liquid == true && pixPressure[i + 1] > pixPressure[i]) {
					pixPressure[i] = pixPressure[i + 1];
				}
	
	
	
	
	
	
	
			}
	
	
	
	
	
	
	
		}
	
	
		for (var i = 0; i < pixes.length; i++) {
	
			if (pixes[i] != undefined && pixes[i].liquid == true) {
	
				if (pixes[i - width] == undefined) {
					pixPressure[i] = 1;
				}
	
				if (pixes[i - width] != undefined && pixes[i - width].liquid == true) {
	
					pixPressure[i] = pixPressure[i - width] + 1;
	
				}
	
				if (pixes[i - 1] != undefined && pixes[i - 1].liquid == true && pixPressure[i - 1] > pixPressure[i]) {
					pixPressure[i] = pixPressure[i - 1];
				}
	
	
	
	
	
			}
	
	
	
	
		}
	
		var oldpixes = pixes;
	
		for (var i = pixes.length; i > 0; i--) {
	
			if (pixes[i] != undefined && pixes[i].liquid == true) {
	
	
	
				if (pixes[i + width] != undefined && pixes[i + width].liquid == true) {
	
					pixPressure[i] = pixPressure[i + width] - 1;
	
				}
	
				if (pixes[i + 1] != undefined && pixes[i + 1].liquid == true && pixPressure[i + 1] > pixPressure[i]) {
					pixPressure[i] = pixPressure[i + 1];
				}
	
	
	
	
	
	
	
			}
	
	
	
	
	
	
	
		}
	
	
	
		for (var i = 0; i < pixes.length; i++) {
	
			if (pixes[i] != undefined && pixes[i].liquid == true) {
	
	
				for (var p = 0; p < 2; p++) {
	
					if (pixes[i - (width * p)] == undefined && oldpixes[i + (width * p)] != undefined && oldpixes[i + (width * p)].liquid == true && pixPressure[i] > 1) {
	
						if (pixes[i - (width * p)] == undefined) {
							pixes[i - (width * p)] = pixes[i];
							pixes[i] = undefined;
							//pixPressure[i] = 0;
						}
	
					}
	
				}
	
	
	
	
	
			}
	
	
	
	
	
	
	
		}
	
		for (var i = pixes.length; i > 0; i--) {
	
			if (pixes[i] != undefined && pixes[i].liquid == true) {
	
	
	
				for (var p = 0; p < 2; p++) {
	
					if (pixes[i - (width * p)] == undefined && oldpixes[i + (width * p)] != undefined && oldpixes[i + (width * p)].liquid == true && pixPressure[i] > 1) {
	
						if (pixes[i - (width * p)] == undefined) {
							pixes[i - (width * p)] = pixes[i];
							pixes[i] = undefined;
							//pixPressure[i] = 0;
						}
	
					}
	
				}
	
	
	
	
	
			}
	
	
	
	
	
	
	
		}
	
		*/



	if (liquidAnimTimer >= 5) {
		liquidFrame++;
		liquidAnimTimer = 0;

	}

	if (liquidFrame > 3) {
		liquidFrame = 0;
	}


	liquidAnimTimer++;


	//console.log(pixelcount)

	//pixelcount = 0;

	updatePixels();



	var snap = 5;

	for (var i = 0; i < pixels.length; i = i + 4) {

		if (pixels[i] !== bc) {

			pixelcount = pixelcount + 1;

		}

	}

	if (mp === true && onscreenm < 100000) {


		preloaded = false;
		var row = 0;




		for (var i = 0; i < bsize; i++) {


			if (((mouseX / 5) * 5) - lastmouse.x < 0) {
				for (var p = round((((mouseX / 5) * 5) - lastmouse.x)); p < bsize; p++) {



					if (pixelcount < limit || chosen === air) {

						var pid = (round(convertFromMap((round(mouseX / snap) * snap), (round(mouseY / snap) * snap))))

						if ((p + pid) + row < pixes.length && (p + pid) + row > width) {
							pixes[(p + pid) + row] = chosen;
							pixelcount = pixelcount + 1;
						}


					}

				}

			}

			if (((mouseX / 5) * 5) - lastmouse.x > 0) {
				for (var p = 0; p < (bsize + round((((mouseX / 5) * 5) - lastmouse.x))); p++) {
					if (pixelcount < limit || chosen === air) {
						var pid = (round(convertFromMap((round(mouseX / snap) * snap), (round(mouseY / snap) * snap))))
						if ((p + pid) + row < pixes.length && (p + pid) + row > width) {
							pixes[(p + pid) + row] = chosen;
							pixelcount = pixelcount + 1;

						}


					}

				}

			} else {


				for (var p = 0; p < bsize; p++) {
					if (pixelcount < limit || chosen === air) {
						var pid = (round(convertFromMap((round(mouseX / snap) * snap), (round(mouseY / snap) * snap))))
						if ((p + pid) + row < pixes.length && (p + pid) + row > width) {
							pixes[(p + pid) + row] = chosen;
							pixelcount = pixelcount + 1;

						}


					}

				}



			}

			row = row + width;
		}

		/*for(var i = 0; i < 10; i++) {
		
			for(var p=0; p<10; p++){
				
				//console.log(chosen)
				
				if(pid+(width*i)+p<pixes.length){
				pixes[pid+(width*i)+p]=chosen;
				}
				
				
			
			}
		
		
		}*/





	}

	lastmouse.x = round((mouseX / 5) * 5)
	lastmouse.y = round((mouseY / 5) * 5)






	//keys

	{

		if (keys[83]) {

			var tempSave = [];

			for (var i = 0; i < pixes.length; i++) {


				if (pixes[i] == undefined) {

					tempSave.push(-1)

				}

				else {

					tempSave.push(pixes[i].id);

				}


			}

			storeItem("save", tempSave);

			//console.log(tempSave);

			keys[83] = false;

		}

		if (keys[76]) {

			keys[76] = false;

			paused = true;

			//console.log(loadSave)

			loadingSave = true;

			//console.log(tempSave);

			//pixes = tempSave;



		}

		if (keys[67]) {

			pixes = new Array(pixels.length / 4).fill(undefined);
			clearStorage();

		}
		//sand
		if (keys[49]) {

			chosen = sand;
			pcolor.r = 194
			pcolor.g = 178
			pcolor.b = 128

		}


		//stone
		if (keys[50]) {

			chosen = stone;
			//console.log("Yeet")
			pcolor.r = 100
			pcolor.g = 100
			pcolor.b = 100

		}

		//dirt
		if (keys[51]) {

			chosen = dirt;

			pcolor.r = 20
			pcolor.g = 100
			pcolor.b = 20

		}
		//grass
		if (keys[52]) {
			//console.log("Yeet")

			chosen = grass;
			pcolor.r = 30
			pcolor.g = 180
			pcolor.b = 30

		}

		//water
		if (keys[53]) {
			chosen = water;
			//console.log("Yeet")
			pcolor.r = 110
			pcolor.g = 110
			pcolor.b = 255

		}

		//oil
		if (keys[54]) {
			chosen = oil
			pcolor.r = 255
			pcolor.g = 0
			pcolor.b = 0

		}

		//fire
		if (keys[55]) {
			chosen = fire
			//console.log("Yeet")
			pcolor.r = 150
			pcolor.g = 150
			pcolor.b = 150

		}

		if (keys[56]) {
			chosen = metal
			//console.log("Yeet")
			pcolor.r = 80
			pcolor.g = 80
			pcolor.b = 80

		}

		if (keys[57]) {
			chosen = fuse
			//console.log("Yeet")
			pcolor.r = 80
			pcolor.g = 80
			pcolor.b = 80

		}

		if (keys[84]) {
			chosen = lava
			//console.log("Yeet")
			pcolor.r = 80
			pcolor.g = 80
			pcolor.b = 80

		}



		if (keys[48]) {
			//console.log("Yeet")

			chosen = air;
			pcolor.r = bc
			pcolor.g = bc
			pcolor.b = bc

		}

		/*if(keys[69]) {
			//console.log("Yeet")
			//console.log(pixels)
	
			saveJSON(pixes, 'save.json');
	
		}*/

		/*if (keys[83]) {
			//console.log("Hello!")

			tempsave = []
			for (var i = 0; i < pixes.length; i++) {

				tempsave.push(pixes[i])

			}


		}

		if (keys[76]) {
			if (tempsave.length > 0) {
				for (var i = 0; i < tempsave.length; i++) {

					pixes[i] = tempsave[i]

				}

			}
			else { console.log("No valid save") }
		}


		if (keys[82]) {


			for (var i = 0; i < pixes.length; i++) {

				pixes[i] = undefined

			}

		}*/
	}

	/*if(keys[79]) {
	
	
		for(var i=0; i<pixes.length; i++){
			if(pixels2[i]===null){
			pixes[i]=undefined;
			
			}
			else{pixes[i]=pixels2[i]}
		
		}
		
	
	
	
	}*/

	if (paused === true) {

		fill(200, 200, 255, 100)

		rect(0, 0, width, height)

	}


	fill(255)
	text("FPS: " + round(fpsaverage), 10, 40)



	text("Pixels: " + pixelcount, 10, 60)

	pixelcount = 0;

	stroke(255, 0, 0)

	fill(0, 0, 0, 0)

	rect(round(mouseX / snap) * snap, round(mouseY / snap) * snap, bsize, bsize)

	noStroke();

	if (fpstimer === 10) {

		fpstimer = 0;

		fpsaverage = fpscount / 10;

		fpscount = 0;

	}

	fpstimer = fpstimer + 1;
	fpscount = fpscount + frameRate();

};

keyPressed = function () {

	keys[keyCode] = true;

	//console.log(keyCode)

	//println(keyCode);
};

keyReleased = function () {



	keys[keyCode] = false;

	if (keyCode === 80) {

		if (paused === false) {

			paused = true;

		}

		else { paused = false }


	}

	if (keyCode === 189) {

		bsize = bsize - 5;

	}
	if (keyCode === 187) {

		bsize = bsize + 5;

	}

	if (bsize > 100) {

		bsize = 100;


	}

	if (bsize < 5) {

		bsize = 5;

	}


};

mousePressed = function () {

	mp = true;



};

mouseReleased = function () {

	mp = false;
};