'use client';
import * as React from 'react';
import Image from 'next/image'

import { Box, Typography, ListItem, Stack, Divider, Grid } from '@mui/material';

import ViewStreamIcon from '@mui/icons-material/ViewStream';
import PersonPinCircleOutlinedIcon from '@mui/icons-material/PersonPinCircleOutlined';
import InterestsOutlinedIcon from '@mui/icons-material/InterestsOutlined';
import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined';
import DomainOutlinedIcon from '@mui/icons-material/DomainOutlined';

import SubTitle from '../SubTitle'

const AboutMe = ({ content, icon }) => (
    <Stack direction={{ xs: 'row', sm: 'column' }} justifyContent='space-evenly' spacing={2} sx={{ bgcolor: '#F5F5F5', p: 2, borderRadius: 5, minHeight: { md: 320 } }}>
        <Stack alignItems='center' justifyContent='center'>
            {icon}
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
    return (
        <Box sx={{ height: '100%' }}>

            <ListItem disableGutters>
                <ViewStreamIcon fontSize="large" color='secondary' sx={{ mr: 1 }} />
                <Typography variant="h5" noWrap sx={{ lineHeight: 'normal', fontWeight: 700 }}>
                    關於我
                </Typography>
            </ListItem>
            <Grid container spacing={{ xs: 2, sm: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                <Grid size={{ xs: 4, sm: 4, md: 3 }} >
                    <AboutMe content='張智傑老師為國立臺灣科技大學管理學院助理教授，任職於管理學士班同時合聘資訊管理系碩士班甲組及人工智慧跨域科技研究所。張老師於國立成功大學工業與資訊管理學系取得博士學位，研究與教學領域涵蓋人工智慧、資料科學、機器學習、資料探勘、資訊管理與數位轉型等主題，並關注資訊科技在管理決策、企業應用與實務場域中的發展。' icon={<PersonPinCircleOutlinedIcon sx={{ fontSize: 60, color: '#FFB400' }} />} />
                </Grid>
                <Grid size={{ xs: 4, sm: 4, md: 3 }} >
                    <AboutMe content='張老師目前帶領 AIX Lab（AI × Intelligent Transformation Lab｜人工智慧與智能轉型實驗室），以人工智慧與智能轉型為核心，研究方向涵蓋資料分析、圖神經網路、可信任人工智慧、隱私保護資料分析、大型語言模型應用、智慧營運與運動科技等議題。研究團隊重視方法發展與實務應用的結合，期望透過資料與智慧化技術，協助企業與組織提升決策品質、流程效率與服務創新能力。' icon={<InterestsOutlinedIcon sx={{ fontSize: 60, color: '#FFB400' }} />} />
                </Grid>
                <Grid size={{ xs: 4, sm: 4, md: 3 }}>
                    <AboutMe content='張老師近年發表多篇國內外會議與國際期刊論文，研究成果發表於 IEEE Transactions on Computational Social Systems (Q1)、Data Mining and Knowledge Discovery (Q2)、Computer Modeling in Engineering and Sciences (Q1)、Computers and Electrical Engineering (Q1) 等國際期刊。研究主題涵蓋圖學習、推薦系統、社群網路分析、小樣本資料預測、動態信任評估、影像辨識與運動科技等方向。' icon={<CollectionsBookmarkOutlinedIcon sx={{ fontSize: 60, color: '#FFB400' }} />} />
                </Grid>
                <Grid size={{ xs: 4, sm: 4, md: 3 }}>
                    <AboutMe content='在教學與學生指導方面，張老師重視跨域學習、專題實作與產業連結，鼓勵學生從真實問題出發，培養問題定義、資料處理、系統實作與成果表達能力。近年指導學生參與專題研究、國內外競賽與國科會大專生專題計畫，並於國內外等競賽中獲得成果、教學及研究上也有獲得相關獎項及肯定。 在研究與產學合作方面，張老師主持多項國科會與教育部教學創新相關計畫，並與產業夥伴合作推動資訊安全、風險評估、智慧情報、金融科技、醫療影像、遊戲產業與企業智慧化應用等主題，展現研究團隊在學術研究、實務應用與智能轉型上的整合能力。' icon={<DomainOutlinedIcon sx={{ fontSize: 60, color: '#FFB400' }} />} />
                </Grid>
            </Grid>

            <Grid container spacing={{ xs: 2, md: 3, lg: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                <Grid size={{ xs: 4, sm: 8, md: 6 }} >
                    <SubTitle title="經歷">

                        <Experience {...{ workplace: '國立台北商業大學 – 會計資訊系', position: '專案助理教授', duringtime: '2021/08～2022/07' }} />

                        <Divider sx={{ m: 2 }} />

                        <Experience {...{ workplace: '台灣智慧財產運營協會', position: '秘書長', duringtime: '2022/01～2022/07' }} />

                        <Divider sx={{ m: 2 }} />

                        <Experience {...{ workplace: '富邦媒體科技 – 資訊科技處', position: '專案經理', duringtime: '2014/09～2021/07' }} />

                        <Divider sx={{ m: 2 }} />

                        <Experience {...{ workplace: '富邦金控 – 創新科技辦公室', position: '大數據暨人工智慧組組長', duringtime: '2015/10～2020/08' }} />
                    </SubTitle>
                </Grid>
                <Grid size={{ xs: 4, sm: 8, md: 6 }}>
                    <SubTitle title="學歷">
                        <Education {...{ school: '國立成功大學工業與資訊管理所', degree: '博士', duringtime: '2009/09～2012/05' }} />

                        <Divider sx={{ m: 2 }} />

                        <Education {...{ school: '國立中正大學醫療與資訊管理所', degree: '碩士', duringtime: '2007/09～2009/07' }} />
                    </SubTitle>

                </Grid>
            </Grid>
        </Box>
    );
}
