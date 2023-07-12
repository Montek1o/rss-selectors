import { createElem } from "../layout/create-elem";

export default function createLevels(): void {
  const aside = document.querySelector('.right-column') as HTMLElement;
  const levels = createElem('section', 'levels');
  const title = createElem('h2', 'levels__title', 'Level');
  const reset = createElem('a', 'reset-button', 'Reset progress');
  const countLevels = 10;

  levels.append(title);

  for (let i = 1; i <= countLevels; i++) {
    const level = createElem('a', 'levels__item') as HTMLLinkElement;
    const icon = createElem('span', 'complete-icon') as HTMLElement;

    switch (localStorage[`level${i}`]) {
      case 'completed':
        level.classList.add('levels__item-complete');
        break;
      case undefined:
        localStorage.setItem(`level${i}`, 'in-progress');
        break;
    }

    switch (localStorage[`level${i}-hint`]) {
      case 'yes':
        level.classList.add('use-hint');
        break;
      case undefined:
        localStorage.setItem(`level${i}-hint`, 'no');
        break;
    }

    level.innerHTML = `${i.toString()}`;
    level.prepend(icon);
    level.id = `level-${i.toString()}`;
    levels.append(level);
  }
  
  if (!localStorage.currentLevel) {
    localStorage.setItem(`currentLevel`, '1');
  }
  
  aside.prepend(levels, reset);
}