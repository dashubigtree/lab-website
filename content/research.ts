import type { Localized } from '@/i18n/config'

export const researchIntro: Localized = {
    zh: "AIX Lab 主要研究核心是以資料科學及人工智慧為技術基礎，並引入大型語言模型（LLM）、AI 代理人、圖機器學習、隱私保護資料分析等技術進行研發與應用。研究團隊除資訊技術研發外，也關注企業導入、流程改善、智慧營運與智能轉型等管理議題，期望建構「資訊技術」與「管理應用」整合之研究方向，協助企業與組織推動智慧化升級與數位轉型。",
    en: "The core research of the AIX Lab builds on data science and artificial intelligence, bringing in technologies such as large language models (LLMs), AI agents, graph machine learning and privacy-preserving data analysis for research, development and application. Beyond information technology, the team also studies management topics such as enterprise adoption, process improvement, smart operations and intelligent transformation, aiming for a research direction that integrates information technology with management practice and helps enterprises and organizations upgrade intelligently and transform digitally.",
}

export const researchAreas: { field: Localized, content: Localized }[] = [
    {
        field: {
            zh: "智慧轉型與流程智慧化",
            en: "Intelligent Transformation and Process Automation",
        },
        content: {
            zh: '企業在日常作業中仍存在許多人工、重複性與跨系統流程，可透過流程自動化、RPA、資料分析與人工智慧輔助機制，協助企業改善作業效率與管理品質。本研究團隊關注流程智慧化、流程監控、異常偵測、決策支援與營運改善，並探討智慧化技術導入後對企業流程、服務模式與組織管理的影響。',
            en: "Many manual, repetitive and cross-system processes remain in daily enterprise operations. Process automation, RPA, data analytics and AI-assisted mechanisms can help improve operational efficiency and management quality. The team focuses on intelligent processes, process monitoring, anomaly detection, decision support and operational improvement, and studies how adopting intelligent technologies affects business processes, service models and organizational management.",
        },
    },
    {
        field: {
            zh: "AI 代理人與大型語言模型應用",
            en: "AI Agents and Large Language Model Applications",
        },
        content: {
            zh: '本研究團隊聚焦 AI 代理人與大型語言模型於企業場域中的導入與應用，結合生成式 AI、企業知識庫、RAG、模型微調、多模態資料處理與流程系統串接，建構具任務導向能力的智慧應用服務。研究內容包含資料查詢、文件處理、流程輔助、決策支援與客戶互動等應用，並探討其在企業智能轉型中的實務價值。',
            en: "The team focuses on adopting and applying AI agents and large language models in enterprise settings, combining generative AI, enterprise knowledge bases, RAG, model fine-tuning, multimodal data processing and workflow system integration to build task-oriented intelligent services. Applications include data querying, document processing, process assistance, decision support and customer interaction, along with their practical value for intelligent transformation.",
        },
    },
    {
        field: {
            zh: "資料保護與隱私技術",
            en: "Data Protection and Privacy Technologies",
        },
        content: {
            zh: '在跨組織與跨產業資料應用情境中，如何兼顧資料隱私、安全性與可稽核性，是資料分析與模型訓練的重要課題。本研究團隊以聯邦式學習（Federated Learning）為主要技術基礎，探討水平式與垂直式聯邦式學習框架、傳輸效率優化、平行運算、資源配置、模型訓練效率、可稽核聯邦式學習，以及資訊安全導向之資料共享機制，協助企業在不直接交換原始資料的情況下，進行跨域資料分析與模型建構。',
            en: "When data is used across organizations and industries, balancing privacy, security and auditability is a key challenge for data analysis and model training. Building mainly on federated learning, the team studies horizontal and vertical federated learning frameworks, communication efficiency, parallel computing, resource allocation, training efficiency, auditable federated learning and security-oriented data sharing, helping enterprises analyze data and build models across domains without directly exchanging raw data.",
        },
    },
    {
        field: {
            zh: "資料科學及人工智慧",
            en: "Data Science and Artificial Intelligence",
        },
        content: {
            zh: '本研究團隊以資料科學、機器學習與深度學習為基礎，發展資料分析、模型建構、自動化學習與模型治理相關方法。研究內容包含資料前處理、模型訓練、模型評估、資料治理、模型治理、時間序列分析與預測模型等，並應用於客戶行為分析、異常偵測、風險評估、智慧推薦與企業決策支援等情境。',
            en: "Grounded in data science, machine learning and deep learning, the team develops methods for data analysis, model building, automated learning and model governance. Topics include data preprocessing, model training and evaluation, data governance, model governance, time series analysis and forecasting, applied to customer behavior analysis, anomaly detection, risk assessment, intelligent recommendation and enterprise decision support.",
        },
    },
    {
        field: {
            zh: "圖機器學習",
            en: "Graph Machine Learning",
        },
        content: {
            zh: '圖資料能有效描述人、物件、事件與組織之間的關聯。本研究團隊聚焦圖探勘、圖神經網路、圖對比學習、圖推薦系統、社群網路分析與多層圖結構分析等議題，探討如何透過圖結構提升關聯資訊的表徵與預測能力。應用場域包含推薦系統、社群網路、風險偵測、交易分析、團隊組成、資訊安全與企業關係資料分析。',
            en: "Graph data effectively describes relationships among people, objects, events and organizations. The team focuses on graph mining, graph neural networks, graph contrastive learning, graph-based recommender systems, social network analysis and multi-layer graph analysis, exploring how graph structures improve the representation and prediction of relational information. Applications include recommender systems, social networks, risk detection, transaction analysis, team formation, information security and enterprise relationship data.",
        },
    },
    {
        field: {
            zh: "運動科技",
            en: "Sports Technology",
        },
        content: {
            zh: '本研究團隊關注人工智慧與資料分析技術在運動訓練、競賽分析與運動表現提升上的應用。研究內容包含運動影像辨識、動作分析、時間序列預測、訓練資料紀錄、戰術與策略分析、選手表現評估與智慧化訓練輔助系統。本研究團隊以羽球等運動場域為基礎，結合影像、感測、比賽紀錄與行為資料，協助教練與選手進行訓練優化與決策分析。',
            en: "The team applies AI and data analytics to sports training, competition analysis and performance improvement. Topics include sports image recognition, motion analysis, time series prediction, training data logging, tactical and strategic analysis, athlete performance evaluation and intelligent training support systems. Using badminton and other sports as a foundation, the team combines video, sensor, match record and behavioral data to help coaches and athletes optimize training and make decisions.",
        },
    },
]
