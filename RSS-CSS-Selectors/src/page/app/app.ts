import createPage from '../main/main';
import createTable from '../table/table';
import createEditor from '../editor/editor';

export default function app(): void {
  createPage();
  createTable();
  createEditor();
}