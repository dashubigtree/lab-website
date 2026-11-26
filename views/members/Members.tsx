'use client'
import { Box, Chip, Grid, Avatar } from '@mui/material'
import PageTitle from '@/components/PageTitle'
import PersonCard from './PersonCard'
import SubTitle from '@/components/SubTitle'
import React from 'react'
import { classNames, emba, master, phd, undergraduate, type Member } from '@/content/members'
import { useDictionary, useLocale } from '@/i18n/LocaleProvider'

const CusGrid = ({ data }: any) => (
    <Box py={2}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg: 16 }}>
            {data?.length ? data.map((person: any, index: number) => (
                <Grid size={{ xs: 4, sm: 4, md: 6, lg: 8 }} key={index}>
                    <PersonCard {...{ person }} />
                </Grid>
            )) : (
                <Grid size={{ xs: 4, sm: 8, md: 12, lg: 16 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Avatar
                        alt="we_want_you"
                        variant="square"
                        src={`/we_want_you.png`}
                        sx={{ width: { xs: 250, sm: 350, md: 450 }, height: { xs: 90, sm: 120, md: 150 } }}
                    />
                </Grid>
            )}
        </Grid>
    </Box>
)

export default function Members() {
    const locale = useLocale()
    const t = useDictionary().members
    const [selectedClass, setSelectedClass] = React.useState<Member['class'] | ''>('');

    const handleClassFilter = (className: Member['class'] | '') => {
        setSelectedClass(className === selectedClass ? '' : className);
    }

    const classOrder: Member['class'][] = ['mba', 'imGroupA', 'ai'];

    // 年份高的在前面，先排年分，再排班別
    const sortedMaster = [...master].sort((a, b) => {
        if (b.year !== a.year) {
            return parseInt(b.year) - parseInt(a.year);
        }
        return classOrder.indexOf(a.class) - classOrder.indexOf(b.class);
    });

    const filteredData = selectedClass
        ? sortedMaster.filter(person => person.class === selectedClass)
        : sortedMaster;

    const classOptions = Array.from(new Set(master.map(person => person.class)));

    return (
        <Box>
            <PageTitle title={t.title} />

            <SubTitle title={t.phd}>
                <CusGrid data={phd} />
            </SubTitle>
            <SubTitle title={t.emba}>
                <CusGrid data={emba} />
            </SubTitle>
            <SubTitle title={t.master}>
                <Box sx={{ mb: 2 }}>
                    {classOptions.map((className, index) => (
                        <Chip
                            key={index}
                            label={classNames[className][locale]}
                            clickable
                            onClick={() => handleClassFilter(className)}
                            sx={{ mr: 1, mb: 1 }}
                            color={selectedClass === className ? 'primary' : 'default'}
                        />
                    ))}
                </Box>
                <CusGrid data={filteredData} />
            </SubTitle>
            <SubTitle title={t.undergraduate}>
                <CusGrid data={undergraduate} />
            </SubTitle>
        </Box>
    )
}
