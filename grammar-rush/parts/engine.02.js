过去式 ${past}）。`));
  const irregPastYesNo = () => IRREG_PAST.map(([v, past, o, time]) =>
    q(`___ she ${v} ${o} ${time}?`, 'Did', ['Do', 'Does', 'Was'], `一般过去时一般疑问句：Did + 主语 + 动词原形 ${v}。`));

const PAST_TIME = [
  ['The school opened its new library ___ .', 'last month', ['next month', 'now', 'since 2020'], 'last month 表示过去时间。'],
  ['The city introduced the recycling scheme ___ 2018.', 'in', ['on', 'at', 'since'], '年份前用介词 in。'],
  ['The museum closed its old gallery two years ___ .', 'ago', ['before', 'since', 'yet'], '“一段时间 + ago”表示过去某时。'],
  ['They joined the exchange programme ___ .', 'last year', ['next year', 'now', 'since 2021'], 'last year 表示过去时间。'],
  ['The counsellor called my parents a week ___ .', 'ago', ['before', 'since', 'already'], 'a week ago 表示一周前。'],
  ['___ did you meet your exchange partner last summer?', 'Where', ['When', 'What', 'Why'], 'last summer 是过去时间，提问地点用 Where。'],
  ['The boarding school was built ___ 1998.', 'in', ['on', 'at', 'since'], '年份前用 in。'],
  ["The online concert started ___ 8 o'clock.", 'at', ['in', 'on', 'for'], '具体钟点前用 at。'],
  ['We waited for the bus ___ twenty minutes.', 'for', ['since', 'in', 'at'], 'for + 一段时间，表示持续多久。'],
  ['She has used this app ___ 2019.', 'since', ['for', 'in', 'at'], 'since + 过去时间点，常与现在完成时连用。']
  ];
  const pastTime = () => PAST_TIME.map(([sentence, a, d, e]) => q(sentence, a, d, e));

  /* ---------- 现在完成时 ---------- */
const PP_ROWS = [
    { s: 'I', have: 'have', pp: 'finished', o: 'the online module', time: 'already' },
    { s: 'You', have: 'have', pp: 'changed', o: 'your privacy settings', time: 'recently' },
    { s: 'He', have: 'has', pp: 'studied', o: 'international business', time: 'since 2021' },
    { s: 'She', have: 'has', pp: 'spoken', o: 'to the school counsellor', time: 'twice' },
    { s: 'It', have: 'has', pp: 'rained', o: 'much less', time: 'this year' },
    { s: 'We', have: 'have', pp: 'visited', o: 'the new art museum', time: 'twice' },
    { s: 'They', have: 'have', pp: 'known', o: 'each other', time: 'since 2022' },
    { s: 'Tom', have: 'has', pp: 'cut', o: 'his screen time', time: 'recently' },
    { s: 'My sister', have: 'has', pp: 'learned', o: 'two traditional dances', time: 'already' },
    { s: 'The students', have: 'have', pp: 'submitted', o: 'their essays', time: 'already' }
  ];
  const ppAff = () => PP_ROWS.map(r0 =>
    q(`${r0.s} ___ ${r0.o} ${r0.time}.`, `${r0.have} ${r0.pp}`,
      [`${r0.have === 'has' ? 'have' : 'has'} ${r0.pp}`, `is ${r0.pp}`, `was ${r0.pp}`],
      `现在完成时：主语 + ${r0.have} + 过去分词 ${r0.pp}。`));
  const ppNeg = () => PP_ROWS.map(r0 =>
    q(`${r0.s} ___ ${r0.o} ${r0.time}.`, `${r0.have === 'has' ? "hasn't" : "haven't"} ${r0.pp}`,
      [`${r0.have === 'has' ? "haven't" : "hasn't"} ${r0.pp}`, `${r0.have} not ${r0.pp}`, `didn't ${r0.pp}`],
      `现在完成时否定：${r0.have === 'has' ? "hasn't" : "haven't"} + 过去分词。`));
  const ppYesNo = () => PP_ROWS.map(r0 =>
    q(`___ ${lowerSubject(r0.s)} ${r0.pp} ${r0.o} ${r0.time}?`, r0.have === 'has' ? 'Has' : 'Have',
      ['Have', 'Has', 'Did', 'Is'], `现在完成时一般疑问句把 ${r0.have} 提到主语前。`));

