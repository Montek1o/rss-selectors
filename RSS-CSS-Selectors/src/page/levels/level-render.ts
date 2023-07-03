import help from '../game-play/help';
import { createElem } from '../main/layout/layout';
import { levels } from './data';

function tableRender(levelId: string): void {
  const table = document.querySelector('.game__table') as HTMLElement;
  const level = levels[Number(levelId) - 1].selectors;

  table.innerHTML = '';

  level.forEach((item) => {
    if (item.active === true) {
      const elem = createElem(item.selector, 'active');
      if (item.selectorId) {
        elem.id = item.selectorId;
      }
      if (item.selectorClass) {
        elem.className += ` ${item.selectorClass}`;
      }
      if (item.child) {
        if (item.child.active === true) {
          elem.append(createElem(item.child.selector, 'active'));
        } else {
          elem.append(createElem(item.child.selector));
        }
      }
      return table.append(elem);
    } else {
      const elem = createElem(item.selector);
      if (item.selectorId) {
        elem.id = item.selectorId;
      }
      if (item.selectorClass) {
        elem.className = item.selectorClass;
      }
      if (item.child) {
        if (item.child.active === true) {
          const childElem = createElem(item.child.selector, 'active');
          if (item.child.selectorClass) {
            childElem.className += ` ${item.child.selectorClass}`
          }
          elem.append(childElem);
        } else {
          const childElem = createElem(item.child.selector);
          if (item.child.selectorClass) {
            childElem.className = item.child.selectorClass;
          }
          elem.append(childElem);
        }
      }
      return table.append(elem);
    }
  });
}

function codeRender(): void {
  const htmlViewer = document.querySelector('.html-view-code') as HTMLElement;
  const code = document.querySelector('.game__table') as HTMLElement;
  let spaceCount = 0;
  
  const arrayTegs = code.innerHTML.replace(/>/gi, '*').split('*').slice(0, -1).map((item) => {
    return item = `${item}>`
  });

  for (let i = 0; i < arrayTegs.length; i++) {
    if (arrayTegs[i][1] != '/') {
      spaceCount++;
      arrayTegs[i] = `${'. '.repeat(spaceCount)}${arrayTegs[i]}`;
    } else {
      arrayTegs[i] = `${'. '.repeat(spaceCount)}${arrayTegs[i]}`;
      spaceCount--;
    }
  }

  const tegs = arrayTegs.join('\n').replace(/class="active"/gi, '').replace(/ >/gi, '>').replace(/active /gi, '');

  htmlViewer.innerText = `<div class="table">\n${tegs}\n</div>`;
}

function levelNavigation(levelId: string): void {
  const levelNumber = document.querySelector(`#level-${levelId}`) as HTMLElement;
  const levelsNumber = document.querySelectorAll('.levels__item');

  levelsNumber.forEach(e => {
    e.classList.remove('levels__item-active');
  })
  levelNumber.classList.add('levels__item-active');
}

export default function levelRender(levelId: string): void {
  tableRender(levelId);
  codeRender();
  levelNavigation(levelId);
  help();
}