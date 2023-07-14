import levelRender from "../levels/level-render";
import resetProgress from "./reset-progress";

export default function winGame() {
  const stateLevels = [localStorage.getItem('level1'), localStorage.getItem('level2'), localStorage.getItem('level3'), localStorage.getItem('level4'), localStorage.getItem('level5'), localStorage.getItem('level6'), localStorage.getItem('level7'), localStorage.getItem('level8'), localStorage.getItem('level9'), localStorage.getItem('level10')];
  
  function isCompleted(element: string): boolean {
    return element == 'completed';
  }

  if ((stateLevels as Array<string>).every(isCompleted)) {
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