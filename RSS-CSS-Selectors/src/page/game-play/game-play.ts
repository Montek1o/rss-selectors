import levelRender from "../levels/level-render";
import { answers } from "./correct-answers";
import winGame from "./win-game";

export default function gamePlay(level: string): void {
  const input = document.querySelector('.editor__input') as HTMLInputElement;
  const levelsNumber = document.querySelectorAll('.levels__item');
  
  if (input.value == answers[Number(level) - 1].answer && level == '10') {
    levelsNumber[Number(level) - 1].classList.add('levels__item-complete');
    localStorage[`level${Number(level)}`] = 'completed';
    levelRender('1');
    input.value = '';
    winGame();
  }

  if (input.value == answers[Number(level) - 1].answer) {
    levelsNumber[Number(level) - 1].classList.add('levels__item-complete');
    localStorage.currentLevel = Number(level) + 1;
    localStorage[`level${Number(level)}`] = 'completed';
    levelRender(`${Number(level) + 1}`);
    input.value = '';
    winGame();
  }
}