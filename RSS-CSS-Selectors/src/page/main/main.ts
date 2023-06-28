export function createElem(elem: string, className?: string, text?: string): HTMLElement {
  const element = document.createElement(elem);

  if (className) {
    element.className = className;
  }
  if (text) {
    element.innerText = text;
  }

  return element;
}

export default function createPage(): void {
  const body = document.body;
  const leftColumn = createElem('div', 'left-column');
  const rightColumn = createElem('div', 'right-column');
  const header = createElem('header', 'header');
  const title = createElem('h1', 'header__title', 'CSS Shape');
  const main = createElem('main');
  const footer = createElem('footer');

  header.append(title);
  leftColumn.append(header, main, footer);
  body.append(leftColumn, rightColumn);
}