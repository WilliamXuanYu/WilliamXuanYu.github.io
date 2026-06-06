const photos = ["assets/img/profile.jpg", "assets/img/casual.jpg"];

const content = {
  en: {
    nav: {
      overview: "Overview",
      research: "Research",
      publications: "Publications",
      patents: "Patents",
      projects: "Projects",
      education: "Education"
    },
    profile: {
      badge: "Academic Homepage",
      status: "Open to PhD and research opportunities",
      photoHint: "Click to view more",
      eyebrow: "End-to-End Autonomous Driving",
      cnName: "昂思宁",
      subtitle: "M.S. student in Automation at the University of Science and Technology of China.",
      intro:
        "I work on reliable autonomous driving planners, closed-loop evaluation, vision-language-action systems, and efficient deployment for real-world driving stacks.",
      featuredPaper: "Featured Paper"
    },
    facts: {
      affiliationLabel: "Affiliation",
      affiliation: "USTC, Department of Automation",
      focusLabel: "Focus",
      focus: "Autonomous Driving Planning and VLA",
      highlightsLabel: "Highlights",
      highlights: "5 papers, 3 patents, 2x National Scholarship"
    },
    stats: {
      papers: "selected papers",
      patents: "related patents",
      firstAuthor: "first-author works",
      rank: "undergraduate major ranking"
    },
    footer: {
      note: "Built as a clean static academic homepage for GitHub Pages."
    },
    views: {
      overview: { eyebrow: "Overview", title: "Profile Snapshot" },
      research: { eyebrow: "Research", title: "Research Interests" },
      publications: { eyebrow: "Publications", title: "Selected Publications" },
      patents: { eyebrow: "Patents", title: "Related Patents" },
      projects: { eyebrow: "Projects", title: "Research and Engineering Experience" },
      education: { eyebrow: "Education", title: "Education and Honors" }
    },
    ui: {
      searchPublications: "Search publications",
      filterType: "Filter by type",
      allTypes: "All types",
      firstAuthor: "First author",
      collaborator: "Collaborator",
      noResults: "No matching publications.",
      paper: "Paper",
      code: "Code"
    },
    overviewItems: [
      {
        title: "Bio",
        desc:
          "Sining Ang is a graduate student in the Department of Automation at the University of Science and Technology of China. His current research centers on end-to-end autonomous driving, especially planning, evaluation, VLA systems, and latency-aware decision making."
      },
      {
        title: "Current Direction",
        desc:
          "He is especially interested in building driving systems that can reason over scenes, generate diverse trajectory candidates, score them reliably under closed-loop evaluation, and deploy efficiently on practical platforms."
      },
      {
        title: "Application Profile",
        desc:
          "This homepage is organized for academic self-introduction, PhD applications, and research project applications, with concise navigation across research, publications, patents, projects, and education."
      },
      {
        title: "Research Keywords",
        desc:
          "Autonomous driving planning, vision-language-action models, closed-loop evaluation, fast-slow systems, trajectory ranking, model deployment, edge optimization."
      }
    ],
    researchItems: [
      {
        icon: "route",
        title: "End-to-End Driving Planning",
        desc: "Closed-loop planning, proposal generation, trajectory scoring, and robust evaluation for autonomous driving."
      },
      {
        icon: "scan-eye",
        title: "Vision-Language-Action Systems",
        desc: "VLA and dual-system driving models that connect scene understanding, language reasoning, and vehicle actions."
      },
      {
        icon: "gauge",
        title: "Efficient Decision Systems",
        desc: "Fast-slow planning, query gating, latency-aware learning, and practical trade-offs between capability and cost."
      },
      {
        icon: "cpu",
        title: "Deployment and Optimization",
        desc: "Model adaptation, quantization, custom operators, and edge deployment for autonomous-driving perception systems."
      }
    ],
    publicationsItems: [
      {
        title: "CLOVER: Closed-Loop Value Estimation and Ranking for End-to-End Autonomous Driving Planning",
        type: "first",
        role: "First author",
        venue: "arXiv, 2026",
        desc:
          "CLOVER introduces closed-loop value estimation and ranking for end-to-end autonomous driving planning. It expands proposal coverage through evaluator-filtered pseudo-expert trajectories, then improves the scorer and proposal generator with conservative closed-loop self-distillation. Experiments on NAVSIM v1/v2, NavHard, and open-loop nuScenes show stronger planning quality and candidate diversity.",
        tags: ["Closed-loop planning", "NAVSIM", "Trajectory ranking"],
        links: [
          { label: "Paper", url: "https://arxiv.org/abs/2605.15120", icon: "file-text" },
          { label: "Code", url: "https://github.com/WilliamXuanYu/CLOVER", icon: "github" }
        ]
      },
      {
        title: "ASSCG: Just-Right Gating over Chattering for Fast-Slow LLM Planning in Autonomous Driving",
        type: "first",
        role: "First author",
        venue: "Preprint in preparation",
        desc:
          "ASSCG is a frame-level controller for fast-slow autonomous driving systems. It decides when to query a slower LLM planner, reuse cached guidance, or suppress unstable outputs, using supervised fine-tuning followed by a computation-aware reinforcement learning objective. In nuPlan Hard20, it improves AsyncDriver scores from 65.00 to 67.28 while reducing average per-frame latency from 0.80s to 0.32s.",
        tags: ["Fast-slow systems", "LLM planning", "Latency-aware RL"],
        links: []
      },
      {
        title: "From Representational Complementarity to Dual Systems: Synergizing VLM and Vision-Only Backbones for End-to-End Driving",
        type: "first",
        role: "First author",
        venue: "arXiv, 2026",
        desc:
          "This work studies whether VLM and vision-only backbones preserve meaningful differences after being connected to the same end-to-end driving planner. It analyzes representation complementarity with CKA, CCA, and shared-unique SAE, then proposes HybridDriveVLA and DualDriveVLA to improve the accuracy-cost trade-off of VLA-based driving.",
        tags: ["VLA", "Dual systems", "Representation analysis"],
        links: [{ label: "Paper", url: "https://arxiv.org/abs/2602.10719", icon: "file-text" }]
      },
      {
        title: "DriveFine: Refining-Augmented Masked Diffusion VLA for Precise and Robust Driving",
        type: "collab",
        role: "Second author",
        venue: "arXiv, 2026",
        desc:
          "DriveFine combines flexible decoding with self-correction for masked-diffusion VLA driving. It introduces a plug-and-play block-level mixture-of-experts structure and a hybrid reinforcement learning strategy, improving effectiveness and robustness on NAVSIM v1/v2 and NavHard.",
        tags: ["Masked diffusion", "Mixture-of-experts", "Robust planning"],
        links: [{ label: "Paper", url: "https://arxiv.org/abs/2602.14577", icon: "file-text" }]
      },
      {
        title: "SAMoE-VLA: A Scene Adaptive Mixture-of-Experts Vision-Language-Action Model for Autonomous Driving",
        type: "collab",
        role: "Collaborator",
        venue: "arXiv, 2026",
        desc:
          "SAMoE-VLA conditions expert selection on structured scene representations instead of token-level routing. It derives MoE routing signals from BEV features and introduces conditional cross-modal causal attention for temporally consistent reasoning across world state, language intent, and action history.",
        tags: ["Scene-adaptive MoE", "BEV routing", "VLA"],
        links: [{ label: "Paper", url: "https://arxiv.org/abs/2603.08113", icon: "file-text" }]
      }
    ],
    patentsItems: [
      {
        title: "Method and System for Sewage Suspended-Solid Recognition Based on IA-YOLOv7",
        id: "CN116665092B",
        status: "Granted",
        role: "Lead student inventor; advisor listed as first inventor",
        desc:
          "An IA-YOLOv7-based recognition method and system for identifying suspended solids in sewage scenarios."
      },
      {
        title: "Driving Decision Control Method and Electronic Device",
        id: "CN121734456A",
        status: "Published",
        role: "First inventor; derived from ASSCG-related work",
        desc:
          "A driving decision-control method and electronic device related to fast-slow decision making for autonomous driving."
      },
      {
        title: "Image Object Detection Method, System, and Device under Adverse Weather",
        id: "CN116311254B",
        status: "Granted",
        role: "Core contributor",
        desc:
          "A method, system, and device for improving image object detection under adverse weather conditions."
      }
    ],
    projectItems: [
      {
        title: "Autonomous Driving Multi-Sensor Perception and Fusion Algorithm 2.0",
        meta: "JAC / Huawei collaborative project",
        desc:
          "Worked on edge deployment of autonomous-driving algorithms on Huawei Ascend MDC610 / MDC610 Pro platforms, including graph optimization, quantization, and custom operator adaptation. Completed adaptation and deployment for BEVFormer, MapTR v1/v2, FastBEV, FlashOCC, Sparse4D, and related models. Optimized MapTR inference from 958ms to 220ms, with the work selected as an oral presentation at IEEE CCDC.",
        tags: ["Huawei MDC610", "Model deployment", "MapTR optimization", "Oral presentation"]
      },
      {
        title: "Earlier Research Projects",
        meta: "Internships and exploratory research",
        desc:
          "Selected earlier work includes Artificial Intelligence and TensorFlow for High Speed Video Analysis at the University of Alberta, progressive enhancement dehazing for object detection in autonomous driving, and Transformer-based precipitation forecasting with U-Net comparisons.",
        tags: ["University of Alberta", "Computer vision", "Forecasting"]
      }
    ],
    educationItems: [
      {
        date: "2024 - Present",
        title: "University of Science and Technology of China",
        desc:
          "School of Information Science and Technology, Department of Automation. GPA: 3.84/4.3, ranking around top 10%-15%."
      },
      {
        date: "2020 - 2024",
        title: "Jinan University",
        desc:
          "College of Artificial Intelligence. GPA: 4.31/5.0, 93.1/100. Ranked 1st out of 128 students in the major."
      }
    ],
    honorItems: [
      {
        title: "Scholarships",
        desc:
          "National Scholarship x2, USTC First-Class Academic Scholarship x2, University of Alberta undergraduate internship scholarship, UNIQLO Scholarship, and Huawei Intelligent Base Scholarship."
      },
      {
        title: "Awards",
        desc:
          "Outstanding Graduate, Outstanding Undergraduate Thesis, Outstanding Student Cadre, Huawei ICT Competition Guangdong Special Prize and National Second Prize, and first prize in the Guangdong Computer Programming Competition."
      },
      {
        title: "Practice",
        desc:
          "Research internship at the Institute for AI Industry Research, Tsinghua University; invited participant at Huawei HDC; invited discussion visit to UNIQLO's Suzhou Chenfeng factory."
      }
    ]
  },
  zh: {
    nav: {
      overview: "概览",
      research: "研究方向",
      publications: "论文",
      patents: "专利",
      projects: "项目",
      education: "教育"
    },
    profile: {
      badge: "个人学术主页",
      status: "欢迎 PhD 与科研项目交流",
      photoHint: "点击查看更多",
      eyebrow: "端到端自动驾驶",
      cnName: "昂思宁",
      subtitle: "中国科学技术大学自动化系硕士研究生。",
      intro:
        "我关注可靠的自动驾驶规划、闭环评估、视觉-语言-动作系统，以及面向真实自动驾驶技术栈的高效部署。",
      featuredPaper: "代表论文"
    },
    facts: {
      affiliationLabel: "单位",
      affiliation: "中国科学技术大学自动化系",
      focusLabel: "方向",
      focus: "自动驾驶规划与 VLA",
      highlightsLabel: "亮点",
      highlights: "5 篇论文，3 项相关专利，2 次国家奖学金"
    },
    stats: {
      papers: "代表论文",
      patents: "相关专利",
      firstAuthor: "第一作者工作",
      rank: "本科专业排名"
    },
    footer: {
      note: "基于 GitHub Pages 构建的轻量静态学术主页。"
    },
    views: {
      overview: { eyebrow: "概览", title: "个人简况" },
      research: { eyebrow: "研究方向", title: "研究兴趣" },
      publications: { eyebrow: "论文", title: "代表论文" },
      patents: { eyebrow: "专利", title: "相关专利" },
      projects: { eyebrow: "项目", title: "科研与工程经历" },
      education: { eyebrow: "教育", title: "教育经历与荣誉" }
    },
    ui: {
      searchPublications: "搜索论文",
      filterType: "按类型筛选",
      allTypes: "全部类型",
      firstAuthor: "第一作者",
      collaborator: "合作作者",
      noResults: "没有匹配的论文。",
      paper: "论文",
      code: "代码"
    },
    overviewItems: [
      {
        title: "个人简介",
        desc:
          "昂思宁是中国科学技术大学自动化系硕士研究生，目前研究集中在端到端自动驾驶，尤其是规划、评估、VLA 系统和延迟感知决策。"
      },
      {
        title: "当前方向",
        desc:
          "我希望构建能够理解场景、生成多样候选轨迹、在闭环评估下可靠打分，并能高效部署到实际平台的自动驾驶系统。"
      },
      {
        title: "用途定位",
        desc:
          "该主页面向学术自我介绍、PhD 申请和相关项目申请，按研究、论文、专利、项目和教育经历组织信息。"
      },
      {
        title: "研究关键词",
        desc:
          "自动驾驶规划、视觉-语言-动作模型、闭环评估、快慢系统、轨迹排序、模型部署、边缘优化。"
      }
    ],
    researchItems: [
      {
        icon: "route",
        title: "端到端自动驾驶规划",
        desc: "关注闭环规划、候选轨迹生成、轨迹评分，以及面向自动驾驶规划系统的可靠评估。"
      },
      {
        icon: "scan-eye",
        title: "视觉-语言-动作系统",
        desc: "研究连接场景理解、语言推理与车辆动作的 VLA 模型和双系统自动驾驶框架。"
      },
      {
        icon: "gauge",
        title: "高效决策系统",
        desc: "探索快慢系统规划、查询门控、延迟感知学习，以及能力与计算成本之间的实际权衡。"
      },
      {
        icon: "cpu",
        title: "部署与优化",
        desc: "涉及模型适配、量化、自定义算子，以及自动驾驶感知算法在边缘计算平台上的部署。"
      }
    ],
    publicationsItems: [
      {
        title: "CLOVER: Closed-Loop Value Estimation and Ranking for End-to-End Autonomous Driving Planning",
        type: "first",
        role: "第一作者",
        venue: "arXiv, 2026",
        desc:
          "CLOVER 提出面向端到端自动驾驶规划的闭环价值估计与排序框架。该方法先通过经评估器筛选的伪专家轨迹扩展提案覆盖范围，再用保守闭环自蒸馏优化评分网络与提案生成器。在 NAVSIM v1/v2、NavHard 和开环 nuScenes 上，CLOVER 提升了规划质量和候选多样性。",
        tags: ["闭环规划", "NAVSIM", "轨迹排序"],
        links: [
          { label: "Paper", url: "https://arxiv.org/abs/2605.15120", icon: "file-text" },
          { label: "Code", url: "https://github.com/WilliamXuanYu/CLOVER", icon: "github" }
        ]
      },
      {
        title: "ASSCG: Just-Right Gating over Chattering for Fast-Slow LLM Planning in Autonomous Driving",
        type: "first",
        role: "第一作者",
        venue: "预印本准备中",
        desc:
          "ASSCG 是用于快慢自动驾驶系统的帧级控制器，用于决定何时查询慢速 LLM 规划器、复用缓存指导或抑制不稳定输出。方法采用监督微调和考虑计算成本的强化学习目标。在 nuPlan Hard20 中，集成至 AsyncDriver 后评分从 65.00 提升至 67.28，平均每帧延迟从 0.80 秒降至 0.32 秒。",
        tags: ["快慢系统", "LLM 规划", "延迟感知强化学习"],
        links: []
      },
      {
        title: "From Representational Complementarity to Dual Systems: Synergizing VLM and Vision-Only Backbones for End-to-End Driving",
        type: "first",
        role: "第一作者",
        venue: "arXiv, 2026",
        desc:
          "该工作研究 VLM 与纯视觉主干在接入相同端到端驾驶规划器后是否仍保留有意义的差异。论文通过 CKA、CCA 和共享-独有 SAE 分析表征互补性，并提出 HybridDriveVLA 和 DualDriveVLA，以改善 VLA 驱动系统的准确率与计算成本权衡。",
        tags: ["VLA", "双系统", "表征分析"],
        links: [{ label: "Paper", url: "https://arxiv.org/abs/2602.10719", icon: "file-text" }]
      },
      {
        title: "DriveFine: Refining-Augmented Masked Diffusion VLA for Precise and Robust Driving",
        type: "collab",
        role: "第二作者",
        venue: "arXiv, 2026",
        desc:
          "DriveFine 将灵活解码和自校正能力引入掩码扩散 VLA 驾驶模型，提出即插即用的块级专家混合结构和混合强化学习策略，在 NAVSIM v1/v2 和 NavHard 上展示了有效性与鲁棒性。",
        tags: ["掩码扩散", "专家混合", "鲁棒规划"],
        links: [{ label: "Paper", url: "https://arxiv.org/abs/2602.14577", icon: "file-text" }]
      },
      {
        title: "SAMoE-VLA: A Scene Adaptive Mixture-of-Experts Vision-Language-Action Model for Autonomous Driving",
        type: "collab",
        role: "合作作者",
        venue: "arXiv, 2026",
        desc:
          "SAMoE-VLA 基于结构化场景表示而非 token 级路由来条件化专家选择，从 BEV 特征中推导 MoE 路由信号，并引入条件跨模态因果注意力，用于跨世界状态、语言意图和动作历史的时间一致推理。",
        tags: ["场景自适应 MoE", "BEV 路由", "VLA"],
        links: [{ label: "Paper", url: "https://arxiv.org/abs/2603.08113", icon: "file-text" }]
      }
    ],
    patentsItems: [
      {
        title: "基于 IA-YOLOV7 的污水悬浮物识别方法及系统",
        id: "CN116665092B",
        status: "已授权",
        role: "除导师第一发明人",
        desc: "面向污水场景中悬浮物识别的 IA-YOLOV7 方法与系统。"
      },
      {
        title: "一种驾驶决策控制方法和电子设备",
        id: "CN121734456A",
        status: "已公开",
        role: "第一发明人；ASSCG 延伸工作",
        desc: "与自动驾驶快慢系统决策控制相关的方法和电子设备。"
      },
      {
        title: "一种恶劣天气情况下的图像目标检测方法、系统及设备",
        id: "CN116311254B",
        status: "已授权",
        role: "核心参与者",
        desc: "面向恶劣天气情况下图像目标检测的增强方法、系统及设备。"
      }
    ],
    projectItems: [
      {
        title: "自动驾驶多传感器感知与融合算法 2.0",
        meta: "江淮 / 华为合作项目",
        desc:
          "参与自动驾驶算法在华为昇腾 MDC610 / MDC610 Pro 平台上的边缘部署，涉及图优化、量化和自定义算子适配。完成 BEVFormer、MapTR v1/v2、FastBEV、FlashOCC、Sparse4D 等算法适配与部署，并将 MapTR 推理时间从 958ms 优化至 220ms，相关工作入选 IEEE CCDC oral 汇报。",
        tags: ["Huawei MDC610", "模型部署", "MapTR 优化", "Oral 汇报"]
      },
      {
        title: "早期研究项目",
        meta: "实习与探索性研究",
        desc:
          "包括阿尔伯塔大学本科实习项目 Artificial Intelligence and TensorFlow for High Speed Video Analysis，面向自动驾驶目标检测的雾图增强，以及基于 Transformer 与 U-Net 对比的降水量预测研究。",
        tags: ["阿尔伯塔大学", "计算机视觉", "预测建模"]
      }
    ],
    educationItems: [
      {
        date: "2024 - 至今",
        title: "中国科学技术大学",
        desc: "信息学院自动化系，硕士研究生。绩点 3.84/4.3，专业排名约前 10%-15%。"
      },
      {
        date: "2020 - 2024",
        title: "暨南大学",
        desc: "人工智能学院。绩点 4.31/5.0，93.1/100，专业排名 1/128。"
      }
    ],
    honorItems: [
      {
        title: "奖学金",
        desc:
          "国家奖学金 x2，中科大硕士一等学业奖学金 x2，加拿大阿尔伯塔大学本科实习奖学金，优衣库奖学金，华为智能基座奖学金等。"
      },
      {
        title: "荣誉与竞赛",
        desc:
          "优秀毕业生、优秀毕业论文、优秀学生干部，华为 ICT 大赛广东赛区特等奖 / 国家级二等奖，计算机程序设计大赛广东省一等奖等。"
      },
      {
        title: "实践经历",
        desc:
          "清华大学智能产业研究院实习，受邀前往华为 HDC 大会参会，受邀前往优衣库苏州晨风工厂讨论。"
      }
    ]
  }
};

