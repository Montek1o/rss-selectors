import app from './page/app/app';
import './page/main/layout/layout.css';
import './page/main/table/table.css';
import './page/main/editor/editor.css';
import './page/main/level/level.css';
import gamePlay from './page/game-play/game-play';
import resetProgress from './page/game-play/reset-progress';

app();

const enter = document.querySelector('.editor__enter') as HTMLElement;
const reset = document.querySelector('.reset-button') as HTMLElement;

enter.addEventListener('click', e => {
  gamePlay(localStorage.getItem('currentLevel') as string);
  return e;
});

reset.addEventListener('click', e => {
  resetProgress();
  return e;
})

