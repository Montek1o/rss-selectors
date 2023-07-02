import levelRender from "../levels/level-render";
import { answers } from "./correct-answers";

/* const answers = [
  {
    level: '1',
    answer: 'circle'
  },
  {
    level: '2',
    answer: 'square'
  },
  {
    level: '3',
    answer: '#border'
  },
]
 */
export default function gamePlay(level: string): void {
  const input = document.querySelector('.editor__input') as HTMLInputElement;
  const levelsNumber = document.querySelectorAll('.levels__item');

  if (input.value == answers[Number(level) - 1].answer && level == '10') {
    levelsNumber[Number(level) - 1].classList.add('levels__item-complete');
    localStorage[`level${Number(level)}`] = 'completed';
    levelRender('1');
    input.value = '';
  }

  if (input.value == answers[Number(level) - 1].answer) {
    levelsNumber[Number(level) - 1].classList.add('levels__item-complete');
    localStorage.currentLevel = Number(level) + 1;
    localStorage[`level${Number(level)}`] = 'completed';
    levelRender(`${Number(level) + 1}`);
    input.value = '';
  }
}

/* export default function realizationGame(level: string): void {
  gamePlay(level);
} */

/* export default function realizationGame(level: string): void {
  const input = document.querySelector('.editor__input') as HTMLInputElement;
  const levelsNumber = document.querySelectorAll('.levels__item');

  if (level == '1') {
    if (input.value == 'circle') {
      levelsNumber[0].classList.add('levels__item-complete');
      localStorage.currentLevel = 2;
      localStorage['level1'] = 'completed';
      levelRender('2');
      input.value = '';
    }
  }
  if (level == '2') {
    if (input.value == 'square') {
      levelsNumber[1].classList.add('levels__item-complete');
      localStorage.currentLevel = 3;
      localStorage['level2'] = 'completed';
      levelRender('3');
      input.value = '';
    }
  }
  if (level == '3') {
    if (input.value == '#border') {
      levelsNumber[2].classList.add('levels__item-complete');
      localStorage.currentLevel = 4;
      localStorage['level3'] = 'completed';
      input.value = '';
      levelRender('4');
    }
  }
} */