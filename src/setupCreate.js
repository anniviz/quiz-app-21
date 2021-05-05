import renderCard from './renderCard'
import getElement from './utils/getElement'
import loadFromLocal from './utils/loadFromLocal'

export default function setupCreate() {
  const form = getElement('[data-form]')

  const cards = loadFromLocal('cards') ?? []

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
}
