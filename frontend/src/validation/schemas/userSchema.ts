import { z, ZodType} from 'zod';
import { 
    personalIdCharRegex,
    personalIdLengthRegex,
    passwordLengthRegex,
    passwordNoSpacesRegex,
} from '../regex'; 
import type { TFunction } from 'i18next';


export const createPersonalIdSchema = (t: TFunction): ZodType<string> => z
    .string()
    .regex(personalIdLengthRegex, t('validation.personalIdLength'))
    .regex(personalIdCharRegex, t('validation.personalIdChars'));

export const createPasswordSchema = (t: TFunction) : ZodType<string> => z
    .string()
    .regex(passwordLengthRegex, t('validation.passwordLength'))
    .regex(passwordNoSpacesRegex, t('validation.passwordNoSpaces'));
