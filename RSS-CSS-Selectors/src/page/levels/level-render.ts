import help from '../game-play/help';
import codeRender from './code-render';
import selectLevel from './select-level';
import tableRender from './table-render';

export default function levelRender(levelId: string): void {
  tableRender(levelId);
  codeRender();
  selectLevel(levelId);
  help();
}