['closed', 'is closing', 'has closed'], '剧院被关闭，执行者不重要。'],
  ['The flight ___ because of the storm.', 'was cancelled', ['cancelled', 'is cancelling', 'has cancelled'], '航班被取消，执行者不明确。'],
  ['The results ___ online tomorrow.', 'will be published', ['will publish', 'publish', 'are publishing'], '成绩将被公布，执行者不重要。'],
  ['A lot of forest ___ in the fire last summer.', 'was destroyed', ['destroyed', 'are destroying', 'have destroyed'], '森林被毁，执行者不明确。'],
  ['The bullying video ___ from the website.', 'was deleted', ['deleted', 'is deleting', 'has deleted'], '视频被删除，执行者不重要。'],
  ['The money for the school trip ___ from the office.', 'was taken', ['took', 'is taking', 'has taken'], '钱被拿走，执行者未知。']
  ];
  const pasUnknown = () => PAS_UNKNOWN.map(([sentence, a, d, e]) => q(sentence, a, d, e));

const PAS_EMPHASIZE = [
  ['This traditional song ___ by a local artist every year.', 'is sung', ['sings', 'sang', 'is singing'], '强调歌曲被演唱，用被动。'],
  ['The prize ___ to the student with the highest score.', 'was awarded', ['awarded', 'is awarding', 'has awarded'], '强调奖品被颁发，用被动。'],
  ['The algorithm ___ by engineers at the company.', 'was designed', ['designed', 'is designing', 'has designed'], '强调算法被设计，用被动。'],
  ['The climate report ___ by scientists from ten countries.', 'was written', ['wrote', 'is writing', 'has written'], '强调报告被撰写，用被动。'],
  ['The mental health guide ___ by thousands of students each term.', 'is read', ['reads', 'read', 'is reading'], '强调手册被阅读，用被动。'],
  ['The new airport ___ by a foreign company last year.', 'was built', ['built', 'is building', 'has built'], '强调机场被建造，用被动。'],
  ['The school rules ___ to every new student in September.', 'are explained', ['explains', 'explained', 'is explaining'], '强调校规被讲解，用被动。'],
  ['Personal photos ___ on social media without permission.', 'are posted', ['post', 'posted', 'is posting'], '强调照片被发布，用被动。'],
  ['The museum ___ by millions of visitors every year.', 'is visited', ['visits', 'visited', 'is visiting'], '强调博物馆被参观，用被动。'],
  ['The winning essay ___ in the school magazine last week.', 'was published', ['published', 'is publishing', 'has published'], '强调文章被刊登，用被动。']
  ];
  const pasEmphasize = () => PAS_EMPHASIZE.map(([sentence, a, d, e]) => q(sentence, a, d, e));

const PAS_BY = [
  ['The graffiti was sprayed ___ a can of red paint.', 'with', ['by', 'in', 'on'], 'with 表示使用的工具；by 后接动作执行者。'],
  ['The novel was translated ___ more than thirty languages.', 'into', ['by', 'with', 'on'], 'translate into 是固定搭配。'],
  ['The new rules were explained ___ every student at the assembly.', 'to', ['by', 'with', 'for'], 'explain sth to sb，被动中保留 to。'],
  ['The data was collected ___ a short online questionnaire.', 'with', ['by', 'in', 'on'], 'with 表示使用的工具或手段。'],
  ['These bottles are made ___ recycled glass.', 'of', ['by', 'with', 'on'], 'be made of 表示由……制成（看得出材料）。'],
  ['The classroom was filled ___ noise before the exam.', 'with', ['by', 'in', 'on'], 'be filled with 是固定搭配。'],
  ['The notice was written ___ plain English.', 'in', ['by', 'with', 'on'], 'in + 语言。'],
  ['The power cut was caused ___ a storm.', 'by', ['with', 'in', 'on'], 'be caused by 表示原因。'],
  ['The old painting was sold ___ a museum in Beijing.', 'to', ['by', 'with', 'for'], 'sell sth to sb，被动中保留 to。'],
  ['The photo was shared ___ thousands of strangers online.', 'by', ['with', 'in', 'on'], 'by 后接动作执行者。']
  ];
  const pasBy = () => PAS_BY.map(([sentence, a, d, e]) => q(sentence, a, d, e));

