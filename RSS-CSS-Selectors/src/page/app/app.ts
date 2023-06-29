import createPage from '../main/main';
import createTable from '../table/table';
import createEditor from '../editor/editor';
import createLevels from '../levels/levels';

export default function app(): void {
  createPage();
  createTable();
  createEditor();
  createLevels();
}