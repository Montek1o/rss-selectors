import git from '../../../assets/git.png';
import rss from '../../../assets/rss.jpg';
import { createElem } from './create-elem';

export default function createPage(): void {
  const body = document.body;
  const leftColumn = createElem('div', 'left-column');
  const rightColumn = createElem('aside', 'right-column');
  const header = createElem('header', 'header');
  const title = createElem('h1', 'header__title', 'CSS Training');
  const main = createElem('main');
  const winGame = createElem('section', 'win');
  const popup = createElem('div', 'popup');
  const popupTitle = createElem('h2', 'popup__title', 'You have passed the game');
  const restartButton = createElem('a', 'restart-button', 'Restart');
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
  popup.append(popupTitle, restartButton);
  winGame.append(popup);
  main.append(winGame);
  linkGit.append(imageGit);
  linkRss.append(imageRss);
  footer.append(linkGit, year, linkRss);
  leftColumn.append(header, main, footer);
  body.append(leftColumn, rightColumn);
}