const PAS_STEPS = [
  ['Teachers use online quizzes in every lesson. （改为被动语态）', 'Online quizzes are used in every lesson.', '主动变被动：宾语 online quizzes 作主语，use → are used。'],
  ['The city built a new recycling centre in 2020. （改为被动语态）', 'A new recycling centre was built in 2020.', '过去时被动：was + built。'],
  ['The school gave the students a mental health guide. （改为被动语态）', 'The students were given a mental health guide.|A mental health guide was given to the students.', '双宾语被动：把间接宾语 the students 作主语更自然。'],
  ['Someone has deleted my account. （改为被动语态）', 'My account has been deleted.', '现在完成时被动：has been + deleted。'],
  ['They will publish the results next month. （改为被动语态）', 'The results will be published next month.', '将来时被动：will be + published。'],
  ['You must submit the assignment before Friday. （改为被动语态）', 'The assignment must be submitted before Friday.', '情态动词被动：must be + submitted。'],
  ['The company is developing a new learning app. （改为被动语态）', 'A new learning app is being developed by the company.', '现在进行时被动：is being + developed。'],
  ['They had restored the old theatre before the festival. （改为被动语态）', 'The old theatre had been restored before the festival.', '过去完成时被动：had been + restored。'],
  ['People believe that online learning is effective. （改为被动语态）', 'It is believed that online learning is effective.|Online learning is believed to be effective.', 'It is believed that... 是常用被动句型。'],
  ['His parents made him attend extra classes. （改为被动语态）', 'He was made to attend extra classes.', 'make sb do 变被动后要还原 to：be made to do。']
  ];
  const pasSteps = () => PAS_STEPS.map(([sentence, a, e]) => r(sentence, a, e));

const PAS_DOUBLE = [
  ['The school gave every student a laptop. （改为被动语态）', 'Every student was given a laptop.|A laptop was given to every student.', 'give sb sth 变被动：sb be given sth / sth be given to sb。'],
  ['The app sent me a warning message. （改为被动语态）', 'I was sent a warning message.|A warning message was sent to me.', 'send sb sth 的两种被动形式。'],
  ['The teacher taught us digital skills. （改为被动语态）', 'We were taught digital skills.|Digital skills were taught to us.', 'teach sb sth 的两种被动形式。'],
  ['The guide showed us the old paintings. （改为被动语态）', 'We were shown the old paintings.|The old paintings were shown to us.', 'show sb sth 的两种被动形式。'],
  ['The doctor told her the truth about stress. （改为被动语态）', 'She was told the truth about stress.|The truth about stress was told to her.', 'tell sb sth 的两种被动形式。'],
  ['The company offered him a job in Singapore. （改为被动语态）', 'He was offered a job in Singapore.|A job in Singapore was offered to him.', 'offer sb sth 的两种被动形式。'],
  ['Her parents bought her a reusable bottle. （改为被动语态）', 'She was bought a reusable bottle.|A reusable bottle was bought for her.', 'buy sb sth 变被动时用 for 引出受益者。'],
  ['They promised us a faster connection. （改为被动语态）', 'We were promised a faster connection.|A faster connection was promised to us.', 'promise sb sth 的两种被动形式。'],
  ['The university paid him a travel grant. （改为被动语态）', 'He was paid a travel grant.|A travel grant was paid to him.', 'pay sb sth 的两种被动形式。'],
  ['The teacher handed the students the exam papers. （改为被动语态）', 'The students were handed the exam papers.|The exam papers were handed to the students.', 'hand sb sth 的两种被动形式。']
  ];
  const pasDouble = () => PAS_DOUBLE.map(([sentence, a, e]) => r(sentence, a, e));

  /* ============================================================
     高考被动语态 200 题（导入题库，2026-10-25）
     来源：高考英语被动语态单选200题.md（真题/真题改编 32 + 仿真 168）
     8 大模块对应 8 个考点叶；题型以单选为主，运行时按题型分配器可转换
     ============================================================ */
