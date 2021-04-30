import getElement from './utils/getElement'

export default function setupBookmarks() {
  const bookmark = getElement('[data-quiz-card] > div')
  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('quiz-card__bookmark--selected')
  })
}
