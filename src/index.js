import setupDarkmode from './setupDarkmode'
import setupNavigation from './setupNavigation'
import getElement from './utils/getElement'

const buttonAnswer = getElement('.js-button-answer')

const bookmark = getElement('.js-quiz-card > div')
const answer = getElement('.js-quiz-card__answer')

setupNavigation()
setupDarkmode()

buttonAnswer.addEventListener('click', () => {
  answer.classList.toggle('hidden')
})

bookmark.addEventListener('click', () => {
  bookmark.classList.toggle('quiz-card__bookmark--selected')
})