const PP_REG = [
    ['finish', 'finished', 'the online quiz', 'already'],
    ['download', 'downloaded', 'three language apps', 'since January'],
    ['reduce', 'reduced', 'her plastic waste', 'since March'],
    ['talk', 'talked', 'to the school counsellor', 'twice'],
    ['visit', 'visited', 'the city art museum', 'twice'],
    ['work', 'worked', 'with students from five countries', 'since 2021'],
    ['delete', 'deleted', 'most of her old posts', 'recently'],
    ['plan', 'planned', 'her revision timetable', 'already'],
    ['study', 'studied', 'traditional dance', 'for two years'],
    ['recycle', 'recycled', 'her old textbooks', 'recently']
  ];
  const ppReg = () => PP_REG.map(([v, pp, o, time]) =>
    f(`She has ___ (${v}) ${o} ${time}.`, pp, `规则动词的过去分词与过去式相同：${v} → ${pp}。`));

const PP_IRREG = [
    ['write', 'written', 'three essays about migration', 'already'],
    ['see', 'seen', 'the documentary about fast fashion', 'twice'],
    ['choose', 'chosen', 'three extra courses', 'already'],
    ['find', 'found', 'several examples of misinformation online', 'recently'],
    ['speak', 'spoken', 'to a counsellor about his anxiety', 'twice'],
    ['draw', 'drawn', 'a poster for the art festival', 'already'],
    ['buy', 'bought', 'a second-hand laptop for his studies', 'recently'],
    ['make', 'made', 'real progress with his sleep routine', 'since April'],
    ['take', 'taken', 'two mock exams', 'this term'],
    ['throw', 'thrown', 'away fewer plastic bottles', 'since March']
  ];
  const ppIrreg = () => PP_IRREG.map(([v, pp, o, time]) =>
    f(`He has ___ (${v}) ${o} ${time}.`, pp, `不规则动词过去分词：${v} → ${pp}。`));

const PP_RESULT = [
    ['I have ___ received my exam results, and I feel relieved.', 'just', ['yet', 'ever', 'since'], 'just 表示“刚刚”，强调动作刚发生，与现在完成时连用。'],
    ['She has ___ checked the facts in that online article.', 'already', ['yet', 'ever', 'ago'], 'already 表示“已经”，强调动作已完成。'],
    ["Tom hasn't updated his phone security settings ___ .", 'yet', ['already', 'just', 'ever'], 'yet 用于否定句句末，表示“还（没）”。'],
    ['The council has ___ planted two hundred trees in our street.', 'just', ['yet', 'ever', 'since'], 'just 表示“刚刚”，强调结果对现在的影响。'],
    ['Has the school introduced its recycling scheme ___ ?', 'yet', ['just', 'ever', 'ago'], 'yet 用于疑问句句末，表示“已经”。'],
    ['I have ___ told my parents about the pressure I feel.', 'already', ['yet', 'ever', 'since'], 'already 表示“已经”，常用于肯定句。'],
    ['My brother has ___ started sleeping better since he cut his screen time.', 'just', ['yet', 'ever', 'since'], 'just 表示“刚刚”，与现在完成时连用。'],
    ['We have ___ booked our tickets for the photography exhibition.', 'already', ['yet', 'ever', 'ago'], 'already 表示“已经”。'],
    ["The museum hasn't opened its new wing to the public ___ .", 'yet', ['already', 'just', 'ever'], 'yet 用于否定句句末。'],
    ['Our school has ___ signed an exchange agreement with a school in Kenya.', 'just', ['yet', 'ever', 'since'], 'just 表示“刚刚”。']
  ];
  const ppResult = () => PP_RESULT.map(([sentence, a, d, e]) => q(sentence, a, d, e));

const PP_SINCE_FOR = [
    ['The school has offered coding classes ___ 2018.', 'since', ['for', 'in', 'ago'], 'since + 过去时间点（年份）。'],
    ['My sister has used a tablet for her homework ___ two years.', 'for', ['since', 'in', 'ago'], 'for + 一段时间。'],
    ['Our city has promoted public transport ___ 2010.', 'since', ['for', 'in', 'ago'], 'since + 年份。'],
    ['The government has invested in solar power ___ five years.', 'for', ['since', 'in', 'ago'], 'for + 一段时间。'],
    ['Lucy has slept much better ___ she stopped using her phone at night.', 'since', ['for', 'in', 'at'], 'since 引导时间状语从句，表示“自从……以来”。'],
    ['Teenagers have faced more pressure at school ___ the last decade.', 'for', ['since', 'in', 'ago'], 'for + 一段时间（the last decade）。'],
    ['People have shared their opinions on social media ___ a long time.', 'for', ['since', 'in', 'at'], 'for + 一段时间。'],
    ['Online learning has become common in schools ___ 2020.', 'since', ['for', 'in', 'ago'], 'since + 年份。'],
    ['This museum has displayed works by local artists ___ twenty years.', 'for', ['since', 'in', 'ago'], 'for + 一段时间。'],
    ['English has been the language of international business ___ the 1990s.', 'since', ['for', 'in', 'at'], 'since + 过去时间点。']
  ];
  const ppSinceFor = () => PP_SINCE_FOR.map(([sentence, a, d, e]) => q(sentence, a, d, e));

