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