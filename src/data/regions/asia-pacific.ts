import type { CountryData } from '../../types/visa';

export const ASIA_PACIFIC_COUNTRIES: CountryData[] = [
  {
    "id": "392",
    "code": "JPN",
    "nameZh": "日本",
    "nameEn": "Japan",
    "region": "东亚 / EAST ASIA",
    "coords": [
      138.25,
      36.2
    ],
    "badge": "单次eVISA / 在留资格",
    "tierColor": "#4A7B82",
    "labelPriority": true,
    "processing": "5–10 工作日（旅游）",
    "submission": "指定代办机构 / 在留资格认定",
    "summary": "中国大陆居民赴日旅游签证需通过使领馆指定代办机构递交（单次已推行eVISA电子签）；留学与工作需先由日本接收方申请《在留资格认定证明书》(COE)，再换领正签。",
    "pitfalls": [
      "【单次 eVISA 禁止截图】机场登机与入境海关必须手机联网登录 JAPAN eVISA 官网动态页面展示，提前截屏或打印无效。",
      "【严防“包过”黑中介与假材料】日本领馆对在职证明、银行流水与纳税记录抽查极严，一旦发现造假将直接拒签并留档影响后续几年申请。",
      "【旅游签不可现场打工或直接转工签】持短期旅游签赴日严禁打黑工；普通旅游签原则上不可直接在日境内转工作/留学签（须凭 COE 回国换签）。",
      "【永住切勿漏缴住民税与年金】哪怕迟缴几天住民税、国民年金或健康保险，近年来都可能导致日本永住申请直接被拒。"
    ],
    "links": [
      {
        "title": "日本外务省签证官方指南 (MOFA)",
        "url": "https://www.mofa.go.jp/j_info/visit/visa/index.html",
        "desc": "全类别签证政策与领区说明"
      },
      {
        "title": "JAPAN eVISA 官方电子签系统",
        "url": "https://www.mofa.go.jp/j_info/visit/visa/visaonline.html",
        "desc": "单次短期旅游电子签在线核验与展示"
      },
      {
        "title": "日本出入国在留管理厅 (ISA)",
        "url": "https://www.moj.go.jp/isa/",
        "desc": "在留资格 COE 与高度人才积分表"
      }
    ],
    "jobLinks": [
      {
        "title": "日本厚生劳动省 Hello Work",
        "url": "https://www.hellowork.mhlw.go.jp/",
        "desc": "日本官方公共职业安定所（支持外籍与特定技能岗位）"
      },
      {
        "title": "Indeed Japan 综合招聘",
        "url": "https://jp.indeed.com/",
        "desc": "覆盖技人国、IT及地方企业的日本主流求职引擎"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "留学签证（语言学校 / 专门学校 / 大学学部·修士）",
          "fee": "约 200 RMB（使馆规费）+ 代办服务费",
          "desc": "需先取得日本院校录取并向出入国在留管理厅申请电子或纸质《在留资格认定证明书》(COE)，拿到 COE 后向国内指定代办机构递交正签。",
          "tips": "语言学校通常需提前 6–9 个月报名，准备约 20 万元人民币银行存款证明及经费支付人亲属关系公证。",
          "steps": [
            {
              "title": "申请院校并准备COE材料",
              "detail": "提交学历证明、日语能力证书（JLPT N5/N2）及资金担保材料。"
            },
            {
              "title": "学校代为申请在留资格 (COE)",
              "detail": "由日本学校向入管局递交申请，审理约 2–3 个月，现普遍发放电子版COE。"
            },
            {
              "title": "向指定代办机构递交签证申请",
              "detail": "持电子COE打印件、护照原件、申请表及留学调查表递交使领馆。"
            },
            {
              "title": "贴签下签与领取在留卡",
              "detail": "约 5–7 个工作日出签；入境日本主要机场时当场领取《在留卡》。"
            }
          ],
          "checklist": [
            "有效期内中国因私护照原件",
            "日本《在留资格认定证明书》(COE) 打印件",
            "日本国签证申请书（4.5×4.5cm白底照）",
            "留学调查表与户口本复印件",
            "最终学历毕业证及学信网认证报告",
            "经费支付人20万存款证明及收入证明"
          ]
        }
      ],
      "work": [
        {
          "id": "gijinkoku",
          "title": "技术·人文知识·国际业务签证（白领/IT/工程）",
          "fee": "约 200 RMB + 代办费",
          "desc": "日本最主流的白领工作签证，涵盖 IT 工程师、机械电气设计、国际贸易、翻译、运营及酒店管理等岗位，每次可批 1–5 年，可携带配偶子女并累积年限申永住。",
          "tips": "原则上要求全日制大专或本科以上学历，且所学专业须与日本工作岗位内容有相关性（无学历者需 10 年以上相关工作证明）。",
          "steps": [
            {
              "title": "获得日本企业正式录用契约书",
              "detail": "确认企业具备合规纳税与雇佣能力，签订劳动合同。"
            },
            {
              "title": "日本公司向入管局申请在留资格 (COE)",
              "detail": "向企业提供毕业证、学位证、成绩单、简历及证件照，由企业法务或行政书士递交入管局（审理约 1–3 个月）。"
            },
            {
              "title": "收到电子 COE 后向国内指定代办送签",
              "detail": "日本使领馆不直接受理个人递交，将电子 COE 打印件、护照原件与申请表交由领区指定代办机构。"
            },
            {
              "title": "5–7 工作日下签并入境领在留卡",
              "detail": "飞抵日本主要机场时海关直接制发《在留卡》，14天内去市区役所做住民登录。"
            }
          ],
          "checklist": [
            "有效护照原件及 4.5×4.5cm 白底照片",
            "在留资格认定证明书 (COE) 电子版打印件",
            "签证申请表（本人亲笔签名）",
            "毕业证与学位证复印件",
            "雇佣契约书副本及户口本复印件"
          ]
        },
        {
          "id": "ssw",
          "title": "特定技能 1 号签证（介护/外食/制造/建筑等）",
          "fee": "约 200 RMB + 代办费",
          "desc": "面向日本 16 个紧缺蓝领与服务行业（如介护护理、外食餐饮、食品制造、汽车维修、酒店住宿等），不要求大学学历，通过日语基础与行业技能考试即可赴日全职工作。",
          "tips": "特定技能 1 号最长在日累计 5 年，不可携带家属；若考取特定技能 2 号（或介护考取日本国家介护福祉士）则可无限续签并带家属及申请永住。",
          "steps": [
            {
              "title": "考取日语合格证与行业技能考试合格证",
              "detail": "通过 JLPT N4（或 JFT-Basic）以及目标行业的“特定技能1号技能测定试验”。"
            },
            {
              "title": "面试日本接收企业或登录支援机构",
              "detail": "签订特定技能雇佣合同并完成事前健康诊断。"
            },
            {
              "title": "企业向日本入管局申领 COE",
              "detail": "提交考试合格证、体检表及支援计划书，等待 COE 获批。"
            },
            {
              "title": "国内指定代办换领签证入境",
              "detail": "持电子 COE 打印件送签，入境日本机场领取《在留卡》。"
            }
          ],
          "checklist": [
            "有效护照原件及证件照",
            "在留资格认定证明书 (COE) 打印件",
            "日语 N4/JFT-Basic 及行业技能考试合格证复印件",
            "特定技能雇佣合同与签证申请表",
            "户口本/居住证复印件"
          ]
        }
      ],
      "immigration": [
        {
          "id": "sub_0",
          "title": "高度人才签证 (HSP)",
          "fee": "8,000 JPY（日本国内永住手续费）",
          "desc": "【高度人才签证 (HSP)】「高度人才积分」达 70 分可 3 年申永住，达 80 分最快 1 年申永住；归化入籍通常需连续居住满 5 年。",
          "tips": "近年日本对永住审查极严，切勿迟缴住民税、国民年金或健康保险。",
          "steps": [
            {
              "title": "评估高度人才积分 (HSP)",
              "detail": "按学历、工作年限、年收、日语N1等维度核算是否达70/80分。"
            },
            {
              "title": "申请高度专门职1号签证",
              "detail": "获批直接拿5年在留期限。"
            },
            {
              "title": "维持连续纳税与社保记录",
              "detail": "保留全部完税与年金缴纳证明。"
            },
            {
              "title": "向入管局递交永住申请",
              "detail": "满1年或3年后连同身元保证人材料递交入管局。"
            }
          ],
          "checklist": [
            "高度人才积分表及加分原件证明",
            "近1–3年住民税课税·纳税证明书",
            "年金定期便与健康保险缴纳证明",
            "在职证明书与公司登记证明",
            "永住理由书及身元保证人保证书"
          ]
        },
        {
          "id": "sub_1",
          "title": "永住权与归化",
          "fee": "8,000 JPY（日本国内永住手续费）",
          "desc": "【永住权与归化】「高度人才积分」达 70 分可 3 年申永住，达 80 分最快 1 年申永住；归化入籍通常需连续居住满 5 年。",
          "tips": "近年日本对永住审查极严，切勿迟缴住民税、国民年金或健康保险。",
          "steps": [
            {
              "title": "评估高度人才积分 (HSP)",
              "detail": "按学历、工作年限、年收、日语N1等维度核算是否达70/80分。"
            },
            {
              "title": "申请高度专门职1号签证",
              "detail": "获批直接拿5年在留期限。"
            },
            {
              "title": "维持连续纳税与社保记录",
              "detail": "保留全部完税与年金缴纳证明。"
            },
            {
              "title": "向入管局递交永住申请",
              "detail": "满1年或3年后连同身元保证人材料递交入管局。"
            }
          ],
          "checklist": [
            "高度人才积分表及加分原件证明",
            "近1–3年住民税课税·纳税证明书",
            "年金定期便与健康保险缴纳证明",
            "在职证明书与公司登记证明",
            "永住理由书及身元保证人保证书"
          ]
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "个人旅游签证（单次eVISA / 三年多次 / 五年多次）",
          "fee": "单次约 200 RMB + 代办费",
          "desc": "单次停留 15 天（多发eVISA电子签）；三年/五年多次需满足对应年薪或资产要求。",
          "tips": "单次eVISA在机场登机与入境时必须手机联网登录官网展示，不可使用截图。",
          "steps": [
            {
              "title": "确认所属领区与签证类型",
              "detail": "按户籍或居住证确认北京/上海/广州等领区。"
            },
            {
              "title": "准备在职与资产证明",
              "detail": "单次通常需年入10万流水或存款；五年多次需年薪50万完税证明。"
            },
            {
              "title": "寄送材料至官方指定代办机构",
              "detail": "自行填写《签证申请书》并附机酒预订单。"
            },
            {
              "title": "查收 eVISA 通知并保存登录方式",
              "detail": "5–8工作日出签。"
            }
          ],
          "checklist": [
            "护照原件（有效期6个月以上）",
            "带二维码签证申请表并签名",
            "4.5×4.5cm白底彩照",
            "近6个月工资流水或个税完税证明",
            "在职证明与机酒预订单",
            "身份证及户口本复印件"
          ]
        }
      ],
      "other": [
        {
          "id": "sub_0",
          "title": "探亲访友",
          "fee": "单次约 200 RMB + 代办费",
          "desc": "【探亲访友】探亲适用于在日三代以内亲属邀请；短期商务用于参展签约；医疗签需日本身元保证机构协助。",
          "tips": "探亲无需高额资产流水，重点在亲属关系公证与日方《招聘理由书》《身元保证书》。",
          "steps": [
            {
              "title": "日方邀请人准备邀请与保证文件",
              "detail": "填写《招聘理由书》、《滞在预定表》及《身元保证书》。"
            },
            {
              "title": "国内办理关系或派遣证明",
              "detail": "准备亲属关系证明或公司派遣函。"
            },
            {
              "title": "通过代办机构送签",
              "detail": "合并中日双方文件送交使领馆。"
            }
          ],
          "checklist": [
            "护照原件与申请表",
            "日方《招聘理由书》与《身元保证书》",
            "日方在留卡/住民票复印件",
            "亲属关系公证书或公司派遣函",
            "往返机票预订单"
          ]
        },
        {
          "id": "sub_1",
          "title": "短期商务",
          "fee": "单次约 200 RMB + 代办费",
          "desc": "【短期商务】探亲适用于在日三代以内亲属邀请；短期商务用于参展签约；医疗签需日本身元保证机构协助。",
          "tips": "探亲无需高额资产流水，重点在亲属关系公证与日方《招聘理由书》《身元保证书》。",
          "steps": [
            {
              "title": "日方邀请人准备邀请与保证文件",
              "detail": "填写《招聘理由书》、《滞在预定表》及《身元保证书》。"
            },
            {
              "title": "国内办理关系或派遣证明",
              "detail": "准备亲属关系证明或公司派遣函。"
            },
            {
              "title": "通过代办机构送签",
              "detail": "合并中日双方文件送交使领馆。"
            }
          ],
          "checklist": [
            "护照原件与申请表",
            "日方《招聘理由书》与《身元保证书》",
            "日方在留卡/住民票复印件",
            "亲属关系公证书或公司派遣函",
            "往返机票预订单"
          ]
        },
        {
          "id": "sub_2",
          "title": "医疗滞留",
          "fee": "单次约 200 RMB + 代办费",
          "desc": "【医疗滞留】探亲适用于在日三代以内亲属邀请；短期商务用于参展签约；医疗签需日本身元保证机构协助。",
          "tips": "探亲无需高额资产流水，重点在亲属关系公证与日方《招聘理由书》《身元保证书》。",
          "steps": [
            {
              "title": "日方邀请人准备邀请与保证文件",
              "detail": "填写《招聘理由书》、《滞在预定表》及《身元保证书》。"
            },
            {
              "title": "国内办理关系或派遣证明",
              "detail": "准备亲属关系证明或公司派遣函。"
            },
            {
              "title": "通过代办机构送签",
              "detail": "合并中日双方文件送交使领馆。"
            }
          ],
          "checklist": [
            "护照原件与申请表",
            "日方《招聘理由书》与《身元保证书》",
            "日方在留卡/住民票复印件",
            "亲属关系公证书或公司派遣函",
            "往返机票预订单"
          ]
        }
      ]
    }
  },
  {
    "id": "036",
    "code": "AUS",
    "nameZh": "澳大利亚",
    "nameEn": "Australia",
    "region": "大洋洲 / OCEANIA",
    "coords": [
      133.77,
      -25.27
    ],
    "badge": "ImmiAccount 全电子签",
    "tierColor": "#4A7B82",
    "labelPriority": true,
    "processing": "10–30 天（无需贴签）",
    "submission": "ImmiAccount 全程网申",
    "summary": "澳大利亚全面实行无贴纸电子签证，所有类别均在 ImmiAccount 官网在线提交，批签信直接发至邮箱，凭护照原件即可登机。",
    "pitfalls": [
      "【警惕 462 WHV 抽签代抢诈骗】澳洲 462 打工度假签已改为官方 Ballot 意向抽签，不存在“100%必中内部名额”，切勿向高价黄牛付费。",
      "【学签 GS 问答切忌空洞套话】Real Student (GS) 取代 GTE 后，回答字数受限且看重具体数据与课程匹配度，照搬模板极易拒签。",
      "【持旅游签严禁在澳打工】澳洲移民局对持 600 旅游签非法务工抽查严格，一旦查出当场取消签证并遣返。"
    ],
    "links": [
      {
        "title": "澳洲内政部材料清单官方工具",
        "url": "https://immi.homeaffairs.gov.au/visas/web-evidentiary-tool",
        "desc": "实时查询材料清单"
      },
      {
        "title": "Subclass 600 旅游访客签官网",
        "url": "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/visitor-600/tourist-stream-overseas",
        "desc": "澳洲600旅游/探亲指南"
      },
      {
        "title": "Subclass 482 紧缺技能工签官网",
        "url": "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skills-in-demand-visa-subclass-482",
        "desc": "Skills in Demand 最新工签要求"
      }
    ],
    "jobLinks": [
      {
        "title": "Workforce Australia 澳洲官方求职指南",
        "url": "https://www.dewr.gov.au/employment/finding-job",
        "desc": "澳大利亚就业与职场关系部官方找工作平台"
      },
      {
        "title": "LinkedIn 澳洲与跨国企业招聘",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "检索支持 482 雇主担保与偏远地区项目的企业"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "Subclass 500 学生签证",
          "fee": "1,600 AUD",
          "desc": "拿到学校 CoE 与 OSHC 保险后网申，须完成 GS 真实学生问答并参加指定体检。",
          "tips": "GS 陈述需清晰说明专业选择逻辑、课程与职业规划的关联。",
          "steps": [
            {
              "title": "获取 CoE 与 OSHC 保单",
              "detail": "支付首期学费后拿到 CoE。"
            },
            {
              "title": "ImmiAccount 填报 500 并写 GS",
              "detail": "上传学历、出生公证与资金。"
            },
            {
              "title": "缴费体检并查收电子签",
              "detail": "凭 HAP ID 体检，邮件收签。"
            }
          ],
          "checklist": [
            "护照与身份证彩扫件",
            "CoE 电子确认书",
            "OSHC 医保单",
            "英文学历成绩单与雅思/PTE",
            "家庭存款与收入证明",
            "出生公证与户口本"
          ]
        }
      ],
      "work": [
        {
          "id": "482",
          "title": "Subclass 482 紧缺技能工签 (Skills in Demand)",
          "fee": "3,115 AUD",
          "desc": "由具备担保资格的澳洲雇主担保赴澳全职工作（最长 4 年），目前持 482 工签为担保雇主工作满 2 年后，无论岗位所属清单均可通过 186 TRT 通道转澳洲永居 (PR)！",
          "tips": "需满足雅思均分 5.0（单项不低于 5.0）或 PTE 同等成绩，且部分技工/专业岗位需先通过职业评估与具备至少 1–2 年相关工作经验。",
          "steps": [
            {
              "title": "获得澳洲合资格雇主 Offer 并完成担保/提名",
              "detail": "雇主先申请 Standard Business Sponsorship (SBS) 并为你提交岗位 Nomination。"
            },
            {
              "title": "考取英语成绩并完成职业评估（如适用）",
              "detail": "准备好雅思/PTE 成绩单、过往工作推荐信、流水及无犯罪公证。"
            },
            {
              "title": "登录 ImmiAccount 关联提名号网申 482",
              "detail": "在线填写表格上传材料并缴费，等待生成体检 HAP ID。"
            },
            {
              "title": "指定医院体检并查收电子签",
              "detail": "下发 PDF 批签信，凭护照直接入境澳洲工作。"
            }
          ],
          "checklist": [
            "有效护照及身份证彩扫件",
            "雇主 Nomination 批准编号与劳动合同",
            "雅思 5.0 / PTE 等英语成绩单",
            "过往工作证明、税单/社保及学历公证",
            "无犯罪记录公证及体检回执"
          ]
        },
        {
          "id": "462",
          "title": "Subclass 462 打工度假签证 (WHV · 每年5000名额)",
          "fee": "650 AUD（抽签登记费约 25 AUD）",
          "desc": "面向 18–30 岁中国公民，无需雇主担保即可赴澳边打工边旅行 12 个月；在澳洲偏远地区或指定行业工作满规定天数还可继续申请二签和三签。",
          "tips": "澳洲 462 已全面改为 Ballot 意向抽签制：先交小额登记费入池，中签后再在 28 天内递交正式申请，切勿轻信“包抢包中”黑中介。",
          "steps": [
            {
              "title": "满足前置条件并在 ImmiAccount 登记抽签 (Ballot)",
              "detail": "确保年龄 18–30 岁、持有高等教育 2 年以上学历及雅思 4.5+ 成绩，在开放期内提交抽签登记。"
            },
            {
              "title": "收到中签通知信 (Invitation)",
              "detail": "在规定 28 天窗口期内准备全套电子材料。"
            },
            {
              "title": "ImmiAccount 递交 462 正式申请并缴费 650 AUD",
              "detail": "上传护照、学历学信网英文认证、雅思成绩与 5,000 AUD 存款证明。"
            },
            {
              "title": "完成指定体检并查收电子批签信",
              "detail": "通过后获发 1 年期电子签，一年内首次入境即激活。"
            }
          ],
          "checklist": [
            "有效护照、身份证与户口本彩扫件",
            "中签通知信",
            "雅思 4.5+ / PTE 30+ 成绩单",
            "大专/本科2年以上学历及学信网英文认证",
            "约 5,000 AUD（约 2.5 万人民币）存款证明与体检回执"
          ]
        }
      ],
      "immigration": [
        {
          "id": "main",
          "title": "Subclass 189 / 190 / 491 技术移民",
          "fee": "4,770 AUD",
          "desc": "EOI 打分制技术移民（65分起），先过职业评估与语言考试，SkillSelect 获邀后60天内递交 PR。",
          "tips": "护理、教师、社工及建筑技工目前在各州担保中邀请优先级较高。",
          "steps": [
            {
              "title": "完成职业评估与语言高分",
              "detail": "如 EA/ACS/CPA/TRA 及雅思/PTE。"
            },
            {
              "title": "递交 EOI 与州担保 ROI",
              "detail": "等待正式邀请 (ITA)。"
            },
            {
              "title": "ImmiAccount 递交 PR 申请",
              "detail": "上传工作税单、无犯罪与体检。"
            }
          ],
          "checklist": [
            "职业评估批准信",
            "雅思/PTE 成绩单",
            "工作证明、流水、个税与社保",
            "学历公证",
            "无犯罪记录证明"
          ]
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "Subclass 600 访客签（1年/3年/10年常旅客）",
          "fee": "195 AUD / 1,435 AUD (10年)",
          "desc": "纯电子审理无面谈，常规批 1 年或 3 年多次，单次停留 3 个月。",
          "tips": "切勿突然存入大额资金而无合理解释，重点展示稳定工作流水与房产资产。",
          "steps": [
            {
              "title": "注册 ImmiAccount 新建 600",
              "detail": "英文填写个人与行程信息。"
            },
            {
              "title": "上传彩色扫描件并缴费",
              "detail": "支持银联/Visa/Mastercard。"
            },
            {
              "title": "邮件查收 PDF 电子签",
              "detail": "打印随身携带即可登机。"
            }
          ],
          "checklist": [
            "护照彩扫件",
            "身份证与户口本彩扫件",
            "在职证明与营业执照副本",
            "近6个月工资流水",
            "房产/存款证明与英文行程单"
          ]
        }
      ],
      "other": [
        {
          "id": "sub_0",
          "title": "商务/探亲 600",
          "fee": "195 AUD (600) / 2,235 AUD (485)",
          "desc": "【商务/探亲 600】商务探亲走 600；在澳完成2年以上全日制学位可境内申请 485 毕业生工签。",
          "tips": "485 必须在结业后 6 个月内境内递交并预约 AFP 澳洲无犯罪证明。",
          "steps": [
            {
              "title": "选择 600 探亲商务或境内 485",
              "detail": "备好邀请函或学校完成信。"
            },
            {
              "title": "ImmiAccount 在线递交",
              "detail": "等待电子批签信。"
            }
          ],
          "checklist": [
            "有效护照",
            "邀请函/身份证明 或 学校完成信(485)",
            "亲属关系公证 或 AFP 无犯罪(485)",
            "OVHC 保险单(485)"
          ]
        },
        {
          "id": "sub_1",
          "title": "毕业生工签 485",
          "fee": "195 AUD (600) / 2,235 AUD (485)",
          "desc": "【毕业生工签 485】商务探亲走 600；在澳完成2年以上全日制学位可境内申请 485 毕业生工签。",
          "tips": "485 必须在结业后 6 个月内境内递交并预约 AFP 澳洲无犯罪证明。",
          "steps": [
            {
              "title": "选择 600 探亲商务或境内 485",
              "detail": "备好邀请函或学校完成信。"
            },
            {
              "title": "ImmiAccount 在线递交",
              "detail": "等待电子批签信。"
            }
          ],
          "checklist": [
            "有效护照",
            "邀请函/身份证明 或 学校完成信(485)",
            "亲属关系公证 或 AFP 无犯罪(485)",
            "OVHC 保险单(485)"
          ]
        }
      ]
    }
  },
  {
    "id": "702",
    "code": "SGP",
    "nameZh": "新加坡",
    "nameEn": "Singapore",
    "region": "东南亚 / SOUTHEAST ASIA",
    "coords": [
      103.82,
      1.35
    ],
    "badge": "30天互免 + MyICA电子卡",
    "tierColor": "#789882",
    "labelPriority": true,
    "processing": "免签即时 / 准证 1–4 周",
    "submission": "SGAC 入境卡 / 学校雇主网申",
    "summary": "中新互免30天旅游/探亲/商务签证，出发前3天内免费填报 SGAC 电子入境卡即可直飞；留学与工作由校方/雇主在线申办电子准证。",
    "pitfalls": [
      "【谨防搜索引擎排前列的收费山寨 SGAC 网站】新加坡 SG Arrival Card (SGAC) 在 ica.gov.sg / MyICA 官方渠道完全免费！凡是收几十美元的都是山寨代填站。",
      "【免签 30 天严禁逾期滞留或打黑工】哪怕逾期 1 天都会面临罚款、遣返甚至拉黑；免签入境期间不可直接找本地工作非法上班。",
      "【EP/SP 学历须提前做官方认证】切勿使用未认证的野鸡大学文凭，MOM 要求提供学信网或指定机构英文验证报告。"
    ],
    "links": [
      {
        "title": "新加坡移民与关卡局 (ICA)",
        "url": "https://www.ica.gov.sg/",
        "desc": "互免政策、学生准证与 PR 入口"
      },
      {
        "title": "SG Arrival Card (SGAC) 官方入境卡",
        "url": "https://www.ica.gov.sg/information-and-e-services/entry-and-departure/entering-singapore/sg-arrival-card-with-electronic-health-declaration",
        "desc": "入境前72小时免费填报"
      },
      {
        "title": "中新30天互免官方公告",
        "url": "https://www.ica.gov.sg/about-ica/news-and-publications/media-room/mutual-30-day-visa-exemption-arrangement-between-singapore-and-the-people-s-republic-of-china",
        "desc": "互免细则"
      }
    ],
    "jobLinks": [
      {
        "title": "MyCareersFuture 新加坡官方招聘网",
        "url": "https://www.mycareersfuture.gov.sg/",
        "desc": "新加坡劳动力发展局官方职位门户（可看薪资区间）"
      },
      {
        "title": "LinkedIn 新加坡总部岗位",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "跨国亚太总部与 EP/SP 岗位直投"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "Student’s Pass (STP) 学生准证",
          "fee": "45 SGD + 60 SGD",
          "desc": "学校在 SOLAR 系统注册后，本人登录填写 eForm 16 并缴费，凭 IPA 入境换卡。",
          "tips": "抵新后需完成体检并预约 ICA 换领电子学生准证。",
          "steps": [
            {
              "title": "学校在 SOLAR 发起注册",
              "detail": "获取 SOLAR 编号。"
            },
            {
              "title": "填写 eForm 16 并缴费",
              "detail": "下载 IPA 原则批准信入境。"
            },
            {
              "title": "抵新体检并激活电子准证",
              "detail": "在 ICA 核验原件。"
            }
          ],
          "checklist": [
            "有效护照",
            "录取信与 SOLAR 编号",
            "出生及学历公证",
            "白底证件照",
            "体检报告（如适用）"
          ]
        }
      ],
      "work": [
        {
          "id": "sub_0",
          "title": "EP 就业准证",
          "fee": "105 SGD + 225 SGD",
          "desc": "【EP 就业准证】由新加坡雇主向 MOM 提交；EP 需满足薪资门槛及 COMPASS 积分40分。",
          "tips": "EP/SP 海外本科学历需提前做学信网英文学历验证报告。",
          "steps": [
            {
              "title": "获新加坡雇主聘用合同",
              "detail": "核对 COMPASS 分数。"
            },
            {
              "title": "雇主向 MOM 申领 IPA",
              "detail": "1–3周获批。"
            },
            {
              "title": "抵新录指纹领电子工作卡",
              "detail": "完成体检与注册。"
            }
          ],
          "checklist": [
            "有效护照",
            "学历及学信网验证报告",
            "雇佣合同",
            "个人英文简历"
          ]
        },
        {
          "id": "sub_1",
          "title": "SP",
          "fee": "105 SGD + 225 SGD",
          "desc": "【SP】由新加坡雇主向 MOM 提交；EP 需满足薪资门槛及 COMPASS 积分40分。",
          "tips": "EP/SP 海外本科学历需提前做学信网英文学历验证报告。",
          "steps": [
            {
              "title": "获新加坡雇主聘用合同",
              "detail": "核对 COMPASS 分数。"
            },
            {
              "title": "雇主向 MOM 申领 IPA",
              "detail": "1–3周获批。"
            },
            {
              "title": "抵新录指纹领电子工作卡",
              "detail": "完成体检与注册。"
            }
          ],
          "checklist": [
            "有效护照",
            "学历及学信网验证报告",
            "雇佣合同",
            "个人英文简历"
          ]
        },
        {
          "id": "sub_2",
          "title": "WP",
          "fee": "105 SGD + 225 SGD",
          "desc": "【WP】由新加坡雇主向 MOM 提交；EP 需满足薪资门槛及 COMPASS 积分40分。",
          "tips": "EP/SP 海外本科学历需提前做学信网英文学历验证报告。",
          "steps": [
            {
              "title": "获新加坡雇主聘用合同",
              "detail": "核对 COMPASS 分数。"
            },
            {
              "title": "雇主向 MOM 申领 IPA",
              "detail": "1–3周获批。"
            },
            {
              "title": "抵新录指纹领电子工作卡",
              "detail": "完成体检与注册。"
            }
          ],
          "checklist": [
            "有效护照",
            "学历及学信网验证报告",
            "雇佣合同",
            "个人英文简历"
          ]
        }
      ],
      "immigration": [
        {
          "id": "main",
          "title": "新加坡永久居民 (PR)",
          "fee": "100 SGD",
          "desc": "持 EP/SP 稳定工作纳税后，用 Singpass 登录 MyICA 全程无纸化DIY网申 PR。",
          "tips": "审理约 4–6 个月，所有中文文件须附官方英文翻译。",
          "steps": [
            {
              "title": "Singpass 登录 e-PR 系统",
              "detail": "填写个人及家庭履历。"
            },
            {
              "title": "上传近6个月工资单与 IRAS 税单",
              "detail": "在线支付 100 SGD 提交。"
            }
          ],
          "checklist": [
            "护照与准证",
            "近6个月工资单与在职信",
            "IRAS 税单",
            "学历与出生公证翻译件"
          ]
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "30天免签入境 + SGAC 电子入境卡",
          "fee": "0 元（免费）",
          "desc": "持有效期6个月以上普通护照可免签停留30天，只需行前72小时内填报 SGAC。",
          "tips": "谨防搜索结果中的收费代填网站，官方 SGAC 完全免费！",
          "steps": [
            {
              "title": "确认护照有效期 ≥ 6个月",
              "detail": "备好往返机票与酒店订单。"
            },
            {
              "title": "行前3天内免费填报 SGAC",
              "detail": "在 ica.gov.sg 或 MyICA App 提交。"
            },
            {
              "title": "樟宜机场自助通道入境",
              "detail": "保存邮件回执即可出发。"
            }
          ],
          "checklist": [
            "6个月以上有效护照",
            "SGAC 电子回执",
            "往返机票订单",
            "酒店预订单"
          ]
        }
      ],
      "other": [
        {
          "id": "sub_0",
          "title": "LTVP 长期探访",
          "fee": "45 SGD (LTVP)",
          "desc": "【LTVP 长期探访】短期探亲商务直接用30天免签；长期随行陪读或配偶由担保人在线申办 LTVP。",
          "tips": "持美日英澳加等有效签证转机亦可享96小时免签过境。",
          "steps": [
            {
              "title": "担保人登录 MyICA 提交 LTVP",
              "detail": "上传亲属关系与税单。"
            },
            {
              "title": "获批 IPA 后抵新领卡",
              "detail": "完成体检核验。"
            }
          ],
          "checklist": [
            "护照与证件照",
            "担保人身份与税单",
            "结婚/出生公证翻译"
          ]
        },
        {
          "id": "sub_1",
          "title": "96小时过境免签",
          "fee": "45 SGD (LTVP)",
          "desc": "【96小时过境免签】短期探亲商务直接用30天免签；长期随行陪读或配偶由担保人在线申办 LTVP。",
          "tips": "持美日英澳加等有效签证转机亦可享96小时免签过境。",
          "steps": [
            {
              "title": "担保人登录 MyICA 提交 LTVP",
              "detail": "上传亲属关系与税单。"
            },
            {
              "title": "获批 IPA 后抵新领卡",
              "detail": "完成体检核验。"
            }
          ],
          "checklist": [
            "护照与证件照",
            "担保人身份与税单",
            "结婚/出生公证翻译"
          ]
        }
      ]
    }
  },
  {
    "id": "410",
    "code": "KOR",
    "nameZh": "韩国",
    "nameEn": "South Korea",
    "region": "东亚 / EAST ASIA",
    "coords": [
      127.77,
      35.91
    ],
    "badge": "KVAC中心 / 电子签 / 济州免签",
    "tierColor": "#4A7B82",
    "labelPriority": true,
    "processing": "5–10 工作日",
    "submission": "Korea Visa Portal + KVAC 中心",
    "summary": "北上广等领区支持个人直接预约 KVAC 递交旅游签（本科及以上学历可轻松申五年多次）；直飞济州岛享30天免签。",
    "pitfalls": [
      "【济州岛免签不可飞往首尔/釜山】持中国护照免签入境济州岛仅限济州道内停留，不可买去韩国本土城市的机票，否则属于非法越界。",
      "【电子签必须 A4 纸打印携带】韩国已全面取消贴纸签证，务必在 visa.go.kr 下载打印《签证发给确认书》随身携带，仅存手机截图部分航司不认。",
      "【单面打印表格与照片规格】KVAC 窗口严格要求签证申请表必须单面打印，且照片须为近 6 个月 3.5×4.5cm 白底彩照。"
    ],
    "links": [
      {
        "title": "韩国签证门户官网 (visa.go.kr)",
        "url": "https://www.visa.go.kr/",
        "desc": "电子签证进度查询与打印"
      },
      {
        "title": "韩国签证申请中心 (北京)",
        "url": "https://www.visaforkorea-bj.com/",
        "desc": "北京领区预约与材料指引"
      },
      {
        "title": "韩国签证申请中心 (上海)",
        "url": "https://www.visaforkorea-sh.com/",
        "desc": "上海领区预约与放号通知"
      }
    ],
    "jobLinks": [
      {
        "title": "LinkedIn 全球雇主直投",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "搜索韩国 (South Korea) 跨国企业与本地招聘岗位"
      },
      {
        "title": "Indeed 国际职位搜索引擎",
        "url": "https://www.indeed.com/",
        "desc": "按South Korea地区检索全职、技工与远程工作机会"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "sub_0",
          "title": "D-2 大学留学",
          "fee": "约 420–630 RMB",
          "desc": "【D-2 大学留学】凭《标准入学许可书》及存款证明到 KVAC 递交，获批后自行在 visa.go.kr 打印电子签。",
          "tips": "语学院通常需7万+人民币存款证明；本硕需14万+人民币。",
          "steps": [
            {
              "title": "取得标准入学许可书",
              "detail": "备齐学信网认证与存款证明。"
            },
            {
              "title": "预约 KVAC 窗口递交",
              "detail": "单面打印电子申请表。"
            },
            {
              "title": "网上打印电子签证",
              "detail": "A4打印即可入境。"
            }
          ],
          "checklist": [
            "有效护照与身份证",
            "标准入学许可书",
            "签证申请表与白底照",
            "学信网学历认证",
            "银行存款证明"
          ]
        },
        {
          "id": "sub_1",
          "title": "D-4 语言研修",
          "fee": "约 420–630 RMB",
          "desc": "【D-4 语言研修】凭《标准入学许可书》及存款证明到 KVAC 递交，获批后自行在 visa.go.kr 打印电子签。",
          "tips": "语学院通常需7万+人民币存款证明；本硕需14万+人民币。",
          "steps": [
            {
              "title": "取得标准入学许可书",
              "detail": "备齐学信网认证与存款证明。"
            },
            {
              "title": "预约 KVAC 窗口递交",
              "detail": "单面打印电子申请表。"
            },
            {
              "title": "网上打印电子签证",
              "detail": "A4打印即可入境。"
            }
          ],
          "checklist": [
            "有效护照与身份证",
            "标准入学许可书",
            "签证申请表与白底照",
            "学信网学历认证",
            "银行存款证明"
          ]
        }
      ],
      "work": [
        {
          "id": "main",
          "title": "E-7 特定活动工作签",
          "fee": "约 420 RMB + 服务费",
          "desc": "由韩国雇主向出入境申请《签证发给认定书》编号，国内凭编号在 KVAC 快速换领电子签。",
          "tips": "通常要求相关专业本科以上，或大专+1年经验，或5年以上行业经验。",
          "steps": [
            {
              "title": "雇主申领发给认定书编号",
              "detail": "取得12位认定编号。"
            },
            {
              "title": "KVAC 递交简化材料",
              "detail": "约5工作日出签。"
            }
          ],
          "checklist": [
            "护照与身份证",
            "发给认定书编号",
            "申请表与照片",
            "肺结核诊断书（如适用）"
          ]
        }
      ],
      "immigration": [
        {
          "id": "sub_0",
          "title": "F-2 居住签",
          "fee": "200,000 KRW",
          "desc": "【F-2 居住签】通过 E-7 工作或 D-2 留学转 F-2-7 打分制居住签，满3年或高薪可申 F-5 永住。",
          "tips": "完成 KIIP 社会统筹课程5阶段对 F-2-7 加分与 F-5 永住极为关键。",
          "steps": [
            {
              "title": "累积在韩纳税与居留年限",
              "detail": "完成 KIIP 或 TOPIK。"
            },
            {
              "title": "HiKorea 预约现场递交",
              "detail": "提交所得金额证明与无犯罪海牙认证。"
            }
          ],
          "checklist": [
            "护照与登陆证 ARC",
            "所得金额证明",
            "KIIP/TOPIK 证书",
            "海牙认证无犯罪记录",
            "租房合同"
          ]
        },
        {
          "id": "sub_1",
          "title": "F-5 永住权",
          "fee": "200,000 KRW",
          "desc": "【F-5 永住权】通过 E-7 工作或 D-2 留学转 F-2-7 打分制居住签，满3年或高薪可申 F-5 永住。",
          "tips": "完成 KIIP 社会统筹课程5阶段对 F-2-7 加分与 F-5 永住极为关键。",
          "steps": [
            {
              "title": "累积在韩纳税与居留年限",
              "detail": "完成 KIIP 或 TOPIK。"
            },
            {
              "title": "HiKorea 预约现场递交",
              "detail": "提交所得金额证明与无犯罪海牙认证。"
            }
          ],
          "checklist": [
            "护照与登陆证 ARC",
            "所得金额证明",
            "KIIP/TOPIK 证书",
            "海牙认证无犯罪记录",
            "租房合同"
          ]
        }
      ],
      "tourism": [
        {
          "id": "single",
          "title": "C-3-9 单次个人旅游签证",
          "fee": "约 280 RMB + 120 RMB 中心服务费",
          "desc": "适用于不满足五年多次简化条件的普通在职人员、自由职业者或学生，获批有效期 3 个月、单次最长停留 30–90 天。",
          "tips": "北上广等领区允许本人直接预约 KVAC 递交，申请表必须单面打印，在职流水建议余额保持在 2–3 万人民币以上。",
          "steps": [
            {
              "title": "确认领区并在 KVAC 官网预约递交时间",
              "detail": "核对户籍或居住证所属使领馆及对应签证中心。"
            },
            {
              "title": "电脑填写电子版签证申请表并单面打印",
              "detail": "贴好近 6 个月内 3.5×4.5cm 白底彩照。"
            },
            {
              "title": "准备近 6 个月工资流水与在职证明",
              "detail": "自由职业或学生可提供父母流水+亲属关系或存款证明。"
            },
            {
              "title": "赴 KVAC 窗口缴费并在 visa.go.kr 打印电子签",
              "detail": "5–8 工作日出签后自行 A4 打印《签证发给确认书》入境。"
            }
          ],
          "checklist": [
            "有效护照原件及身份证原件+复印件",
            "单面打印的签证申请表（贴3.5×4.5cm白底照）",
            "在职证明与营业执照副本复印件盖章",
            "近 6 个月银行卡工资流水对账单",
            "往返机票与酒店预订单"
          ]
        },
        {
          "id": "fiveyear",
          "title": "C-3-9 五年多次往返旅游签证（本科/户籍简化）",
          "fee": "约 630 RMB + 中心服务费",
          "desc": "五年内无限次往返韩国，每次最长停留 30 天！全日制本科在读/毕业生、北上广深等指定城市户籍或持有 22 个 OECD 国家出境记录者均可免银行流水直申。",
          "tips": "本科毕业生走简化通道只需提供学信网《教育部学历证书电子注册备案表》，几乎零资金门槛！",
          "steps": [
            {
              "title": "核对自身是否符合免流水简化条件",
              "detail": "确认具备全日制本科以上学历（学信网可查）、指定城市户籍或 OECD 出境记录。"
            },
            {
              "title": "在学信网下载英文/中文《学历电子注册备案表》",
              "detail": "确保二维码在有效验证期内（建议设置 6 个月）。"
            },
            {
              "title": "KVAC 预约并携带精简材料窗口递交",
              "detail": "连同护照、身份证、单面打印申请表与照片一并递交。"
            },
            {
              "title": "在 visa.go.kr 下载打印五年多次电子签证",
              "detail": "A4 纸打印携带即可，五年内更换新护照前均可直接飞韩国。"
            }
          ],
          "checklist": [
            "有效护照原件及身份证原件+正反面复印件",
            "单面打印的签证申请表（贴3.5×4.5cm白底照）",
            "学信网《教育部学历证书电子注册备案表》（或户籍/OECD签证证明）"
          ]
        }
      ],
      "other": [
        {
          "id": "sub_0",
          "title": "济州岛30天免签",
          "fee": "0 元（济州）/ 约 400 RMB",
          "desc": "【济州岛30天免签】直飞济州岛免签停留 30 天；商务考察走 C-3-4。",
          "tips": "济州岛免签不可转机前往首尔或釜山。",
          "steps": [
            {
              "title": "订妥直飞济州往返机票",
              "detail": "随身携带酒店预订单过关。"
            }
          ],
          "checklist": [
            "有效护照",
            "直飞济州往返机票与酒店订单",
            "韩方邀请函（商务）"
          ]
        },
        {
          "id": "sub_1",
          "title": "商务 C-3-4",
          "fee": "0 元（济州）/ 约 400 RMB",
          "desc": "【商务 C-3-4】直飞济州岛免签停留 30 天；商务考察走 C-3-4。",
          "tips": "济州岛免签不可转机前往首尔或釜山。",
          "steps": [
            {
              "title": "订妥直飞济州往返机票",
              "detail": "随身携带酒店预订单过关。"
            }
          ],
          "checklist": [
            "有效护照",
            "直飞济州往返机票与酒店订单",
            "韩方邀请函（商务）"
          ]
        }
      ]
    }
  },
  {
    "id": "554",
    "code": "NZL",
    "nameZh": "新西兰",
    "nameEn": "New Zealand",
    "region": "大洋洲 / OCEANIA",
    "coords": [
      174.88,
      -40.9
    ],
    "badge": "全电子签 / 1000个WHV名额",
    "tierColor": "#4A7B82",
    "labelPriority": true,
    "processing": "2–4 周",
    "submission": "RealMe 在线网申",
    "summary": "全程无纸化电子签。除五年多次旅游签、学签及 AEWV 工签外，每年对中国青年开放 1,000 个打工度假签证 (WHV) 名额。",
    "pitfalls": [
      "【切勿漏填中国公民补充表 INZ 1027】中国大陆护照申请旅游、学签或工签若漏传 INZ 1027 表格，会直接导致退件或延误数周。",
      "【所有中文材料必须附英文翻译】在职证明、流水、户口本、身份证不翻译直接上传会被退回或拒签。",
      "【WHV 抢名额切勿多人同时登同一账号】抢名额当天系统拥堵，提前绑好外币信用卡并确保网络稳定，抢到后 15 天内务必完成胸透体检。"
    ],
    "links": [
      {
        "title": "新西兰旅游访客签官网",
        "url": "https://www.immigration.govt.nz/visas/visitor-visa/",
        "desc": "5年多次旅游电子签"
      },
      {
        "title": "中国公民 WHV 打工度假官网",
        "url": "https://immigration.govt.nz/visas/china-working-holiday-visa",
        "desc": "每年1000名额官方入口"
      },
      {
        "title": "AEWV 认证雇主工签官网",
        "url": "https://www.immigration.govt.nz/visas/accredited-employer-work-visa/",
        "desc": "主流技术工作签证"
      }
    ],
    "jobLinks": [
      {
        "title": "LinkedIn 全球雇主直投",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "搜索新西兰 (New Zealand) 跨国企业与本地招聘岗位"
      },
      {
        "title": "Indeed 国际职位搜索引擎",
        "url": "https://www.indeed.com/",
        "desc": "按New Zealand地区检索全职、技工与远程工作机会"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "Fee Paying Student Visa 学生签",
          "fee": "750 NZD",
          "desc": "RealMe 网申，按每年 20,000 NZD 生活费准备资金（或使用 FTS 专用账户）。",
          "tips": "须额外上传《中国公民补充表 (INZ 1027)》并做指定体检。",
          "steps": [
            {
              "title": "获取学校 Offer",
              "detail": "准备资金与 INZ 1027。"
            },
            {
              "title": "RealMe 网申并体检",
              "detail": "获 AIP 后缴学费收电子签。"
            }
          ],
          "checklist": [
            "有效护照",
            "Offer of Place",
            "INZ 1027 补充表",
            "资金证明或 FTS",
            "体检与无犯罪公证"
          ]
        }
      ],
      "work": [
        {
          "id": "aewv",
          "title": "AEWV 认证雇主工作签证 (Accredited Employer Work Visa)",
          "fee": "1,540 NZD",
          "desc": "新西兰最主流的技术与蓝领工作签证，由具备新西兰移民局认证资质的雇主担保，根据岗位技能等级 (ANZSCO) 最高可获批 3–5 年工作居留。",
          "tips": "雇主必须先通过新西兰移民局的雇主认证 (Accreditation) 与岗位审查 (Job Check)，并向你发送专属申请链接 (Job Token) 后你才可网申。",
          "steps": [
            {
              "title": "确认雇主已获认证并拿到 Job Offer",
              "detail": "核实雇主拥有有效的 Accredited Employer 资质，签订正式全职劳动合同（每周至少 30 小时）。"
            },
            {
              "title": "等待雇主完成 Job Check 并获取 Job Token",
              "detail": "雇主向移民局证明本地招聘无果并拿到 Job Check 批准后，系统会给你发送一封带专属链接的邮件。"
            },
            {
              "title": "准备学历、技能及工作经历证明",
              "detail": "整理英文简历、学历证书（如适用需 NZQA 认证）、过往社保/税单/推荐信以及英语成绩（部分低技能岗需雅思 4.0+）。"
            },
            {
              "title": "登录 RealMe 填写 AEWV 申请并上传 INZ 1027",
              "detail": "通过邮件链接进入在线系统，上传护照、中国公民补充表 INZ 1027 及无犯罪记录公证件并缴费 1,540 NZD。"
            },
            {
              "title": "指定医院体检并查收电子工作签证",
              "detail": "按系统提示预约新西兰指定医院完成胸透/全面体检，通常 2–6 周下发 PDF 版电子工签。"
            }
          ],
          "checklist": [
            "有效期内中国因私护照彩色扫描件",
            "雇主发送的 AEWV Job Token 申请链接与正式劳动合同",
            "中国公民补充表 (INZ 1027)",
            "最高学历学位证书及过往相关工作证明（推荐信/社保/个税）",
            "英语能力证明（如岗位要求雅思 4.0/5.0 或同等成绩）",
            "无犯罪记录证明公证件及指定医院体检回执"
          ]
        },
        {
          "id": "whv",
          "title": "中国公民打工度假签证 (China Working Holiday Visa)",
          "fee": "770 NZD",
          "desc": "新西兰每年专门为中国大陆 18–30 岁青年开放 1,000 个名额，无需雇主担保即可合法全职工作、兼职学习与环游新西兰 12 个月（满足特定农业工作可延签 3 个月）。",
          "tips": "每年仅开放一次在线抢名额（通常在年中），名额在数十分钟内抢空！务必提前注册 RealMe 账号、备好 Visa/Mastercard 外币卡，并在抢到后 15 天内完成胸透体检。",
          "steps": [
            {
              "title": "提前考取英语成绩并注册 RealMe 账号",
              "detail": "要求雅思均分 5.5（A/G类均可）或 PTE 42 分以上（成绩单 2 年内有效），提前在 immigration.govt.nz 注册好账号。"
            },
            {
              "title": "开抢当天准点在线抢占 1,000 个名额",
              "detail": "开放瞬间登录系统快速填写个人护照与学历信息，使用支持外币的 Visa/Mastercard 支付 770 NZD 锁定名额。"
            },
            {
              "title": "15 天内预约指定医院完成胸透体检",
              "detail": "付款成功后系统会生成体检要求，必须在 15 个自然日内到新西兰指定体检中心完成 Chest X-ray 并由医院上传 eMedical。"
            },
            {
              "title": "补充提交学历公证与 4,200 NZD 存款证明",
              "detail": "部分申请人会被签证官邮件抽查高中/大专以上学历证明及约 4,200 纽币（约 2 万人民币）存款证明，按要求补传即可。"
            },
            {
              "title": "查收电子批签信并规划入境",
              "detail": "通常 2–3 周获批电子签证，须在批签后 1 年内首次入境新西兰激活 12 个月有效期。"
            }
          ],
          "checklist": [
            "有效期内中国因私护照（建议有效期 18 个月以上）",
            "雅思均分 5.5 或 PTE 42+ 有效期内的成绩单",
            "至少 4,200 NZD（约 2 万人民币）的本人名下存款证明",
            "高中或大专/本科以上学历证明及英文翻译件",
            "指定医院胸透体检 (Chest X-ray) eMedical 回执",
            "可用于外币在线支付的 Visa 或 Mastercard 信用卡"
          ]
        }
      ],
      "immigration": [
        {
          "id": "sub_0",
          "title": "SMC 六分制技术移民",
          "fee": "6,450 NZD",
          "desc": "【SMC 六分制技术移民】有认证雇主 Offer 前提下，凭学历/高薪+本地经验凑满 6 分即可申永居；Green List Tier 1 可直通居留。",
          "tips": "海外学历需做 NZQA IQA 认证（豁免清单院校除外），雅思须达 6.5。",
          "steps": [
            {
              "title": "核对 6 分构成或 Green List",
              "detail": "完成语言与 NZQA 认证。"
            },
            {
              "title": "在线提交居留申请",
              "detail": "上传合同、无犯罪与全面体检。"
            }
          ],
          "checklist": [
            "认证雇主合同",
            "NZQA 学历认证",
            "雅思 6.5 成绩单",
            "无犯罪公证与全面体检"
          ]
        },
        {
          "id": "sub_1",
          "title": "绿色清单直通",
          "fee": "6,450 NZD",
          "desc": "【绿色清单直通】有认证雇主 Offer 前提下，凭学历/高薪+本地经验凑满 6 分即可申永居；Green List Tier 1 可直通居留。",
          "tips": "海外学历需做 NZQA IQA 认证（豁免清单院校除外），雅思须达 6.5。",
          "steps": [
            {
              "title": "核对 6 分构成或 Green List",
              "detail": "完成语言与 NZQA 认证。"
            },
            {
              "title": "在线提交居留申请",
              "detail": "上传合同、无犯罪与全面体检。"
            }
          ],
          "checklist": [
            "认证雇主合同",
            "NZQA 学历认证",
            "雅思 6.5 成绩单",
            "无犯罪公证与全面体检"
          ]
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "Visitor Visa 五年多次电子签",
          "fee": "341 NZD（含100 NZD IVL税）",
          "desc": "符合条件通常直接获批 5 年多次电子签，所有中文材料须附英文翻译件。",
          "tips": "务必附上《中国公民补充表 (INZ 1027)》。",
          "steps": [
            {
              "title": "RealMe 在线填表上传翻译件",
              "detail": "支付 341 NZD。"
            },
            {
              "title": "2–3周收电子批签信",
              "detail": "打印随身携带乘机。"
            }
          ],
          "checklist": [
            "护照彩扫件与白底照",
            "INZ 1027 补充表",
            "英文在职证明与半年流水",
            "身份证户口本英文翻译",
            "行程与机酒订单"
          ]
        }
      ],
      "other": [
        {
          "id": "sub_0",
          "title": "探亲访友",
          "fee": "341 NZD / 1,670 NZD (PSW)",
          "desc": "【探亲访友】探亲附在新亲友担保表 INZ 1025；本硕毕业可申最长 3 年 PSW。",
          "tips": "父母长期探亲可了解 3 年期父母访客签。",
          "steps": [
            {
              "title": "准备 INZ 1025 担保或毕业证明",
              "detail": "RealMe 在线提交。"
            }
          ],
          "checklist": [
            "护照与 INZ 1027",
            "在纽亲友担保与住址证明",
            "亲属关系公证翻译",
            "流水证明"
          ]
        },
        {
          "id": "sub_1",
          "title": "毕业后工签 (PSW)",
          "fee": "341 NZD / 1,670 NZD (PSW)",
          "desc": "【毕业后工签 (PSW)】探亲附在新亲友担保表 INZ 1025；本硕毕业可申最长 3 年 PSW。",
          "tips": "父母长期探亲可了解 3 年期父母访客签。",
          "steps": [
            {
              "title": "准备 INZ 1025 担保或毕业证明",
              "detail": "RealMe 在线提交。"
            }
          ],
          "checklist": [
            "护照与 INZ 1027",
            "在纽亲友担保与住址证明",
            "亲属关系公证翻译",
            "流水证明"
          ]
        }
      ]
    }
  },
  {
    "id": "764",
    "code": "THA",
    "nameZh": "泰国",
    "nameEn": "Thailand",
    "region": "东南亚 / SOUTHEAST ASIA",
    "coords": [
      100.99,
      15.87
    ],
    "badge": "永久互免 + DTV数字游民签",
    "tierColor": "#789882",
    "labelPriority": true,
    "processing": "免签即时 / 电子签 5–10 工作日",
    "submission": "免签直飞 / Thailand e-Visa",
    "summary": "中泰永久互免签证，持普通护照直飞免签入境；长期旅居、远程办公、留学或工作可在 Thailand e-Visa 官网全在线申办。",
    "pitfalls": [
      "【免签入境仍需备好现金与返程机票】虽然中泰永久互免，但泰国海关有权抽查随身携带等值 10,000–20,000 泰铢现金及返程机票订单，建议随身备 2,000+ 人民币现金。",
      "【严禁逾期停留 (Overstay)】逾期每天罚款 500 泰铢，逾期超 90 天将被直接拉黑禁止入境泰国 1 年以上。",
      "【严禁携带电子烟及未申报超量烟酒】泰国严禁电子烟入境，违者面临高额罚款甚至监禁；普通香烟每人限带 1 条（200支）。"
    ],
    "links": [
      {
        "title": "泰国官方电子签证 (thaievisa.go.th)",
        "url": "https://www.thaievisa.go.th/",
        "desc": "全球统一电子签网申官网"
      },
      {
        "title": "泰国旅游与 DTV 签证说明",
        "url": "https://www.thaievisa.go.th/visa/tourist-visa",
        "desc": "5年数字游民签与旅游签指南"
      }
    ],
    "jobLinks": [
      {
        "title": "LinkedIn 全球雇主直投",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "搜索泰国 (Thailand) 跨国企业与本地招聘岗位"
      },
      {
        "title": "Indeed 国际职位搜索引擎",
        "url": "https://www.indeed.com/",
        "desc": "按Thailand地区检索全职、技工与远程工作机会"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "Non-ED 教育/留学签证",
          "fee": "2,000 THB",
          "desc": "取得泰国学校录取与教育部批准函后，在 thaievisa.go.th 在线申请电子签。",
          "tips": "入境后每90天需去移民局做地址报到并续签。",
          "steps": [
            {
              "title": "取得学校录取与教育部批文",
              "detail": "准备存款证明。"
            },
            {
              "title": "thaievisa.go.th 网申",
              "detail": "5–10工作日收PDF电子签。"
            }
          ],
          "checklist": [
            "护照扫描件与电子照",
            "学校录取信与批文",
            "存款证明",
            "机票与住址"
          ]
        }
      ],
      "work": [
        {
          "id": "main",
          "title": "Non-B 工作签证 + Work Permit",
          "fee": "2,000–5,000 THB",
          "desc": "雇主向劳工部申请 WP.3 预批函后网申 Non-B 电子签，抵泰换领蓝本工作证。",
          "tips": "BOI 认证企业可走 OSOS 一站式快速通道。",
          "steps": [
            {
              "title": "雇主申请 WP.3 预批函",
              "detail": "准备学历英文翻译。"
            },
            {
              "title": "thaievisa.go.th 申 Non-B",
              "detail": "抵泰后领取 Work Permit。"
            }
          ],
          "checklist": [
            "护照扫描件",
            "WP.3 批文或 BOI 信",
            "公司邀请函与执照",
            "学历翻译件"
          ]
        }
      ],
      "immigration": [
        {
          "id": "sub_0",
          "title": "LTR 十年居留",
          "fee": "50,000 THB (LTR) / 1,900 THB起 (养老)",
          "desc": "【LTR 十年居留】年入8万美元等高净值/远程人才可申10年 LTR；50岁以上在泰银行存80万泰铢可DIY办养老签。",
          "tips": "养老签可免签入境后在本地银行开户存款直接转签。",
          "steps": [
            {
              "title": "确认 LTR 或 50岁+ 养老路径",
              "detail": "准备资金或税单。"
            },
            {
              "title": "在线预审或移民局转签",
              "detail": "按年更新居留记录。"
            }
          ],
          "checklist": [
            "有效护照",
            "80万泰铢存款或8万美元年入税单",
            "无犯罪与体检证明",
            "TM.30 住址单"
          ]
        },
        {
          "id": "sub_1",
          "title": "50岁+ Non-O 养老签",
          "fee": "50,000 THB (LTR) / 1,900 THB起 (养老)",
          "desc": "【50岁+ Non-O 养老签】年入8万美元等高净值/远程人才可申10年 LTR；50岁以上在泰银行存80万泰铢可DIY办养老签。",
          "tips": "养老签可免签入境后在本地银行开户存款直接转签。",
          "steps": [
            {
              "title": "确认 LTR 或 50岁+ 养老路径",
              "detail": "准备资金或税单。"
            },
            {
              "title": "在线预审或移民局转签",
              "detail": "按年更新居留记录。"
            }
          ],
          "checklist": [
            "有效护照",
            "80万泰铢存款或8万美元年入税单",
            "无犯罪与体检证明",
            "TM.30 住址单"
          ]
        }
      ],
      "tourism": [
        {
          "id": "main",
          "title": "中泰永久互免签证",
          "fee": "0 元（免签）",
          "desc": "持6个月以上有效普通护照直飞免签入境（常规停留30–60天）。",
          "tips": "建议随身携带约 2,000–4,000 人民币等值现金及返程机酒订单以备抽查。",
          "steps": [
            {
              "title": "核对护照有效期 ≥ 6个月",
              "detail": "备好返程机票与酒店订单。"
            },
            {
              "title": "直飞走免签通道入境",
              "detail": "核对护照入境章截止日期。"
            }
          ],
          "checklist": [
            "6个月以上有效护照",
            "返程机票订单",
            "酒店预订单",
            "适量现金"
          ]
        }
      ],
      "other": [
        {
          "id": "main",
          "title": "DTV 5年数字游民/文化体验签",
          "fee": "10,000 THB",
          "desc": "5年多次往返，每次入境可连续停留 180 天！适合远程办公、自由职业者与泰拳/厨艺学习。",
          "tips": "核心门槛：50万泰铢（约10万+人民币）存款证明 + 远程工作合同/自由职业证明。",
          "steps": [
            {
              "title": "开具10万+人民币存款证明",
              "detail": "备好远程工作合同或作品集。"
            },
            {
              "title": "thaievisa.go.th 提交 DTV",
              "detail": "约5–15工作日收电子签。"
            }
          ],
          "checklist": [
            "护照与电子照",
            "≥50万泰铢存款证明",
            "远程工作证明或课程确认信",
            "当前住址账单"
          ]
        }
      ]
    }
  },
  {
    "id": "458",
    "code": "MYS",
    "nameZh": "马来西亚",
    "nameEn": "Malaysia",
    "region": "东南亚 / SOUTHEAST ASIA",
    "coords": [
      101.97,
      4.21
    ],
    "badge": "30天互免 + MDAC入境卡",
    "tierColor": "#789882",
    "labelPriority": false,
    "processing": "免签即时 / EMGS学签 4周",
    "submission": "MDAC 入境卡 / EMGS 电子签",
    "summary": "中国公民享30天免签，行前3天内须免费填报 MDAC；留学可通过 EMGS 官网DIY追踪进度，长期养老可关注新版 MM2H 第二家园。",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【材料真实性与翻译规范】在职证明、银行流水与行程订单务必真实可核验，非英文材料需附规范英文翻译件。"
    ],
    "links": [
      {
        "title": "马来西亚 MDAC 官方数字入境卡",
        "url": "https://imigresen-online.imi.gov.my/mdac/main",
        "desc": "官方签证/入境申请与政策查询入口"
      },
      {
        "title": "马来西亚移民局官网",
        "url": "https://www.imi.gov.my/",
        "desc": "官方移民局/使领馆/签证中心官网"
      }
    ],
    "jobLinks": [
      {
        "title": "LinkedIn 全球雇主直投",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "搜索马来西亚 (Malaysia) 跨国企业与本地招聘岗位"
      },
      {
        "title": "Indeed 国际职位搜索引擎",
        "url": "https://www.indeed.com/",
        "desc": "按Malaysia地区检索全职、技工与远程工作机会"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "马来西亚 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴马来西亚攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
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
              "detail": "通过 马来西亚 MDAC 官方数字入境卡 或当地使领馆递交留学签证申请。"
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
          "title": "马来西亚 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴马来西亚合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
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
              "detail": "通过 MDAC 入境卡 / EMGS 电子签 提交贴签或电子签申请。"
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
          "title": "马来西亚 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问 马来西亚移民局官网 查询最新永居条例。"
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
          "title": "马来西亚 短期旅游/访客通道（30天互免 + MDAC入境卡）",
          "fee": "0 元（免签）",
          "desc": "中国公民享30天免签，行前3天内须免费填报 MDAC；留学可通过 EMGS 官网DIY追踪进度，长期养老可关注新版 MM2H 第二家园。",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 马来西亚 MDAC 官方数字入境卡 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 MDAC 入境卡 / EMGS 电子签 提交申请并缴费（免签国直接填报入境卡）。"
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
          "title": "马来西亚 商务考察 / 探亲访友 / 特殊通道",
          "fee": "0 元（免签）",
          "desc": "涵盖赴马来西亚参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "参考 马来西亚 MDAC 官方数字入境卡 官方清单完成填报。"
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
    "id": "360",
    "code": "IDN",
    "nameZh": "印度尼西亚",
    "nameEn": "Indonesia",
    "region": "东南亚 / SOUTHEAST ASIA",
    "coords": [
      113.92,
      -0.79
    ],
    "badge": "e-VOA 电子落地签",
    "tierColor": "#789882",
    "labelPriority": false,
    "processing": "即时出签 (e-VOA)",
    "submission": "Molina 官方电子签平台",
    "summary": "赴巴厘岛/雅加达可提前在官方 evisa.imigrasi.go.id 自助办理30天电子落地签(e-VOA)直接走自助闸机，免去机场排队。",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【材料真实性与翻译规范】在职证明、银行流水与行程订单务必真实可核验，非英文材料需附规范英文翻译件。"
    ],
    "links": [
      {
        "title": "印尼官方 e-VOA 电子签系统",
        "url": "https://evisa.imigrasi.go.id/",
        "desc": "官方签证/入境申请与政策查询入口"
      },
      {
        "title": "印尼移民总局官网",
        "url": "https://www.imigrasi.go.id/",
        "desc": "官方移民局/使领馆/签证中心官网"
      }
    ],
    "jobLinks": [
      {
        "title": "LinkedIn 全球雇主直投",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "搜索印度尼西亚 (Indonesia) 跨国企业与本地招聘岗位"
      },
      {
        "title": "Indeed 国际职位搜索引擎",
        "url": "https://www.indeed.com/",
        "desc": "按Indonesia地区检索全职、技工与远程工作机会"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "印度尼西亚 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴印度尼西亚攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
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
              "detail": "通过 印尼官方 e-VOA 电子签系统 或当地使领馆递交留学签证申请。"
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
          "title": "印度尼西亚 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴印度尼西亚合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
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
              "detail": "通过 Molina 官方电子签平台 提交贴签或电子签申请。"
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
          "title": "印度尼西亚 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问 印尼移民总局官网 查询最新永居条例。"
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
          "title": "印度尼西亚 短期旅游/访客通道（e-VOA 电子落地签）",
          "fee": "500,000 IDR（约230 RMB）",
          "desc": "赴巴厘岛/雅加达可提前在官方 evisa.imigrasi.go.id 自助办理30天电子落地签(e-VOA)直接走自助闸机，免去机场排队。",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 印尼官方 e-VOA 电子签系统 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 Molina 官方电子签平台 提交申请并缴费（免签国直接填报入境卡）。"
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
          "title": "印度尼西亚 商务考察 / 探亲访友 / 特殊通道",
          "fee": "500,000 IDR（约230 RMB）",
          "desc": "涵盖赴印度尼西亚参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "参考 印尼官方 e-VOA 电子签系统 官方清单完成填报。"
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
    "id": "704",
    "code": "VNM",
    "nameZh": "越南",
    "nameEn": "Vietnam",
    "region": "东南亚 / SOUTHEAST ASIA",
    "coords": [
      108.27,
      14.06
    ],
    "badge": "90天多次 e-Visa 电子签",
    "tierColor": "#4A7B82",
    "labelPriority": false,
    "processing": "3–5 工作日",
    "submission": "越南公安部官方 e-Visa",
    "summary": "中国E字头新版护照已全面支持在越南公安部官网直接DIY申请90天单次或多次电子签，无需再找中介买批文！",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【材料真实性与翻译规范】在职证明、银行流水与行程订单务必真实可核验，非英文材料需附规范英文翻译件。"
    ],
    "links": [
      {
        "title": "越南官方电子签 (evisa.gov.vn)",
        "url": "https://evisa.gov.vn/",
        "desc": "官方签证/入境申请与政策查询入口"
      },
      {
        "title": "越南出入境管理局",
        "url": "https://xuatnhapcanh.gov.vn/",
        "desc": "官方移民局/使领馆/签证中心官网"
      }
    ],
    "jobLinks": [
      {
        "title": "LinkedIn 全球雇主直投",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "搜索越南 (Vietnam) 跨国企业与本地招聘岗位"
      },
      {
        "title": "Indeed 国际职位搜索引擎",
        "url": "https://www.indeed.com/",
        "desc": "按Vietnam地区检索全职、技工与远程工作机会"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "越南 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴越南攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
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
              "detail": "通过 越南官方电子签 (evisa.gov.vn) 或当地使领馆递交留学签证申请。"
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
          "title": "越南 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴越南合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
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
              "detail": "通过 越南公安部官方 e-Visa 提交贴签或电子签申请。"
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
          "title": "越南 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问 越南出入境管理局 查询最新永居条例。"
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
          "title": "越南 短期旅游/访客通道（90天多次 e-Visa 电子签）",
          "fee": "25 USD（单次）/ 50 USD（多次）",
          "desc": "中国E字头新版护照已全面支持在越南公安部官网直接DIY申请90天单次或多次电子签，无需再找中介买批文！",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 越南官方电子签 (evisa.gov.vn) 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 越南公安部官方 e-Visa 提交申请并缴费（免签国直接填报入境卡）。"
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
          "title": "越南 商务考察 / 探亲访友 / 特殊通道",
          "fee": "25 USD（单次）/ 50 USD（多次）",
          "desc": "涵盖赴越南参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "参考 越南官方电子签 (evisa.gov.vn) 官方清单完成填报。"
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
    "id": "608",
    "code": "PHL",
    "nameZh": "菲律宾",
    "nameEn": "Philippines",
    "region": "东南亚 / SOUTHEAST ASIA",
    "coords": [
      121.77,
      12.88
    ],
    "badge": "使领馆网申 / 电子签",
    "tierColor": "#4A7B82",
    "labelPriority": false,
    "processing": "5–10 工作日",
    "submission": "菲驻华使领馆 / 电子签通道",
    "summary": "短期旅游需备好在职、流水及返程机票；持有有效美、日、澳、加、申根签证的中国公民可免签入境菲律宾停留7天！",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【材料真实性与翻译规范】在职证明、银行流水与行程订单务必真实可核验，非英文材料需附规范英文翻译件。"
    ],
    "links": [
      {
        "title": "菲律宾官方电子签 (eVisa)",
        "url": "https://evisa.gov.ph/",
        "desc": "官方签证/入境申请与政策查询入口"
      },
      {
        "title": "菲律宾移民局官网",
        "url": "https://immigration.gov.ph/",
        "desc": "官方移民局/使领馆/签证中心官网"
      }
    ],
    "jobLinks": [
      {
        "title": "LinkedIn 全球雇主直投",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "搜索菲律宾 (Philippines) 跨国企业与本地招聘岗位"
      },
      {
        "title": "Indeed 国际职位搜索引擎",
        "url": "https://www.indeed.com/",
        "desc": "按Philippines地区检索全职、技工与远程工作机会"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "菲律宾 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴菲律宾攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
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
              "detail": "通过 菲律宾官方电子签 (eVisa) 或当地使领馆递交留学签证申请。"
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
          "title": "菲律宾 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴菲律宾合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
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
              "detail": "通过 菲驻华使领馆 / 电子签通道 提交贴签或电子签申请。"
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
          "title": "菲律宾 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问 菲律宾移民局官网 查询最新永居条例。"
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
          "title": "菲律宾 短期旅游/访客通道（使领馆网申 / 电子签）",
          "fee": "约 190–280 RMB",
          "desc": "短期旅游需备好在职、流水及返程机票；持有有效美、日、澳、加、申根签证的中国公民可免签入境菲律宾停留7天！",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 菲律宾官方电子签 (eVisa) 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 菲驻华使领馆 / 电子签通道 提交申请并缴费（免签国直接填报入境卡）。"
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
          "title": "菲律宾 商务考察 / 探亲访友 / 特殊通道",
          "fee": "约 190–280 RMB",
          "desc": "涵盖赴菲律宾参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "参考 菲律宾官方电子签 (eVisa) 官方清单完成填报。"
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
    "id": "116",
    "code": "KHM",
    "nameZh": "柬埔寨",
    "nameEn": "Cambodia",
    "region": "东南亚 / SOUTHEAST ASIA",
    "coords": [
      104.99,
      12.57
    ],
    "badge": "30天 e-Visa / 落地签",
    "tierColor": "#789882",
    "labelPriority": false,
    "processing": "3 工作日",
    "submission": "官方 e-Visa / Cambodia e-Arrival",
    "summary": "支持在线申请电子签或机场落地签，入境前7天内须填写免费电子入境卡 (e-Arrival)。",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【材料真实性与翻译规范】在职证明、银行流水与行程订单务必真实可核验，非英文材料需附规范英文翻译件。"
    ],
    "links": [
      {
        "title": "柬埔寨外交部官方 e-Visa",
        "url": "https://www.evisa.gov.kh/",
        "desc": "官方签证/入境申请与政策查询入口"
      },
      {
        "title": "柬埔寨电子入境卡",
        "url": "https://arrival.gov.kh/",
        "desc": "官方移民局/使领馆/签证中心官网"
      }
    ],
    "jobLinks": [
      {
        "title": "LinkedIn 全球雇主直投",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "搜索柬埔寨 (Cambodia) 跨国企业与本地招聘岗位"
      },
      {
        "title": "Indeed 国际职位搜索引擎",
        "url": "https://www.indeed.com/",
        "desc": "按Cambodia地区检索全职、技工与远程工作机会"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "柬埔寨 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴柬埔寨攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
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
              "detail": "通过 柬埔寨外交部官方 e-Visa 或当地使领馆递交留学签证申请。"
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
          "title": "柬埔寨 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴柬埔寨合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
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
              "detail": "通过 官方 e-Visa / Cambodia e-Arrival 提交贴签或电子签申请。"
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
          "title": "柬埔寨 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问 柬埔寨电子入境卡 查询最新永居条例。"
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
          "title": "柬埔寨 短期旅游/访客通道（30天 e-Visa / 落地签）",
          "fee": "30 USD（e-Visa）",
          "desc": "支持在线申请电子签或机场落地签，入境前7天内须填写免费电子入境卡 (e-Arrival)。",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 柬埔寨外交部官方 e-Visa 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 官方 e-Visa / Cambodia e-Arrival 提交申请并缴费（免签国直接填报入境卡）。"
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
          "title": "柬埔寨 商务考察 / 探亲访友 / 特殊通道",
          "fee": "30 USD（e-Visa）",
          "desc": "涵盖赴柬埔寨参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "参考 柬埔寨外交部官方 e-Visa 官方清单完成填报。"
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
    "id": "418",
    "code": "LAO",
    "nameZh": "老挝",
    "nameEn": "Laos",
    "region": "东南亚 / SOUTHEAST ASIA",
    "coords": [
      102.49,
      19.86
    ],
    "badge": "e-Visa / 落地签",
    "tierColor": "#789882",
    "labelPriority": false,
    "processing": "3 工作日",
    "submission": "Lao eVisa 官方系统 / 磨憨口岸落地",
    "summary": "乘坐中老铁路出境或直飞万象，均可提前在线办理 e-Visa 或在口岸直接办理落地签。",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【材料真实性与翻译规范】在职证明、银行流水与行程订单务必真实可核验，非英文材料需附规范英文翻译件。"
    ],
    "links": [
      {
        "title": "老挝官方 e-Visa 网站",
        "url": "https://laoevisa.gov.la/",
        "desc": "官方签证/入境申请与政策查询入口"
      },
      {
        "title": "老挝移民局官网",
        "url": "https://immigration.gov.la/",
        "desc": "官方移民局/使领馆/签证中心官网"
      }
    ],
    "jobLinks": [
      {
        "title": "LinkedIn 全球雇主直投",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "搜索老挝 (Laos) 跨国企业与本地招聘岗位"
      },
      {
        "title": "Indeed 国际职位搜索引擎",
        "url": "https://www.indeed.com/",
        "desc": "按Laos地区检索全职、技工与远程工作机会"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "老挝 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴老挝攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
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
              "detail": "通过 老挝官方 e-Visa 网站 或当地使领馆递交留学签证申请。"
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
          "title": "老挝 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴老挝合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
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
              "detail": "通过 Lao eVisa 官方系统 / 磨憨口岸落地 提交贴签或电子签申请。"
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
          "title": "老挝 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问 老挝移民局官网 查询最新永居条例。"
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
          "title": "老挝 短期旅游/访客通道（e-Visa / 落地签）",
          "fee": "40–50 USD",
          "desc": "乘坐中老铁路出境或直飞万象，均可提前在线办理 e-Visa 或在口岸直接办理落地签。",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 老挝官方 e-Visa 网站 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 Lao eVisa 官方系统 / 磨憨口岸落地 提交申请并缴费（免签国直接填报入境卡）。"
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
          "title": "老挝 商务考察 / 探亲访友 / 特殊通道",
          "fee": "40–50 USD",
          "desc": "涵盖赴老挝参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "参考 老挝官方 e-Visa 网站 官方清单完成填报。"
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
    "id": "144",
    "code": "LKA",
    "nameZh": "斯里兰卡",
    "nameEn": "Sri Lanka",
    "region": "南亚 / SOUTH ASIA",
    "coords": [
      80.77,
      7.87
    ],
    "badge": "ETA 电子旅行授权",
    "tierColor": "#789882",
    "labelPriority": false,
    "processing": "24 小时内",
    "submission": "eta.gov.lk 官方系统",
    "summary": "出发前务必通过官方 eta.gov.lk 申请电子旅行授权，数小时内即可邮件下发。",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【材料真实性与翻译规范】在职证明、银行流水与行程订单务必真实可核验，非英文材料需附规范英文翻译件。"
    ],
    "links": [
      {
        "title": "斯里兰卡官方 ETA 系统",
        "url": "https://eta.gov.lk/",
        "desc": "官方签证/入境申请与政策查询入口"
      },
      {
        "title": "斯里兰卡移民局",
        "url": "https://www.immigration.gov.lk/",
        "desc": "官方移民局/使领馆/签证中心官网"
      }
    ],
    "jobLinks": [
      {
        "title": "LinkedIn 全球雇主直投",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "搜索斯里兰卡 (Sri Lanka) 跨国企业与本地招聘岗位"
      },
      {
        "title": "Indeed 国际职位搜索引擎",
        "url": "https://www.indeed.com/",
        "desc": "按Sri Lanka地区检索全职、技工与远程工作机会"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "斯里兰卡 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴斯里兰卡攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
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
              "detail": "通过 斯里兰卡官方 ETA 系统 或当地使领馆递交留学签证申请。"
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
          "title": "斯里兰卡 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴斯里兰卡合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
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
              "detail": "通过 eta.gov.lk 官方系统 提交贴签或电子签申请。"
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
          "title": "斯里兰卡 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问 斯里兰卡移民局 查询最新永居条例。"
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
          "title": "斯里兰卡 短期旅游/访客通道（ETA 电子旅行授权）",
          "fee": "免签政策/50 USD（以官网实时为准）",
          "desc": "出发前务必通过官方 eta.gov.lk 申请电子旅行授权，数小时内即可邮件下发。",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 斯里兰卡官方 ETA 系统 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 eta.gov.lk 官方系统 提交申请并缴费（免签国直接填报入境卡）。"
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
          "title": "斯里兰卡 商务考察 / 探亲访友 / 特殊通道",
          "fee": "免签政策/50 USD（以官网实时为准）",
          "desc": "涵盖赴斯里兰卡参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "参考 斯里兰卡官方 ETA 系统 官方清单完成填报。"
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
    "id": "524",
    "code": "NPL",
    "nameZh": "尼泊尔",
    "nameEn": "Nepal",
    "region": "南亚 / SOUTH ASIA",
    "coords": [
      84.12,
      28.39
    ],
    "badge": "中国公民免签证费落地签",
    "tierColor": "#789882",
    "labelPriority": false,
    "processing": "机场即时办理",
    "submission": "在线预填 + 加德满都机场落地",
    "summary": "尼泊尔对中国公民免收旅游签证费！行前在官网填好预申请表打印条形码，落地加德满都机场即可免费贴签。",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【材料真实性与翻译规范】在职证明、银行流水与行程订单务必真实可核验，非英文材料需附规范英文翻译件。"
    ],
    "links": [
      {
        "title": "尼泊尔移民局在线预填表",
        "url": "https://nepaliport.immigration.gov.np/",
        "desc": "官方签证/入境申请与政策查询入口"
      },
      {
        "title": "尼泊尔移民局官网",
        "url": "https://www.immigration.gov.np/",
        "desc": "官方移民局/使领馆/签证中心官网"
      }
    ],
    "jobLinks": [
      {
        "title": "LinkedIn 全球雇主直投",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "搜索尼泊尔 (Nepal) 跨国企业与本地招聘岗位"
      },
      {
        "title": "Indeed 国际职位搜索引擎",
        "url": "https://www.indeed.com/",
        "desc": "按Nepal地区检索全职、技工与远程工作机会"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "尼泊尔 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴尼泊尔攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
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
              "detail": "通过 尼泊尔移民局在线预填表 或当地使领馆递交留学签证申请。"
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
          "title": "尼泊尔 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴尼泊尔合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
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
              "detail": "通过 在线预填 + 加德满都机场落地 提交贴签或电子签申请。"
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
          "title": "尼泊尔 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问 尼泊尔移民局官网 查询最新永居条例。"
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
          "title": "尼泊尔 短期旅游/访客通道（中国公民免签证费落地签）",
          "fee": "0 元（免签证费！）",
          "desc": "尼泊尔对中国公民免收旅游签证费！行前在官网填好预申请表打印条形码，落地加德满都机场即可免费贴签。",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 尼泊尔移民局在线预填表 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 在线预填 + 加德满都机场落地 提交申请并缴费（免签国直接填报入境卡）。"
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
          "title": "尼泊尔 商务考察 / 探亲访友 / 特殊通道",
          "fee": "0 元（免签证费！）",
          "desc": "涵盖赴尼泊尔参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "参考 尼泊尔移民局在线预填表 官方清单完成填报。"
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
    "id": "356",
    "code": "IND",
    "nameZh": "印度",
    "nameEn": "India",
    "region": "南亚 / SOUTH ASIA",
    "coords": [
      78.96,
      20.59
    ],
    "badge": "e-Visa / 纸质签证",
    "tierColor": "#4A7B82",
    "labelPriority": false,
    "processing": "3–10 工作日",
    "submission": "indianvisaonline.gov.in 官网",
    "summary": "印度支持在官方 indianvisaonline.gov.in 填写申请表；部分时期中国公民需视实时政策预约签证中心递交纸质材料。",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【材料真实性与翻译规范】在职证明、银行流水与行程订单务必真实可核验，非英文材料需附规范英文翻译件。"
    ],
    "links": [
      {
        "title": "印度官方签证与 e-Visa 门户",
        "url": "https://indianvisaonline.gov.in/",
        "desc": "官方签证/入境申请与政策查询入口"
      },
      {
        "title": "印度移民局 (BOI)",
        "url": "https://boi.gov.in/",
        "desc": "官方移民局/使领馆/签证中心官网"
      }
    ],
    "jobLinks": [
      {
        "title": "LinkedIn 全球雇主直投",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "搜索印度 (India) 跨国企业与本地招聘岗位"
      },
      {
        "title": "Indeed 国际职位搜索引擎",
        "url": "https://www.indeed.com/",
        "desc": "按India地区检索全职、技工与远程工作机会"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "印度 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴印度攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
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
              "detail": "通过 印度官方签证与 e-Visa 门户 或当地使领馆递交留学签证申请。"
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
          "title": "印度 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴印度合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
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
              "detail": "通过 indianvisaonline.gov.in 官网 提交贴签或电子签申请。"
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
          "title": "印度 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问 印度移民局 (BOI) 查询最新永居条例。"
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
          "title": "印度 短期旅游/访客通道（e-Visa / 纸质签证）",
          "fee": "25–80 USD",
          "desc": "印度支持在官方 indianvisaonline.gov.in 填写申请表；部分时期中国公民需视实时政策预约签证中心递交纸质材料。",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 印度官方签证与 e-Visa 门户 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 indianvisaonline.gov.in 官网 提交申请并缴费（免签国直接填报入境卡）。"
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
          "title": "印度 商务考察 / 探亲访友 / 特殊通道",
          "fee": "25–80 USD",
          "desc": "涵盖赴印度参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "参考 印度官方签证与 e-Visa 门户 官方清单完成填报。"
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
    "id": "242",
    "code": "FJI",
    "nameZh": "斐济",
    "nameEn": "Fiji",
    "region": "大洋洲 / OCEANIA",
    "coords": [
      178.07,
      -17.71
    ],
    "badge": "中斐互免30天免签",
    "tierColor": "#789882",
    "labelPriority": false,
    "processing": "免签即时入境",
    "submission": "免签直飞（停留30天）",
    "summary": "持6个月以上有效中国普通护照免签入境斐济30天，只需备好往返机票与酒店订单。",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【材料真实性与翻译规范】在职证明、银行流水与行程订单务必真实可核验，非英文材料需附规范英文翻译件。"
    ],
    "links": [
      {
        "title": "斐济移民局官网",
        "url": "https://www.immigration.gov.fj/",
        "desc": "官方签证/入境申请与政策查询入口"
      }
    ],
    "jobLinks": [
      {
        "title": "LinkedIn 全球雇主直投",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "搜索斐济 (Fiji) 跨国企业与本地招聘岗位"
      },
      {
        "title": "Indeed 国际职位搜索引擎",
        "url": "https://www.indeed.com/",
        "desc": "按Fiji地区检索全职、技工与远程工作机会"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "斐济 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴斐济攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
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
              "detail": "通过 斐济移民局官网 或当地使领馆递交留学签证申请。"
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
          "title": "斐济 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴斐济合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
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
              "detail": "通过 免签直飞（停留30天） 提交贴签或电子签申请。"
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
          "title": "斐济 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问 斐济移民局官网 查询最新永居条例。"
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
          "title": "斐济 短期旅游/访客通道（中斐互免30天免签）",
          "fee": "0 元（互免）",
          "desc": "持6个月以上有效中国普通护照免签入境斐济30天，只需备好往返机票与酒店订单。",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 斐济移民局官网 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 免签直飞（停留30天） 提交申请并缴费（免签国直接填报入境卡）。"
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
          "title": "斐济 商务考察 / 探亲访友 / 特殊通道",
          "fee": "0 元（互免）",
          "desc": "涵盖赴斐济参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "参考 斐济移民局官网 官方清单完成填报。"
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
    "id": "496",
    "code": "MNG",
    "nameZh": "蒙古",
    "nameEn": "Mongolia",
    "region": "东亚 / EAST ASIA",
    "coords": [
      103.85,
      46.86
    ],
    "badge": "e-Visa 官方电子签（中文界面）",
    "tierColor": "#4A7B82",
    "labelPriority": false,
    "processing": "48 小时内",
    "submission": "evisa.mn（支持中文）",
    "summary": "官方系统提供完整简体中文界面，上传护照首页与白底照后通常 2 天内直接邮件下发电子签。",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【材料真实性与翻译规范】在职证明、银行流水与行程订单务必真实可核验，非英文材料需附规范英文翻译件。"
    ],
    "links": [
      {
        "title": "蒙古国官方电子签中文入口",
        "url": "https://evisa.mn/cn",
        "desc": "官方签证/入境申请与政策查询入口"
      }
    ],
    "jobLinks": [
      {
        "title": "LinkedIn 全球雇主直投",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "搜索蒙古 (Mongolia) 跨国企业与本地招聘岗位"
      },
      {
        "title": "Indeed 国际职位搜索引擎",
        "url": "https://www.indeed.com/",
        "desc": "按Mongolia地区检索全职、技工与远程工作机会"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "蒙古 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴蒙古攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
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
              "detail": "通过 蒙古国官方电子签中文入口 或当地使领馆递交留学签证申请。"
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
          "title": "蒙古 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴蒙古合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
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
              "detail": "通过 evisa.mn（支持中文） 提交贴签或电子签申请。"
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
          "title": "蒙古 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问 蒙古国官方电子签中文入口 查询最新永居条例。"
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
          "title": "蒙古 短期旅游/访客通道（e-Visa 官方电子签（中文界面））",
          "fee": "约 51.5 USD",
          "desc": "官方系统提供完整简体中文界面，上传护照首页与白底照后通常 2 天内直接邮件下发电子签。",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 蒙古国官方电子签中文入口 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 evisa.mn（支持中文） 提交申请并缴费（免签国直接填报入境卡）。"
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
          "title": "蒙古 商务考察 / 探亲访友 / 特殊通道",
          "fee": "约 51.5 USD",
          "desc": "涵盖赴蒙古参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "参考 蒙古国官方电子签中文入口 官方清单完成填报。"
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
    "id": "096",
    "code": "BRN",
    "nameZh": "文莱",
    "nameEn": "Brunei",
    "region": "东南亚 / SOUTHEAST ASIA",
    "coords": [
      114.73,
      4.54
    ],
    "badge": "免签 / 14天落地签",
    "tierColor": "#789882",
    "labelPriority": false,
    "processing": "免签/落地即时",
    "submission": "直飞斯里巴加湾机场",
    "summary": "中国公民可享免签（以最新对等政策为准）或便捷机场落地签停留 14 天，需备妥往返机票与酒店订单。",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【材料真实性与翻译规范】在职证明、银行流水与行程订单务必真实可核验，非英文材料需附规范英文翻译件。"
    ],
    "links": [
      {
        "title": "文莱移民与国家登记局官网",
        "url": "https://www.immigration.gov.bn/",
        "desc": "官方签证/入境申请与政策查询入口"
      }
    ],
    "jobLinks": [
      {
        "title": "LinkedIn 全球雇主直投",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "搜索文莱 (Brunei) 跨国企业与本地招聘岗位"
      },
      {
        "title": "Indeed 国际职位搜索引擎",
        "url": "https://www.indeed.com/",
        "desc": "按Brunei地区检索全职、技工与远程工作机会"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "文莱 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴文莱攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
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
              "detail": "通过 文莱移民与国家登记局官网 或当地使领馆递交留学签证申请。"
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
          "title": "文莱 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴文莱合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
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
              "detail": "通过 直飞斯里巴加湾机场 提交贴签或电子签申请。"
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
          "title": "文莱 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问 文莱移民与国家登记局官网 查询最新永居条例。"
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
          "title": "文莱 短期旅游/访客通道（免签 / 14天落地签）",
          "fee": "0 元（免签）/ 20 BND (落地)",
          "desc": "中国公民可享免签（以最新对等政策为准）或便捷机场落地签停留 14 天，需备妥往返机票与酒店订单。",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 文莱移民与国家登记局官网 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 直飞斯里巴加湾机场 提交申请并缴费（免签国直接填报入境卡）。"
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
          "title": "文莱 商务考察 / 探亲访友 / 特殊通道",
          "fee": "0 元（免签）/ 20 BND (落地)",
          "desc": "涵盖赴文莱参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "参考 文莱移民与国家登记局官网 官方清单完成填报。"
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
    "id": "586",
    "code": "PAK",
    "nameZh": "巴基斯坦",
    "nameEn": "Pakistan",
    "region": "南亚 / SOUTH ASIA",
    "coords": [
      69.35,
      30.38
    ],
    "badge": "对华免签证费 e-Visa",
    "tierColor": "#4A7B82",
    "labelPriority": false,
    "processing": "24–72 小时",
    "submission": "visa.nadra.gov.pk 官方电子签",
    "summary": "巴基斯坦对中国公民实行旅游/商务电子签免签证费（Visa Prior to Arrival）政策，在线填写即可快速获批。",
    "pitfalls": [
      "【核对护照有效期与空白页】出发前确保中国护照剩余有效期在 6 个月以上且至少有 2 页空白签证页，否则航司会直接拒绝办理登机。",
      "【警惕高价山寨代填/代办网站】所有电子签或入境卡（如 e-Visa / eTA / MDAC）务必认准 .gov 或官方域名入口，切勿在搜索引擎广告位支付高额服务费。",
      "【切勿持旅游签/免签非法务工】免签或旅游签仅限观光商务考察，未取得当地正规 Work Permit 前切勿私下打工或超时逾期停留。",
      "【材料真实性与翻译规范】在职证明、银行流水与行程订单务必真实可核验，非英文材料需附规范英文翻译件。"
    ],
    "links": [
      {
        "title": "巴基斯坦内政部官方电子签",
        "url": "https://visa.nadra.gov.pk/",
        "desc": "官方签证/入境申请与政策查询入口"
      }
    ],
    "jobLinks": [
      {
        "title": "LinkedIn 全球雇主直投",
        "url": "https://www.linkedin.com/jobs/",
        "desc": "搜索巴基斯坦 (Pakistan) 跨国企业与本地招聘岗位"
      },
      {
        "title": "Indeed 国际职位搜索引擎",
        "url": "https://www.indeed.com/",
        "desc": "按Pakistan地区检索全职、技工与远程工作机会"
      }
    ],
    "pathways": {
      "study": [
        {
          "id": "main",
          "title": "巴基斯坦 长期留学 / 语言研修签证",
          "fee": "按目标院校与使领馆实时规费",
          "desc": "赴巴基斯坦攻读学位或语言项目，须先获得当地教育部认可院校的正式录取通知书，再凭录取信与资金证明办理学生签证/居留许可。",
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
              "detail": "通过 巴基斯坦内政部官方电子签 或当地使领馆递交留学签证申请。"
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
          "title": "巴基斯坦 工作签证 / 就业许可",
          "fee": "视工作许可年限与雇主担保政策",
          "desc": "赴巴基斯坦合法工作通常采取“先雇主担保、后入境贴签”原则，需由当地合规企业向劳动或移民部门申领工作许可预批，再由本人办理入境工作签证。",
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
              "detail": "通过 visa.nadra.gov.pk 官方电子签 提交贴签或电子签申请。"
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
          "title": "巴基斯坦 长期居留 / 永居转换路径",
          "fee": "以当地移民局官网公布为准",
          "desc": "大多数国家支持通过合法工作纳税、家庭团聚或合规投资/远程被动收入居留累积一定年限后，申请当地永久居留权 (PR)。",
          "tips": "规划长期居留时，务必保留好每年连续的纳税记录、社保缴费单、合法租房合同与无犯罪记录。",
          "steps": [
            {
              "title": "核对当地永居法定居住年限与语言要求",
              "detail": "访问 巴基斯坦内政部官方电子签 查询最新永居条例。"
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
          "title": "巴基斯坦 短期旅游/访客通道（对华免签证费 e-Visa）",
          "fee": "0 元（免签证费！）",
          "desc": "巴基斯坦对中国公民实行旅游/商务电子签免签证费（Visa Prior to Arrival）政策，在线填写即可快速获批。",
          "tips": "出发前务必核对护照剩余有效期（通常要求6个月以上）及至少2页空白签证页，并保留往返机票与酒店预订单。",
          "steps": [
            {
              "title": "确认入境方式与官方入口",
              "detail": "访问 巴基斯坦内政部官方电子签 核对最新免签/电子签/预约要求。"
            },
            {
              "title": "准备基础身份与行程材料",
              "detail": "备齐有效护照、电子照片、行程单、酒店及往返机票预订单（贴签国另附流水与在职证明）。"
            },
            {
              "title": "在线提交或前往签证中心递交",
              "detail": "通过 visa.nadra.gov.pk 官方电子签 提交申请并缴费（免签国直接填报入境卡）。"
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
          "title": "巴基斯坦 商务考察 / 探亲访友 / 特殊通道",
          "fee": "0 元（免签证费！）",
          "desc": "涵盖赴巴基斯坦参加展会商务洽谈、探望当地亲友，以及部分国家推出的数字游民/长期旅居或过境便利通道。",
          "tips": "商务访问须由当地合作企业出具正式抬头纸邀请函；探亲须附邀请人当地合法居留证件复印件。",
          "steps": [
            {
              "title": "准备邀请方或过境佐证材料",
              "detail": "商务备好邀请函与派遣函；探亲备好亲属关系证明。"
            },
            {
              "title": "核对免签或网申通道提交",
              "detail": "参考 巴基斯坦内政部官方电子签 官方清单完成填报。"
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
