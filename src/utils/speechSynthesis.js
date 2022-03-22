const synth = window.speechSynthesis;

export let voices = [];

const populateVoiceList = () => {
  if (typeof synth === 'undefined') {
    console.error('speechSynthesis is not defined');
    return;
  }

  voices = synth.getVoices();

  voices.forEach((voice, i) => {
    const option = document.createElement('option');
    option.textContent = `${voice.name} (${voice.lang})`;

    if (voice.default) {
      option.textContent += ' -- DEFAULT';
    }

    option.value = i;
    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
  });
};

populateVoiceList();
if (synth.onvoiceschanged !== undefined) {
  synth.onvoiceschanged = populateVoiceList;
}

export const speakText = (text) => {
  const utterThis = new SpeechSynthesisUtterance(text);
  utterThis.voice = voices[0];
  synth.speak(utterThis);
};
