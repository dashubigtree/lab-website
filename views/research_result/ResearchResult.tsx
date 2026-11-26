'use client'
import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';

import PageTitle from '@/components/PageTitle'
import { CustomTab, CustomTabPanel, CusStepper } from './Component'
import {
    NSTC, IndustryCooperation, JournalPaper, ConferencePaper, guestEditor,
    journalReviewer, academicActivities, personalAwards, studentCompetitionAchievements,
    type Entry,
} from '@/content/researchResults'
import { useDictionary, useLocale } from '@/i18n/LocaleProvider'

export default function Result() {
    const locale = useLocale()
    const t = useDictionary().results
    const pick = (entry: Entry) => typeof entry === 'string' ? entry : entry[locale]
    const localize = (entries: Entry[]) => entries.map(pick)

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box height='100%'>
            <PageTitle title={t.title} />
            <Box sx={{ bgcolor: '#F5F5F5', borderRadius: 5, minHeight: '88%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3, display: 'flex', justifyContent: 'center' }}>
                    <CustomTab {...{ value, handleChange }} />
                </Box>

                <CustomTabPanel value={value} index={0}>
                    <Typography variant='h6' color='secondary'>
                        {t.nstc}
                    </Typography>
                    <CusStepper data={localize(NSTC)} />
                    
                    <Typography variant='h6' color='secondary'>
                        {t.industry}
                    </Typography>
                    <CusStepper data={localize(IndustryCooperation)} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Typography variant='h6' color='secondary'>
                        {t.journal}
                    </Typography>
                    <CusStepper data={JournalPaper} />
                    <br />
                    <Typography variant='h6' color='secondary'>
                        {t.conference}
                    </Typography>
                    <CusStepper data={localize(ConferencePaper)} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                        <Grid size={{ xs: 4, sm: 8, md: 6 }}>
                            <Typography variant='h6' color='secondary'>
                                {t.guestEditor}
                            </Typography>
                            <CusStepper data={guestEditor} />
                            <Typography variant='h6' color='secondary'>
                                {t.reviewer}
                            </Typography>
                            <CusStepper data={journalReviewer} />
                            <Typography variant='h6' color='secondary'>
                                {t.activities}
                            </Typography>
                            <CusStepper data={academicActivities.map((item) => ({
                                event: pick(item.event),
                                note: pick(item.note),
                            }))} />
                        </Grid>
                        <Grid size={{ xs: 4, sm: 8, md: 6 }}>
                            <Typography variant='h6' color='secondary'>
                                {t.awards}
                            </Typography>
                            <CusStepper data={localize(personalAwards)} />
                            <Typography variant='h6' color='secondary'>
                                {t.students}
                            </Typography>
                            <CusStepper data={localize(studentCompetitionAchievements)} />
                        </Grid>
                    </Grid>
                </CustomTabPanel>
            </Box>
        </Box>
    )
}

