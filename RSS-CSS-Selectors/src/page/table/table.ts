import { createElem } from "../main/main";

export default function createTable(): void {
  const task = createElem('section', 'task');
  const tasKCondition = createElem('h2', 'task__condition', 'Select the fancy shape');
  const game = createElem('section', 'game');
  const gameTable = createElem('div', 'game__table');
  const main = document.querySelector('main') as HTMLElement;

  task.append(tasKCondition);
  game.append(gameTable);
  main.append(task, game);
}