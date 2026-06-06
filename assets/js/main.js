const content = {
  en: {
    nav: {
      research: "Research",
      publications: "Publications",
      projects: "Projects",
      education: "Education"
    },
    hero: {
      eyebrow: "Academic Homepage",
      subtitle:
        "M.S. student in Automation at the University of Science and Technology of China, working on autonomous driving planning and VLA systems.",
      intro:
        "My research focuses on reliable end-to-end driving planners, closed-loop evaluation, vision-language-action models, and efficient deployment for real-world autonomous driving systems.",
      featuredPaper: "Featured Paper",
      publications: "Publications"
    },
    profile: {
      role: "Graduate Student, USTC",
      focus: "End-to-End Autonomous Driving"
    },
    stats: {
      papers: "selected papers",
      firstAuthor: "first-author works",
      rank: "undergraduate major ranking",
      nationalScholarship: "National Scholarship"
    },
    research: {
      eyebrow: "Research",
      title: "Research Interests"
    },
    publications: {
      eyebrow: "Publications",
      title: "Selected Publications"
    },
    projects: {
      eyebrow: "Projects",
      title: "Research and Engineering Experience"
    },
    education: {
      eyebrow: "Education",
      title: "Education"
    },
    honors: {
      eyebrow: "Honors",
      title: "Selected Honors"
    },
    footer: {
      note: "Built as a clean static academic homepage for GitHub Pages."
    },
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
        role: "First author",
        venue: "Preprint in preparation",
        desc:
          "ASSCG is a frame-level controller for fast-slow autonomous driving systems. It decides when to query a slower LLM planner, reuse cached guidance, or suppress unstable outputs, using supervised fine-tuning followed by a computation-aware reinforcement learning objective. In nuPlan Hard20, it improves AsyncDriver scores from 65.00 to 67.28 while reducing average per-frame latency from 0.80s to 0.32s.",
        tags: ["Fast-slow systems", "LLM planning", "Latency-aware RL"],
        links: []
      },
      {
        title: "From Representational Complementarity to Dual Systems: Synergizing VLM and Vision-Only Backbones for End-to-End Driving",
        role: "First author",
        venue: "arXiv, 2026",
        desc:
          "This work studies whether VLM and vision-only backbones preserve meaningful differences after being connected to the same end-to-end driving planner. It analyzes representation complementarity with CKA, CCA, and shared-unique SAE, then proposes HybridDriveVLA and DualDriveVLA to improve the accuracy-cost trade-off of VLA-based driving.",
        tags: ["VLA", "Dual systems", "Representation analysis"],
        links: [{ label: "Paper", url: "https://arxiv.org/abs/2602.10719", icon: "file-text" }]
      },
      {
        title: "DriveFine: Refining-Augmented Masked Diffusion VLA for Precise and Robust Driving",
        role: "Second author",
        venue: "arXiv, 2026",
        desc:
          "DriveFine combines flexible decoding with self-correction for masked-diffusion VLA driving. It introduces a plug-and-play block-level mixture-of-experts structure and a hybrid reinforcement learning strategy, improving effectiveness and robustness on NAVSIM v1/v2 and NavHard.",
        tags: ["Masked diffusion", "Mixture-of-experts", "Robust planning"],
        links: [{ label: "Paper", url: "https://arxiv.org/abs/2602.14577", icon: "file-text" }]
      },
      {
        title: "SAMoE-VLA: A Scene Adaptive Mixture-of-Experts Vision-Language-Action Model for Autonomous Driving",
        role: "Collaborator",
        venue: "arXiv, 2026",
        desc:
          "SAMoE-VLA conditions expert selection on structured scene representations instead of token-level routing. It derives MoE routing signals from BEV features and introduces conditional cross-modal causal attention for temporally consistent reasoning across world state, language intent, and action history.",
        tags: ["Scene-adaptive MoE", "BEV routing", "VLA"],
        links: [{ label: "Paper", url: "https://arxiv.org/abs/2603.08113", icon: "file-text" }]
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
      research: "研究方向",
      publications: "论文",
      projects: "项目",
      education: "教育"
    },
    hero: {
      eyebrow: "个人学术主页",
      subtitle: "中国科学技术大学自动化系硕士研究生，研究方向为自动驾驶规划与 VLA 系统。",
      intro:
        "我关注可靠的端到端自动驾驶规划、闭环评估、视觉-语言-动作模型，以及面向真实自动驾驶系统的高效部署与优化。",
      featuredPaper: "代表论文",
      publications: "论文列表"
    },
    profile: {
      role: "中国科学技术大学硕士研究生",
      focus: "端到端自动驾驶"
    },
    stats: {
      papers: "代表论文",
      firstAuthor: "第一作者工作",
      rank: "本科专业排名",
      nationalScholarship: "国家奖学金"
    },
    research: {
      eyebrow: "研究方向",
      title: "Research Interests"
    },
    publications: {
      eyebrow: "论文",
      title: "Selected Publications"
    },
    projects: {
      eyebrow: "项目",
      title: "Research and Engineering Experience"
    },
    education: {
      eyebrow: "教育",
      title: "Education"
    },
    honors: {
      eyebrow: "荣誉",
      title: "Selected Honors"
    },
    footer: {
      note: "基于 GitHub Pages 构建的轻量静态学术主页。"
    },
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
        role: "第一作者",
        venue: "预印本准备中",
        desc:
          "ASSCG 是用于快慢自动驾驶系统的帧级控制器，用于决定何时查询慢速 LLM 规划器、复用缓存指导或抑制不稳定输出。方法采用监督微调和考虑计算成本的强化学习目标。在 nuPlan Hard20 中，集成至 AsyncDriver 后评分从 65.00 提升至 67.28，平均每帧延迟从 0.80 秒降至 0.32 秒。",
        tags: ["快慢系统", "LLM 规划", "延迟感知强化学习"],
        links: []
      },
      {
        title: "From Representational Complementarity to Dual Systems: Synergizing VLM and Vision-Only Backbones for End-to-End Driving",
        role: "第一作者",
        venue: "arXiv, 2026",
        desc:
          "该工作研究 VLM 与纯视觉主干在接入相同端到端驾驶规划器后是否仍保留有意义的差异。论文通过 CKA、CCA 和共享-独有 SAE 分析表征互补性，并提出 HybridDriveVLA 和 DualDriveVLA，以改善 VLA 驱动系统的准确率与计算成本权衡。",
        tags: ["VLA", "双系统", "表征分析"],
        links: [{ label: "Paper", url: "https://arxiv.org/abs/2602.10719", icon: "file-text" }]
      },
      {
        title: "DriveFine: Refining-Augmented Masked Diffusion VLA for Precise and Robust Driving",
        role: "第二作者",
        venue: "arXiv, 2026",
        desc:
          "DriveFine 将灵活解码和自校正能力引入掩码扩散 VLA 驾驶模型，提出即插即用的块级专家混合结构和混合强化学习策略，在 NAVSIM v1/v2 和 NavHard 上展示了有效性与鲁棒性。",
        tags: ["掩码扩散", "专家混合", "鲁棒规划"],
        links: [{ label: "Paper", url: "https://arxiv.org/abs/2602.14577", icon: "file-text" }]
      },
      {
        title: "SAMoE-VLA: A Scene Adaptive Mixture-of-Experts Vision-Language-Action Model for Autonomous Driving",
        role: "合作作者",
        venue: "arXiv, 2026",
        desc:
          "SAMoE-VLA 基于结构化场景表示而非 token 级路由来条件化专家选择，从 BEV 特征中推导 MoE 路由信号，并引入条件跨模态因果注意力，用于跨世界状态、语言意图和动作历史的时间一致推理。",
        tags: ["场景自适应 MoE", "BEV 路由", "VLA"],
        links: [{ label: "Paper", url: "https://arxiv.org/abs/2603.08113", icon: "file-text" }]
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

let currentLanguage = localStorage.getItem("language") || "en";

const $ = (selector) => document.querySelector(selector);

function getPath(obj, path) {
  return path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), obj);
}

