import getElement from './utils/getElement'

export default function setupQuizCards() {
  const buttonAnswer = getElement('.js-button-answer')
  const answer = getElement('.js-quiz-card__answer')

  buttonAnswer.addEventListener('click', () => {
    answer.classList.toggle('hidden')
  })
}