const PP_EXPERIENCE = [
    ['Have you ___ visited the new city art gallery?', 'ever', ['yet', 'since', 'ago'], 'ever 表示“曾经”，用于询问经历。'],
    ['My grandparents have ___ left their home town.', 'never', ['ever', 'since', 'ago'], 'never 表示“从未”。'],
    ['Have you ___ studied in a boarding school?', 'ever', ['yet', 'since', 'ago'], 'ever 用于疑问句，询问一生中的经历。'],
    ['She has ___ missed a single chemistry lesson this term.', 'never', ['ever', 'since', 'ago'], 'never 表示“从未”，本身含否定意义。'],
    ['Have you ___ checked the source of an online news story?', 'ever', ['yet', 'since', 'ago'], 'ever 表示“曾经”，用于询问经历。'],
    ['Tom has ___ shared his password with anyone.', 'never', ['ever', 'since', 'ago'], 'never 表示“从未”。'],
    ['This is the most serious flooding our town has ___ experienced.', 'ever', ['yet', 'since', 'ago'], 'ever 与最高级连用，表示“曾经”。'],
    ['We have ___ heard this band play live before.', 'never', ['ever', 'since', 'ago'], 'never 表示“从未”，与 before 连用。'],
    ['Have you ___ taken part in a beach clean-up?', 'ever', ['yet', 'since', 'ago'], 'ever 询问经历。'],
    ['They have ___ lived outside their own country.', 'never', ['ever', 'since', 'ago'], 'never 表示“从未”。']
  ];
  const ppExperience = () => PP_EXPERIENCE.map(([sentence, a, d, e]) => q(sentence, a, d, e));

const PP_VS_PAST = [
    ['I ___ my history essay already, so I can relax now.', 'have finished', ['finished', 'finish', 'was finishing'], 'already 强调对现在的影响，且无具体过去时间，用现在完成时。'],
    ['I ___ my history essay last night.', 'finished', ['have finished', 'finish', 'was finishing'], 'last night 是明确的过去时间，用一般过去时。'],
    ['She ___ the photography exhibition twice.', 'has visited', ['visited', 'visits', 'was visiting'], 'twice 表示到目前为止的经历次数，用现在完成时。'],
    ['She ___ that photography exhibition last summer.', 'visited', ['has visited', 'visits', 'was visiting'], 'last summer 是明确的过去时间，用一般过去时。'],
    ['We ___ this language app since last October.', 'have used', ['used', 'use', 'were using'], 'since last October 表示从过去持续到现在，用现在完成时。'],
    ['We ___ this language app during the summer holiday.', 'used', ['have used', 'use', 'were using'], 'during the summer holiday 是过去时间，用一般过去时。'],
    ['He ___ just started seeing the school counsellor.', 'has', ['have', 'had', 'is'], 'just 与现在完成时连用：has just started。'],
    ['He ___ seeing the school counsellor six weeks ago.', 'started', ['has started', 'is starting', 'was starting'], 'six weeks ago 是明确的过去时间，用一般过去时。'],
    ['___ you ever taken part in a beach clean-up?', 'Have', ['Did', 'Do', 'Are'], 'ever 询问到目前为止的经历，用现在完成时。'],
    ['___ you take part in the beach clean-up last March?', 'Did', ['Have', 'Do', 'Are'], 'last March 是明确的过去时间，用一般过去时。']
  ];
  const ppVsPast = () => PP_VS_PAST.map(([sentence, a, d, e]) => q(sentence, a, d, e));

  /* ---------- 一般将来时 ---------- */
