import { createElem } from "../layout/create-elem";

export default function createHtmlPane(): HTMLElement {
  const container = createElem('div', 'editor__pane html-view');
  const header = createElem('div', 'editor__header');
  const type = createElem('p', 'editor__type', 'HTML Viewer');
  const fileName = createElem('p', 'editor__file-name', 'table.html');
  const main = createElem('div', 'editor__main');
  const lineNumbers = createElem('div', 'editor__line-numbers');
  const code = createElem('div', 'editor__code html-view-code');
  const preTag = createElem('pre');
  const codeTag = createElem('code', 'html');

  for (let i = 1; i <= 20; i++) {
    lineNumbers.append(createElem('p', 'editor__number', i.toString()));
  }

  header.append(type, fileName);
  preTag.append(codeTag);
  code.append(preTag);
  main.append(lineNumbers, code);
  container.append(header, main);

  return container;
}