'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Box, Stack, Typography } from '@mui/material'

import { basePath, hasTranslation, localizedPath, type Locale } from '@/i18n/config'
import { useLocale } from '@/i18n/LocaleProvider'

const options: { locale: Locale, label: string, hrefLang: string, name: string }[] = [
    { locale: 'zh', label: '中', hrefLang: 'zh-Hant', name: '中文' },
    { locale: 'en', label: 'EN', hrefLang: 'en', name: 'English' },
]

// 切換語言時停留在同一頁；沒有英文版的頁面不顯示按鈕
export default function LanguageSwitch() {
    const current = useLocale()
    const path = basePath(usePathname() ?? '/')

    if (!hasTranslation(path)) return null

    return (
        <Stack direction='row' alignItems='center' spacing={1} sx={{ flexShrink: 0 }}>
            {options.map((option, index) => {
                const active = option.locale === current
                return (
                    <Box key={option.locale} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {index > 0 && <Typography component='span' aria-hidden sx={{ color: 'grey.light' }}>|</Typography>}
                        <Typography
                            component={Link}
                            href={localizedPath(path, option.locale)}
                            hrefLang={option.hrefLang}
                            lang={option.hrefLang}
                            aria-label={option.name}
                            aria-current={active ? 'true' : undefined}
                            sx={{
                                textDecoration: 'none',
                                fontWeight: active ? 700 : 400,
                                color: active ? 'secondary.main' : '#000000',
                                py: 1,
                            }}
                        >
                            {option.label}
                        </Typography>
                    </Box>
                )
            })}
        </Stack>
    )
}
