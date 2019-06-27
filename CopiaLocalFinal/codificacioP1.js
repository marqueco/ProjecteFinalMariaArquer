/**
 * 
 */

function vectorToMatrix () {
	var vectorMessage = inputMessage;
	var matriu = [[vectorMessage[0], vectorMessage[1], vectorMessage[2]], [vectorMessage[3],vectorMessage[4],vectorMessage[5]], [vectorMessage[6],vectorMessage[7],vectorMessage[8]]]; 
	
	return "La matriu donada es " + "<br>" + matriu[0] + "<br>" + matriu[1] + "<br>" + matriu[2]
	
	}

function testID () {
	var vectorMessage = inputMessage;
	var nomsParticipants = ["Marc Formador","Maria Arquer","Pepi Balmaña","Gerard Barbero","Lionel Cioffi","Carlos Fabian","Joan Gonzalez","Jose Juarez","Montse Monclus","Javier Narciandi","Nuria Perez","Guillermo Rincon","Javi Sastre","Roger Sobrino"];
	if (vectorMessage.length != 10){
		return -1;
	}
	var p = vectorMessage[9];
	
	return "L'autor d'aquesta matriu es " + nomsParticipants[p]
}


