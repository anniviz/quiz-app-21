import getElement from './utils/getElement'

const homePage = getElement('[data-page="home"]')

export default function renderCard(card) {
  const { question, answer, tags } = card
  const tagArray = tags.split(',')

  const cardEl = document.createElement('section')
  cardEl.className = 'quiz-card'
  cardEl.setAttribute('data-js', 'quiz-card')
  cardEl.innerHTML = `
      <h2>${question}</h2>
      <button class="standard-button" data-js="quiz-card-button">
        show answer
      </button>
      <p
        class="js-quiz-card__answer quiz-card__answer hidden"
        data-js="answer"
      >
        ${answer}
      </p>
      <ul data-js="tags" class="quizz-card__tag-list">
      </ul>
      <div
        role="button"
        class="quiz-card__bookmark"
        aria-label="bookmark"
        data-js="bookmark"
      ></div>
      `

  homePage.append(cardEl)

  const tagList = getElement('[data-js="tags"]', cardEl)
  tagArray.forEach(tag => renderTag(tag, tagList))

  const button = getElement('[data-js="quiz-card-button"]', cardEl)
  const answerEl = getElement('[data-js="answer"]', cardEl)
  button.addEventListener('click', () => {
    answerEl.classList.toggle('hidden')
  })
}

function renderTag(tag, list) {
  const tagEl = document.createElement('li')
  tagEl.className = 'quiz-card__tag'
  tagEl.innerText = tag
  list.append(tagEl)
}
