/**
 * 
 */


function testID () {
	var vectorMessage = inputMessage;
	var nomsParticipants = ["Marc Formador","Maria Arquer","Pepi Balmaña","Gerard Barbero","Lionel Cioffi","Carlos Fabian","Joan Gonzalez","Jose Juarez","Montse Monclus","Javier Narciandi","Nuria Perez","Guillermo Rincon","Javi Sastre","Roger Sobrino"];
	if (vectorMessage.length != 10){
		return -1;
	}
	var p = vectorMessage[9];
	
	return "L'autor d'aquesta matriu es " + nomsParticipants[p]
}


