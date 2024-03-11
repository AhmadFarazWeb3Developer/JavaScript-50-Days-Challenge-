// Creating a new SpeechSynthesisUtterance object, which represents the text-to-speech synthesis parameters (like voice, pitch, rate, etc.).
let speech = new SpeechSynthesisUtterance();

// Declare an empty array to store available voices.
let voices = [];

let voiceSelect = document.querySelector("select");

// When the list of available voices changes, update the voices array and populate the <select> element with voice options.
window.speechSynthesis.onvoiceschanged = () => {
  // Getting the available voices from the speech synthesis API.
  voices = window.speechSynthesis.getVoices();

  // Setting the voice of the speech utterance to the first voice in the array.
  speech.voice = voices[0];

  // Iterate over each voice in the voices array and create an <option> element for each, then add it to the <select> element.
  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};
voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;

  // Use the speech synthesis API to speak the text with the configured parameters.
  window.speechSynthesis.speak(speech);
});