const GK_PAS_M1 = [
  ["The players' personalities ___ during the game, and one's weaknesses are exposed to the opponent.", "are revealed", ["reveal", "revealed", "have revealed"], "【模块①｜一般现在时被动】主语 personalities 与 reveal 是被动关系，且描述一般事实用一般现在时，主语复数用 are revealed。A、C、D 均为主动语态，不符合\"个性被显露\"的被动逻辑。（来源：2025·全国一卷）"],
  ["English ___ by millions of people around the world.", "is spoken", ["speaks", "was spoken", "has been spoken"], "【模块①｜一般现在时被动】描述客观事实，用一般现在时；English 是 speak 的承受者，用 is spoken。C 为过去时、D 为现在完成时，均不符合\"语言被说\"的常态表述。（来源：2025·浙江卷）"],
  ["Two years later, a six-meter-tall pavilion, inspired by The Peony Pavilion, ___ at the First Garden, just ten minutes' walk from Shakespeare's birthplace.", "was built", ["builds", "has been built", "had been built"], "【模块①｜一般过去时被动】时间状语 Two years later 表示过去，主语 pavilion 与 build 是被动关系，用一般过去时被动 was built。C 强调与现在的关联、D 强调过去的过去，均不符合语境。（来源：2024·新高考II卷）"],
  ["The GPNP ___ to reflect the guiding principle of protecting the authenticity and integrity of natural ecosystems.", "is designed", ["designs", "has designed", "was designing"], "【模块①｜一般现在时被动】叙述客观事实用一般现在时，主语 GPNP 与 design 为被动关系（\"被设计来体现\"），用 is designed。A 主动语态逻辑不通。（来源：2022·新高考I卷）"],
  ["On April 5, 2024, John Tinniswood ___ the world's oldest living man.", "was named", ["names", "has been named", "had named"], "【模块①｜一般过去时被动】具体过去时间 On April 5, 2024 提示用一般过去时，主语是人、与 name 为被动关系（\"被评为\"），用 was named。C 现在完成时、D 主动语态均不合适。（来源：2024·北京卷）"],
  ["Travelling to conferences, lectures, workshops, and the like frequently by plane ___ as important for scientists to get together and exchange information.", "is viewed", ["views", "was viewed", "viewing"], "【模块①｜一般现在时被动】描述人们普遍认知的事实用一般现在时，动名词短语作主语与 view 为被动关系（\"被视为\"），用 is viewed。C 为过去时不合语境。（来源：2022·浙江1月卷）"],
  ["Mary's niece wrote, \"The little home ___ white. It was sweet and fresh. Mary loved it.\"", "was painted", ["paints", "has been painted", "had painted"], "【模块①｜一般过去时被动】根据 was sweet 等过去时语境，房子\"被漆成\"白色用一般过去时被动 was painted。A、D 主动语态不合逻辑，C 现在完成时强调与现在的关联。（来源：2021·浙江卷）"],
  ["The parts of a museum open to the public ___ galleries or rooms.", "are called", ["call", "called", "have called"], "【模块①｜一般现在时被动】描述客观事实用一般现在时，主语 parts 与 call 为被动关系（\"被称为\"），复数用 are called。A 主动语态逻辑颠倒。（来源：2020·新高考卷）"],
  ["The Xi'an City Wall is the most complete city wall that has survived China's long history. It ___ originally to protect the city in the Tang dynasty.", "was built", ["builds", "has been built", "had built"], "【模块①｜一般过去时被动】in the Tang dynasty 为过去时间，主语 It 与 build 被动关系，用一般过去时被动 was built。C 现在完成时不能与明确的过去时间连用。（来源：2021·全国甲卷）"],
  ["The library, along with two reading rooms, ___ to the public from Tuesday to Sunday.", "is open", ["is opened", "are opened", "are open"], "【模块①｜一般现在时被动】along with 连接时主语按前者 library（单数）确定，用 is；be open 表\"开放\"的状态（形容词），不是被动动作。此处考查\"状态\"而非被动语态，但 open 的被动动作形式是 be opened，本题语境指开放状态，选 is open。（来源：仿真题（依据高考考点编制）"],
  ["A new bridge over the river ___ next year to ease the traffic pressure.", "will be built", ["is built", "will build", "has been built"], "【模块①｜一般将来时被动】next year 为将来时间，主语 bridge 与 build 为被动关系，用一般将来时被动 will be built。C 主动语态不合逻辑。（来源：仿真题（依据高考考点编制）"],
  ["The disabled ___ great respect by the whole society.", "are shown", ["shows", "showed", "is shown"], "【模块①｜一般现在时被动】\"the + 形容词\"表示一类人时作复数看，用 are；与 show 为被动关系（\"受到尊重\"），用 are shown。（来源：仿真题（依据高考考点编制）"],
  ["Oh, this is really a big shop. Do you know when it ___?", "was built", ["built", "has built", "has been built"], "【模块①｜一般过去时被动】it 指 shop，是 build 的承受者，用被动；when 询问具体建成时间，用一般过去时 was built。A、C 为主动语态，D 现在完成时强调对现在的影响。（来源：2005·河北省）"],
  ["—How often ___ your school sports meeting ___? —Once a year.", "is; held", ["does; hold", "was; hold", "did; hold"], "【模块①｜一般现在时被动】Once a year 表频率用一般现在时，主语 sports meeting 是 hold 的承受者，用被动 is held。其余选项为主动语态。（来源：2005·江苏南通）"],
  ["The doctor looked over Peter carefully after he ___ to the hospital.", "was taken", ["takes", "is taken", "took"], "【模块①｜一般过去时被动】he 指 Peter，是 take 的承受者（\"被送到医院\"），用被动；looked over 为过去时，此处也用过去时 was taken。（来源：2005·北京市）"],
  ["The museum, as well as the gardens around it, ___ to the public every day except Monday.", "is opened", ["is open", "are opened", "are open"], "【模块①｜一般现在时被动】as well as 连接时主语按 museum（单数）确定，用 is；此处强调\"被开放\"的动作/状态转换，用 is opened。若选 A（is open）虽语法正确但 open 为形容词表状态，本题语境强调开放动作，D 更贴切。（来源：仿真题（依据高考考点编制）"],
  ["It is said that a space exhibition ___ in the city hall next month.", "will be held", ["holds", "will hold", "is held"], "【模块①｜一般将来时被动】next month 为将来时间，主语 exhibition 与 hold 为被动关系，用 will be held。C、A 主动语态不合逻辑。（来源：仿真题（依据高考考点编制）"],
  ["Many a student ___ to take part in the volunteer program this semester.", "is invited", ["have invited", "are invited", "invites"], "【模块①｜一般现在时被动】\"many a + 单数名词\"作主语时谓语用单数；与 invite 为被动关系（\"被邀请\"），用 is invited。（来源：仿真题（依据高考考点编制）"],
  ["The young trees ___ by the students when the heavy rain suddenly started.", "were planted", ["are planted", "had been planted", "plant"], "【模块①｜一般过去时被动】when 引导的从句为过去时，主句描述当时发生的被动动作，用一般过去时被动 were planted。C 过去完成时强调\"过去的过去\"，此处无此逻辑。（来源：仿真题（依据高考考点编制）"],
  ["Not only the teacher but also the students ___ to wear school uniforms on weekdays.", "are required", ["require", "is required", "requires"], "【模块①｜一般现在时被动】not only... but also... 连接主语时谓语就近一致，靠近谓语的是 students（复数），用 are；与 require 为被动关系，用 are required。（来源：仿真题（依据高考考点编制）"],
  ["The old temple on the hill ___ in the fire last century and was never rebuilt.", "was destroyed", ["has been destroyed", "had destroyed", "destroys"], "【模块①｜一般过去时被动】last century 为过去时间，主语 temple 与 destroy 为被动关系，用一般过去时被动 was destroyed。C 主动语态不合逻辑。（来源：仿真题（依据高考考点编制）"],
  ["The price of oil, together with other fuel prices, ___ regularly by the government.", "is adjusted", ["have adjusted", "are adjusted", "adjusts"], "【模块①｜一般现在时被动】together with 连接时主语按 price（单数）确定，用 is；与 adjust 为被动关系（\"被调整\"），用 is adjusted。（来源：仿真题（依据高考考点编制）"],
  ["The new regulation ___ into effect on the first day of next month.", "will be put", ["comes", "is put", "will put"], "【模块①｜一般将来时被动】next month 为将来时间，主语 regulation 与 put 为被动关系（\"被实施\"），用 will be put。A 主动语态不合逻辑。（来源：仿真题（依据高考考点编制）"],
  ["Each of the students in our class ___ a library card by the school.", "is given", ["gave", "are given", "gives"], "【模块①｜一般现在时被动】each of + 复数名词作主语时谓语用单数，用 is；与 give 为被动关系（\"被给予\"），用 is given。（来源：仿真题（依据高考考点编制）"],
  ["The injured man ___ to the hospital immediately after the accident happened.", "was rushed", ["has rushed", "rushed", "rushes"], "【模块①｜一般过去时被动】after 从句为过去时，主句也用过去时；主语 man 与 rush 为被动关系（\"被紧急送往\"），用 was rushed。（来源：仿真题（依据高考考点编制）"],
  ["The number of students in this school ___ to over 3,000 in recent years.", "has increased", ["is increased", "are increased", "increases"], "【模块①｜一般现在时被动】the number of + 复数名词作主语时谓语用单数；increase 在此为不及物动词（\"增长\"），无被动，用 has increased。此处考查主动语态，反衬被动语态的主谓一致考点。（来源：仿真题（依据高考考点编制）"],
  ["A press conference ___ tomorrow morning to announce the breakthrough.", "will be held", ["is held", "held", "holds"], "【模块①｜一般将来时被动】tomorrow morning 为将来时间，主语 conference 与 hold 为被动关系，用 will be held。A 一般现在时不符时间标志。（来源：仿真题（依据高考考点编制）"],
  ["The workers' wages ___ every month without delay.", "are paid", ["paid", "pay", "have paid"], "【模块①｜一般现在时被动】every month 为一般现在时标志，主语 wages 与 pay 为被动关系（\"被支付\"），用 are paid。（来源：仿真题（依据高考考点编制）"],
  ["The famous novel ___ into more than thirty languages since it was first published.", "has been translated", ["had translated", "was translated", "translates"], "【模块①｜一般过去时被动】since 为现在完成时标志，主语 novel 与 translate 为被动关系，用现在完成时被动 has been translated。B 一般过去时不能与 since 连用。（来源：仿真题（依据高考考点编制）"],
  ["The sports meet, rather than the art festival, ___ to be held outdoors this year.", "is planned", ["are planned", "plan", "plans"], "【模块①｜一般现在时被动】rather than 连接时主语按前者 sports meet（单数）确定，用 is；与 plan 为被动关系（\"被计划\"），用 is planned。（来源：仿真题（依据高考考点编制）"],
  ["If it doesn't rain, the outdoor ceremony ___ as scheduled this Sunday.", "will be held", ["is held", "will hold", "holds"], "【模块①｜一般将来时被动】主将从现原则，主句用将来时；主语 ceremony 与 hold 为被动关系，用 will be held。（来源：仿真题（依据高考考点编制）"],
  ["Three-fifths of the earth's surface ___ by water.", "are covered", ["cover", "covers", "is covered"], "【模块①｜一般现在时被动】分数修饰的名词 surface 为不可数但此处指\"区域\"，实际用复数概念，谓语用 are；与 cover 为被动关系（\"被覆盖\"），用 are covered。（来源：仿真题（依据高考考点编制）"],
  ["The missing documents ___ on the desk when we entered the office.", "were found", ["found", "find", "are found"], "【模块①｜一般过去时被动】when 从句为过去时，主句用过去时；主语 documents 与 find 为被动关系，用 were found。（来源：仿真题（依据高考考点编制）"],
  ["The teacher, with all her students, ___ warmly welcomed at the airport.", "is", ["were", "are", "was"], "【模块①｜一般现在时被动】with 连接时主语按 teacher（单数）确定；此处 welcomed 为形容词化的过去分词作表语，系动词用 is，构成\"被热烈欢迎\"的被动含义。（来源：仿真题（依据高考考点编制）"],
  ["The newly discovered species ___ a name by the research team next week.", "will be given", ["has been given", "is given", "gives"], "【模块①｜一般将来时被动】next week 为将来时间，主语 species 与 give 为被动关系（\"被命名\"），用 will be given。（来源：仿真题（依据高考考点编制）"],
  ];
  const gkPasM1 = () => GK_PAS_M1.map(([s, a, d, e]) => q(s, a, d, e));
