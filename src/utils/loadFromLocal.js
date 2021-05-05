export default function loadFromLocal(key) {
  return JSON.parse(localStorage.getItem(key))
}
