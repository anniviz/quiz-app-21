import getElement from './utils/getElement'

export default function setupBookmarks() {
  const bookmark = getElement('.js-quiz-card > div')
  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('quiz-card__bookmark--selected')
  })
}