const WILL_ROWS = [
  { s: 'I', v: 'review', o: 'my notes', time: 'before the exam' },
  { s: 'You', v: 'buy', o: 'a laptop', time: 'next term' },
  { s: 'He', v: 'check', o: 'his messages', time: 'tonight' },
  { s: 'She', v: 'limit', o: 'her screen time', time: 'next month' },
  { s: 'It', v: 'be', o: 'colder', time: 'next week' },
  { s: 'We', v: 'collect', o: 'the plastic bottles', time: 'tomorrow' },
  { s: 'They', v: 'plant', o: 'more trees', time: 'next spring' },
  { s: 'Tom', v: 'attend', o: 'the interview', time: 'next Monday' },
  { s: 'My parents', v: 'visit', o: 'the new museum', time: 'on Sunday' },
  { s: 'My sister', v: 'join', o: 'the language exchange', time: 'next year' }
  ];
  const willAff = () => WILL_ROWS.map(r0 =>
    q(`${r0.s} ___ ${r0.v}${r0.o ? ' ' + r0.o : ''} ${r0.time}.`, `will ${r0.v}`,
      [`will ${r0.v}s`, `is ${r0.v}ing`, `would ${r0.v}`], `一般将来时：will + 动词原形 ${r0.v}。`));
  const willNeg = () => WILL_ROWS.map(r0 =>
    q(`${r0.s} ___ ${r0.v}${r0.o ? ' ' + r0.o : ''} ${r0.time}.`, `won't ${r0.v}`,
      [`will not ${r0.v}s`, `doesn't ${r0.v}`, `isn't ${r0.v}ing`], `一般将来时否定：won't + 动词原形 ${r0.v}。`));
  const willYesNo = () => WILL_ROWS.map(r0 =>
    q(`___ ${lowerSubject(r0.s)} ${r0.v}${r0.o ? ' ' + r0.o : ''} ${r0.time}?`, 'Will',
      ['Do', 'Does', 'Is'], `一般将来时一般疑问句：Will + 主语 + 动词原形。`));

const GOING_ROWS = [
  { s: 'I', be: 'am', v: 'start', o: 'a revision plan', time: 'this week' },
  { s: 'You', be: 'are', v: 'reduce', o: 'your screen time', time: 'this month' },
  { s: 'He', be: 'is', v: 'check', o: 'the facts online', time: 'before class' },
  { s: 'She', be: 'is', v: 'study', o: 'abroad', time: 'next year' },
  { s: 'It', be: 'is', v: 'get', o: 'warmer', time: 'over the next decade' },
  { s: 'We', be: 'are', v: 'collect', o: 'the plastic waste', time: 'this weekend' },
  { s: 'They', be: 'are', v: 'open', o: 'a new library', time: 'next year' },
  { s: 'Tom', be: 'is', v: 'apply', o: 'for a scholarship', time: 'next month' },
  { s: 'My parents', be: 'are', v: 'watch', o: 'the school concert', time: 'on Friday' },
  { s: 'Lucy', be: 'is', v: 'interview', o: 'a local artist', time: 'next week' }
  ];
  const goingAff = () => GOING_ROWS.map(r0 =>
    q(`${r0.s} ___ ${r0.v}${r0.o ? ' ' + r0.o : ''} ${r0.time}.`, `${r0.be} going to ${r0.v}`,
      [`${r0.be} going to ${r0.v}s`, `will ${r0.v}ing`, `${r0.be} go to ${r0.v}`], `be going to：${r0.be} going to + 动词原形 ${r0.v}。`));
  const goingNeg = () => GOING_ROWS.map(r0 =>
    q(`${r0.s} ___ ${r0.v}${r0.o ? ' ' + r0.o : ''} ${r0.time}.`, `${r0.be} not going to ${r0.v}`,
      [`${r0.be} going not to ${r0.v}`, `won't ${r0.v}ing`, `${r0.be} not go to ${r0.v}`], `be going to 的否定：${r0.be} not going to + 动词原形。`));
  const goingYesNo = () => GOING_ROWS.map(r0 =>
    q(`___ ${lowerSubject(r0.s)} going to ${r0.v}${r0.o ? ' ' + r0.o : ''} ${r0.time}?`, cap(r0.be),
      ['Am', 'Is', 'Are', 'Will'], `be going to 的一般疑问句把 ${r0.be} 提到主语前。`));

const WILL_VS_GOING = [
  ['My laptop has just frozen. I ___ restart it.', 'will', ['am going to', 'would', 'am restarting'], '临时决定用 will。'],
  ['I ___ retake the maths test next month. I have already registered for it.', 'am going to', ['will', 'would', 'retake'], '已计划好的安排用 be going to。'],
  ['Look at those dark clouds! It ___ rain during the match.', 'is going to', ['will', 'would', 'rains'], '根据眼前迹象预测用 be going to。'],
  ['I think online learning ___ become more common in the future.', 'will', ['are going to', 'would', 'becomes'], '单纯预测常用 will。'],
  ['We ___ perform at the school concert on Friday. It is on the programme.', 'are going to', ['will', 'would', 'perform'], '日程安排用 be going to。'],
  ["Don't worry. I ___ check the link for you.", 'will', ['am going to', 'would', 'check'], '主动提供帮助用 will。'],
  ['She ___ study environmental science at university. She has already received an offer.', 'is going to', ['will', 'would', 'studies'], '已计划用 be going to。'],
  ["I promise I ___ share your photos with anyone.", "won't", ["am not going to", "wouldn't", "don't"], "承诺用 will/won't。"],
  ['The school bus ___ leave at 7:30 according to the timetable.', 'is going to', ['will', 'would', 'leaves'], '时刻表安排用 be going to（也可用一般现在时）。'],
  ['That box of books looks heavy. I ___ carry it for you.', 'will', ['am going to', 'would', 'carry'], '主动帮忙用 will。']
  ];
  const willVsGoing = () => WILL_VS_GOING.map(([sentence, a, d, e]) => q(sentence, a, d, e));

  /* ---------- 过去进行时 ---------- */
