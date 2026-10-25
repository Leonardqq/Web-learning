
/* ============================================================
   Grammar Rush v3 — 语法树 + 题库生成器
   ------------------------------------------------------------
   每个最细节点（leaf）至少 10 题；题目由共享语料 + 变换生成，
   保证同一组句型可以覆盖肯定/否定/疑问/特殊疑问等不同考点。
   ============================================================ */
(function () {
  'use strict';

  /* ---------- 题目构造器 ---------- */
  const q = (question, answer, distractors, explanation) =>
    ({ t: 'single', q: question, a: answer, d: distractors || [], e: explanation });
  const f = (question, answer, explanation) =>
    ({ t: 'fill', q: question, a: answer, e: explanation });
  const c = (question, answer, explanation, noError) =>
    ({ t: 'correct', q: question, a: answer, e: explanation, noError: !!noError });
  const r = (question, answer, explanation) =>
    ({ t: 'rewrite', q: question, a: answer, e: explanation });

  const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
  const shuffle = a => { const x = a.slice(); for (let i = x.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [x[i], x[j]] = [x[j], x[i]]; } return x; };
  const uniq = a => [...new Set(a)];
  const isThird = s => /^(He|She|It|Tom|My sister|My father|My mother|The shop|The teacher|The student|Everyone|Nobody|Each .+)$/.test(s);
  const lowerSubject = s => {
    if (s === 'I') return 'I';
    if (/^(Tom|Mr|Mrs|Ms|Li|Beijing|China)\b/.test(s)) return s;
    return s.charAt(0).toLowerCase() + s.slice(1);
  };

  /* ---------- 语法树节点构造器 ---------- */
  const g = (id, name, en, children, desc) => ({ id, name, en, children, desc: desc || '' });
  // keepAll=true 的叶子不截断到 10 题、也不用转换题补齐（用于导入的整卷题库，如高考200题）
  const l = (id, name, en, desc, items, keepAll) => ({ id, name, en, desc, items, keepAll: !!keepAll });

  /* 每个语法知识点固定 10 道题 */
  const QUESTIONS_PER_LEAF = 10;

  /* ============================================================
     一、时态 Tenses
     ============================================================ */

  /* ---------- 一般现在时：be 动词 ---------- */
const BE_PRES = [
    ['I', 'am', 'a boarding school student in Grade 10'],
    ['You', 'are', 'well prepared for the final speaking assessment'],
    ['He', 'is', 'under a lot of pressure before exams'],
    ['She', 'is', 'very interested in traditional Chinese painting'],
    ['It', 'is', 'a useful app for learning English vocabulary'],
    ['We', 'are', 'serious about cutting carbon emissions at school'],
    ['They', 'are', 'worried about bullying at their new school'],
    ['Tom', 'is', 'addicted to short videos on his phone'],
    ['My parents', 'are', 'proud of my progress in English'],
    ['The local museum', 'is', 'free for students at the weekend']
  ];
  const BE_FORMS = ['am', 'is', 'are'];
  const BE_NEG = { am: 'am not', is: 'is not', are: 'are not', was: 'was not', were: 'were not' };
  const beAff = rows => rows.map(([s, be, comp]) =>
    q(`${s} ___ ${comp}.`, be, BE_FORMS.filter(x => x !== be), `主语 ${s} 搭配 be 动词 ${be}。`));
  const beNeg = rows => rows.map(([s, be, comp]) =>
    q(`${s} ___ ${comp}.`, BE_NEG[be], [be, ...BE_FORMS.filter(x => x !== be)], `be 动词否定：${be} + not，即 ${BE_NEG[be]}。`));
  const beYesNo = rows => rows.map(([s, be, comp]) =>
    q(`___ ${lowerSubject(s)} ${comp}?`, cap(be), ['Am', 'Is', 'Are', 'Be'], `一般疑问句把 be 动词 ${be} 提到主语前：${cap(be)} ${s} ...?`));

const BE_WH = [
    ['What', 'is', 'your favourite subject at school'],
    ['Where', 'is', 'the new exchange student from'],
    ['How much', 'is', 'the ticket for the science museum'],
    ['Who', 'is', 'responsible for the school recycling project'],
    ['Why', 'are', 'many teenagers anxious about exams'],
    ['When', 'is', 'the final assessment for this term'],
    ['How long', 'is', 'your screen time every day'],
    ['How', 'is', 'the traditional music festival in your city'],
    ['Where', 'is', 'the nearest recycling centre'],
    ['How many students', 'are', 'in the international exchange programme']
  ];
  const beWh = () => BE_WH.map(([wh, be, rest]) =>
    q(`${wh} ___ ${rest}?`, be, BE_FORMS.filter(x => x !== be), `特殊疑问句：疑问词 ${wh} + be 动词 + 主语。此处用 ${be}。`));

  /* ---------- 一般现在时：实义动词 ---------- */
const LEX_PRES = [
    { s: 'I', v: 'attend', v3: 'attends', o: 'an online writing course', time: 'every Saturday' },
    { s: 'You', v: 'recycle', v3: 'recycles', o: 'plastic bottles at home', time: 'every week' },
    { s: 'He', v: 'post', v3: 'posts', o: 'short videos online', time: 'every evening' },
    { s: 'She', v: 'study', v3: 'studies', o: 'traditional Chinese painting', time: 'at the weekend' },
    { s: 'It', v: 'cost', v3: 'costs', o: 'a lot to study abroad', time: 'every year' },
    { s: 'We', v: 'discuss', v3: 'discusses', o: 'the new curriculum with our teachers', time: 'every Monday' },
    { s: 'They', v: 'celebrate', v3: 'celebrates', o: 'festivals from different cultures', time: 'every year' },
    { s: 'Tom', v: 'manage', v3: 'manages', o: 'his screen time', time: 'every evening' },
    { s: 'My sister', v: 'worry', v3: 'worries', o: 'about her exam results', time: 'every term' },
    { s: 'The shop', v: 'import', v3: 'imports', o: 'coffee beans from Kenya', time: 'every month' }
  ];
  const lexAff = () => LEX_PRES.map(r0 => {
    const third = isThird(r0.s);
    const ans = third ? r0.v3 : r0.v;
    return q(`${r0.s} ___ (${r0.v}) ${r0.o} ${r0.time}.`, ans,
      [third ? r0.v : r0.v3, r0.v + 'ing', r0.v + 'ed'],
      third ? `主语 ${r0.s} 是第三人称单数，一般现在时用 ${r0.v3}。` : `主语 ${r0.s} 不是第三人称单数，用动词原形 ${r0.v}。`);
  });
  const lexNeg = () => LEX_PRES.map(r0 => {
    const third = isThird(r0.s);
    const aux = third ? "doesn't" : "don't";
    const other = third ? "don't" : "doesn't";
    return q(`${r0.s} ___ ${r0.v} ${r0.o} ${r0.time}.`, `${aux} ${r0.v}`,
      [`${other} ${r0.v}`, `${aux} ${r0.v3}`, `isn't ${r0.v}`],
      `实义动词否定用 ${aux} + 动词原形 ${r0.v}。`);
  });
  const lexYesNo = () => LEX_PRES.map(r0 => {
    const third = isThird(r0.s);
    const aux = third ? 'Does' : 'Do';
    return q(`___ ${lowerSubject(r0.s)} ${r0.v} ${r0.o} ${r0.time}?`, aux,
      ['Do', 'Does', 'Is', 'Are'],
      `${third ? '第三人称单数' : '第一、二人称或复数'}的一般疑问句用 ${aux} + 主语 + 动词原形。`);
  });
const LEX_WH = [
    ['What', 'do', 'you do to relax after exams'],
    ['Where', 'does', 'your family buy organic food'],
    ['When', 'do', 'the exchange students arrive at our school'],
    ['Why', 'does', 'the local museum charge students so little'],
    ['How often', 'do', 'you check social media at night'],
    ['What time', 'does', 'the last bus leave the city centre'],
    ['Who', 'do', 'you usually study with before exams'],
    ['Which subjects', 'does', 'Tom want to choose next year'],
    ['How', 'do', 'most teenagers deal with peer pressure'],
    ['What', 'does', 'the exchange programme include for new students']
  ];
  const lexWh = () => LEX_WH.map(([wh, aux, rest]) =>
    q(`${wh} ___ ${rest}?`, aux, ['do', 'does', 'did', 'is'], `特殊疑问句：疑问词 + 助动词 + 主语 + 动词原形。此处用 ${aux}。`));

const THIRD_S = [
    ['review', 'reviews', 'his notes before the next class', '直接加 -s'],
    ['search', 'searches', 'for reliable sources online', '以 ch 结尾加 -es'],
    ['study', 'studies', 'climate change in his science lessons', '辅音字母 + y，变 y 为 i 加 -es'],
    ['go', 'goes', 'to school by bus', '以 o 结尾加 -es'],
    ['do', 'does', 'a short revision session after dinner', '以 o 结尾加 -es'],
    ['have', 'has', 'a music lesson after school', '不规则变化'],
    ['try', 'tries', 'to sleep without his phone', '辅音字母 + y，变 y 为 i 加 -es'],
    ['carry', 'carries', 'a reusable water bottle', '辅音字母 + y，变 y 为 i 加 -es'],
    ['relax', 'relaxes', 'by drawing in the art room', '以 x 结尾加 -es'],
    ['miss', 'misses', 'his friends from the exchange programme', '以 s 结尾加 -es']
  ];
  const thirdS = () => THIRD_S.map(([v, v3, o, rule]) =>
    f(`He ___ (${v}) ${o} every day.`, v3, `第三人称单数：${v} → ${v3}（${rule}）。`));

  /* ---------- 频率副词 ---------- */
const FREQ_LIST = [
  ['I ___ revise my notes before a school assessment. （总是）', 'always', 'always', ['usually', 'sometimes', 'never'], 'always 表示“总是”，频率最高。'],
  ['Tom is ___ offline in the evening. He checks his messages constantly. （从不）', 'never', 'never', ['always', 'often', 'sometimes'], 'never 表示“从不”。'],
  ['We ___ talk about our exam stress at dinner, but sometimes we stay silent. （通常）', 'usually', 'usually', ['never', 'seldom', 'always'], 'usually 表示“通常”，频率较高。'],
  ['She ___ cycles to work instead of driving, but not every day. （经常）', 'often', 'often', ['never', 'always', 'hardly ever'], 'often 表示“经常”。'],
  ["He ___ forgets that English is not everyone's first language. （有时）", 'sometimes', 'sometimes', ['always', 'never', 'usually'], 'sometimes 表示“有时”。'],
  ['My brother ___ visits art museums. He prefers street art. （很少）', 'seldom', 'seldom', ['always', 'usually', 'often'], 'seldom 表示“很少”。'],
  ['They ___ recycle plastic bottles at home. （通常）', 'usually', 'usually', ['never', 'sometimes', 'seldom'], 'usually 表示“通常”。'],
  ['I ___ sleep for eight hours during exam week. （几乎不）', 'hardly ever', 'hardly ever', ['always', 'often', 'usually'], 'hardly ever 表示“几乎不”。'],
  ['Our teacher ___ explains the marking criteria before an assignment. （总是）', 'always', 'always', ['never', 'sometimes', 'seldom'], 'always 表示“总是”。'],
  ['We ___ check the news on our phones at breakfast. （经常）', 'often', 'often', ['never', 'hardly ever', 'always'], 'often 表示“经常”。']
  ];
  const freqList = () => FREQ_LIST.map(([sentence, answer, a, d, e]) => q(sentence, a, d, e));

const FREQ_POS = [
  ['Choose the correct sentence.', 'She is always nervous before an assessment.', ['She always is nervous before an assessment.', 'She is nervous always before an assessment.', 'Always she is nervous before an assessment.'], '频率副词放在 be 动词之后。'],
  ['Choose the correct sentence.', 'He often checks his phone during lessons.', ['He checks often his phone during lessons.', 'He checks his often phone during lessons.', 'He checks his phone during often lessons.'], '频率副词放在实义动词之前。'],
  ['Choose the correct sentence.', 'We have never seen so much plastic on the beach.', ['We never have seen so much plastic on the beach.', 'We have seen never so much plastic on the beach.', 'Never we have seen so much plastic on the beach.'], '频率副词放在助动词之后、实义动词之前。'],
  ['Choose the correct sentence.', 'You should always talk to someone about exam stress.', ['You always should talk to someone about exam stress.', 'You should talk always to someone about exam stress.', 'You should talk to always someone about exam stress.'], '频率副词放在情态动词之后。'],
  ['Choose the correct sentence.', "They don't usually learn about other cultures at school.", ["They don't learn usually about other cultures at school.", "They don't learn about usually other cultures at school.", "They don't learn about other usually cultures at school."], '频率副词放在否定助动词之后、实义动词之前。'],
  ['Choose the correct sentence.', 'The museum is usually crowded at weekends.', ['The museum usually is crowded at weekends.', 'The museum is crowded usually at weekends.', 'The museum is crowded at usually weekends.'], '频率副词放在 be 动词之后。'],
  ['Choose the correct sentence.', 'My sister seldom asks her teachers for extra help.', ['My sister asks seldom her teachers for extra help.', 'My sister asks her seldom teachers for extra help.', 'My sister asks her teachers for seldom extra help.'], 'seldom 放在实义动词之前，主语为第三人称单数。'],
  ['Choose the correct sentence.', 'She can never sleep well the night before an exam.', ['She never can sleep well the night before an exam.', 'She can sleep never well the night before an exam.', 'Never she can sleep well the night before an exam.'], '频率副词放在情态动词之后。'],
  ['Choose the correct sentence.', 'My parents sometimes watch foreign films at the weekend.', ['My parents watch sometimes foreign films at the weekend.', 'My parents watch foreign sometimes films at the weekend.', 'My parents watch foreign films at sometimes the weekend.'], 'sometimes 放在实义动词之前，不能插在动词与宾语之间或介词与名词之间。'],
  ['Choose the correct sentence.', 'He hardly ever turns off the lights when he leaves.', ['He turns hardly ever off the lights when he leaves.', 'He turns off hardly ever the lights when he leaves.', 'Hardly ever he turns off the lights when he leaves.'], 'hardly ever 放在实义动词之前，主语为第三人称单数。']
  ];
  const FREQ_POS_HINTS = ['be 动词后', '实义动词前', '助动词后', '情态动词后', '否定助动词后', 'be 动词后', '实义动词前', '情态动词后', '句首/句中', '实义动词前'];
  const freqPos = () => FREQ_POS.map(([sentence, a, d, e], i) =>
    q(`Choose the correct sentence. （${FREQ_POS_HINTS[i]} · ${i + 1}）`, a, d, e));

  /* ---------- 现在进行时 ---------- */
const PC_ROWS = [
  { s: 'I', be: 'am', v: 'read', ing: 'reading', o: 'an article about renewable energy', time: 'now' },
  { s: 'You', be: 'are', v: 'listen', ing: 'listening', o: 'to a podcast about exam stress', time: 'at the moment' },
  { s: 'He', be: 'is', v: 'play', ing: 'playing', o: 'a learning game on his tablet', time: 'right now' },
  { s: 'She', be: 'is', v: 'write', ing: 'writing', o: 'an essay about cultural heritage', time: 'now' },
  { s: 'It', be: 'is', v: 'rain', ing: 'raining', o: 'hard in the city centre', time: 'at the moment' },
  { s: 'We', be: 'are', v: 'prepare', ing: 'preparing', o: 'for the final assessment', time: 'this week' },
  { s: 'They', be: 'are', v: 'design', ing: 'designing', o: 'a poster about recycling', time: 'now' },
  { s: 'Tom', be: 'is', v: 'do', ing: 'doing', o: 'a survey about social media habits', time: 'at the moment' },
  { s: 'My parents', be: 'are', v: 'watch', ing: 'watching', o: 'a documentary about migration', time: 'right now' },
  { s: 'The students', be: 'are', v: 'talk', ing: 'talking', o: 'about their gap year plans', time: 'now' }
  ];
  const PC_FORM = ['am', 'is', 'are'];
  const pcAff = () => PC_ROWS.map(r0 =>
    q(`${r0.s} ___ ${r0.o} ${r0.time}.`, `${r0.be} ${r0.ing}`,
      [`${PC_FORM.find(x => x !== r0.be)} ${r0.ing}`, `${r0.be} ${r0.v}`, `${r0.be} ${r0.ing.replace(/ing$/, 'ed')}`],
      `现在进行时：主语 + ${r0.be} + 动词-ing。`));
  const pcNeg = () => PC_ROWS.map(r0 =>
    q(`${r0.s} ___ ${r0.o} ${r0.time}.`, `${r0.be} not ${r0.ing}`,
      [`${r0.be} ${r0.ing}`, `${r0.be} not ${r0.v}`, `${PC_FORM.find(x => x !== r0.be)} not ${r0.ing}`],
      `现在进行时否定：${r0.be} + not + 动词-ing。`));
  const pcYesNo = () => PC_ROWS.map(r0 =>
    q(`___ ${lowerSubject(r0.s)} ${r0.ing} ${r0.o} ${r0.time}?`, cap(r0.be),
      ['Am', 'Is', 'Are', 'Be'], `一般疑问时把 be 动词 ${r0.be} 提到主语前。`));

const PC_WH = [
  ['What', 'are', 'the students planting in the school garden'],
  ['Where', 'is', 'she travelling during her gap year'],
  ['Why', 'are', 'teenagers spending so much time online'],
  ['Who', 'is', 'she interviewing for the school magazine'],
  ['What', 'are', 'the visitors photographing in the gallery'],
  ['When', 'are', 'you leaving for the exchange programme'],
  ['How', 'is', 'the recycling project going'],
  ['What', 'is', 'the algorithm recommending to users'],
  ['Why', 'are', 'more families choosing public transport'],
  ['Where', 'are', 'your parents staying during the festival']
  ];
  const pcWh = () => PC_WH.map(([wh, be, rest]) =>
    q(`${wh} ___ ${rest}?`, be, ['am', 'is', 'are', 'do'], `特殊疑问句：疑问词 + be 动词 + 主语 + 动词-ing。此处用 ${be}。`));

const ING_DIRECT = [
  ['attend', 'attending', 'Many students are ___ (attend) extra classes at the weekend.', '直接加 -ing。'],
  ['post', 'posting', 'She is ___ (post) short videos about campus life.', '直接加 -ing。'],
  ['collect', 'collecting', 'The volunteers are ___ (collect) plastic waste from the river.', '直接加 -ing。'],
  ['suffer', 'suffering', 'Many teenagers are ___ (suffer) from a serious lack of sleep.', '直接加 -ing。'],
  ['perform', 'performing', 'The band is ___ (perform) at the school arts festival.', '直接加 -ing。'],
  ['grow', 'growing', 'Demand for English teachers abroad is ___ (grow) quickly.', '直接加 -ing。'],
  ['study', 'studying', 'He is ___ (study) in the library for his final exams.', '直接加 -ing（study 不是“辅音字母 + y”）。'],
  ['scroll', 'scrolling', 'He is ___ (scroll) through the news feed again.', '直接加 -ing。'],
  ['worry', 'worrying', 'She is ___ (worry) about her IELTS speaking test.', '直接加 -ing。'],
  ['plant', 'planting', 'The community is ___ (plant) trees along the main road.', '直接加 -ing。']
  ];
const ING_DROP_E = [
  ['prepare', 'preparing', 'She is ___ (prepare) for her IELTS speaking test.', '去 e 加 -ing。'],
  ['share', 'sharing', 'Teenagers are ___ (share) personal photos with strangers online.', '去 e 加 -ing。'],
  ['reduce', 'reducing', 'The city is ___ (reduce) carbon emissions from public transport.', '去 e 加 -ing。'],
  ['waste', 'wasting', 'He is ___ (waste) too much time on short videos.', '去 e 加 -ing。'],
  ['celebrate', 'celebrating', 'The whole town is ___ (celebrate) the traditional harvest festival.', '去 e 加 -ing。'],
  ['compete', 'competing', 'Graduates are ___ (compete) for jobs in a global market.', '去 e 加 -ing。'],
  ['use', 'using', 'The teacher is ___ (use) a new method of assessment.', '去 e 加 -ing。'],
  ['manage', 'managing', 'She is ___ (manage) her screen time more carefully.', '去 e 加 -ing。'],
  ['balance', 'balancing', 'He is ___ (balance) schoolwork with a part-time job.', '去 e 加 -ing。'],
  ['recycle', 'recycling', 'Many families are ___ (recycle) paper and glass at home.', '去 e 加 -ing。']
  ];
const ING_DOUBLE = [
  ['run', 'running', 'The school is ___ (run) a recycling programme this term.', '双写末尾辅音字母再加 -ing。'],
  ['plan', 'planning', 'We are ___ (plan) a gap year in South America.', '双写末尾辅音字母再加 -ing。'],
  ['control', 'controlling', 'The app is ___ (control) how much time children spend online.', '双写末尾辅音字母再加 -ing。'],
  ['admit', 'admitting', 'He is ___ (admit) that he feels anxious before exams.', '双写末尾辅音字母再加 -ing。'],
  ['begin', 'beginning', 'The new curriculum is ___ (begin) to show clear results.', '双写末尾辅音字母再加 -ing（重读闭音节）。'],
  ['get', 'getting', 'Air pollution is ___ (get) worse in many large cities.', '双写末尾辅音字母再加 -ing。'],
  ['chat', 'chatting', 'The students are ___ (chat) with the school counsellor.', '双写末尾辅音字母再加 -ing。'],
  ['stop', 'stopping', 'The museum is ___ (stop) visitors from taking photos.', '双写末尾辅音字母再加 -ing。'],
  ['win', 'winning', 'Our school is ___ (win) the international debating competition.', '双写末尾辅音字母再加 -ing。'],
  ['commit', 'committing', 'The government is ___ (commit) more money to cultural exchange.', '双写末尾辅音字母再加 -ing。']
  ];
const ING_IE = [
  ['lie', 'lying', 'He is ___ (lie) about how much time he spends online.', 'ie 变 y 再加 -ing。'],
  ['die', 'dying', 'The old printing techniques are ___ (die) out in the digital age.', 'ie 变 y 再加 -ing。'],
  ['tie', 'tying', 'She is ___ (tie) posters about climate change to the railings.', 'ie 变 y 再加 -ing。'],
  ['lie', 'lying', 'The students are ___ (lie) on the grass during the lunch break.', 'ie 变 y 再加 -ing。'],
  ['tie', 'tying', 'He is ___ (tie) the laces of his running shoes.', 'ie 变 y 再加 -ing。'],
  ['die', 'dying', 'Some local languages are ___ (die) out because of globalisation.', 'ie 变 y 再加 -ing。'],
  ['lie', 'lying', 'The new museum ___ (lie) at the heart of the old town.', 'ie 变 y 再加 -ing。'],
  ['tie', 'tying', 'Our two schools ___ (tie) for first place this year.', 'ie 变 y 再加 -ing。'],
  ['lie', 'lying', 'Much of the plastic waste ___ (lie) on the ocean floor.', 'ie 变 y 再加 -ing。'],
  ['vie', 'vying', 'Young graduates are ___ (vie) for a small number of global jobs.', 'ie 变 y 再加 -ing。']
  ];
  const ingRule = rows => rows.map(([v, ing, sentence, rule]) =>
    f(sentence, ing, `动词 -ing 变化：${v} → ${ing}（${rule}）`));

const PC_ONGOING = [
  ['Look! The students ___ their laptops in the library.', 'are using', ['use', 'used', 'are use'], 'Look! 提示此刻正在发生，用现在进行时。'],
  ['Be quiet! I ___ a video call with my tutor.', 'am having', ['have', 'had', 'am have'], 'Be quiet! 提示此刻正在发生。'],
  ['Look! The volunteers ___ plastic bottles on the beach.', 'are collecting', ['collect', 'collected', 'are collect'], 'Look! 提示此刻正在发生。'],
  ["Don't call him now. He ___ with the school counsellor.", 'is talking', ['talks', 'talked', 'is talk'], 'now 提示动作正在进行。'],
  ['Listen! The band ___ traditional music on the main stage.', 'is playing', ['plays', 'played', 'is play'], 'Listen! 提示此刻正在发生。'],
  ['Look! The exchange students ___ photos in front of the school gate.', 'are taking', ['take', 'took', 'are take'], 'Look! 提示此刻正在发生。'],
  ['Hurry up! The teacher ___ the answers on the board now.', 'is writing', ['writes', 'wrote', 'is write'], 'now 提示动作正在进行。'],
  ["I can't talk now. I ___ a large file to my teacher.", 'am sending', ['send', 'sent', 'am send'], 'now 提示动作正在进行。'],
  ["It's noisy outside because workers ___ new solar panels on the roof.", 'are installing', ['install', 'installed', 'are install'], '此刻的情况说明动作正在进行，用现在进行时。'],
  ['Be careful! The children ___ near the busy road.', 'are running', ['run', 'ran', 'are run'], 'Be careful! 提示此刻正在发生。']
  ];
  const pcOngoing = () => PC_ONGOING.map(([sentence, a, d, e]) => q(sentence, a, d, e));

const PC_PERIOD = [
  ['This term, our school ___ a new approach to assessment.', 'is trying', ['tries', 'tried', 'was trying'], 'this term 表示现阶段正在做，用现在进行时。'],
  ['These days, developers ___ new tools to detect online misinformation.', 'are designing', ['design', 'designed', 'were designing'], 'these days 表示现阶段正在做。'],
  ['This month, the city ___ more electric buses on busy routes.', 'is testing', ['tests', 'tested', 'was testing'], 'this month 表示现阶段正在做。'],
  ['These days, teenagers ___ far more pressure from social media.', 'are facing', ['face', 'faced', 'were facing'], 'these days 表示现阶段正在做。'],
  ['This year, the museum ___ its collection of local street art.', 'is expanding', ['expands', 'expanded', 'was expanding'], 'this year 表示现阶段正在做。'],
  ['These days, more graduates ___ jobs outside their own country.', 'are finding', ['find', 'found', 'were finding'], 'these days 表示现阶段正在做。'],
  ['I ___ for my IELTS test this month, so I am very busy.', 'am preparing', ['prepare', 'prepared', 'was preparing'], 'this month 表示现阶段正在做。'],
  ['These days, researchers ___ how algorithms shape the choices of young users.', 'are studying', ['study', 'studied', 'were studying'], 'these days 表示现阶段正在做。'],
  ['This summer, local shops ___ the amount of plastic packaging they use.', 'are reducing', ['reduce', 'reduced', 'were reducing'], 'this summer 表示现阶段正在做。'],
  ['These days, she ___ a counsellor about her anxiety.', 'is seeing', ['sees', 'saw', 'was seeing'], 'these days 表示现阶段正在做。']
  ];
  const pcPeriod = () => PC_PERIOD.map(([sentence, a, d, e]) => q(sentence, a, d, e));

const PC_VS_SIMPLE = [
  ['Our teacher ___ us feedback every Monday.', 'gives', ['is giving', 'gave', 'give'], 'every Monday 表示习惯，用一般现在时。'],
  ['Our teacher ___ us feedback on this project today.', 'is giving', ['gives', 'gave', 'give'], 'today 表示当前安排，用现在进行时。'],
  ['He ___ his phone about fifty times a day.', 'checks', ['is checking', 'checked', 'check'], 'a day 表示频率，用一般现在时。'],
  ['He ___ his phone right now instead of listening.', 'is checking', ['checks', 'checked', 'check'], 'right now 表示此刻，用现在进行时。'],
  ['The council ___ free recycling bags to every household.', 'offers', ['is offering', 'offered', 'offer'], '描述长期安排，用一般现在时。'],
  ['The council ___ free recycling bags to new residents this week.', 'is offering', ['offers', 'offered', 'offer'], 'this week 表示现阶段，用现在进行时。'],
  ['My sister ___ about eight hours every night.', 'sleeps', ['is sleeping', 'slept', 'sleep'], 'every night 表示习惯，用一般现在时。'],
  ['My sister ___ badly this week because of exam stress.', 'is sleeping', ['sleeps', 'slept', 'sleep'], 'this week 表示现阶段，用现在进行时。'],
  ['Many graduates ___ jobs in other countries after university.', 'find', ['are finding', 'found', 'finds'], '描述一般情况，用一般现在时。'],
  ['Many graduates ___ it harder to find jobs this year.', 'are finding', ['find', 'found', 'finds'], 'this year 表示现阶段，用现在进行时。']
  ];
  const pcVsSimple = () => PC_VS_SIMPLE.map(([sentence, a, d, e]) => q(sentence, a, d, e));

  /* ---------- 一般过去时 ---------- */
const BE_PAST = [
  ['I', 'was', 'at a boarding school', 'last year'],
  ['You', 'were', 'late for the online lesson', 'this morning'],
  ['He', 'was', 'worried about the final assessment', 'last week'],
  ['She', 'was', 'happy with her exam results', 'last Friday'],
  ['It', 'was', 'unusually warm for autumn', 'last year'],
  ['We', 'were', 'offline for three hours', 'last night'],
  ['They', 'were', 'interested in street art', 'last year'],
  ['Tom', 'was', 'under a lot of pressure', 'last month'],
  ['My parents', 'were', 'against my gap year', 'last summer'],
  ['The exhibition', 'was', 'about cultural exchange', 'last month']
  ];
  const BE_PAST_FORMS = ['was', 'were'];
  // 过去时 be 单选补足选项：只用 was/were 会退化到 2 个选项，混入现在时形式作干扰
  const BE_PAST_DISTRACTORS = { was: ['were', 'is', 'am'], were: ['was', 'are', 'is'] };
  const bePastAff = () => BE_PAST.map(([s, be, comp, time]) =>
    q(`${s} ___ ${comp} ${time}.`, be, BE_PAST_DISTRACTORS[be], `主语 ${s} 的过去式 be 动词用 ${be}。`));
  const bePastNeg = () => BE_PAST.map(([s, be, comp, time]) => {
    const other = BE_PAST_FORMS.find(x => x !== be);
    return q(`${s} ___ ${comp} ${time}.`, `${be} not`, [be, other, other + ' not'], `过去时 be 动词否定：${be} + not，即 ${be} not。`);
  });
  const bePastYesNo = () => BE_PAST.map(([s, be, comp, time]) =>
    q(`___ ${lowerSubject(s)} ${comp} ${time}?`, cap(be), ['Was', 'Were', 'Am', 'Is'], `一般疑问句把 ${be} 提到主语前。`));

const PAST_ED_DIRECT = [
  ['attend', 'attended', 'the online lecture', 'last night', '直接加 -ed'],
  ['discuss', 'discussed', 'the recycling plan', 'last week', '直接加 -ed'],
  ['watch', 'watched', 'a documentary about globalisation', 'last Sunday', '直接加 -ed'],
  ['visit', 'visited', 'the science museum', 'last month', '直接加 -ed'],
  ['collect', 'collected', 'plastic bottles in the park', 'yesterday', '直接加 -ed'],
  ['check', 'checked', 'our screen time', 'last night', '直接加 -ed'],
  ['join', 'joined', 'the debate club', 'last term', '直接加 -ed'],
  ['print', 'printed', 'the exam papers', 'this morning', '直接加 -ed'],
  ['post', 'posted', 'photos of the festival', 'yesterday', '直接加 -ed'],
  ['talk', 'talked', 'about peer pressure', 'last week', '直接加 -ed']
  ];
const PAST_ED_D = [
  ['arrive', 'arrived', 'late for the lecture', 'this morning', '以不发音的 e 结尾，直接加 -d'],
  ['share', 'shared', 'our notes online', 'last night', '以不发音的 e 结尾，直接加 -d'],
  ['reduce', 'reduced', 'our carbon emissions', 'last year', '以不发音的 e 结尾，直接加 -d'],
  ['notice', 'noticed', 'a change in her behaviour', 'last week', '以不发音的 e 结尾，直接加 -d'],
  ['describe', 'described', 'the traditional festival', 'yesterday', '以不发音的 e 结尾，直接加 -d'],
  ['invite', 'invited', 'students from three countries', 'last month', '以不发音的 e 结尾，直接加 -d'],
  ['use', 'used', 'public transport', 'last weekend', '以不发音的 e 结尾，直接加 -d'],
  ['waste', 'wasted', 'two hours on short videos', 'last night', '以不发音的 e 结尾，直接加 -d'],
  ['celebrate', 'celebrated', 'the end of the exams', 'last Friday', '以不发音的 e 结尾，直接加 -d'],
  ['practise', 'practised', 'English with an exchange student', 'last term', '以不发音的 e 结尾，直接加 -d']
  ];
const PAST_ED_Y = [
  ['study', 'studied', 'for the entrance exam', 'last year', '辅音字母 + y，变 y 为 i 加 -ed'],
  ['copy', 'copied', 'the key points from the board', 'yesterday', '辅音字母 + y，变 y 为 i 加 -ed'],
  ['try', 'tried', 'a new learning app', 'last month', '辅音字母 + y，变 y 为 i 加 -ed'],
  ['carry', 'carried', 'reusable bags to the market', 'last weekend', '辅音字母 + y，变 y 为 i 加 -ed'],
  ['worry', 'worried', 'about the exam results', 'last week', '辅音字母 + y，变 y 为 i 加 -ed'],
  ['apply', 'applied', 'for the exchange programme', 'last spring', '辅音字母 + y，变 y 为 i 加 -ed'],
  ['hurry', 'hurried', 'to the gallery before it closed', 'yesterday', '辅音字母 + y，变 y 为 i 加 -ed'],
  ['identify', 'identified', 'the main sources of pollution', 'last year', '辅音字母 + y，变 y 为 i 加 -ed'],
  ['reply', 'replied', 'to the online comments', 'last night', '辅音字母 + y，变 y 为 i 加 -ed'],
  ['tidy', 'tidied', 'the classroom after the show', 'last Friday', '辅音字母 + y，变 y 为 i 加 -ed']
  ];
const PAST_ED_DOUBLE = [
  ['plan', 'planned', 'a recycling campaign', 'last month', '重读闭音节，双写末尾辅音字母加 -ed'],
  ['chat', 'chatted', 'with our exchange partners', 'last night', '重读闭音节，双写末尾辅音字母加 -ed'],
  ['stop', 'stopped', 'the video after ten minutes', 'yesterday', '重读闭音节，双写末尾辅音字母加 -ed'],
  ['skip', 'skipped', 'lunch before the exam', 'last Friday', '重读闭音节，双写末尾辅音字母加 -ed'],
  ['commit', 'committed', 'more time to revision', 'last term', '重读闭音节，双写末尾辅音字母加 -ed'],
  ['regret', 'regretted', 'wasting so much time online', 'last summer', '重读闭音节，双写末尾辅音字母加 -ed'],
  ['refer', 'referred', 'to three online sources', 'last week', '重读闭音节，双写末尾辅音字母加 -ed'],
  ['submit', 'submitted', 'the project before the deadline', 'yesterday', '重读闭音节，双写末尾辅音字母加 -ed'],
  ['wrap', 'wrapped', 'the gifts for the festival', 'last Sunday', '重读闭音节，双写末尾辅音字母加 -ed'],
  ['control', 'controlled', 'our screen time', 'last month', '重读闭音节，双写末尾辅音字母加 -ed']
  ];
  const regularPast = rows => rows.map(([v, past, o, time]) =>
    f(`We ___ (${v}) ${o} ${time}.`, past, `规则动词过去式：${v} → ${past}。`));

const IRREG_PAST = [
  ['go', 'went', 'to a boarding school', 'last year'],
  ['see', 'saw', 'a documentary about fast fashion', 'last weekend'],
  ['take', 'took', 'public transport to school', 'yesterday'],
  ['give', 'gave', 'a talk about online safety', 'last week'],
  ['write', 'wrote', 'an essay about globalisation', 'last month'],
  ['choose', 'chose', 'geography as an elective', 'last term'],
  ['find', 'found', 'useful advice about stress', 'last week'],
  ['keep', 'kept', 'a diary during the exchange', 'last year'],
  ['understand', 'understood', 'the danger of misinformation', 'after the talk'],
  ['spend', 'spent', 'two hours in the museum', 'last Sunday']
  ];
  const irregPastList = () => IRREG_PAST.map(([v, past, o, time]) =>
    f(`He ___ (${v}) ${o} ${time}.`, past, `不规则动词过去式：${v} → ${past}。`));
  const irregPastNeg = () => IRREG_PAST.map(([v, past, o, time]) =>
    f(`She ___ (not ${v}) ${o} ${time}.`, `didn't ${v}|did not ${v}`, `一般过去时否定：didn't + 动词原形 ${v}（不能用