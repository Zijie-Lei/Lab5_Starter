// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {

  function show_horn() {
    var img = document.querySelector('img');
    if(horn.value == 'air-horn') {
      img.src = "assets/images/air-horn.svg";
      aud.src='assets/audio/air-horn.mp3';
      img.removeAttribute('alt');
    } else if(horn.value == 'party-horn') {
      img.src = "assets/images/party-horn.svg";
      img.removeAttribute('alt');
      aud.src='assets/audio/party-horn.mp3';
    } else if(horn.value == 'car-horn') {
      img.src = "assets/images/car-horn.svg";
      img.removeAttribute('alt');
      aud.src='assets/audio/car-horn.mp3';
    }
  }

  function change_volumn(){
    if(volume.value == 0) {
      icon.src = "assets/icons/volume-level-0.svg";
    }
    else if(volume.value < 33) {
      icon.src = "assets/icons/volume-level-1.svg";
    }
    else if(volume.value < 67){
      icon.src = "assets/icons/volume-level-2.svg";
    }
    else if(volume.value > 66){
      icon.src = "assets/icons/volume-level-3.svg";
    }
    aud.volume = volume.value / 100;
  }

  function play_sound() {
    
    aud.play();
    if(horn.value == 'party-horn' && volume.value != 0) {
      jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
     })
    }
  }

  const horn = document.getElementById('horn-select');
  const aud = document.querySelector('audio');
  const volume = document.querySelector('input');
  const icon = document.querySelector('div img');
  const play = document.querySelector('button');
  const jsConfetti = new JSConfetti()
  


  volume.addEventListener("input", change_volumn);
  horn.addEventListener("change",show_horn);
  play.addEventListener("click", play_sound);
}