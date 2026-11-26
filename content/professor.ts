import type { Localized } from '@/i18n/config'

// 「關於我」四張卡片
export const about: { title: Localized, content: Localized }[] = [
    {
        title: {
            zh: '個人簡介',
            en: "Biography",
        },
        content: {
            zh: '張智傑老師為國立臺灣科技大學管理學院助理教授，兼任資訊管理系碩士班甲組及人工智慧跨域科技研究所。張老師於國立成功大學工業與資訊管理學系取得博士學位，研究專長涵蓋人工智慧、資料科學、機器學習、資料探勘、資訊管理及數位轉型，致力於推動 AI 技術於管理決策、企業應用與智慧治理等領域的創新發展。',
            en: "Chih-Chieh Chang is an Assistant Professor at the National Taiwan University of Science and Technology. Dr. Chang received a Ph.D. from National Cheng Kung University, with expertise in artificial intelligence, data science, machine learning, data mining, information management and digital transformation, and is committed to advancing innovative uses of AI in managerial decision-making, enterprise applications and smart governance.",
        },
    },
    {
        title: {
            zh: '研究方向',
            en: "Research Focus",
        },
        content: {
            zh: '張老師目前帶領 AIX Lab（AI × Intelligent Transformation Lab｜人工智慧與智能轉型實驗室），以人工智慧與智能轉型為核心，研究方向涵蓋資料分析、圖神經網路、可信任人工智慧、隱私保護資料分析、大型語言模型應用、智慧營運與運動科技等議題。研究團隊重視方法發展與實務應用的結合，期望透過資料與智慧化技術，協助企業與組織提升決策品質、流程效率與服務創新能力。',
            en: "Dr. Chang currently leads the AIX Lab (AI × Intelligent Transformation Lab). Centered on artificial intelligence and intelligent transformation, the research covers data analytics, graph neural networks, trustworthy AI, privacy-preserving data analysis, large language model applications, smart operations and sports technology. The team values both method development and practical application, using data and intelligent technologies to help enterprises and organizations improve decision quality, process efficiency and service innovation.",
        },
    },
    {
        title: {
            zh: '教學指導',
            en: "Teaching and Mentoring",
        },
        content: {
            zh: '張老師近年發表多篇國內外會議與國際期刊論文，研究成果發表於 IEEE Transactions on Computational Social Systems (Q1)、Data Mining and Knowledge Discovery (Q2)、Computer Modeling in Engineering and Sciences (Q1)、Computers and Electrical Engineering (Q1) 等國際期刊。研究主題涵蓋圖學習、推薦系統、社群網路分析、小樣本資料預測、動態信任評估、影像辨識與運動科技等方向。',
            en: "In recent years, Dr. Chang has published many domestic and international conference and journal papers, including in IEEE Transactions on Computational Social Systems (Q1), Data Mining and Knowledge Discovery (Q2), Computer Modeling in Engineering and Sciences (Q1) and Computers and Electrical Engineering (Q1). Research topics include graph learning, recommender systems, social network analysis, small-sample data prediction, dynamic trust assessment, image recognition and sports technology.",
        },
    },
    {
        title: {
            zh: '研究成果及應用',
            en: "Impact and Applications",
        },
        content: {
            zh: '在教學方面，張老師重視跨域學習、專題實作與產學合作，鼓勵學生從真實問題出發，培養問題分析、資料處理、系統開發及成果表達能力。近年指導學生參與國科會、大專生研究計畫及國內外競賽，並主持多項教育部與國科會計畫，攜手產業推動資訊安全、金融科技、醫療影像、智慧城市與企業 AI 應用等研究。',
            en: "In teaching, Dr. Chang emphasizes interdisciplinary learning, project-based practice and industry–academia collaboration, encouraging students to start from real-world problems and build skills in problem analysis, data processing, system development and presenting results. Dr. Chang has recently mentored students in NSTC projects, undergraduate research programs and domestic and international competitions, has led multiple Ministry of Education and NSTC projects, and works with industry on research in information security, FinTech, medical imaging, smart cities and enterprise AI applications.",
        },
    },
]

export const experiences: { workplace: Localized, position: Localized, duringtime: string }[] = [
    {
        workplace: { zh: '國立台北商業大學 – 會計資訊系', en: "National Taipei University of Business" },
        position: { zh: '專案助理教授', en: "Project Assistant Professor" },
        duringtime: '2021/08～2022/07',
    },
    {
        workplace: { zh: '台灣智慧財產運營協會', en: "Taiwan Intellectual Property Operations Association" },
        position: { zh: '秘書長', en: "Secretary-General" },
        duringtime: '2022/01～2022/07',
    },
    {
        workplace: { zh: '富邦媒體科技 – 資訊科技處', en: "momo.com Inc. – Information Technology Division" },
        position: { zh: '專案經理', en: "Project Manager" },
        duringtime: '2014/09～2021/07',
    },
    {
        workplace: { zh: '富邦金控 – 創新科技辦公室', en: "Fubon Financial Holding – Innovation Technology Office" },
        position: { zh: '大數據暨人工智慧組組長', en: "Head of the Big Data and AI Team" },
        duringtime: '2015/10～2020/08',
    },
]

export const educations: { school: Localized, degree: Localized, duringtime: string }[] = [
    {
        school: { zh: '國立成功大學工業與資訊管理所', en: "National Cheng Kung University" },
        degree: { zh: '博士', en: "Ph.D." },
        duringtime: '2009/09～2012/05',
    },
    {
        school: { zh: '國立中正大學醫療與資訊管理所', en: "National Chung Cheng University" },
        degree: { zh: '碩士', en: "Master’s" },
        duringtime: '2007/09～2009/07',
    },
]
