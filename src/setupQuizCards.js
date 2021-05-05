import renderCard from './renderCard'
import loadFromLocal from './utils/loadFromLocal'

export default function setupQuizCards() {
  const cards = loadFromLocal('cards') ?? []

  cards.forEach(renderCard)
}
