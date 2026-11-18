/* قاعدة أسئلة ليفو. التعبيرات: happy excited surprised angry sad thinking confused shy
   أنواع الأزرار: wa (واتساب) link (رابط) go (تمرير لقسم) ask (سؤال آخر) */
(function(){
var L=[];
function M(acts){return (acts||[]).map(function(a){return{k:a[0],t:{ar:a[1],en:a[2]},v:a[3]}})}
function E(id,face,qa,qe,aa,ae,kw,acts){L.push({id:id,face:face,q:{ar:qa,en:qe},a:{ar:aa,en:ae},kw:kw.split('|'),acts:M(acts)})}
var WA=[['wa','واتساب','WhatsApp','مرحباً، بدي أتواصل معكم بخصوص لايفكس']];
var DECK=['wa','اطلب ملف العرض','Request the deck','مرحباً، بدي أطلب ملف العرض (Deck) الخاص بلايفكس'];
var CALL=['wa','احجز مكالمة','Book a call','مرحباً، بدي أحجز مكالمة للتعرف على لايفكس وفرص التعاون'];

E('about','happy','ما هي لايفكس؟','What is LAYVEX?',
'لايفكس منظومة تقنية أردنية ناشئة. بنبني منتجات رقمية للجميع: للطلاب، وللمجتمع، وللمتاجر. وكل مشروع بيبدأ بفكرة بسيطة وبيكبر بالتجربة وملاحظات الناس.',
'LAYVEX is an emerging Jordanian tech ecosystem. We build digital products for everyone: students, the community and shops. Each project starts with a simple idea and grows through real use and feedback.',
'ما هي لايفكس|شو هي لايفكس|شو لايفكس|عن لايفكس|تعريف|نبذة|مين انتو|مين انتم|what is layvex|about layvex|about|who are you guys',[['go','عن لايفكس','About LAYVEX','about']]);
E('founder','excited','مين اللي أسس لايفكس؟','Who founded LAYVEX?',
'لؤي عياصرة، المؤسس والمطوّر الوحيد للايفكس. طالب نظم معلومات إدارية بجامعة البلقاء التطبيقية (المركز - السلط).',
'Loay Ayasrah, the sole founder and developer of LAYVEX. He is a Management Information Systems student at Al-Balqa Applied University (Main Campus, Salt).',
'مين اسس|مين المؤسس|مين اللي عمل|مين عمل|مين صمم|مين برمج|مين بني|who designed|who coded|who programmed|مؤسس|صاحب لايفكس|مين صاحب|مين عمل|لؤي|المطور|founder|who founded|who made|who built|creator|loay',[['go','المؤسس','The founder','founder']]);
E('vision','thinking','شو رؤية لايفكس ورسالتها؟','What is LAYVEX vision and mission?',
'رؤيتنا: منظومة تقنية أردنية تخدم الجميع، الطلاب والأفراد والمتاجر. ورسالتنا: نبني منتجات رقمية عملية وسهلة الاستخدام، ونطوّرها خطوة بخطوة حسب احتياج الناس.',
'Our vision: a Jordanian tech ecosystem that serves everyone, students, individuals and shops. Our mission: we build practical, easy-to-use digital products and develop them step by step around the needs of people.',
'رؤية|رؤيتكم|رسالة|رسالتكم|هدفكم|شو هدف|vision|mission|goal|purpose',[]);
E('livo','shy','مين ليفو؟','Who is Livo?',
'أنا ليفو، المساعد الرسمي والوجه الرقمي للايفكس! بجاوبك عن لايفكس ومشاريعها، وإذا السؤال برا معلوماتي بوجّهك تحكي مع الفريق مباشرة.',
'I am Livo, the official assistant and digital face of LAYVEX! I answer your questions about LAYVEX and its projects, and if a question is outside what I know I will point you to the team directly.',
'مين ليفو|مين انت|مين إنت|شو اسمك|تعرف عن حالك|عرف عن حالك|livo|who are you|your name|introduce',[]);
E('levelup','excited','شو يعني LEVEL UP؟','What does LEVEL UP mean?',
'هاد شعارنا: نطوّر أنفسنا ومنتجاتنا ومجتمعنا مستوى بعد مستوى. جرّب لعبة "تحدي LEVEL UP" بالموقع وشوف!',
'This is our slogan: we grow ourselves, our products and our community level by level. Try the LEVEL UP Challenge game on the site and see!',
'level up|ليفل اب|ليفل|شعار|slogan|meaning',[['go','العب الآن','Play now','game']]);

E('projects','excited','شو مشاريع لايفكس؟','What are LAYVEX projects?',
'عندنا أربع مشاريع: سوقنا، دورنا، عالمنا، ووصلنا. بدك أحكيلك عن أي واحد؟',
'We have four projects: Sooqna, Dawrna, Alamna and Wassalna. Which one would you like to hear about?',
'مشاريع|مشاريعكم|شو عندكم|منتجات|خدمات|projects|products|services|what do you have',
[['ask','سوقنا','Sooqna','sooqna'],['ask','دورنا','Dawrna','dawrna'],['ask','عالمنا','Alamna','alamna'],['ask','وصلنا','Wassalna','wassalna']]);
E('available','happy','أي مشروع متاح هلا؟','Which project is available now?',
'سوقنا ودورنا متاحين هلا. عالمنا نسخة تجريبية (DEMO)، ووصلنا لسا فكرة قيد التخطيط.',
'Sooqna and Dawrna are available now. Alamna is a demo version, and Wassalna is still an idea in planning.',
'متاح|متاحة|شغال|شغالة|جاهز|available|live|ready|working',[['go','خارطة الطريق','Roadmap','roadmap']]);
E('sooqna','happy','شو هو سوقنا؟','What is Sooqna?',
'منصة لتبادل وبيع الأغراض بين طلاب الجامعات بالأردن. فيها استثمار ومشاريع ناشئة، تبرعات، تبرع بالدم، وسوق ذكي بيفاوض عنك وبيعطيك أفضل ٣ عروض قريبة من نيتك.',
'A platform for swapping and selling items among university students in Jordan. It includes investment and startups, donations, blood donation, and a smart market that negotiates for you and shows your best 3 nearby offers.',
'سوقنا|سوق|بيع|تبادل|تبرع|تبرع بالدم|sooqna|souqna|market|barter|donation|blood',[['link','افتح سوقنا','Open Sooqna','https://sooqna.onrender.com']]);
E('dawrna','excited','شو هي دورنا؟','What is Dawrna?',
'منصة ذكية لإدارة الحجوزات وتنظيم الأدوار للصالونات والجيمات والخدمات المحلية. عند الحلاقين بتختار الحلاق اللي بدك إياه وبتحجز دورك رقمياً. وبالجيمات الاشتراك رقمي بدل الورقي، والجيم بيشوف مشتركيه وكم باقي من مدة اشتراكهم. وللمتجر لوحة تحكم كاملة وإشعارات تلقائية للزبائن وتحديد المواقع عبر الخرائط، مع خصومات وعروض حصرية من شبكة لايفكس. ولسا شغالين على أنواع متاجر أكثر.',
'A smart platform for managing bookings and organizing queues for salons, gyms and local services. At barbers you pick the barber you want and book your turn digitally. At gyms, subscriptions are digital instead of paper, and the gym sees its members and how much time each has left. Shops get a full dashboard, automatic customer notifications and map-based locations, with exclusive discounts and offers from the LAYVEX network. We are working on more types of shops.',
'دورنا|حجز|حجوزات|دور|ادوار|حلاق|صالون|جيم|نادي|اشتراك|dawrna|booking|queue|barber|salon|gym|appointment|discount|خصم|عروض',[['link','افتح دورنا','Open Dawrna','https://dawrna.onrender.com']]);
E('alamna','thinking','شو هو عالمنا؟','What is Alamna?',
'مجتمع افتراضي بيجمع مستخدمين حقيقيين مع شخصيات ذكاء اصطناعي، لكل شخصية طبع وهوايات واهتمامات، وبتتفاعل مع الترندات الحقيقية. للترفيه ولفهم كيف بتنتشر الإشاعات والذباب الإلكتروني. نسخة تجريبية لسا بتتطور.',
'A virtual community that brings real users together with AI personas, each with its own temperament, hobbies and interests, reacting to real trends. For entertainment and for understanding how rumors and online trolls spread. A demo version that is still developing.',
'عالمنا|مجتمع افتراضي|سوشال|شخصيات|ذكاء اصطناعي|ترند|alamna|alamuna|social|community|personas|trends',[['link','جرّب عالمنا','Try Alamna','https://alamna.onrender.com/']]);
E('wassalna','shy','شو هو وصلنا؟','What is Wassalna?',
'فكرة قيد التخطيط، مش قيد التطوير لسا. تطبيق بيربط طلاب الجامعات بالسائقين لمشاوير الجامعة. وبتقدر تسجّل اهتمامك على واتساب.',
'An idea in planning, not in development yet. An app that connects university students with drivers for campus rides. You can register your interest on WhatsApp.',
'وصلنا|مشاوير|مشوار|سواق|سائق|توصيل|مواصلات|wassalna|rides|ride|driver|transport|carpool',[['wa','سجّل اهتمامك','Register interest','مرحباً، بدي أسجل اهتمامي بتطبيق وصلنا']]);

E('contact','happy','كيف أتواصل مع لايفكس؟','How do I contact LAYVEX?',
'أسرع طريقة واتساب، احكينا هناك. وكمان على انستغرام: layvex_jo للايفكس، وsooqna_jo لسوقنا.',
'The fastest way is WhatsApp, talk to us there. Also on Instagram: layvex_jo for LAYVEX and sooqna_jo for Sooqna.',
'تواصل|اتواصل|رقم|واتساب|واتس|انستغرام|انستا|ايميل|اتصل|contact|whatsapp|instagram|reach|email|phone|call you',
[['wa','واتساب','WhatsApp','مرحباً، بدي أتواصل معكم بخصوص لايفكس'],['link','انستغرام لايفكس','LAYVEX Instagram','https://www.instagram.com/layvex_jo'],['link','انستغرام سوقنا','Sooqna Instagram','https://www.instagram.com/sooqna_jo']]);
E('partner','excited','كيف بقدر أصير شريك؟','How can I become a partner?',
'عندك فكرة أو بتحب تشاركنا أو تنضم لفريقنا؟ احكينا على واتساب ونتفاهم.',
'Have an idea, want to partner or join our team? Message us on WhatsApp and we will talk.',
'شريك|شراكة|اشارك|تعاون|انضم|فريق|توظيف|partner|partnership|join|team|collaborate|cooperate|hiring',[['wa','واتساب','WhatsApp','مرحباً، بدي أستفسر عن الشراكة أو الانضمام لفريق لايفكس']]);
E('investor','excited','أنا مستثمر، كيف أعرف أكثر؟','I am an investor, how do I learn more?',
'أهلاً فيك! إحنا بنبحث عن مستثمر بيؤمن بالفكرة. بتقدر تطلب ملف العرض أو تحجز مكالمة، وبقسم "للمستثمرين والحاضنات" بالموقع بتشوف المشكلة والحل وما أنجزناه.',
'Welcome! We are looking for an investor who believes in the idea. You can request the pitch deck or book a call, and in the "For investors and incubators" section of the site you can see the problem, the solution and what we have achieved.',
'مستثمر|استثمار|استثمر|تمويل|ممول|investor|investment|invest|funding|fund',[DECK,CALL,['go','قسم المستثمرين','Investors section','invest']]);
E('incubator','thinking','أنا من حاضنة أعمال، بتتعاملوا مع حاضنات؟','I am from an incubator, do you work with incubators?',
'أكيد! إحنا بنبحث عن حاضنة أعمال تحتضن مشاريعنا. اطلب ملف العرض أو احجز مكالمة وبنحكي.',
'Of course! We are looking for a business incubator to host our projects. Request the deck or book a call and we will talk.',
'حاضنة|حاضنات|احتضان|مسرعة|incubator|incubation|accelerator',[DECK,CALL]);
E('deck','thinking','وين بنزّل ملف العرض؟','Where can I get the pitch deck?',
'بتقدر تطلبه على واتساب وبينبعتلك.',
'You can request it on WhatsApp and it will be sent to you.',
'ملف العرض|ملف|عرض تقديمي|بيتش|pitch|deck|presentation|pdf',[DECK]);
E('partners','happy','مين شركاؤكم؟','Who are your partners?',
'من شركائنا "بصمة أخصائي": تطوّع لؤي عياصرة - لايفكس لإنشاء منصة إلكترونية لأعضاء وفريق بصمة أخصائي.',
'Among our partners is "Basmat Akhsai": Loay Ayasrah - LAYVEX volunteered to build an online platform for the members and team of Basmat Akhsai.',
'شركاء|شركاؤكم|شركاءكم|بصمة|اخصائي|basmat|akhsai|partners',[['link','بصمة أخصائي','Basmat Akhsai','https://basmat-akhsai.onrender.com']]);

E('site','happy','شو في بالموقع؟','What is on the site?',
'عن لايفكس، رؤيتنا ورسالتنا، مشاريعنا، خارطة الطريق، تحدي LEVEL UP، مبادرة مجتمعنا، شركاؤنا، المؤسس، قسم المستثمرين، الفعاليات، وصندوق الأفكار.',
'About LAYVEX, our vision and mission, our projects, the roadmap, the LEVEL UP Challenge, the Community initiative, our partners, the founder, the investors section, events and the ideas box.',
'الموقع|بالموقع|كيف استخدم|كيف ادخل|اقسام|محتوى|site|website|how to use|sections|content|navigate',
[['go','المشاريع','Projects','projects'],['go','الشركاء','Partners','partners'],['go','المؤسس','Founder','founder']]);
E('lang','happy','كيف أحوّل الموقع للإنجليزي؟','How do I switch the site to English?',
'اضغط زر EN فوق على الشمال، وبيتحوّل الموقع كله. وبترجع للعربي بزر "عربي".',
'Press the EN button at the top left and the whole site switches. You can go back with the "عربي" button.',
'انجليزي|إنجليزي|انجليزية|لغة|ترجمة|english|language|translate|arabic',[]);
E('game','excited','كيف ألعب تحدي LEVEL UP؟','How do I play the LEVEL UP Challenge?',
'اضغط "ابدأ"، وكل ما ظهرت كرة مضيئة اضغط عليها قبل ما تختفي. كل ١٠ كرات بتطلع مستوى وبتصير اللعبة أسرع!',
'Press "Start", and whenever a glowing orb appears tap it before it vanishes. Every 10 orbs you level up and the game gets faster!',
'لعبة|العب|تحدي|كرات|game|play|challenge|orbs',[['go','روح للعبة','Go to the game','game']]);
E('share','happy','كيف أشارك الموقع؟','How do I share the site?',
'بزر "شارك الموقع" بآخر الصفحة. بيفتح خيارات المشاركة بجهازك، أو بينسخ الرابط لو جهازك ما بيدعمها.',
'With the "Share this site" button at the bottom of the page. It opens your device share options, or copies the link if your device does not support them.',
'شارك|مشاركة|انسخ الرابط|رابط|share|link|copy',[]);
E('ideas','excited','عندي فكرة أو نصيحة، وين بكتبها؟','I have an idea or advice, where do I write it?',
'بقسم "شاركنا فكرتك أو نصيحتك": اختار نوعها (نصيحة أو فكرة أو اقتراح)، اكتبها واضغط أرسل، وبتوصلنا مباشرة على واتساب.',
'In the "Share your idea or advice" section: choose its type (advice, idea or suggestion), write it and press Send, and it reaches us directly on WhatsApp.',
'فكرة|نصيحة|اقتراح|ملاحظة|رأي|idea|advice|suggestion|feedback|tip',[['go','صندوق الأفكار','Ideas box','ideas']]);
E('privacy','shy','بتخزّنوا محادثتي معك؟','Do you store my chat with you?',
'لا، محادثتنا بتضل بمتصفحك بس، وإحنا ما بنخزّنها.',
'No, our chat stays in your browser only and we do not store it.',
'تخزن|تخزنوا|خصوصية|امان|أمان|بياناتي|محادثتي|privacy|store|data|safe|secure|save',[]);

E('initiative','excited','شو هي مبادرة مجتمعنا؟','What is the Community initiative?',
'مبادرة لمشروعي سوقنا ووصلنا، مقدّمة إلى جائزة الحسين بن عبدالله الثاني للعمل التطوعي. هدفها تسهيل حياة الطالب بأدوات رقمية قريبة منه، وشعارها: معاً نبني فرصاً.. ونصنع مستقبلاً.',
'An initiative for my projects Sooqna and Wassalna, submitted to the Hussein bin Abdullah II Award for Voluntary Work. It aims to make student life easier with digital tools close to them, and its slogan is: Together we build opportunities and shape the future.',
'مبادرة|مجتمعنا|جائزة|تطوع|initiative|award|volunteer|community initiative',[['go','قسم المبادرة','Initiative section','initiative']]);
E('umbrella','happy','تحت مظلة مين المبادرة؟','Under whose umbrella is the initiative?',
'تحت مظلة عمادة شؤون الطلبة بجامعة البلقاء التطبيقية.',
'Under the umbrella of the Deanship of Student Affairs at Al-Balqa Applied University.',
'مظلة|عمادة|جامعة|البلقاء|شؤون الطلبة|deanship|university|balqa|umbrella',[]);
E('events','excited','في فعاليات قادمة؟','Are there upcoming events?',
'لسا ما في فعالية معلنة، بس الفعالية القادمة قريباً! سجّل اهتمامك على واتساب وبتكون من أول من يعرف.',
'There is no announced event yet, but the next event is coming soon! Register your interest on WhatsApp and be the first to know.',
'فعالية|فعاليات|ورشة|ورش|لقاء|event|events|workshop|meetup',[['wa','سجّل اهتمامك','Register interest','مرحباً، بدي أكون من أول من يعرف عن فعاليات لايفكس']]);
E('host','excited','بدي أستضيف فعالية معكم','I want to host an event with you',
'حلو! احكينا على واتساب وخبّرنا عن فكرتك.',
'Great! Message us on WhatsApp and tell us about your idea.',
'استضيف|استضافة|اعمل فعالية|فعالية معكم|host|hosting|organize an event',[['wa','استضف فعالية','Host an event','مرحباً، عندي فكرة فعالية وبدي أستضيفها مع لايفكس']]);
E('isai','shy','هل إنت ذكاء اصطناعي؟','Are you artificial intelligence?',
'لا، أنا مساعد رقمي بجاوب بأجوبة جاهزة عن لايفكس. وإذا سؤالك برا اللي عندي، بوجّهك للفريق مباشرة.',
'No, I am a digital assistant that answers with ready answers about LAYVEX. If your question is outside what I have, I will point you to the team directly.',
'ذكاء اصطناعي|ذكاء|بوت|روبوت|انسان|إنسان|حقيقي|ai|artificial|bot|robot|real person|human|chatgpt',[]);

/* ردود خاصة */
function S(id,face,aa,ae,kw){L.push({id:id,face:face,small:1,a:{ar:aa,en:ae},kw:kw.split('|'),acts:[]})}
S('hi','happy','هلا والله! كيف بقدر أساعدك؟','Hello there! How can I help you?','مرحبا|مرحبا|هلا|اهلا|أهلا|السلام عليكم|سلام|صباح الخير|مساء الخير|hi|hello|hey|salam|good morning|good evening');
S('thanks','shy','العفو! أي وقت.','You are welcome! Anytime.','شكرا|شكراً|يعطيك العافية|مشكور|thanks|thank you|thx');
S('bye','happy','الله يسلمك! نورتنا.','Take care! Thanks for visiting.','مع السلامة|باي|يلا باي|الله يسلمك|bye|goodbye|see you');

window.LIVO_FAQ={
 wa:'962771587863',
 faces:['happy','excited','surprised','angry','sad','thinking','confused','shy'],
 welcome:{face:'happy',a:{ar:'هلا فيك بلايفكس! 👋 أنا ليفو. اختار سؤال من تحت، أو اكتب سؤالك.',en:'Welcome to LAYVEX! 👋 I am Livo. Pick a question below or type your own.'}},
 fallback:{face:'confused',a:{ar:'همم، ما فهمت قصدك. جرّب واحد من الأسئلة اللي تحت، أو احكي مع الفريق مباشرة على واتساب.',en:'Hmm, I did not get what you mean. Try one of the questions below, or talk to the team directly on WhatsApp.'},
  acts:M([['wa','واتساب','WhatsApp','مرحباً، عندي سؤال لليفو ما قدر يجاوبه']])},
 cats:[
  {t:{ar:'عن لايفكس',en:'About LAYVEX'},ids:['about','founder','vision','livo','levelup']},
  {t:{ar:'المشاريع',en:'Projects'},ids:['projects','available','sooqna','dawrna','alamna','wassalna']},
  {t:{ar:'تواصل وشراكات',en:'Contact and partners'},ids:['contact','partner','investor','incubator','deck','partners']},
  {t:{ar:'الموقع',en:'The site'},ids:['site','lang','game','share','ideas','privacy']},
  {t:{ar:'المبادرة والفعاليات',en:'Initiative and events'},ids:['initiative','umbrella','events','host','isai']}
 ],
 entries:L
};
})();
