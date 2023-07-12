import { createElem } from "../layout/create-elem";
import createCssPane from "./create-css-pane";
import createHtmlPane from "./create-html-pane";

export default function createEditor(): void {
  const main = document.querySelector('main') as HTMLElement;
  const editor = createElem('section', 'editor');
  const cssPane = createCssPane();
  const htmlPane = createHtmlPane();

  editor.append(cssPane, htmlPane);
  main.append(editor);
}