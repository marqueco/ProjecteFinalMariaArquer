/**
 * 
 */

function deCode(matriuCodif,decodeMatrix01) {
	var matriuCodif = matriu3;
	var decodeMatrix01 = matriu4;
	var n = 3;
	var matriu5 = new Array(3);

	for (var j = 0; j < 3; j++) {
		matriu5[j] = [];
		for (var l = 0; l < 3; l++) {
			matriu3[j][l] = 0;
		}
	}

	for (rowMa1 = 0; rowMa1 < n; rowMa1++) {
		for (colMa2 = 0; colMa2 < n; colMa2++) {
			for (i = 0; i < n; i++) {

				matriu5[rowMa1][colMa2] += (matriu3[rowMa1][i] * matriu4[i][colMa2]);
				console.log(matriu3);
			}

		}

	}
	return matriu5
}