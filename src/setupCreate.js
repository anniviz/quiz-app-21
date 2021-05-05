import getElement from './utils/getElement'

export default function setupCreate() {
  const form = getElement('[data-form]')
  const homePage = getElement('[data-page="home"]')
  const cards = loadFromLocal('cards') ?? []

  cards.forEach(renderCard)

  form.addEventListener('submit', handleSubmit)

  function handleSubmit(event) {
    event.preventDefault()

    const { question, answer, tags } = form.elements

    const newCard = {
      question: question.value,
      answer: answer.value,
      tags: tags.value,
    }

    renderCard(newCard)

    cards.push(newCard)
    localStorage.setItem('cards', JSON.stringify(cards))

    form.reset()
  }

  function renderCard(card) {
    const { question, answer, tags } = card
    const tagArray = tags.split(',')
    console.log(tagArray)

    const cardEl = document.createElement('section')
    cardEl.className = 'quiz-card'
    cardEl.innerHTML = `
      <h2>${question}</h2>
      <button class="standard-button" data-js="quiz-card-button">
        show answer
      </button>
      <p
        class="js-quiz-card__answer quiz-card__answer"
        data-js="answer"
      >
        ${answer}
      </p>
      <ul>
        <li class="quiz-card__tag">#tag 1</li>
        <li class="quiz-card__tag">#tag 2</li>
        <li class="quiz-card__tag">#tag 3</li>
      </ul>
      <div
        role="button"
        class="quiz-card__bookmark"
        aria-label="bookmark"
        data-js="bookmark"
      ></div>
      `

    homePage.append(cardEl)
  }

  function loadFromLocal(key) {
    return JSON.parse(localStorage.getItem(key))
  }
}
