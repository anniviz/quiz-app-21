import getElement from './utils/getElement'
import getAllElements from './utils/getAllElements'

export default function setupQuizCards() {
  const quizCards = getAllElements('[data-js="quiz-card"]')

  quizCards.forEach(card => {
    const button = getElement('[data-js="quiz-card-button"]', card)
    const answer = getElement('[data-js="answer"]', card)
    button.addEventListener('click', () => {
      answer.classList.toggle('hidden')
    })
  })
}
