export default function resetProgress() {
  const levelsNumber = document.querySelectorAll('.levels__item');
  const levelCount = 10;

  levelsNumber.forEach((item) => {
    item.classList.remove('levels__item-complete');
    item.classList.remove('use-hint');
  })

  for (let i = 1; i <= levelCount; i++) {
    localStorage[`level${i}`] = 'in-progress';
    localStorage[`level${i}-hint`] = 'no';
  }
}