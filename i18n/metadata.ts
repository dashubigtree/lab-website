import type { Metadata } from 'next'
import { htmlLang, localizedPath, type Locale } from './config'
import { dictionary } from './dictionary'

/** 正式網址；canonical 和 hreflang 需要完整網址 */
export const siteUrl = 'https://www.ccchang.cc'

const labName = dictionary.en.home.labName

// 英文版各頁的標題與摘要。中文版沿用 app/(zh)/layout.tsx 的設定
const englishPages = {
    '/': {
        title: labName,
        description: `${labName}, ${dictionary.en.home.school}`,
    },
    '/professor': {
        title: `${dictionary.en.professor.title} | ${labName}`,
        description: `Biography, research focus, experience and education of the advisor of the ${labName}.`,
    },
    '/research': {
        title: `${dictionary.en.research.title} | ${labName}`,
        description: `Research areas of the ${labName}: intelligent transformation, AI agents and large language models, privacy technologies, data science, graph machine learning and sports technology.`,
    },
    '/research_result': {
        title: `${dictionary.en.results.title} | ${labName}`,
        description: `Research projects, publications, academic activities and awards of the ${labName}.`,
    },
    '/members': {
        title: `${dictionary.en.members.title} | ${labName}`,
        description: `Current members of the ${labName}.`,
    },
    '/graduate_members': {
        title: `${dictionary.en.alumni.title} | ${labName}`,
        description: `Alumni of the ${labName}.`,
    },
}

/** 有中英兩版的頁面：標示本頁正式網址，以及兩個語言版本的對應關係 */
export function pageMetadata(path: keyof typeof englishPages, locale: Locale): Metadata {
    // trailingSlash: true，網址一律以 / 結尾
    const url = (target: Locale) => `${localizedPath(path, target).replace(/\/$/, '')}/`

    return {
        ...(locale === 'en' ? englishPages[path] : {}),
        alternates: {
            canonical: url(locale),
            languages: {
                [htmlLang.zh]: url('zh'),
                [htmlLang.en]: url('en'),
                'x-default': url('zh'),
            },
        },
    }
}