const PAST_CONT_ROWS = [
  { s: 'I', be: 'was', ing: 'reading', o: 'an article about climate change', time: 'at 9 pm last night' },
  { s: 'You', be: 'were', ing: 'watching', o: 'a documentary on globalisation', time: 'at that time' },
  { s: 'He', be: 'was', ing: 'checking', o: 'his phone messages', time: 'at 5 pm yesterday' },
  { s: 'She', be: 'was', ing: 'worrying', o: 'about her exam results', time: 'when I called' },
  { s: 'It', be: 'was', ing: 'raining', o: '', time: 'at midnight' },
  { s: 'We', be: 'were', ing: 'discussing', o: 'the school trip', time: 'all evening' },
  { s: 'They', be: 'were', ing: 'painting', o: 'a mural for the festival', time: 'at 4 pm' },
  { s: 'Tom', be: 'was', ing: 'packing', o: 'his bags for boarding school', time: 'when his mother came home' },
  { s: 'My parents', be: 'were', ing: 'planting', o: 'vegetables in the garden', time: 'at 7 pm' },
  { s: 'The students', be: 'were', ing: 'performing', o: 'a traditional dance', time: 'when the visitors arrived' }
  ];
  const pastContForm = () => PAST_CONT_ROWS.map(r0 =>
    q(`${r0.s} ___ ${r0.o} ${r0.time}.`.replace('  ', ' '), `${r0.be} ${r0.ing}`,
      [`${r0.be === 'was' ? 'were' : 'was'} ${r0.ing}`, `${r0.be} ${r0.ing.replace(/ing$/, '')}`, `${r0.be} going to ${r0.ing}`],
      `过去进行时：${r0.be} + 动词-ing。`));

const PAST_CONT_USE = [
  ["At 8 o'clock last night, I ___ my history essay.", 'was writing', ['wrote', 'am writing', 'have written'], '过去某一时刻正在做，用过去进行时。'],
  ['When the fire alarm rang, she ___ a science experiment.', 'was doing', ['did', 'is doing', 'has done'], 'when 引导的过去动作发生时，另一动作正在进行。'],
  ['They ___ the recycling plan when the manager arrived.', 'were discussing', ['discussed', 'are discussing', 'have discussed'], '过去某时正在进行。'],
  ['While I ___ for my IELTS test, my sister was playing the piano.', 'was preparing', ['prepared', 'am preparing', 'have prepared'], 'while 引导的从句常用过去进行时。'],
  ['He ___ his phone while he was walking to school.', 'dropped', ['was dropping', 'is dropping', 'has dropped'], '“掉手机”是瞬间动作，用一般过去时。'],
  ['At midnight, my brother ___ about his exam results.', 'was worrying', ['worried', 'is worrying', 'has worried'], '过去某一时刻正在进行。'],
  ['We ___ for our host families at the airport at 7 am yesterday.', 'were waiting', ['waited', 'are waiting', 'have waited'], '过去某一时刻正在进行。'],
  ['She ___ when she heard the news about the scholarship.', 'was crying', ['cried', 'is crying', 'has cried'], '她听到消息时正在哭。'],
  ['The students ___ about the museum visit when the head teacher came in.', 'were talking', ['talked', 'are talking', 'have talked'], '老师进来时，学生们正在说话。'],
  ['I ___ a documentary about fast fashion at 9 pm last night.', 'was watching', ['watched', 'am watching', 'have watched'], '过去某一时刻正在进行。']
  ];
  const pastContUse = () => PAST_CONT_USE.map(([sentence, a, d, e]) => q(sentence, a, d, e));

