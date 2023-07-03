import { createElem } from "../layout/layout";

function createCssPane(): HTMLElement {
  const container = createElem('div', 'editor__pane css-view');
  const header = createElem('div', 'editor__header');
  const type = createElem('p', 'editor__type', 'CSS Editor');
  const fileName = createElem('p', 'editor__file-name', 'style.css');
  const main = createElem('div', 'editor__main');
  const lineNumbers = createElem('div', 'editor__line-numbers');
  const code = createElem('div', 'editor__code');
  const codeEntry = createElem('div', 'editor__entry');
  const input = createElem('input', 'editor__input');
  const enter = createElem('div', 'editor__enter', 'enter');
  const help = createElem('div', 'editor__help-button', 'help');
  const codeHelp = createElem('div', 'editor__help');

  input.setAttribute('placeholder', 'Type in a CSS selector');
  codeHelp.innerHTML = '{<br>/* Styles would go here. */<br>}';

  for (let i = 1; i <= 20; i++) {
    lineNumbers.append(createElem('p', 'editor__number', i.toString()));
  }

  header.append(type, fileName);
  codeEntry.append(input, help, enter);
  code.append(codeEntry, codeHelp);
  main.append(lineNumbers, code);
  container.append(header, main);

  return container;
}

function createHtmlPane(): HTMLElement {
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

export default function createEditor(): void {
  const main = document.querySelector('main') as HTMLElement;
  const editor = createElem('section', 'editor');
  const cssPane = createCssPane();
  const htmlPane = createHtmlPane();

  editor.append(cssPane, htmlPane);
  main.append(editor);
}