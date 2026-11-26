// 成員卡的內容中英文版都顯示中文，只有欄位標頭會翻譯（見 i18n/dictionary.ts）
// 班別：資料裡只填代碼，顯示文字在這裡改
export const classNames = {
    mba: 'MBA',
    imGroupA: '資管所甲組',
    ai: '人工智慧所',
    interdisciplinaryAi: 'AI跨域',
    managementBachelor: '管理學士班',
    management: '管研所',
}

export type Member = {
    grade: 'PhD' | 'EMBA' | 'Master' | 'Undergraduate'
    name: string
    nameEn?: string        // 填了之後英文版會顯示這個名字；沒填就顯示 name
    class: keyof typeof classNames
    year: string           // 民國學年度
    imgSrc: string
    researchfield: string
    co_advisor?: string
    email: string
}

export const master: Member[] = [
    // MBA
    { grade: 'Master', name: '蕭至苓', class: 'mba', year: '115', imgSrc: '/115/蕭至苓', researchfield: '討論中...', email: 'M11521014@mail.ntust.edu.tw' },
    { grade: 'Master', name: '蘇立翎', class: 'mba', year: '115', imgSrc: '/115/蘇立翎', researchfield: '討論中...', email: 'm11521026@mail.ntust.edu.tw' },
    { grade: 'Master', name: '鄧書妤', class: 'mba', year: '114', imgSrc: '/114/鄧書妤', researchfield: '討論中...', email: 'M11421016@mail.ntust.edu.tw'},
    { grade: 'Master', name: '李婷芳', class: 'mba', year: '114', imgSrc: '/114/李婷芳', researchfield: '個人式AI代理人、使用者感知', email: 'M11421003@mail.ntust.edu.tw'},
    { grade: 'Master', name: '尹沛琪', class: 'mba', year: '114', imgSrc: '/114/尹沛琪', researchfield: '討論中...', email: 'M11421019@mail.ntust.edu.tw'},
    { grade: 'Master', name: '呂采沛', class: 'mba', year: '114', imgSrc: '/114/呂采沛', researchfield: 'AI代理人、組織管理評估', email: 'M11421025@mail.ntust.edu.tw'},
    { grade: 'Master', name: '余得如', class: 'mba', year: '113', imgSrc: '/113/余得如', researchfield: '生成式AI、資訊不對稱、消費者行為', email: 'M11321015@mail.ntust.edu.tw' },
    { grade: 'Master', name: '葉芯妤', class: 'mba', year: '113', imgSrc: '/113/葉芯妤', researchfield: '沉浸式體驗、使用者意圖及感知', email: 'M11321016@mail.ntust.edu.tw' },
    { grade: 'Master', name: '董念耘', class: 'mba', year: '113', imgSrc: '/113/董念耘', researchfield: 'CSR、ESG、AI資訊揭露、企業價值', email: 'M11321029@mail.ntust.edu.tw' },
    { grade: 'Master', name: '蔡雨芳', class: 'mba', year: '113', imgSrc: '/113/蔡雨芳', researchfield: '多代理人系統、使用者意圖及感知', email: 'M11321022@mail.ntust.edu.tw' },

    // 資管所甲組
    {grade: 'Master', name: '蔡沂庭', class: 'imGroupA', year: '115', imgSrc: '/115/蔡沂庭', researchfield: '討論中...', email: 'M11509106@mail.ntust.edu.tw'},
    { grade: 'Master', name: '潘俊廷', class: 'imGroupA', year: '115', imgSrc: '/115/潘俊廷', researchfield: '討論中...', email: 'M11509110@mail.ntust.edu.tw'},
    { grade: 'Master', name: '張姿儀', class: 'imGroupA', year: '114', imgSrc: '/114/張姿儀', researchfield: 'Agent架構優化、代理人式自動化溝通', email: 'M11409127@mail.ntust.edu.tw'},
    { grade: 'Master', name: '徐澍萭', class: 'imGroupA', year: '114', imgSrc: '/114/Benson', researchfield: 'LLM Agent、人類行為模擬', email: 'M11409111@mail.ntust.edu.tw' },
    { grade: 'Master', name: 'TRAN THI LUU LY', class: 'imGroupA', year: '113', imgSrc: '/113/TRAN THI LUU LY', researchfield: '資料分析與AI應用 Data Analysis and AI applications', email: 'M11309813@mail.ntust.edu.tw' },
    { grade: 'Master', name: '張尹寧', class: 'imGroupA', year: '112', imgSrc: '/112/張尹寧', researchfield: '聯邦式學習、圖神經學習', email: 'M11209123@mail.ntust.edu.tw' },

    // 人工智慧所
    { grade: 'Master', name: '林吉', class: 'ai', year: '114', imgSrc: '/114/林吉', researchfield: '資訊安全', co_advisor: '羅乃維院長',email: 'M11452033@mail.ntust.edu.tw'},
    { grade: 'Master', name: '蔡芷芸', class: 'ai', year: '114', imgSrc: '/114/蔡芷芸', researchfield: '人工智慧、機器學習', email: 'M11452026@mail.ntust.edu.tw'},
]