const views = ["overview", "research", "publications", "patents", "projects", "education"];
let currentLanguage = localStorage.getItem("language") || "en";
let currentView = views.includes(location.hash.slice(1)) ? location.hash.slice(1) : "overview";
let photoIndex = Number(localStorage.getItem("photoIndex") || 0);

const $ = (selector) => document.querySelector(selector);

function getPath(obj, path) {
  return path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), obj);
}

function icon(name) {
  return `<i data-lucide="${name}" aria-hidden="true"></i>`;
}

function setStaticText(lang) {
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.title = lang === "zh" ? "Sining Ang | 昂思宁" : "Sining Ang";
  document.querySelector('meta[name="description"]').setAttribute(
    "content",
    lang === "zh"
      ? "昂思宁的个人学术主页，研究方向为端到端自动驾驶、VLA 系统、规划评估与高效部署。"
      : "Sining Ang is a graduate student working on end-to-end autonomous driving, VLA systems, planning, evaluation, and efficient deployment."
  );
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = getPath(content[lang], node.dataset.i18n);
    if (value) node.textContent = value;
  });
  $("#languageLabel").textContent = lang === "en" ? "中文" : "EN";
  $("#avatarToggle").title = content[lang].profile.photoHint;
}

function setActiveView(view) {
  currentView = views.includes(view) ? view : "overview";
  document.querySelectorAll("[data-view-link]").forEach((link) => {
    link.classList.toggle("active", link.dataset.viewLink === currentView);
  });
  const viewText = content[currentLanguage].views[currentView];
  $("#viewEyebrow").textContent = viewText.eyebrow;
  $("#viewTitle").textContent = viewText.title;
  $(".view-card").classList.remove("collapsed");
  renderView();
  if (window.lucide) window.lucide.createIcons();
}

