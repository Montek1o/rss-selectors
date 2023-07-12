export default function codeRender(): void {
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