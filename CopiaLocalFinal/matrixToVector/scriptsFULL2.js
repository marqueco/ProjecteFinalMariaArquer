/**
 * 
 */


function full2Exercici1() {
	var inputNums = cadenaNums;
	var inputCerca = cercaNum;
	var comptador = 0;
	for (posicio = 0; posicio <= inputNums.length; posicio++) {
		if (inputNums.charAt(posicio) > inputCerca) {
			console.log(inputNums.charAt(posicio));
			comptador++;
		}
	}
	return comptador
}

function full2Exercici2 () {
	var abecedari = ["a", "b", "c", "ç", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var cadenaCar = "lkjndfiobisaospañnjb";
	var llistaCars = [];
	for (var indexLletraBuscada = 0; indexLletraBuscada < abecedari.length; indexLletraBuscada++) {
		var comptador = 0;
			for (var posicio = 0; posicio < cadenaCar.length; posicio++) {	
			if (((cadenaCar[posicio]) == (abecedari[indexLletraBuscada]))) {
				comptador++;
			}		
			}
	llistaCars.push(comptador);
		}
		return llistaCars;
		}




function full2Exercici3 () {
	var llista1 = [ Math.floor(Math.random() * 10),
		Math.floor(Math.random() * 10), Math.floor(Math.random() * 10),
		Math.floor(Math.random() * 10), Math.floor(Math.random() * 10) ];
	var llista2 = [ Math.floor(Math.random() * 10),
		Math.floor(Math.random() * 10), Math.floor(Math.random() * 10),
		Math.floor(Math.random() * 10), Math.floor(Math.random() * 10) ];
	var llista3 = [ Math.floor(Math.random() * 10),
		Math.floor(Math.random() * 10), Math.floor(Math.random() * 10),
		Math.floor(Math.random() * 10), Math.floor(Math.random() * 10) ];
	var llista4 = [ Math.floor(Math.random() * 10),
		Math.floor(Math.random() * 10), Math.floor(Math.random() * 10),
		Math.floor(Math.random() * 10), Math.floor(Math.random() * 10) ];
	var llista5 = [ Math.floor(Math.random() * 10),
		Math.floor(Math.random() * 10), Math.floor(Math.random() * 10),
		Math.floor(Math.random() * 10), Math.floor(Math.random() * 10) ];
	
	var sumaDiagonal = (llista1[0] + llista2[1] + llista3[2] + llista4[3] + llista5[4]);
	
return [llista1] + "<br>" + [llista2] + "<br>" + [llista3] + "<br>" + [llista4] + "<br>" + [llista5] + "<br>" + (sumaDiagonal)
}

function full2Exercici5() {
	var matriu = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]];
	var sumaDiagonal = (matriu[0][0]) + (matriu[1][1]) + (matriu[2][2]) + (matriu[3][3]) + (matriu[4][4]);
	
	return matriu[0] + "<br>" + matriu[1] + "<br>" + matriu[2] + "<br>" + matriu[3] + "<br>" + matriu[4] + "<br>" + sumaDiagonal
}

