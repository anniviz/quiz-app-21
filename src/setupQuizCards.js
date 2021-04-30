import getElement from './utils/getElement'
import getAllElements from './utils/getAllElements'

export default function setupQuizCards() {
  const quizCards = getAllElements('[data-quiz-card]')

  quizCards.forEach(card => {
    const button = getElement('[data-quiz-card-button]', card)
    const answer = getElement('[data-answer]', card)
    button.addEventListener('click', () => {
      answer.classList.toggle('hidden')
    })
  })

  //   buttonsAnswer.forEach(button => {
  //     const answer = getElement('[data-answer]', button)
  //     // const answer = button.querySelector('.js-quiz-card__answer')
  //     console.log(answer)
  //     button.addEventListener('click', () => {
  //       answer.classList.toggle('hidden')
  //     })
  //   })
}
