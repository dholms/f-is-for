export const aOrAn = (letter: string): string => {
  const vowels = ['a', 'e', 'f', 'h', 'i', 'l', 'm', 'n', 'o', 'r', 's', 'x']
  return vowels.indexOf(letter.toLowerCase()) > 0 ? 'an' : 'a'
}

export const isString = (val: any): val is string => {
  return typeof val === 'string'
}
