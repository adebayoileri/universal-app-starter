import * as Localization from 'expo-localization'
import {I18n, TranslateOptions} from 'i18n-js'

import {translations} from './languages'
import {enType} from './languages/en'

export const i18n = new I18n(translations)

// Set the locale once at the beginning of your app.
i18n.locale = Localization.getLocales()?.shift()?.languageCode === 'pt-BR' ? 'pt' : 'en'

// When a value is missing from a language it'll fall back to another language with the key present.
i18n.enableFallback = true
// To see the fallback mechanism uncomment the line below to force the app to use the Japanese language.
i18n.locale = 'pt'

export const translate = (text: keyof enType, options?: TranslateOptions) => i18n.t(text, options)
