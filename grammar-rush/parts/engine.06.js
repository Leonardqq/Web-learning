wer students would complain about stress.', 'were', '虚拟语气中 be 动词用 were。'],
  ['If English ___ less dominant, more students would learn another language.', 'were', '虚拟语气中 be 动词用 were。']
  ];
  const subWere = () => SUB_WERE.map(([sentence, a, e]) => f(sentence, a, e));

const SUB_PAST = [
  ['If the school had marked our essays sooner, we ___ (receive) useful feedback.', 'would have received', '与过去事实相反：if + had done，主句 would have + 过去分词。'],
  ['If I had told my parents the truth, they ___ (understand) my decision.', 'would have understood', '与过去事实相反。'],
  ['If she had checked the source, she ___ (not share) that false report.', 'wouldn\'t have shared', '与过去事实相反，否定用 wouldn\'t have + 过去分词。'],
  ['If the council had built more cycle lanes, fewer commuters ___ (drive) to work.', 'would have driven', '与过去事实相反。'],
  ['If the university had offered more scholarships, more students ___ (apply) from abroad.', 'would have applied', '与过去事实相反。'],
  ['If the lecture had been recorded, more students ___ (be) able to watch it.', 'would have been', '与过去事实相反，be 动词用 would have been。'],
  ['If he had read the privacy policy, he ___ (not post) his personal details.', 'wouldn\'t have posted', '与过去事实相反，否定形式。'],
  ['If the museum had charged less, more families ___ (visit) the exhibition.', 'would have visited', '与过去事实相反。'],
  ['If they had taken that online course, they ___ (learn) to code much sooner.', 'would have learned|would have learnt', '与过去事实相反。'],
  ['If the government had acted sooner, the city ___ (avoid) the worst of the flooding.', 'would have avoided', '与过去事实相反。']
  ];
  const subPast = () => SUB_PAST.map(([sentence, a, e]) => f(sentence, a, e));

const SUB_FUTURE = [
  ['If you ___ (fail) the entrance exam, what would you do next?', 'should fail|were to fail', '与将来事实相反：if 从句用 should/were to + 动词原形。'],
  ['If the network ___ (break) down during the test, we would lose our work.', 'should break|were to break', '与将来事实相反。'],
  ['If the council ___ (ban) cars from the centre, air quality would improve quickly.', 'should ban|were to ban', '与将来事实相反。'],
  ['If she ___ (speak) to her parents, they would understand her worries.', 'should speak|were to speak', '与将来事实相反。'],
  ['If the airline ___ (cut) its fares, more families would travel abroad.', 'should cut|were to cut', '与将来事实相反。'],
  ['If they ___ (not reply) by Friday, we would choose another supplier.', 'should not reply|were not to reply', '与将来事实相反，否定形式。'],
  ['If the festival ___ (move) to August, more tourists would attend it.', 'should move|were to move', '与将来事实相反。'],
  ['If the new algorithm ___ (make) mistakes, users would lose trust in it.', 'should make|were to make', '与将来事实相反。'],
  ['If he ___ (be) late for the interview again, he would lose his place.', 'should be|were to be', '与将来事实相反，be 动词用 should be/were to be。'],
  ['If I ___ (win) the scholarship, I would study environmental science.', 'should win|were to win', '与将来事实相反。']
  ];
  const subFuture = () => SUB_FUTURE.map(([sentence, a, e]) => f(sentence, a, e));

const SUB_WISH = [
  ['I wish I ___ (have) more time for my coursework.', 'had', 'wish 后与现在事实相反，用过去式。'],
  ['She wishes she ___ (can) study abroad next year.', 'could', 'wish 后与现在事实相反，can 用 could。'],
  ['I wish my younger brother ___ (stop) borrowing my laptop every evening.', 'would stop', 'wish 后表示将来愿望，用 would + 动词原形。'],
  ['He wishes he ___ (not spend) so much time on short videos last term.', 'hadn\'t spent', 'wish 后与过去事实相反，用 had + 过去分词。'],
  ['We wish we ___ (book) tickets for the exhibition earlier.', 'had booked', 'wish 后与过去事实相反。'],
  ['I wish I ___ (be) more confident in group discussions.', 'were', 'wish 后 be 动词用 were。'],
  ['She wishes she ___ (not buy) so many cheap clothes online.', 'hadn\'t bought', 'wish 后与过去事实相反。'],
  ['They wish they ___ (live) closer to the university campus.', 'lived', 'wish 后与现在事实相反，用过去式。'],
  ['I wish the government ___ (take) climate change more seriously.', 'would take', 'wish 后表示将来愿望，用 would + 动词原形。'],
  ['He wishes he ___ (talk) to a counsellor about his anxiety sooner.', 'had talked', 'wish 后与过去事实相反。']
  ];
  const subWish = () => SUB_WISH.map(([sentence, a, e]) => f(sentence, a, e));

