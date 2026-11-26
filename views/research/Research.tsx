"use client";
import { Box, Card, CardContent, Typography, Stack, Grid, Divider } from '@mui/material';
import Looks1Icon from '@mui/icons-material/LooksOne';
import Looks2Icon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';
import Looks5Icon from '@mui/icons-material/Looks5';
import PageTitle from '@/components/PageTitle'
import { researchAreas, researchIntro } from '@/content/research'
import { useDictionary, useLocale } from '@/i18n/LocaleProvider'

const FieldGrid = ({ field, children }: any) => (
    <Card elevation={0} sx={{ bgcolor: '#F5F5F5', borderRadius: 5 }}>
        <CardContent>
            <Typography variant="h5" color='secondary' sx={{ fontWeight: 700 }}>
                {field}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
                {children}
            </Typography>
        </CardContent>
    </Card>
)

const FieldContent = ({ icon, subfield, subcontent }: any) => (
    <Box my={1.5}>
        <Stack direction='row' alignItems='center' spacing={1}>
            {icon}
            <Typography variant='body1' sx={{ color: '#555555', fontWeight: 600 }}>
                {subfield}
            </Typography>
        </Stack>
        <Typography variant='body1'>
            {subcontent}
        </Typography>
    </Box>
)

export default function Research() {
    const locale = useLocale()
    const t = useDictionary().research

    return (
         <Box>
            <PageTitle title={t.title} />
            <Typography variant='h6' >
                {researchIntro[locale]}
            </Typography>

            <br />
            <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }} >
                {researchAreas.map((area) => (
                    <Grid size={{ xs: 4, sm: 8, md: 4 }} key={area.field.en}>
                        <FieldGrid field={area.field[locale]}>
                            <FieldContent subfield={area.content[locale]} />
                        </FieldGrid>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}
