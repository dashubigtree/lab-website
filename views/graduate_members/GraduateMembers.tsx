'use client'
import { Box, Typography, Grid, Avatar } from '@mui/material'
import PageTitle from '@/components/PageTitle'
import PersonCard from './PersonCard'
import SubTitle from '@/components/SubTitle'
import { alumni } from '@/content/alumni'
import { useDictionary } from '@/i18n/LocaleProvider'

const CusGrid = ({ grade, data }: any) => (
    <Box py={2} >
        <Typography variant='h6' color='secondary' mb={1}>{grade}</Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg: 16 }} >
            {data ? data.map((person: any, index: number) => (
                <Grid size={{ xs: 4, sm: 4, md: 6, lg: 8 }} key={index} >
                    <PersonCard {...{ person }} />
                </Grid>
            )) :
                <Grid size={{ xs: 4, sm: 8, md: 12, lg: 16 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Avatar
                        alt="we_want_you"
                        variant="square"
                        src={`/we_want_you.png`}
                        sx={{ width: { xs: 250, sm: 350, md: 450 }, height: { xs: 90, sm: 120, md: 150 } }}
                    />
                </Grid>
            }
        </Grid>
    </Box>
)

export default function Members() {
    const t = useDictionary().alumni

    return (
        <Box>
            <PageTitle title={t.title} />


            <SubTitle title={t.list}>
                <CusGrid grade='' data={alumni} />
            </SubTitle>

            {/* <PageTitle title='畢業成員' />
            <SubTitle title='112學年度'>
                <CusGrid grade='EMBA' data={_112EMBA} />
                <CusGrid grade='碩士班' data={_112Master} />
            </SubTitle> */}
        </Box>
    )
}