const PAST_CONT_VS_PAST = [
  ['When I ___ home, my sister was revising for her exams.', 'got', ['was getting', 'get', 'have got'], 'got 是瞬间动作，用一般过去时。'],
  ['While Lucy ___ her notes, I was waiting outside the classroom.', 'was reading', ['read', 'reads', 'has read'], 'while 引导的持续动作常用过去进行时。'],
  ['She ___ her laptop and left the library.', 'closed', ['was closing', 'closes', 'has closed'], '连续动作中的瞬间动作用一般过去时。'],
  ['They ___ for the climate march when the rain started.', 'were preparing', ['prepared', 'are preparing', 'have prepared'], '开始下雨时他们正在做准备。'],
  ['I ___ an online video when the wifi failed.', 'was watching', ['watched', 'watch', 'have watched'], '网络断了时我正在看在线视频。'],
  ['He ___ his phone while he was cycling to school.', 'dropped', ['was dropping', 'drops', 'has dropped'], 'dropped 是瞬间动作。'],
  ['We ___ the museum when we heard the fire alarm.', 'were visiting', ['visited', 'visit', 'have visited'], '听到火警时我们正在参观博物馆。'],
  ['The head teacher ___ in when the students were using their phones.', 'walked', ['was walking', 'walks', 'has walked'], 'walked 是瞬间动作。'],
  ['While she ___ the recycling report, her computer crashed.', 'was writing', ['wrote', 'writes', 'has written'], 'while 引导的持续动作。'],
  ['I ___ my arm while I was playing in the school match.', 'broke', ['was breaking', 'break', 'have broken'], 'broke 是瞬间动作。']
  ];
  const pastContVsPast = () => PAST_CONT_VS_PAST.map(([sentence, a, d, e]) => q(sentence, a, d, e));

  /* ---------- 过去完成时 ---------- */
const PAST_PERF_ROWS = [
  { s: 'I', pp: 'finished', o: 'my coursework', time: 'before the deadline' },
  { s: 'You', pp: 'checked', o: 'the facts', time: 'before you shared the post' },
  { s: 'He', pp: 'limited', o: 'his screen time', time: 'by the end of last term' },
  { s: 'She', pp: 'planted', o: 'the trees', time: 'before the rains came' },
  { s: 'It', pp: 'rained', o: '', time: 'before the match started' },
  { s: 'We', pp: 'collected', o: 'the plastic bottles', time: 'before the cleanup ended' },
  { s: 'They', pp: 'visited', o: 'the museum', time: 'before it closed' },
  { s: 'Tom', pp: 'posted', o: 'the application form', time: 'before the interview' },
  { s: 'My sister', pp: 'learned', o: 'some basic Chinese', time: 'before she moved abroad' },
  { s: 'The students', pp: 'presented', o: 'their project', time: 'by the end of last week' }
  ];
  const pastPerfForm = () => PAST_PERF_ROWS.map(r0 =>
    q(`${r0.s} ___ ${r0.o} ${r0.time}.`.replace('  ', ' '), `had ${r0.pp}`,
      [`has ${r0.pp}`, `have ${r0.pp}`, `had ${r0.pp.replace(/ed$/, '')}`], `过去完成时：had + 过去分词 ${r0.pp}。`));

const PAST_PERF_USE = [
  ['By the time we arrived, the exhibition ___ .', 'had closed', ['closed', 'has closed', 'was closing'], '展览在我们到达之前已结束，用过去完成时。'],
  ['She ___ the article before she joined the discussion.', 'had read', ['read', 'has read', 'was reading'], '读文章发生在讨论之前，是“过去的过去”。'],
  ['When we reached the beach, the cleanup ___ .', 'had started', ['started', 'has started', 'was starting'], '清理工作在到达之前已开始。'],
  ['He admitted that he ___ the photo without permission.', 'had shared', ['shared', 'has shared', 'was sharing'], '宾语从句中，shared 发生在 admitted 之前。'],
  ['They ___ the project before the teacher checked it.', 'had finished', ['finished', 'have finished', 'were finishing'], '在老师检查之前已完成。'],
  ['She said that she ___ more confident after the summer course.', 'had felt', ['felt', 'has felt', 'was feeling'], '宾语从句中，felt 发生在 said 之前。'],
  ['By 2020, she ___ in three different countries.', 'had lived', ['lived', 'has lived', 'was living'], 'by 2020 是过去时间点，之前已完成。'],
  ['My brother ___ asleep before my parents came home.', 'had fallen', ['fell', 'has fallen', 'was falling'], '父母回家前已睡着。'],
  ['The research team ___ the survey by the end of last month.', 'had completed', ['completed', 'has completed', 'was completing'], 'by the end of last month 之前已完成。'],
  ['We ___ online for two years before we met in person.', 'had chatted', ['chatted', 'have chatted', 'were chatting'], '见面之前已在网上聊了两年。']
  ];
  const pastPerfUse = () => PAST_PERF_USE.map(([sentence, a, d, e]) => q(sentence, a, d, e));

