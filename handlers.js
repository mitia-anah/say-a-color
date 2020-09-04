import { isValidColor } from './colors';

function logWords(results) {
    console.log(results[results.length - 1][0].transcript);
}

export function handleResult({ results }) {
    logWords(results);
    const words = results[results.length - 1][0].transcript;
    console.log(words);
    // lowerCase everyThing
    let color = words.toLowerCase();
    // Strip any spaces out
    color = color.replace(/\s/g, '');
    if (!isValidColor(color)) return;
    //check if it as valid color
    const colorSpan = document.querySelector(`.${color}`);
    console.log(colorSpan);
    colorSpan.classList.add('got');
    document.body.style.background = color;
}