const GK_PAS_M2 = [
  ["The wooden tower that ___ will be open to tourists soon, and the work is almost finished.", "is being restored", ["is restored", "restores", "has restored"], "【模块②｜现在进行时被动】the work is almost finished 提示修复工作进行中，用现在进行时被动 is being restored。B 为一般现在时被动，不能体现\"正在进行\"。（来源：2023·全国甲卷改编）"],
  ["When we arrived at the bridge, it ___, so we had to take another route.", "was being repaired", ["repairs", "has been repaired", "had repaired"], "【模块②｜过去进行时被动】when 引导过去时间点，强调到达时桥\"正在被维修\"，用过去进行时被动 was being repaired。A、D 主动语态不合逻辑。（来源：2022·全国乙卷改编）"],
  ["The letter ___ before he realized that he had made a mistake in the address.", "had been sent", ["sends", "was sent", "has been sent"], "【模块②｜过去完成时被动】信\"被寄出\"发生在\"意识到错误\"（过去）之前，为过去的过去且被动，用过去完成时被动 had been sent。（来源：2022·新高考I卷改编）"],
  ["As we walked past the classroom, we noticed that it ___ by a group of volunteers.", "was being cleaned", ["cleans", "was cleaned", "had cleaned"], "【模块②｜过去进行时被动】路过那一刻教室\"正在被打扫\"，用过去进行时被动 was being cleaned。C 一般过去时被动仅陈述被打扫的事实，不体现\"正在进行\"。（来源：2023·新课标II卷改编）"],
  ["The room was so dirty because it ___ for a long time.", "hadn't been cleaned", ["doesn't clean", "wasn't cleaned", "hasn't been cleaned"], "【模块②｜过去完成时被动】for a long time 表示持续，\"没被打扫\"发生在\"房间脏\"（过去）之前，为过去的过去，用过去完成时被动否定形式 hadn't been cleaned。（来源：2023·全国甲卷改编）"],
  ["By the time the manager arrived, the problem ___ by his assistant.", "had been solved", ["solves", "was solved", "has been solved"], "【模块②｜过去完成时被动】by the time + 一般过去时，主句用过去完成时；问题\"被解决\"用被动，用 had been solved。（来源：2024·新高考I卷改编）"],
  ["When I entered the hall, the report ___ heatedly by the experts.", "was being discussed", ["discusses", "had been discussed", "is discussed"], "【模块②｜过去进行时被动】entered 为过去动作，报告\"正在被讨论\"用过去进行时被动 was being discussed。C 过去完成时被动表示已讨论完，与语境不符。（来源：2024·全国乙卷改编）"],
  ["The project ___ by last Friday, so the team could finally take a break.", "had been finished", ["finishes", "was finished", "has been finished"], "【模块②｜过去完成时被动】by last Friday 为过去时间截止点，工作\"被完成\"用过去完成时被动 had been finished。（来源：2024·全国甲卷改编）"],
  ["When the ambulance arrived, the injured man ___ by a nurse.", "was being treated", ["treats", "had treated", "has been treated"], "【模块②｜过去进行时被动】救护车到达时，受伤男子\"正在被治疗\"，用过去进行时被动 was being treated。（来源：2021·新高考II卷改编）"],
  ["When she came in, some important papers ___ by the manager.", "were being signed", ["sign", "had signed", "are being signed"], "【模块②｜过去进行时被动】she came in 为过去动作，papers 为复数，文件\"正在被签署\"用 were being signed。D 为现在进行时被动，时态不符。（来源：2023·新高考I卷改编）"],
  ["So far, the new teaching method ___ in over 500 schools across the country.", "has been tried", ["tries", "had been tried", "was tried"], "【模块②｜现在完成时被动】so far 为现在完成时标志，主语 method 与 try 为被动关系，用现在完成时被动 has been tried。（来源：2024·新高考I卷改编）"],
  ["The book ___ into several languages since it was published in 2010.", "has been translated", ["translates", "had been translated", "was translated"], "【模块②｜现在完成时被动】since 为现在完成时标志，主语 book 与 translate 为被动关系，用现在完成时被动 has been translated。（来源：2022·新高考II卷改编）"],
  ["I saw a terrible accident on my way home — a car ___ by a truck from behind.", "was being hit", ["was hitting", "has hit", "hits"], "【模块②｜过去进行时被动】语境强调事故发生时车\"正在被追尾\"，用过去进行时被动 was being hit。D、A、B 均为主动语态，不合逻辑。（来源：仿真题（依据高考考点编制）"],
  ["Over the past decade, great changes ___ in my hometown.", "have taken place", ["are taken place", "have been taken place", "take place"], "【模块②｜现在完成时被动】take place 是不及物短语（\"发生\"），无被动语态；over the past decade 为现在完成时标志，用 have taken place。B、A 误加被动。（来源：仿真题（依据高考考点编制）"],
  ["By the time the tornado ended, more than 2,000 people ___.", "had been killed", ["kill", "had killed", "were killed"], "【模块②｜过去完成时被动】by the time + 一般过去时（ended）是过去完成时标志，people 与 kill 为被动关系，用 had been killed。（来源：2020·全国I卷）"],
  ["All the preparations for the trip ___ by the time we set off.", "had been made", ["make", "were made", "have been made"], "【模块②｜过去完成时被动】by the time + 一般过去时（set off）触发过去完成时，preparations 与 make 为被动关系，用 had been made。（来源：2019·全国II卷改编）"],
  ["The old building ___ down by the end of last month.", "had been pulled", ["pulls", "was pulled", "has been pulled"], "【模块②｜过去完成时被动】by the end of + 过去时间（last month）是过去完成时标志，building 与 pull down 为被动关系，用 had been pulled。（来源：2018·全国III卷改编）"],
  ["Don't go into the lab right now — the machines ___ for the experiment.", "are being tested", ["test", "are testing", "have been tested"], "【模块②｜现在进行时被动】Don't go in right now 提示动作正在进行，machines 与 test 为被动关系，用现在进行时被动 are being tested。（来源：仿真题（依据高考考点编制）"],
  ["Since the new policy was introduced, air quality in the city ___ greatly.", "has been improved", ["improves", "had improved", "was improved"], "【模块②｜现在完成时被动】since 为现在完成时标志，主语 air quality 与 improve 为被动关系（\"被改善\"），用 has been improved。（来源：仿真题（依据高考考点编制）"],
  ["The audience sat in silence while the winner's name ___ by the host.", "was being announced", ["announces", "has announced", "had announced"], "【模块②｜过去进行时被动】sat 为过去动作，while 引导持续背景，获奖者名字\"正在被宣布\"用过去进行时被动 was being announced。（来源：仿真题（依据高考考点编制）"],
  ["She felt very proud because her article ___ in a famous magazine before she graduated.", "had been published", ["publishes", "has published", "was published"], "【模块②｜过去完成时被动】before she graduated 为过去时间，\"文章被发表\"发生在毕业之前（过去的过去），用过去完成时被动 had been published。（来源：仿真题（依据高考考点编制）"],
  ["This is the first time that the ancient ruins ___ to the public.", "have been shown", ["show", "had been shown", "are shown"], "【模块②｜现在完成时被动】This is the first time that... 后接现在完成时，ruins 与 show 为被动关系，用 have been shown。（来源：仿真题（依据高考考点编制）"],
  ["Look! The children ___ to perform in the school choir this year.", "are being selected", ["select", "were selected", "have selected"], "【模块②｜现在进行时被动】Look! 提示动作正在进行，children 与 select 为被动关系（\"正在被选拔\"），用现在进行时被动 are being selected。（来源：仿真题（依据高考考点编制）"],
  ["The movie tickets ___ out by the time we got to the cinema.", "had been sold", ["sell", "have been sold", "were sold"], "【模块②｜过去完成时被动】by the time + 过去时（got）触发过去完成时，tickets 与 sell out 为被动关系，用 had been sold。（来源：仿真题（依据高考考点编制）"],
  ["A lot of new underground lines ___ in this city in the last five years.", "have been built", ["build", "were built", "had been built"], "【模块②｜现在完成时被动】in the last five years 为现在完成时标志，lines 与 build 为被动关系，用 have been built。（来源：仿真题（依据高考考点编制）"],
  ["I could hear the noise from the kitchen — dinner ___ by my mother.", "was being prepared", ["had been prepared", "prepares", "is prepared"], "【模块②｜过去进行时被动】could hear 为过去动作，晚餐\"正在被准备\"用过去进行时被动 was being prepared。A 表示已准备完毕，与 noise 的语境不符。（来源：仿真题（依据高考考点编制）"],
  ["The famous painting ___ to the museum since it was donated last year.", "has belonged", ["belonged", "has been belonged", "belongs"], "【模块②｜现在完成时被动】belong to 是不及物短语（\"属于\"），无被动语态；since 为现在完成时标志，用 has belonged。B 误加被动。（来源：仿真题（依据高考考点编制）"],
  ["By the end of last term, three units of the textbook ___.", "had been covered", ["cover", "were covered", "have covered"], "【模块②｜过去完成时被动】by the end of + 过去时间（last term）触发过去完成时，units 与 cover 为被动关系，用 had been covered。（来源：仿真题（依据高考考点编制）"],
  ["The roads in the town center ___ at the moment, which causes heavy traffic.", "are being repaired", ["have been repaired", "repair", "had been repaired"], "【模块②｜现在进行时被动】at the moment 提示正在进行，roads 与 repair 为被动关系，用现在进行时被动 are being repaired。（来源：仿真题（依据高考考点编制）"],
  ["The scientists announced that a new species ___ before the forest was cut down.", "had been discovered", ["was discovered", "discovers", "has been discovered"], "【模块②｜过去完成时被动】announced 为过去动作，发现发生在宣布之前（过去的过去），且 species 与 discover 为被动关系，用 had been discovered。（来源：仿真题（依据高考考点编制）"],
  ["The old castle ___ carefully by experts since the restoration project began.", "has been examined", ["had been examined", "was examined", "examines"], "【模块②｜现在完成时被动】since 为现在完成时标志，castle 与 examine 为被动关系，用 has been examined。（来源：仿真题（依据高考考点编制）"],
  ["The photographer took a great picture of the moment when the award ___ to the winner.", "was being given", ["had been given", "is given", "gives"], "【模块②｜过去进行时被动】took 为过去动作，奖项\"正在被颁发\"的那一刻被拍下，用过去进行时被动 was being given。（来源：仿真题（依据高考考点编制）"],
  ["Many rare animals ___ in this reserve since it was established in 1980.", "have been protected", ["protect", "had protected", "were protected"], "【模块②｜现在完成时被动】since 为现在完成时标志，animals 与 protect 为被动关系，用 have been protected。（来源：仿真题（依据高考考点编制）"],
  ["The witness said that the stolen car ___ before the police arrived.", "had been hidden", ["hides", "was hidden", "has hidden"], "【模块②｜过去完成时被动】said 为过去动作，车\"被藏起来\"发生在警察到达之前（过去的过去），用过去完成时被动 had been hidden。（来源：仿真题（依据高考考点编制）"],
  ["At present, a new subway station ___ near our school, so the street is often crowded.", "is being built", ["builds", "had been built", "has been built"], "【模块②｜现在进行时被动】At present 提示正在进行，station 与 build 为被动关系，用现在进行时被动 is being built。（来源：仿真题（依据高考考点编制）"],
  ];
  const gkPasM2 = () => GK_PAS_M2.map(([s, a, d, e]) => q(s, a, d, e));