function setStaticText(lang) {
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.title = lang === "zh" ? "William Xuan Yu | 个人学术主页" : "William Xuan Yu";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = getPath(content[lang], node.dataset.i18n);
    if (value) node.textContent = value;
  });
  $("#languageLabel").textContent = lang === "en" ? "中文" : "EN";
}

function icon(name) {
  return `<i data-lucide="${name}" aria-hidden="true"></i>`;
}

function renderResearch(lang) {
  $("#researchGrid").innerHTML = content[lang].researchItems
    .map(
      (item) => `
        <article class="research-card">
          <div class="icon-box">${icon(item.icon)}</div>
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </article>
      `
    )
    .join("");
}

function renderPublications(lang) {
  $("#publicationList").innerHTML = content[lang].publicationsItems
    .map(
      (item) => `
        <article class="publication-card">
          <div class="pub-topline">
            <h3>${item.title}</h3>
            <span class="badge">${item.role}</span>
          </div>
          <p>${item.desc}</p>
          <ul class="meta">
            <li>${item.venue}</li>
            ${item.tags.map((tag) => `<li>${tag}</li>`).join("")}
          </ul>
          ${
            item.links.length
              ? `<div class="card-links">${item.links
                  .map(
                    (link) =>
                      `<a href="${link.url}" target="_blank" rel="noreferrer">${icon(link.icon)}<span>${link.label}</span></a>`
                  )
                  .join("")}</div>`
              : ""
          }
        </article>
      `
    )
    .join("");
}

function renderProjects(lang) {
  $("#projectList").innerHTML = content[lang].projectItems
    .map(
      (item) => `
        <article class="project-card">
          <div class="project-topline">
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
    .join("");
}

function renderEducation(lang) {
  $("#educationList").innerHTML = content[lang].educationItems
    .map(
      (item) => `
        <article class="timeline-item">
          <time>${item.date}</time>
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </article>
      `
    )
    .join("");
}

function renderHonors(lang) {
  $("#honorList").innerHTML = content[lang].honorItems
    .map(
      (item) => `
        <article class="honor-item">
          <strong>${item.title}</strong>
          <p>${item.desc}</p>
        </article>
      `
    )
    .join("");
}

function render(lang) {
  setStaticText(lang);
  renderResearch(lang);
  renderPublications(lang);
  renderProjects(lang);
  renderEducation(lang);
  renderHonors(lang);
  localStorage.setItem("language", lang);
  if (window.lucide) window.lucide.createIcons();
}

document.addEventListener("DOMContentLoaded", () => {
  render(currentLanguage);
  $("#languageToggle").addEventListener("click", () => {
    currentLanguage = currentLanguage === "en" ? "zh" : "en";
    render(currentLanguage);
  });
});
