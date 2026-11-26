'use client'
import * as React from 'react'
import type { Locale } from './config'
import { dictionary } from './dictionary'

const LocaleContext = React.createContext<Locale>('zh')

export function LocaleProvider({ locale, children }: { locale: Locale, children: React.ReactNode }) {
    return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
}

/** 目前頁面的語言 */
export const useLocale = () => React.useContext(LocaleContext)

/** 目前語言的介面文字 */
export const useDictionary = () => dictionary[useLocale()]
