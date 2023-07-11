import levelRender from "../levels/level-render";
import { answers } from "./correct-answers";
import winGame from "./win-game";

export default function gamePlay(level: string): void {
  const input = document.querySelector('.editor__input') as HTMLInputElement;
  const levelsNumber = document.querySelectorAll('.levels__item');
  const activeItem = document.querySelectorAll('.active');
  const cssPane = document.querySelector('.css-view .editor__code') as HTMLElement;
  
  if (input.value == answers[+level - 1].answer) {
    levelsNumber[+level - 1].classList.add('levels__item-complete');
    localStorage[`level${+level}`] = 'completed';
    input.value = '';
    
    activeItem.forEach((e) => {
      e.classList.add('correct');
    })
    
    winGame();
    
    if (level == '10') {
      localStorage.currentLevel = 1;
      setTimeout(
        () => levelRender(`1`),
        1000,
      );
    } else {
      localStorage.currentLevel = +level + 1;
      setTimeout(
        () => levelRender(`${+level + 1}`),
        1000,
      );
    }
  } else {
    cssPane.classList.add('incorrect-answer');
    setTimeout(
      () => cssPane.classList.remove('incorrect-answer'),
      500,
    );
  }
}