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
    console.log(tagList)
    tagArray.forEach(tag => renderTag(tag, tagList))
  }

  function renderTag(tag, list) {
    const tagEl = document.createElement('li')
    tagEl.className = 'quiz-card__tag'
    tagEl.innerText = tag
    list.append(tagEl)
  }

  function loadFromLocal(key) {
    return JSON.parse(localStorage.getItem(key))
  }
}
