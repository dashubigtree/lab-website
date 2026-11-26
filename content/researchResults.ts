import type { Localized } from '@/i18n/config'

// 字串：中英文版顯示相同內容；{ zh, en }：依語言顯示
export type Entry = string | Localized

// 國科會計畫
export const NSTC: Entry[] = [
    {
        zh: '計畫主持人 114-2410-H-011-026-MY3 考慮運算效率、自動稽查檢核及安全防護設計全域聯邦學習框架：實踐跨業聯盟學習 2025/08/01~2028/07/31',
        en: "Principal Investigator, 114-2410-H-011-026-MY3. Designing a Global Federated Learning Framework with Computational Efficiency, Automated Auditing and Security Protection: Realizing Cross-Industry Alliance Learning. 2025/08/01~2028/07/31",
    },
    {
        zh: '計畫主持人 113-2221-E-011-149- 透過嵌入平衡與對比學習增進以圖為基礎之推薦系統效能 2024/08/01 ~ 2025/07/31',
        en: "Principal Investigator, 113-2221-E-011-149-. Enhancing Graph-Based Recommender Systems through Embedding Balancing and Contrastive Learning. 2024/08/01~2025/07/31",
    },
    {
        zh: '計畫主持人 111-2410-H-011 -041 -MY2 在保護個人隱私下建構跨產業資料共享框架 2022/10/01 ~ 2024/09/30',
        en: "Principal Investigator, 111-2410-H-011-041-MY2. Building a Cross-Industry Data Sharing Framework with Personal Privacy Protection. 2022/10/01~2024/09/30",
    },
]



// 產學合作案
export const IndustryCooperation: Entry[] = [
    {
        zh: '計畫主持人，以人工智慧建構輕量化羽球上手揮拍能力分級框架 2026/08/01~2027/07/31',
        en: "Principal Investigator, Building a Lightweight AI Framework for Grading Badminton Overhead Stroke Ability. 2026/08/01~2027/07/31",
    },
    {
        zh: '計畫主持人，鷹眼模型效能提升與新型態防詐偵測計畫案 2026/07/20 ~ 2027/05/19',
        en: "Principal Investigator, Eagle Eye Model Performance Enhancement and New Fraud Prevention Detection Project. 2026/07/20~2027/05/19",
    },
    {
        zh: '計畫主持人，防詐模組資料與技術架構健檢案2026/03/21~2026/05/20',
        en: "Principal Investigator, Health Check of the Data and Technical Architecture of Fraud Prevention Modules. 2026/03/21~2026/05/20",
    },
    {
        zh: '計畫主持人，資安AI引擎2.0-自動化智能郵件辨識與企業風險資料庫建置2026/01/01~2026/12/31',
        en: "Principal Investigator, Cybersecurity AI Engine 2.0: Automated Intelligent Email Identification and Enterprise Risk Database. 2026/01/01~2026/12/31",
    },
    {
        zh: '共同主持人，零信任之信任推斷引擎AI外腦研究報告 2025/12/01~2026/07/31',
        en: "Co-Principal Investigator, Research Report on an AI External Think Tank for a Zero Trust Inference Engine. 2025/12/01~2026/07/31",
    },
    {
        zh: '計畫主持人，遊戲產業智慧情報平台 2025/11/01~2026/06/30',
        en: "Principal Investigator, Smart Intelligence Platform for the Game Industry. 2025/11/01~2026/06/30",
    },
    {
        zh: '共同主持人，AI胚胎影像辨識 2025/10/01~2026/03/31',
        en: "Co-Principal Investigator, AI Embryo Image Recognition. 2025/10/01~2026/03/31",
    },
    {
        zh: '計畫主持人，行為基準與風險動態分析引擎建置 2025/09/01~2026/08/31',
        en: "Principal Investigator, Behavior Baseline and Dynamic Risk Analysis Engine. 2025/09/01~2026/08/31",
    },
    {
        zh: '計畫主持人，資訊安全-打造AI人工智慧1.0框架 2025/07/01~ 2025/12/31',
        en: "Principal Investigator, Information Security: Building an AI 1.0 Framework. 2025/07/01~2025/12/31",
    },
    {
        zh: '計畫主持人，AI戰情室1.0 2024/12/31 ~ 2025/06/30',
        en: "Principal Investigator, AI War Room 1.0. 2024/12/31~2025/06/30",
    },
    {
        zh: '計畫主持人，醫美產業AI技術引進導入及評估 2024/10/31 ~ 2025/03/31',
        en: "Principal Investigator, Introduction and Evaluation of AI Technology in the Medical Aesthetics Industry. 2024/10/31~2025/03/31",
    },
    {
        zh: '計畫主持人，競品暨技術論文網站分析系統 2024/06/01 ~ 2025/01/31',
        en: "Principal Investigator, Website Analysis System for Competitors and Technical Papers. 2024/06/01~2025/01/31",
    },
    {
        zh: '計畫主持人，AI鷹眼識詐聯盟技術暨推廣合作案 2024/01/01 ~ 2025/06/30',
        en: "Principal Investigator, AI Eagle Eye Anti-Fraud Alliance: Technology and Promotion Collaboration. 2024/01/01~2025/06/30",
    },
    {
        zh: '計畫主持人，產品擷取分析PoC專案 2023/07/01~2023/09/30',
        en: "Principal Investigator, Product Data Extraction and Analysis PoC Project. 2023/07/01~2023/09/30",
    },
    {
        zh: '計畫主持人，運用大數據及人工智慧技術建構風險引擎2.0 2023/01/01~2023/12/31',
        en: "Principal Investigator, Building Risk Engine 2.0 with Big Data and AI Technologies. 2023/01/01~2023/12/31",
    },
    {
        zh: '共同主持人，數位錢包之資安框架建構-APP及底層技術設計 2022/11/01~2022/12/31',
        en: "Co-Principal Investigator, Cybersecurity Framework for Digital Wallets: App and Underlying Technology Design. 2022/11/01~2022/12/31",
    },
    {
        zh: '計畫主持人，企業資安風險評估計畫 2022/10/01~2023/09/30',
        en: "Principal Investigator, Enterprise Cybersecurity Risk Assessment Project. 2022/10/01~2023/09/30",
    },
]