export const phd: Member[] = [
    { grade: 'PhD', name: '林銘鴻', class: 'interdisciplinaryAi', year: '113', imgSrc: '/113/林銘鴻', researchfield: '資訊安全與個資保護標準', email: 'D11352002@mail.ntust.edu.tw' },
    //休學{ grade: 'PhD', name: '吳宥霆', class: 'AI跨域', year: '112', imgSrc: '/112/吳宥霆', researchfield: '信用評等、資料探勘、資訊安全與個資保護標準', email: 'D11252005@mail.ntust.edu.tw' }
]


export const undergraduate: Member[] = [
    { grade: 'Undergraduate', name: '鄭佳茵', class: 'managementBachelor', year: '112', imgSrc: '/112/鄭佳茵', researchfield: '金融科技', email: 'B11233034@mail.ntust.edu.tw'},
    { grade: 'Undergraduate', name: '賴思穎', class: 'managementBachelor', year: '112', imgSrc: '/112/賴思穎', researchfield: '金融科技', email: 'B11233029@mail.ntust.edu.tw'},
    { grade: 'Undergraduate', name: '鍾佳諭', class: 'managementBachelor', year: '112', imgSrc: '/112/鍾佳諭', researchfield: '金融科技', email: 'B11233032@mail.ntust.edu.tw'},
    { grade: 'Undergraduate', name: '陳儀珊', class: 'managementBachelor', year: '112', imgSrc: '/112/陳儀珊', researchfield: '資料科學 參數最佳化', email: 'B11233030@mail.ntust.edu.tw'},
    { grade: 'Undergraduate', name: '陳玟君', class: 'managementBachelor', year: '112', imgSrc: '/112/陳玟君', researchfield: '資料科學 參數最佳化', email: 'B11233026@mail.ntust.edu.tw'},
    { grade: 'Undergraduate', name: '林易逵', class: 'managementBachelor', year: '112', imgSrc: '/112/林易逵', researchfield: '資料科學 參數最佳化', email: 'B11233001@mail.ntust.edu.tw'},
    

   ]

export const emba: Member[] = [
    { grade: 'EMBA', name: '李惠昭', class: 'management',year: '115', imgSrc: '/115/李惠昭', researchfield: '討論中...', email: 'm11516122@mail.ntust.edu.tw' },
    { grade: 'EMBA', name: '羅偉倫', class: 'management',year: '115', imgSrc: '/115/羅偉倫', researchfield: '討論中...', email: 'm11516126@mail.ntust.edu.tw' },
    { grade: 'EMBA', name: '林昌儀', class: 'management',year: '115', imgSrc: '/115/林昌儀', researchfield: '討論中...', email: 'M11516217@mail.ntust.edu.tw' },
    { grade: 'EMBA', name: '蔡佳璇', class: 'management',year: '115', imgSrc: '/115/蔡佳璇', researchfield: '討論中...', email: 'm11516111@mail.ntust.edu.tw' },
    { grade: 'EMBA', name: '黃建勳', class: 'management',year: '114', imgSrc: '/114/黃建勳', researchfield: '討論中...', email: 'M11416220@mail.ntust.edu.tw' },
    { grade: 'EMBA', name: '朱正光', class: 'management',year: '114', imgSrc: '/114/朱正光', researchfield: 'AI Agent產業應用、組織管理', email: 'M11416112@mail.ntust.edu.tw' },
    { grade: 'EMBA', name: '甘桂杭', class: 'management',year: '114', imgSrc: '/114/甘桂杭', researchfield: 'ESG、跨產業轉型', email: 'M11416224@mail.ntust.edu.tw'}

]
