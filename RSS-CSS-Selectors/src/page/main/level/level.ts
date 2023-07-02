import { createElem } from "../layout/layout";

export default function createLevels(): void {
  const aside = document.querySelector('.right-column') as HTMLElement;
  const levels = createElem('section', 'levels');
  const title = createElem('h2', 'levels__title', 'Level');
  const reset = createElem('a', 'reset-button', 'Reset progress');
  const countLevels = 10;

  levels.append(title);

  for (let i = 1; i <= countLevels; i++) {
    const level = createElem('a', 'levels__item') as HTMLLinkElement;
    if (localStorage[`level${i}`] == 'completed') {
      const icon = createElem('span', 'complete-icon_completed') as HTMLElement;
      level.innerHTML = `${i.toString()}`;
      level.prepend(icon);
      level.id = `level-${i.toString()}`;
      levels.append(level);
    } else {
      const icon = createElem('span', 'complete-icon') as HTMLElement;
      level.innerHTML = `${i.toString()}`;
      level.prepend(icon);
      level.id = `level-${i.toString()}`;
      levels.append(level);
    }

    if (!localStorage[`level${i}`]) {
      localStorage.setItem(`level${i}`, 'in-progress');
    }
  }
  if (!localStorage.currentLevel) {
    localStorage.setItem(`currentLevel`, '1');
  }
  
  aside.append(levels, reset);
}