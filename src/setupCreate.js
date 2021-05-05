import getElement from './utils/getElement'

export default function setupCreate() {
  const form = getElement('[data-form]')

  form.addEventListener('submit', handleSubmit)

  function handleSubmit(event) {
    event.preventDefault()

    const { question, answer, tags } = form.elements

    const newCard = {
      question: question.value,
      answer: answer.value,
      tags: tags.value,
    }

    console.log(newCard)
  }
}
