const assert = require('assert'),
    ntol = require('./')

describe('When converting a number to letters', () => {
    it('0 should equal "A"', () => assert.equal(ntol(0, false), 'A'))
    it('25 should equal "Z"', () => assert.equal(ntol(25, false), 'Z'))
    it('26 should equal "AA"', () => assert.equal(ntol(26, false), 'AA'))
    it('51 should equal "AZ"', () => assert.equal(ntol(51, false), 'AZ'))
    it('52 should equal "BA"', () => assert.equal(ntol(52, false), 'BA'))
    it('676 should equal "ZA"', () => assert.equal(ntol(676, false), 'ZA'))
    it('701 should equal "ZZ"', () => assert.equal(ntol(701, false), 'ZZ'))
    it('702 should equal "AAA"', () => assert.equal(ntol(702, false), 'AAA'))
})

describe('Considering the lowerCase argument', () => {
    it('passing no value should return uppercase letters', () => {
        const letter = ntol(0),
            upperCase = letter === letter.toUpperCase()
        
        assert.equal(upperCase, true)
    })
    it('passing a falsy value should return uppercase letters', () => {
        const letter = ntol(0, ''),
            upperCase = letter === letter.toUpperCase()
        
        assert.equal(upperCase, true)
    })
    it('passing a truthy value should return lowercase letters', () => {
        const letter = ntol(0, {}),
            lowerCase = letter === letter.toLowerCase()
        
        assert.equal(lowerCase, true)
    })
})