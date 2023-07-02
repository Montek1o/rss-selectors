import createPage from '../main/layout/layout';
import createTable from '../main/table/table';
import createEditor from '../main/editor/editor';
import createLevels from '../main/level/level';
import levelRender from '../levels/level-render';
import navigation from '../levels/level-navigation';

export default function app(): void {
  createPage();
  createTable();
  createEditor();
  createLevels();
  levelRender(localStorage.getItem('currentLevel') as string);
  navigation();
}