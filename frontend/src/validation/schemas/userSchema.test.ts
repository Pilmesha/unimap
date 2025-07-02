import { TFunction } from 'i18next'
import {createPersonalIdSchema, createPasswordSchema} from './userSchema'

const t = ((key: string) => key) as unknown as TFunction

describe('createPersonalIdSchema', () => {
    const schema = createPersonalIdSchema(t)

    it('accepts valid personal id', () => {
        const validId = '123asd'
        expect(() => schema.parse(validId)).not.toThrow()
    })

    it('rejects short id', () => {
        const shortId = '12as'
        try {
            schema.parse(shortId)
        } catch (e: any) {
            expect(e.errors[0].message).toBe('validation.personalIdLength')
        }
    })

    it('reject personal id with incorrect characters', () => {
        const badChars = '_?abs32*'
        try {
            schema.parse(badChars)
        } catch (e: any) {
            expect(e.errors[0].message).toBe('validation.personalIdChars')
        }
    })
})


describe('createPasswordSchema', () => {
    const schema = createPasswordSchema(t);

    it('accept valid password', () => {
        const validPass = 'giorgi123'
        expect(() => schema.parse(validPass)).not.toThrow()
    })

    it('reject short password', () => {
        const shortPass = '1g'
        try {
            schema.parse(shortPass)
        } catch (e: any) {
            expect(e.errors[0].message).toBe('validation.passwordLength')
        }
    })

    it('reject password with spaces in it', () => {
        const passWithSpace = '123gio '
        try {
            schema.parse(passWithSpace)
        } catch (e: any) {
            expect(e.errors[0].message).toBe('validation.passwordNoSpaces')
        }
    })
})