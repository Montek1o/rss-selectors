import { answers } from "./correct-answers";

export default function help() {
  const helpButton = document.querySelector('.editor__help-button') as HTMLElement;
  const input = document.querySelector('.editor__input') as HTMLInputElement;

  helpButton.addEventListener('click', function() {
    input.value = '';
    const text = answers[Number(localStorage.getItem('currentLevel')) - 1].answer;
    const textSymbols = text.split('');
    console.log(text.split(''));

    for (let i = 0; i < textSymbols.length; i++) {
      input.value += text[i];
    }
  })
}