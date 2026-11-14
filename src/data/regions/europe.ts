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
          ]
        }
      ],
      "work": [
        {
          "id": "sub_0",
          "title": "Skilled Worker 技术工签",
          "fee": "769–1,519 GBP + 1,035 GBP/年 IHS",
          "desc": "【Skilled Worker 技术工签】需获持牌雇主签发 CoS 担保证书且满足薪资与英语 B1 要求；Global Talent 无需雇主担保。",
          "tips": "特定受监管行业需提供国内无犯罪记录证明公证件。",
          "steps": [
            {
              "title": "雇主分配 CoS 担保证书",
              "detail": "核对 SOC 代码与年薪。"
            },
            {
              "title": "GOV.UK 网申并缴纳 IHS",
              "detail": "关联 CoS 编号。"
            },
            {
              "title": "VFS 录指纹等待下签",
              "detail": "标准约 3 周。"
            }
          ],
          "checklist": [
            "有效护照",
            "CoS 编号及担保详情",
            "英语 UKVI 证明",
            "TB 肺结核报告",
            "无犯罪证明（特定职业）"
          ]
        },
        {
          "id": "sub_1",
          "title": "Global Talent",
          "fee": "769–1,519 GBP + 1,035 GBP/年 IHS",
          "desc": "【Global Talent】需获持牌雇主签发 CoS 担保证书且满足薪资与英语 B1 要求；Global Talent 无需雇主担保。",
          "tips": "特定受监管行业需提供国内无犯罪记录证明公证件。",
          "steps": [
            {
              "title": "雇主分配 CoS 担保证书",
              "detail": "核对 SOC 代码与年薪。"
            },
            {
              "title": "GOV.UK 网申并缴纳 IHS",
              "detail": "关联 CoS 编号。"
            },
            {
              "title": "VFS 录指纹等待下签",
              "detail": "标准约 3 周。"
            }
          ],
          "checklist": [
            "有效护照",
            "CoS 编号及担保详情",
            "英语 UKVI 证明",
            "TB 肺结核报告",
            "无犯罪证明（特定职业）"
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
          ]
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
          ]
        }
      ],
      "other": [
        {
          "id": "sub_0",
          "title": "探亲访友",
          "fee": "127 GBP / 880 GBP (PSW)",
          "desc": "【探亲访友】探亲走 Standard Visitor 并附在英亲友邀请与住址证明；英国本硕毕业生可境内直申 2–3 年 PSW。",
          "tips": "探亲须提供邀请人 eVisa Share Code 及英国水电账单或租房合同。",
          "steps": [
            {
              "title": "明确探亲或境内 PSW 通道",
              "detail": "毕业生用手机 App 扫护照境内网申。"
            },
            {
              "title": "上传邀请方身份或毕业证明",
              "detail": "录指纹等待电子批复。"
            }
          ],
          "checklist": [
            "有效护照",
            "在英亲友邀请函与 eVisa Share Code",
            "英国住址账单/租房合同",
            "亲属关系证明及翻译",
            "银行流水"
          ]
        },
        {
          "id": "sub_1",
          "title": "毕业生工签 (PSW)",
          "fee": "127 GBP / 880 GBP (PSW)",
          "desc": "【毕业生工签 (PSW)】探亲走 Standard Visitor 并附在英亲友邀请与住址证明；英国本硕毕业生可境内直申 2–3 年 PSW。",
          "tips": "探亲须提供邀请人 eVisa Share Code 及英国水电账单或租房合同。",
          "steps": [
            {
              "title": "明确探亲或境内 PSW 通道",
              "detail": "毕业生用手机 App 扫护照境内网申。"
            },
            {
              "title": "上传邀请方身份或毕业证明",
              "detail": "录指纹等待电子批复。"
            }
          ],
          "checklist": [
            "有效护照",
            "在英亲友邀请函与 eVisa Share Code",
            "英国住址账单/租房合同",
            "亲属关系证明及翻译",
            "银行流水"
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
          ]
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
          ]
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
          ]
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
          ]
        }
      ],
      "immigration": [
        {
          "id": "sub_0",
          "title": "德国永居",
          "fee": "113–147 EUR",
          "desc": "【德国永居】蓝卡交养老保险满 27 个月（德语 B1 仅需 21 个月！）即可申永居；入籍年限已缩至 5 年。",
          "tips": "保持连续养老保险缴纳与合法租房面积达标。",
          "steps": [
            {
              "title": "累计养老保险缴纳月数",
              "detail": "蓝卡21/27个月，普通工签36个月。"
            },
            {
              "title": "考取德语 B1 与生活知识测试",
              "detail": "取得合格证书。"
            },
            {
              "title": "向当地外管局递交申请",
              "detail": "提交税单、工资单与租房合同。"
            }
          ],
          "checklist": [
            "护照与居留卡",
            "养老保险缴纳记录",
            "近6个月工资单与在职证明",
            "租房合同",
            "德语 B1 与 Leben in Deutschland 证书"
          ]
        },
        {
          "id": "sub_1",
          "title": "5年入籍新政",
          "fee": "113–147 EUR",
          "desc": "【5年入籍新政】蓝卡交养老保险满 27 个月（德语 B1 仅需 21 个月！）即可申永居；入籍年限已缩至 5 年。",
          "tips": "保持连续养老保险缴纳与合法租房面积达标。",
          "steps": [
            {
              "title": "累计养老保险缴纳月数",
              "detail": "蓝卡21/27个月，普通工签36个月。"
            },
            {
              "title": "考取德语 B1 与生活知识测试",
              "detail": "取得合格证书。"
            },
            {
              "title": "向当地外管局递交申请",
              "detail": "提交税单、工资单与租房合同。"
            }
          ],
          "checklist": [
            "护照与居留卡",
            "养老保险缴纳记录",
            "近6个月工资单与在职证明",
            "租房合同",
            "德语 B1 与 Leben in Deutschland 证书"
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
          ]
        }
      ],
      "other": [
        {
          "id": "sub_0",
          "title": "家庭团聚",
          "fee": "75 EUR / 90 EUR",
          "desc": "【家庭团聚】配偶子女团聚可在 digital.diplo.de 预审；蓝卡持有者的配偶可完全豁免德语 A1 要求！",
          "tips": "结婚证/出生证公证需办理外交部海牙认证 (Apostille)。",
          "steps": [
            {
              "title": "办理海牙认证公证件",
              "detail": "准备婚姻或出生证明。"
            },
            {
              "title": "digital.diplo.de 上传预审并递签",
              "detail": "核验原件后贴发入境 D 签。"
            }
          ],
          "checklist": [
            "护照与申请表",
            "海牙认证结婚/出生公证",
            "德方配偶居留卡与住址收入证明",
            "德语 A1（蓝卡配偶豁免）"
          ]
        },
        {
          "id": "sub_1",
          "title": "商务申根签",
          "fee": "75 EUR / 90 EUR",
          "desc": "【商务申根签】配偶子女团聚可在 digital.diplo.de 预审；蓝卡持有者的配偶可完全豁免德语 A1 要求！",
          "tips": "结婚证/出生证公证需办理外交部海牙认证 (Apostille)。",
          "steps": [
            {
              "title": "办理海牙认证公证件",
              "detail": "准备婚姻或出生证明。"
            },
            {
              "title": "digital.diplo.de 上传预审并递签",
              "detail": "核验原件后贴发入境 D 签。"
            }
          ],
          "checklist": [
            "护照与申请表",
            "海牙认证结婚/出生公证",
            "德方配偶居留卡与住址收入证明",
            "德语 A1（蓝卡配偶豁免）"
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
          ]
        }
      ],
      "work": [
        {
          "id": "sub_0",
          "title": "Passeport Talent 人才居留",
          "fee": "99 EUR",
          "desc": "【Passeport Talent 人才居留】高薪或硕士以上受聘可申最长4年人才居留（配偶直接获合法工作权）；普通工签需先办工作许可。",
          "tips": "法国硕士毕业可先申 1 年 RECE 求职居留。",
          "steps": [
            {
              "title": "雇主申请工作许可/准备高薪合同",
              "detail": "确认人才居留资格。"
            },
            {
              "title": "France-Visas 填表并赴 TLS 递交",
              "detail": "携带合同与学历公证。"
            }
          ],
          "checklist": [
            "护照与申请表",
            "工作许可或人才护照证明",
            "正式劳动合同",
            "学历公证与简历"
          ]
        },
        {
          "id": "sub_1",
          "title": "工签",
          "fee": "99 EUR",
          "desc": "【工签】高薪或硕士以上受聘可申最长4年人才居留（配偶直接获合法工作权）；普通工签需先办工作许可。",
          "tips": "法国硕士毕业可先申 1 年 RECE 求职居留。",
          "steps": [
            {
              "title": "雇主申请工作许可/准备高薪合同",
              "detail": "确认人才居留资格。"
            },
            {
              "title": "France-Visas 填表并赴 TLS 递交",
              "detail": "携带合同与学历公证。"
            }
          ],
          "checklist": [
            "护照与申请表",
            "工作许可或人才护照证明",
            "正式劳动合同",
            "学历公证与简历"
          ]
        }
      ],
      "immigration": [
        {
          "id": "sub_0",
          "title": "十年长居卡",
          "fee": "225 EUR",
          "desc": "【十年长居卡】连续合法居住纳税满 5 年（法国硕士毕业仅需工作满 2 年即可入籍！）且法语达标即可申请。",
          "tips": "务必保留每年法国个人所得税税单 (Avis d'imposition)。",
          "steps": [
            {
              "title": "考取法语 DELF B1/B2",
              "detail": "整理近3–5年报税单。"
            },
            {
              "title": "向警察局 (Préfecture) 递交",
              "detail": "线上预约交材料。"
            }
          ],
          "checklist": [
            "护照与居留卡",
            "历年法国税单",
            "法语 B1/B2 证书",
            "工资单与住址账单"
          ]
        },
        {
          "id": "sub_1",
          "title": "法国入籍",
          "fee": "225 EUR",
          "desc": "【法国入籍】连续合法居住纳税满 5 年（法国硕士毕业仅需工作满 2 年即可入籍！）且法语达标即可申请。",
          "tips": "务必保留每年法国个人所得税税单 (Avis d'imposition)。",
          "steps": [
            {
              "title": "考取法语 DELF B1/B2",
              "detail": "整理近3–5年报税单。"
            },
            {
              "title": "向警察局 (Préfecture) 递交",
              "detail": "线上预约交材料。"
            }
          ],
          "checklist": [
            "护照与居留卡",
            "历年法国税单",
            "法语 B1/B2 证书",
            "工资单与住址账单"
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
          ]
        }
      ],
      "other": [
        {
          "id": "sub_0",
          "title": "探亲访友",
          "fee": "90 EUR",
          "desc": "【探亲访友】借住亲友家需法方去市政府开《接待证明》原件；住酒店按普通旅游签办理即可。",
          "tips": "商务签需法方正式邀请函。",
          "steps": [
            {
              "title": "确认住宿方式（酒店免接待证明）",
              "detail": "备齐邀请函或关系证明。"
            },
            {
              "title": "TLScontact 递签",
              "detail": "等待出签。"
            }
          ],
          "checklist": [
            "护照、申请表与保险",
            "市政府接待证明原件或酒店订单",
            "邀请人身份证明",
            "流水与在职证明"
          ]
        },
        {
          "id": "sub_1",
          "title": "商务申根签",
          "fee": "90 EUR",
          "desc": "【商务申根签】借住亲友家需法方去市政府开《接待证明》原件；住酒店按普通旅游签办理即可。",
          "tips": "商务签需法方正式邀请函。",
          "steps": [
            {
              "title": "确认住宿方式（酒店免接待证明）",
              "detail": "备齐邀请函或关系证明。"
            },
            {
              "title": "TLScontact 递签",
              "detail": "等待出签。"
            }
          ],
          "checklist": [
            "护照、申请表与保险",
            "市政府接待证明原件或酒店订单",
            "邀请人身份证明",
            "流水与在职证明"
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
          ]
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
          ]
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
          ]
        }
      ],
      "immigration": [
        {
          "id": "sub_0",
          "title": "Stamp 4 永居",
          "fee": "300 EUR / 1,125 EUR (入籍)",
          "desc": "【Stamp 4 永居】CSEP 满2年或 GEP 满5年转 Stamp 4；任意工作居留满5年即可申入籍，无需语言考试！",
          "tips": "每年务必保留税单、银行账单与水电网账单凑满居住积分。",
          "steps": [
            {
              "title": "转 Stamp 4 并住满5年 (1825天)",
              "detail": "整理每年150分地址证明。"
            },
            {
              "title": "ISD 在线递交入籍申请",
              "detail": "上传税单与居住佐证。"
            }
          ],
          "checklist": [
            "护照与历年 IRP 卡",
            "税务局 EDS 税单",
            "每年地址与银行账单",
            "出生与无犯罪公证"
          ]
        },
        {
          "id": "sub_1",
          "title": "5年免语言入籍",
          "fee": "300 EUR / 1,125 EUR (入籍)",
          "desc": "【5年免语言入籍】CSEP 满2年或 GEP 满5年转 Stamp 4；任意工作居留满5年即可申入籍，无需语言考试！",
          "tips": "每年务必保留税单、银行账单与水电网账单凑满居住积分。",
          "steps": [
            {
              "title": "转 Stamp 4 并住满5年 (1825天)",
              "detail": "整理每年150分地址证明。"
            },
            {
              "title": "ISD 在线递交入籍申请",
              "detail": "上传税单与居住佐证。"
            }
          ],
          "checklist": [
            "护照与历年 IRP 卡",
            "税务局 EDS 税单",
            "每年地址与银行账单",
            "出生与无犯罪公证"
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
          ]
        }
      ],
      "other": [
        {
          "id": "sub_0",
          "title": "CSEP 配偶团聚",
          "fee": "60 EUR",
          "desc": "【CSEP 配偶团聚】CSEP 关键技能工签配偶可同步递交团聚 D 签并直接合法全职工作。",
          "tips": "结婚证须办海牙认证。",
          "steps": [
            {
              "title": "办理海牙认证关系证明",
              "detail": "AVATS 填表送交 VFS。"
            }
          ],
          "checklist": [
            "护照与 AVATS 表",
            "邀请人 IRP 卡/合同",
            "海牙认证结婚证/出生证",
            "资金证明"
          ]
        },
        {
          "id": "sub_1",
          "title": "探亲商务",
          "fee": "60 EUR",
          "desc": "【探亲商务】CSEP 关键技能工签配偶可同步递交团聚 D 签并直接合法全职工作。",
          "tips": "结婚证须办海牙认证。",
          "steps": [
            {
              "title": "办理海牙认证关系证明",
              "detail": "AVATS 填表送交 VFS。"
            }
          ],
          "checklist": [
            "护照与 AVATS 表",
            "邀请人 IRP 卡/合同",
            "海牙认证结婚证/出生证",
            "资金证明"
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
        "url": "https://vistoperitalia.esteri.it/home/en",
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
              "detail": "通过 意大利外交部官方签证指南 或当地使领馆递交留学签证申请。"
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
          ]
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
              "detail": "通过 VFS Global 意大利签证中心 提交贴签或电子签申请。"
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
          ]
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
              "detail": "访问 VFS 意大利签证中心 查询最新永居条例。"
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
          ]
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
          ]
        }
      ],
      "other": [
        {
          "id": "main",
          "title": "意大利 商务考察 / 探亲访友 / 特殊通道",
          "fee": "90 EUR + 服务费",
          "desc": "涵盖赴意大利参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "参考 意大利外交部官方签证指南 官方清单完成填报。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
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
              "detail": "通过 西班牙外交部签证官网 或当地使领馆递交留学签证申请。"
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
          ]
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
              "detail": "通过 BLS Spain 签证中心 提交贴签或电子签申请。"
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
          ]
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
              "detail": "访问 BLS 西班牙签证中心 查询最新永居条例。"
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
          ]
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
          ]
        }
      ],
      "other": [
        {
          "id": "main",
          "title": "西班牙 商务考察 / 探亲访友 / 特殊通道",
          "fee": "90 EUR（短签）/ 80 EUR（长签）",
          "desc": "涵盖赴西班牙参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "参考 西班牙外交部签证官网 官方清单完成填报。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
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
              "detail": "通过 葡萄牙外交部官方签证门户 或当地使领馆递交留学签证申请。"
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
          ]
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
              "detail": "通过 VFS Portugal 签证中心 提交贴签或电子签申请。"
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
          ]
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
              "detail": "访问 VFS 葡萄牙签证中心 查询最新永居条例。"
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
          ]
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
          ]
        }
      ],
      "other": [
        {
          "id": "main",
          "title": "葡萄牙 商务考察 / 探亲访友 / 特殊通道",
          "fee": "90 EUR + VFS服务费",
          "desc": "涵盖赴葡萄牙参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "参考 葡萄牙外交部官方签证门户 官方清单完成填报。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
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
              "detail": "通过 荷兰政府官方签证门户 或当地使领馆递交留学签证申请。"
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
          ]
        }
      ],
      "work": [
        {
          "id": "main",
          "title": "荷兰 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴荷兰合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
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
              "detail": "通过 TLScontact / IND 移民局 提交贴签或电子签申请。"
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
              "detail": "访问 荷兰移民局 (IND) 查询最新永居条例。"
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
          ]
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
          ]
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
              "detail": "参考 荷兰政府官方签证门户 官方清单完成填报。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ]
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
        "url": "https://www.sem.admin.ch/sem/en/home.html",
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
              "detail": "通过 瑞士官方电子签证门户 或当地使领馆递交留学签证申请。"
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
          ]
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
              "detail": "通过 TLScontact 中智瑞签 提交贴签或电子签申请。"
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
          ]
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
              "detail": "访问 瑞士联邦移民局 (SEM) 查询最新永居条例。"
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
          ]
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
          ]
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
              "detail": "参考 瑞士官方电子签证门户 官方清单完成填报。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ]
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
        "title": "奥地利外交部入境与居留官网",
        "url": "https://www.bmeia.gv.at/en/travel-stay/entrance-and-residence-in-austria/",
        "desc": "官方签证/入境申请与政策查询入口"
      },
      {
        "title": "奥地利红白红卡官方移民网",
        "url": "https://www.migration.gv.at/en/",
        "desc": "官方移民局/使领馆/签证中心官网"
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
              "detail": "通过 奥地利外交部入境与居留官网 或当地使领馆递交留学签证申请。"
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
          ]
        }
      ],
      "work": [
        {
          "id": "main",
          "title": "奥地利 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴奥地利合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
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
              "detail": "通过 VFS Austria 签证中心 提交贴签或电子签申请。"
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
              "detail": "访问 奥地利红白红卡官方移民网 查询最新永居条例。"
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
          ]
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
          ]
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
              "detail": "参考 奥地利外交部入境与居留官网 官方清单完成填报。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ]
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
              "detail": "通过 比利时移民局 (IBZ) 或当地使领馆递交留学签证申请。"
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
          ]
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
              "detail": "通过 Visa-On-Web + TLScontact 提交贴签或电子签申请。"
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
          ]
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
              "detail": "访问 TLScontact 比利时签证中心 查询最新永居条例。"
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
          ]
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
          ]
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
              "detail": "参考 比利时移民局 (IBZ) 官方清单完成填报。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ]
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
              "detail": "通过 瑞典移民局 (Migrationsverket) 或当地使领馆递交留学签证申请。"
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
          ]
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
              "detail": "通过 Migrationsverket / VFS 提交贴签或电子签申请。"
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
          ]
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
              "detail": "访问 VFS 瑞典签证中心 查询最新永居条例。"
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
          ]
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
          ]
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
              "detail": "参考 瑞典移民局 (Migrationsverket) 官方清单完成填报。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ]
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
              "detail": "通过 挪威移民局 (UDI) 官网 或当地使领馆递交留学签证申请。"
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
          ]
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
              "detail": "通过 UDI 挪威移民局 + VFS 提交贴签或电子签申请。"
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
          ]
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
              "detail": "访问 VFS 挪威签证中心 查询最新永居条例。"
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
          ]
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
          ]
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
              "detail": "参考 挪威移民局 (UDI) 官网 官方清单完成填报。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ]
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
              "detail": "通过 丹麦移民局官方门户 (Ny i Danmark) 或当地使领馆递交留学签证申请。"
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
          ]
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
              "detail": "通过 ApplyVisa / SIRI + VFS 提交贴签或电子签申请。"
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
          ]
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
              "detail": "访问 VFS 丹麦签证中心 查询最新永居条例。"
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
          ]
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
          ]
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
              "detail": "参考 丹麦移民局官方门户 (Ny i Danmark) 官方清单完成填报。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ]
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
              "detail": "通过 芬兰移民局 (Migri) 官网 或当地使领馆递交留学签证申请。"
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
          ]
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
              "detail": "通过 Enter Finland / VFS 提交贴签或电子签申请。"
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
          ]
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
              "detail": "访问 Enter Finland 在线申请系统 查询最新永居条例。"
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
          ]
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
          ]
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
              "detail": "参考 芬兰移民局 (Migri) 官网 官方清单完成填报。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ]
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
              "detail": "通过 希腊外交部签证指南 或当地使领馆递交留学签证申请。"
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
          ]
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
              "detail": "通过 GVCW 希腊签证中心 提交贴签或电子签申请。"
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
          ]
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
              "detail": "访问 GVCW 中国希腊签证中心 查询最新永居条例。"
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
          ]
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
          ]
        }
      ],
      "other": [
        {
          "id": "main",
          "title": "希腊 商务考察 / 探亲访友 / 特殊通道",
          "fee": "90 EUR + 服务费",
          "desc": "涵盖赴希腊参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "参考 希腊外交部签证指南 官方清单完成填报。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
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
              "detail": "通过 波兰外交部 e-Konsulat 系统 或当地使领馆递交留学签证申请。"
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
          ]
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
              "detail": "通过 e-Konsulat / VFS Poland 提交贴签或电子签申请。"
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
          ]
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
              "detail": "访问 VFS 波兰签证中心 查询最新永居条例。"
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
          ]
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
          ]
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
              "detail": "参考 波兰外交部 e-Konsulat 系统 官方清单完成填报。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ]
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
              "detail": "通过 捷克外交部外国人签证官网 或当地使领馆递交留学签证申请。"
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
          ]
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
              "detail": "通过 VFS Czech Republic 提交贴签或电子签申请。"
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
          ]
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
              "detail": "访问 VFS 捷克签证中心 查询最新永居条例。"
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
          ]
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
          ]
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
              "detail": "参考 捷克外交部外国人签证官网 官方清单完成填报。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ]
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
              "detail": "通过 匈牙利领事服务官网 或当地使领馆递交留学签证申请。"
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
          ]
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
              "detail": "通过 VFS Hungary / 使领馆 提交贴签或电子签申请。"
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
          ]
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
              "detail": "访问 VFS 匈牙利签证中心 查询最新永居条例。"
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
          ]
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
          ]
        }
      ],
      "other": [
        {
          "id": "main",
          "title": "匈牙利 商务考察 / 探亲访友 / 特殊通道",
          "fee": "90 EUR + VFS服务费",
          "desc": "涵盖赴匈牙利参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "参考 匈牙利领事服务官网 官方清单完成填报。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
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
    "badge": "统一电子签 e-Visa",
    "tierColor": "#4A7B82",
    "labelPriority": false,
    "processing": "4 个自然日",
    "submission": "evisa.kdmid.ru 全在线网申",
    "summary": "中国公民可在 evisa.kdmid.ru 自行上传护照与照片申请统一电子签，无需邀请函与酒店担保，4天必出签，可停留16天！",
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
        "desc": "官方签证/入境申请与政策查询入口"
      },
      {
        "title": "俄罗斯电子签说明与口岸",
        "url": "https://electronic-visa.kdmid.ru/index_en.html",
        "desc": "官方移民局/使领馆/签证中心官网"
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
              "detail": "通过 俄罗斯外交部统一电子签官网 或当地使领馆递交留学签证申请。"
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
          ]
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
              "detail": "通过 evisa.kdmid.ru 全在线网申 提交贴签或电子签申请。"
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
          ]
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
              "detail": "访问 俄罗斯电子签说明与口岸 查询最新永居条例。"
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
          ]
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "俄罗斯 短期旅游/访客通道（统一电子签 e-Visa）",
          "fee": "约 52 USD",
          "desc": "中国公民可在 evisa.kdmid.ru 自行上传护照与照片申请统一电子签，无需邀请函与酒店担保，4天必出签，可停留16天！",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 俄罗斯外交部统一电子签官网 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 evisa.kdmid.ru 全在线网申 提交申请并缴费（免签国直接填报入境卡）。"
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
          ]
        }
      ],
      "other": [
        {
          "id": "main",
          "title": "俄罗斯 商务考察 / 探亲访友 / 特殊通道",
          "fee": "约 52 USD",
          "desc": "涵盖赴俄罗斯参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "参考 俄罗斯外交部统一电子签官网 官方清单完成填报。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
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
              "detail": "通过 塞尔维亚官方外国人门户 或当地使领馆递交留学签证申请。"
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
          ]
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
              "detail": "通过 免签直飞 / Welcome to Serbia 提交贴签或电子签申请。"
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
          ]
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
              "detail": "访问 塞尔维亚外交部官网 查询最新永居条例。"
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
          ]
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
          ]
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
              "detail": "参考 塞尔维亚官方外国人门户 官方清单完成填报。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ]
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
              "detail": "通过 冰岛移民局官网 (UTL) 或当地使领馆递交留学签证申请。"
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
          ]
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
              "detail": "通过 VFS 冰岛签证中心 提交贴签或电子签申请。"
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
          ]
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
              "detail": "访问 VFS 冰岛签证中心 查询最新永居条例。"
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
          ]
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
          ]
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
              "detail": "参考 冰岛移民局官网 (UTL) 官方清单完成填报。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ]
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
              "detail": "通过 卢森堡政府移民官方指南 或当地使领馆递交留学签证申请。"
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
          ]
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
              "detail": "通过 VFS / 卢森堡驻华使领馆 提交贴签或电子签申请。"
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
          ]
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
              "detail": "访问 卢森堡政府移民官方指南 查询最新永居条例。"
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
          ]
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
          ]
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
              "detail": "参考 卢森堡政府移民官方指南 官方清单完成填报。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ]
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
              "detail": "通过 克罗地亚内政部外国人居留网 或当地使领馆递交留学签证申请。"
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
          ]
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
              "detail": "通过 VFS 克罗地亚签证中心 提交贴签或电子签申请。"
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
          ]
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
              "detail": "访问 VFS 克罗地亚中心 查询最新永居条例。"
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
          ]
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
          ]
        }
      ],
      "other": [
        {
          "id": "main",
          "title": "克罗地亚 商务考察 / 探亲访友 / 特殊通道",
          "fee": "90 EUR + VFS服务费",
          "desc": "涵盖赴克罗地亚参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "参考 克罗地亚内政部外国人居留网 官方清单完成填报。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
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
              "detail": "通过 保加利亚外交部签证官网 或当地使领馆递交留学签证申请。"
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
          ]
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
              "detail": "通过 保加利亚驻华使领馆 / VFS 提交贴签或电子签申请。"
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
          ]
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
              "detail": "访问 保加利亚外交部签证官网 查询最新永居条例。"
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
          ]
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "保加利亚 短期旅游/访客通道（申根签（空中/海路已入申根））",
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
          ]
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
              "detail": "参考 保加利亚外交部签证官网 官方清单完成填报。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ]
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
              "detail": "通过 罗马尼亚外交部 eVisa 官网 或当地使领馆递交留学签证申请。"
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
          ]
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
              "detail": "通过 evisa.mae.ro 官方在线填表 提交贴签或电子签申请。"
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
          ]
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
              "detail": "访问 罗马尼亚外交部 eVisa 官网 查询最新永居条例。"
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
          ]
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
          ]
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
              "detail": "参考 罗马尼亚外交部 eVisa 官网 官方清单完成填报。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ]
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
              "detail": "通过 斯洛伐克官方电子签证表 或当地使领馆递交留学签证申请。"
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
          ]
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
              "detail": "通过 ezov.mzv.sk + 使领馆 提交贴签或电子签申请。"
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
          ]
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
              "detail": "访问 斯洛伐克官方电子签证表 查询最新永居条例。"
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
          ]
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
          ]
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
              "detail": "参考 斯洛伐克官方电子签证表 官方清单完成填报。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ]
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
              "detail": "通过 斯洛文尼亚政府入境居留网 或当地使领馆递交留学签证申请。"
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
          ]
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
              "detail": "通过 VFS / 斯洛文尼亚使馆 提交贴签或电子签申请。"
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
          ]
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
              "detail": "访问 斯洛文尼亚政府入境居留网 查询最新永居条例。"
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
          ]
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
          ]
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
              "detail": "参考 斯洛文尼亚政府入境居留网 官方清单完成填报。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ]
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
              "detail": "通过 爱沙尼亚警察与边防局 (PPA) 或当地使领馆递交留学签证申请。"
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
          ]
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
              "detail": "通过 爱沙尼亚官方系统 / VFS 提交贴签或电子签申请。"
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
          ]
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
              "detail": "访问 爱沙尼亚警察与边防局 (PPA) 查询最新永居条例。"
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
          ]
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
          ]
        }
      ],
      "other": [
        {
          "id": "main",
          "title": "爱沙尼亚 商务考察 / 探亲访友 / 特殊通道",
          "fee": "90 EUR",
          "desc": "涵盖赴爱沙尼亚参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "参考 爱沙尼亚警察与边防局 (PPA) 官方清单完成填报。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
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
              "detail": "通过 拉脱维亚公民与移民局 (OCMA) 或当地使领馆递交留学签证申请。"
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
          ]
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
              "detail": "通过 VFS 拉脱维亚中心 提交贴签或电子签申请。"
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
          ]
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
              "detail": "访问 拉脱维亚公民与移民局 (OCMA) 查询最新永居条例。"
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
          ]
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
          ]
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
              "detail": "参考 拉脱维亚公民与移民局 (OCMA) 官方清单完成填报。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ]
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
              "detail": "通过 立陶宛 MIGRIS 官方电子移民系统 或当地使领馆递交留学签证申请。"
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
          ]
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
              "detail": "通过 MIGRIS 官方移民系统 提交贴签或电子签申请。"
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
          ]
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
              "detail": "访问 立陶宛 MIGRIS 官方电子移民系统 查询最新永居条例。"
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
          ]
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
          ]
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
              "detail": "参考 立陶宛 MIGRIS 官方电子移民系统 官方清单完成填报。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ]
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
        "title": "塞浦路斯移民局官网",
        "url": "https://www.moi.gov.cy/moi/crmd/crmd.nsf/index_en/index_en",
        "desc": "官方签证/入境申请与政策查询入口"
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
              "detail": "通过 塞浦路斯移民局官网 或当地使领馆递交留学签证申请。"
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
          ]
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
              "detail": "通过 VFS 塞浦路斯中心 提交贴签或电子签申请。"
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
          ]
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
              "detail": "访问 塞浦路斯移民局官网 查询最新永居条例。"
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
          ]
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
          ]
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
              "detail": "参考 塞浦路斯移民局官网 官方清单完成填报。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ]
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
              "detail": "通过 波黑外国人事务局官网 或当地使领馆递交留学签证申请。"
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
          ]
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
              "detail": "通过 免签直飞（每180天累计90天） 提交贴签或电子签申请。"
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
          ]
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
              "detail": "访问 波黑外国人事务局官网 查询最新永居条例。"
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
          ]
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
          ]
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
              "detail": "参考 波黑外国人事务局官网 官方清单完成填报。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ]
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
              "detail": "通过 阿尔巴尼亚官方电子签与免签网 或当地使领馆递交留学签证申请。"
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
          ]
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
              "detail": "通过 免签直飞（停留90天） 提交贴签或电子签申请。"
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
          ]
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
              "detail": "访问 阿尔巴尼亚官方电子签与免签网 查询最新永居条例。"
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
          ]
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
          ]
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
              "detail": "参考 阿尔巴尼亚官方电子签与免签网 官方清单完成填报。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ]
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
              "detail": "通过 黑山外交部官网 或当地使领馆递交留学签证申请。"
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
          ]
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
              "detail": "通过 持发达国家签免签 / 领馆 提交贴签或电子签申请。"
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
          ]
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
              "detail": "访问 黑山外交部官网 查询最新永居条例。"
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
          ]
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
          ]
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
              "detail": "参考 黑山外交部官网 官方清单完成填报。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ]
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
              "detail": "通过 北马其顿外交部官网 或当地使领馆递交留学签证申请。"
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
          ]
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
              "detail": "通过 持有效申根/美签免签 / 领馆 提交贴签或电子签申请。"
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
          ]
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
              "detail": "访问 北马其顿外交部官网 查询最新永居条例。"
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
          ]
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
          ]
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
              "detail": "参考 北马其顿外交部官网 官方清单完成填报。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ]
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
              "detail": "通过 摩尔多瓦官方电子签门户 或当地使领馆递交留学签证申请。"
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
          ]
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
              "detail": "通过 evisa.gov.md 官方网申 提交贴签或电子签申请。"
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
          ]
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
              "detail": "访问 摩尔多瓦官方电子签门户 查询最新永居条例。"
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
          ]
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
          ]
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
              "detail": "参考 摩尔多瓦官方电子签门户 官方清单完成填报。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ]
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
              "detail": "通过 白俄罗斯外交部签证官网 或当地使领馆递交留学签证申请。"
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
          ]
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
              "detail": "通过 免签入境（每次30天） 提交贴签或电子签申请。"
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
          ]
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
              "detail": "访问 白俄罗斯外交部签证官网 查询最新永居条例。"
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
          ]
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
          ]
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
              "detail": "参考 白俄罗斯外交部签证官网 官方清单完成填报。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ]
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
              "detail": "通过 乌克兰外交部官方 e-Visa 或当地使领馆递交留学签证申请。"
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
          ]
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
              "detail": "通过 evisa.mfa.gov.ua 官网 提交贴签或电子签申请。"
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
          ]
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
              "detail": "访问 乌克兰外交部官方 e-Visa 查询最新永居条例。"
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
          ]
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
          ]
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
              "detail": "参考 乌克兰外交部官方 e-Visa 官方清单完成填报。"
            }
          ],
          "checklist": [
            "有效护照",
            "当地邀请函及邀请方身份/营业执照复印件",
            "中方公司派遣函（商务）或亲属关系证明（探亲）",
            "往返机票及住宿证明"
          ]
        }
      ]
    }
  }
];