const SUB_AS_IF = [
  ['He talks about coding as if he ___ (know) everything about it.', 'knew', 'as if 后与现在事实相反，用过去式。'],
  ['She looked as if she ___ (see) the exam results already.', 'had seen', 'as if 后与过去事实相反，用 had + 过去分词。'],
  ['It feels as if the summer ___ (be) longer than it used to be.', 'were', 'as if 后 be 动词用 were。'],
  ['He behaves as though he ___ (be) head of the whole department.', 'were', 'as though 后 be 动词用 were。'],
  ['The dancers moved as if they ___ (practise) that routine for months.', 'had practised', 'as if 后与过去事实相反，用 had + 过去分词。'],
  ['She sounded as if she ___ (be) under too much pressure at school.', 'were', 'as if 后 be 动词用 were。'],
  ['The old cinema looks as if nobody ___ (visit) it these days.', 'visited', 'as if 后与现在事实相反，用过去式。'],
  ['He carried on as if nothing ___ (happen) during the meeting.', 'had happened', 'as if 后与过去事实相反。'],
  ['It looks as if the council ___ (introduce) a congestion charge soon.', 'were going to introduce', 'as if 后与将来事实相反，用 were going to + 动词原形。'],
  ['She writes in English as if she ___ (be) a native speaker.', 'were', 'as if 后 be 动词用 were。']
  ];
  const subAsIf = () => SUB_AS_IF.map(([sentence, a, e]) => f(sentence, a, e));

const SUB_WOULD_RATHER = [
  ['I would rather you ___ (not spend) so long on your phone tonight.', 'didn\'t spend', 'would rather + 从句，与现在/将来相反用过去式。'],
  ['She would rather her son ___ (choose) a subject he really enjoys.', 'chose', 'would rather + 从句用过去式。'],
  ['I would rather we ___ (take) the train instead of flying.', 'took', 'would rather + 从句用过去式。'],
  ['They would rather we ___ (not share) their personal data online.', 'didn\'t share', 'would rather + 从句用过去式。'],
  ['He would rather his sister ___ (study) medicine in this country.', 'studied', 'would rather + 从句用过去式。'],
  ['I would rather my parents ___ (be) open about the family budget.', 'were', 'would rather + 从句，be 动词用 were。'],
  ['We would rather the meeting ___ (start) earlier on Friday.', 'started', 'would rather + 从句用过去式。'],
  ['She would rather I ___ (not call) her during revision week.', 'didn\'t call', 'would rather + 从句用过去式。'],
  ['I would rather he ___ (do) the research himself before the deadline.', 'did', 'would rather + 从句用过去式。'],
  ['They would rather the exhibition ___ (be) free for all students.', 'were', 'would rather + 从句，be 动词用 were。']
  ];
  const subWouldRather = () => SUB_WOULD_RATHER.map(([sentence, a, e]) => f(sentence, a, e));

const SUB_IT_TIME = [
  ['It\'s time we ___ (reduce) our screen time before bed.', 'reduced', 'It\'s time + 从句用过去式（或 should + 动词原形）。'],
  ['It\'s time you ___ (start) revising for the final assessment.', 'started', 'It\'s time + 从句用过去式。'],
  ['It\'s high time the school ___ (take) student mental health seriously.', 'took', 'It\'s high time + 从句用过去式。'],
  ['It\'s time she ___ (have) a proper break from revision.', 'had', 'It\'s time + 从句用过去式。'],
  ['It\'s time they ___ (protect) the old town\'s intangible heritage.', 'protected', 'It\'s time + 从句用过去式。'],
  ['It\'s time I ___ (apologise) to my sister for that argument.', 'apologised', 'It\'s time + 从句用过去式。'],
  ['It\'s high time the government ___ (stop) building new coal plants.', 'stopped', 'It\'s high time + 从句用过去式。'],
  ['It\'s time we ___ (make) a decision about next year\'s subjects.', 'made', 'It\'s time + 从句用过去式。'],
  ['It\'s time you ___ (tell) your parents how much pressure you feel.', 'told', 'It\'s time + 从句用过去式。'],
  ['It\'s time the company ___ (pay) its overseas suppliers fairly.', 'paid', 'It\'s time + 从句用过去式。']
  ];
  const subItTime = () => SUB_IT_TIME.map(([sentence, a, e]) => f(sentence, a, e));

