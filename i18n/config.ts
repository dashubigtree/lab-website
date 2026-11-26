export type Locale = 'zh' | 'en'

/** 中英文各一份的內容；少填任何一種語言 TypeScript 會報錯 */
export type Localized = Record<Locale, string>

export const htmlLang: Record<Locale, string> = { zh: 'zh-Hant', en: 'en' }

// 有英文版的路由。新增英文頁面時要同步加在這裡，語言切換按鈕才會出現。
// /opportunity 目前隱藏且未翻譯，所以不列入。
const translatedRoutes = ['/', '/professor', '/research', '/research_result', '/members', '/graduate_members']

/** 去掉語言前綴與結尾斜線，例如 "/en/members/" -> "/members" */
export function basePath(pathname: string): string {
    const path = pathname.replace(/^\/en(?=\/|$)/, '').replace(/\/+$/, '')
    return path || '/'
}

/** 取得某個路由在指定語言下的網址 */
export function localizedPath(path: string, locale: Locale): string {
    if (locale === 'zh' || !translatedRoutes.includes(path)) return path
    return path === '/' ? '/en' : `/en${path}`
}

export function hasTranslation(path: string): boolean {
    return translatedRoutes.includes(path)
}
