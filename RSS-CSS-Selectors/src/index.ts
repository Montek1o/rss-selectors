import app from './page/app/app';
import gamePlay from './page/game-play/game-play';
import resetProgress from './page/game-play/reset-progress';
import './page/main/layout/layout.css';
import './page/main/table/table.css';
import './page/main/editor/editor.css';
import './page/main/level/level.css';
import './page/game-play/win-game.css';

app();

const enter = document.querySelector('.editor__enter') as HTMLElement;
const reset = document.querySelector('.reset-button') as HTMLElement;

enter.addEventListener('click', () => {
  gamePlay(localStorage.getItem('currentLevel') as string);
});

reset.addEventListener('click', () => {
  resetProgress();
})

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    enter.classList.add('editor__enter-active');
    gamePlay(localStorage.getItem('currentLevel') as string);
  }
});

document.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    enter.classList.remove('editor__enter-active');
  }
});

