import type { Member } from './members'

type Alumnus = Omit<Member, 'class'> & { class?: string }

export const alumni: Alumnus[] = [
    { grade: 'Master', name: 'Khairul Izyan Bin Anuar', class: 'MBA', year: '110', imgSrc: '/110/Khairul Izyan Bin Anuar', researchfield: { zh: '小樣本、機器學習', en: 'Machine Learning with Limited Data' }, email: 'M11021805@mail.ntust.edu.tw' },
    { grade: 'Master', name: 'Do Nguyen Ngan Khanh', class: 'MBA', year: '111', imgSrc: '/111/Do Nguyen Ngan Khanh', researchfield: { zh: '使用者意圖、聯邦式學習', en: 'User Intent Modeling, Federated Learning' }, email: 'M11021852@mail.ntust.edu.tw' },
    { grade: 'Master', name: '趙寶榕', class: 'MBA', year: '111', imgSrc: '/111/趙寶榕', researchfield: { zh: '使用者意圖、對話式商務', en: 'User Intent Modeling, Conversational Commerce' }, email: 'M11121024@mail.ntust.edu.tw' },
    { grade: 'Master', name: '許怡晴', class: 'MBA', year: '111', imgSrc: '/111/許怡晴', researchfield: { zh: '使用者意圖、流程自動化', en: 'User Intent Modeling, Workflow Automation' }, email: 'M10921020@mail.ntust.edu.tw' },

    { grade: 'Master', name: '羅雋齡', class: '產碩-AI跨域', year: '111', imgSrc: '/111/羅雋齡', co_advisor: '王紹睿教授', researchfield: { zh: '小樣本、機器學習、自動化爬蟲', en: 'Machine Learning with Limited Data, Automated Web Crawling' }, email: 'M11115Q02@mail.ntust.edu.tw' },
    { grade: 'Master', name: '陳涵愉', class: '產碩-AI跨域', year: '111', imgSrc: '/111/陳涵愉', co_advisor: '陳怡伶教授', researchfield: { zh: '影像辨識、深度學習、運動科學', en: 'Image Recognition, Deep Learning, Sports Science' }, email: 'M11115Q24@mail.ntust.edu.tw' },
    { grade: 'Master', name: '陳哲賢', class: '產碩-AI跨域', year: '111', imgSrc: '/111/陳哲賢', co_advisor: '王紹睿教授', researchfield: { zh: '影像辨識、深度學習、自動化爬蟲', en: 'Image Recognition, Deep Learning, Automated Web Crawling' }, email: 'M11115Q12@mail.ntust.edu.tw' },
    { grade: 'Master', name: '高瑜', class: '產碩-AI跨域', year: '111', imgSrc: '/111/高瑜', co_advisor: '陳怡伶教授', researchfield: { zh: '資料隱私保護、機器學習', en: 'Data Privacy, Machine Learning' }, email: 'M11115Q07@mail.ntust.edu.tw' },
    { grade: 'Master', name: '張棨揚', class: '產創-AI所', year: '111', imgSrc: '/111/張棨揚', co_advisor: '羅乃維院長', researchfield: { zh: '資訊安全、深度學習', en: 'Information Security, Deep Learning' }, email: 'M11152013@mail.ntust.edu.tw' },
    { grade: 'Master', name: '蔡子勛', class: '產創-AI所', year: '111', imgSrc: '/111/蔡子勛', co_advisor: '羅乃維院長', researchfield: { zh: '資訊安全、深度學習', en: 'Information Security, Deep Learning' }, email: 'M11152026@mail.ntust.edu.tw' },
    { grade: 'Master', name: '錢嘉偉', class: '產創-AI所', year: '111', imgSrc: '/111/錢嘉偉', researchfield: { zh: '影像辨識、深度學習、運動科學', en: 'Image Recognition, Deep Learning, Sports Science' }, email: 'M11152029@mail.ntust.edu.tw' },
    { grade: 'Master', name: '吳孟蓁', class: '產創-AI所', year: '112', imgSrc: '/112/吳孟蓁', researchfield: { zh: 'AutoML', en: 'Automated Machine Learning (AutoML)' }, email: 'M11252027@mail.ntust.edu.tw' },
    { grade: 'EMBA', name: '蔡宗儒', year: '112', imgSrc: '/112/蔡宗儒', researchfield: { zh: '人工智慧與商業應用', en: 'AI Applications in Business' }, email: 'M11216217@mail.ntsut.edu.tw' },
    { grade: 'Master', name: '王姿璇', class: 'MBA', year: '112', imgSrc: '/112/王姿璇', researchfield: { zh: '聯邦式學習、使用者意圖', en: 'Federated Learning, User Intent Modeling' }, email: 'M11221006@mail.ntust.edu.tw' },
    { grade: 'Master', name: '温郁綺', class: '資管所甲組', year: '112', imgSrc: '/112/温郁綺', researchfield: { zh: '集成學習', en: 'Ensemble Learning' }, email: 'M11209105@mail.ntust.edu.tw' },
    { grade: 'Master', name: '吳竣宇', class: '人工智慧所', year: '112', imgSrc: '/112/吳竣宇', co_advisor: '羅乃維院長', researchfield: { zh: '圖神經學習、生成式AI', en: 'Graph Neural Networks, Generative AI' }, email: 'M11252003@mail.ntust.edu.tw' },
    { grade: 'Master', name: '羅巧筠', class: '資管所甲組', year: '112', imgSrc: '/112/羅巧筠', researchfield: { zh: '大型語言模型', en: 'Large Language Models (LLMs)' }, email: 'M11209102@mail.ntust.edu.tw' },
    { grade: 'Master', name: '劉騫', class: '資管所甲組', year: '112', imgSrc: '/112/劉騫', researchfield: { zh: '圖神經學習、神經網路壓縮', en: 'Graph Neural Networks, Neural Network Compression' }, email: 'brianliu1208@gmail.com' },
    //休學{ grade: 'Master', name: '陳軍翰', class: '人工智慧所', year: '112', imgSrc: '/112/陳軍翰', co_advisor: '羅乃維院長', researchfield: '討論中…', email: 'M11252012@mail.ntust.edu.tw' },
    { grade: 'Master', name: '林憲紘', class: '人工智慧所', year: '112', imgSrc: '/112/林憲紘', co_advisor: '羅乃維院長', researchfield: { zh: '資訊安全', en: 'Information Security' }, email: 'M11252029@mail.ntust.edu.tw' },
    { grade: 'Master', name: 'PHAM QUYNH HUONG', class: 'MBA', year: '112', imgSrc: '/112/PHAM QUYNH HUONG', researchfield: { zh: '資料科學', en: 'Data Science' }, email: 'M11221823@mail.ntust.edu.tw' },
    { grade: 'Master', name: '余祥安', class: 'MBA', year: '111', imgSrc: '/111/余祥安', researchfield: { zh: '小樣本資料、機器學習', en: 'Machine Learning with Limited Data' }, email: 'M11121026@mail.ntust.edu.tw' },
    { grade: 'Master', name: '林瑩姍', class: 'MBA', year: '112', imgSrc: '/112/林瑩姍', researchfield: { zh: '資料不平衡、聯邦式學習', en: 'Learning from Imbalanced Data, Federated Learning' }, email: 'M11221019@ms.ntust.edu.tw' },
    { grade: 'Master', name: '溫婉言', class: '資管所甲組', year: '112', imgSrc: '/112/溫婉言', researchfield: { zh: '聯邦式學習', en: 'Federated Learning' }, email: 'M11209130@mail.ntust.edu.tw' },
    { grade: 'Master', name: '林智婷', class: 'MBA', year: '113', imgSrc: '/113/林智婷', researchfield: { zh: 'PodCast、AI感知、使用者感知', en: 'Podcasting, AI Perception, User Perception' }, email: 'M11321028@mail.ntust.edu.tw' },
    { grade: 'Master', name: '吳錞柔', class: '資管所甲組', year: '113', imgSrc: '/113/吳錞柔', researchfield: { zh: '聯邦式學習、資料傳輸安全', en: 'Federated Learning, Secure Data Transmission' }, email: 'M11309125@mail.ntust.edu.tw' },
    { grade: 'Master', name: '林怡彣', class: '資管所甲組', year: '113', imgSrc: '/113/林怡彣', researchfield: { zh: '聯邦式學習、稽核學習', en: 'Federated Learning, Auditability in Machine Learning' }, email: 'M11309114@mail.ntust.edu.tw' },
    { grade: 'Master', name: '蘇子晴', class: '資管所甲組', year: '113', imgSrc: '/113/蘇子晴', researchfield: { zh: 'LLM、自動化資料生成', en: 'Large Language Models (LLMs), Automated Data Generation' }, email: 'M11309115@mail.ntust.edu.tw' },
    { grade: 'Master', name: '吳冠霖', class: '人工智慧所', year: '113', imgSrc: '/113/吳冠霖', researchfield: { zh: '語言模型、生成式AI', en: 'Language Modeling, Generative AI' }, email: 'M11352035@mail.ntust.edu.tw' },
]
