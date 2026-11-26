'use client';
import * as React from 'react';
import Image from 'next/image'

import { Box, Typography, ListItem, Stack, Divider, Grid } from '@mui/material';

import ViewStreamIcon from '@mui/icons-material/ViewStream';
import PersonPinCircleOutlinedIcon from '@mui/icons-material/PersonPinCircleOutlined';
import InterestsOutlinedIcon from '@mui/icons-material/InterestsOutlined';
import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined';
import DomainOutlinedIcon from '@mui/icons-material/DomainOutlined';

import SubTitle from '@/components/SubTitle'
import { about, educations, experiences } from '@/content/professor'
import { useDictionary, useLocale } from '@/i18n/LocaleProvider'

const AboutMe = ({ title, content, icon }) => (
    <Stack direction={{ xs: 'row', sm: 'column' }} justifyContent='space-evenly' spacing={2} sx={{ bgcolor: '#F5F5F5', p: 2, borderRadius: 5, minHeight: { md: 320 } }}>
        <Stack alignItems='center' justifyContent='center'>
            {icon}
            <Typography variant='h6' align='center' sx={{ fontWeight: 700, mt: 1 }}>
                {title}
            </Typography>
        </Stack>
        <Typography variant='body1'>
            {content}
        </Typography>
    </Stack >
)

const Education = ({ school, degree, duringtime }) => (
    <Stack spacing={2}>
        <Typography variant='h6'>
            {school}
        </Typography>
        <Stack direction="row" spacing={2}>
            <Stack direction="row" justifyContent="center" alignItems="center">
                <Image
                    src={`/date.svg`}
                    alt='date'
                    width={23}
                    height={23}
                />
                <Typography sx={{ bgcolor: '#FFD700', ml: 1 }}>
                    {duringtime}
                </Typography>
            </Stack>
            <Stack direction="row" justifyContent="center" alignItems="center">
                <Image
                    src={`/degree.svg`}
                    alt='degree'
                    width={30}
                    height={30}
                />
                <Typography sx={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                    {degree}
                </Typography>
            </Stack>

        </Stack>
    </Stack>
)

const Experience = ({ workplace, position, duringtime }) => (
    <Stack spacing={2}>
        <Typography variant='h6'>
            {workplace}
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 0.5, sm: 2 }}>
            <Stack direction="row" justifyContent={{ xs: 'flex-start', sm: 'center' }} alignItems="center">
                <Image
                    src={`/date.svg`}
                    alt='date'
                    width={23}
                    height={23}
                />
                <Typography component='span' sx={{ bgcolor: '#FFD700', width: 'fit-content', ml: 1 }}>
                    {duringtime}
                </Typography>
            </Stack>
            <Stack direction="row" justifyContent={{ xs: 'flex-start', sm: 'center' }} alignItems="center">
                <Image
                    src={`/job-position.svg`}
                    alt='job-position'
                    width={30}
                    height={30}
                />
                <Typography sx={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                    {position}
                </Typography>
            </Stack>
        </Stack>
    </Stack >
)

export default function Information() {
    const locale = useLocale()
    const t = useDictionary().professor

    return (
        <Box sx={{ height: '100%' }}>

            <ListItem disableGutters>
                <ViewStreamIcon fontSize="large" color='secondary' sx={{ mr: 1 }} />
                <Typography variant="h5" noWrap sx={{ lineHeight: 'normal', fontWeight: 700 }}>
                    {t.aboutMe}
                </Typography>
            </ListItem>
            <Grid container spacing={{ xs: 2, sm: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                <Grid size={{ xs: 4, sm: 4, md: 3 }} >
                    <AboutMe title={about[0].title[locale]} content={about[0].content[locale]} icon={<PersonPinCircleOutlinedIcon sx={{ fontSize: 60, color: '#FFB400' }} />} />
                </Grid>
                <Grid size={{ xs: 4, sm: 4, md: 3 }} >
                    <AboutMe title={about[1].title[locale]} content={about[1].content[locale]} icon={<InterestsOutlinedIcon sx={{ fontSize: 60, color: '#FFB400' }} />} />
                </Grid>
                <Grid size={{ xs: 4, sm: 4, md: 3 }}>
                    <AboutMe title={about[2].title[locale]} content={about[2].content[locale]} icon={<CollectionsBookmarkOutlinedIcon sx={{ fontSize: 60, color: '#FFB400' }} />} />
                </Grid>
                <Grid size={{ xs: 4, sm: 4, md: 3 }}>
                    <AboutMe title={about[3].title[locale]} content={about[3].content[locale]} icon={<DomainOutlinedIcon sx={{ fontSize: 60, color: '#FFB400' }} />} />
                </Grid>
            </Grid>

            <Grid container spacing={{ xs: 2, md: 3, lg: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                <Grid size={{ xs: 4, sm: 8, md: 6 }} >
                    <SubTitle title={t.experience}>

                        {experiences.map((item, index) => (
                            <React.Fragment key={item.duringtime}>
                                {index > 0 && <Divider sx={{ m: 2 }} />}
                                <Experience workplace={item.workplace[locale]} position={item.position[locale]} duringtime={item.duringtime} />
                            </React.Fragment>
                        ))}
                    </SubTitle>
                </Grid>
                <Grid size={{ xs: 4, sm: 8, md: 6 }}>
                    <SubTitle title={t.education}>
                        {educations.map((item, index) => (
                            <React.Fragment key={item.duringtime}>
                                {index > 0 && <Divider sx={{ m: 2 }} />}
                                <Education school={item.school[locale]} degree={item.degree[locale]} duringtime={item.duringtime} />
                            </React.Fragment>
                        ))}
                    </SubTitle>

                </Grid>
            </Grid>
        </Box>
    );
}
