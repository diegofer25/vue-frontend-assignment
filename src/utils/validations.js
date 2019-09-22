export const hasLetters = (string) => {
  return string.search(/[a-zA-Z]/i) !== -1
}

export const moreThanLimit = (string, limit) => {
  return string.length > limit
}

export const isNumber = (number) => {
  return !Number.isNaN(Number(number))
}

export const isFocused = (element) => {
  return document.activeElement === element
}
