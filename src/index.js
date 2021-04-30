import setupBookmarks from './setupBookmarks'
import setupDarkmode from './setupDarkmode'
import setupNavigation from './setupNavigation'
import getElement from './utils/getElement'

const buttonAnswer = getElement('.js-button-answer')

const answer = getElement('.js-quiz-card__answer')

setupNavigation()
setupBookmarks()
setupDarkmode()

buttonAnswer.addEventListener('click', () => {
  answer.classList.toggle('hidden')
})
