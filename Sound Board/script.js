const sounds = ['applause', 'tada', 'racer', 'ding', 'siren'];

sounds.forEach(mp3File => {

    const btn = document.createElement('button')
    btn.classList.add('bts')

   btn.innerHTML = mp3File;

    btn.addEventListener('click', ()=>{

        stopMusic();
        document.getElementById(mp3File).play();
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopMusic(){
    sounds.forEach(mp3File => {
        const song = document.getElementById(mp3File);

        song.pause()
        song.currentTime = 0;
    })
};