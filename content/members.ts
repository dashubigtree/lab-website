import type { Localized } from '@/i18n/config'

// 班別：資料裡只填代碼，顯示文字在這裡改
export const classNames = {
    mba: { zh: 'MBA', en: 'MBA' },
    imGroupA: { zh: '資管所甲組', en: 'Information Management' },
    ai: { zh: '人工智慧所', en: 'Artificial Intelligence' },
    interdisciplinaryAi: { zh: 'AI跨域', en: 'Interdisciplinary AI' },
    managementBachelor: { zh: '管理學士班', en: 'Undergraduate Program in Management' },
    management: { zh: '管研所', en: 'Management' },
} satisfies Record<string, Localized>

export type Member = {
    grade: 'PhD' | 'EMBA' | 'Master' | 'Undergraduate'
    name: string
    nameEn?: string        // 填了之後英文版會顯示這個名字；沒填就顯示 name
    class: keyof typeof classNames
    year: string           // 民國學年度
    imgSrc: string
    researchfield: Localized
    co_advisor?: Localized
    email: string
}

export const master: Member[] = [
    // MBA
    { grade: 'Master', name: '蕭至苓', class: 'mba', year: '115', imgSrc: '/115/蕭至苓', researchfield: { zh: '討論中...', en: 'To be determined' }, email: 'M11521014@mail.ntust.edu.tw' },
    { grade: 'Master', name: '蘇立翎', class: 'mba', year: '115', imgSrc: '/115/蘇立翎', researchfield: { zh: '討論中...', en: 'To be determined' }, email: 'm11521026@mail.ntust.edu.tw' },
    { grade: 'Master', name: '鄧書妤', class: 'mba', year: '114', imgSrc: '/114/鄧書妤', researchfield: { zh: '討論中...', en: 'To be determined' }, email: 'M11421016@mail.ntust.edu.tw'},
    { grade: 'Master', name: '李婷芳', class: 'mba', year: '114', imgSrc: '/114/李婷芳', researchfield: { zh: '個人式AI代理人、使用者感知', en: 'Personal AI agents, user perception' }, email: 'M11421003@mail.ntust.edu.tw'},
    { grade: 'Master', name: '尹沛琪', class: 'mba', year: '114', imgSrc: '/114/尹沛琪', researchfield: { zh: '討論中...', en: 'To be determined' }, email: 'M11421019@mail.ntust.edu.tw'},
    { grade: 'Master', name: '呂采沛', class: 'mba', year: '114', imgSrc: '/114/呂采沛', researchfield: { zh: 'AI代理人、組織管理評估', en: 'AI agents, organizational management evaluation' }, email: 'M11421025@mail.ntust.edu.tw'},
    { grade: 'Master', name: '余得如', class: 'mba', year: '113', imgSrc: '/113/余得如', researchfield: { zh: '生成式AI、資訊不對稱、消費者行為', en: 'Generative AI, information asymmetry, consumer behavior' }, email: 'M11321015@mail.ntust.edu.tw' },
    { grade: 'Master', name: '葉芯妤', class: 'mba', year: '113', imgSrc: '/113/葉芯妤', researchfield: { zh: '沉浸式體驗、使用者意圖及感知', en: 'Immersive experience, user intention and perception' }, email: 'M11321016@mail.ntust.edu.tw' },
    { grade: 'Master', name: '董念耘', class: 'mba', year: '113', imgSrc: '/113/董念耘', researchfield: { zh: 'CSR、ESG、AI資訊揭露、企業價值', en: 'CSR, ESG, AI disclosure, firm value' }, email: 'M11321029@mail.ntust.edu.tw' },
    { grade: 'Master', name: '蔡雨芳', class: 'mba', year: '113', imgSrc: '/113/蔡雨芳', researchfield: { zh: '多代理人系統、使用者意圖及感知', en: 'Multi-agent systems, user intention and perception' }, email: 'M11321022@mail.ntust.edu.tw' },

    // 資管所甲組
    {grade: 'Master', name: '蔡沂庭', class: 'imGroupA', year: '115', imgSrc: '/115/蔡沂庭', researchfield: { zh: '討論中...', en: 'To be determined' }, email: 'M11509106@mail.ntust.edu.tw'},
    { grade: 'Master', name: '潘俊廷', class: 'imGroupA', year: '115', imgSrc: '/115/潘俊廷', researchfield: { zh: '討論中...', en: 'To be determined' }, email: 'M11509110@mail.ntust.edu.tw'},
    { grade: 'Master', name: '張姿儀', class: 'imGroupA', year: '114', imgSrc: '/114/張姿儀', researchfield: { zh: 'Agent架構優化、代理人式自動化溝通', en: 'Agent architecture optimization, agentic automated communication' }, email: 'M11409127@mail.ntust.edu.tw'},
    { grade: 'Master', name: '徐澍萭', class: 'imGroupA', year: '114', imgSrc: '/114/Benson', researchfield: { zh: 'LLM Agent、人類行為模擬', en: 'LLM agents, human behavior simulation' }, email: 'M11409111@mail.ntust.edu.tw' },
    { grade: 'Master', name: 'TRAN THI LUU LY', class: 'imGroupA', year: '113', imgSrc: '/113/TRAN THI LUU LY', researchfield: { zh: '資料分析與AI應用 Data Analysis and AI applications', en: 'Data analysis and AI applications' }, email: 'M11309813@mail.ntust.edu.tw' },
    { grade: 'Master', name: '張尹寧', class: 'imGroupA', year: '112', imgSrc: '/112/張尹寧', researchfield: { zh: '聯邦式學習、圖神經學習', en: 'Federated learning, graph neural learning' }, email: 'M11209123@mail.ntust.edu.tw' },

    // 人工智慧所
    { grade: 'Master', name: '林吉', class: 'ai', year: '114', imgSrc: '/114/林吉', researchfield: { zh: '資訊安全', en: 'Information security' }, co_advisor: { zh: '羅乃維院長', en: 'Dean 羅乃維' },email: 'M11452033@mail.ntust.edu.tw'},
    { grade: 'Master', name: '蔡芷芸', class: 'ai', year: '114', imgSrc: '/114/蔡芷芸', researchfield: { zh: '人工智慧、機器學習', en: 'Artificial intelligence, machine learning' }, email: 'M11452026@mail.ntust.edu.tw'},
]

