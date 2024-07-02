export function sortArrayByKey(array, key) {
  return array.sort((a, b) => (a[key] > b[key] ? 1 : -1))
}

export function debounce(func, wait) {
  let timeout
  return function (...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}
