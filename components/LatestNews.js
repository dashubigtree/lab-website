import React from 'react';
import { Stack, ListItem, Typography, ListItemText, ListItemAvatar } from '@mui/material';
import { news } from '@/content/news';
import { useLocale } from '@/i18n/LocaleProvider';

const News = ({ date, content, subcontent }) => (
    <ListItem sx={{ display: 'flex', alignItems: 'baseline' }}>
        <ListItemAvatar sx={{ bgcolor: (theme) => theme.palette.primary.main, borderRadius: 1, mr: 3 }}>
            {date}
        </ListItemAvatar>
        <ListItemText primary={content}
            secondary={subcontent} />
    </ListItem>
);

function LatestNews() {
    const locale = useLocale()

    return (
        <Stack
            spacing={1}
            justifyContent="space-between"
            alignItems="center"
            sx={{
                display: { xs: "flex", md: "block" }
            }}
        >
            <Stack
                sx={{
                    bgcolor: "#F5F5F5",
                    borderRadius: 5,
                    p: { xs: 0, md: 1.5 },
                    width: "100%",
                    maxHeight: { xs: 400, md: 320, lg: 450, xl: 500, xxl: 650, },
                    overflowY: "auto",
                }}
            >
                {news.map((item, index) => (
                    <News date={item.date} content={item.content[locale]} key={index} />
                ))}
            </Stack>
        </Stack>

    )
}

export default LatestNews