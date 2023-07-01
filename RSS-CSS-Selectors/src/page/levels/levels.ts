import { createElem } from "../main/main";

export default function createLevels(): void {
  const aside = document.querySelector('.right-column') as HTMLElement;
  const levels = createElem('section', 'levels');
  const title = createElem('h2', 'levels__title', 'Level');
  const reset = createElem('a', 'reset-button', 'Reset progress');
  let level;

  levels.append(title);
  
  for (let i = 1; i <= 10; i++) {
    level = createElem('a', 'levels__item');
    level.innerHTML = `<span class="complete-icon"></span>${i.toString()}`;
    levels.append(level);
  }
  
  aside.append(levels, reset);
}