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
      highlights: "6 papers, 3 patents, 2x National Scholarship",
      emailLabel: "Email"
    },
    stats: {
      papers: "selected papers",
      patents: "related patents",
      firstAuthor: "first-author works",
      rank: "undergraduate major ranking"
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
      viewAll: "View all",
      overviewBio: "Bio",
      overviewPapers: "Selected Publications",
      overviewPatents: "Related Patents",
      overviewProjects: "Projects"
    },
    overviewItems: [
      {
        title: "Bio",
        desc:
          "I am a graduate student in the Department of Automation at the University of Science and Technology of China. My research focuses on end-to-end autonomous driving, especially planning, evaluation, VLA systems, and latency-aware decision making."
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
        summary:
          "Closed-loop value estimation and ranking for end-to-end planning; NAVSIM leaderboard best solution (94.5 PDMS), surpassing or matching previous SOTA methods on NAVSIM v1/v2, NavHard, and nuScenes.",
        summaryHtml:
          "Closed-loop value estimation and ranking for end-to-end planning; <strong>NAVSIM leaderboard best solution (94.5 PDMS)</strong>, surpassing or matching previous SOTA methods on NAVSIM v1/v2, NavHard, and nuScenes.",
        desc:
          "CLOVER addresses the mismatch between single-trajectory imitation learning and rule-based multi-metric evaluation in end-to-end autonomous driving planning. It first expands proposal coverage with evaluator-filtered pseudo-expert trajectories, then applies conservative closed-loop self-distillation with teacher-guided top-k and vector-Pareto objectives to optimize both the scoring network and proposal generator. Experiments on NAVSIM v1, NAVSIM v2, NavHard, and open-loop nuScenes show improved planning quality metrics (PDMS/EPDMS) and candidate diversity, surpassing or matching previous SOTA methods. CLOVER achieves 94.5 PDMS and becomes the NAVSIM leaderboard best solution (as of May 21, 2026).",
        tags: ["Closed-loop planning", "NAVSIM", "94.5 PDMS reference", "Trajectory ranking"],
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
        summary:
          "A frame-level controller for fast-slow LLM planning; improves nuPlan Hard20 score from 65.00 to 67.28 while reducing average per-frame latency from 0.80s to 0.32s.",
        desc:
          "ASSCG is a frame-level controller for fast-slow autonomous driving systems. It decides when to query a slower LLM planner, reuse cached guidance, or suppress unstable outputs. The decision problem is modeled as sequence generation with an RWKV backbone, trained by supervised fine-tuning from fixed-schedule pseudo-labels and then optimized with a computation-aware GRPO-style reinforcement learning objective. Integrated into AsyncDriver on nuPlan Hard20, ASSCG improves the score from 65.00 to 67.28 and reduces average per-frame latency from 0.80s to 0.32s. In a RecogDrive-based dual-system architecture on NAVSIM, it also improves both PDMS and speed, with interval analysis explaining when to query or suppress the slow LLM system.",
        tags: ["Fast-slow systems", "LLM planning", "Latency-aware RL", "nuPlan Hard20"],
        links: []
      },
      {
        title: "From Representational Complementarity to Dual Systems: Synergizing VLM and Vision-Only Backbones for End-to-End Driving",
        type: "first",
        role: "First author",
        venue: "arXiv, 2026",
        summary:
          "Analyzes residual complementarity between VLM and vision-only backbones and builds HybridDriveVLA / DualDriveVLA; HybridDriveVLA reaches SOTA among VLA solutions on NAVSIM while DualDriveVLA improves inference speed.",
        desc:
          "This work studies whether VLM and vision-only backbones retain meaningful differences after being connected to the same end-to-end driving planner, and whether these differences can be used to build stronger planning systems. It analyzes representation similarity with CKA, CCA, and shared-unique SAE, then links these findings to behavioral differences and scene-level complementarity on NAVSIM. Based on the analysis, it proposes HybridDriveVLA and DualDriveVLA with complementary VLM and ViT branches plus a trajectory scorer. HybridDriveVLA obtains SOTA performance among VLA-based solutions on NAVSIM, while DualDriveVLA substantially improves average inference speed while staying slightly above the baseline.",
        tags: ["VLA", "Dual systems", "Representation analysis", "NAVSIM"],
        links: [{ label: "Paper", url: "https://arxiv.org/abs/2602.10719", icon: "file-text" }]
      },
      {
        title: "DriveFine: Refining-Augmented Masked Diffusion VLA for Precise and Robust Driving",
        type: "collab",
        role: "Second author",
        venue: "arXiv, 2026",
        summary:
          "A masked-diffusion VLA model with block-level MoE refinement and hybrid RL, improving effectiveness and robustness on NAVSIM v1/v2 and NavHard.",
        desc:
          "DriveFine introduces a masked-diffusion VLA model with flexible decoding and self-correction. It designs a plug-and-play block-level mixture-of-experts structure that injects a refinement expert above the generation expert. By enabling explicit expert selection during inference and blocking gradient transfer during training, the two experts are decoupled while preserving pretrained base capability. A hybrid reinforcement learning strategy encourages effective exploration of the refinement expert while maintaining training stability. Experiments on NAVSIM v1, NAVSIM v2, and NavHard show strong effectiveness and robustness.",
        tags: ["Masked diffusion", "Mixture-of-experts", "Robust planning", "NavHard"],
        links: [{ label: "Paper", url: "https://arxiv.org/abs/2602.14577", icon: "file-text" }]
      },
      {
        title: "SAMoE-VLA: A Scene Adaptive Mixture-of-Experts Vision-Language-Action Model for Autonomous Driving",
        type: "collab",
        role: "Core author",
        venue: "arXiv, 2026",
        summary:
          "Scene-adaptive MoE routing from BEV features plus cross-modal causal attention; achieves state-of-the-art results on nuScenes open-loop planning and LangAuto closed-loop benchmarks with fewer resources.",
        desc:
          "SAMoE-VLA addresses the instability of directly applying token-level MoE mechanisms from LLM architectures to VLA driving models. It conditions expert selection on structured scene representations instead of token embeddings, deriving MoE routing signals from BEV features that encode traffic-scene context. It also introduces conditional cross-modal causal attention to integrate world state, language intent, and action history into a unified temporal reasoning process. Experiments on nuScenes open-loop planning and LangAuto closed-loop benchmarks show state-of-the-art performance with fewer resources than previous VLA- and world-model-based methods.",
        tags: ["Scene-adaptive MoE", "BEV routing", "VLA", "LangAuto"],
        links: [{ label: "Paper", url: "https://arxiv.org/abs/2603.08113", icon: "file-text" }]
      },
      {
        title: "Deployment and Optimization of MapTR-based Lane Detection on Huawei MDC610",
        type: "first",
        role: "First author / Oral presentation",
        venue: "IEEE CCDC",
        summary:
          "Deployment and optimization of MapTR-based lane detection on Huawei MDC610; MapTR inference reduced from 958ms to 220ms and the work was selected as an IEEE CCDC oral presentation.",
        summaryHtml:
          "Deployment and optimization of MapTR-based lane detection on Huawei MDC610; MapTR inference reduced from 958ms to 220ms and the work was selected as an <strong>IEEE CCDC oral presentation</strong>.",
        desc:
          "This work reports the deployment and optimization of MapTR-based lane detection on Huawei MDC610, covering model adaptation, graph optimization, quantization, and platform-specific operator support for edge deployment. Through deep adaptation and optimization, MapTR inference time was reduced from 958ms to 220ms. The work was selected as an IEEE CCDC oral presentation.",
        descHtml:
          "This work reports the deployment and optimization of MapTR-based lane detection on Huawei MDC610, covering model adaptation, graph optimization, quantization, and platform-specific operator support for edge deployment. Through deep adaptation and optimization, MapTR inference time was reduced from 958ms to 220ms. The work was selected as an <strong>IEEE CCDC oral presentation</strong>.",
        tags: ["Huawei MDC610", "MapTR 958ms to 220ms", "Edge deployment", "IEEE CCDC Oral"],
        links: []
      }
    ],
    patentsItems: [
      {
        title: "Method and System for Sewage Suspended-Solid Recognition Based on IA-YOLOv7",
        id: "CN116665092B",
        status: "Granted",
        role: "Lead student inventor; advisor listed as first inventor",
        summary: "Granted patent for an IA-YOLOv7-based recognition method and system for suspended solids in sewage scenarios.",
        desc: "An IA-YOLOv7-based recognition method and system for identifying suspended solids in sewage scenarios."
      },
      {
        title: "Driving Decision Control Method and Electronic Device",
        id: "CN121734456A",
        status: "Published",
        role: "First inventor; derived from ASSCG-related work",
        summary: "Published patent application derived from ASSCG-related fast-slow decision-control work for autonomous driving.",
        desc: "A driving decision-control method and electronic device related to fast-slow decision making for autonomous driving."
      },
      {
        title: "Image Object Detection Method, System, and Device under Adverse Weather",
        id: "CN116311254B",
        status: "Granted",
        role: "Core contributor",
        summary: "Granted patent for object detection under adverse weather, closely related to robust visual perception.",
        desc: "A method, system, and device for improving image object detection under adverse weather conditions."
      }
    ],
    projectItems: [
      {
        title: "Autonomous Driving Multi-Sensor Perception and Fusion Algorithm 2.0",
        meta: "JAC / Huawei collaborative project",
        summary:
          "Edge deployment and optimization of BEVFormer, MapTR v1/v2, FastBEV, FlashOCC, Sparse4D and related algorithms on Huawei MDC610 / MDC610 Pro; MapTR inference reduced from 958ms to 220ms, with an IEEE CCDC oral presentation.",
        summaryHtml:
          "Edge deployment and optimization of BEVFormer, MapTR v1/v2, FastBEV, FlashOCC, Sparse4D and related algorithms on Huawei MDC610 / MDC610 Pro; MapTR inference reduced from 958ms to 220ms, with an <strong>IEEE CCDC oral presentation</strong>.",
        desc:
          "Worked on edge deployment of autonomous-driving algorithms on Huawei Ascend MDC610 / MDC610 Pro platforms, including graph optimization, quantization, and custom operator adaptation. Completed adaptation and deployment for BEVFormer, MapTR v1/v2, FastBEV, FlashOCC, Sparse4D, and related models. Performed deep adaptation and optimization for MapTR, reducing inference time from 958ms to 220ms. This work was presented at IEEE CCDC as “Deployment and Optimization of MapTR-based Lane Detection on Huawei MDC610” and selected as an oral presentation.",
        descHtml:
          "Worked on edge deployment of autonomous-driving algorithms on Huawei Ascend MDC610 / MDC610 Pro platforms, including graph optimization, quantization, and custom operator adaptation. Completed adaptation and deployment for BEVFormer, MapTR v1/v2, FastBEV, FlashOCC, Sparse4D, and related models. Performed deep adaptation and optimization for MapTR, reducing inference time from 958ms to 220ms. This work was presented at IEEE CCDC as “Deployment and Optimization of MapTR-based Lane Detection on Huawei MDC610” and selected as an <strong>oral presentation</strong>.",
        tags: ["Huawei MDC610", "Model deployment", "MapTR 958ms to 220ms", "IEEE CCDC Oral"]
      },
      {
        title: "Earlier Research Projects",
        meta: "Internships and exploratory research",
        summary:
          "Earlier work spans high-speed video analysis at the University of Alberta, dehazing for autonomous-driving object detection, and Transformer-based precipitation forecasting.",
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
      highlights: "6 篇论文，3 项相关专利，2 次国家奖学金",
      emailLabel: "邮箱"
    },
    stats: {
      papers: "代表论文",
      patents: "相关专利",
      firstAuthor: "第一作者工作",
      rank: "本科专业排名"
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
      viewAll: "查看全部",
      overviewBio: "个人简介",
      overviewPapers: "代表论文",
      overviewPatents: "相关专利",
      overviewProjects: "项目经历"
    },
    overviewItems: [
      {
        title: "个人简介",
        desc:
          "我是中国科学技术大学自动化系硕士研究生，目前研究集中在端到端自动驾驶，尤其是规划、评估、VLA 系统和延迟感知决策。"
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
        summary:
          "面向端到端自动驾驶规划的闭环价值估计与排序框架；NAVSIM leaderboard best 方案（94.5 PDMS），在 NAVSIM v1/v2、NavHard、nuScenes 基准上超过或匹配此前 SOTA 方案。",
        summaryHtml:
          "面向端到端自动驾驶规划的闭环价值估计与排序框架；<strong>NAVSIM leaderboard best 方案（94.5 PDMS）</strong>，在 NAVSIM v1/v2、NavHard、nuScenes 基准上超过或匹配此前 SOTA 方案。",
        desc:
          "CLOVER 面向端到端自动驾驶规划提出闭环价值估计与排序框架，解决单轨迹模仿训练与基于规则的多指标评估之间的错配问题。方法首先通过经评估器筛选的伪专家轨迹扩展提案覆盖范围，然后应用保守闭环自蒸馏，利用教师指导的 top-k 和向量帕累托目标优化评分网络和提案生成器。此外，我们对评分器中介的生成器精化何时可靠进行了理论和实证研究。在 NAVSIM v1、NAVSIM v2、NavHard 和开环 nuScenes 上，CLOVER 提升了规划质量指标（PDMS/EPDMS）和候选多样性，超过或匹配此前 SOTA 方案。CLOVER 达到 94.5 PDMS，成为 NAVSIM leaderboard best 方案（截至 2026 年 5 月 21 日）。",
        tags: ["闭环规划", "NAVSIM", "94.5 PDMS", "轨迹排序"],
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
        summary:
          "用于快慢 LLM 自动驾驶规划的帧级门控控制器；nuPlan Hard20 评分从 65.00 提升至 67.28，平均每帧延迟从 0.80 秒降至 0.32 秒。",
        desc:
          "ASSCG 是一种用于快慢自动驾驶系统的帧级控制器，用于决定何时查询慢速 LLM 规划器、复用缓存指导或抑制其输出。该决策问题被建模为序列生成任务，并采用 RWKV 主干网络实现；门控机制先通过固定调度策略生成的伪标签进行监督微调，随后利用考虑计算成本的 GRPO 风格强化学习目标进行优化。在 nuPlan Hard20 基准测试中，将 ASSCG 集成至 AsyncDriver 后，评分从 65.00 提升至 67.28，同时平均每帧延迟从 0.80 秒降至 0.32 秒。在 NAVSIM 标准上，基于 RecogDrive 的双系统架构中，该门控机制使 PDMS 指标和速度均有提升。此外，论文还提供了等效区间、有效区间、失效区间的区间分析，以论证何时应查询或抑制 LLM 慢系统。",
        tags: ["快慢系统", "LLM 规划", "延迟感知强化学习", "nuPlan Hard20"],
        links: []
      },
      {
        title: "From Representational Complementarity to Dual Systems: Synergizing VLM and Vision-Only Backbones for End-to-End Driving",
        type: "first",
        role: "第一作者",
        venue: "arXiv, 2026",
        summary:
          "分析 VLM 与纯视觉主干的残余互补性并构建 HybridDriveVLA / DualDriveVLA；HybridDriveVLA 获得 NAVSIM 基准上 VLA 方案 SOTA 表现，DualDriveVLA 显著提升平均推理速度。",
        desc:
          "该工作研究基于 VLM 和纯视觉的主干网络在接入相同端到端驾驶规划器后是否仍存在有意义的差异，以及这些残余差异能否被利用来构建更好的规划系统。论文通过 CKA、CCA 以及共享-独有 SAE 方法，在主干网络和决策层面分析表征相似性，并将这些发现与行为差异及 NAVSIM 上的场景级互补性相关联。基于此分析，我们提出 HybridDriveVLA 和 DualDriveVLA，通过互补的 VLM 与 ViT 分支结合轨迹评分器，改善 VLM 基线的准确率与成本权衡。其中 HybridDriveVLA 得到 NAVSIM 基准上 VLA 方案 SOTA 表现，DualDriveVLA 则在略高于基线的基础上大幅提高平均推理速度。",
        tags: ["VLA", "双系统", "表征分析", "NAVSIM"],
        links: [{ label: "Paper", url: "https://arxiv.org/abs/2602.10719", icon: "file-text" }]
      },
      {
        title: "DriveFine: Refining-Augmented Masked Diffusion VLA for Precise and Robust Driving",
        type: "collab",
        role: "第二作者",
        venue: "arXiv, 2026",
        summary:
          "结合块级 MoE 精炼专家和混合强化学习的掩码扩散 VLA 模型，在 NAVSIM v1/v2 和 NavHard 上展现有效性与鲁棒性。",
        desc:
          "DriveFine 是一种结合灵活解码与自校正能力的掩码扩散 VLA 模型。我们设计了即插即用的块级专家混合（block-MoE）结构，在生成专家之上注入精炼专家。通过推理过程中启用显式专家选择并阻断训练过程中的梯度传递，两个专家被解耦，从而保留预训练权重的基础能力与通用模式。此外，方法设计了混合强化学习策略，在维持训练稳定性的同时促进对精炼专家的有效探索。在 NAVSIM v1、NAVSIM v2 和 NavHard 基准测试上的大量实验表明，DriveFine 具有强有效性与鲁棒性。",
        tags: ["掩码扩散", "专家混合", "鲁棒规划", "NavHard"],
        links: [{ label: "Paper", url: "https://arxiv.org/abs/2602.14577", icon: "file-text" }]
      },
      {
        title: "SAMoE-VLA: A Scene Adaptive Mixture-of-Experts Vision-Language-Action Model for Autonomous Driving",
        type: "collab",
        role: "核心作者",
        venue: "arXiv, 2026",
        summary:
          "从 BEV 场景特征推导 MoE 路由并结合跨模态因果注意力，在 nuScenes 开环规划和 LangAuto 闭环基准上以更少资源达到先进性能。",
        desc:
          "SAMoE-VLA 针对将继承自 LLM 架构的 token 级 MoE 机制直接应用于 VLA 模型时带来的性能不稳定和安全性能下降问题，提出场景自适应的视觉-语言-动作框架。方法基于结构化场景表示而非 token 嵌入来条件化专家选择，从 BEV 特征中推导 MoE 路由信号，使系统能根据不同驾驶条件进行场景相关的专家权重分配与合并。为了支持跨世界知识、感知、语言和动作的时间一致性推理，方法还引入条件跨模态因果注意力机制，将世界状态、语言意图和动作历史整合到统一因果推理过程中。在 nuScenes 开放环路规划数据集和 LangAuto 闭环基准测试上，SAMoE-VLA 达到先进性能，并以更少资源超过此前 VLA 和世界模型方法。",
        tags: ["场景自适应 MoE", "BEV 路由", "VLA", "LangAuto"],
        links: [{ label: "Paper", url: "https://arxiv.org/abs/2603.08113", icon: "file-text" }]
      },
      {
        title: "Deployment and Optimization of MapTR-based Lane Detection on Huawei MDC610",
        type: "first",
        role: "第一作者 / Oral 汇报",
        venue: "IEEE CCDC",
        summary:
          "MapTR-based 车道检测在华为 MDC610 平台上的部署与优化；MapTR 推理时间从 958ms 优化至 220ms，相关工作入选 IEEE CCDC oral 汇报。",
        summaryHtml:
          "MapTR-based 车道检测在华为 MDC610 平台上的部署与优化；MapTR 推理时间从 958ms 优化至 220ms，相关工作入选 <strong>IEEE CCDC oral 汇报</strong>。",
        desc:
          "该工作汇报了 MapTR-based 车道检测在华为 MDC610 平台上的部署与优化，覆盖模型适配、图优化、量化和面向边缘部署的平台算子支持等内容。通过深度适配与优化，MapTR 推理时间从 958ms 优化至 220ms。相关工作入选 IEEE CCDC oral 汇报。",
        descHtml:
          "该工作汇报了 MapTR-based 车道检测在华为 MDC610 平台上的部署与优化，覆盖模型适配、图优化、量化和面向边缘部署的平台算子支持等内容。通过深度适配与优化，MapTR 推理时间从 958ms 优化至 220ms。相关工作入选 <strong>IEEE CCDC oral 汇报</strong>。",
        tags: ["Huawei MDC610", "MapTR 958ms 到 220ms", "边缘部署", "IEEE CCDC Oral"],
        links: []
      }
    ],
    patentsItems: [
      {
        title: "基于 IA-YOLOV7 的污水悬浮物识别方法及系统",
        id: "CN116665092B",
        status: "已授权",
        role: "除导师第一发明人",
        summary: "围绕污水场景中悬浮物识别的 IA-YOLOV7 方法与系统，已授权。",
        desc: "面向污水场景中悬浮物识别的 IA-YOLOV7 方法与系统。"
      },
      {
        title: "一种驾驶决策控制方法和电子设备",
        id: "CN121734456A",
        status: "已公开",
        role: "第一发明人；ASSCG 延伸工作",
        summary: "由 ASSCG 相关工作延伸出的自动驾驶快慢系统决策控制专利申请，第一发明人。",
        desc: "与自动驾驶快慢系统决策控制相关的方法和电子设备。"
      },
      {
        title: "一种恶劣天气情况下的图像目标检测方法、系统及设备",
        id: "CN116311254B",
        status: "已授权",
        role: "核心参与者",
        summary: "面向恶劣天气视觉感知鲁棒性的目标检测方法、系统及设备，已授权。",
        desc: "面向恶劣天气情况下图像目标检测的增强方法、系统及设备。"
      }
    ],
    projectItems: [
      {
        title: "自动驾驶多传感器感知与融合算法 2.0",
        meta: "江淮 / 华为合作项目",
        summary:
          "在华为 MDC610 / MDC610 Pro 平台部署并优化 BEVFormer、MapTR v1/v2、FastBEV、FlashOCC、Sparse4D 等算法；MapTR 推理时间从 958ms 优化至 220ms，相关工作入选 IEEE CCDC oral 汇报。",
        summaryHtml:
          "在华为 MDC610 / MDC610 Pro 平台部署并优化 BEVFormer、MapTR v1/v2、FastBEV、FlashOCC、Sparse4D 等算法；MapTR 推理时间从 958ms 优化至 220ms，相关工作入选 <strong>IEEE CCDC oral 汇报</strong>。",
        desc:
          "参与自动驾驶算法在华为昇腾 MDC610 / MDC610 Pro 平台上的边缘部署，涉及图优化、量化和自定义算子适配。已完成 BEVFormer、MapTR v1/v2、FastBEV、FlashOCC、Sparse4D 等算法适配和部署，并对 MapTR 模型做了深度适配优化，将推理时间从 958ms 优化至 220ms。此部分内容以 “Deployment and Optimization of MapTR-based Lane Detection on Huawei MDC610” 为题在 IEEE CCDC（The 38th Chinese Control and Decision Conference）会议汇报，并获得 oral。",
        descHtml:
          "参与自动驾驶算法在华为昇腾 MDC610 / MDC610 Pro 平台上的边缘部署，涉及图优化、量化和自定义算子适配。已完成 BEVFormer、MapTR v1/v2、FastBEV、FlashOCC、Sparse4D 等算法适配和部署，并对 MapTR 模型做了深度适配优化，将推理时间从 958ms 优化至 220ms。此部分内容以 “Deployment and Optimization of MapTR-based Lane Detection on Huawei MDC610” 为题在 IEEE CCDC（The 38th Chinese Control and Decision Conference）会议汇报，并获得 <strong>oral</strong>。",
        tags: ["Huawei MDC610", "模型部署", "MapTR 958ms 到 220ms", "IEEE CCDC Oral"]
      },
      {
        title: "早期研究项目",
        meta: "实习与探索性研究",
        summary:
          "包括阿尔伯塔大学高速视频分析实习、面向自动驾驶目标检测的雾图增强，以及基于 Transformer 的降水量预测研究。",
        desc:
          "包括阿尔伯塔大学本科实习项目 Artificial Intelligence and TensorFlow for High Speed Video Analysis，面向自动驾驶目标检测的 Progressive Enhancement Dehazing for Object Detection in Autonomous Driving，以及 Precipitation Forecasting using Transformer: a Comparative Study with U-Net 等早期研究。"
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
let photoTimer = null;

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

function compactCard(item, options = {}) {
  const meta = options.meta || [];
  return `
    <article class="compact-card">
      <div class="card-topline">
        <h3>${item.title}</h3>
        ${options.badge ? `<span class="badge ${options.badgeClass || ""}">${options.badge}</span>` : ""}
      </div>
      <p>${item.summaryHtml || item.summary || item.desc}</p>
      ${
        meta.length
          ? `<ul class="meta">${meta.map((entry) => `<li>${entry}</li>`).join("")}</ul>`
          : ""
      }
    </article>
  `;
}

function overviewSection(title, view, body) {
  return `
    <section class="overview-section">
      <div class="overview-section-header">
        <h3>${title}</h3>
        <a href="#${view}" data-overview-jump="${view}">${content[currentLanguage].ui.viewAll}</a>
      </div>
      <div class="overview-feature-list">${body}</div>
    </section>
  `;
}

function renderOverview() {
  const t = content[currentLanguage].ui;
  const basics = `
    <section class="overview-section">
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
    </section>
  `;

  const publications = overviewSection(
    t.overviewPapers,
    "publications",
    content[currentLanguage].publicationsItems
      .map((item) => compactCard(item, { badge: item.role, meta: [item.venue, ...item.tags.slice(0, 3)] }))
      .join("")
  );

  const patents = overviewSection(
    t.overviewPatents,
    "patents",
    content[currentLanguage].patentsItems
      .map((item) => compactCard(item, { badge: item.status, badgeClass: "green", meta: [item.id, item.role] }))
      .join("")
  );

  const projects = overviewSection(
    t.overviewProjects,
    "projects",
    content[currentLanguage].projectItems
      .map((item) => compactCard(item, { badge: item.meta, meta: item.tags || [] }))
      .join("")
  );

  return `${basics}${publications}${patents}${projects}`;
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
      <p>${item.descHtml || item.desc}</p>
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
    const haystack = [item.title, item.role, item.venue, item.desc, item.summary, ...item.tags].join(" ").toLowerCase();
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
              <p>${item.descHtml || item.desc}</p>
              <ul class="meta">
                ${(item.tags || []).map((tag) => `<li>${tag}</li>`).join("")}
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

function wireOverviewLinks() {
  document.querySelectorAll("[data-overview-jump]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const view = link.dataset.overviewJump;
      history.pushState(null, "", `#${view}`);
      setActiveView(view);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
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
  if (currentView === "overview") {
    wireOverviewLinks();
  }
}

function updatePhoto() {
  const index = photoIndex % photos.length;
  document.querySelectorAll(".profile-photo").forEach((photo, photoNodeIndex) => {
    photo.classList.toggle("is-active", photoNodeIndex === index);
  });
  $("#avatarToggle").classList.toggle("showing-formal", index === 0);
  $("#avatarToggle").classList.toggle("showing-casual", index === 1);
  localStorage.setItem("photoIndex", String(index));
}

function nextPhoto() {
  photoIndex = (photoIndex + 1) % photos.length;
  updatePhoto();
}

function startPhotoRotation() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  window.clearInterval(photoTimer);
  photoTimer = window.setInterval(nextPhoto, 6000);
}

function stopPhotoRotation() {
  window.clearInterval(photoTimer);
  photoTimer = null;
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
    nextPhoto();
    startPhotoRotation();
  });

  $("#avatarToggle").addEventListener("mouseenter", stopPhotoRotation);
  $("#avatarToggle").addEventListener("mouseleave", startPhotoRotation);
  $("#avatarToggle").addEventListener("focusin", stopPhotoRotation);
  $("#avatarToggle").addEventListener("focusout", startPhotoRotation);
  startPhotoRotation();

  $("#collapseButton").addEventListener("click", () => {
    $(".view-card").classList.toggle("collapsed");
  });

  window.addEventListener("hashchange", () => {
    setActiveView(location.hash.slice(1));
  });
});