const SUB_SUGGEST = [
  ['The careers adviser suggested that she ___ (apply) for a gap year programme.', 'apply|should apply', 'suggest + that 从句用 (should) + 动词原形。'],
  ['The head teacher insisted that every student ___ (attend) the safety talk.', 'attend|should attend', 'insist 表「坚持要求」时，that 从句用 (should) + 动词原形。'],
  ['Local residents demanded that the factory ___ (be) closed at once.', 'be|should be', 'demand + that 从句用 (should) + 动词原形。'],
  ['Our teacher requested that we ___ (check) every source before quoting it.', 'check|should check', 'request + that 从句用 (should) + 动词原形。'],
  ['It is important that newcomers ___ (feel) welcome in the local community.', 'feel|should feel', 'It is important that... 用 (should) + 动词原形。'],
  ['The report recommended that more money ___ (spend) on renewable energy.', 'be spent|should be spent', 'recommend + that 从句用 (should) + 动词原形。'],
  ['She proposed that the club ___ (hold) a small film festival in spring.', 'hold|should hold', 'propose + that 从句用 (should) + 动词原形。'],
  ['The doctor ordered that he ___ (reduce) his screen time before bed.', 'reduce|should reduce', 'order + that 从句用 (should) + 动词原形。'],
  ['It is necessary that the data ___ (be) stored safely.', 'be|should be', 'It is necessary that... 用 (should) + 动词原形。'],
  ['Campaigners urged that the council ___ (improve) public transport in rural areas.', 'improve|should improve', 'urge + that 从句用 (should) + 动词原形。']
  ];
  const subSuggest = () => SUB_SUGGEST.map(([sentence, a, e]) => f(sentence, a, e));

  /* ============================================================
     六、情态动词 Modal Verbs
     ============================================================ */
const CAN_ABILITY = [
  ['By the end of the course, I ___ write a full essay in English.', 'could', ['can', 'may', 'must'], '表示过去的能力用 could。'],
  ['Most teenagers ___ set up a new phone in a few minutes.', 'can', ['could', 'may', 'must'], '表示现在的能力用 can。'],
  ['My cousin ___ speak three languages, so she works as a translator.', 'can', ['could', 'may', 'must'], '表示能力用 can。'],
  ['The museum guide ___ describe every painting in the collection.', 'can', ['could', 'may', 'must'], '表示能力用 can。'],
  ['After six months of lessons, my brother ___ read simple stories now.', 'can', ['could', 'may', 'must'], '表示现在的能力用 can。'],
  ['When I was at boarding school, I ___ run five kilometres before breakfast.', 'could', ['can', 'may', 'must'], '表示过去的能力用 could。'],
  ['I ___ not join the online class yesterday because the network failed.', 'could', ['can', 'may', 'must'], '表示过去的不能，用 could not。'],
  ['___ she play the piano well enough for the school concert?', 'Can', ['Could', 'May', 'Must'], '询问现在的能力用 Can。'],
  ['Many students ___ not explain how a solar panel works.', 'can', ['could', 'may', 'must'], '表示现在的能力用 can。'],
  ['With clear goals, most students ___ manage their own study time.', 'can', ['could', 'may', 'must'], '表示能力/可能性用 can。']
  ];
  const canAbility = () => CAN_ABILITY.map(([sentence, a, d, e]) => q(sentence, a, d, e));

