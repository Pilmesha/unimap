import{
    personalIdCharRegex, 
    personalIdLengthRegex,
    passwordLengthRegex,
    passwordNoSpacesRegex,
} from './regex'

describe('personalIdCharRegex', () => {
    it('accepts letters and numbers', () => {
        expect(personalIdCharRegex.test('abc123')).toBe(true)
        expect(personalIdCharRegex.test('Abs3BShd3723')).toBe(true)
    });
    it('reject all the characters expect letters and numbers', () => {
        expect(personalIdCharRegex.test('abc123@?.')).toBe(false)
        expect(personalIdCharRegex.test('Abs3BShd3_723/')).toBe(false)
    });
})

describe('personalIdLengthRegex', () => {
    it('length to be between 6 and 20', () => {
        expect(personalIdLengthRegex.test('abc12367')).toBe(true)
        expect(personalIdLengthRegex.test('12345678901234567890')).toBe(true)
    });
    it('length to be less than 6 or more than 20', () => {
        expect(personalIdLengthRegex.test('abc')).toBe(false)
        expect(personalIdLengthRegex.test('12345678901234567890123')).toBe(false)
    });
})

describe('passwordLengthRegex', () => {
    
    it('length to be between 3 and 20', () => {
        expect(passwordLengthRegex.test('abc12367')).toBe(true)
        expect(passwordLengthRegex.test('12345678901234567890')).toBe(true)
    });
    it('length to be less than 3 or more than 20', () => {
        expect(passwordLengthRegex.test('ab')).toBe(false)
        expect(passwordLengthRegex.test('12345678901234567890123')).toBe(false)
    });
})

describe('passwordNoSpacesRegex', () => {
    it('accepts password with not spaces', () => {
        expect(passwordNoSpacesRegex.test('abc1234')).toBe(true)
        expect(passwordNoSpacesRegex.test('12345678901234567890')).toBe(true)
    });
    it('rejects wassword with spaces', () => {
        expect(passwordNoSpacesRegex.test('abcdef5 ')).toBe(false)
        expect(passwordNoSpacesRegex.test('1234 1234')).toBe(false)
    });
})