export const JournalPaper = [
    "C.-C. Chang, Z.-X. Chen, and C.-C. Lin. Food Classification via Vision Transformer with Data Augmentation on Small Datasets. To appear in Journal of Internet Technology. ",
    "C.-C. Chang and M.-H. Lin (2026). Graph contrastive link prediction with theoretical guarantees via model-aware augmentations and structure-aware alignment. Computers and Electrical Engineering, 139:111341.",
    "N.-W. Lo, C.-I Lin, C.-C. Chang*, C.-Y. Chang, and L.-L. Tran (2026). Constructing a Dynamic Trust Assessment Mechanism Combining Zero Knowledge Proof with Unsupervised Learning. Computer Modeling in Engineering and Sciences, 147(1):1-10",
    "L.-L. Tran, C.-C. Chang*, and H.-A. Yu (2026). Considering Cluster Validity in Attribute Extension for Small Data Set Predictions. Journal of Advances in Information Technology (ESCI), 17(5): 914-928.",
    "C.-C. Chang, K.-I.-B. Anuar, and Y.-H. Liu  (2026). Structure-based virtual sample generation using average-linkage clustering for small dataset problems. Computers, Materials & Continua, 87(1): 34",
    "M.-H. Lin, L.-L. TRAN, H.-Y. Chen, and C.-C. Chang* (2026). Constructing Time-Series Badminton Prediction Model within Gated Recurrent Units. Journal of Advances in Information Technology (ESCI), 17(4): 749-758.",
    "C.-C. Chang, C.-H. Lu, M.-Y. Chang, C.-E. Shen, Y.-C. Ho, and C.-Y. Shen (2024). Learning to Augment Graphs: Machine Learning-based Social Network Intervention with Self-Supervision. IEEE Transactions on Computational Social Systems, 11(3): 3286-3298.",
    "C.-C. Chang, C.-H. Lu, S.-J. Teng, M.-Y. Chang, Y.-C. Ho, and C.-Y. Shen (2024). Maximizing (k, L)-core with Edge Augmentation in Multi-Layer Graphs. IEEE Transactions on Computational Social Systems, 11(3): 3931-3943.",
    "C.-C. Chang, D.-R. Tseng, C.-H. Lu, M.-Y. Chang, and C.-Y. Shen (2024). Improving graph-based recommendation with unraveled graph learning. Data Mining and Knowledge Discovery, 38(4), 2440-2465.",
    "B.-Y. Hsu, P.-Y. Chang, Y.-L. Chen, Y.-C. Ho, C.-C. Chang, C.-Y. Shen, and B.-C. Shia (2024). Diversity-Optimized Group Extraction in Social Networks. IEEE Transactions on Computational Social Systems, 11(1): 756-769.",
    "C.-C. Chang, M.-Y. Chang, J.-Y. Jhang, L.-Y. Yeh, and C.-Y. Shen (2022). Learning to Extract Expert Teams in Social Networks. IEEE Transactions on Computational Social Systems, 9(5):1552-1562.",
    "V. Kumar, R. Kumar, A.-A. Khan, V. Kumar, Y.-C. Chen, and C.-C. Chang (2022). RAFI: Robust Authentication Framework for IoT based RFID Infrastructure. Sensors, 22(9), 3110.",
    "D.-C. Li, P.-H. Hsu, and C.-C. Chang (2014). A Genetic Algorithm-Based Approach for Single-Machine Scheduling with Learning Effect and Release Time. Mathematical Problems in Engineering, doi.org/10.1155/2014/249493.",
    "D.-C. Li, C.-C. Chang, C.-W. Liu, and W.-C. Chen (2013). A New Approach for Manufacturing Forecast Problems with Insufficient Data – the Case of TFT-LCDs. Journal of Intelligent Manufacturing, 24(2), 225-233.",
    "D.-C. Li, C.-C. Chang, and C.-W. Liu (2012). Using Structure-based Data Transformation Method to Improve Prediction Accuracies for Small Data Sets. Decision Support Systems, 52(3), 748-756."
]

