let speech = new SpeechSynthesisUtterance();

let listen = document.getElementById('listen');

let voices = [];

let voiceSelect = document.getElementById("languageSelect");

window.speechSynthesis.onvoiceschanged = () =>{
  voices =  window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));

};

voiceSelect.addEventListener("change" ,() =>{
  speech.voice = voices[voiceSelect.value];
})



listen.addEventListener("click",() =>{
let text = document.getElementById('Text').value;
audioconverter(text);
})

function audioconverter(text){
    speech.text = text;

    window.speechSynthesis.speak(speech);
}