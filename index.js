// Monitorando e execuntando o evento keyup
document.body.addEventListener('keyup', (event)=>{
    playSound(event.code.toLocaleLowerCase());
});

document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value;

    if(song !== '') {
        let songArray = song.split('');
        playComposition(songArray)
    }
})
// Função para tocar oo som 
function playSound(sound) {
// Sons que devem ser tocados
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if(keyElement) {
        keyElement.classList.add('active')

        setTimeout(()=>{
            keyElement.classList.remove('active')
        }, 300)
    }
}
// Função para tocar a composição
function playComposition(songArray) {
    let wait = 0;

    for(let songItem of songArray) {
        setTimeout(()=>{
            playSound(`key${songItem}`);
        }, wait);

        wait += 250;
        
    }
}