export const ConferencePaper: Entry[] = [
    'M.-H. Lin, L.-L. Tran, H.-Y. Chen and C.-C. Chang "Constructing Time-Series Badminton Prediction Model within Gated Recurrent Units" 2026 8th Asia Pacific Information Technology Conference, Hokkaido, Japan, Jan. 2026',
    'L.-L. Tran, C.-C. Chang, H.-A. Yu, Y.-C. Chen. and R.-L. Tso. "Considering Cluster Validity in Attribute Extension for Small Data Set Predictions" 2026 8th Asia Pacific Information Technology Conference, Hokkaido, Japan, Jan. 2026',
    'M.-H. Lin, C.-L. Hsu, H.-S. Hsu and C.-C. Chang “Heuristic Meta Integration and Map Exploration to Solve Industrial Scheduling Problems” 2025 8th International Conference on Mechanical Manufacturing and Industrial Engineering, Tokyo, Japan, August. 2025',
    'J.-Y. Lin, Y.-H. Liu, M.-H. Lin, Y.-C. Chen and C.-C. Chang, “Blockchain Driven Security: Protecting Data and Ensuring Trustworthiness in Federated Learning” The 2025 7th Blockchain and Internet of Things Conference, Tsukuba, Japan, June. 2025',
    {
        zh: '劉于華、林哲宇、張智傑。以圖神經網路與聯邦式學習建構之反洗錢交易偵測架構。第36屆國際資訊管理學術研討會',
        en: "劉于華、林哲宇、張智傑。以圖神經網路與聯邦式學習建構之反洗錢交易偵測架構 [An anti-money laundering transaction detection framework built with graph neural networks and federated learning]. The 36th International Conference on Information Management.",
    },
    'H.-C. Chang, Y.-C. Chen, K.-C. Shih, C.-C. Chang and R.L.- Tso, “ Proof of Liabilities from Sum-Check Protocol and Polynomial Approximation” The 2025 7th Blockchain and Internet of Things Conference, Tsukuba, Japan, June. 2025',
    {
        zh: 'N.-W. Lo, C.-Y. Chang, C.-Y. Lin, Z.-X. Cai and C.-C. Chang 基於機器學習的物聯網風險評估機制 in Proc. CISC 2024, Taipei, Aug. 2024',
        en: "N.-W. Lo, C.-Y. Chang, C.-Y. Lin, Z.-X. Cai and C.-C. Chang 基於機器學習的物聯網風險評估機制 [A machine learning-based risk assessment mechanism for the Internet of Things] in Proc. CISC 2024, Taipei, Aug. 2024",
    },
    {
        zh: 'N.-W. Lo, C.-Y. Wu, C.-H. Chen and C.-C. Chang 結合機器學習且基於風險概念的使用者異常檢測 in Proc. CISC 2024, Taipei, Aug. 2024',
        en: "N.-W. Lo, C.-Y. Wu, C.-H. Chen and C.-C. Chang 結合機器學習且基於風險概念的使用者異常檢測 [Risk-based user anomaly detection combined with machine learning] in Proc. CISC 2024, Taipei, Aug. 2024",
    },
    'J.-Y. Lin, Y.-H. Liu, Y.-C. Chen and C.-C. Chang, "Constructing a Blockchain-based Framework for Enhancing the Reliability of Election Polls", The 2024 6th Blockchain and Internet of Things Conference, Fukuoka, Japan, July, 2024.',
    'C.-C. Chang, Y.-C. Li, Y. Kao, Y.-C. Chen, C.-C. Chang, "A Framework with Black2 and Differential Privacy in Handling Data Privacy Problems", International Electronics Communication Conference (IECC 2024), Fukuoka, Japan, July, 2024.',
    'T.-Y. Huang, Y.-C. Chen, T.-C. Hsieh, H.-C. Chang and C.-C. Chang, "A Secure and IoT-Enabled Data Sharing System Based on IPFS and IOTA Blockchain" , The 2023 5th Blockchain and Internet of Things Conference, Osaka, Japan, July, 2023.',
    {
        zh: 'C.-L. Hsu, H.-H. Hsu, C.-C. Chang, and N.-W. Lo, "整合公開資料建構企業貸款風險模型," in Proc. CISC 2023, Chiayi, Jun. 2023.',
        en: "C.-L. Hsu, H.-H. Hsu, C.-C. Chang, and N.-W. Lo, \"整合公開資料建構企業貸款風險模型 [Building an enterprise loan risk model by integrating open data],\" in Proc. CISC 2023, Chiayi, Jun. 2023.",
    },
    {
        zh: 'Z.-X. Cai, C.-Y. Chang, C.-C. Chang, and N.-W. Lo, "基於人工智慧之使用者行為異常檢測系統," in Proc. CISC 2023, Chiayi, Jun. 2023.',
        en: "Z.-X. Cai, C.-Y. Chang, C.-C. Chang, and N.-W. Lo, \"基於人工智慧之使用者行為異常檢測系統 [An artificial intelligence-based user behavior anomaly detection system],\" in Proc. CISC 2023, Chiayi, Jun. 2023.",
    },
    {
        zh: '張詠盛, 蔣昱弘, 張智傑, 陳駿 （2022年05月）。電影短文評論之情感分析-整合孿生網絡與深度神經網絡。2022人工智慧技術及應用研討會。',
        en: "張詠盛, 蔣昱弘, 張智傑, 陳駿 (2022, May). 電影短文評論之情感分析-整合孿生網絡與深度神經網絡 [Sentiment analysis of short movie reviews: Integrating Siamese networks and deep neural networks]. 2022 Conference on Artificial Intelligence Technology and Applications.",
    },
    'C.-C. Chen, K.-W. Lee, Chang C. C., D.-N. Yang, and M.-S. Chen (2013, Oct). Efficient Large Graph Pattern Mining for Big Data in the Cloud. Proc. of the 2013 IEEE International Conference on Big Data.',
    'D.-C. Li, I.-S. Wen, and C.-C. Chang (2013, Jun). A new virtual-sample-generating method based on the heuristics algorithm.. 2013 IEEE International Conference on Grey Systems and Intelligent Services.',
    {
        zh: '利德江*,張智傑,劉巧雯（2011年01月）。擴充資料維度提升小樣本品質預測能力-以TFT-LCDs製造為例。2011第四屆資訊科技應用研討會。',
        en: "利德江*, 張智傑, 劉巧雯 (2011, January). 擴充資料維度提升小樣本品質預測能力-以TFT-LCDs製造為例 [Expanding data attributes to improve small-sample quality prediction: The case of TFT-LCD manufacturing]. 4th Conference on Information Technology Applications, 2011.",
    },
    {
        zh: '利德江,張智傑*,劉巧雯（2010年12月）。利用資料分群轉換提升良率預測能力-以大尺寸偏光板製造為例。2010電子化企業實務研討暨論文發表會。',
        en: "利德江, 張智傑*, 劉巧雯 (2010, December). 利用資料分群轉換提升良率預測能力-以大尺寸偏光板製造為例 [Improving yield prediction through data clustering and transformation: The case of large-size polarizer manufacturing]. 2010 E-Business Practice Research Conference.",
    },
]

