import getElement from './utils/getElement'

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

    cards.push(newCard)
    localStorage.setItem('cards', JSON.stringify(cards))

    console.log(cards)
    form.reset()
  }

  function loadFromLocal(key) {
    return JSON.parse(localStorage.getItem(key))
  }
}
