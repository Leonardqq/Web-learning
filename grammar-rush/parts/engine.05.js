 quickly.', 'to check', 'to do 表目的。'],
  ['She is learning Mandarin ___ (work) with international clients.', 'to work', 'to do 表目的。'],
  ['The city built a new cycle lane ___ (encourage) people to cycle.', 'to encourage', 'to do 表目的。'],
  ['Many students take a gap year ___ (gain) work experience abroad.', 'to gain', 'to do 表目的。'],
  ['The school organised a trip ___ (introduce) students to local heritage.', 'to introduce', 'to do 表目的。'],
  ['Parents should talk to teenagers ___ (understand) their real worries.', 'to understand', 'to do 表目的。'],
  ['He saved his work online ___ (avoid) losing important files.', 'to avoid', 'to do 表目的。']
  ];
  const infPurpose = () => INF_PURPOSE.map(([sentence, a, e]) => f(sentence, a, e));

const INF_BARE = [
  ['The teacher made us ___ (rewrite) the essay before handing it in.', 'rewrite', 'make sb do sth，省略 to。'],
  ['Let me ___ (show) you how this learning app works.', 'show', 'let sb do sth，省略 to。'],
  ['I saw the volunteers ___ (collect) rubbish on the beach.', 'collect', 'see sb do sth，省略 to（看到动作全过程）。'],
  ['She heard her brother ___ (cry) in the next room.', 'cry', 'hear sb do sth，省略 to。'],
  ['They let the students ___ (choose) their own subjects.', 'choose', 'let sb do sth，省略 to。'],
  ['We watched the dancers ___ (perform) in the street.', 'perform', 'watch sb do sth，省略 to。'],
  ['His parents made him ___ (apologise) for the rude message.', 'apologise', 'make sb do sth，省略 to。'],
  ['I felt my confidence ___ (grow) during the exchange programme.', 'grow', 'feel sb do sth，省略 to。'],
  ['Please let me ___ (check) the information online first.', 'check', 'let sb do sth，省略 to。'],
  ['The manager had the workers ___ (plant) trees along the road.', 'plant', 'have sb do sth，省略 to。']
  ];
  const infBare = () => INF_BARE.map(([sentence, a, e]) => f(sentence, a, e));

const GER_SUBJECT = [
  ['___ (read) widely improves your academic vocabulary.', 'Reading', '动名词作主语，谓语用单数。'],
  ['___ (cycle) to school reduces carbon emissions.', 'Cycling', '动名词作主语。'],
  ['___ (learn) another language takes time and patience.', 'Learning', '动名词作主语，谓语用单数。'],
  ['___ (talk) to a close friend helps you feel better.', 'Talking', '动名词作主语。'],
  ['___ (cook) at home produces less waste than ordering takeaway.', 'Cooking', '动名词作主语。'],
  ['___ (travel) broadens your understanding of other cultures.', 'Travelling|Traveling', '动名词作主语；英式拼写 Travelling，美式拼写 Traveling。'],
  ['___ (play) online games late at night affects your concentration.', 'Playing', '动名词作主语。'],
  ['___ (walk) for thirty minutes every day improves your mood.', 'Walking', '动名词作主语。'],
  ['___ (visit) museums is a popular weekend activity here.', 'Visiting', '动名词作主语。'],
  ['___ (draw) helps young children express their own ideas.', 'Drawing', '动名词作主语。']
  ];
  const gerSubject = () => GER_SUBJECT.map(([sentence, a, e]) => f(sentence, a, e));

const GER_OBJECT = [
  ['I enjoy ___ (read) articles about different education systems.', 'reading', 'enjoy doing sth。'],
  ['She finished ___ (write) her report on plastic pollution.', 'writing', 'finish doing sth。'],
  ['Do you mind ___ (turn) off your phone during dinner?', 'turning', 'mind doing sth。'],
  ['We should avoid ___ (believe) every message on social media.', 'believing', 'avoid doing sth。'],
  ['He suggested ___ (start) a weekly study group after school.', 'starting', 'suggest doing sth。'],
  ['They practise ___ (speak) English with international students.', 'speaking', 'practise doing sth。'],
  ['She is considering ___ (spend) a semester at a school abroad.', 'spending', 'consider doing sth。'],
  ['The artist kept ___ (paint) until the exhibition opened.', 'painting', 'keep doing sth。'],
  ["I can't imagine ___ (live) without support from my family.", 'living', 'imagine doing sth。'],
  ["Don't risk ___ (lose) your personal data online.", 'losing', 'risk doing sth。']
  ];
  const gerObject = () => GER_OBJECT.map(([sentence, a, e]) => f(sentence, a, e));

