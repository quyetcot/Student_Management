import { createI18n } from "vue-i18n"
import vi from './locales/vn/vi.json'
import en from './locales/en/en.json'
const messages = {
    vi:vi,
    en:en
}

const i18n = createI18n({
    locale:'vi',
    messages
})
export default i18n