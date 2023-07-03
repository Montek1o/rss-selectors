import levelRender from "../levels/level-render";
import resetProgress from "./reset-progress";

export default function winGame() {
  if (localStorage.getItem('level1') == 'completed' 
  && localStorage.getItem('level2') == 'completed' 
  && localStorage.getItem('level3') == 'completed' 
  && localStorage.getItem('level4') == 'completed' 
  && localStorage.getItem('level5') == 'completed' 
  && localStorage.getItem('level6') == 'completed' 
  && localStorage.getItem('level7') == 'completed' 
  && localStorage.getItem('level8') == 'completed' 
  && localStorage.getItem('level9') == 'completed'  
  && localStorage.getItem('level10') == 'completed') {
    const container = document.querySelector('.win') as HTMLElement;
    const popup = document.querySelector('.popup') as HTMLElement;
    const restartButton = document.querySelector('.restart-button') as HTMLElement;
    
    container.classList.add('win-active');
    popup.classList.add('popup-active');
    document.body.style.overflow = 'hidden';

    restartButton.addEventListener('click', () => {
      container.classList.remove('win-active');
      popup.classList.remove('popup-active');
      document.body.style.overflow = '';
      localStorage.currentLevel = 1;
      resetProgress();
      levelRender('1');
    })
  }
}