const GER_PREP = [
  ['She is good at ___ (explain) difficult ideas clearly.', 'explaining', '介词 at 后接动名词。'],
  ['He is interested in ___ (learn) about other cultures.', 'learning', '介词 in 后接动名词。'],
  ['I am looking forward to ___ (start) my course in September.', 'starting', 'look forward to 中 to 是介词，后接动名词。'],
  ['Instead of ___ (worry) about exams, make a clear revision plan.', 'worrying', 'instead of 后接动名词。'],
  ['She left the house without ___ (turn) off the lights.', 'turning', 'without 后接动名词。'],
  ['Thank you for ___ (share) that article about online privacy.', 'sharing', 'for 后接动名词。'],
  ['He apologised for ___ (miss) the opening of the exhibition.', 'missing', 'apologise for 后接动名词。'],
  ['They insisted on ___ (recycle) all the paper they used.', 'recycling', 'insist on 后接动名词。'],
  ['I am used to ___ (get) up early for morning revision.', 'getting', 'be used to 中 to 是介词，后接动名词。'],
  ['She is afraid of ___ (speak) English in front of strangers.', 'speaking', 'of 后接动名词。']
  ];
  const gerPrep = () => GER_PREP.map(([sentence, a, e]) => f(sentence, a, e));

const GER_VS_INF = [
  ['Remember ___ (check) your answers before you hand in the paper.', 'to check', 'remember to do 记得去做（还没做）。'],
  ['I remember ___ (visit) that museum with my grandmother.', 'visiting', 'remember doing 记得做过（已做）。'],
  ["Don't forget ___ (charge) your laptop before the online lesson.", 'to charge', 'forget to do 忘记去做（还没做）。'],
  ["I'll never forget ___ (see) plastic waste on that clean beach.", 'seeing', 'forget doing 忘记做过的事。'],
  ['He stopped ___ (compare) himself with people on social media.', 'comparing', 'stop doing 停止做某事。'],
  ['We got lost, so we stopped ___ (ask) a passer-by for directions.', 'to ask', 'stop to do 停下来去做另一件事。'],
  ['Try ___ (reduce) your screen time before you go to bed.', 'to reduce', 'try to do 努力做。'],
  ['Try ___ (turn) your phone off an hour before bed.', 'turning', 'try doing 尝试做（看效果）。'],
  ['I regret ___ (tell) you that your application was not successful.', 'to tell', 'regret to do 遗憾地要告诉（即将说）。'],
  ['I regret ___ (not take) the chance to study abroad last year.', 'not taking', 'regret doing 后悔做过。']
  ];
  const gerVsInf = () => GER_VS_INF.map(([sentence, a, e]) => f(sentence, a, e));

const PART_PRES_ATTR = [
  ['Many ___ (work) parents rely on boarding schools.', 'working', '现在分词作定语，表示主动/正在进行。'],
  ['The ___ (ring) phone destroyed my concentration.', 'ringing', '现在分词作定语，表示正在进行。'],
  ['The ___ (rise) sea level threatens many coastal cities.', 'rising', '现在分词作定语，表示正在进行。'],
  ['The ___ (run) tap wasted litres of clean water.', 'running', '现在分词作定语，表示正在进行。'],
  ['A ___ (lead) university in Singapore attracts overseas students.', 'leading', '现在分词作定语。'],
  ['The ___ (smile) dancers greeted the audience warmly.', 'smiling', '现在分词作定语，表示主动。'],
  ['A ___ (cry) child in the corner needs comfort.', 'crying', '现在分词作定语，表示正在进行。'],
  ["The ___ (sleep) student missed the teacher's question.", 'sleeping', '现在分词作定语，表示正在进行。'],
  ['The ___ (flash) advertisement on the screen annoyed every student.', 'flashing', '现在分词作定语，表示正在进行。'],
  ['The ___ (grow) demand for international schools worries some parents.', 'growing', '现在分词作定语，表示主动/正在进行。']
  ];
  const partPresAttr = () => PART_PRES_ATTR.map(([sentence, a, e]) => f(sentence, a, e));

