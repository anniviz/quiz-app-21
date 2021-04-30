import setupNavigation from './setupNavigation'
import getElement from './utils/getElement'

const buttonAnswer = getElement('.js-button-answer')
const buttonDarkMode = getElement('.js-button-darkmode')

const bookmark = getElement('.js-quiz-card > div')
const answer = getElement('.js-quiz-card__answer')
const body = getElement('body')

setupNavigation()

buttonAnswer.addEventListener('click', () => {
  answer.classList.toggle('hidden')
})

bookmark.addEventListener('click', () => {
  bookmark.classList.toggle('quiz-card__bookmark--selected')
})

buttonDarkMode.addEventListener('click', () => {
  body.classList.toggle('darkmode')
})
