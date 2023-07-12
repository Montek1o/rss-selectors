export default function selectLevel(levelId: string): void {
  const levelNumber = document.querySelector(`#level-${levelId}`) as HTMLElement;
  const levelsNumber = document.querySelectorAll('.levels__item');

  levelsNumber.forEach(e => {
    e.classList.remove('levels__item-active');
  })
  levelNumber.classList.add('levels__item-active');
}