const PART_PAST_ATTR = [
  ['The ___ (write) report on exam pressure is due on Friday.', 'written', '过去分词作定语，表示被动/完成。'],
  ['A ___ (steal) phone can expose private messages.', 'stolen', '过去分词作定语，表示被动。'],
  ['The ___ (damage) wind turbine was repaired last week.', 'damaged', '过去分词作定语，表示被动。'],
  ['The ___ (fall) leaves blocked the drain after the storm.', 'fallen', '过去分词作定语，表示完成。'],
  ['The ___ (close) factory left hundreds of workers jobless.', 'closed', '过去分词作定语，表示被动/完成。'],
  ['The ___ (translate) novel sold well in Britain.', 'translated', '过去分词作定语，表示被动。'],
  ["A ___ (break) friendship can affect a teenager's well-being.", 'broken', '过去分词作定语，表示被动/完成。'],
  ['The ___ (record) lecture helped absent students catch up.', 'recorded', '过去分词作定语，表示被动。'],
  ['The ___ (delete) messages were recovered by an expert.', 'deleted', '过去分词作定语，表示被动。'],
  ['The ___ (recycle) plastic was used for a street sculpture.', 'recycled', '过去分词作定语，表示被动/完成。']
  ];
  const partPastAttr = () => PART_PAST_ATTR.map(([sentence, a, e]) => f(sentence, a, e));

const PART_PRES_ADV = [
  ['___ (study) in the library, she avoided every distraction.', 'Studying', '现在分词作状语，表示时间/伴随。'],
  ['___ (use) a translation app, he finished the article quickly.', 'Using', '现在分词作方式状语。'],
  ['___ (live) near a busy road, we suffer from air pollution.', 'Living', '现在分词作原因状语。'],
  ['___ (recycle) their waste every week, the family cut its rubbish by half.', 'Recycling', '现在分词作方式/原因状语。'],
  ['___ (feel) anxious about the exam, Tom spoke to a counsellor.', 'Feeling', '现在分词作原因状语。'],
  ['___ (not know) the school rules, the new boy stayed silent.', 'Not knowing', '现在分词否定式：not + doing。'],
  ['___ (work) with students from ten countries, she improved her English.', 'Working', '现在分词作时间/伴随状语。'],
  ['___ (visit) the museum, they learned about local heritage.', 'Visiting', '现在分词作时间状语。'],
  ['___ (finish) all her courses, Lucy applied for a gap year.', 'Having finished', '完成式现在分词作时间状语。'],
  ['___ (not have) a laptop, I borrowed one from the school library.', 'Not having', '现在分词否定式。']
  ];
  const partPresAdv = () => PART_PRES_ADV.map(([sentence, a, e]) => f(sentence, a, e));

const PART_PAST_ADV = [
  ['___ (encourage) by her teacher, Lucy entered the speaking contest.', 'Encouraged', '过去分词作原因状语，表示被动。'],
  ['___ (write) by an algorithm, the report contained several errors.', 'Written', '过去分词作原因状语，表示被动。'],
  ['___ (damage) by the flood, the bridge needs urgent repairs.', 'Damaged', '过去分词作原因状语，表示被动。'],
  ['___ (compare) with last year, carbon emissions have fallen slightly.', 'Compared', '过去分词作状语，compared with 是固定表达。'],
  ['___ (bore) with the online lesson, Tom started playing games.', 'Bored', '过去分词作原因状语。'],
  ['___ (give) more sleep, teenagers concentrate better in class.', 'Given', '过去分词作条件状语。'],
  ['___ (translate) into twenty languages, the novel reached a global audience.', 'Translated', '过去分词作原因状语，表示被动。'],
  ['___ (inspire) by street art, the students painted a large mural.', 'Inspired', '过去分词作原因状语，表示被动。'],
  ['___ (lose) in the new city, the exchange student asked for help.', 'Lost', '过去分词作原因/状态状语。'],
  ['___ (expose) online, private photos can spread within minutes.', 'Exposed', '过去分词作条件/时间状语，表示被动。']
  ];
  const partPastAdv = () => PART_PAST_ADV.map(([sentence, a, e]) => f(sentence, a, e));

const PART_ING_VS_ED = [
  ['The online lecture was ___ (bore).', 'boring', '-ing 形容词修饰物，表示“令人……的”。'],
  ['Most students were ___ (bore) by the online lecture.', 'bored', '-ed 形容词修饰人，表示“感到……的”。'],
  ['The new app interface was ___ (confuse).', 'confusing', '修饰物用 -ing。'],
  ['Many older users were ___ (confuse) by the new app.', 'confused', '修饰人用 -ed。'],
  ['The talk on renewable energy was ___ (interest).', 'interesting', '修饰物用 -ing。'],
  ['The students were ___ (interest) in renewable energy.', 'interested', 'be interested in 是固定搭配。'],
  ['Her first term result was ___ (disappoint).', 'disappointing', '修饰物用 -ing。'],
  ['She was ___ (disappoint) with her first term result.', 'disappointed', '修饰人用 -ed。'],
  ["The exchange students' long journey was ___ (tire).", 'tiring', '修饰物用 -ing。'],
  ['The exchange students felt ___ (tire) after the journey.', 'tired', '修饰人用 -ed。']
  ];
  const partIngVsEd = () => PART_ING_VS_ED.map(([sentence, a, e]) => f(sentence, a, e));

  /* ============================================================
     四、定语从句 Attributive Clauses
     ============================================================ */