export const phd: Member[] = [
    { grade: 'PhD', name: '林銘鴻', class: 'interdisciplinaryAi', year: '113', imgSrc: '/113/林銘鴻', researchfield: { zh: '資訊安全與個資保護標準', en: 'Information security and personal data protection standards' }, email: 'D11352002@mail.ntust.edu.tw' },
    //休學{ grade: 'PhD', name: '吳宥霆', class: 'AI跨域', year: '112', imgSrc: '/112/吳宥霆', researchfield: '信用評等、資料探勘、資訊安全與個資保護標準', email: 'D11252005@mail.ntust.edu.tw' }
]


export const undergraduate: Member[] = [
    { grade: 'Undergraduate', name: '鄭佳茵', class: 'managementBachelor', year: '112', imgSrc: '/112/鄭佳茵', researchfield: { zh: '金融科技', en: 'FinTech' }, email: 'B11233034@mail.ntust.edu.tw'},
    { grade: 'Undergraduate', name: '賴思穎', class: 'managementBachelor', year: '112', imgSrc: '/112/賴思穎', researchfield: { zh: '金融科技', en: 'FinTech' }, email: 'B11233029@mail.ntust.edu.tw'},
    { grade: 'Undergraduate', name: '鍾佳諭', class: 'managementBachelor', year: '112', imgSrc: '/112/鍾佳諭', researchfield: { zh: '金融科技', en: 'FinTech' }, email: 'B11233032@mail.ntust.edu.tw'},
    { grade: 'Undergraduate', name: '陳儀珊', class: 'managementBachelor', year: '112', imgSrc: '/112/陳儀珊', researchfield: { zh: '資料科學 參數最佳化', en: 'Data science, parameter optimization' }, email: 'B11233030@mail.ntust.edu.tw'},
    { grade: 'Undergraduate', name: '陳玟君', class: 'managementBachelor', year: '112', imgSrc: '/112/陳玟君', researchfield: { zh: '資料科學 參數最佳化', en: 'Data science, parameter optimization' }, email: 'B11233026@mail.ntust.edu.tw'},
    { grade: 'Undergraduate', name: '林易逵', class: 'managementBachelor', year: '112', imgSrc: '/112/林易逵', researchfield: { zh: '資料科學 參數最佳化', en: 'Data science, parameter optimization' }, email: 'B11233001@mail.ntust.edu.tw'},
    

   ]

export const emba: Member[] = [
    { grade: 'EMBA', name: '李惠昭', class: 'management',year: '115', imgSrc: '/115/李惠昭', researchfield: { zh: '討論中...', en: 'To be determined' }, email: 'm11516122@mail.ntust.edu.tw' },
    { grade: 'EMBA', name: '羅偉倫', class: 'management',year: '115', imgSrc: '/115/羅偉倫', researchfield: { zh: '討論中...', en: 'To be determined' }, email: 'm11516126@mail.ntust.edu.tw' },
    { grade: 'EMBA', name: '林昌儀', class: 'management',year: '115', imgSrc: '/115/林昌儀', researchfield: { zh: '討論中...', en: 'To be determined' }, email: 'M11516217@mail.ntust.edu.tw' },
    { grade: 'EMBA', name: '蔡佳璇', class: 'management',year: '115', imgSrc: '/115/蔡佳璇', researchfield: { zh: '討論中...', en: 'To be determined' }, email: 'm11516111@mail.ntust.edu.tw' },
    { grade: 'EMBA', name: '黃建勳', class: 'management',year: '114', imgSrc: '/114/黃建勳', researchfield: { zh: '討論中...', en: 'To be determined' }, email: 'M11416220@mail.ntust.edu.tw' },
    { grade: 'EMBA', name: '朱正光', class: 'management',year: '114', imgSrc: '/114/朱正光', researchfield: { zh: 'AI Agent產業應用、組織管理', en: 'Industry applications of AI agents, organizational management' }, email: 'M11416112@mail.ntust.edu.tw' },
    { grade: 'EMBA', name: '甘桂杭', class: 'management',year: '114', imgSrc: '/114/甘桂杭', researchfield: { zh: 'ESG、跨產業轉型', en: 'ESG, cross-industry transformation' }, email: 'M11416224@mail.ntust.edu.tw'}

]
