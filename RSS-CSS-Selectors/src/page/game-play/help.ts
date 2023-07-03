import { answers } from "./correct-answers";

export default function help() {
  const helpButton = document.querySelector('.editor__help-button') as HTMLElement;
  const input = document.querySelector('.editor__input') as HTMLInputElement;
  const levelNumbers = document.querySelectorAll('.levels__item');
  
  helpButton.addEventListener('click', function() {
    input.value = '';
    const levelNumber = levelNumbers[Number(localStorage.getItem('currentLevel')) - 1];
    const text = answers[Number(localStorage.getItem('currentLevel')) - 1].answer;

    input.value = text;    
    levelNumber.classList.add('use-hint');
    localStorage[`level${localStorage.getItem('currentLevel')}-hint`] = 'yes';
  })
}