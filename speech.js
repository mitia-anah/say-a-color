import { handleResult } from './handlers';
import { colorByLength, isDark } from './colors';

const colorsEl = document.querySelector('.colors');

function displayColors(colors) {
    return colors.map(
        color => `
            <span class="color ${color} ${isDark(color) ? 'dark' : ''}" style="background: ${color}">
            ${color}</span>
    `).join('');
}

window.SpeechRecognition = window.SpeechRecognition ||
    window.webkitSpeechRecognition;

function start() {
    if (!('SpeechRecognition' in window)) {
        console.log('Sorry your browser does not support speech reco.');
        return;
    }
    console.log('starting...');
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.onresult = handleResult;
    console.log(recognition);
    recognition.start();
}
start();

colorsEl.innerHTML = displayColors(colorByLength);