const REL_WHO = [
  ['The teacher ___ designs our online courses is from Canada.', 'who', '先行词 teacher 指人，在从句中作主语，用 who。'],
  ['Students ___ manage their time well feel less exam pressure.', 'who', '先行词 students 指人，作主语。'],
  ['Teenagers ___ spend hours on social media often sleep badly.', 'who', '先行词 teenagers 指人，作主语。'],
  ['The engineer ___ wrote the algorithm won a national award.', 'who', '先行词 engineer 指人，作主语。'],
  ['The scientist ___ studies climate change will give a talk.', 'who', '先行词 scientist 指人，作主语。'],
  ['People ___ cycle to work produce fewer carbon emissions.', 'who', '先行词 people 指人，作主语。'],
  ['Anyone ___ feels anxious should talk to a counsellor.', 'who', '先行词 anyone 指人，作主语。'],
  ['Parents ___ listen patiently understand their teenage children better.', 'who', '先行词 parents 指人，作主语。'],
  ['The artist ___ painted this mural lives in our street.', 'who', '先行词 artist 指人，作主语。'],
  ['Migrants ___ move to a new country face many challenges.', 'who', '先行词 migrants 指人，作主语。']
  ];
  const relWho = () => REL_WHO.map(([sentence, a, e]) => q(sentence, a, ['which', 'whose', 'whom'], e));

  const REL_WHOM = [
    ['The man with ___ I spoke is my uncle.', 'whom', '介词 with 后指人用 whom。'],
    ['The person to ___ you should talk is the manager.', 'whom', '介词 to 后指人用 whom。'],
    ['The friend with ___ she travelled is a teacher.', 'whom', '介词 with 后指人用 whom。'],
    ['The candidate for ___ I voted won.', 'whom', '介词 for 后指人用 whom。'],
    ['The doctor by ___ I was treated is very kind.', 'whom', '介词 by 后指人用 whom。'],
    ['The colleague with ___ he works is friendly.', 'whom', '介词 with 后指人用 whom。'],
    ['The girl to ___ I gave the book is my cousin.', 'whom', '介词 to 后指人用 whom。'],
    ['The professor from ___ we learned a lot retired.', 'whom', '介词 from 后指人用 whom。'],
    ['The client to ___ you wrote has replied.', 'whom', '介词 to 后指人用 whom。'],
    ['The people with ___ they negotiated agreed.', 'whom', '介词 with 后指人用 whom。']
  ];
  const relWhom = () => REL_WHOM.map(([sentence, a, e]) => q(sentence, a, ['who', 'which', 'whose'], e));

const REL_WHICH = [
  ['The curriculum ___ our school offers includes critical thinking.', 'which', '先行词 curriculum 指物，作宾语，用 which。'],
  ['The final exam ___ counts for half the marks starts in June.', 'which', '先行词 exam 指物，作主语。'],
  ['The app ___ I installed yesterday tracks my screen time.', 'which', '先行词 app 指物，作宾语。'],
  ['The algorithm ___ recommends these videos is not transparent.', 'which', '先行词 algorithm 指物，作主语。'],
  ['The plastic ___ we throw away each week harms marine life.', 'which', '先行词 plastic 指物，作宾语。'],
  ['The wind farm ___ opened last year powers the whole town.', 'which', '先行词 wind farm 指物，作主语。'],
  ['The pressure ___ teenagers feel today comes from many sides.', 'which', '先行词 pressure 指物，作宾语。'],
  ['The school rule ___ bans phones at night angered many students.', 'which', '先行词 rule 指物，作主语。'],
  ['The film ___ we studied in class explores cultural identity.', 'which', '先行词 film 指物，作宾语。'],
  ['The language ___ dominates the internet today is English.', 'which', '先行词 language 指物，作主语。']
  ];
  const relWhich = () => REL_WHICH.map(([sentence, a, e]) => q(sentence, a, ['who', 'whose', 'whom'], e));

const REL_THAT = [
  ['This is the most useful strategy ___ my tutor has ever taught me.', 'that', '先行词 strategy 被最高级 the most useful 修饰，关系代词用 that。']