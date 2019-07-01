/**
 * 
 */

function full1Exercici1(){
	var cadena = "alsdnpgaofbAnozxnfoiAasbagna";
	var comptador = 0;
	for (posicio = 0; posicio <= cadena.length; posicio++){
		if ((cadena.charAt(posicio) == "a") || (cadena.charAt(posicio) == "A")) {
			comptador++;
		}
		}
	return comptador
}


function full1Exercici2(){
	var cadena = "alsdnpgaofbnozxbbnfoiasbagna";
	var inputLletra = lletra;
	var comptador = 0;
	for (posicio = 0; posicio <= cadena.length; posicio++){
		if (cadena.charAt(posicio) == lletra){
			comptador++
		}
	}
return comptador; 
}

function full1Exercici3(inputCadena, inputLletra){
	var inputCadena = cadena;
	var inputLletra = lletra;
	var comptador = 0;
	for (posicio = 0; posicio <= inputCadena.length; posicio++){
		if (inputCadena.charAt(posicio) == lletra) {
			comptador++
		}
	}
return comptador
}

function full1Exercici4(inputCadena){
	var inputCadena = cadena;
	var ubicacio = 0;
		for (posicio = 0; posicio <= inputCadena.length; posicio++) {
		if ((inputCadena.charAt(posicio) == "a") & (ubicacio == 0)){
		ubicacio = posicio + 1; 
		}
	}
return ubicacio
}


function full1Exercici5(inputCadena,inputLletra){
	var inputCadena = cadena;
	var inputLletra = lletra;
	var ubicacio = 0;
		for (posicio = 0; posicio <= inputCadena.length; posicio++) {
		if ((inputCadena.charAt(posicio) == inputLletra)  & (ubicacio == 0)){
		ubicacio = posicio + 1; 			
		}
	}
return ubicacio
}

function full1Exercici6(){
	var cadena = "altafulla";
	var llistaA = [];
	for (posicio = 0; posicio <= cadena.length; posicio++) {
		if ((cadena.charAt(posicio) == "a") || (cadena.charAt(posicio) == "A")) {
		llistaA.push(posicio + 1);	
		}
	}
return llistaA
}


function full1Exercici7 () {
	var cadenaNum = "012344198";
	var llistaNums = [];
	for (var numeroBuscat = 0; numeroBuscat <= 9; numeroBuscat++) {
	var comptador = 0;
		for (var posicio = 0; posicio < cadenaNum.length; posicio++) {	
		if (((cadenaNum.charAt(posicio)) == numeroBuscat)) {
			comptador++;
			console.log(comptador);
		}		
		}
llistaNums.push(comptador);
		console.log(numeroBuscat);
	}
	return llistaNums;
	}