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

    // Elimina al ganador de la lista de participantes y lo agrega a la lista de eliminados
    participants = participants.filter((participant, index) => index !== ganadorIndex);
    eliminatedParticipants.push(ganador);
    
    actualizarListaParticipantes();
}
