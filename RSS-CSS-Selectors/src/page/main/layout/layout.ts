import git from '../../../assets/git.png';
import rss from '../../../assets/rss.jpg';

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
  const title = createElem('h1', 'header__title', 'CSS Training');
  const main = createElem('main');
  const footer = createElem('footer', 'footer');
  const linkGit = createElem('a') as HTMLLinkElement;
  const imageGit = createElem('img', 'github-image') as HTMLImageElement;
  const year = createElem('p', 'year', '©️ 2023')
  const linkRss = createElem('a') as HTMLLinkElement;
  const imageRss = createElem('img', 'rss-image') as HTMLImageElement;

  linkGit.href = 'https://github.com/Montek1o';
  linkRss.href = 'https://rs.school/js/';
  linkGit.setAttribute('target', '_blank');
  linkRss.setAttribute('target', '_blank');

  imageGit.src = `${git}`;
  imageRss.src = `${rss}`;
  imageGit.alt = 'github';
  imageRss.alt = 'rss-school';

  header.append(title);
  linkGit.append(imageGit);
  linkRss.append(imageRss);
  footer.append(linkGit, year, linkRss);
  leftColumn.append(header, main, footer);
  body.append(leftColumn, rightColumn);
}