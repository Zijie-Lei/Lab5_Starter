// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  var voices = [];
  var voice_list = document.querySelector('select');
  var synth = window.speechSynthesis;
  var img = document.querySelector('img')
  
  setTimeout(() => {
    voices = synth.getVoices();
    add_voice();
  }, 100);

  function add_voice() {
    for(var i = 0; i < voices.length ; i++) {
      var option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

      if(voices[i].default) {
        option.textContent += ' -- DEFAULT';
      }

      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voice_list.appendChild(option);
    }
  }
  synth.getVoices();

  var txt = document.querySelector('textarea');
  var button = document.querySelector('button');

  button.addEventListener('click', speak)

  function speak() {
    var utter = new SpeechSynthesisUtterance(txt.value);
    var selectedOption = voice_list.selectedOptions[0].getAttribute('data-name');

    for(var i = 0; i < voices.length ; i++) {
      if(voices[i].name === selectedOption) {
        utter.voice = voices[i];
      }
    }
    synth.speak(utter);
    img.src = 'assets/images/smiling-open.png'
    if_speaking();
    
    
  }

  function if_speaking(){
    if(synth.speaking == false){
      img.src = 'assets/images/smiling.png';
      return;
    }
    setTimeout(() => {
      if_speaking();
    }, 20);
  }
  
}