// 客座編輯 
export const guestEditor = [
    'Electronics (SCI) 2023/12~ now',
    'Mathematics (SCI) 2024/09~now'
];

// 期刊論文審稿
export const journalReviewer = [
    'Decision Support Systems/2023、2025',
    'Information Processing & Management/2026',
    'Journal of Information Science and Engineering/2023、2026',
    'The Computer Journal/2026',
    'IEEE Transactions on Computational Social Systems/2024',
    'Sensors and Materials/2024',
    'Machine Vision and Applications/2026',
    'Journal of Big Data/2024',
    'Journal of Supercomputing/2025',
    'Decision Support Systems/2023',
    'Journal of Information Science and Engineering/2023',
    'IEEE Transactions on Computational Social Systems/2024',
    'Sensors and Materials/2024',
    'Journal of Big Data/2024',
    'Mathematics/2024',
];

// 其他學術活動
export const academicActivities = [
    { event: "Blockchain and Internet of Things Conference (BIOTC 2024、2025)", note: "Technical Program Committee" },
    { event: { zh: "2023 ITMA國際研討會 - 人工智慧之數位轉型與資訊安全", en: "2023 ITMA International Conference: AI for Digital Transformation and Information Security" }, note: "Program/Industrial Committee Member" },
    { event: { zh: "台中科技大學學報", en: "Journal of National Taichung University of Science and Technology" }, note: { zh: "審查委員", en: "Reviewer" } }
];


