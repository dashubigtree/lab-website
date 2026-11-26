"use client"
import React from 'react';
import { Box, Stack, Typography, Grid, ListItem } from '@mui/material'
import ViewStreamIcon from '@mui/icons-material/ViewStream';

import ImageCarousel from '@/components/ImageCarousel'
import LatestNews from '@/components/LatestNews'
import Image from 'next/image';
import { useDictionary } from '@/i18n/LocaleProvider';

const Title = ({ title }: any) => (
  <ListItem disableGutters>
    <ViewStreamIcon fontSize="large" color='secondary' sx={{ mr: 1 }} />
    <Typography variant="h5" noWrap sx={{ lineHeight: 'normal' }}>
      {title}
    </Typography>
  </ListItem>
)

const StickyAnnouncement = () => {
  const t = useDictionary().home

  return (
  <Stack>
    <Stack direction='row' alignItems='baseline' spacing={{ xs: .5, sm: 1 }}>
      <Image src={`/fire.gif`} alt='fire' width={30} height={30} />
      <Typography sx={{ typography: { xs: 'h6', sm: 'h5', md: 'h6', lg: 'h5' } }}>{t.recruitGraduate}</Typography>
    </Stack>
    <Stack direction='row' alignItems='baseline' spacing={{ xs: .5, sm: 1 }}>
      <Image src={`/fire.gif`} alt='fire' width={30} height={30} />
      <Typography sx={{ typography: { xs: 'h6', sm: 'h5', md: 'h6', lg: 'h5' } }}>{t.recruitUndergraduate}</Typography>
    </Stack>
  </Stack>
  )
}

export default function Home() {
  const t = useDictionary().home

  return (
    <Box my={2}>
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} >
        <Grid size={{ xs: 4, sm: 8, md: 12 }}>
          <Box sx={{ display: 'flex', justifyContent: { xs: 'space-around', md: 'flex-start' } }}>
            <Stack justifyContent='space-evenly'>
              <Typography sx={{ typography: { xs: 'h6', sm: 'h5', md: 'h6', lg: 'h5' }, color: '#777777' }}>
                {t.school}
              </Typography>
              <Typography sx={{ typography: { xs: { fontSize: 28 }, sm: 'h3', md: { fontSize: 45 }, lg: 'h3', fontWeight: '700 !important' } }}>
                {t.labName}
              </Typography>
              {t.labSubtitle &&
                <Typography sx={{ typography: { xs: 'h6', sm: 'h5', md: 'h6', lg: 'h5' } }}>
                  {t.labSubtitle}
                </Typography>
              }
              <br />
              <StickyAnnouncement />
            </Stack>
          </Box>
        </Grid>

        <Grid size={{ xs: 4, sm: 8, md: 7.5 }} >
          <Title title={t.news} />
          <LatestNews />
        </Grid>

        <Grid size={{ xs: 4, sm: 8, md: 4.5 }} >
          <Title title={t.gallery} />
          <ImageCarousel />
        </Grid>

      </Grid>
    </Box>
  )
}

