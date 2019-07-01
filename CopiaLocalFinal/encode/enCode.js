/**
 * 
 */

function enCode(matriu1, matriu2) {
	var inputMatrix = matriu1;
	var encodeMatrix01 = matriu2;
	var n = 3;
	var matriu3 = new Array(3);

	for (var j = 0; j < 3; j++) {
		matriu3[j] = [];
		for (var l = 0; l < 3; l++) {
			matriu3[j][l] = 0;
		}
	}

	for (rowMa1 = 0; rowMa1 < n; rowMa1++) {
		for (colMa2 = 0; colMa2 < n; colMa2++) {
			for (i = 0; i < n; i++) {

				matriu3[rowMa1][colMa2] += (matriu1[rowMa1][i] * matriu2[i][colMa2]);
				console.log(matriu3);
			}

		}

	}
	return matriu3
}
