let participants = [];
let eliminatedParticipants = [];

function agregarParticipante() {
    const participantInput = document.getElementById('participant');
    const participantName = participantInput.value.trim();

    if (participantName !== '') {
        participants.push(participantName);
        participantInput.value = '';
        actualizarListaParticipantes();
    }
}



function actualizarListaParticipantes() {
    const participantsList = document.getElementById('participants');
    participantsList.innerHTML = '';
    participants.forEach((participant) => {
        const listItem = document.createElement('li');
        listItem.textContent = participant;
             //crear boton de eliminar
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '';
        deleteButton.addEventListener('click', function (){
            
            //logica para eliminar participantes
            const index = participants.indexOf(participant);
            if (index !== -1){
                participants.splice(index, 1);
                actualizarListaParticipantes(); //actulaizar la lista
            }
        });
        //añadir  el boton al elemento lista
        listItem.appendChild(deleteButton);

        //añadir el elemento de l alista al contenedor de la lista

        participantsList.appendChild(listItem);
    });
}



function seleccionarGanador() {
    const winnerDisplay = document.getElementById('winner');
    if (participants.length === 0) {
        winnerDisplay.style.display = 'none';
        return;
    }

    const ganadorIndex = Math.floor(Math.random() * participants.length);
    const ganador = participants[ganadorIndex];

    document.getElementById('winner-name').textContent = ganador;
    winnerDisplay.style.display = 'block';

    participants = participants.filter((participant, index) => index !== ganadorIndex);
    eliminatedParticipants.push(ganador);
    
    actualizarListaParticipantes();
}

    //Musica

 function init_audio(){
    let audio = new Audio('musica/cancion_saw.mp3');
    console.log(audio);
    audio.volume = 0.05;
   audio.play();
 }

 window.addEventListener('load', init_audio);



 function iniciar() {

    var boton=document.getElementById('boton');
    boton.addEventListener('click', presionar, false);
 }
  function presionar() {
     var audio=document.getElementById('audio');
     audio.play();
     audio.volume = 0.5;

 }
  window.addEventListener('load', iniciar, true);
