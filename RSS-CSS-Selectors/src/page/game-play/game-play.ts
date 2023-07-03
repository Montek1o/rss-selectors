import levelRender from "../levels/level-render";
import { answers } from "./correct-answers";
import winGame from "./win-game";

export default function gamePlay(level: string): void {
  const input = document.querySelector('.editor__input') as HTMLInputElement;
  const levelsNumber = document.querySelectorAll('.levels__item');
  const activeItem = document.querySelectorAll('.active');
  const cssPane = document.querySelector('.css-view .editor__code') as HTMLElement;
  
  if (input.value == answers[Number(level) - 1].answer && level == '10') {
    levelsNumber[Number(level) - 1].classList.add('levels__item-complete');
    localStorage[`level${Number(level)}`] = 'completed';
    localStorage.currentLevel = 1;
    input.value = '';

    activeItem.forEach((e) => {
      e.classList.add('correct');
    })
    
    winGame();
    setTimeout(
      () => levelRender('1'),
      1000,
    );
  } else {
    cssPane.classList.add('incorrect-answer');
    setTimeout(
      () => cssPane.classList.remove('incorrect-answer'),
      500,
    );
  }

  if (input.value == answers[Number(level) - 1].answer) {
    levelsNumber[Number(level) - 1].classList.add('levels__item-complete');
    localStorage.currentLevel = Number(level) + 1;
    localStorage[`level${Number(level)}`] = 'completed';
    input.value = '';

    activeItem.forEach((e) => {
      e.classList.add('correct');
    })
    
    winGame();
    setTimeout(
      () => levelRender(`${Number(level) + 1}`),
      1000,
    );
  } else {
    cssPane.classList.add('incorrect-answer');
    setTimeout(
      () => cssPane.classList.remove('incorrect-answer'),
      500,
    );
  }
}