const GK_PAS_M3 = [
  ["What should ___ with such a beautiful place?", "be done", ["do", "done", "doing"], "【模块③｜情态动词 + be done】主语 what 指物，与 do 为被动关系，should 后接 be done 构成被动语态。A 原形主动不合逻辑。（来源：2024·全国甲卷）"],
  ["However, though it's nice to get a few cents off a pack of sausages, it would help even more if they could sometimes ___ in smaller packs.", "be offered", ["offer", "offered", "offering"], "【模块③｜情态动词 + be done】they 指代 sausages，与 offer 为被动关系，could 后接 be offered 构成被动。A 主动语态不合逻辑。（来源：2024·浙江1月卷）"],
  ["Carson proves that a simple lyric form that has been passed down through the ages can still ___ today to draw attention to important truths.", "be employed", ["employ", "employed", "employing"], "【模块③｜情态动词 + be done】从句主语 lyric form 与 employ 为被动关系，can 后接 be employed。A 主动语态不合逻辑。（来源：2023·全国甲卷改编）"],
  ["To understand a painting, we're taught to look for color, composition, and light. But how can a painting ___ by someone who's blind?", "be appreciated", ["appreciate", "appreciated", "appreciating"], "【模块③｜情态动词 + be done】主语 painting 与 appreciate 为被动关系，can 后接 be appreciated。A 主动语态不合逻辑。（来源：2022·浙江卷）"],
  ["The rules of the game ___ by every player before the match begins.", "should be understood", ["should understood", "should understand", "ought understand"], "【模块③｜情态动词 + be done】rules 与 understand 为被动关系，should 后接 be understood。C 主动语态不合逻辑。（来源：仿真题（依据高考考点编制）"],
  ["The doctor said that the patient ___ to the ICU immediately.", "must be sent", ["must send", "must sent", "must to be sent"], "【模块③｜情态动词 + be done】patient 与 send 为被动关系，must 后接 be sent。A 主动语态不合逻辑，D 多加 to。（来源：仿真题（依据高考考点编制）"],
  ["In this school, no student ___ to leave the campus during class hours without permission.", "may be allowed", ["might allow", "may allowed", "may allow"], "【模块③｜情态动词 + be done】student 与 allow 为被动关系，may 后接 be allowed。D、B 主动语态不合逻辑。（来源：仿真题（依据高考考点编制）"],
  ["The old documents ___ well in the archive, or they will be damaged by damp.", "must be kept", ["must kept", "must keep", "ought keep"], "【模块③｜情态动词 + be done】documents 与 keep 为被动关系，must 后接 be kept。B 主动语态不合逻辑。（来源：仿真题（依据高考考点编制）"],
  ["The ground is wet. It ___ last night.", "must have rained", ["must rain", "must have been rained", "must be rained"], "【模块③｜情态动词 + have been done】rain 在此为不及物动词（\"下雨\"），无被动；must have done 表示对过去的肯定推测，用 must have rained。D、B 误加被动。（来源：仿真题（依据高考考点编制）"],
  ["The cake is gone. Someone ___ it before we came back.", "must have eaten", ["must eat", "must be eaten", "must have been eaten"], "【模块③｜情态动词 + have been done】someone 是 eat 的发出者，用主动语态；must have done 表示对过去的肯定推测，用 must have eaten。D 被动语态逻辑颠倒。（来源：仿真题（依据高考考点编制）"],
  ["The windows ___ before the storm comes, or the rain will get in.", "ought to be closed", ["ought close", "should close", "ought to close"], "【模块③｜情态动词 + be done】windows 与 close 为被动关系，ought to 后接 be closed。D、B、C 主动语态不合逻辑。（来源：仿真题（依据高考考点编制）"],
  ["The room is spotless. It ___ thoroughly before the guests arrived.", "must have been cleaned", ["must have cleaned", "must clean", "must be cleaned"], "【模块③｜情态动词 + have been done】room 与 clean 为被动关系，且 clean 发生在过去（客人到达前），用情态动词 + have been done 结构，must have been cleaned。（来源：仿真题（依据高考考点编制）"],
  ["The safety of the passengers ___ first in any flight operation.", "should always be put", ["should always been put", "shall put", "should always put"], "【模块③｜情态动词 + be done】safety 与 put 为被动关系，should 后接 be put。B 用 been 而非 be 错误。（来源：仿真题（依据高考考点编制）"],
  ["No one is allowed to enter the lab unless they ___ by the professor.", "are invited", ["will invite", "invited", "invite"], "【模块③｜情态动词 + be done】they 指代人，与 invite 为被动关系，主将从现原则用一般现在时被动 are invited。（来源：仿真题（依据高考考点编制）"],
  ["The heavy box ___ with care, as it contains fragile items.", "should be handled", ["should handle", "ought handle", "should handled"], "【模块③｜情态动词 + be done】box 与 handle 为被动关系，should 后接 be handled。A 主动语态不合逻辑。（来源：仿真题（依据高考考点编制）"],
  ["He looks exhausted. He ___ all night to finish the project.", "must have worked", ["must work", "must be worked", "must have been worked"], "【模块③｜情态动词 + have been done】he 是 work 的发出者，用主动；must have done 表示对过去的肯定推测，用 must have worked。（来源：仿真题（依据高考考点编制）"],
  ["The ancient vase is extremely valuable and ___ with great care.", "must be treated", ["should treating", "must treat", "must treated"], "【模块③｜情态动词 + be done】vase 与 treat 为被动关系，must 后接 be treated。C 主动语态不合逻辑。（来源：仿真题（依据高考考点编制）"],
  ["In some countries, drivers ___ to wear seat belts by law.", "are required", ["requiring", "required", "require"], "【模块③｜情态动词 + be done】drivers 与 require 为被动关系，此处陈述法律要求用一般现在时被动 are required。（注：也可用 must be required，但 are required 更自然表法律规定）（来源：仿真题（依据高考考点编制）"],
  ["The data ___ before the final report is written.", "should be collected", ["should collected", "must collect", "should collect"], "【模块③｜情态动词 + be done】data 与 collect 为被动关系，should 后接 be collected。C、B 主动语态不合逻辑。（来源：仿真题（依据高考考点编制）"],
  ["The door was unlocked this morning. Someone ___ it last night.", "must have forgotten to lock", ["must be forgotten", "must have been forgotten", "must forget to lock"], "【模块③｜情态动词 + have been done】someone 是 forget 的发出者，用主动；对过去事实的推测用 must have forgotten。B、C 被动语态逻辑颠倒。（来源：仿真题（依据高考考点编制）"],
  ["The children ___ not to play near the river. It's too dangerous.", "should b