// 個人相關獎項
export const personalAwards: Entry[] = [
    {
        zh: '114學年度 優良研究獎',
        en: "Outstanding Research Award, Academic Year 2025–26",
    },
    {
        zh: '114學年度 優良輔導教師',
        en: "Outstanding Student Mentor Award, Academic Year 2025–26",
    },
    {
        zh: '114-2學年度-優化 EMI 教學技巧獎勵(專案管理)',
        en: "EMI Teaching Enhancement Award (Project Management), Spring Semester, Academic Year 2025–26",
    },
    {
        zh: '114-1學年度-優化 EMI 教學技巧獎勵(計算機概論)',
        en: "EMI Teaching Enhancement Award (Introduction to Computer Science), Fall Semester, Academic Year 2025–26",
    },
    {
        zh: '113-1學年度-優化 EMI 教學技巧獎勵(計算機概論)',
        en: "EMI Teaching Enhancement Award (Introduction to Computer Science), Fall Semester, Academic Year 2024–25",
    },
    {
        zh: '113 全國大專教職員乙組男女混和雙打亞軍',
        en: "Runner-up, Mixed Doubles (Division B), National College Faculty and Staff Tournament, 2024",
    },
    {
        zh: '112-1學年度-創新教學模式獎勵(數位金融概論)',
        en: "Innovative Teaching Model Award (Introduction to Digital Finance), Fall Semester, Academic Year 2023–24",
    },
    {
        zh: '112 全國大專教職員乙組男女混和雙打亞軍',
        en: "Runner-up, Mixed Doubles (Division B), National College Faculty and Staff Tournament, 2023",
    },
    {
        zh: '111-2學年度-創新教學模式獎勵(計算機概論)',
        en: "Innovative Teaching Model Award (Introduction to Computer Science), Spring Semester, Academic Year 2022–23",
    },
    {
        zh: '111-1學年度-創新教學模式獎勵(大數據分析導論)',
        en: "Innovative Teaching Model Award (Introduction to Big Data Analytics), Fall Semester, Academic Year 2022–23",
    },
    {
        zh: '111-113學年度科技部補助延攬優秀人才',
        en: "Ministry of Science and Technology Grant for Recruiting Outstanding Talent, Academic Years 2022–23 to 2024–25",
    },
];

