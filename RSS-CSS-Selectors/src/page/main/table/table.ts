import { createElem } from "../layout/layout";

export default function createTable(): void {
  const main = document.querySelector('main') as HTMLElement;
  const task = createElem('section', 'task');
  const taskCondition = createElem('h2', 'task__condition', 'Select the highlighted item');
  const game = createElem('section', 'game');
  const gameTable = createElem('div', 'game__table');

  task.append(taskCondition);
  game.append(gameTable);
  main.append(task, game);
}