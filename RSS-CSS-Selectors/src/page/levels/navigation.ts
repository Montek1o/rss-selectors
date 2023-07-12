import levelRender from './level-render';

export default function navigation(): void {
  const levelsNumber = document.querySelectorAll('.levels__item');
  const input = document.querySelector('.editor__input') as HTMLInputElement;
  
  levelsNumber.forEach(e => {
    e.addEventListener('click', () => {
      const idLevel = e.id.toString().split('-')[1];
      levelRender(idLevel);
      localStorage.setItem('currentLevel', idLevel);
      input.value = '';
    })
  })
}