function renderOverview() {
  return `
    <div class="overview-grid">
      ${content[currentLanguage].overviewItems
        .map(
          (item) => `
            <article class="info-card">
              <h3>${item.title}</h3>
              <p>${item.desc}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderResearch() {
  return `
    <div class="research-grid">
      ${content[currentLanguage].researchItems
        .map(
          (item) => `
            <article class="research-card">
              <div class="icon-box">${icon(item.icon)}</div>
              <h3>${item.title}</h3>
              <p>${item.desc}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function publicationCard(item) {
  const linkHtml = item.links.length
    ? `<div class="card-links">${item.links
        .map((link) => `<a href="${link.url}" target="_blank" rel="noreferrer">${icon(link.icon)}<span>${link.label}</span></a>`)
        .join("")}</div>`
    : "";

  return `
    <article class="publication-card">
      <div class="card-topline">
        <h3>${item.title}</h3>
        <span class="badge">${item.role}</span>
      </div>
      <p>${item.desc}</p>
      <ul class="meta">
        <li>${item.venue}</li>
        ${item.tags.map((tag) => `<li>${tag}</li>`).join("")}
      </ul>
      ${linkHtml}
    </article>
  `;
}

function renderPublications() {
  const t = content[currentLanguage].ui;
  return `
    <div class="toolbar">
      <label class="search-box">
        ${icon("search")}
        <input id="publicationSearch" type="search" placeholder="${t.searchPublications}" />
      </label>
      <label class="select-box">
        ${icon("list-filter")}
        <select id="publicationType" aria-label="${t.filterType}">
          <option value="all">${t.allTypes}</option>
          <option value="first">${t.firstAuthor}</option>
          <option value="collab">${t.collaborator}</option>
        </select>
      </label>
    </div>
    <div class="publication-list" id="publicationList"></div>
  `;
}

function updatePublicationList() {
  const search = ($("#publicationSearch")?.value || "").trim().toLowerCase();
  const type = $("#publicationType")?.value || "all";
  const items = content[currentLanguage].publicationsItems.filter((item) => {
    const haystack = [item.title, item.role, item.venue, item.desc, ...item.tags].join(" ").toLowerCase();
    return (type === "all" || item.type === type) && (!search || haystack.includes(search));
  });
  $("#publicationList").innerHTML = items.length
    ? items.map(publicationCard).join("")
    : `<article class="info-card"><p>${content[currentLanguage].ui.noResults}</p></article>`;
  if (window.lucide) window.lucide.createIcons();
}

function renderPatents() {
  return `
    <div class="patent-list">
      ${content[currentLanguage].patentsItems
        .map(
          (item) => `
            <article class="patent-card">
              <div class="card-topline">
                <h3>${item.title}</h3>
                <span class="badge green">${item.status}</span>
              </div>
              <p>${item.desc}</p>
              <ul class="meta">
                <li>${item.id}</li>
                <li>${item.role}</li>
              </ul>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderProjects() {
  return `
    <div class="project-list">
      ${content[currentLanguage].projectItems
        .map(
          (item) => `
            <article class="project-card">
              <div class="card-topline">
                <h3>${item.title}</h3>
                <span class="badge">${item.meta}</span>
              </div>
              <p>${item.desc}</p>
              <ul class="meta">
                ${item.tags.map((tag) => `<li>${tag}</li>`).join("")}
              </ul>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderEducation() {
  return `
    <div class="split-grid">
      <div class="timeline">
        ${content[currentLanguage].educationItems
          .map(
            (item) => `
              <article class="timeline-item">
                <time>${item.date}</time>
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
              </article>
            `
          )
          .join("")}
      </div>
      <div class="honor-list">
        ${content[currentLanguage].honorItems
          .map(
            (item) => `
              <article class="honor-item">
                <strong>${item.title}</strong>
                <p>${item.desc}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderView() {
  const renderers = {
    overview: renderOverview,
    research: renderResearch,
    publications: renderPublications,
    patents: renderPatents,
    projects: renderProjects,
    education: renderEducation
  };
  $("#viewContent").innerHTML = renderers[currentView]();
  if (currentView === "publications") {
    updatePublicationList();
    $("#publicationSearch").addEventListener("input", updatePublicationList);
    $("#publicationType").addEventListener("change", updatePublicationList);
  }
}

function updatePhoto() {
  $("#profilePhoto").src = photos[photoIndex % photos.length];
  localStorage.setItem("photoIndex", String(photoIndex % photos.length));
}

function render(lang) {
  currentLanguage = lang;
  localStorage.setItem("language", lang);
  setStaticText(lang);
  setActiveView(currentView);
  updatePhoto();
  if (window.lucide) window.lucide.createIcons();
}

document.addEventListener("DOMContentLoaded", () => {
  render(currentLanguage);

  document.querySelectorAll("[data-view-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const view = link.dataset.viewLink;
      history.pushState(null, "", `#${view}`);
      setActiveView(view);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  $("#languageToggle").addEventListener("click", () => {
    render(currentLanguage === "en" ? "zh" : "en");
  });

  $("#avatarToggle").addEventListener("click", () => {
    photoIndex = (photoIndex + 1) % photos.length;
    updatePhoto();
  });

  $("#collapseButton").addEventListener("click", () => {
    $(".view-card").classList.toggle("collapsed");
  });

  window.addEventListener("hashchange", () => {
    setActiveView(location.hash.slice(1));
  });
});
