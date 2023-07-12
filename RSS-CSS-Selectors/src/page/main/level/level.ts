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

    if (localStorage[`level${i}`] == 'completed') {
      level.classList.add('levels__item-complete');
    }

    level.innerHTML = `${i.toString()}`;
    level.prepend(icon);
    level.id = `level-${i.toString()}`;
    levels.append(level);

    if (!localStorage[`level${i}`]) {
      localStorage.setItem(`level${i}`, 'in-progress');
    }

    if (!localStorage[`level${i}-hint`]) {
      localStorage.setItem(`level${i}-hint`, 'no');
    } 

    if (localStorage[`level${i}-hint`] === 'yes') {
      level.classList.add('use-hint');
    }
  }
  if (!localStorage.currentLevel) {
    localStorage.setItem(`currentLevel`, '1');
  }
  
  aside.prepend(levels, reset);
}