const PAST_PERF_VS_PP = [
  ['I ___ my essay, so I can relax now.', 'have finished', ['had finished', 'finished', 'was finishing'], '对现在有影响，用现在完成时。'],
  ['I ___ my essay before my teacher asked for it.', 'had finished', ['have finished', 'finished', 'was finishing'], '在老师索要（过去）之前完成，用过去完成时。'],
  ['She ___ to that art exhibition twice.', 'has been', ['had been', 'went', 'was'], 'twice 表示到现在为止的经历。'],
  ['She ___ to that exhibition twice before it closed.', 'had been', ['has been', 'went', 'was'], '在展览关闭之前去过两次。'],
  ['We ___ in this city since 2015.', 'have lived', ['had lived', 'lived', 'were living'], 'since 2015 持续到现在。'],
  ['We ___ here for ten years before we moved to Canada.', 'had lived', ['have lived', 'lived', 'were living'], '在搬走之前已住了十年。'],
  ['He ___ just deleted the photo.', 'has', ['have', 'had', 'was'], 'just 与现在完成时连用。'],
  ['He ___ the photo before his friends saw it.', 'had deleted', ['has deleted', 'deleted', 'was deleting'], '朋友看到之前已删除照片。'],
  ['___ you ever studied abroad?', 'Have', ['Had', 'Did', 'Are'], 'ever 询问至今的经历。'],
  ['___ you studied abroad before you left school?', 'Had', ['Have', 'Did', 'Are'], 'before you left school 是过去时间点，用过去完成时。']
  ];
  const pastPerfVsPp = () => PAST_PERF_VS_PP.map(([sentence, a, d, e]) => q(sentence, a, d, e));

  /* ============================================================
     二、被动语态 Passive Voice
     ============================================================ */
const PAS_PRESENT = [
  ['Online learning ___ (use) by many boarding schools now.', 'is used', 'Online learning 是“被使用”的，一般现在时被动：is + used。'],
  ['Personal information ___ (collect) by most social media apps.', 'is collected', 'information 不可数，一般现在时被动：is + collected。'],
  ['Plastic bottles ___ (recycle) in most European countries.', 'are recycled', '主语 bottles 复数，被动：are + recycled。'],
  ['Teenagers ___ (affect) by peer pressure at school.', 'are affected', '主语 teenagers 复数，被动：are + affected。'],
  ['Traditional festivals ___ (celebrate) in many parts of the world.', 'are celebrated', '主语 festivals 复数，被动：are + celebrated。'],
  ['English ___ (use) as a global language in international business.', 'is used', 'English 是“被使用”的，一般现在时被动：is + used。'],
  ['The school curriculum ___ (review) every two years.', 'is reviewed', 'every two years 表示定期，被动：is + reviewed。'],
  ['Short videos ___ (share) millions of times every day.', 'are shared', '主语 videos 复数，被动：are + shared。'],
  ['Carbon emissions ___ (measure) by scientists every year.', 'are measured', '主语 emissions 复数，被动：are + measured。'],
  ['The museum ___ (visit) by thousands of tourists each summer.', 'is visited', '主语 museum 单数，被动：is + visited。']
  ];
  const pasPresent = () => PAS_PRESENT.map(([sentence, a, e]) => f(sentence, a, e));

const PAS_PAST = [
  ['The new curriculum ___ (introduce) last semester.', 'was introduced', 'last semester 是过去时间，被动：was introduced。'],
  ['The algorithm ___ (change) in 2022.', 'was changed', 'in 2022 是过去时间，被动：was changed。'],
  ['Many trees ___ (plant) along the river last spring.', 'were planted', '主语 trees 复数，过去被动：were planted。'],
  ['The survey ___ (conduct) among teenagers last month.', 'was conducted', 'last month 是过去时间，被动：was conducted。'],
  ['The film ___ (show) at the art festival last year.', 'was shown', 'show 的过去分词是 shown。'],
  ['The trade agreement ___ (sign) in 2021.', 'was signed', 'in 2021 是过去时间，被动：was signed。'],
  ['The exam results ___ (publish) on the school website yesterday.', 'were published', '主语 results 复数，过去被动：were published。'],
  ['The old computers ___ (replace) two years ago.', 'were replaced', '主语 computers 复数，过去被动：were replaced。'],
  ['The recycling plan ___ (discuss) at the meeting last week.', 'was discussed', 'last week 是过去时间，被动：was discussed。'],
  ['His anxiety ___ (notice) by his teachers last term.', 'was noticed', 'last term 是过去时间，被动：was noticed。']
  ];
  const pasPast = () => PAS_PAST.map(([sentence, a, e]) => f(sentence, a, e));