// 指導學生競賽成果
export const studentCompetitionAchievements: Entry[] = [
    {
        zh: '2026/07 「第一屆永續金融我最行－2026全國大專院校永續金融知識競賽」分區第5名',
        en: "2026/07 5th place, regional round, 1st National Intercollegiate Sustainable Finance Knowledge Competition (2026)",
    },
    {
        zh: '2025/06 2025全球GCMF 銀質獎',
        en: "2025/06 Silver Award, 2025 Global GCMF",
    },
    {
        zh: '2024/12 2024全球品牌策劃 第一名&銀質獎',
        en: "2024/12 First Place and Silver Award, 2024 Global Brand Planning Competition",
    },
    {
        zh: '2024/12 指導學生參加第七屆法遵科技與電腦稽核專題競賽 – 冠軍',
        en: "2024/12 Champion, 7th RegTech and Computer Auditing Project Competition (student team)",
    },
    {
        zh: '2023/12 指導學生參加第六屆法遵科技與電腦稽核專題競賽 – 優選',
        en: "2023/12 Merit Award, 6th RegTech and Computer Auditing Project Competition (student team)",
    },
    {
        zh: '2023/06 "基於人工智慧之使用者行為異常檢測系統"於第三十三屆資訊安全會議獲選Session Best Paper Award!',
        en: "2023/06 “An Artificial Intelligence-Based User Behavior Anomaly Detection System” won the Session Best Paper Award at the 33rd Cryptology and Information Security Conference!",
    },
    {
        zh: '2023/05 指導學生參加第一屆全國商務大數據創新競賽 – 佳作',
        en: "2023/05 Honorable Mention, 1st National Business Big Data Innovation Competition (student team)",
    },
    {
        zh: '2023/04 指導學生參加111學年度「大專校院創業實戰模擬學習平臺」 – 入選',
        en: "2023/04 Selected team, Start-up Simulation Platform for University and Tertiary College, Academic Year 2022–23 (student team)",
    },
    {
        zh: '2023/04 指導學生參加2023永豐金控商業競賽 – 嘉獎',
        en: "2023/04 Commendation Award, 2023 SinoPac Holdings Business Competition (student team)",
    },
    {
        zh: '2022/12 指導學生參加第五屆法遵科技與電腦稽核專題競賽 – 亞軍',
        en: "2022/12 Runner-up, 5th RegTech and Computer Auditing Project Competition (student team)",
    },
];
