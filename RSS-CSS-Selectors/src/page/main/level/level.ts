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
    level.innerHTML = `<span class="complete-icon"></span>${i.toString()}`;
    /* level.href = `/level-${i}`; */
    level.id = `level-${i.toString()}`;
    levels.append(level);
  }
  
  aside.append(levels, reset);
}