const PAS_PERFECT = [
  ['A new assessment system ___ (introduce) at our school recently.', 'has been introduced', 'recently + 现在完成时被动：has been introduced。'],
  ['The new app ___ (download) by thousands of users already.', 'has been downloaded', 'already + 现在完成时被动：has been downloaded。'],
  ['Several recycling projects ___ (launch) in the city recently.', 'have been launched', '主语 projects 复数，现在完成时被动：have been launched。'],
  ['The sleep survey ___ (finish) already.', 'has been finished', 'already + 现在完成时被动：has been finished。'],
  ['The novel ___ (translate) into more than twenty languages.', 'has been translated', '现在完成时被动：has been translated。'],
  ['Many international students ___ (accept) by the programme already.', 'have been accepted', '主语 students 复数，have been accepted。'],
  ['The online courses ___ (improve) since last year.', 'have been improved', '主语 courses 复数，have been improved。'],
  ['Private messages ___ (read) by third parties.', 'have been read', 'read 的过去分词还是 read，have been read。'],
  ['Carbon emissions ___ (reduce) by the new policy.', 'have been reduced', '主语 emissions 复数，have been reduced。'],
  ['The bullying incident ___ (report) to the school already.', 'has been reported', 'already + 现在完成时被动：has been reported。']
  ];
  const pasPerfect = () => PAS_PERFECT.map(([sentence, a, e]) => f(sentence, a, e));

const PAS_FUTURE = [
  ['The new boarding school ___ (open) next September.', 'will be opened', 'next September + 将来时被动：will be opened。'],
  ['The results of the study ___ (publish) online next month.', 'will be published', 'next month + 将来时被动：will be published。'],
  ['More solar panels ___ (install) on public buildings next year.', 'will be installed', '将来时被动：will be installed。'],
  ['The mental health programme ___ (introduce) in all secondary schools soon.', 'will be introduced', 'soon + 将来时被动：will be introduced。'],
  ['The street art festival ___ (hold) in the city centre next spring.', 'will be held', 'hold 的过去分词是 held。'],
  ['The new visa rules ___ (announce) at the end of this month.', 'will be announced', '将来时被动：will be announced。'],
  ['All exam papers ___ (mark) by computer next year.', 'will be marked', '将来时被动：will be marked。'],
  ['Personal data ___ (protect) by stricter laws in the future.', 'will be protected', '将来时被动：will be protected。'],
  ['Single-use plastic bags ___ (ban) from next January.', 'will be banned', '将来时被动：will be banned。'],
  ['The traditional dance ___ (perform) at the opening ceremony.', 'will be performed', '将来时被动：will be performed。']
  ];
  const pasFuture = () => PAS_FUTURE.map(([sentence, a, e]) => f(sentence, a, e));

const PAS_MODAL = [
  ['Assignments ___ (must / submit) through the school website.', 'must be submitted', '情态动词被动：must be + 过去分词。'],
  ['Fake news ___ (can / spread) very quickly online.', 'can be spread', '情态动词被动：can be + 过去分词。'],
  ['Waste paper ___ (should / recycle) in every classroom.', 'should be recycled', '情态动词被动：should be + 过去分词。'],
  ['Peer pressure ___ (can / reduce) by open communication.', 'can be reduced', '情态动词被动：can be + 过去分词。'],
  ['Old buildings ___ (must / protect) by the local government.', 'must be protected', '情态动词被动：must be + 过去分词。'],
  ['Cultural differences ___ (should / respect) in international teams.', 'should be respected', '情态动词被动：should be + 过去分词。'],
  ['The timetable ___ (can / change) at the start of each term.', 'can be changed', '情态动词被动：can be + 过去分词。'],
  ['Screen time ___ (must / limit) for young children.', 'must be limited', '情态动词被动：must be + 过去分词。'],
  ['Public transport ___ (should / use) more often in big cities.', 'should be used', '情态动词被动：should be + 过去分词。'],
  ['Stress ___ (can / manage) with better time management.', 'can be managed', '情态动词被动：can be + 过去分词。']
  ];
  const pasModal = () => PAS_MODAL.map(([sentence, a, e]) => f(sentence, a, e));

const PAS_UNKNOWN = [
  ["My account ___ last night. I don't know who did it.", 'was hacked', ['hacked', 'is hacking', 'has hacked'], '不知道动作执行者时用被动语态。'],
  ['The recycling bins ___ from the street yesterday.', 'were removed', ['removed', 'are removing', 'have removed'], '垃圾桶被移走，执行者不明确，用被动。'],
  ['The exam timetable ___ on Monday morning.', 'was changed', ['changed', 'is changing', 'has changed'], '时间表被改动，执行者不重要，用被动。'],
  ['His confidence ___ by constant criticism at home.', 'was damaged', ['damaged', 'is damaging', 'has damaged'], '自信心被伤害，执行者不明确。'],
  ['The old theatre ___ in 2019.', 'was closed', 