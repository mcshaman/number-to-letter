/**
 * Module Dependencies
 */

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      BASE = ALPHABET.length

/**
 * Alpha
 *
 * @param {Number} pNumber - Number
 * @param {boolean} pLowerCase - Lowercase
 * @return {String}
 */

module.exports = function ntol(pNumber, pLowerCase) {
    let alphabet = ALPHABET
    if (pLowerCase) {
        alphabet = ALPHABET.toLowerCase()
    }

    const digits = []
    let number = pNumber
    while (number >= 0) {
        digits.push(number % BASE)
        number = Math.floor(number / BASE) - 1
    }

    return digits.map(pDigit => alphabet[pDigit]).reverse().join('')
}
