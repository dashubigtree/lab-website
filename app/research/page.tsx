"use client";
import { Box, Card, CardContent, Typography, Stack, Grid, Divider } from '@mui/material';
import Looks1Icon from '@mui/icons-material/LooksOne';
import Looks2Icon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';
import Looks5Icon from '@mui/icons-material/Looks5';
import PageTitle from '../PageTitle'

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
    return (
         <Box>
            <PageTitle title='研究領域' />
            <Typography variant='h6' >
                AIX Lab 主要研究核心是以資料科學及人工智慧為技術基礎，並引入大型語言模型（LLM）、AI 代理人、圖機器學習、隱私保護資料分析等技術進行研發與應用。研究團隊除資訊技術研發外，也關注企業導入、流程改善、智慧營運與智能轉型等管理議題，期望建構「資訊技術」與「管理應用」整合之研究方向，協助企業與組織推動智慧化升級與數位轉型。
            </Typography>

            <br />
            <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }} >
                <Grid size={{ xs: 4, sm: 8, md: 4 }} >
                    <FieldGrid field="智慧轉型與流程智慧化" >
                        <FieldContent  subfield='企業在日常作業中仍存在許多人工、重複性與跨系統流程，可透過流程自動化、RPA、資料分析與人工智慧輔助機制，協助企業改善作業效率與管理品質。本研究團隊關注流程智慧化、流程監控、異常偵測、決策支援與營運改善，並探討智慧化技術導入後對企業流程、服務模式與組織管理的影響。' />
                    </FieldGrid>
                </Grid>
                <Grid size={{ xs: 4, sm: 8, md: 4 }}>
                    <FieldGrid field="AI 代理人與大型語言模型應用" >
                        <FieldContent subfield='本研究團隊聚焦 AI 代理人與大型語言模型於企業場域中的導入與應用，結合生成式 AI、企業知識庫、RAG、模型微調、多模態資料處理與流程系統串接，建構具任務導向能力的智慧應用服務。研究內容包含資料查詢、文件處理、流程輔助、決策支援與客戶互動等應用，並探討其在企業智能轉型中的實務價值。' />
                    </FieldGrid>
                </Grid>
                <Grid size={{ xs: 4, sm: 8, md: 4 }}>
                    <FieldGrid field="資料保護與隱私技術" >
                        <FieldContent subfield='在跨組織與跨產業資料應用情境中，如何兼顧資料隱私、安全性與可稽核性，是資料分析與模型訓練的重要課題。本研究團隊以聯邦式學習（Federated Learning）為主要技術基礎，探討水平式與垂直式聯邦式學習框架、傳輸效率優化、平行運算、資源配置、模型訓練效率、可稽核聯邦式學習，以及資訊安全導向之資料共享機制，協助企業在不直接交換原始資料的情況下，進行跨域資料分析與模型建構。' />
                    </FieldGrid>
                </Grid>
                <Grid size={{ xs: 4, sm: 8, md: 4 }}>
                    <FieldGrid field="資料科學及人工智慧">
                        <FieldContent  subfield='本研究團隊以資料科學、機器學習與深度學習為基礎，發展資料分析、模型建構、自動化學習與模型治理相關方法。研究內容包含資料前處理、模型訓練、模型評估、資料治理、模型治理、時間序列分析與預測模型等，並應用於客戶行為分析、異常偵測、風險評估、智慧推薦與企業決策支援等情境。' />
                    </FieldGrid>
                </Grid>
                <Grid size={{ xs: 4, sm: 8, md: 4 }}>
                    <FieldGrid field="圖機器學習">
                        <FieldContent subfield='圖資料能有效描述人、物件、事件與組織之間的關聯。本研究團隊聚焦圖探勘、圖神經網路、圖對比學習、圖推薦系統、社群網路分析與多層圖結構分析等議題，探討如何透過圖結構提升關聯資訊的表徵與預測能力。應用場域包含推薦系統、社群網路、風險偵測、交易分析、團隊組成、資訊安全與企業關係資料分析。' />
                    </FieldGrid>
                </Grid>
                <Grid size={{ xs: 4, sm: 8, md: 4 }}>
                    <FieldGrid field="運動科技">
                        <FieldContent subfield='本研究團隊關注人工智慧與資料分析技術在運動訓練、競賽分析與運動表現提升上的應用。研究內容包含運動影像辨識、動作分析、時間序列預測、訓練資料紀錄、戰術與策略分析、選手表現評估與智慧化訓練輔助系統。本研究團隊以羽球等運動場域為基礎，結合影像、感測、比賽紀錄與行為資料，協助教練與選手進行訓練優化與決策分析。' />
                    </FieldGrid>
                </Grid>
            </Grid>
        </Box>
    )
}
