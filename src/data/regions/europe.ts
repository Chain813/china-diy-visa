import type { CountryData } from '../../types/visa';

export const EUROPE_COUNTRIES: CountryData[] = [
  {
    "id": "826",
    "code": "GBR",
    "nameZh": "英国",
    "nameEn": "United Kingdom",
    "region": "欧洲 / EUROPE",
    "coords": [
      -2.5,
      54
    ],
    "badge": "GOV.UK网申 + VFS指纹",
    "tierColor": "#4A7B82",
    "labelPriority": true,
    "processing": "标准约 15 工作日",
    "submission": "GOV.UK 在线提交 + VFS Global 递签",
    "summary": "英国签证在 GOV.UK 在线填表缴费后，到 VFS 官网自助上传英文翻译PDF并预约录指纹，目前已全面推行电子签 eVisa。",
    "pitfalls": [
      "【旅游签切忌临时大额转入】英国签证官最反感“平时余额几千、送签前突然转入几万”的流水，若确有理财赎回或奖金入账，务必附英文资金来源说明。",
      "【学签资金必须存满 28 天】Student Visa 存款证明开具前资金必须在账户连续存满至少 28 天，且开具日期距递交不得超过 31 天。",
      "【所有中文文件必须配英文翻译】户口本、在职证明、流水标注、结婚证等若只传中文原件不附英文翻译，极易导致直接拒签。",
      "【注意 UKVI eVisa 电子签绑定】全面取消 BRP 实体卡后，下签务必及时关联 UKVI 账户生成 Share Code，避免值机受阻。"
    ],
    "links": [
      {
        "title": "GOV.UK 英国签证官方总入口",
        "url": "https://www.gov.uk/apply-to-come-to-the-uk",
        "desc": "全类别签证条件查询与网申入口"
      },
      {
        "title": "GOV.UK 标准访客签证申请",
        "url": "https://www.gov.uk/standard-visitor/apply-standard-visitor-visa",
        "desc": "2年/5年/10年多次旅游探亲入口"
      },
      {
        "title": "VFS Global 中国区英国签证中心",
        "url": "https://visa.vfsglobal.com/chn/en/gbr/your-appointment",
        "desc": "预约录指纹及上传材料"
      }
    ],
    "jobLinks": [
      {
        "title": "GOV.UK Find a job 官方招聘网",
        "url": "https://www.gov.uk/find-a-job",
        "desc": "英国就业与养老金部官方职位搜索引擎"
      },
      {
        "title": "LinkedIn 英国职场",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "检索具备 Skilled Worker 担保资质的科技与金融雇主"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "Student Visa 学生签证",
          "fee": "524 GBP + 776 GBP/年 IHS",
          "desc": "换取学校 CAS 后最早开学前6个月网申，须完成指定医院肺结核检测 (TB Test)。",
          "tips": "资金须连续存满 28 天（伦敦1,483 GBP/月，非伦敦1,136 GBP/月）。",
          "steps": [
            {
              "title": "换取 CAS 并做 TB 肺结核体检",
              "detail": "在指定诊所拿 TB 报告。"
            },
            {
              "title": "准备28天以上存期存款",
              "detail": "覆盖学费尾款与9个月生活费。"
            },
            {
              "title": "GOV.UK 缴费并 VFS 录指纹",
              "detail": "下签后关联 UKVI eVisa 账户。"
            }
          ],
          "checklist": [
            "有效护照",
            "CAS 确认函",
            "TB 肺结核检测报告",
            "28天存款证明及流水",
            "语言成绩与毕业证（如适用）",
            "ATAS 证书（部分理工科）"
          ],
          "processing": "标准约 15 个工作日（支持 5 日/次日加急）",
          "submission": "凭学校 CAS 在 GOV.UK 在线缴费 + VFS Global 上传材料及录指纹",
          "diySupport": "diy"
        }
      ],
      "work": [
        {
          "id": "skilled-global-talent",
          "title": "Skilled Worker 技术工签 / Global Talent",
          "fee": "769–1,519 GBP + 1,035 GBP/年 IHS 医疗附加费",
          "processing": "标准约 15 个工作日（支持 5 日/次日加急）",
          "submission": "GOV.UK 在线提交缴费 + VFS Global 上传材料录指纹（Global Talent 须先取背书）",
          "diySupport": "diy",
          "desc": "Skilled Worker 需取得具备 Sponsor Licence 的英国雇主签发 CoS 担保证书并满足对应岗位最低年薪与英语 B1 要求；Global Talent 面向科技、学术研究及文化艺术领军/潜力人才，获权威机构背书后无需雇主担保即可自由受雇或创业。",
          "tips": "教育、医疗及社工等受监管岗位须提前提供国内无犯罪记录公证件；满 5 年合法工作居留后均可申请英国永居 (ILR)。",
          "steps": [
            {
              "title": "获取雇主 CoS 编号或 Global Talent 背书",
              "detail": "Skilled Worker 核对 SOC 代码与年薪门槛；Global Talent 先向 Tech Nation/Royal Society 等机构申领 Endorsement。"
            },
            {
              "title": "GOV.UK 在线填表并缴纳签证费与 IHS",
              "detail": "关联 CoS 或背书编号，在线全额支付 1,035 GBP/年医疗附加费。"
            },
            {
              "title": "VFS 预约上传材料并录指纹",
              "detail": "无需面谈，标准约 3 周下发 eVisa 电子签。"
            }
          ],
          "checklist": [
            "有效护照及肺结核 (TB) 检测报告",
            "雇主 CoS 担保证书编号或 Global Talent 背书批准函",
            "UKVI 雅思 B1 以上英语成绩（或英国/英语国家学位证明）",
            "无犯罪记录公证及英文翻译（受监管岗位适用）"
          ]
        }
      ],
      "immigration": [
        {
          "id": "main",
          "title": "永居 ILR (5年工签 / 10年长居)",
          "fee": "3,029 GBP",
          "desc": "持工签满5年或合法长居满10年，通过 Life in the UK 与英语 B1 即可申请永居。",
          "tips": "任意连续12个月离境不超过 180 天。",
          "steps": [
            {
              "title": "核算5年/10年离境天数",
              "detail": "确保未超180天限制。"
            },
            {
              "title": "通过 Life in the UK 考试",
              "detail": "考取官方合格编号。"
            },
            {
              "title": "境内在线递交 SET(O)/SET(LR)",
              "detail": "可加急 1 工作日获批。"
            }
          ],
          "checklist": [
            "历年护照与 eVisa 记录",
            "Life in the UK 合格编号",
            "英语 B1 证明",
            "5年出入境清单与雇主支持信",
            "近3个月工资单与流水"
          ],
          "processing": "标准最长 6 个月（支持 5 日/1 日加急）",
          "submission": "英国境内 GOV.UK 在线递交 SET(O)/SET(LR) 并预约 UKVCAS 录指纹",
          "diySupport": "diy"
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "Standard Visitor 标准访客签（默认2年多次）",
          "fee": "127 GBP",
          "desc": "中国公民默认获批 2 年多次往返（单次最长6个月），也可申 5 年或 10 年多次。",
          "tips": "重在“每月稳定工资入账+日常消费匹配”，所有中文材料须附英文翻译。",
          "steps": [
            {
              "title": "GOV.UK 在线英文填表缴费",
              "detail": "获取 GWF 编号。"
            },
            {
              "title": "VFS 官网上传翻译件并预约",
              "detail": "自助上传PDF扫描件。"
            },
            {
              "title": "到场递交护照录指纹",
              "detail": "无需面谈，约 15 工作日出签。"
            }
          ],
          "checklist": [
            "有效护照",
            "GOV.UK Checklist 与 VFS 预约单",
            "中英文在职证明与营业执照翻译",
            "近6个月工资流水（重点标注）",
            "英文行程单、机酒订单与资产翻译"
          ],
          "processing": "标准约 15 个工作日",
          "submission": "GOV.UK 在线英文填表缴费 + VFS Global 上传翻译件并录指纹",
          "diySupport": "diy"
        }
      ],
      "other": [
        {
          "id": "visit-psw",
          "title": "探亲访友 / 毕业生工签 (PSW)",
          "fee": "127 GBP（访客探亲）/ 880 GBP + 1,035 GBP/年 IHS（PSW）",
          "processing": "探亲约 15 个工作日 / PSW 境内约 8 周",
          "submission": "探亲走 GOV.UK + VFS Global / PSW 由英国毕业生手机 App 扫护照境内网申",
          "diySupport": "diy",
          "desc": "赴英探望子女或亲友走 Standard Visitor 通道并附邀请方 eVisa Share Code 与住址证明；在英国完成合资格本科或硕博学位后可在学生签到期前境内直接网申 2 年（博士 3 年）Graduate Route (PSW) 无担保开放工签。",
          "tips": "探亲切记让在英亲友提供最新英国水电账单/市政税账单及 eVisa Share Code；PSW 须等待学校向 UKVI 正式通报完成学业后方可在英国境内提交。",
          "steps": [
            {
              "title": "确认探亲或境内 PSW 申请路径",
              "detail": "探亲向在英亲友索取邀请函与住址账单；PSW 确认学校已向 UKVI 上报毕业结果且当前在英境内。"
            },
            {
              "title": "GOV.UK 在线提交并完成身份核验",
              "detail": "探亲赴 VFS 录指纹；PSW 使用 UK Immigration: ID Check 手机 App 扫芯片护照直接在线递交。"
            }
          ],
          "checklist": [
            "有效护照（或 BRP/eVisa 账户信息）",
            "在英亲友邀请函、eVisa Share Code 及英国住址账单（探亲）",
            "亲属关系公证英文翻译及工资流水（探亲）",
            "CAS 编号及学校完成学业确认邮件（PSW）"
          ]
        }
      ]
    }
  },
  {
    "id": "276",
    "code": "DEU",
    "nameZh": "德国",
    "nameEn": "Germany",
    "region": "欧洲 / EUROPE",
    "coords": [
      10.45,
      51.16
    ],
    "badge": "APS审核 + digital.diplo.de",
    "tierColor": "#4A7B82",
    "labelPriority": true,
    "processing": "1–4 周（短签）/ 4–8 周（长签）",
    "submission": "Consular Services Portal / TLScontact",
    "summary": "短期旅游商务走申根签；留学须先过北京 APS 审核；工作与移民可通过德国外交部新在线门户 digital.diplo.de 预审蓝卡、机会卡及双元制。",
    "pitfalls": [
      "【切勿在非官方平台预约 APS/递签】APS 审核与 digital.diplo.de 均完全免费或按官方标准收费，警惕声称“内部加急号”的黄牛。",
      "【申根“Visa Shopping”大忌】哪国停留天数最多就必须申哪国（而非哪个好约申哪个）；拿德国签却几乎不去德国直接去他国，入境或下次续签极易被拒。",
      "【留学自保金 Sperrkonto 勿用普通国内存款替代】国内银行普通定期存款证明在德国使馆不被认可，必须开通 Fintiba / Expatrio 等德国官方认可的自保金账户。"
    ],
    "links": [
      {
        "title": "德国外交部在线签证门户",
        "url": "https://digital.diplo.de/",
        "desc": "机会卡、蓝卡、留学在线预审"
      },
      {
        "title": "德国机会卡 (Chancenkarte)",
        "url": "https://digital.diplo.de/chancenkarte",
        "desc": "无Offer赴德求职签证"
      },
      {
        "title": "德国驻华使领馆官网",
        "url": "https://china.diplo.de",
        "desc": "各领区签证须知与预约"
      }
    ],
    "jobLinks": [
      {
        "title": "Make it in Germany 官方职位库",
        "url": "https://www.make-it-in-germany.com/en/working-in-germany/job-listings",
        "desc": "德国联邦政府面向海外技术人才的官方招聘直通车"
      },
      {
        "title": "德国联邦劳动局 Jobsuche",
        "url": "https://www.arbeitsagentur.de/en/working-in-germany/how-to-find-a-job",
        "desc": "全德最大官方公共就业平台（含双元制与蓝卡岗位）"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "德国留学签证（公立大学免学费）",
          "fee": "75 EUR",
          "desc": "须先过北京 APS 审核部面谈拿 APS 证书，并开设德国自保金账户 (Sperrkonto) 存入约 11,904 EUR。",
          "tips": "中国已加入海牙公约，学历或亲属公证办理海牙认证即可，无需再跑使馆双认证。",
          "steps": [
            {
              "title": "完成北京 APS 审核面谈",
              "detail": "获取 APS 证书。"
            },
            {
              "title": "拿大学录取信并开立自保金账户",
              "detail": "通过 Expatrio/Fintiba 冻结一年生活费。"
            },
            {
              "title": "online/使馆递签取签",
              "detail": "约 3–4 周出签。"
            }
          ],
          "checklist": [
            "有效护照",
            "APS 审核证书原件",
            "德国大学录取通知书",
            "自保金冻结证明",
            "医疗保险与德文/英文动机信"
          ],
          "processing": "APS 审核排期 + 使领馆审理约 4–8 周",
          "submission": "先过北京 APS 审核部，后经 digital.diplo.de 预审并赴使领馆/TLS 录指纹",
          "diySupport": "diy"
        }
      ],
      "work": [
        {
          "id": "bluecard",
          "title": "欧盟蓝卡 (EU Blue Card)",
          "fee": "75 EUR",
          "desc": "德国面向高学历专业人才的顶级工作居留，无需劳动力市场审查，持蓝卡且缴纳养老保险满 27 个月（德语达 B1 仅需 21 个月）即可直接申请德国永久居留。",
          "tips": "毕业院校和学位必须在德国官方 Anabin 数据库显示为 H+ 且对应，否则需提前向 ZAB 申请个人学历评估。",
          "steps": [
            {
              "title": "核对年薪门槛与 Anabin 学历认证",
              "detail": "确认德国雇主提供的税前年薪达到当年蓝卡标准（紧缺职业如 IT/工程/医疗门槛更低），并在 anabin.kmk.org 截图学校与学位 H+ 页面。"
            },
            {
              "title": "让雇主填写《雇佣关系声明》",
              "detail": "由德国企业填写并签署官方表格 Erklärung zum Beschäftigungsverhältnis，列明岗位职责与薪资。"
            },
            {
              "title": "在 digital.diplo.de 在线提交预审",
              "detail": "注册德国外交部在线签证门户，上传护照、合同、Anabin 截图与简历，由使领馆工作人员在线预审。"
            },
            {
              "title": "预约使领馆窗口核验原件并录指纹",
              "detail": "预审通过后按预约日期携带纸质原件到场核验并缴费 75 欧元，约 2–4 周获批。"
            }
          ],
          "checklist": [
            "有效护照原件",
            "德国雇主正式劳动合同及雇佣关系声明",
            "Anabin 学校与学位 H+ 截图（或 ZAB 认证书）",
            "本科及以上学位证书与英文简历",
            "入境医疗保险证明"
          ],
          "processing": "在线预审 + 递签后约 2–4 周",
          "submission": "digital.diplo.de 在线预审 + 驻华使领馆核验原件录指纹",
          "diySupport": "advisory",
          "advisoryNote": "欧盟蓝卡须先获得德国雇主出具符合当年法定薪资门槛的正式劳动合同及《雇佣关系声明》，无雇主 Offer 无法直接自助申请（无 Offer 求职可查看“德国机会卡 Chancenkarte”）。"
        },
        {
          "id": "chancenkarte",
          "title": "德国机会卡 (Chancenkarte · 无Offer找工作)",
          "fee": "75 EUR",
          "desc": "允许中国专业人才在没有德国工作 Offer 的情况下先入境德国合法居留 1 年找工作，期间每周可合法兼职 20 小时及进行试工。",
          "tips": "拥有德国认可的本科/职业学历可直接拿卡；或者通过德语/英语、年龄、工作经验凑够 6 分积分即可申请。",
          "steps": [
            {
              "title": "确认直通资格或凑满 6 分积分",
              "detail": "核对 Anabin 学历是否完全认可；若部分认可，按语言（德语A1/B1或英语B2）、年龄及经验核算积分是否 ≥ 6 分。"
            },
            {
              "title": "开设德国自保金账户 (Sperrkonto)",
              "detail": "因无雇主收入，须在 Expatrio/Fintiba 存入约 12,000+ EUR 作为一年生活费担保（或提供德国兼职合同）。"
            },
            {
              "title": "在 digital.diplo.de/chancenkarte 在线提交",
              "detail": "上传学历、语言证书、自保金证明、保险及个人简历完成预审。"
            },
            {
              "title": "赴使领馆录指纹取签",
              "detail": "获批后持 1 年期机会卡入境德国面试找全职工作并就地转蓝卡/工签。"
            }
          ],
          "checklist": [
            "有效护照与个人简历",
            "Anabin 学历截图或 ZAB 学历评估报告",
            "德语 A1+ 或 英语 B2 语言证书（积分制必需）",
            "德国自保金账户 (Sperrkonto) 冻结证明",
            "覆盖1年的旅行/居留医疗保险单"
          ],
          "processing": "在线预审 + 递签后约 4–8 周",
          "submission": "digital.diplo.de/chancenkarte 全程在线预审 + 使领馆录指纹",
          "diySupport": "diy"
        },
        {
          "id": "ausbildung",
          "title": "双元制带薪职业培训 (Duales Ausbildung)",
          "fee": "75 EUR",
          "desc": "在德国企业带薪当学徒（2–3.5 年）同时在公立职业学校上课，免学费且每月领 900–1,300 欧元培训津贴，毕业留企工作 2 年即可转德国永居。",
          "tips": "核心门槛是德语水平（通常需 B1 或 B2，护理/机电类最缺人），无需高学历，高中/中专毕业生即可在 arbeitsagentur.de 直申企业。",
          "steps": [
            {
              "title": "在国内考取德语 B1/B2 证书",
              "detail": "通过歌德学院、欧标 TELC 或 ÖSD 考取德语证书。"
            },
            {
              "title": "在德国官方招聘网投递双元制岗位",
              "detail": "在 arbeitsagentur.de/jobsuche 筛选 Ausbildung 岗位，投递德文简历与动机信并参加线上面试。"
            },
            {
              "title": "签署企业培训合同并获得联邦劳动局预批",
              "detail": "拿到企业 Ausbildungsvertrag 与职业学校录取位置。"
            },
            {
              "title": "在 digital.diplo.de 申请职业培训签证",
              "detail": "上传合同、德语证书与住宿证明预审后到使领馆递签。"
            }
          ],
          "checklist": [
            "有效护照与德文简历/动机信",
            "德国企业签署的职业培训合同 (Ausbildungsvertrag)",
            "歌德/TELC 德语 B1 或 B2 证书",
            "高中/中专/大专毕业证公证翻译件",
            "如津贴低于最低标准需少量补充自保金"
          ],
          "processing": "约 4–8 周（含联邦劳动局预批）",
          "submission": "取得企业培训合同后经 digital.diplo.de 预审并赴使领馆递签",
          "diySupport": "advisory",
          "advisoryNote": "双元制带薪职业培训须先取得德国企业签署的正式培训合同 (Ausbildungsvertrag) 及职业学校名额与联邦劳动局预批，无法无企业培训合同直接申办签证。"
        }
      ],
      "immigration": [
        {
          "id": "pr-citizenship",
          "title": "德国永居 (Niederlassungserlaubnis) / 5年入籍新政",
          "fee": "113–147 EUR（永居）/ 255 EUR（入籍）",
          "processing": "约 2–6 个月（视各州外管局排期）",
          "submission": "向居住地德国外国人管理局 (Ausländerbehörde) 在线或窗口预约递交",
          "diySupport": "diy",
          "desc": "持欧盟蓝卡缴纳德国法定养老保险满 27 个月（德语达 B1 仅需 21 个月！）即可申请德国永久居留；普通工作居留通常满 36 个月（德国高校毕业生满 24 个月）可申永居。德国最新国籍法已将常规入籍年限缩短至 5 年且允许保留原国籍制度（须注意中国国籍法不承认双国籍规定）。",
          "tips": "保持连续德国法定养老保险缴纳、足够人均居住面积的合法租房合同，并提前考取德语 B1 及入籍生活常识测试 (Leben in Deutschland)。",
          "steps": [
            {
              "title": "累计法定养老保险缴纳月数",
              "detail": "蓝卡 21/27 个月，德国高校毕业生 24 个月，普通工签 36 个月，入籍常规 5 年。"
            },
            {
              "title": "考取德语 B1 与生活知识测试",
              "detail": "取得歌德/TELC 德语 B1 证书及 Leben in Deutschland 合格证明。"
            },
            {
              "title": "向当地外管局预约递交材料",
              "detail": "提交养老保险记录、近 6 个月工资单、税单与租房合同审核制卡。"
            }
          ],
          "checklist": [
            "有效护照与当前德国居留卡 (eAT)",
            "德国法定养老保险缴纳记录 (Rentenversicherungsverlauf)",
            "近 6 个月工资单、在职证明与完税凭证",
            "租房合同及房东居住证明 (Wohnungsgeberbestätigung)",
            "德语 B1 证书与 Leben in Deutschland 考试证明"
          ]
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "德国申根短期旅游签证 (C类)",
          "fee": "90 EUR + TLS服务费",
          "desc": "可在 29 个申根国畅行，须在 VIDEX 填表并在中智德签 (TLScontact) 递交。",
          "tips": "必须购买保额 ≥ 30,000 欧元的申根医疗保险。",
          "steps": [
            {
              "title": "VIDEX 在线填表打印二维码",
              "detail": "手写签名。"
            },
            {
              "title": "TLScontact 预约递交录指纹",
              "detail": "提交流水、在职与行程。"
            }
          ],
          "checklist": [
            "有效护照",
            "VIDEX 申请表与2张彩照",
            "3万欧申根保险单",
            "近6个月银行盖章流水",
            "英文在职证明、营业执照与机酒行程"
          ],
          "processing": "约 10–15 个自然日",
          "submission": "VIDEX 在线填表 + 中智德签 (TLScontact) 递交录指纹",
          "diySupport": "diy"
        }
      ],
      "other": [
        {
          "id": "family-business",
          "title": "家庭团聚 / 商务申根签",
          "fee": "75 EUR（家庭团聚长签）/ 90 EUR + TLS服务费（商务短签）",
          "processing": "商务约 10–15 天 / 家庭团聚约 4–12 周",
          "submission": "商务走 VIDEX + TLScontact / 家庭团聚经 digital.diplo.de 在线预审后使领馆递交",
          "diySupport": "advisory",
          "advisoryNote": "家庭团聚须先由在德配偶或亲属提供合法居留卡、收入与住房证明并完成结婚/出生证海牙认证；商务签须德方邀请企业出具正式商务邀请函。",
          "desc": "家庭团聚 D 签适用于配偶或未成年子女赴德与持工作/蓝卡/留学居留的家属团聚（蓝卡持有者的配偶可完全豁免德语 A1 要求！）；短期商务考察参展走 C 类商务申根签。",
          "tips": "中国签发的结婚证与出生医学证明公证件须办理中国外交部海牙认证 (Apostille)，无需再跑德国使馆双认证。",
          "steps": [
            {
              "title": "办理海牙认证公证或索取商务邀请函",
              "detail": "团聚备齐海牙认证结婚/出生公证及德方收入住房证明；商务备好德方抬头纸邀请函。"
            },
            {
              "title": "在线填表/预审并递交原件录指纹",
              "detail": "团聚在 digital.diplo.de 上传预审后赴使领馆核验贴 D 签；商务走 VIDEX + TLScontact。"
            }
          ],
          "checklist": [
            "有效护照与签名申请表",
            "海牙认证结婚证/出生证公证（团聚）或德方邀请函（商务）",
            "在德配偶居留卡、租房合同与工资单（团聚）或中方派遣函（商务）",
            "德语 A1 证书（蓝卡配偶豁免）及覆盖赴德期间的医疗保险"
          ]
        }
      ]
    }
  },
  {
    "id": "250",
    "code": "FRA",
    "nameZh": "法国",
    "nameEn": "France",
    "region": "欧洲 / EUROPE",
    "coords": [
      2.21,
      46.23
    ],
    "badge": "France-Visas + TLScontact",
    "tierColor": "#4A7B82",
    "labelPriority": true,
    "processing": "5–15 工作日",
    "submission": "France-Visas + 中智法签 TLScontact",
    "summary": "法国出签极快，良好记录者常获批 1–5 年多次申根签。均需先在 France-Visas 填表，再赴 TLScontact 递交。",
    "pitfalls": [
      "【借住亲友家 vs 住酒店材料差异巨大】若填住朋友家必须提供法国市政府出具的原件《接待证明》，寄送耗时久；普通旅游直接预订可免费取消的正规酒店即可。",
      "【切忌递交假机票与临期退订酒店】法签审核期间如被抽查酒店订单已取消，会直接以“行程不实”拒签。",
      "【留学必须先过 Etudes en France】未经高教署评估面谈直接在 France-Visas 递交学生签会被直接退回。"
    ],
    "links": [
      {
        "title": "France-Visas 法国官方门户",
        "url": "https://france-visas.gouv.fr/chine",
        "desc": "全类别电子填表与清单"
      },
      {
        "title": "法国留学签证官方指引",
        "url": "https://france-visas.gouv.fr/en/etudiant",
        "desc": "高教署衔接流程"
      },
      {
        "title": "TLScontact 中智法签官网",
        "url": "https://visas-fr.tlscontact.com/",
        "desc": "预约递交与追踪"
      }
    ],
    "jobLinks": [
      {
        "title": "EURES 欧盟官方跨国就业平台",
        "url": "https://eures.europa.eu/jobseekers_en",
        "desc": "官方覆盖法国在内的欧洲31国雇主直聘库"
      },
      {
        "title": "LinkedIn 欧洲区域职位搜索",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "按France城市筛选英语/当地语全职岗位"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "VLS-TS 长期留学签证",
          "fee": "50 EUR + 服务费",
          "desc": "须先通过法国高教署 (Etudes en France) 面谈，再在 France-Visas 填表赴 TLS 递签。",
          "tips": "生活费担保仅需约 7,380 EUR（615欧/月×12）。",
          "steps": [
            {
              "title": "完成 Etudes en France 面谈",
              "detail": "拿到 EEF 面谈证明。"
            },
            {
              "title": "France-Visas 填表并赴 TLS 递交",
              "detail": "抵法后3个月内线上激活居留。"
            }
          ],
          "checklist": [
            "有效护照与照片",
            "EEF 面谈完成证明",
            "法国高校录取信",
            "7,380 EUR 存款证明",
            "住宿证明"
          ],
          "processing": "EEF 面谈 + 使领馆审理约 2–4 周",
          "submission": "先完成法国高教署 Etudes en France 面谈，再在 France-Visas 填表赴 TLScontact 递签",
          "diySupport": "diy"
        }
      ],
      "work": [
        {
          "id": "talent-work",
          "title": "Passeport Talent 人才居留 / 普通工签",
          "fee": "99 EUR（长期签证费）+ 抵法印花税 225 EUR",
          "processing": "工作许可审批 + 使领馆审理约 3–8 周",
          "submission": "雇主备妥高薪合同或工作许可后，本人在 France-Visas 填表并赴 TLScontact 递交",
          "diySupport": "advisory",
          "advisoryNote": "法国人才护照 (Passeport Talent) 与普通工作签证均须先由法国雇主出具达标劳动合同或向法国内政部/劳工平台申领工作许可 (Autorisation de travail)，个人无法无雇主直接自助申办。",
          "desc": "法国硕士以上毕业生、高薪技术人员或企业高管可申请最长 4 年的 Passeport Talent 人才护照（免劳动力市场测试，且配偶直接获得法国合法工作权）；常规岗位须由雇主先申请工作许可。",
          "tips": "在法取得硕士及以上学位的留学生可先自助申请 1 年期 RECE 求职/创业居留，找到达标工作后无缝衔接人才居留或工签。",
          "steps": [
            {
              "title": "雇主申领工作许可或签署人才合同",
              "detail": "普通工签由雇主线上申请 Autorisation de travail；高薪人才护照直接备妥达标合同。"
            },
            {
              "title": "France-Visas 填表并赴中智法签递交",
              "detail": "预约 TLScontact 提交护照、工作许可/合同及学历证明，抵法后线上完成居留登记。"
            }
          ],
          "checklist": [
            "有效护照与 France-Visas 申请表",
            "法国雇主正式劳动合同（及工作许可批文如适用）",
            "最高学历学位公证翻译及个人法/英文简历",
            "无犯罪证明（如特定岗位要求）及住宿/机票证明"
          ]
        }
      ],
      "immigration": [
        {
          "id": "resident-citizenship",
          "title": "十年长居卡 (Carte de résident) / 法国入籍",
          "fee": "225 EUR（十年长居印花税）/ 55 EUR（入籍申请印花税）",
          "processing": "约 6–18 个月（警察局及内政部审核）",
          "submission": "通过 ANEF 在线平台或居住地警察局 (Préfecture) 预约递交",
          "diySupport": "diy",
          "desc": "在法连续合法工作居住并稳定纳税满 5 年可申请 10 年长期居留卡或法国国籍；在法国高校完成至少 2 年高等教育并取得硕士文凭者，合法居住缩短至 2 年即可直接申请入籍！",
          "tips": "每年务必规范申报个人所得税并完整保存税单 (Avis d’imposition)；入籍目前要求法语口语与书面均达到 B1/B2 级别并通过共和国公民面谈。",
          "steps": [
            {
              "title": "考取法语 DELF B1/B2 并整理税单",
              "detail": "汇总近 3–5 年全部法国个人所得税税单 (Avis d’imposition) 与工资单。"
            },
            {
              "title": "通过 ANEF 平台或警察局提交申请",
              "detail": "线上上传完整资料后参加警察局核验或入籍公民面谈。"
            }
          ],
          "checklist": [
            "有效护照与历年法国居留卡 (Titre de séjour)",
            "近 3–5 年法国税务局个人所得税税单 (Avis d’imposition)",
            "法语 DELF B1/B2 或 TCF 合格证书",
            "近 3 个月工资单、在职证明及水电住址账单"
          ]
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "法国申根旅游签（易出1–5年多次）",
          "fee": "90 EUR + TLS服务费",
          "desc": "出签快（常3–7工作日），可畅行 29 个申根国。",
          "tips": "填表勾选 Multiple entries，确保在法停留天数最多。",
          "steps": [
            {
              "title": "France-Visas 填表下载PDF",
              "detail": "生成材料清单。"
            },
            {
              "title": "TLScontact 预约录指纹",
              "detail": "提交流水、保险与机酒。"
            }
          ],
          "checklist": [
            "有效护照",
            "申请表与2张彩照",
            "3万欧申根保险",
            "近6个月工资流水",
            "英文在职证明、营业执照与行程"
          ],
          "processing": "约 5–15 个工作日",
          "submission": "France-Visas 在线填表 + 中智法签 (TLScontact) 录指纹递交",
          "diySupport": "diy"
        }
      ],
      "other": [
        {
          "id": "visit-business",
          "title": "探亲访友 / 商务申根签",
          "fee": "90 EUR + TLScontact 服务费",
          "processing": "约 5–15 个工作日",
          "submission": "France-Visas 在线填表后赴中智法签 TLScontact 录指纹递交",
          "diySupport": "advisory",
          "advisoryNote": "赴法探亲访友若借住亲友家须由法方前往当地市政府开具《接待证明》(Attestation d’accueil) 原件；商务签须由法方企业出具正式邀请函。",
          "desc": "适用于赴法探望直系亲属/朋友或开展商务拜访、参展签约；若探亲期间入住酒店且自行承担费用，可按常规短期旅游方式准备酒店订单。",
          "tips": "借住法方亲友家务必提前让对方去当地市政府 (Mairie) 办理带防伪贴纸的《接待证明》原件并寄回国内；商务签注意中方派遣函须写明费用承担方。",
          "steps": [
            {
              "title": "备齐接待证明原件或商务邀请函",
              "detail": "住亲友家须法方寄回市政府原件；住酒店免接待证明；商务由法方发邀请函。"
            },
            {
              "title": "France-Visas 填表并赴 TLScontact 递签",
              "detail": "提交在职、流水、保险与关系/派遣证明，约 5–15 工作日出签。"
            }
          ],
          "checklist": [
            "有效护照、France-Visas 申请表与 30,000 欧申根保险",
            "法方市政府《接待证明》原件或酒店预订单",
            "法方邀请函及邀请人护照/居留卡复印件",
            "亲属关系证明（探亲）或中方公司派遣函及流水（商务）"
          ]
        }
      ]
    }
  },
  {
    "id": "372",
    "code": "IRL",
    "nameZh": "爱尔兰",
    "nameEn": "Ireland",
    "region": "欧洲 / EUROPE",
    "coords": [
      -8.24,
      53.41
    ],
    "badge": "英语欧盟国 / GEP·CSEP工签",
    "tierColor": "#4A7B82",
    "labelPriority": true,
    "processing": "4–8 周",
    "submission": "AVATS 在线填表 + VFS 递签",
    "summary": "欧盟唯一纯英语国家。工签先由 DETE 批出 Employment Permit（GEP/CSEP），再在 AVATS 填表赴 VFS 贴签；合法居住满5年可入籍同时享英欧自由流动权。",
    "pitfalls": [
      "【警惕 GEP 最低年薪门槛与黑中介】2026 年爱尔兰 GEP 薪资门槛已上调，签约前务必核对 DETE 官网最新最低年薪标准及雇主是否真正完成 28 天登报招聘测试。",
      "【切勿混淆英国签与爱尔兰签顺序】虽有 BIVS 英爱互通政策，但持英国短期访客签必须“先入境英国”，才可免签顺道进入爱尔兰，不可直接飞都柏林。",
      "【入籍需连续 5 年每年 150 分居住账单】在爱工作期间务必保存好每年的水电网账单、银行月结单和税单，缺一年都可能卡住入籍。"
    ],
    "links": [
      {
        "title": "DETE 爱尔兰工作许可官网",
        "url": "https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/",
        "desc": "2026年最新工签政策与网申"
      },
      {
        "title": "一般就业许可 (GEP) 指南",
        "url": "https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/permit-types/general-employment-permit/",
        "desc": "技工/建筑/护理/餐饮通道"
      },
      {
        "title": "关键技能许可 (CSEP) 指南",
        "url": "https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/permit-types/critical-skills-employment-permit/",
        "desc": "2年直通 Stamp 4 永居通道"
      }
    ],
    "jobLinks": [
      {
        "title": "JobsIreland 爱尔兰官方招聘门户",
        "url": "https://jobsireland.ie/",
        "desc": "爱尔兰社会保障部官方平台（GEP 雇主常在此登报测试）"
      },
      {
        "title": "EURES 欧洲跨国就业平台",
        "url": "https://eures.europa.eu/jobseekers_en",
        "desc": "覆盖爱尔兰及欧盟31国的官方雇主岗位库"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "Study D Visa 长期留学签证",
          "fee": "60–100 EUR",
          "desc": "录取并缴清学费后在 AVATS 填表送交 VFS，须提供至少 10,000 EUR/年存款证明。",
          "tips": "本硕毕业可获 1–2 年 Stamp 1G 毕业生工签。",
          "steps": [
            {
              "title": "获取录取信与缴费收据",
              "detail": "购买私人医疗保险。"
            },
            {
              "title": "AVATS 填表并赴 VFS 递签",
              "detail": "抵爱后90天内注册 IRP 卡。"
            }
          ],
          "checklist": [
            "有效护照",
            "AVATS 摘要表与照片",
            "录取信与学费凭证",
            "1万欧存款证明及流水",
            "医疗保险"
          ],
          "processing": "约 4–8 周",
          "submission": "凭录取与缴费收据在 AVATS 在线填表后赴 VFS 爱尔兰签证中心递交",
          "diySupport": "diy"
        }
      ],
      "work": [
        {
          "id": "csep",
          "title": "CSEP 关键技能就业许可 (Critical Skills)",
          "fee": "1,000 EUR + 60 EUR (入境D签)",
          "desc": "面向 IT、工程、金融、医疗与高管等紧缺高薪岗位。无需劳动力市场登报测试，工作满 21–24 个月即可直接换发自由永居权 Stamp 4，且配偶从第一天起即可随行并合法全职工作！",
          "tips": "有相关本科学历者起薪门槛低于无学历者；持 CSEP 满 5 年合法居住可直接免语言考试入籍爱尔兰（同时享欧盟与英国自由定居权）。",
          "steps": [
            {
              "title": "获得爱尔兰雇主正式 Offer（合同至少 2 年）",
              "detail": "确认岗位在 Critical Skills 清单且年薪达标。"
            },
            {
              "title": "通过 DETE Employment Permits Online 申请许可",
              "detail": "由雇主或本人在线提交合同、护照与学位证明，通常 2–4 周获批电子许可。"
            },
            {
              "title": "在 AVATS 填报 Long Stay Employment (D) 入境签",
              "detail": "附上 DETE 工作许可 PDF、无犯罪海牙认证件赴 VFS 爱尔兰签证中心贴签。"
            },
            {
              "title": "入境爱尔兰注册 Stamp 1 IRP 居留卡",
              "detail": "90 天内预约当地移民局录入指纹领卡，满 2 年后直接申换 Stamp 4。"
            }
          ],
          "checklist": [
            "DETE 签发的 CSEP 工作许可打印件",
            "有效护照及 AVATS 摘要表",
            "正式劳动合同",
            "本科及以上学位证书英文翻译/海牙认证",
            "无犯罪记录证明海牙认证"
          ],
          "processing": "DETE 许可约 2–4 周 + 入境 D 签约 4–8 周",
          "submission": "DETE Employment Permits Online 申领电子许可 + AVATS 填报 D 签赴 VFS 递交",
          "diySupport": "diy"
        },
        {
          "id": "gep",
          "title": "GEP 一般就业许可 (General Employment Permit)",
          "fee": "1,000 EUR + 60 EUR (入境D签)",
          "desc": "覆盖建筑、汽修、护理、食品加工、物流运输及厨师等广大蓝领技工与常规岗位，工作满 5 年可转 Stamp 4 永居并入籍。",
          "tips": "GEP 要求雇主必须先在 JobsIreland 及 EURES 等平台连续登报招聘 28 天（劳动力市场需求测试）证明当地招不到人，且签约时须核对 2026 年最新最低年薪门槛（如通用门槛约 36,605 欧起，特定行业另有豁免/起薪线）。",
          "steps": [
            {
              "title": "雇主完成 28 天劳动力市场需求测试",
              "detail": "在 JobsIreland.ie 与 EURES 刊登招聘广告满 28 天并保留截图凭证。"
            },
            {
              "title": "向 DETE 在线递交 GEP 许可申请",
              "detail": "上传登报凭证、劳动合同与申请人技能/资质证明，等待 DETE 审批。"
            },
            {
              "title": "拿到 GEP 批文后在 AVATS 申请入境 D 签",
              "detail": "备齐工作许可、护照、无犯罪公证与体检/保险材料送交 VFS 贴签。"
            },
            {
              "title": "抵爱尔兰换取 Stamp 1 居留卡",
              "detail": "在雇主处合法工作纳税，满 5 年后申请 Stamp 4 及入籍。"
            }
          ],
          "checklist": [
            "DETE 签发的 GEP 工作许可打印件",
            "有效护照与 AVATS 申请摘要表",
            "双方签署的正式雇佣合同",
            "技能资格证书/厨师证/驾照或过往工作证明英文翻译件",
            "无犯罪记录证明海牙认证"
          ],
          "processing": "28 天招聘测试 + DETE 许可 3–6 周 + 入境 D 签约 4–8 周",
          "submission": "雇主完成 28 天 JobsIreland/EURES 招聘测试并向 DETE 申请 GEP 后，本人经 AVATS + VFS 递 D 签",
          "diySupport": "advisory",
          "advisoryNote": "GEP 一般就业许可强制要求爱尔兰雇主先完成 28 天本地及欧盟劳动力市场需求测试并获 DETE 批文，个人无法直接自助申请。"
        }
      ],
      "immigration": [
        {
          "id": "stamp4-citizenship",
          "title": "Stamp 4 永居 / 5年免语言入籍",
          "fee": "300 EUR（IRP 续卡费）/ 1,125 EUR（入籍申请及证书费）",
          "processing": "Stamp 4 续签约 2–6 周 / 入籍审核约 12–19 个月",
          "submission": "爱尔兰移民局 (ISD) 在线门户提交 Stamp 4 或入籍申请",
          "diySupport": "diy",
          "desc": "持 CSEP 关键技能工签合法工作满 21–24 个月即可免工签换发自由工作/创业的 Stamp 4 居留；持 GEP 普通工签满 5 年也可转 Stamp 4。任意合法工作居留满 5 年（1825 天）可直接在线申办入籍爱尔兰，无需任何英语考试，且公民同时享有英国与欧盟自由定居权！",
          "tips": "爱尔兰入籍实行“每年 150 分居住证明积分制”，每年务必保留税务局 Employment Detail Summary、银行月结单及水电网账单凑满分数。",
          "steps": [
            {
              "title": "换发 Stamp 4 并累计 5 年合法居住",
              "detail": "整理过去 5 年每年达到 150 分的地址账单、税单与出入境记录。"
            },
            {
              "title": "ISD 官网全程在线提交入籍申请",
              "detail": "上传护照全页扫描件、历年 IRP 卡与税务局 EDS 税单并缴费等待批复。"
            }
          ],
          "checklist": [
            "历年有效护照全本扫描件与所有 IRP 居留卡",
            "爱尔兰税务局 (Revenue) 历年 EDS 完税摘要",
            "每年达到 150 分的地址账单与银行流水证明",
            "海牙认证出生公证及无犯罪记录宣誓声明"
          ]
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "Short Stay ‘C’ 短期旅游签",
          "fee": "60 EUR + 服务费",
          "desc": "非申根国需单办，但持有效英国短期访客签且首入英国后可免签顺游爱尔兰 (BIVS)。",
          "tips": "单办需在 AVATS 英文填表并赴 VFS 录指纹。",
          "steps": [
            {
              "title": "AVATS 在线填表",
              "detail": "打印摘要页与声明书。"
            },
            {
              "title": "VFS 递交材料录指纹",
              "detail": "约 15–20 工作日出签。"
            }
          ],
          "checklist": [
            "有效护照",
            "AVATS 摘要表与照片",
            "近6个月流水",
            "英文在职与营业执照",
            "机酒订单与保险"
          ],
          "processing": "约 15–20 个工作日",
          "submission": "AVATS 在线填表后赴 VFS 爱尔兰签证中心递交录指纹（持有效英签且首入英国可走 BIVS）",
          "diySupport": "diy"
        }
      ],
      "other": [
        {
          "id": "family-visit-business",
          "title": "CSEP 配偶团聚 / 探亲商务",
          "fee": "60 EUR（单次）/ 100 EUR（多次）+ VFS 服务费",
          "processing": "约 4–12 周（探亲商务约 15–20 工作日）",
          "submission": "AVATS 在线填表后赴 VFS 爱尔兰签证中心递交（附海牙认证或邀请函）",
          "diySupport": "advisory",
          "advisoryNote": "爱尔兰配偶团聚与探亲商务签均须先提供在爱配偶/邀请方的 IRP 卡、雇主合同或正式邀请函及海牙认证亲属关系证明，无法无邀请直接申请。",
          "desc": "CSEP 关键技能工签持有人的配偶与未成年子女可同步递交团聚 Join Family D 签，抵爱注册后直接获得 Stamp 1G 合法全职工作权！短期探亲与商务访问走 Short Stay C 签。",
          "tips": "中国结婚证与出生证公证件务必办理外交部海牙认证 (Apostille)，并由在爱担保人提供租房合同与工资单。",
          "steps": [
            {
              "title": "办理海牙认证关系证明或准备邀请函",
              "detail": "团聚备齐海牙认证结婚/出生证及主申 CSEP 许可；探亲商务备好邀请函与住址证明。"
            },
            {
              "title": "AVATS 在线填表并送交 VFS 签证中心",
              "detail": "打印摘要页连同全套翻译件送签，等待使馆审核批复。"
            }
          ],
          "checklist": [
            "有效护照、AVATS 摘要页与亲笔签名声明",
            "在爱担保人 IRP 卡、CSEP 许可或邀请函",
            "外交部海牙认证结婚证/出生证公证件",
            "担保人及申请人银行资金流水与在职/住宿证明"
          ]
        }
      ]
    }
  },
  {
    "id": "380",
    "code": "ITA",
    "nameZh": "意大利",
    "nameEn": "Italy",
    "region": "欧洲申根 / EUROPE",
    "coords": [
      12.57,
      41.87
    ],
    "badge": "申根签 · VFS递交",
    "tierColor": "#4A7B82",
    "labelPriority": false,
    "processing": "5–15 工作日",
    "submission": "VFS Global 意大利签证中心",
    "summary": "文艺复兴与设计留学圣地；留学需走马可波罗/图兰朵计划或国际生预注册，旅游走 VFS 申根签。",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【遵守申根“主停留国”原则】申根签必须向停留天数最多的国家申请（同天数则向首入国申请），切忌拿A国签证完全不去A国，否则影响后续出签与入境。"
    ],
    "links": [
      {
        "title": "意大利外交部官方签证指南",
        "url": "https://vistoperitalia.esteri.it/",
        "desc": "官方签证/入境申请与政策查询入口"
      },
      {
        "title": "VFS 意大利签证中心",
        "url": "https://visa.vfsglobal.com/chn/en/ita/",
        "desc": "官方移民局/使领馆/签证中心官网"
      }
    ],
    "jobLinks": [
      {
        "title": "EURES 欧盟官方跨国就业平台",
        "url": "https://eures.europa.eu/jobseekers_en",
        "desc": "官方覆盖意大利在内的欧洲31国雇主直聘库"
      },
      {
        "title": "LinkedIn 欧洲区域职位搜索",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "按Italy城市筛选英语/当地语全职岗位"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "意大利 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴意大利攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
          "tips": "涉外学历、成绩单及无犯罪记录公证件，建议通过中国外交部或地方外办办理海牙认证 (Apostille)（若目的国为海牙公约成员）。",
          "steps": [
            {
              "title": "申请目标院校并获取正式 Offer",
              "detail": "按学校官网要求提交学历、成绩单及语言证明。"
            },
            {
              "title": "办理公证与海牙认证/双认证",
              "detail": "准备最高学历、出生及无犯罪记录公证。"
            },
            {
              "title": "准备资金担保并递交学生签",
              "detail": "先在 Universitaly 官方平台完成预注册（或走马可波罗/图兰朵计划），再备齐材料赴意大利签证中心递交学生签证申请。"
            },
            {
              "title": "入境注册并办理当地居留卡",
              "detail": "抵境后按当地移民局规定期限办理学生居留卡。"
            }
          ],
          "checklist": [
            "有效护照及签证申请表",
            "目的国院校正式录取通知书 (Offer)",
            "覆盖首年学费与生活费的银行存款证明",
            "最高学历证书、成绩单公证（及海牙认证）",
            "无犯罪记录证明公证及境外学生医疗保险"
          ],
          "processing": "Universitaly 预注册 + 使领馆审理约 2–4 周",
          "submission": "先在 Universitaly 完成预注册（或走马可波罗/图兰朵计划），再赴意大利签证中心递交学签",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先取得意大利正规院校正式录取通知书 (Offer) 及符合要求的学费生活费担保，无法无录取直接个人自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "work": [
        {
          "id": "main",
          "title": "意大利 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴意大利合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
          "tips": "切勿持旅游免签或旅游签证在当地非法打工，务必确保雇主已为你申请正规 Work Permit。",
          "steps": [
            {
              "title": "获得当地合法雇主正式聘用合同",
              "detail": "确认岗位符合当地薪资及外籍雇员配额要求。"
            },
            {
              "title": "雇主向劳动/移民部门申领工作许可",
              "detail": "提供学历公证、无犯罪证明及过往履历。"
            },
            {
              "title": "凭工作许可批文申请入境工作签",
              "detail": "凭官方工作许可批准函向意大利驻华使领馆或签证中心递交入境工作签证。"
            },
            {
              "title": "入境换领工作居留卡并登记税务",
              "detail": "抵境后完成体检与社保税务注册。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地雇主签署的正式雇佣合同与邀请函",
            "当地官方签发的工作许可批准函 (Work Permit)",
            "最高学历学位公证（及海牙认证）与个人英文简历",
            "无犯罪记录证明公证及指定体检证明"
          ],
          "processing": "工作许可预批 3–8 周 + 使领馆/移民局贴签 2–4 周",
          "submission": "雇主先向意大利劳动/移民部门申领工作许可批文，获批后本人向驻华使领馆或签证中心递交工签",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先获得意大利当地合规雇主正式聘用合同，并由雇主向当地劳动或移民部门申领工作许可批文 (Work Permit)，无法无雇主担保个人直接自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "immigration": [
        {
          "id": "main",
          "title": "意大利 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问意大利官方移民/内政部门网站核对最新永居居住年限、离境限制及语言考核规定。"
            },
            {
              "title": "累积连续合法工作/居留与纳税证明",
              "detail": "确保每年离境天数未超过法定上限。"
            },
            {
              "title": "向当地移民局提交永居申请",
              "detail": "提交税单、住址证明、语言证书（如要求）及无犯罪记录。"
            }
          ],
          "checklist": [
            "有效护照及历年居留卡记录",
            "连续合法居留期间的个人所得税税单与社保记录",
            "稳定的收入或存款资产证明",
            "当地合法居住地址证明（租房合同或房产证）",
            "无犯罪记录证明及当地语言测试证书（如要求）"
          ],
          "processing": "通常需连续合法居留纳税 3–5 年后递交，审理约 3–12 个月",
          "submission": "满足法定居住与语言/纳税年限后向意大利当地移民局或内政部门递交永居 (PR) 申请",
          "diySupport": "advisory",
          "advisoryNote": "永久居留通常须先持合法工作、家庭团聚或合规格长期居留许可在意大利连续居住并稳定纳税满法定年限（多为 5 年），无法从海外直接一步自助网申；本页提供长期路径规划指引。"
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "意大利 短期旅游/访客通道（申根签 · VFS递交）",
          "fee": "90 EUR + 服务费",
          "desc": "文艺复兴与设计留学圣地；留学需走马可波罗/图兰朵计划或国际生预注册，旅游走 VFS 申根签。",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 意大利外交部官方签证指南 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 VFS Global 意大利签证中心 提交申请并缴费（免签国直接填报入境卡）。"
            },
            {
              "title": "获取批文或直接持护照入境",
              "detail": "打印电子签/确认函随身携带乘机。"
            }
          ],
          "checklist": [
            "有效期内中国因私护照（有效期6个月以上）",
            "往返/离境机票预订单",
            "全程酒店预订单（英文版）",
            "官方在线申请表打印件与白底证件照",
            "近6个月银行流水、在职证明及申根/旅行医疗保险"
          ],
          "processing": "5–15 工作日",
          "submission": "VFS Global 意大利签证中心",
          "diySupport": "diy"
        }
      ],
      "other": [
        {
          "id": "main",
          "title": "意大利数字游民签证 (Digital Nomad / Remote Worker)",
          "fee": "116 EUR（D 类长期签证费）+ VFS 服务费",
          "processing": "约 15–30 个工作日（最高法定审理期 90 天）",
          "submission": "备齐年收入、高技能资历、医保与住房证明后预约意大利驻华使领馆/VFS 递交 D 签",
          "diySupport": "diy",
          "desc": "意大利正式实施数字游民与远程工作者 D 类签证，无需意大利雇主申请配额 (Nulla Osta) 即可直接面向高技能远程人士开放：要求年收入达意大利免医保缴费线三倍（约 28,000 EUR/年以上）、拥有至少 6 个月远程工作经验、本科学历或对应专业资历，及在意大利的合规住处。",
          "tips": "所有中文学历与工作证明须按领区要求办理海牙认证 (Apostille) 与意大利语翻译；入境后 8 个工作日内须向当地警局申请 Permesso di Soggiorno 居留卡。",
          "steps": [
            {
              "title": "核对高技能资历与 28,000+ EUR 年收入",
              "detail": "备妥本科学历（或 3–5 年高技能专业经验证明）、至少 6 个月远程工作合同及收入税单流水。"
            },
            {
              "title": "办理意大利合规租房合同与全年医疗保险",
              "detail": "确保租赁合同已在意大利税务局登记，医疗保险覆盖整个停留期。"
            },
            {
              "title": "预约意大利驻华使领馆/VFS 递交 D 签",
              "detail": "提交境外远程雇主出具的无犯罪/合规声明及全套翻译认证件等待贴签。"
            }
          ],
          "checklist": [
            "有效护照与意大利长期 D 类签证申请表",
            "年收入达标流水/税单及 6 个月以上远程工作合同",
            "海牙认证的高等学历或高技能行业资历证明",
            "意大利登记租赁合同及全年私人医疗保险单"
          ]
        }
      ]
    }
  },
  {
    "id": "724",
    "code": "ESP",
    "nameZh": "西班牙",
    "nameEn": "Spain",
    "region": "欧洲申根 / EUROPE",
    "coords": [
      -3.75,
      40.46
    ],
    "badge": "申根签 + 数字游民签",
    "tierColor": "#4A7B82",
    "labelPriority": false,
    "processing": "10–15 工作日",
    "submission": "BLS Spain 签证中心",
    "summary": "除申根旅游与高性价比西语/硕士留学外，西班牙还提供极具吸引力的“数字游民签证”(Telework)与非盈利居留，连续住满5年可申永居。",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【遵守申根“主停留国”原则】申根签必须向停留天数最多的国家申请（同天数则向首入国申请），切忌拿A国签证完全不去A国，否则影响后续出签与入境。"
    ],
    "links": [
      {
        "title": "西班牙外交部签证官网",
        "url": "https://www.exteriores.gob.es/en/ServiciosAlCiudadano/Paginas/Visados.aspx",
        "desc": "官方签证/入境申请与政策查询入口"
      },
      {
        "title": "BLS 西班牙签证中心",
        "url": "https://china.blsspainvisa.com/",
        "desc": "官方移民局/使领馆/签证中心官网"
      }
    ],
    "jobLinks": [
      {
        "title": "EURES 欧盟官方跨国就业平台",
        "url": "https://eures.europa.eu/jobseekers_en",
        "desc": "官方覆盖西班牙在内的欧洲31国雇主直聘库"
      },
      {
        "title": "LinkedIn 欧洲区域职位搜索",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "按Spain城市筛选英语/当地语全职岗位"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "西班牙 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴西班牙攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
          "tips": "涉外学历、成绩单及无犯罪记录公证件，建议通过中国外交部或地方外办办理海牙认证 (Apostille)（若目的国为海牙公约成员）。",
          "steps": [
            {
              "title": "申请目标院校并获取正式 Offer",
              "detail": "按学校官网要求提交学历、成绩单及语言证明。"
            },
            {
              "title": "办理公证与海牙认证/双认证",
              "detail": "准备最高学历、出生及无犯罪记录公证。"
            },
            {
              "title": "准备资金担保并递交学生签",
              "detail": "按西班牙驻华使领馆/签证中心或官方留学门户要求提交学生签证申请。"
            },
            {
              "title": "入境注册并办理当地居留卡",
              "detail": "抵境后按当地移民局规定期限办理学生居留卡。"
            }
          ],
          "checklist": [
            "有效护照及签证申请表",
            "目的国院校正式录取通知书 (Offer)",
            "覆盖首年学费与生活费的银行存款证明",
            "最高学历证书、成绩单公证（及海牙认证）",
            "无犯罪记录证明公证及境外学生医疗保险"
          ],
          "processing": "约 3–6 周（长期 D 类学生签证审理）",
          "submission": "凭西班牙教育部认可院校正式录取通知书 (Offer) 向驻华使领馆/签证中心或官方学生门户递交",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先取得西班牙正规院校正式录取通知书 (Offer) 及符合要求的学费生活费担保，无法无录取直接个人自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "work": [
        {
          "id": "main",
          "title": "西班牙 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴西班牙合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
          "tips": "切勿持旅游免签或旅游签证在当地非法打工，务必确保雇主已为你申请正规 Work Permit。",
          "steps": [
            {
              "title": "获得当地合法雇主正式聘用合同",
              "detail": "确认岗位符合当地薪资及外籍雇员配额要求。"
            },
            {
              "title": "雇主向劳动/移民部门申领工作许可",
              "detail": "提供学历公证、无犯罪证明及过往履历。"
            },
            {
              "title": "凭工作许可批文申请入境工作签",
              "detail": "凭官方工作许可批准函向西班牙驻华使领馆或签证中心递交入境工作签证。"
            },
            {
              "title": "入境换领工作居留卡并登记税务",
              "detail": "抵境后完成体检与社保税务注册。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地雇主签署的正式雇佣合同与邀请函",
            "当地官方签发的工作许可批准函 (Work Permit)",
            "最高学历学位公证（及海牙认证）与个人英文简历",
            "无犯罪记录证明公证及指定体检证明"
          ],
          "processing": "工作许可预批 3–8 周 + 使领馆/移民局贴签 2–4 周",
          "submission": "雇主先向西班牙劳动/移民部门申领工作许可批文，获批后本人向驻华使领馆或签证中心递交工签",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先获得西班牙当地合规雇主正式聘用合同，并由雇主向当地劳动或移民部门申领工作许可批文 (Work Permit)，无法无雇主担保个人直接自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "immigration": [
        {
          "id": "main",
          "title": "西班牙 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问西班牙官方移民/内政部门网站核对最新永居居住年限、离境限制及语言考核规定。"
            },
            {
              "title": "累积连续合法工作/居留与纳税证明",
              "detail": "确保每年离境天数未超过法定上限。"
            },
            {
              "title": "向当地移民局提交永居申请",
              "detail": "提交税单、住址证明、语言证书（如要求）及无犯罪记录。"
            }
          ],
          "checklist": [
            "有效护照及历年居留卡记录",
            "连续合法居留期间的个人所得税税单与社保记录",
            "稳定的收入或存款资产证明",
            "当地合法居住地址证明（租房合同或房产证）",
            "无犯罪记录证明及当地语言测试证书（如要求）"
          ],
          "processing": "通常需连续合法居留纳税 3–5 年后递交，审理约 3–12 个月",
          "submission": "满足法定居住与语言/纳税年限后向西班牙当地移民局或内政部门递交永居 (PR) 申请",
          "diySupport": "advisory",
          "advisoryNote": "永久居留通常须先持合法工作、家庭团聚或合规格长期居留许可在西班牙连续居住并稳定纳税满法定年限（多为 5 年），无法从海外直接一步自助网申；本页提供长期路径规划指引。"
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "西班牙 短期旅游/访客通道（申根签 + 数字游民签）",
          "fee": "90 EUR（短签）/ 80 EUR（长签）",
          "desc": "除申根旅游与高性价比西语/硕士留学外，西班牙还提供极具吸引力的“数字游民签证”(Telework)与非盈利居留，连续住满5年可申永居。",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 西班牙外交部签证官网 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 BLS Spain 签证中心 提交申请并缴费（免签国直接填报入境卡）。"
            },
            {
              "title": "获取批文或直接持护照入境",
              "detail": "打印电子签/确认函随身携带乘机。"
            }
          ],
          "checklist": [
            "有效期内中国因私护照（有效期6个月以上）",
            "往返/离境机票预订单",
            "全程酒店预订单（英文版）",
            "官方在线申请表打印件与白底证件照",
            "近6个月银行流水、在职证明及申根/旅行医疗保险"
          ],
          "processing": "10–15 工作日",
          "submission": "BLS Spain 签证中心",
          "diySupport": "diy"
        }
      ],
      "other": [
        {
          "id": "main",
          "title": "西班牙数字游民签证 (Telework) / 非盈利居留",
          "fee": "约 80 EUR（使领馆 D 签）+ BLS 服务费",
          "processing": "使领馆约 10–30 天 / 西班牙境内 UGE 约 20 个工作日",
          "submission": "向 BLS Spain / 西班牙驻华使领馆提交数字游民或非盈利长居申请（亦可在西班牙境内直申 UGE 3年居留）",
          "diySupport": "diy",
          "desc": "西班牙数字游民签证（创业法案 Telework）面向为境外公司远程工作或自由职业的高技能/本科人士，月收入门槛约为西班牙最低工资 SMI 的 200%，允许携带配偶子女且连续居住满 5 年可转西班牙永居；另有不工作仅凭存款/被动收入的非盈利居留 (NLV)。",
          "tips": "境外自由职业或受雇公司须已运营满 1 年且本人合作/受雇满 3 个月以上，并出具允许在西班牙远程办公的书面授权及社保衔接或私人全险证明。",
          "steps": [
            {
              "title": "申请 NIE 外国人识别号并核对收入门槛",
              "detail": "向使领馆/BLS 申请 NIE，确认月收入达到 200% SMI 标准并整理近 3–6 个月银行流水。"
            },
            {
              "title": "办理学历与无犯罪海牙认证及官方宣誓翻译",
              "detail": "本科以上学历证明（或 3 年工作经验）及近 5 年居住地无犯罪公证均须海牙认证及西语宣誓翻译。"
            },
            {
              "title": "提交雇主远程授权信与商业医疗保险",
              "detail": "提供公司存续满 1 年证明、允许赴西远程办公函及无免赔额西班牙私人医疗保险。"
            },
            {
              "title": "BLS/使领馆递交签证或境内直交 UGE",
              "detail": "获批后贴发 1 年 D 签入境换卡（或在西班牙合法持申根签境内直交 UGE 批 3 年卡）。"
            }
          ],
          "checklist": [
            "有效护照、NIE 申请/编号及官方国别签证申请表",
            "境外雇主远程工作授权函及公司存续满 1 年证明",
            "近 3–6 个月达标工资/服务收入流水",
            "海牙认证及西语宣誓翻译的无犯罪记录与学历公证",
            "西班牙无免赔额私人商业医疗保险单"
          ]
        }
      ]
    }
  },
  {
    "id": "620",
    "code": "PRT",
    "nameZh": "葡萄牙",
    "nameEn": "Portugal",
    "region": "欧洲申根 / EUROPE",
    "coords": [
      -8.22,
      39.4
    ],
    "badge": "申根签 + D7/D8数字游民",
    "tierColor": "#4A7B82",
    "labelPriority": false,
    "processing": "15–30 天",
    "submission": "VFS Portugal 签证中心",
    "summary": "D7 被动收入签与 D8 数字游民签允许远程工作/退休者低成本定居欧盟，合法住满5年且过葡语 A2 即可申永居或入籍！",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【遵守申根“主停留国”原则】申根签必须向停留天数最多的国家申请（同天数则向首入国申请），切忌拿A国签证完全不去A国，否则影响后续出签与入境。"
    ],
    "links": [
      {
        "title": "葡萄牙外交部官方签证门户",
        "url": "https://vistos.mne.gov.pt/en/",
        "desc": "官方签证/入境申请与政策查询入口"
      },
      {
        "title": "VFS 葡萄牙签证中心",
        "url": "https://visa.vfsglobal.com/chn/en/prt/",
        "desc": "官方移民局/使领馆/签证中心官网"
      }
    ],
    "jobLinks": [
      {
        "title": "EURES 欧盟官方跨国就业平台",
        "url": "https://eures.europa.eu/jobseekers_en",
        "desc": "官方覆盖葡萄牙在内的欧洲31国雇主直聘库"
      },
      {
        "title": "LinkedIn 欧洲区域职位搜索",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "按Portugal城市筛选英语/当地语全职岗位"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "葡萄牙 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴葡萄牙攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
          "tips": "涉外学历、成绩单及无犯罪记录公证件，建议通过中国外交部或地方外办办理海牙认证 (Apostille)（若目的国为海牙公约成员）。",
          "steps": [
            {
              "title": "申请目标院校并获取正式 Offer",
              "detail": "按学校官网要求提交学历、成绩单及语言证明。"
            },
            {
              "title": "办理公证与海牙认证/双认证",
              "detail": "准备最高学历、出生及无犯罪记录公证。"
            },
            {
              "title": "准备资金担保并递交学生签",
              "detail": "按葡萄牙驻华使领馆/签证中心或官方留学门户要求提交学生签证申请。"
            },
            {
              "title": "入境注册并办理当地居留卡",
              "detail": "抵境后按当地移民局规定期限办理学生居留卡。"
            }
          ],
          "checklist": [
            "有效护照及签证申请表",
            "目的国院校正式录取通知书 (Offer)",
            "覆盖首年学费与生活费的银行存款证明",
            "最高学历证书、成绩单公证（及海牙认证）",
            "无犯罪记录证明公证及境外学生医疗保险"
          ],
          "processing": "约 3–6 周（长期 D 类学生签证审理）",
          "submission": "凭葡萄牙教育部认可院校正式录取通知书 (Offer) 向驻华使领馆/签证中心或官方学生门户递交",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先取得葡萄牙正规院校正式录取通知书 (Offer) 及符合要求的学费生活费担保，无法无录取直接个人自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "work": [
        {
          "id": "main",
          "title": "葡萄牙 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴葡萄牙合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
          "tips": "切勿持旅游免签或旅游签证在当地非法打工，务必确保雇主已为你申请正规 Work Permit。",
          "steps": [
            {
              "title": "获得当地合法雇主正式聘用合同",
              "detail": "确认岗位符合当地薪资及外籍雇员配额要求。"
            },
            {
              "title": "雇主向劳动/移民部门申领工作许可",
              "detail": "提供学历公证、无犯罪证明及过往履历。"
            },
            {
              "title": "凭工作许可批文申请入境工作签",
              "detail": "凭官方工作许可批准函向葡萄牙驻华使领馆或签证中心递交入境工作签证。"
            },
            {
              "title": "入境换领工作居留卡并登记税务",
              "detail": "抵境后完成体检与社保税务注册。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地雇主签署的正式雇佣合同与邀请函",
            "当地官方签发的工作许可批准函 (Work Permit)",
            "最高学历学位公证（及海牙认证）与个人英文简历",
            "无犯罪记录证明公证及指定体检证明"
          ],
          "processing": "工作许可预批 3–8 周 + 使领馆/移民局贴签 2–4 周",
          "submission": "雇主先向葡萄牙劳动/移民部门申领工作许可批文，获批后本人向驻华使领馆或签证中心递交工签",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先获得葡萄牙当地合规雇主正式聘用合同，并由雇主向当地劳动或移民部门申领工作许可批文 (Work Permit)，无法无雇主担保个人直接自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "immigration": [
        {
          "id": "main",
          "title": "葡萄牙 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问葡萄牙官方移民/内政部门网站核对最新永居居住年限、离境限制及语言考核规定。"
            },
            {
              "title": "累积连续合法工作/居留与纳税证明",
              "detail": "确保每年离境天数未超过法定上限。"
            },
            {
              "title": "向当地移民局提交永居申请",
              "detail": "提交税单、住址证明、语言证书（如要求）及无犯罪记录。"
            }
          ],
          "checklist": [
            "有效护照及历年居留卡记录",
            "连续合法居留期间的个人所得税税单与社保记录",
            "稳定的收入或存款资产证明",
            "当地合法居住地址证明（租房合同或房产证）",
            "无犯罪记录证明及当地语言测试证书（如要求）"
          ],
          "processing": "通常需连续合法居留纳税 3–5 年后递交，审理约 3–12 个月",
          "submission": "满足法定居住与语言/纳税年限后向葡萄牙当地移民局或内政部门递交永居 (PR) 申请",
          "diySupport": "advisory",
          "advisoryNote": "永久居留通常须先持合法工作、家庭团聚或合规格长期居留许可在葡萄牙连续居住并稳定纳税满法定年限（多为 5 年），无法从海外直接一步自助网申；本页提供长期路径规划指引。"
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "葡萄牙 短期旅游/访客通道（申根签 + D7/D8数字游民）",
          "fee": "90 EUR + VFS服务费",
          "desc": "D7 被动收入签与 D8 数字游民签允许远程工作/退休者低成本定居欧盟，合法住满5年且过葡语 A2 即可申永居或入籍！",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 葡萄牙外交部官方签证门户 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 VFS Portugal 签证中心 提交申请并缴费（免签国直接填报入境卡）。"
            },
            {
              "title": "获取批文或直接持护照入境",
              "detail": "打印电子签/确认函随身携带乘机。"
            }
          ],
          "checklist": [
            "有效期内中国因私护照（有效期6个月以上）",
            "往返/离境机票预订单",
            "全程酒店预订单（英文版）",
            "官方在线申请表打印件与白底证件照",
            "近6个月银行流水、在职证明及申根/旅行医疗保险"
          ],
          "processing": "15–30 天",
          "submission": "VFS Portugal 签证中心",
          "diySupport": "diy"
        }
      ],
      "other": [
        {
          "id": "main",
          "title": "葡萄牙 D7 被动收入签 / D8 数字游民长期居留签",
          "fee": "90 EUR（D 类居留签）+ VFS 服务费 + 抵葡 AIMA 换卡费",
          "processing": "约 30–60 天（VFS 受理转使馆审理）",
          "submission": "备齐 NIF 税号、葡银行账户、收入证明与住宿合同后预约 VFS Portugal 递交 D7/D8 长居签",
          "diySupport": "diy",
          "desc": "D7 面向拥有稳定被动收入（退休金、房租、股息理财）的申请人；D8 数字游民签面向受雇于境外企业或自由职业的远程工作者（通常要求月均收入达葡萄牙最低工资的 4 倍以上）。合法持卡居住满 5 年且过葡语 A2 即可申永居或入籍！",
          "tips": "递签前通常须先远程或委托开立葡萄牙 NIF 税号及本地银行账户（存入足额生活保障金），并提供至少 1 年期当地合规租房合同与海牙认证无犯罪记录。",
          "steps": [
            {
              "title": "申领葡萄牙 NIF 税号并开立本地银行账户",
              "detail": "线上或委托开立 NIF 并存入至少 12 个月葡萄牙最低工资基准生活保障金。"
            },
            {
              "title": "准备被动收入或远程工作合同与流水",
              "detail": "D8 须提供境外远程雇佣/自由职业合同及近 3 个月月入达标流水；D7 须提供稳定被动收入证明。"
            },
            {
              "title": "办理海牙认证无犯罪并签约 1 年租房合同",
              "detail": "国内无犯罪公证办妥外交部海牙认证，并在葡萄牙 Finanças 登记长期租赁合同。"
            },
            {
              "title": "向 VFS Portugal 递交 D7/D8 并赴 AIMA 换卡",
              "detail": "贴签入境后按预约时间前往葡萄牙移民局 AIMA 录指纹领取 2 年期居留卡。"
            }
          ],
          "checklist": [
            "有效护照及 D 类国别签证申请表",
            "葡萄牙 NIF 税号及当地银行足额存款证明",
            "远程工作合同与银行流水（D8）或被动收入证明（D7）",
            "海牙认证无犯罪记录公证及葡萄牙 1 年期合规租房合同",
            "覆盖赴葡首期的国际旅行及医疗保险单"
          ]
        }
      ]
    }
  },
  {
    "id": "528",
    "code": "NLD",
    "nameZh": "荷兰",
    "nameEn": "Netherlands",
    "region": "欧洲申根 / EUROPE",
    "coords": [
      5.29,
      52.13
    ],
    "badge": "申根签 + KM高技术移民",
    "tierColor": "#4A7B82",
    "labelPriority": false,
    "processing": "15 天",
    "submission": "TLScontact / IND 移民局",
    "summary": "英语普及度极高！KM 高技术移民由认证雇主向 IND 2周速批；全球Top200名校毕业生可直接申1年 Orientation Year 求职工签。",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【遵守申根“主停留国”原则】申根签必须向停留天数最多的国家申请（同天数则向首入国申请），切忌拿A国签证完全不去A国，否则影响后续出签与入境。"
    ],
    "links": [
      {
        "title": "荷兰政府官方签证门户",
        "url": "https://www.netherlandsworldwide.nl/visa-the-netherlands",
        "desc": "官方签证/入境申请与政策查询入口"
      },
      {
        "title": "荷兰移民局 (IND)",
        "url": "https://ind.nl/en",
        "desc": "官方移民局/使领馆/签证中心官网"
      }
    ],
    "jobLinks": [
      {
        "title": "EURES 欧盟官方跨国就业平台",
        "url": "https://eures.europa.eu/jobseekers_en",
        "desc": "官方覆盖荷兰在内的欧洲31国雇主直聘库"
      },
      {
        "title": "LinkedIn 欧洲区域职位搜索",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "按Netherlands城市筛选英语/当地语全职岗位"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "荷兰 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴荷兰攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
          "tips": "涉外学历、成绩单及无犯罪记录公证件，建议通过中国外交部或地方外办办理海牙认证 (Apostille)（若目的国为海牙公约成员）。",
          "steps": [
            {
              "title": "申请目标院校并获取正式 Offer",
              "detail": "按学校官网要求提交学历、成绩单及语言证明。"
            },
            {
              "title": "办理公证与海牙认证/双认证",
              "detail": "准备最高学历、出生及无犯罪记录公证。"
            },
            {
              "title": "准备资金担保并递交学生签",
              "detail": "由荷兰高校代为向荷兰移民局 (IND) 申请 MVV 及居留许可批准后，本人预约驻华使领馆贴发入境 D 签。"
            },
            {
              "title": "入境注册并办理当地居留卡",
              "detail": "抵境后按当地移民局规定期限办理学生居留卡。"
            }
          ],
          "checklist": [
            "有效护照及签证申请表",
            "目的国院校正式录取通知书 (Offer)",
            "覆盖首年学费与生活费的银行存款证明",
            "最高学历证书、成绩单公证（及海牙认证）",
            "无犯罪记录证明公证及境外学生医疗保险"
          ],
          "processing": "学校代向 IND 申请 TEV 约 2–4 周",
          "submission": "荷兰高校代为向 IND 申请 MVV/居留许可批准后，本人预约驻华使领馆贴发入境 D 签",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先取得荷兰正规院校正式录取通知书 (Offer) 及符合要求的学费生活费担保，无法无录取直接个人自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "work": [
        {
          "id": "main",
          "title": "荷兰 Orientation Year 寻职年工签 / KM 高技术移民",
          "fee": "Orientation Year 约 243 EUR / KM 由认证雇主按 IND 规费缴纳",
          "processing": "IND 审理约 2–4 周（认证雇主 KM 最快 2 周）",
          "submission": "全球 Top 200 名校毕业生可在荷兰移民局 (IND) 官网自助申 Orientation Year / KM 由认证雇主在线提交",
          "diySupport": "diy",
          "desc": "全球 Top 200 高校（含多所中国顶尖高校）近 3 年内毕业的硕士/博士可无需雇主担保直接在 IND 官网申请 1 年期 Orientation Year (zoekjaar) 开放工作居留，自由在荷找工作或创业；已获认证雇主 Offer 者可直接走 KM 高技术移民 2 周极速批复。",
          "tips": "Orientation Year 申请人须确保毕业院校在 QS/THE/ARWU 任一榜单前 200 名且达到对应英语或荷兰语要求，毕业证书须完成海牙认证及 Nuffic/IDW 评估（如适用）。",
          "steps": [
            {
              "title": "核对全球 Top 200 名校资格或取得 KM 认证雇主 Offer",
              "detail": "访问 ind.nl 核对 Orientation Year 榜单院校与 3 年有效期限制，或确认雇主具有 IND 认证担保资质。"
            },
            {
              "title": "办理学历认证与海牙认证",
              "detail": "准备毕业证、学位证海牙认证 (Apostille) 及雅思/托福或英语授课证明。"
            },
            {
              "title": "通过 IND 官网在线提交 Orientation Year 申请",
              "detail": "使用 DigiD 或在线表格直接向 IND 提交材料并缴费，获批 MVV 后赴使领馆/VFS 贴签入境。"
            },
            {
              "title": "抵荷后市政厅登记并领取居留卡 (BRP)",
              "detail": "入境后在 IND 窗口录指纹领卡，并在市政厅完成地址注册与 BSN 税号申领。"
            }
          ],
          "checklist": [
            "有效护照及证件照",
            "近 3 年内硕士/博士毕业证学位证（海牙认证）",
            "英语成绩单（雅思 6.0+ 或英文授课证明）",
            "高校全球排名前 200 佐证截图（Orientation Year）或认证雇主合同（KM）",
            "无犯罪声明及医疗保险证明"
          ]
        }
      ],
      "immigration": [
        {
          "id": "main",
          "title": "荷兰 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问荷兰官方移民/内政部门网站核对最新永居居住年限、离境限制及语言考核规定。"
            },
            {
              "title": "累积连续合法工作/居留与纳税证明",
              "detail": "确保每年离境天数未超过法定上限。"
            },
            {
              "title": "向当地移民局提交永居申请",
              "detail": "提交税单、住址证明、语言证书（如要求）及无犯罪记录。"
            }
          ],
          "checklist": [
            "有效护照及历年居留卡记录",
            "连续合法居留期间的个人所得税税单与社保记录",
            "稳定的收入或存款资产证明",
            "当地合法居住地址证明（租房合同或房产证）",
            "无犯罪记录证明及当地语言测试证书（如要求）"
          ],
          "processing": "通常需连续合法居留纳税 3–5 年后递交，审理约 3–12 个月",
          "submission": "满足法定居住与语言/纳税年限后向荷兰当地移民局或内政部门递交永居 (PR) 申请",
          "diySupport": "advisory",
          "advisoryNote": "永久居留通常须先持合法工作、家庭团聚或合规格长期居留许可在荷兰连续居住并稳定纳税满法定年限（多为 5 年），无法从海外直接一步自助网申；本页提供长期路径规划指引。"
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "荷兰 短期旅游/访客通道（申根签 + KM高技术移民）",
          "fee": "90 EUR + TLS服务费",
          "desc": "英语普及度极高！KM 高技术移民由认证雇主向 IND 2周速批；全球Top200名校毕业生可直接申1年 Orientation Year 求职工签。",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 荷兰政府官方签证门户 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 TLScontact / IND 移民局 提交申请并缴费（免签国直接填报入境卡）。"
            },
            {
              "title": "获取批文或直接持护照入境",
              "detail": "打印电子签/确认函随身携带乘机。"
            }
          ],
          "checklist": [
            "有效期内中国因私护照（有效期6个月以上）",
            "往返/离境机票预订单",
            "全程酒店预订单（英文版）",
            "官方在线申请表打印件与白底证件照",
            "近6个月银行流水、在职证明及申根/旅行医疗保险"
          ],
          "processing": "15 天",
          "submission": "TLScontact / IND 移民局",
          "diySupport": "diy"
        }
      ],
      "other": [
        {
          "id": "main",
          "title": "荷兰 商务考察 / 探亲访友 / 特殊通道",
          "fee": "90 EUR + TLS服务费",
          "desc": "涵盖赴荷兰参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "按荷兰驻华使领馆或官方签证中心对应商务/探亲清单提交材料，并随身携带邀请方凭证。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ],
          "processing": "短期访问约 5–15 个工作日（免签国即时入境，视具体通道而定）",
          "submission": "凭荷兰邀请函或亲属关系证明按对应签证中心或免签口岸规则办理",
          "diySupport": "advisory",
          "advisoryNote": "商务考察、探亲访友或长期团聚通常须先取得荷兰当地邀请方出具的正式邀请函、公司派遣函或亲属关系证明，无法无邀请单纯按常规旅游自由行替代；本页提供通用材料与原则指引。"
        }
      ]
    }
  },
  {
    "id": "756",
    "code": "CHE",
    "nameZh": "瑞士",
    "nameEn": "Switzerland",
    "region": "欧洲申根 / EUROPE",
    "coords": [
      8.23,
      46.82
    ],
    "badge": "申根签 · TLScontact",
    "tierColor": "#4A7B82",
    "labelPriority": false,
    "processing": "5–10 工作日",
    "submission": "TLScontact 中智瑞签",
    "summary": "瑞士虽非欧盟但属申根区，旅游签在 swiss-visa.ch 填表赴 TLScontact 递交；ETH/EPFL 等理工名校学费低廉且科研经费雄厚。",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【遵守申根“主停留国”原则】申根签必须向停留天数最多的国家申请（同天数则向首入国申请），切忌拿A国签证完全不去A国，否则影响后续出签与入境。"
    ],
    "links": [
      {
        "title": "瑞士官方电子签证门户",
        "url": "https://www.swiss-visa.ch/",
        "desc": "官方签证/入境申请与政策查询入口"
      },
      {
        "title": "瑞士联邦移民局 (SEM)",
        "url": "https://www.sem.admin.ch/",
        "desc": "官方移民局/使领馆/签证中心官网"
      }
    ],
    "jobLinks": [
      {
        "title": "EURES 欧盟官方跨国就业平台",
        "url": "https://eures.europa.eu/jobseekers_en",
        "desc": "官方覆盖瑞士在内的欧洲31国雇主直聘库"
      },
      {
        "title": "LinkedIn 欧洲区域职位搜索",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "按Switzerland城市筛选英语/当地语全职岗位"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "瑞士 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴瑞士攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
          "tips": "涉外学历、成绩单及无犯罪记录公证件，建议通过中国外交部或地方外办办理海牙认证 (Apostille)（若目的国为海牙公约成员）。",
          "steps": [
            {
              "title": "申请目标院校并获取正式 Offer",
              "detail": "按学校官网要求提交学历、成绩单及语言证明。"
            },
            {
              "title": "办理公证与海牙认证/双认证",
              "detail": "准备最高学历、出生及无犯罪记录公证。"
            },
            {
              "title": "准备资金担保并递交学生签",
              "detail": "按瑞士驻华使领馆/签证中心或官方留学门户要求提交学生签证申请。"
            },
            {
              "title": "入境注册并办理当地居留卡",
              "detail": "抵境后按当地移民局规定期限办理学生居留卡。"
            }
          ],
          "checklist": [
            "有效护照及签证申请表",
            "目的国院校正式录取通知书 (Offer)",
            "覆盖首年学费与生活费的银行存款证明",
            "最高学历证书、成绩单公证（及海牙认证）",
            "无犯罪记录证明公证及境外学生医疗保险"
          ],
          "processing": "约 3–6 周（长期 D 类学生签证审理）",
          "submission": "凭瑞士教育部认可院校正式录取通知书 (Offer) 向驻华使领馆/签证中心或官方学生门户递交",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先取得瑞士正规院校正式录取通知书 (Offer) 及符合要求的学费生活费担保，无法无录取直接个人自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "work": [
        {
          "id": "main",
          "title": "瑞士 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴瑞士合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
          "tips": "切勿持旅游免签或旅游签证在当地非法打工，务必确保雇主已为你申请正规 Work Permit。",
          "steps": [
            {
              "title": "获得当地合法雇主正式聘用合同",
              "detail": "确认岗位符合当地薪资及外籍雇员配额要求。"
            },
            {
              "title": "雇主向劳动/移民部门申领工作许可",
              "detail": "提供学历公证、无犯罪证明及过往履历。"
            },
            {
              "title": "凭工作许可批文申请入境工作签",
              "detail": "凭官方工作许可批准函向瑞士驻华使领馆或签证中心递交入境工作签证。"
            },
            {
              "title": "入境换领工作居留卡并登记税务",
              "detail": "抵境后完成体检与社保税务注册。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地雇主签署的正式雇佣合同与邀请函",
            "当地官方签发的工作许可批准函 (Work Permit)",
            "最高学历学位公证（及海牙认证）与个人英文简历",
            "无犯罪记录证明公证及指定体检证明"
          ],
          "processing": "工作许可预批 3–8 周 + 使领馆/移民局贴签 2–4 周",
          "submission": "雇主先向瑞士劳动/移民部门申领工作许可批文，获批后本人向驻华使领馆或签证中心递交工签",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先获得瑞士当地合规雇主正式聘用合同，并由雇主向当地劳动或移民部门申领工作许可批文 (Work Permit)，无法无雇主担保个人直接自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "immigration": [
        {
          "id": "main",
          "title": "瑞士 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问瑞士官方移民/内政部门网站核对最新永居居住年限、离境限制及语言考核规定。"
            },
            {
              "title": "累积连续合法工作/居留与纳税证明",
              "detail": "确保每年离境天数未超过法定上限。"
            },
            {
              "title": "向当地移民局提交永居申请",
              "detail": "提交税单、住址证明、语言证书（如要求）及无犯罪记录。"
            }
          ],
          "checklist": [
            "有效护照及历年居留卡记录",
            "连续合法居留期间的个人所得税税单与社保记录",
            "稳定的收入或存款资产证明",
            "当地合法居住地址证明（租房合同或房产证）",
            "无犯罪记录证明及当地语言测试证书（如要求）"
          ],
          "processing": "通常需连续合法居留纳税 3–5 年后递交，审理约 3–12 个月",
          "submission": "满足法定居住与语言/纳税年限后向瑞士当地移民局或内政部门递交永居 (PR) 申请",
          "diySupport": "advisory",
          "advisoryNote": "永久居留通常须先持合法工作、家庭团聚或合规格长期居留许可在瑞士连续居住并稳定纳税满法定年限（多为 5 年），无法从海外直接一步自助网申；本页提供长期路径规划指引。"
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "瑞士 短期旅游/访客通道（申根签 · TLScontact）",
          "fee": "90 EUR + TLS服务费",
          "desc": "瑞士虽非欧盟但属申根区，旅游签在 swiss-visa.ch 填表赴 TLScontact 递交；ETH/EPFL 等理工名校学费低廉且科研经费雄厚。",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 瑞士官方电子签证门户 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 TLScontact 中智瑞签 提交申请并缴费（免签国直接填报入境卡）。"
            },
            {
              "title": "获取批文或直接持护照入境",
              "detail": "打印电子签/确认函随身携带乘机。"
            }
          ],
          "checklist": [
            "有效期内中国因私护照（有效期6个月以上）",
            "往返/离境机票预订单",
            "全程酒店预订单（英文版）",
            "官方在线申请表打印件与白底证件照",
            "近6个月银行流水、在职证明及申根/旅行医疗保险"
          ],
          "processing": "5–10 工作日",
          "submission": "TLScontact 中智瑞签",
          "diySupport": "diy"
        }
      ],
      "other": [
        {
          "id": "main",
          "title": "瑞士 商务考察 / 探亲访友 / 特殊通道",
          "fee": "90 EUR + TLS服务费",
          "desc": "涵盖赴瑞士参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "按瑞士驻华使领馆或官方签证中心对应商务/探亲清单提交材料，并随身携带邀请方凭证。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ],
          "processing": "短期访问约 5–15 个工作日（免签国即时入境，视具体通道而定）",
          "submission": "凭瑞士邀请函或亲属关系证明按对应签证中心或免签口岸规则办理",
          "diySupport": "advisory",
          "advisoryNote": "商务考察、探亲访友或长期团聚通常须先取得瑞士当地邀请方出具的正式邀请函、公司派遣函或亲属关系证明，无法无邀请单纯按常规旅游自由行替代；本页提供通用材料与原则指引。"
        }
      ]
    }
  },
  {
    "id": "040",
    "code": "AUT",
    "nameZh": "奥地利",
    "nameEn": "Austria",
    "region": "欧洲申根 / EUROPE",
    "coords": [
      14.55,
      47.52
    ],
    "badge": "申根签 + 红白红卡",
    "tierColor": "#4A7B82",
    "labelPriority": false,
    "processing": "10–15 工作日",
    "submission": "VFS Austria 签证中心",
    "summary": "技术人才可通过“红白红卡 (Red-White-Red Card)”打分制赴奥工作定居，维也纳音乐与公立大学极具性价比。",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【遵守申根“主停留国”原则】申根签必须向停留天数最多的国家申请（同天数则向首入国申请），切忌拿A国签证完全不去A国，否则影响后续出签与入境。"
    ],
    "links": [
      {
        "title": "奥地利红白红卡官方移民网",
        "url": "https://www.migration.gv.at/",
        "desc": "奥地利官方红白红卡、积分自测与工作移民入口"
      },
      {
        "title": "奥地利外交部官网 (BMEIA)",
        "url": "https://www.bmeia.gv.at/",
        "desc": "奥地利官方签证、入境政策与驻外使领馆总入口"
      }
    ],
    "jobLinks": [
      {
        "title": "EURES 欧盟官方跨国就业平台",
        "url": "https://eures.europa.eu/jobseekers_en",
        "desc": "官方覆盖奥地利在内的欧洲31国雇主直聘库"
      },
      {
        "title": "LinkedIn 欧洲区域职位搜索",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "按Austria城市筛选英语/当地语全职岗位"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "奥地利 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴奥地利攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
          "tips": "涉外学历、成绩单及无犯罪记录公证件，建议通过中国外交部或地方外办办理海牙认证 (Apostille)（若目的国为海牙公约成员）。",
          "steps": [
            {
              "title": "申请目标院校并获取正式 Offer",
              "detail": "按学校官网要求提交学历、成绩单及语言证明。"
            },
            {
              "title": "办理公证与海牙认证/双认证",
              "detail": "准备最高学历、出生及无犯罪记录公证。"
            },
            {
              "title": "准备资金担保并递交学生签",
              "detail": "按奥地利驻华使领馆/签证中心或官方留学门户要求提交学生签证申请。"
            },
            {
              "title": "入境注册并办理当地居留卡",
              "detail": "抵境后按当地移民局规定期限办理学生居留卡。"
            }
          ],
          "checklist": [
            "有效护照及签证申请表",
            "目的国院校正式录取通知书 (Offer)",
            "覆盖首年学费与生活费的银行存款证明",
            "最高学历证书、成绩单公证（及海牙认证）",
            "无犯罪记录证明公证及境外学生医疗保险"
          ],
          "processing": "约 3–6 周（长期 D 类学生签证审理）",
          "submission": "凭奥地利教育部认可院校正式录取通知书 (Offer) 向驻华使领馆/签证中心或官方学生门户递交",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先取得奥地利正规院校正式录取通知书 (Offer) 及符合要求的学费生活费担保，无法无录取直接个人自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "work": [
        {
          "id": "main",
          "title": "奥地利红白红卡 (Red-White-Red Card) / 6个月高学历求职签",
          "fee": "约 160 EUR（居留卡申请及制卡费，以奥地利移民局官网为准）",
          "processing": "AMS 积分评估与移民局审核约 4–8 周",
          "submission": "高学历求职签 (Job Seeker Visa) 可向奥地利驻华使领馆/VFS 自助申请；获雇主聘用后递交红白红卡",
          "diySupport": "diy",
          "desc": "奥地利面向高素质紧缺人才实行打分制移民：特高素质人才（硕士/博士、专利/科研成果、高薪经历或年龄语言凑满 70 分）可在无奥地利工作 Offer 的情况下先自助申请 6 个月 Job Seeker 求职签证赴奥找工作，找到达标雇主后直接就地转领 2 年期红白红卡。",
          "tips": "前往 migration.gv.at 使用官方积分计算器自测分数；所有国内学历、无犯罪与出生公证均须办理外交部海牙认证 (Apostille) 并配德文或英文官方翻译。",
          "steps": [
            {
              "title": "在 migration.gv.at 核算 70 分积分资格",
              "detail": "按学历、专业工作年限、语言（德语/英语）、年龄及科研成果自测是否达到特高素质求职签 70 分标准。"
            },
            {
              "title": "准备海牙认证学历、工作与资金证明",
              "detail": "办理毕业证、无犯罪及出生公证海牙认证，准备覆盖 6 个月在奥生活费的银行存款与住宿证明。"
            },
            {
              "title": "预约奥地利驻华使领馆/VFS 提交求职签",
              "detail": "递交 Job Seeker Visa (Category D) 申请，获批后入境奥地利自由面试企业。"
            },
            {
              "title": "获雇主 Offer 后就地申领红白红卡",
              "detail": "拿到符合薪资标准的奥地利工作合同后向当地市政厅/移民局换领 Red-White-Red Card。"
            }
          ],
          "checklist": [
            "有效护照及签名签证申请表",
            "海牙认证的高等学历学位证及成绩单德/英文翻译",
            "过往专业工作经验证明与个人简历",
            "语言证书（德语/英语）及覆盖 6 个月生活的银行流水存款",
            "奥地利申根/长期医疗保险及在奥住址预订单"
          ]
        }
      ],
      "immigration": [
        {
          "id": "main",
          "title": "奥地利 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问奥地利官方移民/内政部门网站核对最新永居居住年限、离境限制及语言考核规定。"
            },
            {
              "title": "累积连续合法工作/居留与纳税证明",
              "detail": "确保每年离境天数未超过法定上限。"
            },
            {
              "title": "向当地移民局提交永居申请",
              "detail": "提交税单、住址证明、语言证书（如要求）及无犯罪记录。"
            }
          ],
          "checklist": [
            "有效护照及历年居留卡记录",
            "连续合法居留期间的个人所得税税单与社保记录",
            "稳定的收入或存款资产证明",
            "当地合法居住地址证明（租房合同或房产证）",
            "无犯罪记录证明及当地语言测试证书（如要求）"
          ],
          "processing": "通常需连续合法居留纳税 3–5 年后递交，审理约 3–12 个月",
          "submission": "满足法定居住与语言/纳税年限后向奥地利当地移民局或内政部门递交永居 (PR) 申请",
          "diySupport": "advisory",
          "advisoryNote": "永久居留通常须先持合法工作、家庭团聚或合规格长期居留许可在奥地利连续居住并稳定纳税满法定年限（多为 5 年），无法从海外直接一步自助网申；本页提供长期路径规划指引。"
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "奥地利 短期旅游/访客通道（申根签 + 红白红卡）",
          "fee": "90 EUR + VFS服务费",
          "desc": "技术人才可通过“红白红卡 (Red-White-Red Card)”打分制赴奥工作定居，维也纳音乐与公立大学极具性价比。",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 奥地利外交部入境与居留官网 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 VFS Austria 签证中心 提交申请并缴费（免签国直接填报入境卡）。"
            },
            {
              "title": "获取批文或直接持护照入境",
              "detail": "打印电子签/确认函随身携带乘机。"
            }
          ],
          "checklist": [
            "有效期内中国因私护照（有效期6个月以上）",
            "往返/离境机票预订单",
            "全程酒店预订单（英文版）",
            "官方在线申请表打印件与白底证件照",
            "近6个月银行流水、在职证明及申根/旅行医疗保险"
          ],
          "processing": "10–15 工作日",
          "submission": "VFS Austria 签证中心",
          "diySupport": "diy"
        }
      ],
      "other": [
        {
          "id": "main",
          "title": "奥地利 商务考察 / 探亲访友 / 特殊通道",
          "fee": "90 EUR + VFS服务费",
          "desc": "涵盖赴奥地利参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "按奥地利驻华使领馆或官方签证中心对应商务/探亲清单提交材料，并随身携带邀请方凭证。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ],
          "processing": "短期访问约 5–15 个工作日（免签国即时入境，视具体通道而定）",
          "submission": "凭奥地利邀请函或亲属关系证明按对应签证中心或免签口岸规则办理",
          "diySupport": "advisory",
          "advisoryNote": "商务考察、探亲访友或长期团聚通常须先取得奥地利当地邀请方出具的正式邀请函、公司派遣函或亲属关系证明，无法无邀请单纯按常规旅游自由行替代；本页提供通用材料与原则指引。"
        }
      ]
    }
  },
  {
    "id": "056",
    "code": "BEL",
    "nameZh": "比利时",
    "nameEn": "Belgium",
    "region": "欧洲申根 / EUROPE",
    "coords": [
      4.47,
      50.5
    ],
    "badge": "申根签 · TLScontact",
    "tierColor": "#4A7B82",
    "labelPriority": false,
    "processing": "15 天",
    "submission": "Visa-On-Web + TLScontact",
    "summary": "欧盟总部所在地，需先在比利时外交部 Visa-On-Web 在线填表，再预约 TLScontact 递交指纹。",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【遵守申根“主停留国”原则】申根签必须向停留天数最多的国家申请（同天数则向首入国申请），切忌拿A国签证完全不去A国，否则影响后续出签与入境。"
    ],
    "links": [
      {
        "title": "比利时移民局 (IBZ)",
        "url": "https://dofi.ibz.be/en",
        "desc": "官方签证/入境申请与政策查询入口"
      },
      {
        "title": "TLScontact 比利时签证中心",
        "url": "https://visas-be.tlscontact.com/",
        "desc": "官方移民局/使领馆/签证中心官网"
      }
    ],
    "jobLinks": [
      {
        "title": "EURES 欧盟官方跨国就业平台",
        "url": "https://eures.europa.eu/jobseekers_en",
        "desc": "官方覆盖比利时在内的欧洲31国雇主直聘库"
      },
      {
        "title": "LinkedIn 欧洲区域职位搜索",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "按Belgium城市筛选英语/当地语全职岗位"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "比利时 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴比利时攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
          "tips": "涉外学历、成绩单及无犯罪记录公证件，建议通过中国外交部或地方外办办理海牙认证 (Apostille)（若目的国为海牙公约成员）。",
          "steps": [
            {
              "title": "申请目标院校并获取正式 Offer",
              "detail": "按学校官网要求提交学历、成绩单及语言证明。"
            },
            {
              "title": "办理公证与海牙认证/双认证",
              "detail": "准备最高学历、出生及无犯罪记录公证。"
            },
            {
              "title": "准备资金担保并递交学生签",
              "detail": "按比利时驻华使领馆/签证中心或官方留学门户要求提交学生签证申请。"
            },
            {
              "title": "入境注册并办理当地居留卡",
              "detail": "抵境后按当地移民局规定期限办理学生居留卡。"
            }
          ],
          "checklist": [
            "有效护照及签证申请表",
            "目的国院校正式录取通知书 (Offer)",
            "覆盖首年学费与生活费的银行存款证明",
            "最高学历证书、成绩单公证（及海牙认证）",
            "无犯罪记录证明公证及境外学生医疗保险"
          ],
          "processing": "约 3–6 周（长期 D 类学生签证审理）",
          "submission": "凭比利时教育部认可院校正式录取通知书 (Offer) 向驻华使领馆/签证中心或官方学生门户递交",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先取得比利时正规院校正式录取通知书 (Offer) 及符合要求的学费生活费担保，无法无录取直接个人自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "work": [
        {
          "id": "main",
          "title": "比利时 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴比利时合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
          "tips": "切勿持旅游免签或旅游签证在当地非法打工，务必确保雇主已为你申请正规 Work Permit。",
          "steps": [
            {
              "title": "获得当地合法雇主正式聘用合同",
              "detail": "确认岗位符合当地薪资及外籍雇员配额要求。"
            },
            {
              "title": "雇主向劳动/移民部门申领工作许可",
              "detail": "提供学历公证、无犯罪证明及过往履历。"
            },
            {
              "title": "凭工作许可批文申请入境工作签",
              "detail": "凭官方工作许可批准函向比利时驻华使领馆或签证中心递交入境工作签证。"
            },
            {
              "title": "入境换领工作居留卡并登记税务",
              "detail": "抵境后完成体检与社保税务注册。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地雇主签署的正式雇佣合同与邀请函",
            "当地官方签发的工作许可批准函 (Work Permit)",
            "最高学历学位公证（及海牙认证）与个人英文简历",
            "无犯罪记录证明公证及指定体检证明"
          ],
          "processing": "工作许可预批 3–8 周 + 使领馆/移民局贴签 2–4 周",
          "submission": "雇主先向比利时劳动/移民部门申领工作许可批文，获批后本人向驻华使领馆或签证中心递交工签",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先获得比利时当地合规雇主正式聘用合同，并由雇主向当地劳动或移民部门申领工作许可批文 (Work Permit)，无法无雇主担保个人直接自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "immigration": [
        {
          "id": "main",
          "title": "比利时 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问比利时官方移民/内政部门网站核对最新永居居住年限、离境限制及语言考核规定。"
            },
            {
              "title": "累积连续合法工作/居留与纳税证明",
              "detail": "确保每年离境天数未超过法定上限。"
            },
            {
              "title": "向当地移民局提交永居申请",
              "detail": "提交税单、住址证明、语言证书（如要求）及无犯罪记录。"
            }
          ],
          "checklist": [
            "有效护照及历年居留卡记录",
            "连续合法居留期间的个人所得税税单与社保记录",
            "稳定的收入或存款资产证明",
            "当地合法居住地址证明（租房合同或房产证）",
            "无犯罪记录证明及当地语言测试证书（如要求）"
          ],
          "processing": "通常需连续合法居留纳税 3–5 年后递交，审理约 3–12 个月",
          "submission": "满足法定居住与语言/纳税年限后向比利时当地移民局或内政部门递交永居 (PR) 申请",
          "diySupport": "advisory",
          "advisoryNote": "永久居留通常须先持合法工作、家庭团聚或合规格长期居留许可在比利时连续居住并稳定纳税满法定年限（多为 5 年），无法从海外直接一步自助网申；本页提供长期路径规划指引。"
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "比利时 短期旅游/访客通道（申根签 · TLScontact）",
          "fee": "90 EUR + TLS服务费",
          "desc": "欧盟总部所在地，需先在比利时外交部 Visa-On-Web 在线填表，再预约 TLScontact 递交指纹。",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 比利时移民局 (IBZ) 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 Visa-On-Web + TLScontact 提交申请并缴费（免签国直接填报入境卡）。"
            },
            {
              "title": "获取批文或直接持护照入境",
              "detail": "打印电子签/确认函随身携带乘机。"
            }
          ],
          "checklist": [
            "有效期内中国因私护照（有效期6个月以上）",
            "往返/离境机票预订单",
            "全程酒店预订单（英文版）",
            "官方在线申请表打印件与白底证件照",
            "近6个月银行流水、在职证明及申根/旅行医疗保险"
          ],
          "processing": "15 天",
          "submission": "Visa-On-Web + TLScontact",
          "diySupport": "diy"
        }
      ],
      "other": [
        {
          "id": "main",
          "title": "比利时 商务考察 / 探亲访友 / 特殊通道",
          "fee": "90 EUR + TLS服务费",
          "desc": "涵盖赴比利时参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "按比利时驻华使领馆或官方签证中心对应商务/探亲清单提交材料，并随身携带邀请方凭证。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ],
          "processing": "短期访问约 5–15 个工作日（免签国即时入境，视具体通道而定）",
          "submission": "凭比利时邀请函或亲属关系证明按对应签证中心或免签口岸规则办理",
          "diySupport": "advisory",
          "advisoryNote": "商务考察、探亲访友或长期团聚通常须先取得比利时当地邀请方出具的正式邀请函、公司派遣函或亲属关系证明，无法无邀请单纯按常规旅游自由行替代；本页提供通用材料与原则指引。"
        }
      ]
    }
  },
  {
    "id": "752",
    "code": "SWE",
    "nameZh": "瑞典",
    "nameEn": "Sweden",
    "region": "北欧申根 / NORDICS",
    "coords": [
      18.64,
      60.13
    ],
    "badge": "申根签 + 移民局网申长签",
    "tierColor": "#4A7B82",
    "labelPriority": false,
    "processing": "15 天(短签) / 1–3 月(长签)",
    "submission": "Migrationsverket / VFS",
    "summary": "瑞典留学与工作许可全部直接向瑞典移民局官网在线DIY递交，获批后录指纹领取居留卡 (UT Card)。",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【遵守申根“主停留国”原则】申根签必须向停留天数最多的国家申请（同天数则向首入国申请），切忌拿A国签证完全不去A国，否则影响后续出签与入境。"
    ],
    "links": [
      {
        "title": "瑞典移民局 (Migrationsverket)",
        "url": "https://www.migrationsverket.se/English.html",
        "desc": "官方签证/入境申请与政策查询入口"
      },
      {
        "title": "VFS 瑞典签证中心",
        "url": "https://visa.vfsglobal.com/chn/en/swe/",
        "desc": "官方移民局/使领馆/签证中心官网"
      }
    ],
    "jobLinks": [
      {
        "title": "EURES 欧盟官方跨国就业平台",
        "url": "https://eures.europa.eu/jobseekers_en",
        "desc": "官方覆盖瑞典在内的欧洲31国雇主直聘库"
      },
      {
        "title": "LinkedIn 欧洲区域职位搜索",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "按Sweden城市筛选英语/当地语全职岗位"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "瑞典 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴瑞典攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
          "tips": "涉外学历、成绩单及无犯罪记录公证件，建议通过中国外交部或地方外办办理海牙认证 (Apostille)（若目的国为海牙公约成员）。",
          "steps": [
            {
              "title": "申请目标院校并获取正式 Offer",
              "detail": "按学校官网要求提交学历、成绩单及语言证明。"
            },
            {
              "title": "办理公证与海牙认证/双认证",
              "detail": "准备最高学历、出生及无犯罪记录公证。"
            },
            {
              "title": "准备资金担保并递交学生签",
              "detail": "凭瑞典高校录取信与学费缴费凭证登录瑞典移民局官网 (migrationsverket.se) 在线填报学生居留许可，随后赴使领馆或 VFS 录指纹。"
            },
            {
              "title": "入境注册并办理当地居留卡",
              "detail": "抵境后按当地移民局规定期限办理学生居留卡。"
            }
          ],
          "checklist": [
            "有效护照及签证申请表",
            "目的国院校正式录取通知书 (Offer)",
            "覆盖首年学费与生活费的银行存款证明",
            "最高学历证书、成绩单公证（及海牙认证）",
            "无犯罪记录证明公证及境外学生医疗保险"
          ],
          "processing": "Migrationsverket 审理约 1–3 个月",
          "submission": "凭瑞典大学录取与学费缴费收据在瑞典移民局官网 (migrationsverket.se) 在线填报，后赴使领馆/VFS 录指纹",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先取得瑞典正规院校正式录取通知书 (Offer) 及符合要求的学费生活费担保，无法无录取直接个人自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "work": [
        {
          "id": "main",
          "title": "瑞典 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴瑞典合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
          "tips": "切勿持旅游免签或旅游签证在当地非法打工，务必确保雇主已为你申请正规 Work Permit。",
          "steps": [
            {
              "title": "获得当地合法雇主正式聘用合同",
              "detail": "确认岗位符合当地薪资及外籍雇员配额要求。"
            },
            {
              "title": "雇主向劳动/移民部门申领工作许可",
              "detail": "提供学历公证、无犯罪证明及过往履历。"
            },
            {
              "title": "凭工作许可批文申请入境工作签",
              "detail": "由瑞典雇主在移民局官网发起工作许可申请后，本人在系统邮件链接内补全材料并预约 VFS 采集指纹与照片。"
            },
            {
              "title": "入境换领工作居留卡并登记税务",
              "detail": "抵境后完成体检与社保税务注册。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地雇主签署的正式雇佣合同与邀请函",
            "当地官方签发的工作许可批准函 (Work Permit)",
            "最高学历学位公证（及海牙认证）与个人英文简历",
            "无犯罪记录证明公证及指定体检证明"
          ],
          "processing": "Migrationsverket 审理约 1–3 个月",
          "submission": "雇主在瑞典移民局官网发起工作许可申请后，本人在邮件链接填报并赴 VFS 录指纹",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先获得瑞典当地合规雇主正式聘用合同，并由雇主向当地劳动或移民部门申领工作许可批文 (Work Permit)，无法无雇主担保个人直接自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "immigration": [
        {
          "id": "main",
          "title": "瑞典 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问瑞典官方移民/内政部门网站核对最新永居居住年限、离境限制及语言考核规定。"
            },
            {
              "title": "累积连续合法工作/居留与纳税证明",
              "detail": "确保每年离境天数未超过法定上限。"
            },
            {
              "title": "向当地移民局提交永居申请",
              "detail": "提交税单、住址证明、语言证书（如要求）及无犯罪记录。"
            }
          ],
          "checklist": [
            "有效护照及历年居留卡记录",
            "连续合法居留期间的个人所得税税单与社保记录",
            "稳定的收入或存款资产证明",
            "当地合法居住地址证明（租房合同或房产证）",
            "无犯罪记录证明及当地语言测试证书（如要求）"
          ],
          "processing": "通常需连续合法居留纳税 3–5 年后递交，审理约 3–12 个月",
          "submission": "满足法定居住与语言/纳税年限后向瑞典当地移民局或内政部门递交永居 (PR) 申请",
          "diySupport": "advisory",
          "advisoryNote": "永久居留通常须先持合法工作、家庭团聚或合规格长期居留许可在瑞典连续居住并稳定纳税满法定年限（多为 5 年），无法从海外直接一步自助网申；本页提供长期路径规划指引。"
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "瑞典 短期旅游/访客通道（申根签 + 移民局网申长签）",
          "fee": "90 EUR (短签) / 1,500 SEK (学签)",
          "desc": "瑞典留学与工作许可全部直接向瑞典移民局官网在线DIY递交，获批后录指纹领取居留卡 (UT Card)。",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 瑞典移民局 (Migrationsverket) 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 Migrationsverket / VFS 提交申请并缴费（免签国直接填报入境卡）。"
            },
            {
              "title": "获取批文或直接持护照入境",
              "detail": "打印电子签/确认函随身携带乘机。"
            }
          ],
          "checklist": [
            "有效期内中国因私护照（有效期6个月以上）",
            "往返/离境机票预订单",
            "全程酒店预订单（英文版）",
            "官方在线申请表打印件与白底证件照",
            "近6个月银行流水、在职证明及申根/旅行医疗保险"
          ],
          "processing": "15 天(短签) / 1–3 月(长签)",
          "submission": "Migrationsverket / VFS",
          "diySupport": "diy"
        }
      ],
      "other": [
        {
          "id": "main",
          "title": "瑞典 商务考察 / 探亲访友 / 特殊通道",
          "fee": "90 EUR (短签) / 1,500 SEK (学签)",
          "desc": "涵盖赴瑞典参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "按瑞典驻华使领馆或官方签证中心对应商务/探亲清单提交材料，并随身携带邀请方凭证。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ],
          "processing": "短期访问约 5–15 个工作日（免签国即时入境，视具体通道而定）",
          "submission": "凭瑞典邀请函或亲属关系证明按对应签证中心或免签口岸规则办理",
          "diySupport": "advisory",
          "advisoryNote": "商务考察、探亲访友或长期团聚通常须先取得瑞典当地邀请方出具的正式邀请函、公司派遣函或亲属关系证明，无法无邀请单纯按常规旅游自由行替代；本页提供通用材料与原则指引。"
        }
      ]
    }
  },
  {
    "id": "578",
    "code": "NOR",
    "nameZh": "挪威",
    "nameEn": "Norway",
    "region": "北欧申根 / NORDICS",
    "coords": [
      8.47,
      60.47
    ],
    "badge": "UDI 网申 + VFS",
    "tierColor": "#4A7B82",
    "labelPriority": false,
    "processing": "15 天",
    "submission": "UDI 挪威移民局 + VFS",
    "summary": "所有赴挪威签证均需先在挪威移民局 UDI 官网注册填表并在线缴费，随后预约 VFS 递交护照与指纹。",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【遵守申根“主停留国”原则】申根签必须向停留天数最多的国家申请（同天数则向首入国申请），切忌拿A国签证完全不去A国，否则影响后续出签与入境。"
    ],
    "links": [
      {
        "title": "挪威移民局 (UDI) 官网",
        "url": "https://www.udi.no/en/",
        "desc": "官方签证/入境申请与政策查询入口"
      },
      {
        "title": "VFS 挪威签证中心",
        "url": "https://visa.vfsglobal.com/chn/en/nor/",
        "desc": "官方移民局/使领馆/签证中心官网"
      }
    ],
    "jobLinks": [
      {
        "title": "EURES 欧盟官方跨国就业平台",
        "url": "https://eures.europa.eu/jobseekers_en",
        "desc": "官方覆盖挪威在内的欧洲31国雇主直聘库"
      },
      {
        "title": "LinkedIn 欧洲区域职位搜索",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "按Norway城市筛选英语/当地语全职岗位"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "挪威 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴挪威攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
          "tips": "涉外学历、成绩单及无犯罪记录公证件，建议通过中国外交部或地方外办办理海牙认证 (Apostille)（若目的国为海牙公约成员）。",
          "steps": [
            {
              "title": "申请目标院校并获取正式 Offer",
              "detail": "按学校官网要求提交学历、成绩单及语言证明。"
            },
            {
              "title": "办理公证与海牙认证/双认证",
              "detail": "准备最高学历、出生及无犯罪记录公证。"
            },
            {
              "title": "准备资金担保并递交学生签",
              "detail": "凭挪威院校录取通知书登录挪威移民局 udi.no 在线填表并缴费，随后预约 VFS 签证中心递交护照原件并录指纹。"
            },
            {
              "title": "入境注册并办理当地居留卡",
              "detail": "抵境后按当地移民局规定期限办理学生居留卡。"
            }
          ],
          "checklist": [
            "有效护照及签证申请表",
            "目的国院校正式录取通知书 (Offer)",
            "覆盖首年学费与生活费的银行存款证明",
            "最高学历证书、成绩单公证（及海牙认证）",
            "无犯罪记录证明公证及境外学生医疗保险"
          ],
          "processing": "UDI 审理约 4–8 周",
          "submission": "凭录取信登录挪威移民局 udi.no 在线填表缴费后赴 VFS 递交护照录指纹",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先取得挪威正规院校正式录取通知书 (Offer) 及符合要求的学费生活费担保，无法无录取直接个人自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "work": [
        {
          "id": "main",
          "title": "挪威 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴挪威合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
          "tips": "切勿持旅游免签或旅游签证在当地非法打工，务必确保雇主已为你申请正规 Work Permit。",
          "steps": [
            {
              "title": "获得当地合法雇主正式聘用合同",
              "detail": "确认岗位符合当地薪资及外籍雇员配额要求。"
            },
            {
              "title": "雇主向劳动/移民部门申领工作许可",
              "detail": "提供学历公证、无犯罪证明及过往履历。"
            },
            {
              "title": "凭工作许可批文申请入境工作签",
              "detail": "取得挪威雇主正式聘用合同后登录 udi.no 注册并在线提交工作居留申请，随后预约 VFS 递交护照与指纹。"
            },
            {
              "title": "入境换领工作居留卡并登记税务",
              "detail": "抵境后完成体检与社保税务注册。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地雇主签署的正式雇佣合同与邀请函",
            "当地官方签发的工作许可批准函 (Work Permit)",
            "最高学历学位公证（及海牙认证）与个人英文简历",
            "无犯罪记录证明公证及指定体检证明"
          ],
          "processing": "UDI 审理约 4–8 周",
          "submission": "拿到挪威雇主 Offer 后在 udi.no 注册在线提交，后赴 VFS 递交护照录指纹",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先获得挪威当地合规雇主正式聘用合同，并由雇主向当地劳动或移民部门申领工作许可批文 (Work Permit)，无法无雇主担保个人直接自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "immigration": [
        {
          "id": "main",
          "title": "挪威 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问挪威官方移民/内政部门网站核对最新永居居住年限、离境限制及语言考核规定。"
            },
            {
              "title": "累积连续合法工作/居留与纳税证明",
              "detail": "确保每年离境天数未超过法定上限。"
            },
            {
              "title": "向当地移民局提交永居申请",
              "detail": "提交税单、住址证明、语言证书（如要求）及无犯罪记录。"
            }
          ],
          "checklist": [
            "有效护照及历年居留卡记录",
            "连续合法居留期间的个人所得税税单与社保记录",
            "稳定的收入或存款资产证明",
            "当地合法居住地址证明（租房合同或房产证）",
            "无犯罪记录证明及当地语言测试证书（如要求）"
          ],
          "processing": "通常需连续合法居留纳税 3–5 年后递交，审理约 3–12 个月",
          "submission": "满足法定居住与语言/纳税年限后向挪威当地移民局或内政部门递交永居 (PR) 申请",
          "diySupport": "advisory",
          "advisoryNote": "永久居留通常须先持合法工作、家庭团聚或合规格长期居留许可在挪威连续居住并稳定纳税满法定年限（多为 5 年），无法从海外直接一步自助网申；本页提供长期路径规划指引。"
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "挪威 短期旅游/访客通道（UDI 网申 + VFS）",
          "fee": "90 EUR (短签) / 6,300 NOK (工签)",
          "desc": "所有赴挪威签证均需先在挪威移民局 UDI 官网注册填表并在线缴费，随后预约 VFS 递交护照与指纹。",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 挪威移民局 (UDI) 官网 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 UDI 挪威移民局 + VFS 提交申请并缴费（免签国直接填报入境卡）。"
            },
            {
              "title": "获取批文或直接持护照入境",
              "detail": "打印电子签/确认函随身携带乘机。"
            }
          ],
          "checklist": [
            "有效期内中国因私护照（有效期6个月以上）",
            "往返/离境机票预订单",
            "全程酒店预订单（英文版）",
            "官方在线申请表打印件与白底证件照",
            "近6个月银行流水、在职证明及申根/旅行医疗保险"
          ],
          "processing": "15 天",
          "submission": "UDI 挪威移民局 + VFS",
          "diySupport": "diy"
        }
      ],
      "other": [
        {
          "id": "main",
          "title": "挪威 商务考察 / 探亲访友 / 特殊通道",
          "fee": "90 EUR (短签) / 6,300 NOK (工签)",
          "desc": "涵盖赴挪威参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "按挪威驻华使领馆或官方签证中心对应商务/探亲清单提交材料，并随身携带邀请方凭证。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ],
          "processing": "短期访问约 5–15 个工作日（免签国即时入境，视具体通道而定）",
          "submission": "凭挪威邀请函或亲属关系证明按对应签证中心或免签口岸规则办理",
          "diySupport": "advisory",
          "advisoryNote": "商务考察、探亲访友或长期团聚通常须先取得挪威当地邀请方出具的正式邀请函、公司派遣函或亲属关系证明，无法无邀请单纯按常规旅游自由行替代；本页提供通用材料与原则指引。"
        }
      ]
    }
  },
  {
    "id": "208",
    "code": "DNK",
    "nameZh": "丹麦",
    "nameEn": "Denmark",
    "region": "北欧申根 / NORDICS",
    "coords": [
      9.5,
      56.26
    ],
    "badge": "ApplyVisa + SIRI",
    "tierColor": "#4A7B82",
    "labelPriority": false,
    "processing": "15 天",
    "submission": "ApplyVisa / SIRI + VFS",
    "summary": "工作与留学由丹麦国际招聘与融合局 (SIRI) 审理，Pay Limit Scheme 高薪工签审批极快。",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【遵守申根“主停留国”原则】申根签必须向停留天数最多的国家申请（同天数则向首入国申请），切忌拿A国签证完全不去A国，否则影响后续出签与入境。"
    ],
    "links": [
      {
        "title": "丹麦移民局官方门户 (Ny i Danmark)",
        "url": "https://www.nyidanmark.dk/en-GB",
        "desc": "官方签证/入境申请与政策查询入口"
      },
      {
        "title": "VFS 丹麦签证中心",
        "url": "https://visa.vfsglobal.com/chn/en/dnk/",
        "desc": "官方移民局/使领馆/签证中心官网"
      }
    ],
    "jobLinks": [
      {
        "title": "EURES 欧盟官方跨国就业平台",
        "url": "https://eures.europa.eu/jobseekers_en",
        "desc": "官方覆盖丹麦在内的欧洲31国雇主直聘库"
      },
      {
        "title": "LinkedIn 欧洲区域职位搜索",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "按Denmark城市筛选英语/当地语全职岗位"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "丹麦 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴丹麦攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
          "tips": "涉外学历、成绩单及无犯罪记录公证件，建议通过中国外交部或地方外办办理海牙认证 (Apostille)（若目的国为海牙公约成员）。",
          "steps": [
            {
              "title": "申请目标院校并获取正式 Offer",
              "detail": "按学校官网要求提交学历、成绩单及语言证明。"
            },
            {
              "title": "办理公证与海牙认证/双认证",
              "detail": "准备最高学历、出生及无犯罪记录公证。"
            },
            {
              "title": "准备资金担保并递交学生签",
              "detail": "由学校在系统发起 ST1 申请编号后，本人登录丹麦移民局官网 (nyidanmark.dk) 完成网申并赴 VFS 签证中心录入生物信息。"
            },
            {
              "title": "入境注册并办理当地居留卡",
              "detail": "抵境后按当地移民局规定期限办理学生居留卡。"
            }
          ],
          "checklist": [
            "有效护照及签证申请表",
            "目的国院校正式录取通知书 (Offer)",
            "覆盖首年学费与生活费的银行存款证明",
            "最高学历证书、成绩单公证（及海牙认证）",
            "无犯罪记录证明公证及境外学生医疗保险"
          ],
          "processing": "SIRI 审理约 1–2 个月",
          "submission": "学校发起 ST1 网申编号后本人登录 nyidanmark.dk 完成提交并赴 VFS 录指纹",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先取得丹麦正规院校正式录取通知书 (Offer) 及符合要求的学费生活费担保，无法无录取直接个人自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "work": [
        {
          "id": "main",
          "title": "丹麦 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴丹麦合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
          "tips": "切勿持旅游免签或旅游签证在当地非法打工，务必确保雇主已为你申请正规 Work Permit。",
          "steps": [
            {
              "title": "获得当地合法雇主正式聘用合同",
              "detail": "确认岗位符合当地薪资及外籍雇员配额要求。"
            },
            {
              "title": "雇主向劳动/移民部门申领工作许可",
              "detail": "提供学历公证、无犯罪证明及过往履历。"
            },
            {
              "title": "凭工作许可批文申请入境工作签",
              "detail": "由丹麦雇主先行发起 AR1 表格后，本人登录 nyidanmark.dk 完成工作居留网申并预约 VFS 签证中心录指纹。"
            },
            {
              "title": "入境换领工作居留卡并登记税务",
              "detail": "抵境后完成体检与社保税务注册。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地雇主签署的正式雇佣合同与邀请函",
            "当地官方签发的工作许可批准函 (Work Permit)",
            "最高学历学位公证（及海牙认证）与个人英文简历",
            "无犯罪记录证明公证及指定体检证明"
          ],
          "processing": "SIRI 审理约 1 个月（Pay Limit 更快）",
          "submission": "雇主发起 AR1 表格后本人在 nyidanmark.dk 完成网申并赴 VFS 录指纹",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先获得丹麦当地合规雇主正式聘用合同，并由雇主向当地劳动或移民部门申领工作许可批文 (Work Permit)，无法无雇主担保个人直接自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "immigration": [
        {
          "id": "main",
          "title": "丹麦 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问丹麦官方移民/内政部门网站核对最新永居居住年限、离境限制及语言考核规定。"
            },
            {
              "title": "累积连续合法工作/居留与纳税证明",
              "detail": "确保每年离境天数未超过法定上限。"
            },
            {
              "title": "向当地移民局提交永居申请",
              "detail": "提交税单、住址证明、语言证书（如要求）及无犯罪记录。"
            }
          ],
          "checklist": [
            "有效护照及历年居留卡记录",
            "连续合法居留期间的个人所得税税单与社保记录",
            "稳定的收入或存款资产证明",
            "当地合法居住地址证明（租房合同或房产证）",
            "无犯罪记录证明及当地语言测试证书（如要求）"
          ],
          "processing": "通常需连续合法居留纳税 3–5 年后递交，审理约 3–12 个月",
          "submission": "满足法定居住与语言/纳税年限后向丹麦当地移民局或内政部门递交永居 (PR) 申请",
          "diySupport": "advisory",
          "advisoryNote": "永久居留通常须先持合法工作、家庭团聚或合规格长期居留许可在丹麦连续居住并稳定纳税满法定年限（多为 5 年），无法从海外直接一步自助网申；本页提供长期路径规划指引。"
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "丹麦 短期旅游/访客通道（ApplyVisa + SIRI）",
          "fee": "90 EUR",
          "desc": "工作与留学由丹麦国际招聘与融合局 (SIRI) 审理，Pay Limit Scheme 高薪工签审批极快。",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 丹麦移民局官方门户 (Ny i Danmark) 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 ApplyVisa / SIRI + VFS 提交申请并缴费（免签国直接填报入境卡）。"
            },
            {
              "title": "获取批文或直接持护照入境",
              "detail": "打印电子签/确认函随身携带乘机。"
            }
          ],
          "checklist": [
            "有效期内中国因私护照（有效期6个月以上）",
            "往返/离境机票预订单",
            "全程酒店预订单（英文版）",
            "官方在线申请表打印件与白底证件照",
            "近6个月银行流水、在职证明及申根/旅行医疗保险"
          ],
          "processing": "15 天",
          "submission": "ApplyVisa / SIRI + VFS",
          "diySupport": "diy"
        }
      ],
      "other": [
        {
          "id": "main",
          "title": "丹麦 商务考察 / 探亲访友 / 特殊通道",
          "fee": "90 EUR",
          "desc": "涵盖赴丹麦参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "按丹麦驻华使领馆或官方签证中心对应商务/探亲清单提交材料，并随身携带邀请方凭证。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ],
          "processing": "短期访问约 5–15 个工作日（免签国即时入境，视具体通道而定）",
          "submission": "凭丹麦邀请函或亲属关系证明按对应签证中心或免签口岸规则办理",
          "diySupport": "advisory",
          "advisoryNote": "商务考察、探亲访友或长期团聚通常须先取得丹麦当地邀请方出具的正式邀请函、公司派遣函或亲属关系证明，无法无邀请单纯按常规旅游自由行替代；本页提供通用材料与原则指引。"
        }
      ]
    }
  },
  {
    "id": "246",
    "code": "FIN",
    "nameZh": "芬兰",
    "nameEn": "Finland",
    "region": "北欧申根 / NORDICS",
    "coords": [
      25.75,
      61.92
    ],
    "badge": "Enter Finland + VFS",
    "tierColor": "#4A7B82",
    "labelPriority": false,
    "processing": "15 天(短签) / 2–4 周(D签)",
    "submission": "Enter Finland / VFS",
    "summary": "留学、工作与永居全部通过 Enter Finland 全电子化自助申请，芬兰长期居留满4年即可申请永居。",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【遵守申根“主停留国”原则】申根签必须向停留天数最多的国家申请（同天数则向首入国申请），切忌拿A国签证完全不去A国，否则影响后续出签与入境。"
    ],
    "links": [
      {
        "title": "芬兰移民局 (Migri) 官网",
        "url": "https://migri.fi/en/home",
        "desc": "官方签证/入境申请与政策查询入口"
      },
      {
        "title": "Enter Finland 在线申请系统",
        "url": "https://enterfinland.fi/",
        "desc": "官方移民局/使领馆/签证中心官网"
      }
    ],
    "jobLinks": [
      {
        "title": "EURES 欧盟官方跨国就业平台",
        "url": "https://eures.europa.eu/jobseekers_en",
        "desc": "官方覆盖芬兰在内的欧洲31国雇主直聘库"
      },
      {
        "title": "LinkedIn 欧洲区域职位搜索",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "按Finland城市筛选英语/当地语全职岗位"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "芬兰 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴芬兰攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
          "tips": "涉外学历、成绩单及无犯罪记录公证件，建议通过中国外交部或地方外办办理海牙认证 (Apostille)（若目的国为海牙公约成员）。",
          "steps": [
            {
              "title": "申请目标院校并获取正式 Offer",
              "detail": "按学校官网要求提交学历、成绩单及语言证明。"
            },
            {
              "title": "办理公证与海牙认证/双认证",
              "detail": "准备最高学历、出生及无犯罪记录公证。"
            },
            {
              "title": "准备资金担保并递交学生签",
              "detail": "凭芬兰院校正式录取信登录 Enter Finland (enterfinland.fi) 在线提交学生居留许可，并预约 VFS 核验原件与录指纹。"
            },
            {
              "title": "入境注册并办理当地居留卡",
              "detail": "抵境后按当地移民局规定期限办理学生居留卡。"
            }
          ],
          "checklist": [
            "有效护照及签证申请表",
            "目的国院校正式录取通知书 (Offer)",
            "覆盖首年学费与生活费的银行存款证明",
            "最高学历证书、成绩单公证（及海牙认证）",
            "无犯罪记录证明公证及境外学生医疗保险"
          ],
          "processing": "Enter Finland 电子居留许可约 2–4 周",
          "submission": "凭芬兰院校录取信登录 enterfinland.fi 在线提交学生居留许可并预约 VFS 核验原件与指纹",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先取得芬兰正规院校正式录取通知书 (Offer) 及符合要求的学费生活费担保，无法无录取直接个人自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "work": [
        {
          "id": "main",
          "title": "芬兰 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴芬兰合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
          "tips": "切勿持旅游免签或旅游签证在当地非法打工，务必确保雇主已为你申请正规 Work Permit。",
          "steps": [
            {
              "title": "获得当地合法雇主正式聘用合同",
              "detail": "确认岗位符合当地薪资及外籍雇员配额要求。"
            },
            {
              "title": "雇主向劳动/移民部门申领工作许可",
              "detail": "提供学历公证、无犯罪证明及过往履历。"
            },
            {
              "title": "凭工作许可批文申请入境工作签",
              "detail": "待芬兰雇主在系统补充雇佣条款后，本人登录 enterfinland.fi 在线提交工作居留许可申请并赴 VFS 核验原件。"
            },
            {
              "title": "入境换领工作居留卡并登记税务",
              "detail": "抵境后完成体检与社保税务注册。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地雇主签署的正式雇佣合同与邀请函",
            "当地官方签发的工作许可批准函 (Work Permit)",
            "最高学历学位公证（及海牙认证）与个人英文简历",
            "无犯罪记录证明公证及指定体检证明"
          ],
          "processing": "Enter Finland 审理约 2–6 周（专家卡约 2 周）",
          "submission": "雇主提交雇佣条款后本人在 enterfinland.fi 在线申领工作居留许可并赴 VFS 核验",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先获得芬兰当地合规雇主正式聘用合同，并由雇主向当地劳动或移民部门申领工作许可批文 (Work Permit)，无法无雇主担保个人直接自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "immigration": [
        {
          "id": "main",
          "title": "芬兰 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问芬兰官方移民/内政部门网站核对最新永居居住年限、离境限制及语言考核规定。"
            },
            {
              "title": "累积连续合法工作/居留与纳税证明",
              "detail": "确保每年离境天数未超过法定上限。"
            },
            {
              "title": "向当地移民局提交永居申请",
              "detail": "提交税单、住址证明、语言证书（如要求）及无犯罪记录。"
            }
          ],
          "checklist": [
            "有效护照及历年居留卡记录",
            "连续合法居留期间的个人所得税税单与社保记录",
            "稳定的收入或存款资产证明",
            "当地合法居住地址证明（租房合同或房产证）",
            "无犯罪记录证明及当地语言测试证书（如要求）"
          ],
          "processing": "通常需连续合法居留纳税 3–5 年后递交，审理约 3–12 个月",
          "submission": "满足法定居住与语言/纳税年限后向芬兰当地移民局或内政部门递交永居 (PR) 申请",
          "diySupport": "advisory",
          "advisoryNote": "永久居留通常须先持合法工作、家庭团聚或合规格长期居留许可在芬兰连续居住并稳定纳税满法定年限（多为 5 年），无法从海外直接一步自助网申；本页提供长期路径规划指引。"
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "芬兰 短期旅游/访客通道（Enter Finland + VFS）",
          "fee": "90 EUR (短签) / 350 EUR (学签)",
          "desc": "留学、工作与永居全部通过 Enter Finland 全电子化自助申请，芬兰长期居留满4年即可申请永居。",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 芬兰移民局 (Migri) 官网 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 Enter Finland / VFS 提交申请并缴费（免签国直接填报入境卡）。"
            },
            {
              "title": "获取批文或直接持护照入境",
              "detail": "打印电子签/确认函随身携带乘机。"
            }
          ],
          "checklist": [
            "有效期内中国因私护照（有效期6个月以上）",
            "往返/离境机票预订单",
            "全程酒店预订单（英文版）",
            "官方在线申请表打印件与白底证件照",
            "近6个月银行流水、在职证明及申根/旅行医疗保险"
          ],
          "processing": "15 天(短签) / 2–4 周(D签)",
          "submission": "Enter Finland / VFS",
          "diySupport": "diy"
        }
      ],
      "other": [
        {
          "id": "main",
          "title": "芬兰 商务考察 / 探亲访友 / 特殊通道",
          "fee": "90 EUR (短签) / 350 EUR (学签)",
          "desc": "涵盖赴芬兰参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "按芬兰驻华使领馆或官方签证中心对应商务/探亲清单提交材料，并随身携带邀请方凭证。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ],
          "processing": "短期访问约 5–15 个工作日（免签国即时入境，视具体通道而定）",
          "submission": "凭芬兰邀请函或亲属关系证明按对应签证中心或免签口岸规则办理",
          "diySupport": "advisory",
          "advisoryNote": "商务考察、探亲访友或长期团聚通常须先取得芬兰当地邀请方出具的正式邀请函、公司派遣函或亲属关系证明，无法无邀请单纯按常规旅游自由行替代；本页提供通用材料与原则指引。"
        }
      ]
    }
  },
  {
    "id": "300",
    "code": "GRC",
    "nameZh": "希腊",
    "nameEn": "Greece",
    "region": "欧洲申根 / EUROPE",
    "coords": [
      21.82,
      39.07
    ],
    "badge": "申根签 + 黄金居留",
    "tierColor": "#4A7B82",
    "labelPriority": false,
    "processing": "10–15 工作日",
    "submission": "GVCW 希腊签证中心",
    "summary": "圣托里尼/雅典旅游需向 GVCW 希腊签证中心递交申根签；另有购房黄金居留通道。",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【遵守申根“主停留国”原则】申根签必须向停留天数最多的国家申请（同天数则向首入国申请），切忌拿A国签证完全不去A国，否则影响后续出签与入境。"
    ],
    "links": [
      {
        "title": "希腊外交部签证指南",
        "url": "https://www.mfa.gr/en/visas/",
        "desc": "官方签证/入境申请与政策查询入口"
      },
      {
        "title": "GVCW 中国希腊签证中心",
        "url": "https://cn-gr.gvcworld.eu/",
        "desc": "官方移民局/使领馆/签证中心官网"
      }
    ],
    "jobLinks": [
      {
        "title": "EURES 欧盟官方跨国就业平台",
        "url": "https://eures.europa.eu/jobseekers_en",
        "desc": "官方覆盖希腊在内的欧洲31国雇主直聘库"
      },
      {
        "title": "LinkedIn 欧洲区域职位搜索",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "按Greece城市筛选英语/当地语全职岗位"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "希腊 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴希腊攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
          "tips": "涉外学历、成绩单及无犯罪记录公证件，建议通过中国外交部或地方外办办理海牙认证 (Apostille)（若目的国为海牙公约成员）。",
          "steps": [
            {
              "title": "申请目标院校并获取正式 Offer",
              "detail": "按学校官网要求提交学历、成绩单及语言证明。"
            },
            {
              "title": "办理公证与海牙认证/双认证",
              "detail": "准备最高学历、出生及无犯罪记录公证。"
            },
            {
              "title": "准备资金担保并递交学生签",
              "detail": "按希腊驻华使领馆/签证中心或官方留学门户要求提交学生签证申请。"
            },
            {
              "title": "入境注册并办理当地居留卡",
              "detail": "抵境后按当地移民局规定期限办理学生居留卡。"
            }
          ],
          "checklist": [
            "有效护照及签证申请表",
            "目的国院校正式录取通知书 (Offer)",
            "覆盖首年学费与生活费的银行存款证明",
            "最高学历证书、成绩单公证（及海牙认证）",
            "无犯罪记录证明公证及境外学生医疗保险"
          ],
          "processing": "约 3–6 周（长期 D 类学生签证审理）",
          "submission": "凭希腊教育部认可院校正式录取通知书 (Offer) 向驻华使领馆/签证中心或官方学生门户递交",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先取得希腊正规院校正式录取通知书 (Offer) 及符合要求的学费生活费担保，无法无录取直接个人自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "work": [
        {
          "id": "main",
          "title": "希腊 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴希腊合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
          "tips": "切勿持旅游免签或旅游签证在当地非法打工，务必确保雇主已为你申请正规 Work Permit。",
          "steps": [
            {
              "title": "获得当地合法雇主正式聘用合同",
              "detail": "确认岗位符合当地薪资及外籍雇员配额要求。"
            },
            {
              "title": "雇主向劳动/移民部门申领工作许可",
              "detail": "提供学历公证、无犯罪证明及过往履历。"
            },
            {
              "title": "凭工作许可批文申请入境工作签",
              "detail": "凭官方工作许可批准函向希腊驻华使领馆或签证中心递交入境工作签证。"
            },
            {
              "title": "入境换领工作居留卡并登记税务",
              "detail": "抵境后完成体检与社保税务注册。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地雇主签署的正式雇佣合同与邀请函",
            "当地官方签发的工作许可批准函 (Work Permit)",
            "最高学历学位公证（及海牙认证）与个人英文简历",
            "无犯罪记录证明公证及指定体检证明"
          ],
          "processing": "工作许可预批 3–8 周 + 使领馆/移民局贴签 2–4 周",
          "submission": "雇主先向希腊劳动/移民部门申领工作许可批文，获批后本人向驻华使领馆或签证中心递交工签",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先获得希腊当地合规雇主正式聘用合同，并由雇主向当地劳动或移民部门申领工作许可批文 (Work Permit)，无法无雇主担保个人直接自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "immigration": [
        {
          "id": "main",
          "title": "希腊 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问希腊官方移民/内政部门网站核对最新永居居住年限、离境限制及语言考核规定。"
            },
            {
              "title": "累积连续合法工作/居留与纳税证明",
              "detail": "确保每年离境天数未超过法定上限。"
            },
            {
              "title": "向当地移民局提交永居申请",
              "detail": "提交税单、住址证明、语言证书（如要求）及无犯罪记录。"
            }
          ],
          "checklist": [
            "有效护照及历年居留卡记录",
            "连续合法居留期间的个人所得税税单与社保记录",
            "稳定的收入或存款资产证明",
            "当地合法居住地址证明（租房合同或房产证）",
            "无犯罪记录证明及当地语言测试证书（如要求）"
          ],
          "processing": "通常需连续合法居留纳税 3–5 年后递交，审理约 3–12 个月",
          "submission": "满足法定居住与语言/纳税年限后向希腊当地移民局或内政部门递交永居 (PR) 申请",
          "diySupport": "advisory",
          "advisoryNote": "永久居留通常须先持合法工作、家庭团聚或合规格长期居留许可在希腊连续居住并稳定纳税满法定年限（多为 5 年），无法从海外直接一步自助网申；本页提供长期路径规划指引。"
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "希腊 短期旅游/访客通道（申根签 + 黄金居留）",
          "fee": "90 EUR + 服务费",
          "desc": "圣托里尼/雅典旅游需向 GVCW 希腊签证中心递交申根签；另有购房黄金居留通道。",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 希腊外交部签证指南 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 GVCW 希腊签证中心 提交申请并缴费（免签国直接填报入境卡）。"
            },
            {
              "title": "获取批文或直接持护照入境",
              "detail": "打印电子签/确认函随身携带乘机。"
            }
          ],
          "checklist": [
            "有效期内中国因私护照（有效期6个月以上）",
            "往返/离境机票预订单",
            "全程酒店预订单（英文版）",
            "官方在线申请表打印件与白底证件照",
            "近6个月银行流水、在职证明及申根/旅行医疗保险"
          ],
          "processing": "10–15 工作日",
          "submission": "GVCW 希腊签证中心",
          "diySupport": "diy"
        }
      ],
      "other": [
        {
          "id": "main",
          "title": "希腊数字游民签证 (Digital Nomad Visa) / 黄金居留",
          "fee": "75 EUR（D 类国别签）+ 150 EUR（入境后居留卡申请费）",
          "processing": "约 10–30 个工作日",
          "submission": "凭每月 3,500 EUR 以上税后远程收入证明直接向希腊驻华使领馆/签证中心递交数字游民 D 签",
          "diySupport": "diy",
          "desc": "希腊向非欧盟远程雇员及自由职业者开放 1 年期数字游民 D 签（可境内续办 2 年期数字游民居留卡），要求证明每月拥有至少 3,500 EUR 税后稳定境外收入（携带配偶/子女分别提高 20%/15%）；另有购房投资黄金居留通道。",
          "tips": "申请材料中的无犯罪记录与亲属关系公证须办理外交部海牙认证并经指定英文或希腊文翻译。",
          "steps": [
            {
              "title": "核对 3,500 EUR/月税后境外收入门槛",
              "detail": "备齐境外雇主远程工作声明/合同、公司营业执照及近 6 个月工资/业务入账流水。"
            },
            {
              "title": "办理无犯罪及体检健康声明认证",
              "detail": "准备海牙认证的无犯罪记录、医疗保险及希腊住址租赁证明。"
            },
            {
              "title": "向希腊驻华使领馆提交数字游民 D 签",
              "detail": "预约递交原件审核并缴费 75 EUR，获批 D 签入境后可申请换发居留卡。"
            }
          ],
          "checklist": [
            "有效护照及 D 类长期签证申请表",
            "税后月入 ≥ 3,500 EUR 的合同与近 6 个月银行流水",
            "境外雇主出具的允许在希腊远程工作证明函",
            "海牙认证无犯罪公证及希腊租房/住宿合同",
            "覆盖赴希期间的商业医疗保险单"
          ]
        }
      ]
    }
  },
  {
    "id": "616",
    "code": "POL",
    "nameZh": "波兰",
    "nameEn": "Poland",
    "region": "中欧申根 / EUROPE",
    "coords": [
      19.15,
      51.92
    ],
    "badge": "申根签 · e-Konsulat",
    "tierColor": "#4A7B82",
    "labelPriority": false,
    "processing": "15 天",
    "submission": "e-Konsulat / VFS Poland",
    "summary": "波兰高校英语授课学费极其低廉（约2,000–4,000 EUR/年），工作许可后亦可直接申请欧盟蓝卡。",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【遵守申根“主停留国”原则】申根签必须向停留天数最多的国家申请（同天数则向首入国申请），切忌拿A国签证完全不去A国，否则影响后续出签与入境。"
    ],
    "links": [
      {
        "title": "波兰外交部 e-Konsulat 系统",
        "url": "https://secure.e-konsulat.gov.pl/",
        "desc": "官方签证/入境申请与政策查询入口"
      },
      {
        "title": "VFS 波兰签证中心",
        "url": "https://visa.vfsglobal.com/chn/en/pol/",
        "desc": "官方移民局/使领馆/签证中心官网"
      }
    ],
    "jobLinks": [
      {
        "title": "EURES 欧盟官方跨国就业平台",
        "url": "https://eures.europa.eu/jobseekers_en",
        "desc": "官方覆盖波兰在内的欧洲31国雇主直聘库"
      },
      {
        "title": "LinkedIn 欧洲区域职位搜索",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "按Poland城市筛选英语/当地语全职岗位"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "波兰 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴波兰攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
          "tips": "涉外学历、成绩单及无犯罪记录公证件，建议通过中国外交部或地方外办办理海牙认证 (Apostille)（若目的国为海牙公约成员）。",
          "steps": [
            {
              "title": "申请目标院校并获取正式 Offer",
              "detail": "按学校官网要求提交学历、成绩单及语言证明。"
            },
            {
              "title": "办理公证与海牙认证/双认证",
              "detail": "准备最高学历、出生及无犯罪记录公证。"
            },
            {
              "title": "准备资金担保并递交学生签",
              "detail": "按波兰驻华使领馆/签证中心或官方留学门户要求提交学生签证申请。"
            },
            {
              "title": "入境注册并办理当地居留卡",
              "detail": "抵境后按当地移民局规定期限办理学生居留卡。"
            }
          ],
          "checklist": [
            "有效护照及签证申请表",
            "目的国院校正式录取通知书 (Offer)",
            "覆盖首年学费与生活费的银行存款证明",
            "最高学历证书、成绩单公证（及海牙认证）",
            "无犯罪记录证明公证及境外学生医疗保险"
          ],
          "processing": "约 3–6 周（长期 D 类学生签证审理）",
          "submission": "凭波兰教育部认可院校正式录取通知书 (Offer) 向驻华使领馆/签证中心或官方学生门户递交",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先取得波兰正规院校正式录取通知书 (Offer) 及符合要求的学费生活费担保，无法无录取直接个人自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "work": [
        {
          "id": "main",
          "title": "波兰 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴波兰合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
          "tips": "切勿持旅游免签或旅游签证在当地非法打工，务必确保雇主已为你申请正规 Work Permit。",
          "steps": [
            {
              "title": "获得当地合法雇主正式聘用合同",
              "detail": "确认岗位符合当地薪资及外籍雇员配额要求。"
            },
            {
              "title": "雇主向劳动/移民部门申领工作许可",
              "detail": "提供学历公证、无犯罪证明及过往履历。"
            },
            {
              "title": "凭工作许可批文申请入境工作签",
              "detail": "凭官方工作许可批准函向波兰驻华使领馆或签证中心递交入境工作签证。"
            },
            {
              "title": "入境换领工作居留卡并登记税务",
              "detail": "抵境后完成体检与社保税务注册。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地雇主签署的正式雇佣合同与邀请函",
            "当地官方签发的工作许可批准函 (Work Permit)",
            "最高学历学位公证（及海牙认证）与个人英文简历",
            "无犯罪记录证明公证及指定体检证明"
          ],
          "processing": "工作许可预批 3–8 周 + 使领馆/移民局贴签 2–4 周",
          "submission": "雇主先向波兰劳动/移民部门申领工作许可批文，获批后本人向驻华使领馆或签证中心递交工签",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先获得波兰当地合规雇主正式聘用合同，并由雇主向当地劳动或移民部门申领工作许可批文 (Work Permit)，无法无雇主担保个人直接自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "immigration": [
        {
          "id": "main",
          "title": "波兰 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问波兰官方移民/内政部门网站核对最新永居居住年限、离境限制及语言考核规定。"
            },
            {
              "title": "累积连续合法工作/居留与纳税证明",
              "detail": "确保每年离境天数未超过法定上限。"
            },
            {
              "title": "向当地移民局提交永居申请",
              "detail": "提交税单、住址证明、语言证书（如要求）及无犯罪记录。"
            }
          ],
          "checklist": [
            "有效护照及历年居留卡记录",
            "连续合法居留期间的个人所得税税单与社保记录",
            "稳定的收入或存款资产证明",
            "当地合法居住地址证明（租房合同或房产证）",
            "无犯罪记录证明及当地语言测试证书（如要求）"
          ],
          "processing": "通常需连续合法居留纳税 3–5 年后递交，审理约 3–12 个月",
          "submission": "满足法定居住与语言/纳税年限后向波兰当地移民局或内政部门递交永居 (PR) 申请",
          "diySupport": "advisory",
          "advisoryNote": "永久居留通常须先持合法工作、家庭团聚或合规格长期居留许可在波兰连续居住并稳定纳税满法定年限（多为 5 年），无法从海外直接一步自助网申；本页提供长期路径规划指引。"
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "波兰 短期旅游/访客通道（申根签 · e-Konsulat）",
          "fee": "90 EUR + VFS服务费",
          "desc": "波兰高校英语授课学费极其低廉（约2,000–4,000 EUR/年），工作许可后亦可直接申请欧盟蓝卡。",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 波兰外交部 e-Konsulat 系统 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 e-Konsulat / VFS Poland 提交申请并缴费（免签国直接填报入境卡）。"
            },
            {
              "title": "获取批文或直接持护照入境",
              "detail": "打印电子签/确认函随身携带乘机。"
            }
          ],
          "checklist": [
            "有效期内中国因私护照（有效期6个月以上）",
            "往返/离境机票预订单",
            "全程酒店预订单（英文版）",
            "官方在线申请表打印件与白底证件照",
            "近6个月银行流水、在职证明及申根/旅行医疗保险"
          ],
          "processing": "15 天",
          "submission": "e-Konsulat / VFS Poland",
          "diySupport": "diy"
        }
      ],
      "other": [
        {
          "id": "main",
          "title": "波兰 商务考察 / 探亲访友 / 特殊通道",
          "fee": "90 EUR + VFS服务费",
          "desc": "涵盖赴波兰参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "按波兰驻华使领馆或官方签证中心对应商务/探亲清单提交材料，并随身携带邀请方凭证。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ],
          "processing": "短期访问约 5–15 个工作日（免签国即时入境，视具体通道而定）",
          "submission": "凭波兰邀请函或亲属关系证明按对应签证中心或免签口岸规则办理",
          "diySupport": "advisory",
          "advisoryNote": "商务考察、探亲访友或长期团聚通常须先取得波兰当地邀请方出具的正式邀请函、公司派遣函或亲属关系证明，无法无邀请单纯按常规旅游自由行替代；本页提供通用材料与原则指引。"
        }
      ]
    }
  },
  {
    "id": "203",
    "code": "CZE",
    "nameZh": "捷克",
    "nameEn": "Czechia",
    "region": "中欧申根 / EUROPE",
    "coords": [
      15.47,
      49.82
    ],
    "badge": "申根签 · VFS递交",
    "tierColor": "#4A7B82",
    "labelPriority": false,
    "processing": "15 天",
    "submission": "VFS Czech Republic",
    "summary": "布拉格热门旅游地及中欧留学中心，捷语授课公立大学同样实行免学费政策。",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【遵守申根“主停留国”原则】申根签必须向停留天数最多的国家申请（同天数则向首入国申请），切忌拿A国签证完全不去A国，否则影响后续出签与入境。"
    ],
    "links": [
      {
        "title": "捷克外交部外国人签证官网",
        "url": "https://mzv.gov.cz/jnp/en/information_for_aliens/index.html",
        "desc": "官方签证/入境申请与政策查询入口"
      },
      {
        "title": "VFS 捷克签证中心",
        "url": "https://visa.vfsglobal.com/chn/en/cze/",
        "desc": "官方移民局/使领馆/签证中心官网"
      }
    ],
    "jobLinks": [
      {
        "title": "EURES 欧盟官方跨国就业平台",
        "url": "https://eures.europa.eu/jobseekers_en",
        "desc": "官方覆盖捷克在内的欧洲31国雇主直聘库"
      },
      {
        "title": "LinkedIn 欧洲区域职位搜索",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "按Czechia城市筛选英语/当地语全职岗位"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "捷克 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴捷克攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
          "tips": "涉外学历、成绩单及无犯罪记录公证件，建议通过中国外交部或地方外办办理海牙认证 (Apostille)（若目的国为海牙公约成员）。",
          "steps": [
            {
              "title": "申请目标院校并获取正式 Offer",
              "detail": "按学校官网要求提交学历、成绩单及语言证明。"
            },
            {
              "title": "办理公证与海牙认证/双认证",
              "detail": "准备最高学历、出生及无犯罪记录公证。"
            },
            {
              "title": "准备资金担保并递交学生签",
              "detail": "按捷克驻华使领馆/签证中心或官方留学门户要求提交学生签证申请。"
            },
            {
              "title": "入境注册并办理当地居留卡",
              "detail": "抵境后按当地移民局规定期限办理学生居留卡。"
            }
          ],
          "checklist": [
            "有效护照及签证申请表",
            "目的国院校正式录取通知书 (Offer)",
            "覆盖首年学费与生活费的银行存款证明",
            "最高学历证书、成绩单公证（及海牙认证）",
            "无犯罪记录证明公证及境外学生医疗保险"
          ],
          "processing": "约 3–6 周（长期 D 类学生签证审理）",
          "submission": "凭捷克教育部认可院校正式录取通知书 (Offer) 向驻华使领馆/签证中心或官方学生门户递交",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先取得捷克正规院校正式录取通知书 (Offer) 及符合要求的学费生活费担保，无法无录取直接个人自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "work": [
        {
          "id": "main",
          "title": "捷克 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴捷克合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
          "tips": "切勿持旅游免签或旅游签证在当地非法打工，务必确保雇主已为你申请正规 Work Permit。",
          "steps": [
            {
              "title": "获得当地合法雇主正式聘用合同",
              "detail": "确认岗位符合当地薪资及外籍雇员配额要求。"
            },
            {
              "title": "雇主向劳动/移民部门申领工作许可",
              "detail": "提供学历公证、无犯罪证明及过往履历。"
            },
            {
              "title": "凭工作许可批文申请入境工作签",
              "detail": "凭官方工作许可批准函向捷克驻华使领馆或签证中心递交入境工作签证。"
            },
            {
              "title": "入境换领工作居留卡并登记税务",
              "detail": "抵境后完成体检与社保税务注册。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地雇主签署的正式雇佣合同与邀请函",
            "当地官方签发的工作许可批准函 (Work Permit)",
            "最高学历学位公证（及海牙认证）与个人英文简历",
            "无犯罪记录证明公证及指定体检证明"
          ],
          "processing": "工作许可预批 3–8 周 + 使领馆/移民局贴签 2–4 周",
          "submission": "雇主先向捷克劳动/移民部门申领工作许可批文，获批后本人向驻华使领馆或签证中心递交工签",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先获得捷克当地合规雇主正式聘用合同，并由雇主向当地劳动或移民部门申领工作许可批文 (Work Permit)，无法无雇主担保个人直接自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "immigration": [
        {
          "id": "main",
          "title": "捷克 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问捷克官方移民/内政部门网站核对最新永居居住年限、离境限制及语言考核规定。"
            },
            {
              "title": "累积连续合法工作/居留与纳税证明",
              "detail": "确保每年离境天数未超过法定上限。"
            },
            {
              "title": "向当地移民局提交永居申请",
              "detail": "提交税单、住址证明、语言证书（如要求）及无犯罪记录。"
            }
          ],
          "checklist": [
            "有效护照及历年居留卡记录",
            "连续合法居留期间的个人所得税税单与社保记录",
            "稳定的收入或存款资产证明",
            "当地合法居住地址证明（租房合同或房产证）",
            "无犯罪记录证明及当地语言测试证书（如要求）"
          ],
          "processing": "通常需连续合法居留纳税 3–5 年后递交，审理约 3–12 个月",
          "submission": "满足法定居住与语言/纳税年限后向捷克当地移民局或内政部门递交永居 (PR) 申请",
          "diySupport": "advisory",
          "advisoryNote": "永久居留通常须先持合法工作、家庭团聚或合规格长期居留许可在捷克连续居住并稳定纳税满法定年限（多为 5 年），无法从海外直接一步自助网申；本页提供长期路径规划指引。"
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "捷克 短期旅游/访客通道（申根签 · VFS递交）",
          "fee": "90 EUR + 服务费",
          "desc": "布拉格热门旅游地及中欧留学中心，捷语授课公立大学同样实行免学费政策。",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 捷克外交部外国人签证官网 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 VFS Czech Republic 提交申请并缴费（免签国直接填报入境卡）。"
            },
            {
              "title": "获取批文或直接持护照入境",
              "detail": "打印电子签/确认函随身携带乘机。"
            }
          ],
          "checklist": [
            "有效期内中国因私护照（有效期6个月以上）",
            "往返/离境机票预订单",
            "全程酒店预订单（英文版）",
            "官方在线申请表打印件与白底证件照",
            "近6个月银行流水、在职证明及申根/旅行医疗保险"
          ],
          "processing": "15 天",
          "submission": "VFS Czech Republic",
          "diySupport": "diy"
        }
      ],
      "other": [
        {
          "id": "main",
          "title": "捷克 商务考察 / 探亲访友 / 特殊通道",
          "fee": "90 EUR + 服务费",
          "desc": "涵盖赴捷克参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "按捷克驻华使领馆或官方签证中心对应商务/探亲清单提交材料，并随身携带邀请方凭证。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ],
          "processing": "短期访问约 5–15 个工作日（免签国即时入境，视具体通道而定）",
          "submission": "凭捷克邀请函或亲属关系证明按对应签证中心或免签口岸规则办理",
          "diySupport": "advisory",
          "advisoryNote": "商务考察、探亲访友或长期团聚通常须先取得捷克当地邀请方出具的正式邀请函、公司派遣函或亲属关系证明，无法无邀请单纯按常规旅游自由行替代；本页提供通用材料与原则指引。"
        }
      ]
    }
  },
  {
    "id": "348",
    "code": "HUN",
    "nameZh": "匈牙利",
    "nameEn": "Hungary",
    "region": "中欧申根 / EUROPE",
    "coords": [
      19.5,
      47.16
    ],
    "badge": "申根签 / 访客投资者签",
    "tierColor": "#4A7B82",
    "labelPriority": false,
    "processing": "15 天",
    "submission": "VFS Hungary / 使领馆",
    "summary": "中资企业欧洲制造枢纽，且提供中匈双语学校与布达佩斯高性价比留学。",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【遵守申根“主停留国”原则】申根签必须向停留天数最多的国家申请（同天数则向首入国申请），切忌拿A国签证完全不去A国，否则影响后续出签与入境。"
    ],
    "links": [
      {
        "title": "匈牙利领事服务官网",
        "url": "https://konzinfo.mfa.gov.hu/en",
        "desc": "官方签证/入境申请与政策查询入口"
      },
      {
        "title": "VFS 匈牙利签证中心",
        "url": "https://visa.vfsglobal.com/chn/en/hun/",
        "desc": "官方移民局/使领馆/签证中心官网"
      }
    ],
    "jobLinks": [
      {
        "title": "EURES 欧盟官方跨国就业平台",
        "url": "https://eures.europa.eu/jobseekers_en",
        "desc": "官方覆盖匈牙利在内的欧洲31国雇主直聘库"
      },
      {
        "title": "LinkedIn 欧洲区域职位搜索",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "按Hungary城市筛选英语/当地语全职岗位"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "匈牙利 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴匈牙利攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
          "tips": "涉外学历、成绩单及无犯罪记录公证件，建议通过中国外交部或地方外办办理海牙认证 (Apostille)（若目的国为海牙公约成员）。",
          "steps": [
            {
              "title": "申请目标院校并获取正式 Offer",
              "detail": "按学校官网要求提交学历、成绩单及语言证明。"
            },
            {
              "title": "办理公证与海牙认证/双认证",
              "detail": "准备最高学历、出生及无犯罪记录公证。"
            },
            {
              "title": "准备资金担保并递交学生签",
              "detail": "按匈牙利驻华使领馆/签证中心或官方留学门户要求提交学生签证申请。"
            },
            {
              "title": "入境注册并办理当地居留卡",
              "detail": "抵境后按当地移民局规定期限办理学生居留卡。"
            }
          ],
          "checklist": [
            "有效护照及签证申请表",
            "目的国院校正式录取通知书 (Offer)",
            "覆盖首年学费与生活费的银行存款证明",
            "最高学历证书、成绩单公证（及海牙认证）",
            "无犯罪记录证明公证及境外学生医疗保险"
          ],
          "processing": "约 3–6 周（长期 D 类学生签证审理）",
          "submission": "凭匈牙利教育部认可院校正式录取通知书 (Offer) 向驻华使领馆/签证中心或官方学生门户递交",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先取得匈牙利正规院校正式录取通知书 (Offer) 及符合要求的学费生活费担保，无法无录取直接个人自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "work": [
        {
          "id": "main",
          "title": "匈牙利 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴匈牙利合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
          "tips": "切勿持旅游免签或旅游签证在当地非法打工，务必确保雇主已为你申请正规 Work Permit。",
          "steps": [
            {
              "title": "获得当地合法雇主正式聘用合同",
              "detail": "确认岗位符合当地薪资及外籍雇员配额要求。"
            },
            {
              "title": "雇主向劳动/移民部门申领工作许可",
              "detail": "提供学历公证、无犯罪证明及过往履历。"
            },
            {
              "title": "凭工作许可批文申请入境工作签",
              "detail": "凭官方工作许可批准函向匈牙利驻华使领馆或签证中心递交入境工作签证。"
            },
            {
              "title": "入境换领工作居留卡并登记税务",
              "detail": "抵境后完成体检与社保税务注册。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地雇主签署的正式雇佣合同与邀请函",
            "当地官方签发的工作许可批准函 (Work Permit)",
            "最高学历学位公证（及海牙认证）与个人英文简历",
            "无犯罪记录证明公证及指定体检证明"
          ],
          "processing": "工作许可预批 3–8 周 + 使领馆/移民局贴签 2–4 周",
          "submission": "雇主先向匈牙利劳动/移民部门申领工作许可批文，获批后本人向驻华使领馆或签证中心递交工签",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先获得匈牙利当地合规雇主正式聘用合同，并由雇主向当地劳动或移民部门申领工作许可批文 (Work Permit)，无法无雇主担保个人直接自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "immigration": [
        {
          "id": "main",
          "title": "匈牙利 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问匈牙利官方移民/内政部门网站核对最新永居居住年限、离境限制及语言考核规定。"
            },
            {
              "title": "累积连续合法工作/居留与纳税证明",
              "detail": "确保每年离境天数未超过法定上限。"
            },
            {
              "title": "向当地移民局提交永居申请",
              "detail": "提交税单、住址证明、语言证书（如要求）及无犯罪记录。"
            }
          ],
          "checklist": [
            "有效护照及历年居留卡记录",
            "连续合法居留期间的个人所得税税单与社保记录",
            "稳定的收入或存款资产证明",
            "当地合法居住地址证明（租房合同或房产证）",
            "无犯罪记录证明及当地语言测试证书（如要求）"
          ],
          "processing": "通常需连续合法居留纳税 3–5 年后递交，审理约 3–12 个月",
          "submission": "满足法定居住与语言/纳税年限后向匈牙利当地移民局或内政部门递交永居 (PR) 申请",
          "diySupport": "advisory",
          "advisoryNote": "永久居留通常须先持合法工作、家庭团聚或合规格长期居留许可在匈牙利连续居住并稳定纳税满法定年限（多为 5 年），无法从海外直接一步自助网申；本页提供长期路径规划指引。"
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "匈牙利 短期旅游/访客通道（申根签 / 访客投资者签）",
          "fee": "90 EUR + VFS服务费",
          "desc": "中资企业欧洲制造枢纽，且提供中匈双语学校与布达佩斯高性价比留学。",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 匈牙利领事服务官网 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 VFS Hungary / 使领馆 提交申请并缴费（免签国直接填报入境卡）。"
            },
            {
              "title": "获取批文或直接持护照入境",
              "detail": "打印电子签/确认函随身携带乘机。"
            }
          ],
          "checklist": [
            "有效期内中国因私护照（有效期6个月以上）",
            "往返/离境机票预订单",
            "全程酒店预订单（英文版）",
            "官方在线申请表打印件与白底证件照",
            "近6个月银行流水、在职证明及申根/旅行医疗保险"
          ],
          "processing": "15 天",
          "submission": "VFS Hungary / 使领馆",
          "diySupport": "diy"
        }
      ],
      "other": [
        {
          "id": "main",
          "title": "匈牙利数字游民白卡 (White Card) / 访客居留",
          "fee": "110 EUR（使领馆 D 类居留申请费）",
          "processing": "约 21–30 天",
          "submission": "向匈牙利驻华使领馆或 VFS 签证中心提交白卡 D 签申请（抵匈后赴 NDGAP 领卡）",
          "diySupport": "diy",
          "desc": "匈牙利白卡 (White Card / Fehér Kártya) 是针对非欧盟单身远程工作者的 1 年期居留许可（可续 1 年），要求过去 6 个月及在匈期间月均净收入不低于 3,000 EUR，且不得在匈牙利本地企业受雇或持股。",
          "tips": "白卡仅限单身个人申请（不可携配偶子女随行），且须在抵达匈牙利前办妥可覆盖当地的商业医疗保险与合法租房合同。",
          "steps": [
            {
              "title": "准备近 6 个月 ≥ 3,000 EUR/月收入与雇佣证明",
              "detail": "备好境外雇佣/远程合同、工资单与银行近 6 个月流水，以及匈牙利长期租房证明。"
            },
            {
              "title": "预约匈牙利驻华使领馆或 VFS 递交 D 签",
              "detail": "提交完整英文/匈语申请表、商业医疗保险与资产证明并录指纹。"
            },
            {
              "title": "获批入境 D 签后抵布达佩斯领取白卡",
              "detail": "入境后 30 天内持贴签护照前往移民局 NDGAP 换领实体 White Card。"
            }
          ],
          "checklist": [
            "有效护照与 White Card 专用申请表",
            "近 6 个月月净入 ≥ 3,000 EUR 银行流水与境外工作合同",
            "匈牙利合法租房合同及房东授权入住证明",
            "覆盖整个居留期的全额私人医疗保险单"
          ]
        }
      ]
    }
  },
  {
    "id": "643",
    "code": "RUS",
    "nameZh": "俄罗斯",
    "nameEn": "Russia",
    "region": "欧亚 / EURASIA",
    "coords": [
      105.32,
      61.52
    ],
    "badge": "30天免签 / 30天停留 e-Visa",
    "tierColor": "#4A7B82",
    "labelPriority": false,
    "processing": "免签即时 / 统一电子签 4 个自然日",
    "submission": "双边免签入境 / evisa.kdmid.ru 全在线网申",
    "summary": "中俄实行双边 30 天免签安排；同时支持在 evisa.kdmid.ru 全在线自助申请有效期 120 天、单次停留最长 30 天的俄罗斯统一电子签（4 个自然日出签，无需酒店担保与邀请函）。",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【材料真实性与翻译规范】在职证明、银行流水与行程订单务必真实可核验，非英文材料需附规范英文翻译件。"
    ],
    "links": [
      {
        "title": "俄罗斯外交部统一电子签官网",
        "url": "https://evisa.kdmid.ru/",
        "desc": "120天有效期 / 最长停留30天统一电子签在线申办系统"
      },
      {
        "title": "俄罗斯电子签说明与口岸清单",
        "url": "https://electronic-visa.kdmid.ru/index_en.html",
        "desc": "官方政策指南与适用口岸清单"
      }
    ],
    "jobLinks": [
      {
        "title": "LinkedIn 全球雇主直投",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "搜索俄罗斯 (Russia) 跨国企业与本地招聘岗位"
      },
      {
        "title": "Indeed 国际职位搜索引擎",
        "url": "https://www.indeed.com/",
        "desc": "按Russia地区检索全职、技工与远程工作机会"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "俄罗斯 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴俄罗斯攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
          "tips": "涉外学历、成绩单及无犯罪记录公证件，建议通过中国外交部或地方外办办理海牙认证 (Apostille)（若目的国为海牙公约成员）。",
          "steps": [
            {
              "title": "申请目标院校并获取正式 Offer",
              "detail": "按学校官网要求提交学历、成绩单及语言证明。"
            },
            {
              "title": "办理公证与海牙认证/双认证",
              "detail": "准备最高学历、出生及无犯罪记录公证。"
            },
            {
              "title": "准备资金担保并递交学生签",
              "detail": "凭俄罗斯高校办理的官方留学邀请函、艾滋病检疫证明及公证件赴驻华使领馆或俄罗斯签证中心递交留学贴签。"
            },
            {
              "title": "入境注册并办理当地居留卡",
              "detail": "抵境后按当地移民局规定期限办理学生居留卡。"
            }
          ],
          "checklist": [
            "有效护照及签证申请表",
            "目的国院校正式录取通知书 (Offer)",
            "覆盖首年学费与生活费的银行存款证明",
            "最高学历证书、成绩单公证（及海牙认证）",
            "无犯罪记录证明公证及境外学生医疗保险"
          ],
          "processing": "高校邀请函 4–6 周 + 使领馆贴签 5–10 工作日",
          "submission": "凭俄罗斯高校办理的官方留学邀请函赴使领馆或俄罗斯签证中心递交留学贴签",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先取得俄罗斯正规院校正式录取通知书 (Offer) 及符合要求的学费生活费担保，无法无录取直接个人自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "work": [
        {
          "id": "main",
          "title": "俄罗斯 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴俄罗斯合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
          "tips": "切勿持旅游免签或旅游签证在当地非法打工，务必确保雇主已为你申请正规 Work Permit。",
          "steps": [
            {
              "title": "获得当地合法雇主正式聘用合同",
              "detail": "确认岗位符合当地薪资及外籍雇员配额要求。"
            },
            {
              "title": "雇主向劳动/移民部门申领工作许可",
              "detail": "提供学历公证、无犯罪证明及过往履历。"
            },
            {
              "title": "凭工作许可批文申请入境工作签",
              "detail": "凭俄方雇主通过俄罗斯内务部 (MVD) 办理的官方工作邀请函及体检证明，赴驻华使领馆或签证中心递交工作贴签。"
            },
            {
              "title": "入境换领工作居留卡并登记税务",
              "detail": "抵境后完成体检与社保税务注册。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地雇主签署的正式雇佣合同与邀请函",
            "当地官方签发的工作许可批准函 (Work Permit)",
            "最高学历学位公证（及海牙认证）与个人英文简历",
            "无犯罪记录证明公证及指定体检证明"
          ],
          "processing": "雇主工作许可与官方邀请函 1–3 个月 + 贴签 5–10 工作日",
          "submission": "凭俄方雇主通过内务部 (MVD) 办理的官方工作邀请函赴使领馆或签证中心递交工作签",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先获得俄罗斯当地合规雇主正式聘用合同，并由雇主向当地劳动或移民部门申领工作许可批文 (Work Permit)，无法无雇主担保个人直接自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "immigration": [
        {
          "id": "main",
          "title": "俄罗斯 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问俄罗斯官方移民/内政部门网站核对最新永居居住年限、离境限制及语言考核规定。"
            },
            {
              "title": "累积连续合法工作/居留与纳税证明",
              "detail": "确保每年离境天数未超过法定上限。"
            },
            {
              "title": "向当地移民局提交永居申请",
              "detail": "提交税单、住址证明、语言证书（如要求）及无犯罪记录。"
            }
          ],
          "checklist": [
            "有效护照及历年居留卡记录",
            "连续合法居留期间的个人所得税税单与社保记录",
            "稳定的收入或存款资产证明",
            "当地合法居住地址证明（租房合同或房产证）",
            "无犯罪记录证明及当地语言测试证书（如要求）"
          ],
          "processing": "通常需连续合法居留纳税 3–5 年后递交，审理约 3–12 个月",
          "submission": "满足法定居住与语言/纳税年限后向俄罗斯当地移民局或内政部门递交永居 (PR) 申请",
          "diySupport": "advisory",
          "advisoryNote": "永久居留通常须先持合法工作、家庭团聚或合规格长期居留许可在俄罗斯连续居住并稳定纳税满法定年限（多为 5 年），无法从海外直接一步自助网申；本页提供长期路径规划指引。"
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "俄罗斯 短期旅游/访客通道（双边 30 天免签 / 30 天停留统一电子签）",
          "fee": "约 52 USD（统一电子签）/ 双边免签通道免费",
          "processing": "双边免签即时入境 / 统一电子签 4 个自然日出签",
          "submission": "符合双边 30 天免签通道直接入境 / 登录 https://evisa.kdmid.ru/ 全在线网申统一电子签",
          "diySupport": "diy",
          "desc": "中国公民可依据中俄双边 30 天免签安排免签赴俄旅游停留 30 天；个人自由行或适用电子签口岸旅客亦可在 https://evisa.kdmid.ru/ 自助申请俄罗斯统一电子签（自签发日起 120 天有效期、入境后最长停留 30 天，4 个自然日出签且无需酒店担保或邀请函）。",
          "tips": "行前务必核对自身出发口岸与行程是否适用双边 30 天免签安排或需提前网申 e-Visa；无论免签或持统一电子签，均强制要求购买覆盖俄罗斯全境的有效境外医疗保险，且酒店需在入住后办理落地登记。",
          "steps": [
            {
              "title": "确认双边 30 天免签或统一电子签适用口岸",
              "detail": "访问 https://evisa.kdmid.ru/ 及口岸清单核对最新双边免签执行细节与适用口岸。"
            },
            {
              "title": "在线填报统一电子签并支付约 52 USD（免签通道除外）",
              "detail": "在 evisa.kdmid.ru 上传护照首页与白底照，最快在出发前 4 天提交，4 个自然日邮件下发 PDF。"
            },
            {
              "title": "购买覆盖俄罗斯境内的医疗保险并备好行程单",
              "detail": "确保保单明确覆盖俄罗斯联邦全境及整个预计停留期。"
            },
            {
              "title": "打印电子签或持双边免签凭证直飞入境",
              "detail": "120 天有效期内入境，单次最多停留 30 天，抵俄后按规定办理住址登记。"
            }
          ],
          "checklist": [
            "有效期内中国因私护照（剩余有效期 6 个月以上）",
            "统一电子签 PDF 打印件（evisa.kdmid.ru）或双边免签凭证",
            "覆盖俄罗斯全境的境外医疗保险单（保额建议 ≥ 30,000 EUR 等值）",
            "往返机票与全程酒店预订单",
            "符合标准的白底电子证件照（申请 e-Visa 使用）"
          ]
        }
      ],
      "other": [
        {
          "id": "main",
          "title": "俄罗斯 商务考察 / 探亲访友 / 长期专项贴签",
          "fee": "约 52 USD（统一电子签）/ 免签通道免费 / 使馆贴签约 360–960 RMB 起",
          "processing": "免签即时 / e-Visa 4 个自然日 / 使馆贴签 5–10 个工作日",
          "submission": "30 天内短期商务参展可走双边免签或 evisa.kdmid.ru；多次或超 30 天须凭俄方正式邀请函赴俄罗斯签证中心递交",
          "diySupport": "advisory",
          "advisoryNote": "多次往返商务、探亲或超 30 天居留须先由俄罗斯邀请企业或亲属向俄内务部 (MVD) 申领官方正式邀请函，再向驻华使领馆或签证中心申请贴签。",
          "desc": "30 天以内的短期商务洽谈与人道访问可适用双边 30 天免签安排或 120 天有效/30 天停留的统一电子签；多次往返商务、技术安装及超 30 天探亲须凭俄方官方邀请函赴签证中心办纸质贴签。",
          "tips": "赴俄长期或多次商务注意核查邀请函的 TELEX 编号或纸质原件要求，并提前购买覆盖俄罗斯境内的医疗保险。",
          "steps": [
            {
              "title": "确认行程天数及是否需要官方邀请函",
              "detail": "30 天内短期访问核对免签或统一 e-Visa；超 30 天或多次须请俄方申办 MVD 官方邀请函。"
            },
            {
              "title": "在线提交 e-Visa 或预约签证中心贴签",
              "detail": "凭邀请函在 visa.kdmid.ru 填表后前往俄罗斯签证中心递交护照。"
            }
          ],
          "checklist": [
            "有效护照（有效期 6 个月以上且有空白页）",
            "俄方官方邀请函或商务访问说明（贴签适用）",
            "覆盖俄罗斯全境的医疗保险单",
            "往返机票及住宿预订单"
          ]
        }
      ]
    }
  },
  {
    "id": "688",
    "code": "SRB",
    "nameZh": "塞尔维亚",
    "nameEn": "Serbia",
    "region": "巴尔干 / EUROPE",
    "coords": [
      21.01,
      44.02
    ],
    "badge": "欧洲首个对华免签国(30天)",
    "tierColor": "#789882",
    "labelPriority": false,
    "processing": "免签即时入境",
    "submission": "免签直飞 / Welcome to Serbia",
    "summary": "持普通护照免签入境停留30天，无需任何前置签证；白板护照友好，且支持当地创业或置业转长期居留。",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【遵守申根“主停留国”原则】申根签必须向停留天数最多的国家申请（同天数则向首入国申请），切忌拿A国签证完全不去A国，否则影响后续出签与入境。"
    ],
    "links": [
      {
        "title": "塞尔维亚官方外国人门户",
        "url": "https://welcometoserbia.gov.rs/",
        "desc": "官方签证/入境申请与政策查询入口"
      },
      {
        "title": "塞尔维亚外交部官网",
        "url": "https://www.mfa.gov.rs/en",
        "desc": "官方移民局/使领馆/签证中心官网"
      }
    ],
    "jobLinks": [
      {
        "title": "EURES 欧盟官方跨国就业平台",
        "url": "https://eures.europa.eu/jobseekers_en",
        "desc": "官方覆盖塞尔维亚在内的欧洲31国雇主直聘库"
      },
      {
        "title": "LinkedIn 欧洲区域职位搜索",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "按Serbia城市筛选英语/当地语全职岗位"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "塞尔维亚 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴塞尔维亚攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
          "tips": "涉外学历、成绩单及无犯罪记录公证件，建议通过中国外交部或地方外办办理海牙认证 (Apostille)（若目的国为海牙公约成员）。",
          "steps": [
            {
              "title": "申请目标院校并获取正式 Offer",
              "detail": "按学校官网要求提交学历、成绩单及语言证明。"
            },
            {
              "title": "办理公证与海牙认证/双认证",
              "detail": "准备最高学历、出生及无犯罪记录公证。"
            },
            {
              "title": "准备资金担保并递交学生签",
              "detail": "按塞尔维亚驻华使领馆/签证中心或官方留学门户要求提交学生签证申请。"
            },
            {
              "title": "入境注册并办理当地居留卡",
              "detail": "抵境后按当地移民局规定期限办理学生居留卡。"
            }
          ],
          "checklist": [
            "有效护照及签证申请表",
            "目的国院校正式录取通知书 (Offer)",
            "覆盖首年学费与生活费的银行存款证明",
            "最高学历证书、成绩单公证（及海牙认证）",
            "无犯罪记录证明公证及境外学生医疗保险"
          ],
          "processing": "约 3–8 周（凭录取信递交学生签审理）",
          "submission": "凭塞尔维亚教育部认可院校正式录取通知书 (Offer) 向驻华使领馆/签证中心或官方学生门户递交",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先取得塞尔维亚正规院校正式录取通知书 (Offer) 及符合要求的学费生活费担保，无法无录取直接个人自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "work": [
        {
          "id": "main",
          "title": "塞尔维亚 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴塞尔维亚合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
          "tips": "切勿持旅游免签或旅游签证在当地非法打工，务必确保雇主已为你申请正规 Work Permit。",
          "steps": [
            {
              "title": "获得当地合法雇主正式聘用合同",
              "detail": "确认岗位符合当地薪资及外籍雇员配额要求。"
            },
            {
              "title": "雇主向劳动/移民部门申领工作许可",
              "detail": "提供学历公证、无犯罪证明及过往履历。"
            },
            {
              "title": "凭工作许可批文申请入境工作签",
              "detail": "凭官方工作许可批准函向塞尔维亚驻华使领馆或签证中心递交入境工作签证。"
            },
            {
              "title": "入境换领工作居留卡并登记税务",
              "detail": "抵境后完成体检与社保税务注册。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地雇主签署的正式雇佣合同与邀请函",
            "当地官方签发的工作许可批准函 (Work Permit)",
            "最高学历学位公证（及海牙认证）与个人英文简历",
            "无犯罪记录证明公证及指定体检证明"
          ],
          "processing": "工作许可预批 3–8 周 + 使领馆/移民局贴签 2–4 周",
          "submission": "雇主先向塞尔维亚劳动/移民部门申领工作许可批文，获批后本人向驻华使领馆或签证中心递交工签",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先获得塞尔维亚当地合规雇主正式聘用合同，并由雇主向当地劳动或移民部门申领工作许可批文 (Work Permit)，无法无雇主担保个人直接自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "immigration": [
        {
          "id": "main",
          "title": "塞尔维亚 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问塞尔维亚官方移民/内政部门网站核对最新永居居住年限、离境限制及语言考核规定。"
            },
            {
              "title": "累积连续合法工作/居留与纳税证明",
              "detail": "确保每年离境天数未超过法定上限。"
            },
            {
              "title": "向当地移民局提交永居申请",
              "detail": "提交税单、住址证明、语言证书（如要求）及无犯罪记录。"
            }
          ],
          "checklist": [
            "有效护照及历年居留卡记录",
            "连续合法居留期间的个人所得税税单与社保记录",
            "稳定的收入或存款资产证明",
            "当地合法居住地址证明（租房合同或房产证）",
            "无犯罪记录证明及当地语言测试证书（如要求）"
          ],
          "processing": "通常需连续合法居留纳税 3–5 年后递交，审理约 3–12 个月",
          "submission": "满足法定居住与语言/纳税年限后向塞尔维亚当地移民局或内政部门递交永居 (PR) 申请",
          "diySupport": "advisory",
          "advisoryNote": "永久居留通常须先持合法工作、家庭团聚或合规格长期居留许可在塞尔维亚连续居住并稳定纳税满法定年限（多为 5 年），无法从海外直接一步自助网申；本页提供长期路径规划指引。"
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "塞尔维亚 短期旅游/访客通道（欧洲首个对华免签国(30天)）",
          "fee": "0 元（免签）",
          "desc": "持普通护照免签入境停留30天，无需任何前置签证；白板护照友好，且支持当地创业或置业转长期居留。",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 塞尔维亚官方外国人门户 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 免签直飞 / Welcome to Serbia 提交申请并缴费（免签国直接填报入境卡）。"
            },
            {
              "title": "获取批文或直接持护照入境",
              "detail": "打印电子签/确认函随身携带乘机。"
            }
          ],
          "checklist": [
            "有效期内中国因私护照（有效期6个月以上）",
            "往返/离境机票预订单",
            "全程酒店预订单（英文版）",
            "电子入境卡/健康声明回执（如官网要求）",
            "境外旅行医疗保险单（建议购买）"
          ],
          "processing": "免签即时入境",
          "submission": "免签直飞 / Welcome to Serbia",
          "diySupport": "diy"
        }
      ],
      "other": [
        {
          "id": "main",
          "title": "塞尔维亚 商务考察 / 探亲访友 / 特殊通道",
          "fee": "0 元（免签）",
          "desc": "涵盖赴塞尔维亚参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "按塞尔维亚驻华使领馆或官方签证中心对应商务/探亲清单提交材料，并随身携带邀请方凭证。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ],
          "processing": "短期访问约 5–15 个工作日（免签国即时入境，视具体通道而定）",
          "submission": "凭塞尔维亚邀请函或亲属关系证明按对应签证中心或免签口岸规则办理",
          "diySupport": "advisory",
          "advisoryNote": "商务考察、探亲访友或长期团聚通常须先取得塞尔维亚当地邀请方出具的正式邀请函、公司派遣函或亲属关系证明，无法无邀请单纯按常规旅游自由行替代；本页提供通用材料与原则指引。"
        }
      ]
    }
  },
  {
    "id": "352",
    "code": "ISL",
    "nameZh": "冰岛",
    "nameEn": "Iceland",
    "region": "北欧申根 / NORDICS",
    "coords": [
      -19.02,
      64.96
    ],
    "badge": "申根签 · VFS递交",
    "tierColor": "#4A7B82",
    "labelPriority": false,
    "processing": "15 天",
    "submission": "VFS 冰岛签证中心",
    "summary": "极光与自驾胜地，需在 VFS 递交申根签；长期工作与留学均由冰岛移民局 UTL 官网受理。",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【遵守申根“主停留国”原则】申根签必须向停留天数最多的国家申请（同天数则向首入国申请），切忌拿A国签证完全不去A国，否则影响后续出签与入境。"
    ],
    "links": [
      {
        "title": "冰岛移民局官网 (UTL)",
        "url": "https://island.is/en/o/directorate-of-immigration",
        "desc": "官方签证/入境申请与政策查询入口"
      },
      {
        "title": "VFS 冰岛签证中心",
        "url": "https://visa.vfsglobal.com/chn/en/isl/",
        "desc": "官方移民局/使领馆/签证中心官网"
      }
    ],
    "jobLinks": [
      {
        "title": "EURES 欧盟官方跨国就业平台",
        "url": "https://eures.europa.eu/jobseekers_en",
        "desc": "官方覆盖冰岛在内的欧洲31国雇主直聘库"
      },
      {
        "title": "LinkedIn 欧洲区域职位搜索",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "按Iceland城市筛选英语/当地语全职岗位"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "冰岛 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴冰岛攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
          "tips": "涉外学历、成绩单及无犯罪记录公证件，建议通过中国外交部或地方外办办理海牙认证 (Apostille)（若目的国为海牙公约成员）。",
          "steps": [
            {
              "title": "申请目标院校并获取正式 Offer",
              "detail": "按学校官网要求提交学历、成绩单及语言证明。"
            },
            {
              "title": "办理公证与海牙认证/双认证",
              "detail": "准备最高学历、出生及无犯罪记录公证。"
            },
            {
              "title": "准备资金担保并递交学生签",
              "detail": "按冰岛驻华使领馆/签证中心或官方留学门户要求提交学生签证申请。"
            },
            {
              "title": "入境注册并办理当地居留卡",
              "detail": "抵境后按当地移民局规定期限办理学生居留卡。"
            }
          ],
          "checklist": [
            "有效护照及签证申请表",
            "目的国院校正式录取通知书 (Offer)",
            "覆盖首年学费与生活费的银行存款证明",
            "最高学历证书、成绩单公证（及海牙认证）",
            "无犯罪记录证明公证及境外学生医疗保险"
          ],
          "processing": "约 3–6 周（长期 D 类学生签证审理）",
          "submission": "凭冰岛教育部认可院校正式录取通知书 (Offer) 向驻华使领馆/签证中心或官方学生门户递交",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先取得冰岛正规院校正式录取通知书 (Offer) 及符合要求的学费生活费担保，无法无录取直接个人自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "work": [
        {
          "id": "main",
          "title": "冰岛 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴冰岛合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
          "tips": "切勿持旅游免签或旅游签证在当地非法打工，务必确保雇主已为你申请正规 Work Permit。",
          "steps": [
            {
              "title": "获得当地合法雇主正式聘用合同",
              "detail": "确认岗位符合当地薪资及外籍雇员配额要求。"
            },
            {
              "title": "雇主向劳动/移民部门申领工作许可",
              "detail": "提供学历公证、无犯罪证明及过往履历。"
            },
            {
              "title": "凭工作许可批文申请入境工作签",
              "detail": "凭官方工作许可批准函向冰岛驻华使领馆或签证中心递交入境工作签证。"
            },
            {
              "title": "入境换领工作居留卡并登记税务",
              "detail": "抵境后完成体检与社保税务注册。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地雇主签署的正式雇佣合同与邀请函",
            "当地官方签发的工作许可批准函 (Work Permit)",
            "最高学历学位公证（及海牙认证）与个人英文简历",
            "无犯罪记录证明公证及指定体检证明"
          ],
          "processing": "工作许可预批 3–8 周 + 使领馆/移民局贴签 2–4 周",
          "submission": "雇主先向冰岛劳动/移民部门申领工作许可批文，获批后本人向驻华使领馆或签证中心递交工签",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先获得冰岛当地合规雇主正式聘用合同，并由雇主向当地劳动或移民部门申领工作许可批文 (Work Permit)，无法无雇主担保个人直接自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "immigration": [
        {
          "id": "main",
          "title": "冰岛 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问冰岛官方移民/内政部门网站核对最新永居居住年限、离境限制及语言考核规定。"
            },
            {
              "title": "累积连续合法工作/居留与纳税证明",
              "detail": "确保每年离境天数未超过法定上限。"
            },
            {
              "title": "向当地移民局提交永居申请",
              "detail": "提交税单、住址证明、语言证书（如要求）及无犯罪记录。"
            }
          ],
          "checklist": [
            "有效护照及历年居留卡记录",
            "连续合法居留期间的个人所得税税单与社保记录",
            "稳定的收入或存款资产证明",
            "当地合法居住地址证明（租房合同或房产证）",
            "无犯罪记录证明及当地语言测试证书（如要求）"
          ],
          "processing": "通常需连续合法居留纳税 3–5 年后递交，审理约 3–12 个月",
          "submission": "满足法定居住与语言/纳税年限后向冰岛当地移民局或内政部门递交永居 (PR) 申请",
          "diySupport": "advisory",
          "advisoryNote": "永久居留通常须先持合法工作、家庭团聚或合规格长期居留许可在冰岛连续居住并稳定纳税满法定年限（多为 5 年），无法从海外直接一步自助网申；本页提供长期路径规划指引。"
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "冰岛 短期旅游/访客通道（申根签 · VFS递交）",
          "fee": "90 EUR + 服务费",
          "desc": "极光与自驾胜地，需在 VFS 递交申根签；长期工作与留学均由冰岛移民局 UTL 官网受理。",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 冰岛移民局官网 (UTL) 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 VFS 冰岛签证中心 提交申请并缴费（免签国直接填报入境卡）。"
            },
            {
              "title": "获取批文或直接持护照入境",
              "detail": "打印电子签/确认函随身携带乘机。"
            }
          ],
          "checklist": [
            "有效期内中国因私护照（有效期6个月以上）",
            "往返/离境机票预订单",
            "全程酒店预订单（英文版）",
            "官方在线申请表打印件与白底证件照",
            "近6个月银行流水、在职证明及申根/旅行医疗保险"
          ],
          "processing": "15 天",
          "submission": "VFS 冰岛签证中心",
          "diySupport": "diy"
        }
      ],
      "other": [
        {
          "id": "main",
          "title": "冰岛 商务考察 / 探亲访友 / 特殊通道",
          "fee": "90 EUR + 服务费",
          "desc": "涵盖赴冰岛参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "按冰岛驻华使领馆或官方签证中心对应商务/探亲清单提交材料，并随身携带邀请方凭证。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ],
          "processing": "短期访问约 5–15 个工作日（免签国即时入境，视具体通道而定）",
          "submission": "凭冰岛邀请函或亲属关系证明按对应签证中心或免签口岸规则办理",
          "diySupport": "advisory",
          "advisoryNote": "商务考察、探亲访友或长期团聚通常须先取得冰岛当地邀请方出具的正式邀请函、公司派遣函或亲属关系证明，无法无邀请单纯按常规旅游自由行替代；本页提供通用材料与原则指引。"
        }
      ]
    }
  },
  {
    "id": "442",
    "code": "LUX",
    "nameZh": "卢森堡",
    "nameEn": "Luxembourg",
    "region": "欧洲申根 / EUROPE",
    "coords": [
      6.13,
      49.82
    ],
    "badge": "申根签 · 欧盟高薪中心",
    "tierColor": "#4A7B82",
    "labelPriority": false,
    "processing": "15 天",
    "submission": "VFS / 卢森堡驻华使领馆",
    "summary": "欧洲人均收入最高国之一，金融与欧盟机构云集，欧盟蓝卡与高技术工签政策友好。",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【遵守申根“主停留国”原则】申根签必须向停留天数最多的国家申请（同天数则向首入国申请），切忌拿A国签证完全不去A国，否则影响后续出签与入境。"
    ],
    "links": [
      {
        "title": "卢森堡政府移民官方指南",
        "url": "https://guichet.public.lu/en/citoyens/immigration.html",
        "desc": "官方签证/入境申请与政策查询入口"
      }
    ],
    "jobLinks": [
      {
        "title": "EURES 欧盟官方跨国就业平台",
        "url": "https://eures.europa.eu/jobseekers_en",
        "desc": "官方覆盖卢森堡在内的欧洲31国雇主直聘库"
      },
      {
        "title": "LinkedIn 欧洲区域职位搜索",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "按Luxembourg城市筛选英语/当地语全职岗位"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "卢森堡 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴卢森堡攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
          "tips": "涉外学历、成绩单及无犯罪记录公证件，建议通过中国外交部或地方外办办理海牙认证 (Apostille)（若目的国为海牙公约成员）。",
          "steps": [
            {
              "title": "申请目标院校并获取正式 Offer",
              "detail": "按学校官网要求提交学历、成绩单及语言证明。"
            },
            {
              "title": "办理公证与海牙认证/双认证",
              "detail": "准备最高学历、出生及无犯罪记录公证。"
            },
            {
              "title": "准备资金担保并递交学生签",
              "detail": "按卢森堡驻华使领馆/签证中心或官方留学门户要求提交学生签证申请。"
            },
            {
              "title": "入境注册并办理当地居留卡",
              "detail": "抵境后按当地移民局规定期限办理学生居留卡。"
            }
          ],
          "checklist": [
            "有效护照及签证申请表",
            "目的国院校正式录取通知书 (Offer)",
            "覆盖首年学费与生活费的银行存款证明",
            "最高学历证书、成绩单公证（及海牙认证）",
            "无犯罪记录证明公证及境外学生医疗保险"
          ],
          "processing": "约 3–6 周（长期 D 类学生签证审理）",
          "submission": "凭卢森堡教育部认可院校正式录取通知书 (Offer) 向驻华使领馆/签证中心或官方学生门户递交",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先取得卢森堡正规院校正式录取通知书 (Offer) 及符合要求的学费生活费担保，无法无录取直接个人自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "work": [
        {
          "id": "main",
          "title": "卢森堡 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴卢森堡合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
          "tips": "切勿持旅游免签或旅游签证在当地非法打工，务必确保雇主已为你申请正规 Work Permit。",
          "steps": [
            {
              "title": "获得当地合法雇主正式聘用合同",
              "detail": "确认岗位符合当地薪资及外籍雇员配额要求。"
            },
            {
              "title": "雇主向劳动/移民部门申领工作许可",
              "detail": "提供学历公证、无犯罪证明及过往履历。"
            },
            {
              "title": "凭工作许可批文申请入境工作签",
              "detail": "凭官方工作许可批准函向卢森堡驻华使领馆或签证中心递交入境工作签证。"
            },
            {
              "title": "入境换领工作居留卡并登记税务",
              "detail": "抵境后完成体检与社保税务注册。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地雇主签署的正式雇佣合同与邀请函",
            "当地官方签发的工作许可批准函 (Work Permit)",
            "最高学历学位公证（及海牙认证）与个人英文简历",
            "无犯罪记录证明公证及指定体检证明"
          ],
          "processing": "工作许可预批 3–8 周 + 使领馆/移民局贴签 2–4 周",
          "submission": "雇主先向卢森堡劳动/移民部门申领工作许可批文，获批后本人向驻华使领馆或签证中心递交工签",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先获得卢森堡当地合规雇主正式聘用合同，并由雇主向当地劳动或移民部门申领工作许可批文 (Work Permit)，无法无雇主担保个人直接自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "immigration": [
        {
          "id": "main",
          "title": "卢森堡 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问卢森堡官方移民/内政部门网站核对最新永居居住年限、离境限制及语言考核规定。"
            },
            {
              "title": "累积连续合法工作/居留与纳税证明",
              "detail": "确保每年离境天数未超过法定上限。"
            },
            {
              "title": "向当地移民局提交永居申请",
              "detail": "提交税单、住址证明、语言证书（如要求）及无犯罪记录。"
            }
          ],
          "checklist": [
            "有效护照及历年居留卡记录",
            "连续合法居留期间的个人所得税税单与社保记录",
            "稳定的收入或存款资产证明",
            "当地合法居住地址证明（租房合同或房产证）",
            "无犯罪记录证明及当地语言测试证书（如要求）"
          ],
          "processing": "通常需连续合法居留纳税 3–5 年后递交，审理约 3–12 个月",
          "submission": "满足法定居住与语言/纳税年限后向卢森堡当地移民局或内政部门递交永居 (PR) 申请",
          "diySupport": "advisory",
          "advisoryNote": "永久居留通常须先持合法工作、家庭团聚或合规格长期居留许可在卢森堡连续居住并稳定纳税满法定年限（多为 5 年），无法从海外直接一步自助网申；本页提供长期路径规划指引。"
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "卢森堡 短期旅游/访客通道（申根签 · 欧盟高薪中心）",
          "fee": "90 EUR + 服务费",
          "desc": "欧洲人均收入最高国之一，金融与欧盟机构云集，欧盟蓝卡与高技术工签政策友好。",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 卢森堡政府移民官方指南 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 VFS / 卢森堡驻华使领馆 提交申请并缴费（免签国直接填报入境卡）。"
            },
            {
              "title": "获取批文或直接持护照入境",
              "detail": "打印电子签/确认函随身携带乘机。"
            }
          ],
          "checklist": [
            "有效期内中国因私护照（有效期6个月以上）",
            "往返/离境机票预订单",
            "全程酒店预订单（英文版）",
            "官方在线申请表打印件与白底证件照",
            "近6个月银行流水、在职证明及申根/旅行医疗保险"
          ],
          "processing": "15 天",
          "submission": "VFS / 卢森堡驻华使领馆",
          "diySupport": "diy"
        }
      ],
      "other": [
        {
          "id": "main",
          "title": "卢森堡 商务考察 / 探亲访友 / 特殊通道",
          "fee": "90 EUR + 服务费",
          "desc": "涵盖赴卢森堡参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "按卢森堡驻华使领馆或官方签证中心对应商务/探亲清单提交材料，并随身携带邀请方凭证。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ],
          "processing": "短期访问约 5–15 个工作日（免签国即时入境，视具体通道而定）",
          "submission": "凭卢森堡邀请函或亲属关系证明按对应签证中心或免签口岸规则办理",
          "diySupport": "advisory",
          "advisoryNote": "商务考察、探亲访友或长期团聚通常须先取得卢森堡当地邀请方出具的正式邀请函、公司派遣函或亲属关系证明，无法无邀请单纯按常规旅游自由行替代；本页提供通用材料与原则指引。"
        }
      ]
    }
  },
  {
    "id": "191",
    "code": "HRV",
    "nameZh": "克罗地亚",
    "nameEn": "Croatia",
    "region": "欧洲申根 / EUROPE",
    "coords": [
      15.2,
      45.1
    ],
    "badge": "申根签 + 数字游民居留",
    "tierColor": "#4A7B82",
    "labelPriority": false,
    "processing": "15 天",
    "submission": "VFS 克罗地亚签证中心",
    "summary": "已正式加入申根区！同时提供免征当地个税的 1 年期数字游民临时居留许可。",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【遵守申根“主停留国”原则】申根签必须向停留天数最多的国家申请（同天数则向首入国申请），切忌拿A国签证完全不去A国，否则影响后续出签与入境。"
    ],
    "links": [
      {
        "title": "克罗地亚内政部外国人居留网",
        "url": "https://mup.gov.hr/aliens-281621/281621",
        "desc": "官方签证/入境申请与政策查询入口"
      },
      {
        "title": "VFS 克罗地亚中心",
        "url": "https://visa.vfsglobal.com/chn/en/hrv/",
        "desc": "官方移民局/使领馆/签证中心官网"
      }
    ],
    "jobLinks": [
      {
        "title": "EURES 欧盟官方跨国就业平台",
        "url": "https://eures.europa.eu/jobseekers_en",
        "desc": "官方覆盖克罗地亚在内的欧洲31国雇主直聘库"
      },
      {
        "title": "LinkedIn 欧洲区域职位搜索",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "按Croatia城市筛选英语/当地语全职岗位"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "克罗地亚 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴克罗地亚攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
          "tips": "涉外学历、成绩单及无犯罪记录公证件，建议通过中国外交部或地方外办办理海牙认证 (Apostille)（若目的国为海牙公约成员）。",
          "steps": [
            {
              "title": "申请目标院校并获取正式 Offer",
              "detail": "按学校官网要求提交学历、成绩单及语言证明。"
            },
            {
              "title": "办理公证与海牙认证/双认证",
              "detail": "准备最高学历、出生及无犯罪记录公证。"
            },
            {
              "title": "准备资金担保并递交学生签",
              "detail": "按克罗地亚驻华使领馆/签证中心或官方留学门户要求提交学生签证申请。"
            },
            {
              "title": "入境注册并办理当地居留卡",
              "detail": "抵境后按当地移民局规定期限办理学生居留卡。"
            }
          ],
          "checklist": [
            "有效护照及签证申请表",
            "目的国院校正式录取通知书 (Offer)",
            "覆盖首年学费与生活费的银行存款证明",
            "最高学历证书、成绩单公证（及海牙认证）",
            "无犯罪记录证明公证及境外学生医疗保险"
          ],
          "processing": "约 3–6 周（长期 D 类学生签证审理）",
          "submission": "凭克罗地亚教育部认可院校正式录取通知书 (Offer) 向驻华使领馆/签证中心或官方学生门户递交",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先取得克罗地亚正规院校正式录取通知书 (Offer) 及符合要求的学费生活费担保，无法无录取直接个人自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "work": [
        {
          "id": "main",
          "title": "克罗地亚 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴克罗地亚合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
          "tips": "切勿持旅游免签或旅游签证在当地非法打工，务必确保雇主已为你申请正规 Work Permit。",
          "steps": [
            {
              "title": "获得当地合法雇主正式聘用合同",
              "detail": "确认岗位符合当地薪资及外籍雇员配额要求。"
            },
            {
              "title": "雇主向劳动/移民部门申领工作许可",
              "detail": "提供学历公证、无犯罪证明及过往履历。"
            },
            {
              "title": "凭工作许可批文申请入境工作签",
              "detail": "凭官方工作许可批准函向克罗地亚驻华使领馆或签证中心递交入境工作签证。"
            },
            {
              "title": "入境换领工作居留卡并登记税务",
              "detail": "抵境后完成体检与社保税务注册。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地雇主签署的正式雇佣合同与邀请函",
            "当地官方签发的工作许可批准函 (Work Permit)",
            "最高学历学位公证（及海牙认证）与个人英文简历",
            "无犯罪记录证明公证及指定体检证明"
          ],
          "processing": "工作许可预批 3–8 周 + 使领馆/移民局贴签 2–4 周",
          "submission": "雇主先向克罗地亚劳动/移民部门申领工作许可批文，获批后本人向驻华使领馆或签证中心递交工签",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先获得克罗地亚当地合规雇主正式聘用合同，并由雇主向当地劳动或移民部门申领工作许可批文 (Work Permit)，无法无雇主担保个人直接自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "immigration": [
        {
          "id": "main",
          "title": "克罗地亚 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问克罗地亚官方移民/内政部门网站核对最新永居居住年限、离境限制及语言考核规定。"
            },
            {
              "title": "累积连续合法工作/居留与纳税证明",
              "detail": "确保每年离境天数未超过法定上限。"
            },
            {
              "title": "向当地移民局提交永居申请",
              "detail": "提交税单、住址证明、语言证书（如要求）及无犯罪记录。"
            }
          ],
          "checklist": [
            "有效护照及历年居留卡记录",
            "连续合法居留期间的个人所得税税单与社保记录",
            "稳定的收入或存款资产证明",
            "当地合法居住地址证明（租房合同或房产证）",
            "无犯罪记录证明及当地语言测试证书（如要求）"
          ],
          "processing": "通常需连续合法居留纳税 3–5 年后递交，审理约 3–12 个月",
          "submission": "满足法定居住与语言/纳税年限后向克罗地亚当地移民局或内政部门递交永居 (PR) 申请",
          "diySupport": "advisory",
          "advisoryNote": "永久居留通常须先持合法工作、家庭团聚或合规格长期居留许可在克罗地亚连续居住并稳定纳税满法定年限（多为 5 年），无法从海外直接一步自助网申；本页提供长期路径规划指引。"
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "克罗地亚 短期旅游/访客通道（申根签 + 数字游民居留）",
          "fee": "90 EUR + VFS服务费",
          "desc": "已正式加入申根区！同时提供免征当地个税的 1 年期数字游民临时居留许可。",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 克罗地亚内政部外国人居留网 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 VFS 克罗地亚签证中心 提交申请并缴费（免签国直接填报入境卡）。"
            },
            {
              "title": "获取批文或直接持护照入境",
              "detail": "打印电子签/确认函随身携带乘机。"
            }
          ],
          "checklist": [
            "有效期内中国因私护照（有效期6个月以上）",
            "往返/离境机票预订单",
            "全程酒店预订单（英文版）",
            "官方在线申请表打印件与白底证件照",
            "近6个月银行流水、在职证明及申根/旅行医疗保险"
          ],
          "processing": "15 天",
          "submission": "VFS 克罗地亚签证中心",
          "diySupport": "diy"
        }
      ],
      "other": [
        {
          "id": "main",
          "title": "克罗地亚 1 年期数字游民临时居留许可 (Digital Nomad Stay)",
          "fee": "约 46.45 EUR（在线居留审批）+ 制卡费（如需另办入境 D 签另计）",
          "processing": "约 20–40 天",
          "submission": "可通过克罗地亚内政部专属门户 (digitalnomadscroatia.mup.hr) 全线上自助提交，获批后再办入境 D 签",
          "diySupport": "diy",
          "desc": "克罗地亚对非欧盟远程工作者及自由职业者提供最长 1 年（可延长或续期）的数字游民临时居留许可，且在克罗地亚境内免征境外远程收入个人所得税！支持全英文官网在线上传材料预审。",
          "tips": "须满足月收入不低于当地法定基准（约 2,870–3,295 EUR/月或等值存款证明）并提交海牙认证的无犯罪记录公证。",
          "steps": [
            {
              "title": "准备海牙认证无犯罪及远程收入证明",
              "detail": "办理无犯罪公证海牙认证 (Apostille)，整理境外远程工作合同及足额存款/月入流水。"
            },
            {
              "title": "在线提交 Digital Nomad 门户申请",
              "detail": "登录 digitalnomadscroatia.mup.hr 上传护照、保险、住址预订单与收入文件等待 MUP 批复。"
            },
            {
              "title": "凭批文赴 VFS/使馆贴入境 D 签并抵克领卡",
              "detail": "收到居留批准函后办理入境签，抵境 3 天内到警局登记地址并领取居留卡。"
            }
          ],
          "checklist": [
            "有效护照及个人近照",
            "境外远程雇主合同/自由职业业务证明",
            "近 6 个月月入达标流水或 12 个月足额银行存款证明",
            "海牙认证的无犯罪记录公证书",
            "覆盖全年的私人医疗保险及克罗地亚住宿预订证明"
          ]
        }
      ]
    }
  },
  {
    "id": "100",
    "code": "BGR",
    "nameZh": "保加利亚",
    "nameEn": "Bulgaria",
    "region": "欧洲申根 / EUROPE",
    "coords": [
      25.49,
      42.73
    ],
    "badge": "申根签（空中/海路已入申根）",
    "tierColor": "#4A7B82",
    "labelPriority": false,
    "processing": "15 天",
    "submission": "保加利亚驻华使领馆 / VFS",
    "summary": "已加入申根区，持有效多次申根签可畅行；本地生活成本在欧盟内极具性价比。",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【遵守申根“主停留国”原则】申根签必须向停留天数最多的国家申请（同天数则向首入国申请），切忌拿A国签证完全不去A国，否则影响后续出签与入境。"
    ],
    "links": [
      {
        "title": "保加利亚外交部签证官网",
        "url": "https://www.mfa.bg/en/services-travel/consular-services/travel-bulgaria/visa-bulgaria",
        "desc": "官方签证/入境申请与政策查询入口"
      }
    ],
    "jobLinks": [
      {
        "title": "EURES 欧盟官方跨国就业平台",
        "url": "https://eures.europa.eu/jobseekers_en",
        "desc": "官方覆盖保加利亚在内的欧洲31国雇主直聘库"
      },
      {
        "title": "LinkedIn 欧洲区域职位搜索",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "按Bulgaria城市筛选英语/当地语全职岗位"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "保加利亚 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴保加利亚攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
          "tips": "涉外学历、成绩单及无犯罪记录公证件，建议通过中国外交部或地方外办办理海牙认证 (Apostille)（若目的国为海牙公约成员）。",
          "steps": [
            {
              "title": "申请目标院校并获取正式 Offer",
              "detail": "按学校官网要求提交学历、成绩单及语言证明。"
            },
            {
              "title": "办理公证与海牙认证/双认证",
              "detail": "准备最高学历、出生及无犯罪记录公证。"
            },
            {
              "title": "准备资金担保并递交学生签",
              "detail": "按保加利亚驻华使领馆/签证中心或官方留学门户要求提交学生签证申请。"
            },
            {
              "title": "入境注册并办理当地居留卡",
              "detail": "抵境后按当地移民局规定期限办理学生居留卡。"
            }
          ],
          "checklist": [
            "有效护照及签证申请表",
            "目的国院校正式录取通知书 (Offer)",
            "覆盖首年学费与生活费的银行存款证明",
            "最高学历证书、成绩单公证（及海牙认证）",
            "无犯罪记录证明公证及境外学生医疗保险"
          ],
          "processing": "约 3–6 周（长期 D 类学生签证审理）",
          "submission": "凭保加利亚教育部认可院校正式录取通知书 (Offer) 向驻华使领馆/签证中心或官方学生门户递交",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先取得保加利亚正规院校正式录取通知书 (Offer) 及符合要求的学费生活费担保，无法无录取直接个人自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "work": [
        {
          "id": "main",
          "title": "保加利亚 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴保加利亚合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
          "tips": "切勿持旅游免签或旅游签证在当地非法打工，务必确保雇主已为你申请正规 Work Permit。",
          "steps": [
            {
              "title": "获得当地合法雇主正式聘用合同",
              "detail": "确认岗位符合当地薪资及外籍雇员配额要求。"
            },
            {
              "title": "雇主向劳动/移民部门申领工作许可",
              "detail": "提供学历公证、无犯罪证明及过往履历。"
            },
            {
              "title": "凭工作许可批文申请入境工作签",
              "detail": "凭官方工作许可批准函向保加利亚驻华使领馆或签证中心递交入境工作签证。"
            },
            {
              "title": "入境换领工作居留卡并登记税务",
              "detail": "抵境后完成体检与社保税务注册。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地雇主签署的正式雇佣合同与邀请函",
            "当地官方签发的工作许可批准函 (Work Permit)",
            "最高学历学位公证（及海牙认证）与个人英文简历",
            "无犯罪记录证明公证及指定体检证明"
          ],
          "processing": "工作许可预批 3–8 周 + 使领馆/移民局贴签 2–4 周",
          "submission": "雇主先向保加利亚劳动/移民部门申领工作许可批文，获批后本人向驻华使领馆或签证中心递交工签",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先获得保加利亚当地合规雇主正式聘用合同，并由雇主向当地劳动或移民部门申领工作许可批文 (Work Permit)，无法无雇主担保个人直接自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "immigration": [
        {
          "id": "main",
          "title": "保加利亚 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问保加利亚官方移民/内政部门网站核对最新永居居住年限、离境限制及语言考核规定。"
            },
            {
              "title": "累积连续合法工作/居留与纳税证明",
              "detail": "确保每年离境天数未超过法定上限。"
            },
            {
              "title": "向当地移民局提交永居申请",
              "detail": "提交税单、住址证明、语言证书（如要求）及无犯罪记录。"
            }
          ],
          "checklist": [
            "有效护照及历年居留卡记录",
            "连续合法居留期间的个人所得税税单与社保记录",
            "稳定的收入或存款资产证明",
            "当地合法居住地址证明（租房合同或房产证）",
            "无犯罪记录证明及当地语言测试证书（如要求）"
          ],
          "processing": "通常需连续合法居留纳税 3–5 年后递交，审理约 3–12 个月",
          "submission": "满足法定居住与语言/纳税年限后向保加利亚当地移民局或内政部门递交永居 (PR) 申请",
          "diySupport": "advisory",
          "advisoryNote": "永久居留通常须先持合法工作、家庭团聚或合规格长期居留许可在保加利亚连续居住并稳定纳税满法定年限（多为 5 年），无法从海外直接一步自助网申；本页提供长期路径规划指引。"
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "保加利亚 短期旅游/访客通道（申根签·空中与海路已入申根）",
          "fee": "90 EUR",
          "desc": "已加入申根区，持有效多次申根签可畅行；本地生活成本在欧盟内极具性价比。",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 保加利亚外交部签证官网 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 保加利亚驻华使领馆 / VFS 提交申请并缴费（免签国直接填报入境卡）。"
            },
            {
              "title": "获取批文或直接持护照入境",
              "detail": "打印电子签/确认函随身携带乘机。"
            }
          ],
          "checklist": [
            "有效期内中国因私护照（有效期6个月以上）",
            "往返/离境机票预订单",
            "全程酒店预订单（英文版）",
            "官方在线申请表打印件与白底证件照",
            "近6个月银行流水、在职证明及申根/旅行医疗保险"
          ],
          "processing": "15 天",
          "submission": "保加利亚驻华使领馆 / VFS",
          "diySupport": "diy"
        }
      ],
      "other": [
        {
          "id": "main",
          "title": "保加利亚 商务考察 / 探亲访友 / 特殊通道",
          "fee": "90 EUR",
          "desc": "涵盖赴保加利亚参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "按保加利亚驻华使领馆或官方签证中心对应商务/探亲清单提交材料，并随身携带邀请方凭证。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ],
          "processing": "短期访问约 5–15 个工作日（免签国即时入境，视具体通道而定）",
          "submission": "凭保加利亚邀请函或亲属关系证明按对应签证中心或免签口岸规则办理",
          "diySupport": "advisory",
          "advisoryNote": "商务考察、探亲访友或长期团聚通常须先取得保加利亚当地邀请方出具的正式邀请函、公司派遣函或亲属关系证明，无法无邀请单纯按常规旅游自由行替代；本页提供通用材料与原则指引。"
        }
      ]
    }
  },
  {
    "id": "642",
    "code": "ROU",
    "nameZh": "罗马尼亚",
    "nameEn": "Romania",
    "region": "欧洲申根 / EUROPE",
    "coords": [
      24.97,
      45.94
    ],
    "badge": "e-Visa 网申 + 申根成员",
    "tierColor": "#4A7B82",
    "labelPriority": false,
    "processing": "10–15 工作日",
    "submission": "evisa.mae.ro 官方在线填表",
    "summary": "可先在 eviza.mae.ro 在线提交电子材料预审再预约领馆贴签，已加入申根区。",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【遵守申根“主停留国”原则】申根签必须向停留天数最多的国家申请（同天数则向首入国申请），切忌拿A国签证完全不去A国，否则影响后续出签与入境。"
    ],
    "links": [
      {
        "title": "罗马尼亚外交部 eVisa 官网",
        "url": "https://eviza.mae.ro/",
        "desc": "官方签证/入境申请与政策查询入口"
      }
    ],
    "jobLinks": [
      {
        "title": "EURES 欧盟官方跨国就业平台",
        "url": "https://eures.europa.eu/jobseekers_en",
        "desc": "官方覆盖罗马尼亚在内的欧洲31国雇主直聘库"
      },
      {
        "title": "LinkedIn 欧洲区域职位搜索",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "按Romania城市筛选英语/当地语全职岗位"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "罗马尼亚 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴罗马尼亚攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
          "tips": "涉外学历、成绩单及无犯罪记录公证件，建议通过中国外交部或地方外办办理海牙认证 (Apostille)（若目的国为海牙公约成员）。",
          "steps": [
            {
              "title": "申请目标院校并获取正式 Offer",
              "detail": "按学校官网要求提交学历、成绩单及语言证明。"
            },
            {
              "title": "办理公证与海牙认证/双认证",
              "detail": "准备最高学历、出生及无犯罪记录公证。"
            },
            {
              "title": "准备资金担保并递交学生签",
              "detail": "按罗马尼亚驻华使领馆/签证中心或官方留学门户要求提交学生签证申请。"
            },
            {
              "title": "入境注册并办理当地居留卡",
              "detail": "抵境后按当地移民局规定期限办理学生居留卡。"
            }
          ],
          "checklist": [
            "有效护照及签证申请表",
            "目的国院校正式录取通知书 (Offer)",
            "覆盖首年学费与生活费的银行存款证明",
            "最高学历证书、成绩单公证（及海牙认证）",
            "无犯罪记录证明公证及境外学生医疗保险"
          ],
          "processing": "约 3–6 周（长期 D 类学生签证审理）",
          "submission": "凭罗马尼亚教育部认可院校正式录取通知书 (Offer) 向驻华使领馆/签证中心或官方学生门户递交",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先取得罗马尼亚正规院校正式录取通知书 (Offer) 及符合要求的学费生活费担保，无法无录取直接个人自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "work": [
        {
          "id": "main",
          "title": "罗马尼亚 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴罗马尼亚合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
          "tips": "切勿持旅游免签或旅游签证在当地非法打工，务必确保雇主已为你申请正规 Work Permit。",
          "steps": [
            {
              "title": "获得当地合法雇主正式聘用合同",
              "detail": "确认岗位符合当地薪资及外籍雇员配额要求。"
            },
            {
              "title": "雇主向劳动/移民部门申领工作许可",
              "detail": "提供学历公证、无犯罪证明及过往履历。"
            },
            {
              "title": "凭工作许可批文申请入境工作签",
              "detail": "凭官方工作许可批准函向罗马尼亚驻华使领馆或签证中心递交入境工作签证。"
            },
            {
              "title": "入境换领工作居留卡并登记税务",
              "detail": "抵境后完成体检与社保税务注册。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地雇主签署的正式雇佣合同与邀请函",
            "当地官方签发的工作许可批准函 (Work Permit)",
            "最高学历学位公证（及海牙认证）与个人英文简历",
            "无犯罪记录证明公证及指定体检证明"
          ],
          "processing": "工作许可预批 3–8 周 + 使领馆/移民局贴签 2–4 周",
          "submission": "雇主先向罗马尼亚劳动/移民部门申领工作许可批文，获批后本人向驻华使领馆或签证中心递交工签",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先获得罗马尼亚当地合规雇主正式聘用合同，并由雇主向当地劳动或移民部门申领工作许可批文 (Work Permit)，无法无雇主担保个人直接自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "immigration": [
        {
          "id": "main",
          "title": "罗马尼亚 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问罗马尼亚官方移民/内政部门网站核对最新永居居住年限、离境限制及语言考核规定。"
            },
            {
              "title": "累积连续合法工作/居留与纳税证明",
              "detail": "确保每年离境天数未超过法定上限。"
            },
            {
              "title": "向当地移民局提交永居申请",
              "detail": "提交税单、住址证明、语言证书（如要求）及无犯罪记录。"
            }
          ],
          "checklist": [
            "有效护照及历年居留卡记录",
            "连续合法居留期间的个人所得税税单与社保记录",
            "稳定的收入或存款资产证明",
            "当地合法居住地址证明（租房合同或房产证）",
            "无犯罪记录证明及当地语言测试证书（如要求）"
          ],
          "processing": "通常需连续合法居留纳税 3–5 年后递交，审理约 3–12 个月",
          "submission": "满足法定居住与语言/纳税年限后向罗马尼亚当地移民局或内政部门递交永居 (PR) 申请",
          "diySupport": "advisory",
          "advisoryNote": "永久居留通常须先持合法工作、家庭团聚或合规格长期居留许可在罗马尼亚连续居住并稳定纳税满法定年限（多为 5 年），无法从海外直接一步自助网申；本页提供长期路径规划指引。"
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "罗马尼亚 短期旅游/访客通道（e-Visa 网申 + 申根成员）",
          "fee": "90 EUR",
          "desc": "可先在 eviza.mae.ro 在线提交电子材料预审再预约领馆贴签，已加入申根区。",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 罗马尼亚外交部 eVisa 官网 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 evisa.mae.ro 官方在线填表 提交申请并缴费（免签国直接填报入境卡）。"
            },
            {
              "title": "获取批文或直接持护照入境",
              "detail": "打印电子签/确认函随身携带乘机。"
            }
          ],
          "checklist": [
            "有效期内中国因私护照（有效期6个月以上）",
            "往返/离境机票预订单",
            "全程酒店预订单（英文版）",
            "官方在线申请表打印件与白底证件照",
            "近6个月银行流水、在职证明及申根/旅行医疗保险"
          ],
          "processing": "10–15 工作日",
          "submission": "evisa.mae.ro 官方在线填表",
          "diySupport": "diy"
        }
      ],
      "other": [
        {
          "id": "main",
          "title": "罗马尼亚 商务考察 / 探亲访友 / 特殊通道",
          "fee": "90 EUR",
          "desc": "涵盖赴罗马尼亚参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "按罗马尼亚驻华使领馆或官方签证中心对应商务/探亲清单提交材料，并随身携带邀请方凭证。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ],
          "processing": "短期访问约 5–15 个工作日（免签国即时入境，视具体通道而定）",
          "submission": "凭罗马尼亚邀请函或亲属关系证明按对应签证中心或免签口岸规则办理",
          "diySupport": "advisory",
          "advisoryNote": "商务考察、探亲访友或长期团聚通常须先取得罗马尼亚当地邀请方出具的正式邀请函、公司派遣函或亲属关系证明，无法无邀请单纯按常规旅游自由行替代；本页提供通用材料与原则指引。"
        }
      ]
    }
  },
  {
    "id": "703",
    "code": "SVK",
    "nameZh": "斯洛伐克",
    "nameEn": "Slovakia",
    "region": "中欧申根 / EUROPE",
    "coords": [
      19.7,
      48.67
    ],
    "badge": "申根签 · 驻华使领馆",
    "tierColor": "#4A7B82",
    "labelPriority": false,
    "processing": "15 天",
    "submission": "ezov.mzv.sk + 使领馆",
    "summary": "位于中欧核心，与维也纳近在咫尺，汽车制造与工程岗位集中。",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【遵守申根“主停留国”原则】申根签必须向停留天数最多的国家申请（同天数则向首入国申请），切忌拿A国签证完全不去A国，否则影响后续出签与入境。"
    ],
    "links": [
      {
        "title": "斯洛伐克官方电子签证表",
        "url": "https://ezov.mzv.sk/",
        "desc": "官方签证/入境申请与政策查询入口"
      }
    ],
    "jobLinks": [
      {
        "title": "EURES 欧盟官方跨国就业平台",
        "url": "https://eures.europa.eu/jobseekers_en",
        "desc": "官方覆盖斯洛伐克在内的欧洲31国雇主直聘库"
      },
      {
        "title": "LinkedIn 欧洲区域职位搜索",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "按Slovakia城市筛选英语/当地语全职岗位"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "斯洛伐克 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴斯洛伐克攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
          "tips": "涉外学历、成绩单及无犯罪记录公证件，建议通过中国外交部或地方外办办理海牙认证 (Apostille)（若目的国为海牙公约成员）。",
          "steps": [
            {
              "title": "申请目标院校并获取正式 Offer",
              "detail": "按学校官网要求提交学历、成绩单及语言证明。"
            },
            {
              "title": "办理公证与海牙认证/双认证",
              "detail": "准备最高学历、出生及无犯罪记录公证。"
            },
            {
              "title": "准备资金担保并递交学生签",
              "detail": "按斯洛伐克驻华使领馆/签证中心或官方留学门户要求提交学生签证申请。"
            },
            {
              "title": "入境注册并办理当地居留卡",
              "detail": "抵境后按当地移民局规定期限办理学生居留卡。"
            }
          ],
          "checklist": [
            "有效护照及签证申请表",
            "目的国院校正式录取通知书 (Offer)",
            "覆盖首年学费与生活费的银行存款证明",
            "最高学历证书、成绩单公证（及海牙认证）",
            "无犯罪记录证明公证及境外学生医疗保险"
          ],
          "processing": "约 3–6 周（长期 D 类学生签证审理）",
          "submission": "凭斯洛伐克教育部认可院校正式录取通知书 (Offer) 向驻华使领馆/签证中心或官方学生门户递交",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先取得斯洛伐克正规院校正式录取通知书 (Offer) 及符合要求的学费生活费担保，无法无录取直接个人自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "work": [
        {
          "id": "main",
          "title": "斯洛伐克 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴斯洛伐克合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
          "tips": "切勿持旅游免签或旅游签证在当地非法打工，务必确保雇主已为你申请正规 Work Permit。",
          "steps": [
            {
              "title": "获得当地合法雇主正式聘用合同",
              "detail": "确认岗位符合当地薪资及外籍雇员配额要求。"
            },
            {
              "title": "雇主向劳动/移民部门申领工作许可",
              "detail": "提供学历公证、无犯罪证明及过往履历。"
            },
            {
              "title": "凭工作许可批文申请入境工作签",
              "detail": "凭官方工作许可批准函向斯洛伐克驻华使领馆或签证中心递交入境工作签证。"
            },
            {
              "title": "入境换领工作居留卡并登记税务",
              "detail": "抵境后完成体检与社保税务注册。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地雇主签署的正式雇佣合同与邀请函",
            "当地官方签发的工作许可批准函 (Work Permit)",
            "最高学历学位公证（及海牙认证）与个人英文简历",
            "无犯罪记录证明公证及指定体检证明"
          ],
          "processing": "工作许可预批 3–8 周 + 使领馆/移民局贴签 2–4 周",
          "submission": "雇主先向斯洛伐克劳动/移民部门申领工作许可批文，获批后本人向驻华使领馆或签证中心递交工签",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先获得斯洛伐克当地合规雇主正式聘用合同，并由雇主向当地劳动或移民部门申领工作许可批文 (Work Permit)，无法无雇主担保个人直接自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "immigration": [
        {
          "id": "main",
          "title": "斯洛伐克 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问斯洛伐克官方移民/内政部门网站核对最新永居居住年限、离境限制及语言考核规定。"
            },
            {
              "title": "累积连续合法工作/居留与纳税证明",
              "detail": "确保每年离境天数未超过法定上限。"
            },
            {
              "title": "向当地移民局提交永居申请",
              "detail": "提交税单、住址证明、语言证书（如要求）及无犯罪记录。"
            }
          ],
          "checklist": [
            "有效护照及历年居留卡记录",
            "连续合法居留期间的个人所得税税单与社保记录",
            "稳定的收入或存款资产证明",
            "当地合法居住地址证明（租房合同或房产证）",
            "无犯罪记录证明及当地语言测试证书（如要求）"
          ],
          "processing": "通常需连续合法居留纳税 3–5 年后递交，审理约 3–12 个月",
          "submission": "满足法定居住与语言/纳税年限后向斯洛伐克当地移民局或内政部门递交永居 (PR) 申请",
          "diySupport": "advisory",
          "advisoryNote": "永久居留通常须先持合法工作、家庭团聚或合规格长期居留许可在斯洛伐克连续居住并稳定纳税满法定年限（多为 5 年），无法从海外直接一步自助网申；本页提供长期路径规划指引。"
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "斯洛伐克 短期旅游/访客通道（申根签 · 驻华使领馆）",
          "fee": "90 EUR",
          "desc": "位于中欧核心，与维也纳近在咫尺，汽车制造与工程岗位集中。",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 斯洛伐克官方电子签证表 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 ezov.mzv.sk + 使领馆 提交申请并缴费（免签国直接填报入境卡）。"
            },
            {
              "title": "获取批文或直接持护照入境",
              "detail": "打印电子签/确认函随身携带乘机。"
            }
          ],
          "checklist": [
            "有效期内中国因私护照（有效期6个月以上）",
            "往返/离境机票预订单",
            "全程酒店预订单（英文版）",
            "官方在线申请表打印件与白底证件照",
            "近6个月银行流水、在职证明及申根/旅行医疗保险"
          ],
          "processing": "15 天",
          "submission": "ezov.mzv.sk + 使领馆",
          "diySupport": "diy"
        }
      ],
      "other": [
        {
          "id": "main",
          "title": "斯洛伐克 商务考察 / 探亲访友 / 特殊通道",
          "fee": "90 EUR",
          "desc": "涵盖赴斯洛伐克参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "按斯洛伐克驻华使领馆或官方签证中心对应商务/探亲清单提交材料，并随身携带邀请方凭证。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ],
          "processing": "短期访问约 5–15 个工作日（免签国即时入境，视具体通道而定）",
          "submission": "凭斯洛伐克邀请函或亲属关系证明按对应签证中心或免签口岸规则办理",
          "diySupport": "advisory",
          "advisoryNote": "商务考察、探亲访友或长期团聚通常须先取得斯洛伐克当地邀请方出具的正式邀请函、公司派遣函或亲属关系证明，无法无邀请单纯按常规旅游自由行替代；本页提供通用材料与原则指引。"
        }
      ]
    }
  },
  {
    "id": "705",
    "code": "SVN",
    "nameZh": "斯洛文尼亚",
    "nameEn": "Slovenia",
    "region": "欧洲申根 / EUROPE",
    "coords": [
      14.99,
      46.15
    ],
    "badge": "申根签 · VFS递交",
    "tierColor": "#4A7B82",
    "labelPriority": false,
    "processing": "15 天",
    "submission": "VFS / 斯洛文尼亚使馆",
    "summary": "阿尔卑斯山脚下的发达申根小国，治安极佳，支持高性价比公立大学留学。",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【遵守申根“主停留国”原则】申根签必须向停留天数最多的国家申请（同天数则向首入国申请），切忌拿A国签证完全不去A国，否则影响后续出签与入境。"
    ],
    "links": [
      {
        "title": "斯洛文尼亚政府入境居留网",
        "url": "https://www.gov.si/en/topics/entry-and-residence/",
        "desc": "官方签证/入境申请与政策查询入口"
      }
    ],
    "jobLinks": [
      {
        "title": "EURES 欧盟官方跨国就业平台",
        "url": "https://eures.europa.eu/jobseekers_en",
        "desc": "官方覆盖斯洛文尼亚在内的欧洲31国雇主直聘库"
      },
      {
        "title": "LinkedIn 欧洲区域职位搜索",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "按Slovenia城市筛选英语/当地语全职岗位"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "斯洛文尼亚 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴斯洛文尼亚攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
          "tips": "涉外学历、成绩单及无犯罪记录公证件，建议通过中国外交部或地方外办办理海牙认证 (Apostille)（若目的国为海牙公约成员）。",
          "steps": [
            {
              "title": "申请目标院校并获取正式 Offer",
              "detail": "按学校官网要求提交学历、成绩单及语言证明。"
            },
            {
              "title": "办理公证与海牙认证/双认证",
              "detail": "准备最高学历、出生及无犯罪记录公证。"
            },
            {
              "title": "准备资金担保并递交学生签",
              "detail": "按斯洛文尼亚驻华使领馆/签证中心或官方留学门户要求提交学生签证申请。"
            },
            {
              "title": "入境注册并办理当地居留卡",
              "detail": "抵境后按当地移民局规定期限办理学生居留卡。"
            }
          ],
          "checklist": [
            "有效护照及签证申请表",
            "目的国院校正式录取通知书 (Offer)",
            "覆盖首年学费与生活费的银行存款证明",
            "最高学历证书、成绩单公证（及海牙认证）",
            "无犯罪记录证明公证及境外学生医疗保险"
          ],
          "processing": "约 3–6 周（长期 D 类学生签证审理）",
          "submission": "凭斯洛文尼亚教育部认可院校正式录取通知书 (Offer) 向驻华使领馆/签证中心或官方学生门户递交",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先取得斯洛文尼亚正规院校正式录取通知书 (Offer) 及符合要求的学费生活费担保，无法无录取直接个人自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "work": [
        {
          "id": "main",
          "title": "斯洛文尼亚 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴斯洛文尼亚合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
          "tips": "切勿持旅游免签或旅游签证在当地非法打工，务必确保雇主已为你申请正规 Work Permit。",
          "steps": [
            {
              "title": "获得当地合法雇主正式聘用合同",
              "detail": "确认岗位符合当地薪资及外籍雇员配额要求。"
            },
            {
              "title": "雇主向劳动/移民部门申领工作许可",
              "detail": "提供学历公证、无犯罪证明及过往履历。"
            },
            {
              "title": "凭工作许可批文申请入境工作签",
              "detail": "凭官方工作许可批准函向斯洛文尼亚驻华使领馆或签证中心递交入境工作签证。"
            },
            {
              "title": "入境换领工作居留卡并登记税务",
              "detail": "抵境后完成体检与社保税务注册。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地雇主签署的正式雇佣合同与邀请函",
            "当地官方签发的工作许可批准函 (Work Permit)",
            "最高学历学位公证（及海牙认证）与个人英文简历",
            "无犯罪记录证明公证及指定体检证明"
          ],
          "processing": "工作许可预批 3–8 周 + 使领馆/移民局贴签 2–4 周",
          "submission": "雇主先向斯洛文尼亚劳动/移民部门申领工作许可批文，获批后本人向驻华使领馆或签证中心递交工签",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先获得斯洛文尼亚当地合规雇主正式聘用合同，并由雇主向当地劳动或移民部门申领工作许可批文 (Work Permit)，无法无雇主担保个人直接自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "immigration": [
        {
          "id": "main",
          "title": "斯洛文尼亚 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问斯洛文尼亚官方移民/内政部门网站核对最新永居居住年限、离境限制及语言考核规定。"
            },
            {
              "title": "累积连续合法工作/居留与纳税证明",
              "detail": "确保每年离境天数未超过法定上限。"
            },
            {
              "title": "向当地移民局提交永居申请",
              "detail": "提交税单、住址证明、语言证书（如要求）及无犯罪记录。"
            }
          ],
          "checklist": [
            "有效护照及历年居留卡记录",
            "连续合法居留期间的个人所得税税单与社保记录",
            "稳定的收入或存款资产证明",
            "当地合法居住地址证明（租房合同或房产证）",
            "无犯罪记录证明及当地语言测试证书（如要求）"
          ],
          "processing": "通常需连续合法居留纳税 3–5 年后递交，审理约 3–12 个月",
          "submission": "满足法定居住与语言/纳税年限后向斯洛文尼亚当地移民局或内政部门递交永居 (PR) 申请",
          "diySupport": "advisory",
          "advisoryNote": "永久居留通常须先持合法工作、家庭团聚或合规格长期居留许可在斯洛文尼亚连续居住并稳定纳税满法定年限（多为 5 年），无法从海外直接一步自助网申；本页提供长期路径规划指引。"
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "斯洛文尼亚 短期旅游/访客通道（申根签 · VFS递交）",
          "fee": "90 EUR",
          "desc": "阿尔卑斯山脚下的发达申根小国，治安极佳，支持高性价比公立大学留学。",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 斯洛文尼亚政府入境居留网 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 VFS / 斯洛文尼亚使馆 提交申请并缴费（免签国直接填报入境卡）。"
            },
            {
              "title": "获取批文或直接持护照入境",
              "detail": "打印电子签/确认函随身携带乘机。"
            }
          ],
          "checklist": [
            "有效期内中国因私护照（有效期6个月以上）",
            "往返/离境机票预订单",
            "全程酒店预订单（英文版）",
            "官方在线申请表打印件与白底证件照",
            "近6个月银行流水、在职证明及申根/旅行医疗保险"
          ],
          "processing": "15 天",
          "submission": "VFS / 斯洛文尼亚使馆",
          "diySupport": "diy"
        }
      ],
      "other": [
        {
          "id": "main",
          "title": "斯洛文尼亚 商务考察 / 探亲访友 / 特殊通道",
          "fee": "90 EUR",
          "desc": "涵盖赴斯洛文尼亚参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "按斯洛文尼亚驻华使领馆或官方签证中心对应商务/探亲清单提交材料，并随身携带邀请方凭证。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ],
          "processing": "短期访问约 5–15 个工作日（免签国即时入境，视具体通道而定）",
          "submission": "凭斯洛文尼亚邀请函或亲属关系证明按对应签证中心或免签口岸规则办理",
          "diySupport": "advisory",
          "advisoryNote": "商务考察、探亲访友或长期团聚通常须先取得斯洛文尼亚当地邀请方出具的正式邀请函、公司派遣函或亲属关系证明，无法无邀请单纯按常规旅游自由行替代；本页提供通用材料与原则指引。"
        }
      ]
    }
  },
  {
    "id": "233",
    "code": "EST",
    "nameZh": "爱沙尼亚",
    "nameEn": "Estonia",
    "region": "波罗的海申根 / EUROPE",
    "coords": [
      25.01,
      58.6
    ],
    "badge": "申根签 + 数字游民/e-Residency",
    "tierColor": "#4A7B82",
    "labelPriority": false,
    "processing": "15 天",
    "submission": "爱沙尼亚官方系统 / VFS",
    "summary": "欧洲数字化程度最高国家！首创电子居民 (e-Residency) 与 1 年期数字游民签证，创业与 IT 工签高度友好。",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【遵守申根“主停留国”原则】申根签必须向停留天数最多的国家申请（同天数则向首入国申请），切忌拿A国签证完全不去A国，否则影响后续出签与入境。"
    ],
    "links": [
      {
        "title": "爱沙尼亚警察与边防局 (PPA)",
        "url": "https://www.politsei.ee/en",
        "desc": "官方签证/入境申请与政策查询入口"
      }
    ],
    "jobLinks": [
      {
        "title": "EURES 欧盟官方跨国就业平台",
        "url": "https://eures.europa.eu/jobseekers_en",
        "desc": "官方覆盖爱沙尼亚在内的欧洲31国雇主直聘库"
      },
      {
        "title": "LinkedIn 欧洲区域职位搜索",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "按Estonia城市筛选英语/当地语全职岗位"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "爱沙尼亚 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴爱沙尼亚攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
          "tips": "涉外学历、成绩单及无犯罪记录公证件，建议通过中国外交部或地方外办办理海牙认证 (Apostille)（若目的国为海牙公约成员）。",
          "steps": [
            {
              "title": "申请目标院校并获取正式 Offer",
              "detail": "按学校官网要求提交学历、成绩单及语言证明。"
            },
            {
              "title": "办理公证与海牙认证/双认证",
              "detail": "准备最高学历、出生及无犯罪记录公证。"
            },
            {
              "title": "准备资金担保并递交学生签",
              "detail": "按爱沙尼亚驻华使领馆/签证中心或官方留学门户要求提交学生签证申请。"
            },
            {
              "title": "入境注册并办理当地居留卡",
              "detail": "抵境后按当地移民局规定期限办理学生居留卡。"
            }
          ],
          "checklist": [
            "有效护照及签证申请表",
            "目的国院校正式录取通知书 (Offer)",
            "覆盖首年学费与生活费的银行存款证明",
            "最高学历证书、成绩单公证（及海牙认证）",
            "无犯罪记录证明公证及境外学生医疗保险"
          ],
          "processing": "约 3–6 周（长期 D 类学生签证审理）",
          "submission": "凭爱沙尼亚教育部认可院校正式录取通知书 (Offer) 向驻华使领馆/签证中心或官方学生门户递交",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先取得爱沙尼亚正规院校正式录取通知书 (Offer) 及符合要求的学费生活费担保，无法无录取直接个人自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "work": [
        {
          "id": "main",
          "title": "爱沙尼亚 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴爱沙尼亚合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
          "tips": "切勿持旅游免签或旅游签证在当地非法打工，务必确保雇主已为你申请正规 Work Permit。",
          "steps": [
            {
              "title": "获得当地合法雇主正式聘用合同",
              "detail": "确认岗位符合当地薪资及外籍雇员配额要求。"
            },
            {
              "title": "雇主向劳动/移民部门申领工作许可",
              "detail": "提供学历公证、无犯罪证明及过往履历。"
            },
            {
              "title": "凭工作许可批文申请入境工作签",
              "detail": "凭官方工作许可批准函向爱沙尼亚驻华使领馆或签证中心递交入境工作签证。"
            },
            {
              "title": "入境换领工作居留卡并登记税务",
              "detail": "抵境后完成体检与社保税务注册。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地雇主签署的正式雇佣合同与邀请函",
            "当地官方签发的工作许可批准函 (Work Permit)",
            "最高学历学位公证（及海牙认证）与个人英文简历",
            "无犯罪记录证明公证及指定体检证明"
          ],
          "processing": "工作许可预批 3–8 周 + 使领馆/移民局贴签 2–4 周",
          "submission": "雇主先向爱沙尼亚劳动/移民部门申领工作许可批文，获批后本人向驻华使领馆或签证中心递交工签",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先获得爱沙尼亚当地合规雇主正式聘用合同，并由雇主向当地劳动或移民部门申领工作许可批文 (Work Permit)，无法无雇主担保个人直接自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "immigration": [
        {
          "id": "main",
          "title": "爱沙尼亚 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问爱沙尼亚官方移民/内政部门网站核对最新永居居住年限、离境限制及语言考核规定。"
            },
            {
              "title": "累积连续合法工作/居留与纳税证明",
              "detail": "确保每年离境天数未超过法定上限。"
            },
            {
              "title": "向当地移民局提交永居申请",
              "detail": "提交税单、住址证明、语言证书（如要求）及无犯罪记录。"
            }
          ],
          "checklist": [
            "有效护照及历年居留卡记录",
            "连续合法居留期间的个人所得税税单与社保记录",
            "稳定的收入或存款资产证明",
            "当地合法居住地址证明（租房合同或房产证）",
            "无犯罪记录证明及当地语言测试证书（如要求）"
          ],
          "processing": "通常需连续合法居留纳税 3–5 年后递交，审理约 3–12 个月",
          "submission": "满足法定居住与语言/纳税年限后向爱沙尼亚当地移民局或内政部门递交永居 (PR) 申请",
          "diySupport": "advisory",
          "advisoryNote": "永久居留通常须先持合法工作、家庭团聚或合规格长期居留许可在爱沙尼亚连续居住并稳定纳税满法定年限（多为 5 年），无法从海外直接一步自助网申；本页提供长期路径规划指引。"
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "爱沙尼亚 短期旅游/访客通道（申根签 + 数字游民/e-Residency）",
          "fee": "90 EUR",
          "desc": "欧洲数字化程度最高国家！首创电子居民 (e-Residency) 与 1 年期数字游民签证，创业与 IT 工签高度友好。",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 爱沙尼亚警察与边防局 (PPA) 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 爱沙尼亚官方系统 / VFS 提交申请并缴费（免签国直接填报入境卡）。"
            },
            {
              "title": "获取批文或直接持护照入境",
              "detail": "打印电子签/确认函随身携带乘机。"
            }
          ],
          "checklist": [
            "有效期内中国因私护照（有效期6个月以上）",
            "往返/离境机票预订单",
            "全程酒店预订单（英文版）",
            "官方在线申请表打印件与白底证件照",
            "近6个月银行流水、在职证明及申根/旅行医疗保险"
          ],
          "processing": "15 天",
          "submission": "爱沙尼亚官方系统 / VFS",
          "diySupport": "diy"
        }
      ],
      "other": [
        {
          "id": "main",
          "title": "数字游民签证 (Digital Nomad Visa) / 电子居民 e-Residency",
          "fee": "100 EUR（长期 D 签） / e-Residency 另计约 120–150 EUR",
          "processing": "约 15–30 天",
          "submission": "在爱沙尼亚外交部官网在线填表后预约驻华使领馆提交数字游民材料（e-Residency 全线上申请）",
          "diySupport": "diy",
          "desc": "爱沙尼亚首创 1 年期数字游民签证 (DNV) 允许境外远程雇员、海外企业主或自由职业者在爱沙尼亚合法旅居并远程办公 1 年（要求税前月收入不低于 4,500 EUR 基准）；另可通过 e-Residency 线上获批数字身份并在欧盟远程注册管理公司。",
          "tips": "注意 e-Residency 数字居民卡本身不具备入境或居住权，不可替代旅游或数字游民签证入境；申请 DNV 须如实提交近 6 个月远程收入流水与雇主远程证明。",
          "steps": [
            {
              "title": "确认数字游民月收入与远程雇佣资格",
              "detail": "整理过去 6 个月月入达标（约 4,500 EUR 税前基准）流水及境外劳动合同/公司注册证明。"
            },
            {
              "title": "在线填写爱沙尼亚长期 D 签申请表",
              "detail": "在 eelviisataotlus.vm.ee 填写个人及远程工作信息并下载打印申请表。"
            },
            {
              "title": "预约爱沙尼亚使领馆或受理代表处递签",
              "detail": "携带护照、合同、流水、保险与住宿证明录指纹缴费，约 15–30 天获批。"
            }
          ],
          "checklist": [
            "有效护照及在线填妥打印的 D 类签证申请表",
            "近 6 个月银行流水及境外雇主远程办公授权/自由职业合同",
            "覆盖整个停留期的 30,000 EUR 以上医疗保险",
            "在爱住宿证明及个人简历说明信"
          ]
        }
      ]
    }
  },
  {
    "id": "428",
    "code": "LVA",
    "nameZh": "拉脱维亚",
    "nameEn": "Latvia",
    "region": "波罗的海申根 / EUROPE",
    "coords": [
      24.6,
      56.88
    ],
    "badge": "申根签 · VFS递交",
    "tierColor": "#4A7B82",
    "labelPriority": false,
    "processing": "15 天",
    "submission": "VFS 拉脱维亚中心",
    "summary": "波罗的海三国枢纽，里加理工与商科英语项目学费亲民。",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【遵守申根“主停留国”原则】申根签必须向停留天数最多的国家申请（同天数则向首入国申请），切忌拿A国签证完全不去A国，否则影响后续出签与入境。"
    ],
    "links": [
      {
        "title": "拉脱维亚公民与移民局 (OCMA)",
        "url": "https://www.pmlp.gov.lv/en",
        "desc": "官方签证/入境申请与政策查询入口"
      }
    ],
    "jobLinks": [
      {
        "title": "EURES 欧盟官方跨国就业平台",
        "url": "https://eures.europa.eu/jobseekers_en",
        "desc": "官方覆盖拉脱维亚在内的欧洲31国雇主直聘库"
      },
      {
        "title": "LinkedIn 欧洲区域职位搜索",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "按Latvia城市筛选英语/当地语全职岗位"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "拉脱维亚 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴拉脱维亚攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
          "tips": "涉外学历、成绩单及无犯罪记录公证件，建议通过中国外交部或地方外办办理海牙认证 (Apostille)（若目的国为海牙公约成员）。",
          "steps": [
            {
              "title": "申请目标院校并获取正式 Offer",
              "detail": "按学校官网要求提交学历、成绩单及语言证明。"
            },
            {
              "title": "办理公证与海牙认证/双认证",
              "detail": "准备最高学历、出生及无犯罪记录公证。"
            },
            {
              "title": "准备资金担保并递交学生签",
              "detail": "按拉脱维亚驻华使领馆/签证中心或官方留学门户要求提交学生签证申请。"
            },
            {
              "title": "入境注册并办理当地居留卡",
              "detail": "抵境后按当地移民局规定期限办理学生居留卡。"
            }
          ],
          "checklist": [
            "有效护照及签证申请表",
            "目的国院校正式录取通知书 (Offer)",
            "覆盖首年学费与生活费的银行存款证明",
            "最高学历证书、成绩单公证（及海牙认证）",
            "无犯罪记录证明公证及境外学生医疗保险"
          ],
          "processing": "约 3–6 周（长期 D 类学生签证审理）",
          "submission": "凭拉脱维亚教育部认可院校正式录取通知书 (Offer) 向驻华使领馆/签证中心或官方学生门户递交",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先取得拉脱维亚正规院校正式录取通知书 (Offer) 及符合要求的学费生活费担保，无法无录取直接个人自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "work": [
        {
          "id": "main",
          "title": "拉脱维亚 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴拉脱维亚合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
          "tips": "切勿持旅游免签或旅游签证在当地非法打工，务必确保雇主已为你申请正规 Work Permit。",
          "steps": [
            {
              "title": "获得当地合法雇主正式聘用合同",
              "detail": "确认岗位符合当地薪资及外籍雇员配额要求。"
            },
            {
              "title": "雇主向劳动/移民部门申领工作许可",
              "detail": "提供学历公证、无犯罪证明及过往履历。"
            },
            {
              "title": "凭工作许可批文申请入境工作签",
              "detail": "凭官方工作许可批准函向拉脱维亚驻华使领馆或签证中心递交入境工作签证。"
            },
            {
              "title": "入境换领工作居留卡并登记税务",
              "detail": "抵境后完成体检与社保税务注册。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地雇主签署的正式雇佣合同与邀请函",
            "当地官方签发的工作许可批准函 (Work Permit)",
            "最高学历学位公证（及海牙认证）与个人英文简历",
            "无犯罪记录证明公证及指定体检证明"
          ],
          "processing": "工作许可预批 3–8 周 + 使领馆/移民局贴签 2–4 周",
          "submission": "雇主先向拉脱维亚劳动/移民部门申领工作许可批文，获批后本人向驻华使领馆或签证中心递交工签",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先获得拉脱维亚当地合规雇主正式聘用合同，并由雇主向当地劳动或移民部门申领工作许可批文 (Work Permit)，无法无雇主担保个人直接自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "immigration": [
        {
          "id": "main",
          "title": "拉脱维亚 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问拉脱维亚官方移民/内政部门网站核对最新永居居住年限、离境限制及语言考核规定。"
            },
            {
              "title": "累积连续合法工作/居留与纳税证明",
              "detail": "确保每年离境天数未超过法定上限。"
            },
            {
              "title": "向当地移民局提交永居申请",
              "detail": "提交税单、住址证明、语言证书（如要求）及无犯罪记录。"
            }
          ],
          "checklist": [
            "有效护照及历年居留卡记录",
            "连续合法居留期间的个人所得税税单与社保记录",
            "稳定的收入或存款资产证明",
            "当地合法居住地址证明（租房合同或房产证）",
            "无犯罪记录证明及当地语言测试证书（如要求）"
          ],
          "processing": "通常需连续合法居留纳税 3–5 年后递交，审理约 3–12 个月",
          "submission": "满足法定居住与语言/纳税年限后向拉脱维亚当地移民局或内政部门递交永居 (PR) 申请",
          "diySupport": "advisory",
          "advisoryNote": "永久居留通常须先持合法工作、家庭团聚或合规格长期居留许可在拉脱维亚连续居住并稳定纳税满法定年限（多为 5 年），无法从海外直接一步自助网申；本页提供长期路径规划指引。"
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "拉脱维亚 短期旅游/访客通道（申根签 · VFS递交）",
          "fee": "90 EUR",
          "desc": "波罗的海三国枢纽，里加理工与商科英语项目学费亲民。",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 拉脱维亚公民与移民局 (OCMA) 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 VFS 拉脱维亚中心 提交申请并缴费（免签国直接填报入境卡）。"
            },
            {
              "title": "获取批文或直接持护照入境",
              "detail": "打印电子签/确认函随身携带乘机。"
            }
          ],
          "checklist": [
            "有效期内中国因私护照（有效期6个月以上）",
            "往返/离境机票预订单",
            "全程酒店预订单（英文版）",
            "官方在线申请表打印件与白底证件照",
            "近6个月银行流水、在职证明及申根/旅行医疗保险"
          ],
          "processing": "15 天",
          "submission": "VFS 拉脱维亚中心",
          "diySupport": "diy"
        }
      ],
      "other": [
        {
          "id": "main",
          "title": "拉脱维亚 商务考察 / 探亲访友 / 特殊通道",
          "fee": "90 EUR",
          "desc": "涵盖赴拉脱维亚参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "按拉脱维亚驻华使领馆或官方签证中心对应商务/探亲清单提交材料，并随身携带邀请方凭证。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ],
          "processing": "短期访问约 5–15 个工作日（免签国即时入境，视具体通道而定）",
          "submission": "凭拉脱维亚邀请函或亲属关系证明按对应签证中心或免签口岸规则办理",
          "diySupport": "advisory",
          "advisoryNote": "商务考察、探亲访友或长期团聚通常须先取得拉脱维亚当地邀请方出具的正式邀请函、公司派遣函或亲属关系证明，无法无邀请单纯按常规旅游自由行替代；本页提供通用材料与原则指引。"
        }
      ]
    }
  },
  {
    "id": "440",
    "code": "LTU",
    "nameZh": "立陶宛",
    "nameEn": "Lithuania",
    "region": "波罗的海申根 / EUROPE",
    "coords": [
      23.88,
      55.17
    ],
    "badge": "申根签 · MIGRIS网申",
    "tierColor": "#4A7B82",
    "labelPriority": false,
    "processing": "15 天",
    "submission": "MIGRIS 官方移民系统",
    "summary": "长期工作与留学许可全部通过 MIGRIS 官网在线提交与预约。",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【遵守申根“主停留国”原则】申根签必须向停留天数最多的国家申请（同天数则向首入国申请），切忌拿A国签证完全不去A国，否则影响后续出签与入境。"
    ],
    "links": [
      {
        "title": "立陶宛 MIGRIS 官方电子移民系统",
        "url": "https://www.migracija.lt/",
        "desc": "官方签证/入境申请与政策查询入口"
      }
    ],
    "jobLinks": [
      {
        "title": "EURES 欧盟官方跨国就业平台",
        "url": "https://eures.europa.eu/jobseekers_en",
        "desc": "官方覆盖立陶宛在内的欧洲31国雇主直聘库"
      },
      {
        "title": "LinkedIn 欧洲区域职位搜索",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "按Lithuania城市筛选英语/当地语全职岗位"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "立陶宛 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴立陶宛攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
          "tips": "涉外学历、成绩单及无犯罪记录公证件，建议通过中国外交部或地方外办办理海牙认证 (Apostille)（若目的国为海牙公约成员）。",
          "steps": [
            {
              "title": "申请目标院校并获取正式 Offer",
              "detail": "按学校官网要求提交学历、成绩单及语言证明。"
            },
            {
              "title": "办理公证与海牙认证/双认证",
              "detail": "准备最高学历、出生及无犯罪记录公证。"
            },
            {
              "title": "准备资金担保并递交学生签",
              "detail": "凭立陶宛高校出具的中介编号 (Mediation Letter) 登录立陶宛 MIGRIS 系统在线提交申请，并赴指定受理中心录指纹。"
            },
            {
              "title": "入境注册并办理当地居留卡",
              "detail": "抵境后按当地移民局规定期限办理学生居留卡。"
            }
          ],
          "checklist": [
            "有效护照及签证申请表",
            "目的国院校正式录取通知书 (Offer)",
            "覆盖首年学费与生活费的银行存款证明",
            "最高学历证书、成绩单公证（及海牙认证）",
            "无犯罪记录证明公证及境外学生医疗保险"
          ],
          "processing": "MIGRIS 审理约 1–2 个月",
          "submission": "凭学校中介编号 (mediation letter) 在立陶宛 MIGRIS 系统在线提交并赴 VFS/外部中心录指纹",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先取得立陶宛正规院校正式录取通知书 (Offer) 及符合要求的学费生活费担保，无法无录取直接个人自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "work": [
        {
          "id": "main",
          "title": "立陶宛 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴立陶宛合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
          "tips": "切勿持旅游免签或旅游签证在当地非法打工，务必确保雇主已为你申请正规 Work Permit。",
          "steps": [
            {
              "title": "获得当地合法雇主正式聘用合同",
              "detail": "确认岗位符合当地薪资及外籍雇员配额要求。"
            },
            {
              "title": "雇主向劳动/移民部门申领工作许可",
              "detail": "提供学历公证、无犯罪证明及过往履历。"
            },
            {
              "title": "凭工作许可批文申请入境工作签",
              "detail": "凭立陶宛雇主出具的中介编号 (Mediation Letter) 登录 MIGRIS 移民系统在线提交工作居留并预约录指纹。"
            },
            {
              "title": "入境换领工作居留卡并登记税务",
              "detail": "抵境后完成体检与社保税务注册。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地雇主签署的正式雇佣合同与邀请函",
            "当地官方签发的工作许可批准函 (Work Permit)",
            "最高学历学位公证（及海牙认证）与个人英文简历",
            "无犯罪记录证明公证及指定体检证明"
          ],
          "processing": "MIGRIS 审理约 1–2 个月",
          "submission": "雇主出具中介编号后本人在 MIGRIS 系统在线提交工作居留并预约录指纹",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先获得立陶宛当地合规雇主正式聘用合同，并由雇主向当地劳动或移民部门申领工作许可批文 (Work Permit)，无法无雇主担保个人直接自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "immigration": [
        {
          "id": "main",
          "title": "立陶宛 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问立陶宛官方移民/内政部门网站核对最新永居居住年限、离境限制及语言考核规定。"
            },
            {
              "title": "累积连续合法工作/居留与纳税证明",
              "detail": "确保每年离境天数未超过法定上限。"
            },
            {
              "title": "向当地移民局提交永居申请",
              "detail": "提交税单、住址证明、语言证书（如要求）及无犯罪记录。"
            }
          ],
          "checklist": [
            "有效护照及历年居留卡记录",
            "连续合法居留期间的个人所得税税单与社保记录",
            "稳定的收入或存款资产证明",
            "当地合法居住地址证明（租房合同或房产证）",
            "无犯罪记录证明及当地语言测试证书（如要求）"
          ],
          "processing": "通常需连续合法居留纳税 3–5 年后递交，审理约 3–12 个月",
          "submission": "满足法定居住与语言/纳税年限后向立陶宛当地移民局或内政部门递交永居 (PR) 申请",
          "diySupport": "advisory",
          "advisoryNote": "永久居留通常须先持合法工作、家庭团聚或合规格长期居留许可在立陶宛连续居住并稳定纳税满法定年限（多为 5 年），无法从海外直接一步自助网申；本页提供长期路径规划指引。"
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "立陶宛 短期旅游/访客通道（申根签 · MIGRIS网申）",
          "fee": "90 EUR",
          "desc": "长期工作与留学许可全部通过 MIGRIS 官网在线提交与预约。",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 立陶宛 MIGRIS 官方电子移民系统 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 MIGRIS 官方移民系统 提交申请并缴费（免签国直接填报入境卡）。"
            },
            {
              "title": "获取批文或直接持护照入境",
              "detail": "打印电子签/确认函随身携带乘机。"
            }
          ],
          "checklist": [
            "有效期内中国因私护照（有效期6个月以上）",
            "往返/离境机票预订单",
            "全程酒店预订单（英文版）",
            "官方在线申请表打印件与白底证件照",
            "近6个月银行流水、在职证明及申根/旅行医疗保险"
          ],
          "processing": "15 天",
          "submission": "MIGRIS 官方移民系统",
          "diySupport": "diy"
        }
      ],
      "other": [
        {
          "id": "main",
          "title": "立陶宛 商务考察 / 探亲访友 / 特殊通道",
          "fee": "90 EUR",
          "desc": "涵盖赴立陶宛参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "按立陶宛驻华使领馆或官方签证中心对应商务/探亲清单提交材料，并随身携带邀请方凭证。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ],
          "processing": "短期访问约 5–15 个工作日（免签国即时入境，视具体通道而定）",
          "submission": "凭立陶宛邀请函或亲属关系证明按对应签证中心或免签口岸规则办理",
          "diySupport": "advisory",
          "advisoryNote": "商务考察、探亲访友或长期团聚通常须先取得立陶宛当地邀请方出具的正式邀请函、公司派遣函或亲属关系证明，无法无邀请单纯按常规旅游自由行替代；本页提供通用材料与原则指引。"
        }
      ]
    }
  },
  {
    "id": "196",
    "code": "CYP",
    "nameZh": "塞浦路斯",
    "nameEn": "Cyprus",
    "region": "地中海欧盟 / EUROPE",
    "coords": [
      33.43,
      35.13
    ],
    "badge": "国家旅游签 / 持申根多次免签",
    "tierColor": "#4A7B82",
    "labelPriority": false,
    "processing": "5–10 工作日",
    "submission": "VFS 塞浦路斯中心",
    "summary": "欧盟成员国但暂未入申根；持有有效多次申根签证即可直接免签入境塞浦路斯！",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【遵守申根“主停留国”原则】申根签必须向停留天数最多的国家申请（同天数则向首入国申请），切忌拿A国签证完全不去A国，否则影响后续出签与入境。"
    ],
    "links": [
      {
        "title": "塞浦路斯移民局官网 (MIP)",
        "url": "https://www.mip.gov.cy/",
        "desc": "塞浦路斯内政部移民事务官方门户"
      },
      {
        "title": "塞浦路斯政府官方服务门户",
        "url": "https://www.gov.cy/",
        "desc": "塞浦路斯政府签证、居留与公共服务总入口"
      }
    ],
    "jobLinks": [
      {
        "title": "EURES 欧盟官方跨国就业平台",
        "url": "https://eures.europa.eu/jobseekers_en",
        "desc": "官方覆盖塞浦路斯在内的欧洲31国雇主直聘库"
      },
      {
        "title": "LinkedIn 欧洲区域职位搜索",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "按Cyprus城市筛选英语/当地语全职岗位"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "塞浦路斯 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴塞浦路斯攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
          "tips": "涉外学历、成绩单及无犯罪记录公证件，建议通过中国外交部或地方外办办理海牙认证 (Apostille)（若目的国为海牙公约成员）。",
          "steps": [
            {
              "title": "申请目标院校并获取正式 Offer",
              "detail": "按学校官网要求提交学历、成绩单及语言证明。"
            },
            {
              "title": "办理公证与海牙认证/双认证",
              "detail": "准备最高学历、出生及无犯罪记录公证。"
            },
            {
              "title": "准备资金担保并递交学生签",
              "detail": "按塞浦路斯驻华使领馆/签证中心或官方留学门户要求提交学生签证申请。"
            },
            {
              "title": "入境注册并办理当地居留卡",
              "detail": "抵境后按当地移民局规定期限办理学生居留卡。"
            }
          ],
          "checklist": [
            "有效护照及签证申请表",
            "目的国院校正式录取通知书 (Offer)",
            "覆盖首年学费与生活费的银行存款证明",
            "最高学历证书、成绩单公证（及海牙认证）",
            "无犯罪记录证明公证及境外学生医疗保险"
          ],
          "processing": "约 3–8 周（凭录取信递交学生签审理）",
          "submission": "凭塞浦路斯教育部认可院校正式录取通知书 (Offer) 向驻华使领馆/签证中心或官方学生门户递交",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先取得塞浦路斯正规院校正式录取通知书 (Offer) 及符合要求的学费生活费担保，无法无录取直接个人自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "work": [
        {
          "id": "main",
          "title": "塞浦路斯 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴塞浦路斯合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
          "tips": "切勿持旅游免签或旅游签证在当地非法打工，务必确保雇主已为你申请正规 Work Permit。",
          "steps": [
            {
              "title": "获得当地合法雇主正式聘用合同",
              "detail": "确认岗位符合当地薪资及外籍雇员配额要求。"
            },
            {
              "title": "雇主向劳动/移民部门申领工作许可",
              "detail": "提供学历公证、无犯罪证明及过往履历。"
            },
            {
              "title": "凭工作许可批文申请入境工作签",
              "detail": "凭官方工作许可批准函向塞浦路斯驻华使领馆或签证中心递交入境工作签证。"
            },
            {
              "title": "入境换领工作居留卡并登记税务",
              "detail": "抵境后完成体检与社保税务注册。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地雇主签署的正式雇佣合同与邀请函",
            "当地官方签发的工作许可批准函 (Work Permit)",
            "最高学历学位公证（及海牙认证）与个人英文简历",
            "无犯罪记录证明公证及指定体检证明"
          ],
          "processing": "工作许可预批 3–8 周 + 使领馆/移民局贴签 2–4 周",
          "submission": "雇主先向塞浦路斯劳动/移民部门申领工作许可批文，获批后本人向驻华使领馆或签证中心递交工签",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先获得塞浦路斯当地合规雇主正式聘用合同，并由雇主向当地劳动或移民部门申领工作许可批文 (Work Permit)，无法无雇主担保个人直接自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "immigration": [
        {
          "id": "main",
          "title": "塞浦路斯 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问塞浦路斯官方移民/内政部门网站核对最新永居居住年限、离境限制及语言考核规定。"
            },
            {
              "title": "累积连续合法工作/居留与纳税证明",
              "detail": "确保每年离境天数未超过法定上限。"
            },
            {
              "title": "向当地移民局提交永居申请",
              "detail": "提交税单、住址证明、语言证书（如要求）及无犯罪记录。"
            }
          ],
          "checklist": [
            "有效护照及历年居留卡记录",
            "连续合法居留期间的个人所得税税单与社保记录",
            "稳定的收入或存款资产证明",
            "当地合法居住地址证明（租房合同或房产证）",
            "无犯罪记录证明及当地语言测试证书（如要求）"
          ],
          "processing": "通常需连续合法居留纳税 3–5 年后递交，审理约 3–12 个月",
          "submission": "满足法定居住与语言/纳税年限后向塞浦路斯当地移民局或内政部门递交永居 (PR) 申请",
          "diySupport": "advisory",
          "advisoryNote": "永久居留通常须先持合法工作、家庭团聚或合规格长期居留许可在塞浦路斯连续居住并稳定纳税满法定年限（多为 5 年），无法从海外直接一步自助网申；本页提供长期路径规划指引。"
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "塞浦路斯 短期旅游/访客通道（国家旅游签 / 持申根多次免签）",
          "fee": "90 EUR",
          "desc": "欧盟成员国但暂未入申根；持有有效多次申根签证即可直接免签入境塞浦路斯！",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 塞浦路斯移民局官网 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 VFS 塞浦路斯中心 提交申请并缴费（免签国直接填报入境卡）。"
            },
            {
              "title": "获取批文或直接持护照入境",
              "detail": "打印电子签/确认函随身携带乘机。"
            }
          ],
          "checklist": [
            "有效期内中国因私护照（有效期6个月以上）",
            "往返/离境机票预订单",
            "全程酒店预订单（英文版）",
            "官方在线申请表打印件与白底证件照",
            "近6个月银行流水、在职证明及申根/旅行医疗保险"
          ],
          "processing": "5–10 工作日",
          "submission": "VFS 塞浦路斯中心",
          "diySupport": "diy"
        }
      ],
      "other": [
        {
          "id": "main",
          "title": "塞浦路斯 商务考察 / 探亲访友 / 特殊通道",
          "fee": "90 EUR",
          "desc": "涵盖赴塞浦路斯参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "按塞浦路斯驻华使领馆或官方签证中心对应商务/探亲清单提交材料，并随身携带邀请方凭证。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ],
          "processing": "短期访问约 5–15 个工作日（免签国即时入境，视具体通道而定）",
          "submission": "凭塞浦路斯邀请函或亲属关系证明按对应签证中心或免签口岸规则办理",
          "diySupport": "advisory",
          "advisoryNote": "商务考察、探亲访友或长期团聚通常须先取得塞浦路斯当地邀请方出具的正式邀请函、公司派遣函或亲属关系证明，无法无邀请单纯按常规旅游自由行替代；本页提供通用材料与原则指引。"
        }
      ]
    }
  },
  {
    "id": "070",
    "code": "BIH",
    "nameZh": "波黑",
    "nameEn": "Bosnia & Herzegovina",
    "region": "巴尔干 / EUROPE",
    "coords": [
      17.68,
      43.92
    ],
    "badge": "中波互免90天免签",
    "tierColor": "#789882",
    "labelPriority": false,
    "processing": "免签即时入境",
    "submission": "免签直飞（每180天累计90天）",
    "summary": "中国护照欧洲免签宝藏国！每 180 天内可免签累计停留长达 90 天。",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【遵守申根“主停留国”原则】申根签必须向停留天数最多的国家申请（同天数则向首入国申请），切忌拿A国签证完全不去A国，否则影响后续出签与入境。"
    ],
    "links": [
      {
        "title": "波黑外国人事务局官网",
        "url": "https://sps.gov.ba/?lang=en",
        "desc": "官方签证/入境申请与政策查询入口"
      }
    ],
    "jobLinks": [
      {
        "title": "EURES 欧盟官方跨国就业平台",
        "url": "https://eures.europa.eu/jobseekers_en",
        "desc": "官方覆盖波黑在内的欧洲31国雇主直聘库"
      },
      {
        "title": "LinkedIn 欧洲区域职位搜索",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "按Bosnia & Herzegovina城市筛选英语/当地语全职岗位"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "波黑 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴波黑攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
          "tips": "涉外学历、成绩单及无犯罪记录公证件，建议通过中国外交部或地方外办办理海牙认证 (Apostille)（若目的国为海牙公约成员）。",
          "steps": [
            {
              "title": "申请目标院校并获取正式 Offer",
              "detail": "按学校官网要求提交学历、成绩单及语言证明。"
            },
            {
              "title": "办理公证与海牙认证/双认证",
              "detail": "准备最高学历、出生及无犯罪记录公证。"
            },
            {
              "title": "准备资金担保并递交学生签",
              "detail": "按波黑驻华使领馆/签证中心或官方留学门户要求提交学生签证申请。"
            },
            {
              "title": "入境注册并办理当地居留卡",
              "detail": "抵境后按当地移民局规定期限办理学生居留卡。"
            }
          ],
          "checklist": [
            "有效护照及签证申请表",
            "目的国院校正式录取通知书 (Offer)",
            "覆盖首年学费与生活费的银行存款证明",
            "最高学历证书、成绩单公证（及海牙认证）",
            "无犯罪记录证明公证及境外学生医疗保险"
          ],
          "processing": "约 3–8 周（凭录取信递交学生签审理）",
          "submission": "凭波黑教育部认可院校正式录取通知书 (Offer) 向驻华使领馆/签证中心或官方学生门户递交",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先取得波黑正规院校正式录取通知书 (Offer) 及符合要求的学费生活费担保，无法无录取直接个人自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "work": [
        {
          "id": "main",
          "title": "波黑 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴波黑合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
          "tips": "切勿持旅游免签或旅游签证在当地非法打工，务必确保雇主已为你申请正规 Work Permit。",
          "steps": [
            {
              "title": "获得当地合法雇主正式聘用合同",
              "detail": "确认岗位符合当地薪资及外籍雇员配额要求。"
            },
            {
              "title": "雇主向劳动/移民部门申领工作许可",
              "detail": "提供学历公证、无犯罪证明及过往履历。"
            },
            {
              "title": "凭工作许可批文申请入境工作签",
              "detail": "凭官方工作许可批准函向波黑驻华使领馆或签证中心递交入境工作签证。"
            },
            {
              "title": "入境换领工作居留卡并登记税务",
              "detail": "抵境后完成体检与社保税务注册。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地雇主签署的正式雇佣合同与邀请函",
            "当地官方签发的工作许可批准函 (Work Permit)",
            "最高学历学位公证（及海牙认证）与个人英文简历",
            "无犯罪记录证明公证及指定体检证明"
          ],
          "processing": "工作许可预批 3–8 周 + 使领馆/移民局贴签 2–4 周",
          "submission": "雇主先向波黑劳动/移民部门申领工作许可批文，获批后本人向驻华使领馆或签证中心递交工签",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先获得波黑当地合规雇主正式聘用合同，并由雇主向当地劳动或移民部门申领工作许可批文 (Work Permit)，无法无雇主担保个人直接自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "immigration": [
        {
          "id": "main",
          "title": "波黑 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问波黑官方移民/内政部门网站核对最新永居居住年限、离境限制及语言考核规定。"
            },
            {
              "title": "累积连续合法工作/居留与纳税证明",
              "detail": "确保每年离境天数未超过法定上限。"
            },
            {
              "title": "向当地移民局提交永居申请",
              "detail": "提交税单、住址证明、语言证书（如要求）及无犯罪记录。"
            }
          ],
          "checklist": [
            "有效护照及历年居留卡记录",
            "连续合法居留期间的个人所得税税单与社保记录",
            "稳定的收入或存款资产证明",
            "当地合法居住地址证明（租房合同或房产证）",
            "无犯罪记录证明及当地语言测试证书（如要求）"
          ],
          "processing": "通常需连续合法居留纳税 3–5 年后递交，审理约 3–12 个月",
          "submission": "满足法定居住与语言/纳税年限后向波黑当地移民局或内政部门递交永居 (PR) 申请",
          "diySupport": "advisory",
          "advisoryNote": "永久居留通常须先持合法工作、家庭团聚或合规格长期居留许可在波黑连续居住并稳定纳税满法定年限（多为 5 年），无法从海外直接一步自助网申；本页提供长期路径规划指引。"
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "波黑 短期旅游/访客通道（中波互免90天免签）",
          "fee": "0 元（互免）",
          "desc": "中国护照欧洲免签宝藏国！每 180 天内可免签累计停留长达 90 天。",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 波黑外国人事务局官网 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 免签直飞（每180天累计90天） 提交申请并缴费（免签国直接填报入境卡）。"
            },
            {
              "title": "获取批文或直接持护照入境",
              "detail": "打印电子签/确认函随身携带乘机。"
            }
          ],
          "checklist": [
            "有效期内中国因私护照（有效期6个月以上）",
            "往返/离境机票预订单",
            "全程酒店预订单（英文版）",
            "电子入境卡/健康声明回执（如官网要求）",
            "境外旅行医疗保险单（建议购买）"
          ],
          "processing": "免签即时入境",
          "submission": "免签直飞（每180天累计90天）",
          "diySupport": "diy"
        }
      ],
      "other": [
        {
          "id": "main",
          "title": "波黑 商务考察 / 探亲访友 / 特殊通道",
          "fee": "0 元（互免）",
          "desc": "涵盖赴波黑参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "按波黑驻华使领馆或官方签证中心对应商务/探亲清单提交材料，并随身携带邀请方凭证。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ],
          "processing": "短期访问约 5–15 个工作日（免签国即时入境，视具体通道而定）",
          "submission": "凭波黑邀请函或亲属关系证明按对应签证中心或免签口岸规则办理",
          "diySupport": "advisory",
          "advisoryNote": "商务考察、探亲访友或长期团聚通常须先取得波黑当地邀请方出具的正式邀请函、公司派遣函或亲属关系证明，无法无邀请单纯按常规旅游自由行替代；本页提供通用材料与原则指引。"
        }
      ]
    }
  },
  {
    "id": "008",
    "code": "ALB",
    "nameZh": "阿尔巴尼亚",
    "nameEn": "Albania",
    "region": "巴尔干 / EUROPE",
    "coords": [
      20.17,
      41.15
    ],
    "badge": "中阿互免90天免签",
    "tierColor": "#789882",
    "labelPriority": false,
    "processing": "免签即时入境",
    "submission": "免签直飞（停留90天）",
    "summary": "中国与阿尔巴尼亚实行互免签证，持有效普通护照免签停留 90 天，地中海物价友好。",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【遵守申根“主停留国”原则】申根签必须向停留天数最多的国家申请（同天数则向首入国申请），切忌拿A国签证完全不去A国，否则影响后续出签与入境。"
    ],
    "links": [
      {
        "title": "阿尔巴尼亚官方电子签与免签网",
        "url": "https://e-visa.al/",
        "desc": "官方签证/入境申请与政策查询入口"
      }
    ],
    "jobLinks": [
      {
        "title": "EURES 欧盟官方跨国就业平台",
        "url": "https://eures.europa.eu/jobseekers_en",
        "desc": "官方覆盖阿尔巴尼亚在内的欧洲31国雇主直聘库"
      },
      {
        "title": "LinkedIn 欧洲区域职位搜索",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "按Albania城市筛选英语/当地语全职岗位"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "阿尔巴尼亚 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴阿尔巴尼亚攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
          "tips": "涉外学历、成绩单及无犯罪记录公证件，建议通过中国外交部或地方外办办理海牙认证 (Apostille)（若目的国为海牙公约成员）。",
          "steps": [
            {
              "title": "申请目标院校并获取正式 Offer",
              "detail": "按学校官网要求提交学历、成绩单及语言证明。"
            },
            {
              "title": "办理公证与海牙认证/双认证",
              "detail": "准备最高学历、出生及无犯罪记录公证。"
            },
            {
              "title": "准备资金担保并递交学生签",
              "detail": "按阿尔巴尼亚驻华使领馆/签证中心或官方留学门户要求提交学生签证申请。"
            },
            {
              "title": "入境注册并办理当地居留卡",
              "detail": "抵境后按当地移民局规定期限办理学生居留卡。"
            }
          ],
          "checklist": [
            "有效护照及签证申请表",
            "目的国院校正式录取通知书 (Offer)",
            "覆盖首年学费与生活费的银行存款证明",
            "最高学历证书、成绩单公证（及海牙认证）",
            "无犯罪记录证明公证及境外学生医疗保险"
          ],
          "processing": "约 3–8 周（凭录取信递交学生签审理）",
          "submission": "凭阿尔巴尼亚教育部认可院校正式录取通知书 (Offer) 向驻华使领馆/签证中心或官方学生门户递交",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先取得阿尔巴尼亚正规院校正式录取通知书 (Offer) 及符合要求的学费生活费担保，无法无录取直接个人自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "work": [
        {
          "id": "main",
          "title": "阿尔巴尼亚 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴阿尔巴尼亚合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
          "tips": "切勿持旅游免签或旅游签证在当地非法打工，务必确保雇主已为你申请正规 Work Permit。",
          "steps": [
            {
              "title": "获得当地合法雇主正式聘用合同",
              "detail": "确认岗位符合当地薪资及外籍雇员配额要求。"
            },
            {
              "title": "雇主向劳动/移民部门申领工作许可",
              "detail": "提供学历公证、无犯罪证明及过往履历。"
            },
            {
              "title": "凭工作许可批文申请入境工作签",
              "detail": "凭官方工作许可批准函向阿尔巴尼亚驻华使领馆或签证中心递交入境工作签证。"
            },
            {
              "title": "入境换领工作居留卡并登记税务",
              "detail": "抵境后完成体检与社保税务注册。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地雇主签署的正式雇佣合同与邀请函",
            "当地官方签发的工作许可批准函 (Work Permit)",
            "最高学历学位公证（及海牙认证）与个人英文简历",
            "无犯罪记录证明公证及指定体检证明"
          ],
          "processing": "工作许可预批 3–8 周 + 使领馆/移民局贴签 2–4 周",
          "submission": "雇主先向阿尔巴尼亚劳动/移民部门申领工作许可批文，获批后本人向驻华使领馆或签证中心递交工签",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先获得阿尔巴尼亚当地合规雇主正式聘用合同，并由雇主向当地劳动或移民部门申领工作许可批文 (Work Permit)，无法无雇主担保个人直接自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "immigration": [
        {
          "id": "main",
          "title": "阿尔巴尼亚 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问阿尔巴尼亚官方移民/内政部门网站核对最新永居居住年限、离境限制及语言考核规定。"
            },
            {
              "title": "累积连续合法工作/居留与纳税证明",
              "detail": "确保每年离境天数未超过法定上限。"
            },
            {
              "title": "向当地移民局提交永居申请",
              "detail": "提交税单、住址证明、语言证书（如要求）及无犯罪记录。"
            }
          ],
          "checklist": [
            "有效护照及历年居留卡记录",
            "连续合法居留期间的个人所得税税单与社保记录",
            "稳定的收入或存款资产证明",
            "当地合法居住地址证明（租房合同或房产证）",
            "无犯罪记录证明及当地语言测试证书（如要求）"
          ],
          "processing": "通常需连续合法居留纳税 3–5 年后递交，审理约 3–12 个月",
          "submission": "满足法定居住与语言/纳税年限后向阿尔巴尼亚当地移民局或内政部门递交永居 (PR) 申请",
          "diySupport": "advisory",
          "advisoryNote": "永久居留通常须先持合法工作、家庭团聚或合规格长期居留许可在阿尔巴尼亚连续居住并稳定纳税满法定年限（多为 5 年），无法从海外直接一步自助网申；本页提供长期路径规划指引。"
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "阿尔巴尼亚 短期旅游/访客通道（中阿互免90天免签）",
          "fee": "0 元（互免）",
          "desc": "中国与阿尔巴尼亚实行互免签证，持有效普通护照免签停留 90 天，地中海物价友好。",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 阿尔巴尼亚官方电子签与免签网 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 免签直飞（停留90天） 提交申请并缴费（免签国直接填报入境卡）。"
            },
            {
              "title": "获取批文或直接持护照入境",
              "detail": "打印电子签/确认函随身携带乘机。"
            }
          ],
          "checklist": [
            "有效期内中国因私护照（有效期6个月以上）",
            "往返/离境机票预订单",
            "全程酒店预订单（英文版）",
            "电子入境卡/健康声明回执（如官网要求）",
            "境外旅行医疗保险单（建议购买）"
          ],
          "processing": "免签即时入境",
          "submission": "免签直飞（停留90天）",
          "diySupport": "diy"
        }
      ],
      "other": [
        {
          "id": "main",
          "title": "阿尔巴尼亚 商务考察 / 探亲访友 / 特殊通道",
          "fee": "0 元（互免）",
          "desc": "涵盖赴阿尔巴尼亚参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "按阿尔巴尼亚驻华使领馆或官方签证中心对应商务/探亲清单提交材料，并随身携带邀请方凭证。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ],
          "processing": "短期访问约 5–15 个工作日（免签国即时入境，视具体通道而定）",
          "submission": "凭阿尔巴尼亚邀请函或亲属关系证明按对应签证中心或免签口岸规则办理",
          "diySupport": "advisory",
          "advisoryNote": "商务考察、探亲访友或长期团聚通常须先取得阿尔巴尼亚当地邀请方出具的正式邀请函、公司派遣函或亲属关系证明，无法无邀请单纯按常规旅游自由行替代；本页提供通用材料与原则指引。"
        }
      ]
    }
  },
  {
    "id": "499",
    "code": "MNE",
    "nameZh": "黑山",
    "nameEn": "Montenegro",
    "region": "巴尔干 / EUROPE",
    "coords": [
      19.37,
      42.71
    ],
    "badge": "持美/英/申根签免签30天",
    "tierColor": "#4A7B82",
    "labelPriority": false,
    "processing": "5–10 工作日",
    "submission": "持发达国家签免签 / 领馆",
    "summary": "持有有效美签、英签、爱尔兰或申根多次签证的中国公民，可直接免签入境黑山停留 30 天！",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【遵守申根“主停留国”原则】申根签必须向停留天数最多的国家申请（同天数则向首入国申请），切忌拿A国签证完全不去A国，否则影响后续出签与入境。"
    ],
    "links": [
      {
        "title": "黑山外交部官网",
        "url": "https://www.gov.me/en/mfa",
        "desc": "官方签证/入境申请与政策查询入口"
      }
    ],
    "jobLinks": [
      {
        "title": "EURES 欧盟官方跨国就业平台",
        "url": "https://eures.europa.eu/jobseekers_en",
        "desc": "官方覆盖黑山在内的欧洲31国雇主直聘库"
      },
      {
        "title": "LinkedIn 欧洲区域职位搜索",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "按Montenegro城市筛选英语/当地语全职岗位"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "黑山 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴黑山攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
          "tips": "涉外学历、成绩单及无犯罪记录公证件，建议通过中国外交部或地方外办办理海牙认证 (Apostille)（若目的国为海牙公约成员）。",
          "steps": [
            {
              "title": "申请目标院校并获取正式 Offer",
              "detail": "按学校官网要求提交学历、成绩单及语言证明。"
            },
            {
              "title": "办理公证与海牙认证/双认证",
              "detail": "准备最高学历、出生及无犯罪记录公证。"
            },
            {
              "title": "准备资金担保并递交学生签",
              "detail": "按黑山驻华使领馆/签证中心或官方留学门户要求提交学生签证申请。"
            },
            {
              "title": "入境注册并办理当地居留卡",
              "detail": "抵境后按当地移民局规定期限办理学生居留卡。"
            }
          ],
          "checklist": [
            "有效护照及签证申请表",
            "目的国院校正式录取通知书 (Offer)",
            "覆盖首年学费与生活费的银行存款证明",
            "最高学历证书、成绩单公证（及海牙认证）",
            "无犯罪记录证明公证及境外学生医疗保险"
          ],
          "processing": "约 3–8 周（凭录取信递交学生签审理）",
          "submission": "凭黑山教育部认可院校正式录取通知书 (Offer) 向驻华使领馆/签证中心或官方学生门户递交",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先取得黑山正规院校正式录取通知书 (Offer) 及符合要求的学费生活费担保，无法无录取直接个人自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "work": [
        {
          "id": "main",
          "title": "黑山 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴黑山合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
          "tips": "切勿持旅游免签或旅游签证在当地非法打工，务必确保雇主已为你申请正规 Work Permit。",
          "steps": [
            {
              "title": "获得当地合法雇主正式聘用合同",
              "detail": "确认岗位符合当地薪资及外籍雇员配额要求。"
            },
            {
              "title": "雇主向劳动/移民部门申领工作许可",
              "detail": "提供学历公证、无犯罪证明及过往履历。"
            },
            {
              "title": "凭工作许可批文申请入境工作签",
              "detail": "凭官方工作许可批准函向黑山驻华使领馆或签证中心递交入境工作签证。"
            },
            {
              "title": "入境换领工作居留卡并登记税务",
              "detail": "抵境后完成体检与社保税务注册。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地雇主签署的正式雇佣合同与邀请函",
            "当地官方签发的工作许可批准函 (Work Permit)",
            "最高学历学位公证（及海牙认证）与个人英文简历",
            "无犯罪记录证明公证及指定体检证明"
          ],
          "processing": "工作许可预批 3–8 周 + 使领馆/移民局贴签 2–4 周",
          "submission": "雇主先向黑山劳动/移民部门申领工作许可批文，获批后本人向驻华使领馆或签证中心递交工签",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先获得黑山当地合规雇主正式聘用合同，并由雇主向当地劳动或移民部门申领工作许可批文 (Work Permit)，无法无雇主担保个人直接自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "immigration": [
        {
          "id": "main",
          "title": "黑山 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问黑山官方移民/内政部门网站核对最新永居居住年限、离境限制及语言考核规定。"
            },
            {
              "title": "累积连续合法工作/居留与纳税证明",
              "detail": "确保每年离境天数未超过法定上限。"
            },
            {
              "title": "向当地移民局提交永居申请",
              "detail": "提交税单、住址证明、语言证书（如要求）及无犯罪记录。"
            }
          ],
          "checklist": [
            "有效护照及历年居留卡记录",
            "连续合法居留期间的个人所得税税单与社保记录",
            "稳定的收入或存款资产证明",
            "当地合法居住地址证明（租房合同或房产证）",
            "无犯罪记录证明及当地语言测试证书（如要求）"
          ],
          "processing": "通常需连续合法居留纳税 3–5 年后递交，审理约 3–12 个月",
          "submission": "满足法定居住与语言/纳税年限后向黑山当地移民局或内政部门递交永居 (PR) 申请",
          "diySupport": "advisory",
          "advisoryNote": "永久居留通常须先持合法工作、家庭团聚或合规格长期居留许可在黑山连续居住并稳定纳税满法定年限（多为 5 年），无法从海外直接一步自助网申；本页提供长期路径规划指引。"
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "黑山 短期旅游/访客通道（持美/英/申根签免签30天）",
          "fee": "35 EUR（免签除外）",
          "desc": "持有有效美签、英签、爱尔兰或申根多次签证的中国公民，可直接免签入境黑山停留 30 天！",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 黑山外交部官网 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 持发达国家签免签 / 领馆 提交申请并缴费（免签国直接填报入境卡）。"
            },
            {
              "title": "获取批文或直接持护照入境",
              "detail": "打印电子签/确认函随身携带乘机。"
            }
          ],
          "checklist": [
            "有效期内中国因私护照（有效期6个月以上）",
            "往返/离境机票预订单",
            "全程酒店预订单（英文版）",
            "官方在线申请表打印件与白底证件照",
            "近6个月银行流水、在职证明及申根/旅行医疗保险"
          ],
          "processing": "5–10 工作日",
          "submission": "持发达国家签免签 / 领馆",
          "diySupport": "diy"
        }
      ],
      "other": [
        {
          "id": "main",
          "title": "黑山 商务考察 / 探亲访友 / 特殊通道",
          "fee": "35 EUR（免签除外）",
          "desc": "涵盖赴黑山参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "按黑山驻华使领馆或官方签证中心对应商务/探亲清单提交材料，并随身携带邀请方凭证。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ],
          "processing": "短期访问约 5–15 个工作日（免签国即时入境，视具体通道而定）",
          "submission": "凭黑山邀请函或亲属关系证明按对应签证中心或免签口岸规则办理",
          "diySupport": "advisory",
          "advisoryNote": "商务考察、探亲访友或长期团聚通常须先取得黑山当地邀请方出具的正式邀请函、公司派遣函或亲属关系证明，无法无邀请单纯按常规旅游自由行替代；本页提供通用材料与原则指引。"
        }
      ]
    }
  },
  {
    "id": "807",
    "code": "MKD",
    "nameZh": "北马其顿",
    "nameEn": "North Macedonia",
    "region": "巴尔干 / EUROPE",
    "coords": [
      21.75,
      41.61
    ],
    "badge": "持美/加/英/申根签免签15天",
    "tierColor": "#4A7B82",
    "labelPriority": false,
    "processing": "5–10 工作日",
    "submission": "持有效申根/美签免签 / 领馆",
    "summary": "持有有效美、加、英或申根 C 类多次签证者可直接免签入境停留最长 15 天。",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【遵守申根“主停留国”原则】申根签必须向停留天数最多的国家申请（同天数则向首入国申请），切忌拿A国签证完全不去A国，否则影响后续出签与入境。"
    ],
    "links": [
      {
        "title": "北马其顿外交部官网",
        "url": "https://www.mfa.gov.mk/",
        "desc": "官方签证/入境申请与政策查询入口"
      }
    ],
    "jobLinks": [
      {
        "title": "EURES 欧盟官方跨国就业平台",
        "url": "https://eures.europa.eu/jobseekers_en",
        "desc": "官方覆盖北马其顿在内的欧洲31国雇主直聘库"
      },
      {
        "title": "LinkedIn 欧洲区域职位搜索",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "按North Macedonia城市筛选英语/当地语全职岗位"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "北马其顿 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴北马其顿攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
          "tips": "涉外学历、成绩单及无犯罪记录公证件，建议通过中国外交部或地方外办办理海牙认证 (Apostille)（若目的国为海牙公约成员）。",
          "steps": [
            {
              "title": "申请目标院校并获取正式 Offer",
              "detail": "按学校官网要求提交学历、成绩单及语言证明。"
            },
            {
              "title": "办理公证与海牙认证/双认证",
              "detail": "准备最高学历、出生及无犯罪记录公证。"
            },
            {
              "title": "准备资金担保并递交学生签",
              "detail": "按北马其顿驻华使领馆/签证中心或官方留学门户要求提交学生签证申请。"
            },
            {
              "title": "入境注册并办理当地居留卡",
              "detail": "抵境后按当地移民局规定期限办理学生居留卡。"
            }
          ],
          "checklist": [
            "有效护照及签证申请表",
            "目的国院校正式录取通知书 (Offer)",
            "覆盖首年学费与生活费的银行存款证明",
            "最高学历证书、成绩单公证（及海牙认证）",
            "无犯罪记录证明公证及境外学生医疗保险"
          ],
          "processing": "约 3–8 周（凭录取信递交学生签审理）",
          "submission": "凭北马其顿教育部认可院校正式录取通知书 (Offer) 向驻华使领馆/签证中心或官方学生门户递交",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先取得北马其顿正规院校正式录取通知书 (Offer) 及符合要求的学费生活费担保，无法无录取直接个人自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "work": [
        {
          "id": "main",
          "title": "北马其顿 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴北马其顿合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
          "tips": "切勿持旅游免签或旅游签证在当地非法打工，务必确保雇主已为你申请正规 Work Permit。",
          "steps": [
            {
              "title": "获得当地合法雇主正式聘用合同",
              "detail": "确认岗位符合当地薪资及外籍雇员配额要求。"
            },
            {
              "title": "雇主向劳动/移民部门申领工作许可",
              "detail": "提供学历公证、无犯罪证明及过往履历。"
            },
            {
              "title": "凭工作许可批文申请入境工作签",
              "detail": "凭官方工作许可批准函向北马其顿驻华使领馆或签证中心递交入境工作签证。"
            },
            {
              "title": "入境换领工作居留卡并登记税务",
              "detail": "抵境后完成体检与社保税务注册。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地雇主签署的正式雇佣合同与邀请函",
            "当地官方签发的工作许可批准函 (Work Permit)",
            "最高学历学位公证（及海牙认证）与个人英文简历",
            "无犯罪记录证明公证及指定体检证明"
          ],
          "processing": "工作许可预批 3–8 周 + 使领馆/移民局贴签 2–4 周",
          "submission": "雇主先向北马其顿劳动/移民部门申领工作许可批文，获批后本人向驻华使领馆或签证中心递交工签",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先获得北马其顿当地合规雇主正式聘用合同，并由雇主向当地劳动或移民部门申领工作许可批文 (Work Permit)，无法无雇主担保个人直接自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "immigration": [
        {
          "id": "main",
          "title": "北马其顿 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问北马其顿官方移民/内政部门网站核对最新永居居住年限、离境限制及语言考核规定。"
            },
            {
              "title": "累积连续合法工作/居留与纳税证明",
              "detail": "确保每年离境天数未超过法定上限。"
            },
            {
              "title": "向当地移民局提交永居申请",
              "detail": "提交税单、住址证明、语言证书（如要求）及无犯罪记录。"
            }
          ],
          "checklist": [
            "有效护照及历年居留卡记录",
            "连续合法居留期间的个人所得税税单与社保记录",
            "稳定的收入或存款资产证明",
            "当地合法居住地址证明（租房合同或房产证）",
            "无犯罪记录证明及当地语言测试证书（如要求）"
          ],
          "processing": "通常需连续合法居留纳税 3–5 年后递交，审理约 3–12 个月",
          "submission": "满足法定居住与语言/纳税年限后向北马其顿当地移民局或内政部门递交永居 (PR) 申请",
          "diySupport": "advisory",
          "advisoryNote": "永久居留通常须先持合法工作、家庭团聚或合规格长期居留许可在北马其顿连续居住并稳定纳税满法定年限（多为 5 年），无法从海外直接一步自助网申；本页提供长期路径规划指引。"
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "北马其顿 短期旅游/访客通道（持美/加/英/申根签免签15天）",
          "fee": "60 EUR（免签除外）",
          "desc": "持有有效美、加、英或申根 C 类多次签证者可直接免签入境停留最长 15 天。",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 北马其顿外交部官网 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 持有效申根/美签免签 / 领馆 提交申请并缴费（免签国直接填报入境卡）。"
            },
            {
              "title": "获取批文或直接持护照入境",
              "detail": "打印电子签/确认函随身携带乘机。"
            }
          ],
          "checklist": [
            "有效期内中国因私护照（有效期6个月以上）",
            "往返/离境机票预订单",
            "全程酒店预订单（英文版）",
            "官方在线申请表打印件与白底证件照",
            "近6个月银行流水、在职证明及申根/旅行医疗保险"
          ],
          "processing": "5–10 工作日",
          "submission": "持有效申根/美签免签 / 领馆",
          "diySupport": "diy"
        }
      ],
      "other": [
        {
          "id": "main",
          "title": "北马其顿 商务考察 / 探亲访友 / 特殊通道",
          "fee": "60 EUR（免签除外）",
          "desc": "涵盖赴北马其顿参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "按北马其顿驻华使领馆或官方签证中心对应商务/探亲清单提交材料，并随身携带邀请方凭证。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ],
          "processing": "短期访问约 5–15 个工作日（免签国即时入境，视具体通道而定）",
          "submission": "凭北马其顿邀请函或亲属关系证明按对应签证中心或免签口岸规则办理",
          "diySupport": "advisory",
          "advisoryNote": "商务考察、探亲访友或长期团聚通常须先取得北马其顿当地邀请方出具的正式邀请函、公司派遣函或亲属关系证明，无法无邀请单纯按常规旅游自由行替代；本页提供通用材料与原则指引。"
        }
      ]
    }
  },
  {
    "id": "498",
    "code": "MDA",
    "nameZh": "摩尔多瓦",
    "nameEn": "Moldova",
    "region": "东欧 / EUROPE",
    "coords": [
      28.37,
      47.41
    ],
    "badge": "e-Visa 电子签",
    "tierColor": "#4A7B82",
    "labelPriority": false,
    "processing": "5–10 工作日",
    "submission": "evisa.gov.md 官方网申",
    "summary": "支持在线申请电子签证，持有效欧盟/申根/美/英长居卡也可免签入境。",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【遵守申根“主停留国”原则】申根签必须向停留天数最多的国家申请（同天数则向首入国申请），切忌拿A国签证完全不去A国，否则影响后续出签与入境。"
    ],
    "links": [
      {
        "title": "摩尔多瓦官方电子签门户",
        "url": "https://www.evisa.gov.md/",
        "desc": "官方签证/入境申请与政策查询入口"
      }
    ],
    "jobLinks": [
      {
        "title": "EURES 欧盟官方跨国就业平台",
        "url": "https://eures.europa.eu/jobseekers_en",
        "desc": "官方覆盖摩尔多瓦在内的欧洲31国雇主直聘库"
      },
      {
        "title": "LinkedIn 欧洲区域职位搜索",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "按Moldova城市筛选英语/当地语全职岗位"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "摩尔多瓦 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴摩尔多瓦攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
          "tips": "涉外学历、成绩单及无犯罪记录公证件，建议通过中国外交部或地方外办办理海牙认证 (Apostille)（若目的国为海牙公约成员）。",
          "steps": [
            {
              "title": "申请目标院校并获取正式 Offer",
              "detail": "按学校官网要求提交学历、成绩单及语言证明。"
            },
            {
              "title": "办理公证与海牙认证/双认证",
              "detail": "准备最高学历、出生及无犯罪记录公证。"
            },
            {
              "title": "准备资金担保并递交学生签",
              "detail": "按摩尔多瓦驻华使领馆/签证中心或官方留学门户要求提交学生签证申请。"
            },
            {
              "title": "入境注册并办理当地居留卡",
              "detail": "抵境后按当地移民局规定期限办理学生居留卡。"
            }
          ],
          "checklist": [
            "有效护照及签证申请表",
            "目的国院校正式录取通知书 (Offer)",
            "覆盖首年学费与生活费的银行存款证明",
            "最高学历证书、成绩单公证（及海牙认证）",
            "无犯罪记录证明公证及境外学生医疗保险"
          ],
          "processing": "约 3–8 周（凭录取信递交学生签审理）",
          "submission": "凭摩尔多瓦教育部认可院校正式录取通知书 (Offer) 向驻华使领馆/签证中心或官方学生门户递交",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先取得摩尔多瓦正规院校正式录取通知书 (Offer) 及符合要求的学费生活费担保，无法无录取直接个人自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "work": [
        {
          "id": "main",
          "title": "摩尔多瓦 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴摩尔多瓦合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
          "tips": "切勿持旅游免签或旅游签证在当地非法打工，务必确保雇主已为你申请正规 Work Permit。",
          "steps": [
            {
              "title": "获得当地合法雇主正式聘用合同",
              "detail": "确认岗位符合当地薪资及外籍雇员配额要求。"
            },
            {
              "title": "雇主向劳动/移民部门申领工作许可",
              "detail": "提供学历公证、无犯罪证明及过往履历。"
            },
            {
              "title": "凭工作许可批文申请入境工作签",
              "detail": "凭官方工作许可批准函向摩尔多瓦驻华使领馆或签证中心递交入境工作签证。"
            },
            {
              "title": "入境换领工作居留卡并登记税务",
              "detail": "抵境后完成体检与社保税务注册。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地雇主签署的正式雇佣合同与邀请函",
            "当地官方签发的工作许可批准函 (Work Permit)",
            "最高学历学位公证（及海牙认证）与个人英文简历",
            "无犯罪记录证明公证及指定体检证明"
          ],
          "processing": "工作许可预批 3–8 周 + 使领馆/移民局贴签 2–4 周",
          "submission": "雇主先向摩尔多瓦劳动/移民部门申领工作许可批文，获批后本人向驻华使领馆或签证中心递交工签",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先获得摩尔多瓦当地合规雇主正式聘用合同，并由雇主向当地劳动或移民部门申领工作许可批文 (Work Permit)，无法无雇主担保个人直接自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "immigration": [
        {
          "id": "main",
          "title": "摩尔多瓦 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问摩尔多瓦官方移民/内政部门网站核对最新永居居住年限、离境限制及语言考核规定。"
            },
            {
              "title": "累积连续合法工作/居留与纳税证明",
              "detail": "确保每年离境天数未超过法定上限。"
            },
            {
              "title": "向当地移民局提交永居申请",
              "detail": "提交税单、住址证明、语言证书（如要求）及无犯罪记录。"
            }
          ],
          "checklist": [
            "有效护照及历年居留卡记录",
            "连续合法居留期间的个人所得税税单与社保记录",
            "稳定的收入或存款资产证明",
            "当地合法居住地址证明（租房合同或房产证）",
            "无犯罪记录证明及当地语言测试证书（如要求）"
          ],
          "processing": "通常需连续合法居留纳税 3–5 年后递交，审理约 3–12 个月",
          "submission": "满足法定居住与语言/纳税年限后向摩尔多瓦当地移民局或内政部门递交永居 (PR) 申请",
          "diySupport": "advisory",
          "advisoryNote": "永久居留通常须先持合法工作、家庭团聚或合规格长期居留许可在摩尔多瓦连续居住并稳定纳税满法定年限（多为 5 年），无法从海外直接一步自助网申；本页提供长期路径规划指引。"
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "摩尔多瓦 短期旅游/访客通道（e-Visa 电子签）",
          "fee": "40 EUR",
          "desc": "支持在线申请电子签证，持有效欧盟/申根/美/英长居卡也可免签入境。",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 摩尔多瓦官方电子签门户 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 evisa.gov.md 官方网申 提交申请并缴费（免签国直接填报入境卡）。"
            },
            {
              "title": "获取批文或直接持护照入境",
              "detail": "打印电子签/确认函随身携带乘机。"
            }
          ],
          "checklist": [
            "有效期内中国因私护照（有效期6个月以上）",
            "往返/离境机票预订单",
            "全程酒店预订单（英文版）",
            "官方在线申请表打印件与白底证件照",
            "境外旅行医疗保险单（建议购买）"
          ],
          "processing": "5–10 工作日",
          "submission": "evisa.gov.md 官方网申",
          "diySupport": "diy"
        }
      ],
      "other": [
        {
          "id": "main",
          "title": "摩尔多瓦 商务考察 / 探亲访友 / 特殊通道",
          "fee": "40 EUR",
          "desc": "涵盖赴摩尔多瓦参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "按摩尔多瓦驻华使领馆或官方签证中心对应商务/探亲清单提交材料，并随身携带邀请方凭证。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ],
          "processing": "短期访问约 5–15 个工作日（免签国即时入境，视具体通道而定）",
          "submission": "凭摩尔多瓦邀请函或亲属关系证明按对应签证中心或免签口岸规则办理",
          "diySupport": "advisory",
          "advisoryNote": "商务考察、探亲访友或长期团聚通常须先取得摩尔多瓦当地邀请方出具的正式邀请函、公司派遣函或亲属关系证明，无法无邀请单纯按常规旅游自由行替代；本页提供通用材料与原则指引。"
        }
      ]
    }
  },
  {
    "id": "112",
    "code": "BLR",
    "nameZh": "白俄罗斯",
    "nameEn": "Belarus",
    "region": "东欧 / EUROPE",
    "coords": [
      27.95,
      53.71
    ],
    "badge": "中白互免30天免签",
    "tierColor": "#789882",
    "labelPriority": false,
    "processing": "免签即时入境",
    "submission": "免签入境（每次30天）",
    "summary": "中国普通护照免签入境白俄罗斯，每次可停留不超过 30 天（一年累计不超过 90 天）。",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【遵守申根“主停留国”原则】申根签必须向停留天数最多的国家申请（同天数则向首入国申请），切忌拿A国签证完全不去A国，否则影响后续出签与入境。"
    ],
    "links": [
      {
        "title": "白俄罗斯外交部签证官网",
        "url": "https://mfa.gov.by/en/visa/",
        "desc": "官方签证/入境申请与政策查询入口"
      }
    ],
    "jobLinks": [
      {
        "title": "EURES 欧盟官方跨国就业平台",
        "url": "https://eures.europa.eu/jobseekers_en",
        "desc": "官方覆盖白俄罗斯在内的欧洲31国雇主直聘库"
      },
      {
        "title": "LinkedIn 欧洲区域职位搜索",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "按Belarus城市筛选英语/当地语全职岗位"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "白俄罗斯 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴白俄罗斯攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
          "tips": "涉外学历、成绩单及无犯罪记录公证件，建议通过中国外交部或地方外办办理海牙认证 (Apostille)（若目的国为海牙公约成员）。",
          "steps": [
            {
              "title": "申请目标院校并获取正式 Offer",
              "detail": "按学校官网要求提交学历、成绩单及语言证明。"
            },
            {
              "title": "办理公证与海牙认证/双认证",
              "detail": "准备最高学历、出生及无犯罪记录公证。"
            },
            {
              "title": "准备资金担保并递交学生签",
              "detail": "按白俄罗斯驻华使领馆/签证中心或官方留学门户要求提交学生签证申请。"
            },
            {
              "title": "入境注册并办理当地居留卡",
              "detail": "抵境后按当地移民局规定期限办理学生居留卡。"
            }
          ],
          "checklist": [
            "有效护照及签证申请表",
            "目的国院校正式录取通知书 (Offer)",
            "覆盖首年学费与生活费的银行存款证明",
            "最高学历证书、成绩单公证（及海牙认证）",
            "无犯罪记录证明公证及境外学生医疗保险"
          ],
          "processing": "约 3–8 周（凭录取信递交学生签审理）",
          "submission": "凭白俄罗斯教育部认可院校正式录取通知书 (Offer) 向驻华使领馆/签证中心或官方学生门户递交",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先取得白俄罗斯正规院校正式录取通知书 (Offer) 及符合要求的学费生活费担保，无法无录取直接个人自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "work": [
        {
          "id": "main",
          "title": "白俄罗斯 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴白俄罗斯合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
          "tips": "切勿持旅游免签或旅游签证在当地非法打工，务必确保雇主已为你申请正规 Work Permit。",
          "steps": [
            {
              "title": "获得当地合法雇主正式聘用合同",
              "detail": "确认岗位符合当地薪资及外籍雇员配额要求。"
            },
            {
              "title": "雇主向劳动/移民部门申领工作许可",
              "detail": "提供学历公证、无犯罪证明及过往履历。"
            },
            {
              "title": "凭工作许可批文申请入境工作签",
              "detail": "凭官方工作许可批准函向白俄罗斯驻华使领馆或签证中心递交入境工作签证。"
            },
            {
              "title": "入境换领工作居留卡并登记税务",
              "detail": "抵境后完成体检与社保税务注册。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地雇主签署的正式雇佣合同与邀请函",
            "当地官方签发的工作许可批准函 (Work Permit)",
            "最高学历学位公证（及海牙认证）与个人英文简历",
            "无犯罪记录证明公证及指定体检证明"
          ],
          "processing": "工作许可预批 3–8 周 + 使领馆/移民局贴签 2–4 周",
          "submission": "雇主先向白俄罗斯劳动/移民部门申领工作许可批文，获批后本人向驻华使领馆或签证中心递交工签",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先获得白俄罗斯当地合规雇主正式聘用合同，并由雇主向当地劳动或移民部门申领工作许可批文 (Work Permit)，无法无雇主担保个人直接自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "immigration": [
        {
          "id": "main",
          "title": "白俄罗斯 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问白俄罗斯官方移民/内政部门网站核对最新永居居住年限、离境限制及语言考核规定。"
            },
            {
              "title": "累积连续合法工作/居留与纳税证明",
              "detail": "确保每年离境天数未超过法定上限。"
            },
            {
              "title": "向当地移民局提交永居申请",
              "detail": "提交税单、住址证明、语言证书（如要求）及无犯罪记录。"
            }
          ],
          "checklist": [
            "有效护照及历年居留卡记录",
            "连续合法居留期间的个人所得税税单与社保记录",
            "稳定的收入或存款资产证明",
            "当地合法居住地址证明（租房合同或房产证）",
            "无犯罪记录证明及当地语言测试证书（如要求）"
          ],
          "processing": "通常需连续合法居留纳税 3–5 年后递交，审理约 3–12 个月",
          "submission": "满足法定居住与语言/纳税年限后向白俄罗斯当地移民局或内政部门递交永居 (PR) 申请",
          "diySupport": "advisory",
          "advisoryNote": "永久居留通常须先持合法工作、家庭团聚或合规格长期居留许可在白俄罗斯连续居住并稳定纳税满法定年限（多为 5 年），无法从海外直接一步自助网申；本页提供长期路径规划指引。"
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "白俄罗斯 短期旅游/访客通道（中白互免30天免签）",
          "fee": "0 元（互免）",
          "desc": "中国普通护照免签入境白俄罗斯，每次可停留不超过 30 天（一年累计不超过 90 天）。",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 白俄罗斯外交部签证官网 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 免签入境（每次30天） 提交申请并缴费（免签国直接填报入境卡）。"
            },
            {
              "title": "获取批文或直接持护照入境",
              "detail": "打印电子签/确认函随身携带乘机。"
            }
          ],
          "checklist": [
            "有效期内中国因私护照（有效期6个月以上）",
            "往返/离境机票预订单",
            "全程酒店预订单（英文版）",
            "电子入境卡/健康声明回执（如官网要求）",
            "境外旅行医疗保险单（建议购买）"
          ],
          "processing": "免签即时入境",
          "submission": "免签入境（每次30天）",
          "diySupport": "diy"
        }
      ],
      "other": [
        {
          "id": "main",
          "title": "白俄罗斯 商务考察 / 探亲访友 / 特殊通道",
          "fee": "0 元（互免）",
          "desc": "涵盖赴白俄罗斯参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "按白俄罗斯驻华使领馆或官方签证中心对应商务/探亲清单提交材料，并随身携带邀请方凭证。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ],
          "processing": "短期访问约 5–15 个工作日（免签国即时入境，视具体通道而定）",
          "submission": "凭白俄罗斯邀请函或亲属关系证明按对应签证中心或免签口岸规则办理",
          "diySupport": "advisory",
          "advisoryNote": "商务考察、探亲访友或长期团聚通常须先取得白俄罗斯当地邀请方出具的正式邀请函、公司派遣函或亲属关系证明，无法无邀请单纯按常规旅游自由行替代；本页提供通用材料与原则指引。"
        }
      ]
    }
  },
  {
    "id": "804",
    "code": "UKR",
    "nameZh": "乌克兰",
    "nameEn": "Ukraine",
    "region": "东欧 / EUROPE",
    "coords": [
      31.17,
      48.38
    ],
    "badge": "e-Visa / 使馆签证",
    "tierColor": "#4A7B82",
    "labelPriority": false,
    "processing": "3–9 工作日",
    "submission": "evisa.mfa.gov.ua 官网",
    "summary": "支持通过外交部官方 e-Visa 平台查询最新受理状态与入境须知（出行前务必关注安全通告）。",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【遵守申根“主停留国”原则】申根签必须向停留天数最多的国家申请（同天数则向首入国申请），切忌拿A国签证完全不去A国，否则影响后续出签与入境。"
    ],
    "links": [
      {
        "title": "乌克兰外交部官方 e-Visa",
        "url": "https://evisa.mfa.gov.ua/",
        "desc": "官方签证/入境申请与政策查询入口"
      }
    ],
    "jobLinks": [
      {
        "title": "EURES 欧盟官方跨国就业平台",
        "url": "https://eures.europa.eu/jobseekers_en",
        "desc": "官方覆盖乌克兰在内的欧洲31国雇主直聘库"
      },
      {
        "title": "LinkedIn 欧洲区域职位搜索",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "按Ukraine城市筛选英语/当地语全职岗位"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "乌克兰 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴乌克兰攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
          "tips": "涉外学历、成绩单及无犯罪记录公证件，建议通过中国外交部或地方外办办理海牙认证 (Apostille)（若目的国为海牙公约成员）。",
          "steps": [
            {
              "title": "申请目标院校并获取正式 Offer",
              "detail": "按学校官网要求提交学历、成绩单及语言证明。"
            },
            {
              "title": "办理公证与海牙认证/双认证",
              "detail": "准备最高学历、出生及无犯罪记录公证。"
            },
            {
              "title": "准备资金担保并递交学生签",
              "detail": "按乌克兰驻华使领馆/签证中心或官方留学门户要求提交学生签证申请。"
            },
            {
              "title": "入境注册并办理当地居留卡",
              "detail": "抵境后按当地移民局规定期限办理学生居留卡。"
            }
          ],
          "checklist": [
            "有效护照及签证申请表",
            "目的国院校正式录取通知书 (Offer)",
            "覆盖首年学费与生活费的银行存款证明",
            "最高学历证书、成绩单公证（及海牙认证）",
            "无犯罪记录证明公证及境外学生医疗保险"
          ],
          "processing": "约 3–8 周（凭录取信递交学生签审理）",
          "submission": "凭乌克兰教育部认可院校正式录取通知书 (Offer) 向驻华使领馆/签证中心或官方学生门户递交",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先取得乌克兰正规院校正式录取通知书 (Offer) 及符合要求的学费生活费担保，无法无录取直接个人自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "work": [
        {
          "id": "main",
          "title": "乌克兰 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴乌克兰合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
          "tips": "切勿持旅游免签或旅游签证在当地非法打工，务必确保雇主已为你申请正规 Work Permit。",
          "steps": [
            {
              "title": "获得当地合法雇主正式聘用合同",
              "detail": "确认岗位符合当地薪资及外籍雇员配额要求。"
            },
            {
              "title": "雇主向劳动/移民部门申领工作许可",
              "detail": "提供学历公证、无犯罪证明及过往履历。"
            },
            {
              "title": "凭工作许可批文申请入境工作签",
              "detail": "凭官方工作许可批准函向乌克兰驻华使领馆或签证中心递交入境工作签证。"
            },
            {
              "title": "入境换领工作居留卡并登记税务",
              "detail": "抵境后完成体检与社保税务注册。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地雇主签署的正式雇佣合同与邀请函",
            "当地官方签发的工作许可批准函 (Work Permit)",
            "最高学历学位公证（及海牙认证）与个人英文简历",
            "无犯罪记录证明公证及指定体检证明"
          ],
          "processing": "工作许可预批 3–8 周 + 使领馆/移民局贴签 2–4 周",
          "submission": "雇主先向乌克兰劳动/移民部门申领工作许可批文，获批后本人向驻华使领馆或签证中心递交工签",
          "diySupport": "advisory",
          "advisoryNote": "该通道须先获得乌克兰当地合规雇主正式聘用合同，并由雇主向当地劳动或移民部门申领工作许可批文 (Work Permit)，无法无雇主担保个人直接自助网申；本页提供通用材料与原则指引。"
        }
      ],
      "immigration": [
        {
          "id": "main",
          "title": "乌克兰 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问乌克兰官方移民/内政部门网站核对最新永居居住年限、离境限制及语言考核规定。"
            },
            {
              "title": "累积连续合法工作/居留与纳税证明",
              "detail": "确保每年离境天数未超过法定上限。"
            },
            {
              "title": "向当地移民局提交永居申请",
              "detail": "提交税单、住址证明、语言证书（如要求）及无犯罪记录。"
            }
          ],
          "checklist": [
            "有效护照及历年居留卡记录",
            "连续合法居留期间的个人所得税税单与社保记录",
            "稳定的收入或存款资产证明",
            "当地合法居住地址证明（租房合同或房产证）",
            "无犯罪记录证明及当地语言测试证书（如要求）"
          ],
          "processing": "通常需连续合法居留纳税 3–5 年后递交，审理约 3–12 个月",
          "submission": "满足法定居住与语言/纳税年限后向乌克兰当地移民局或内政部门递交永居 (PR) 申请",
          "diySupport": "advisory",
          "advisoryNote": "永久居留通常须先持合法工作、家庭团聚或合规格长期居留许可在乌克兰连续居住并稳定纳税满法定年限（多为 5 年），无法从海外直接一步自助网申；本页提供长期路径规划指引。"
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "乌克兰 短期旅游/访客通道（e-Visa / 使馆签证）",
          "fee": "20–30 USD",
          "desc": "支持通过外交部官方 e-Visa 平台查询最新受理状态与入境须知（出行前务必关注安全通告）。",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 乌克兰外交部官方 e-Visa 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 evisa.mfa.gov.ua 官网 提交申请并缴费（免签国直接填报入境卡）。"
            },
            {
              "title": "获取批文或直接持护照入境",
              "detail": "打印电子签/确认函随身携带乘机。"
            }
          ],
          "checklist": [
            "有效期内中国因私护照（有效期6个月以上）",
            "往返/离境机票预订单",
            "全程酒店预订单（英文版）",
            "官方在线申请表打印件与白底证件照",
            "境外旅行医疗保险单（建议购买）"
          ],
          "processing": "3–9 工作日",
          "submission": "evisa.mfa.gov.ua 官网",
          "diySupport": "advisory",
          "advisoryNote": "受当前地区安全局势影响，电子签开放状态、口岸通行条件及入境邀请核验可能动态调整，出行前务必向乌克兰驻华使馆确认最新公告并评估安全风险。"
        }
      ],
      "other": [
        {
          "id": "main",
          "title": "乌克兰 商务考察 / 探亲访友 / 特殊通道",
          "fee": "20–30 USD",
          "desc": "涵盖赴乌克兰参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "按乌克兰驻华使领馆或官方签证中心对应商务/探亲清单提交材料，并随身携带邀请方凭证。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ],
          "processing": "短期访问约 5–15 个工作日（免签国即时入境，视具体通道而定）",
          "submission": "凭乌克兰邀请函或亲属关系证明按对应签证中心或免签口岸规则办理",
          "diySupport": "advisory",
          "advisoryNote": "商务考察、探亲访友或长期团聚通常须先取得乌克兰当地邀请方出具的正式邀请函、公司派遣函或亲属关系证明，无法无邀请单纯按常规旅游自由行替代；本页提供通用材料与原则指引。"
        }
      ]
    }
  }
];