const CAN_PERMISSION = [
  ['___ I borrow your notes from the history lesson?', 'Can', ['Must', 'Should', 'Need'], '用 Can I...? 请求许可。'],
  ['You ___ use my laptop during the online quiz.', 'can', ['must', 'should', 'need'], '表示许可用 can。'],
  ['___ I take photographs inside the art gallery?', 'Could', ['Must', 'Should', 'Need'], 'Could I...? 是更礼貌的请求许可。'],
  ['Students ___ not use smartphones during the exam; it is a school rule.', 'can', ['should', 'need', 'will'], '表示不允许用 can not/can\'t。'],
  ['___ you help me carry these boxes to the library?', 'Could', ['Must', 'Should', 'May'], 'Could you...? 是礼貌请求。'],
  ['You ___ take a reusable bag from the shelf if you forgot yours.', 'can', ['must', 'should', 'need'], '表示许可用 can。'],
  ['___ I ask one more question about the project?', 'Could', ['Must', 'Should', 'Need'], 'Could I...? 礼貌请求许可。'],
  ['Visitors ___ not feed the animals in the zoo.', 'can', ['should', 'need', 'will'], '表示不允许用 can not。'],
  ['___ I join the online discussion in English?', 'Could', ['Must', 'Should', 'Need'], 'Could I...? 礼貌请求。'],
  ['You ___ take a short break if you feel tired.', 'can', ['must', 'should', 'need'], '表示许可用 can。']
  ];
  const canPermission = () => CAN_PERMISSION.map(([sentence, a, d, e]) => q(sentence, a, d, e));

const CAN_POSSIBILITY = [
  ['The exam ___ be moved to Monday; nothing is certain yet.', 'could', ['must', 'should', 'need'], '表示可能性用 could。'],
  ['A single video ___ reach millions of people within hours.', 'can', ['must', 'should', 'need'], '表示客观可能性用 can。'],
  ['The new law ___ reduce carbon emissions, but nobody is sure.', 'could', ['must', 'should', 'need'], '表示不太确定的可能性用 could。'],
  ['Too much screen time ___ affect the sleep of teenagers.', 'can', ['must', 'should', 'need'], '表示客观可能性用 can。'],
  ['The price of imported food ___ rise slightly after the new tax.', 'could', ['must', 'should', 'need'], '表示推测/可能性用 could。'],
  ['This painting ___ be a copy, but the museum is still checking.', 'could', ['must', 'should', 'need'], '表示可能性用 could。'],
  ['Online learning ___ save time for students who live far away.', 'can', ['must', 'should', 'need'], '表示客观可能性用 can。'],
  ['The message ___ have been sent by mistake; we are not sure.', 'could', ['must', 'should', 'need'], 'could have done 表示对过去的可能性推测。'],
  ['He ___ be worried about his results, though he hides it well.', 'could', ['must', 'should', 'need'], '表示可能性用 could。'],
  ['Plastic bags ___ harm ocean wildlife if they are not recycled.', 'can', ['must', 'should', 'need'], '表示客观可能性用 can。']
  ];
  const canPossibility = () => CAN_POSSIBILITY.map(([sentence, a, d, e]) => q(sentence, a, d, e));

const MAY_PERMISSION = [
  ['___ I leave the classroom for a moment?', 'May', ['Must', 'Should', 'Need'], 'May I...? 是正式地请求许可。'],
  ['You ___ use a dictionary during the translation test.', 'may', ['must', 'should', 'need'], '表示许可用 may。'],
  ['___ I use the school computer to check my email?', 'May', ['Must', 'Should', 'Need'], 'May I...? 请求许可。'],
  ['Visitors ___ not pick the flowers in the park.', 'may', ['should', 'need', 'will'], '表示不允许用 may not。'],
  ['___ we invite two exchange students to the meeting?', 'May', ['Must', 'Should', 'Need'], 'May we...? 请求许可。'],
  ['You ___ borrow up to three books from the library.', 'may', ['must', 'should', 'need'], '表示许可用 may。'],
  ['___ I sit here for the group discussion?', 'May', ['Must', 'Should', 'Need'], 'May I...? 请求许可。'],
  ['Visitors ___ not take photographs inside the museum.', 'may', ['should', 'need', 'will'], '表示不允许用 may not。'],
  ['You ___ ask the interviewer to repeat a question.', 'may', ['must', 'should', 'need'], '表示许可用 may。'],
  ['___ I close the window during the exam?', 'May', ['Must', 'Should', 'Need'], 'May I...? 请求许可。']
  ];
  const mayPermission = () => MAY_PERMISSION.map(([sentence, a, d, e]) => q(sentence, a, d, e));

const MAY_SPECULATION = [
  ['The head teacher ___ be in a meeting at the moment.', 'may', ['must', 'should', 'need'], 'may 表示“可能”，把握不大。'],
  ['It ___ rain later this evening, so take an umbrella.', 'may', ['must', 'should', 'need'], 'may 表示将来的可能性。'],
  ['He ___ not want to discuss his exam results yet.', 'may', ['must', 'should', 'need'], 'may not 表示“可能不”。'],
  ['The com