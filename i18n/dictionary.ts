// 介面固定文字。英文版的型別跟著中文版走，漏填欄位會在 build 時報錯。
const zh = {
    nav: {
        professor: '指導教授',
        research: '研究領域',
        researchResult: '實驗室成果',
        members: '實驗室成員',
        alumni: '畢業校友',
    },
    home: {
        school: '臺灣科技大學',
        labName: '人工智慧與智能轉型實驗室',
        // 英文版的主標題已經是英文實驗室名稱，所以副標留空
        labSubtitle: 'AI × Intelligent Transformation Lab',
        recruitGraduate: '實驗室成員募集中，歡迎資管所甲組；管研所EDBA、EMBA及MBA碩博士同學一起開疆闢土',
        recruitUndergraduate: '歡迎各系所大學部同學參加專題及競賽',
        news: '最新消息',
        gallery: '活動剪影',
    },
    members: {
        title: '實驗室成員',
        phd: '博士班',
        emba: 'EMBA',
        master: '碩士班',
        undergraduate: '專題生',
        name: '姓名：',
        class: '班別：',
        year: '學年度：',
        coAdvisor: '共同指導：',
        researchField: '研究方向：',
    },
    partners: {
        title: '合作夥伴',
        invite: '歡迎企業洽談合作！',
    },
}

const en: typeof zh = {
    nav: {
        professor: 'Advisor',
        research: 'Research',
        researchResult: 'Achievements',
        members: 'Members',
        alumni: 'Alumni',
    },
    home: {
        school: 'National Taiwan University of Science and Technology',
        labName: 'AI × Intelligent Transformation Lab',
        labSubtitle: '',
        recruitGraduate: 'We are recruiting! Master’s and doctoral students in Information Management, and EDBA, EMBA and MBA students in Management, are welcome to join us.',
        recruitUndergraduate: 'Undergraduates from all departments are welcome to join our research projects and competitions.',
        news: 'Latest News',
        gallery: 'Lab Life',
    },
    members: {
        title: 'Lab Members',
        phd: 'Ph.D. Students',
        emba: 'EMBA',
        master: 'Master’s Students',
        undergraduate: 'Undergraduate Researchers',
        name: 'Name: ',
        class: 'Program: ',
        year: 'Academic Year: ',
        coAdvisor: 'Co-advisor: ',
        researchField: 'Research Interests: ',
    },
    partners: {
        title: 'Partners',
        invite: 'We welcome industry collaboration!',
    },
}

export const dictionary = { zh, en }
