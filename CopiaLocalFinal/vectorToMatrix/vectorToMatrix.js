/**
 * 
 */

function vectorToMatrix(inputVector,n) {
	var vector = inputVector;
	var inputN = n;
	var matriu = new Array(n);
		
	for (j = 0; j < n; j++) {
		var matriuFila = [];
		for (i = j*n; i < (j+1)*n; i++) {
		matriuFila.push(inputVector[i]);
		console.log(matriuFila);
		}
		matriu.push(matriuFila);
		console.log(matriu);
		}
		
	}


function vectorToMatrix2(inputVector,n) {
	var vector = inputVector;
	var inputN = n;
	var matriu = new Array(n);
		
	for (j = 0; j < n; j++) {
		var matriuFila = new Array();
		for (i = 0; i < n; i++) {
		matriuFila.push(inputVector[i + j * n]);
		console.log(matriuFila);
		}
		matriu.push(matriuFila);
		console.log(matriu);
		}
	
	var return_string = "";
	for ( a = 0 ; a < n ; a++ ) {
		return_string += matriu[a] + "<br>";
	}
	return 	return_string
	}

function vectorToMatrix3(inputVector,n) {
	var vector = inputVector;
	var inputN = n;
	var matriu = new Array(n);
		
	for (j = 0; j < n; j++) {
		matriu[j] = new Array();
		for (i = 0; i < n; i++) {
			matriu[j][i] = inputVector[i + j*n];
		}
	}

	console.log(matriu);
	return matriu;
}


