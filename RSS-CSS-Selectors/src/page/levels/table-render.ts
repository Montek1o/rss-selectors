import { createElem } from '../main/layout/create-elem';
import { levels } from './data';

export default function tableRender(levelId: string): void {
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