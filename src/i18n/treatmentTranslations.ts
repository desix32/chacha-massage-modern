import type { SupportedLanguage } from './types';

export interface TreatmentTranslation {
  name: string;
  tag?: string;
  shortDescription: string;
}

export const TREATMENT_TRANSLATIONS: Record<string, Record<SupportedLanguage, TreatmentTranslation>> = {
  "thai-traditional": {
    en: {
      name: "Traditional Royal Thai Massage",
      tag: "Signature",
      shortDescription: "Ancient rhythmic acupressure & passive yogic stretching along energy lines to restore vitality."
    },
    th: {
      name: "นวดแผนไทยโบราณราชสำนัก",
      tag: "แนะนำยอดนิยม",
      shortDescription: "นวดกดจุดตามเส้นประธานสิบ ผสานการดัดยืดสไตล์โยคะเพื่อคืนความยืดหยุ่นและผ่อนคลายกล้ามเนื้อ"
    },
    ja: {
      name: "伝統的なタイ古式マッサージ",
      tag: "当店一番人気",
      shortDescription: "エネルギーライン（セン）に沿った指圧と優しいヨガストレッチで、全身の疲労とコリをほぐします。"
    },
    zh: {
      name: "传统正宗皇家泰式按摩",
      tag: "招牌推荐",
      shortDescription: "传承百年卧佛寺古法经络穴位推拿与被动瑜伽拉伸，快速缓解全身紧绷与酸痛。"
    },
    ko: {
      name: "전통 로열 타이 마사지",
      tag: "시그니처 코스",
      shortDescription: "에너지 라인을 따라 정성스러운 지압과 부드러운 요가 스트레칭으로 신체의 균형과 활력을 되찾아드립니다."
    },
    hi: {
      name: "पारंपरिक रॉयल थाई मालिश",
      tag: "सर्वाधिक लोकप्रिय",
      shortDescription: "प्राचीन थाई एक्यूप्रेशर और स्ट्रेचिंग द्वारा मांसपेशियों के तनाव और थकान को दूर करें।"
    },
    ta: {
      name: "பாரம்பரிய தாய் மசாஜ்",
      tag: "பிரபலமானது",
      shortDescription: "பாரம்பரிய தாய் அக்குபிரஷர் மற்றும் யோகா அசைவுகள் மூலம் உடல் வலிகளை போக்கும் சிகிச்சை."
    },
    ar: {
      name: "المساج التايلاندي الملكي التقليدي",
      tag: "الأكثر طلباً",
      shortDescription: "مساج تايلاندي أصيل بالضغط على نقاط الطاقة وتمديد العضلات لاستعادة النشاط والحيوية."
    },
    ru: {
      name: "Традиционный королевский тайский массаж",
      tag: "Хит салона",
      shortDescription: "Древняя техника точечного массажа и мягкой йога-растяжки по энергетическим линиям тела."
    },
    de: {
      name: "Traditionelle königliche Thai-Massage",
      tag: "Beliebtester Klassiker",
      shortDescription: "Rhythmische Druckpunktmassage und sanfte Dehnungen zur Wiederherstellung des energetischen Gleichgewichts."
    },
    fr: {
      name: "Massage thaïlandais royal traditionnel",
      tag: "Soin Signature",
      shortDescription: "Acupression rythmée et étirements yogiques passifs le long des lignes d'énergie pour dénouer les tensions."
    }
  },

  "foot-reflexology": {
    en: {
      name: "Revitalizing Foot Reflexology",
      tag: "Best Value",
      shortDescription: "Targeted reflex zone stimulation along the soles and calves for full-body relief."
    },
    th: {
      name: "นวดกดจุดสะท้อนฝ่าเท้า",
      tag: "คุ้มค่าที่สุด",
      shortDescription: "นวดกดจุดกระตุ้นฝ่าเท้าและน่อง บรรเทาความเมื่อยล้าจากการเดินและช่วยกระตุ้นการทำงานของอวัยวะภายใน"
    },
    ja: {
      name: "足つぼリフレクソロジー",
      tag: "歩き疲れに最適",
      shortDescription: "足裏の反射区とふくらはぎを丁寧に刺激。バンコク観光やショッピングの疲れを瞬時に癒やします。"
    },
    zh: {
      name: "活力足底经络反射按摩",
      tag: "超值体验",
      shortDescription: "精准刺激足底反射区与小腿肌肉，消除旅途奔波疲惫，促进全身血液循环与内脏排毒。"
    },
    ko: {
      name: "활력 발 반사요법 마사지",
      tag: "가성비 최고",
      shortDescription: "발바닥과 종아리의 반사 구역을 섬세하게 자극하여 여행 중 지친 다리의 피로를 상쾌하게 풀어줍니다."
    },
    hi: {
      name: "रिफ्लेक्सोलॉजी फुट मसाज",
      tag: "सर्वश्रेष्ठ मूल्य",
      shortDescription: "पैरों और पिंडलियों के एक्यूप्रेशर बिंदुओं पर मालिश कर पूरे शरीर को तुरंत आराम पहुंचाएं।"
    },
    ta: {
      name: "பாத அக்குபிரஷர் மசாஜ்",
      tag: "சிறந்த தேர்வு",
      shortDescription: "பாதங்கள் மற்றும் கால்களுக்கு சிறந்த அக்குபிரஷர் சிகிச்சை மூலம் புத்துணர்ச்சி அளிக்கிறது."
    },
    ar: {
      name: "مساج رفلكسولوجي للقدمين",
      tag: "القيمة الأفضل",
      shortDescription: "تحفيز نقاط باطن القدمين والساقين للتخلص من إرهاق المشي وتنشيط الدورة الدموية."
    },
    ru: {
      name: "Рефлекторный массаж стоп",
      tag: "Снятие усталости",
      shortDescription: "Глубокая проработка рефлекторных зон стоп и икр, дарящая легкость после долгих прогулок."
    },
    de: {
      name: "Vitalisierende Fußreflexzonenmassage",
      tag: "Top Preis-Leistung",
      shortDescription: "Gezielte Druckpunktbehandlung an Fußsohlen und Waden für ganzheitliche Erholung."
    },
    fr: {
      name: "Réflexologie plantaire revitalisante",
      tag: "Idéal après la marche",
      shortDescription: "Stimulation ciblée des zones réflexes de la voûte plantaire et des mollets pour un soulagement immédiat."
    }
  },

  "head-shoulder-back": {
    en: {
      name: "Head, Shoulder & Back Tension Relief",
      tag: "Office Relief",
      shortDescription: "Concentrated upper-body acupressure targeting tech-neck, migraines, and tight traps."
    },
    th: {
      name: "นวดคอ บ่า ไหล่ และหลัง คลายความเมื่อยล้า",
      tag: "ขวัญใจคนทำงาน",
      shortDescription: "เน้นเฉพาะจุดสำหรับอาการออฟฟิศซินโดรม บรรเทาอาการตึงคอ สะบัก บ่า และอาการปวดศีรษะ"
    },
    ja: {
      name: "頭・首・肩・背中 集中指圧マッサージ",
      tag: "デスクワーク解消",
      shortDescription: "スマホ首やデスクワークによる肩こり、頭痛を解消する上半身集中の本格指圧トリートメント。"
    },
    zh: {
      name: "头颈肩背深度减压推拿",
      tag: "告别办公病",
      shortDescription: "专为低头族与办公白领设计，重点击溃斜方肌、肩胛骨与后脑紧绷酸痛，消除偏头痛。"
    },
    ko: {
      name: "목·어깨·등 집중 릴리프 마사지",
      tag: "직장인 추천",
      shortDescription: "스마트폰과 업무로 뭉친 승모근, 목, 어깨 결림을 집중적으로 풀어주는 상체 전용 지압 요법."
    },
    hi: {
      name: "सिर, गर्दन और पीठ तनाव मुक्ति मालिश",
      tag: "डेस्क थकान निवारक",
      shortDescription: "कंप्यूटर व फोन के इस्तेमाल से गर्दन व कंधों में होने वाले जकड़न को तुरंत दूर करें।"
    },
    ta: {
      name: "தலை, தோள்பட்டை மற்றும் முதுகு மசாஜ்",
      tag: "வேலைப்பளு நீக்கும்",
      shortDescription: "கழுத்து மற்றும் தோள்பட்டை பிடிப்புகளை போக்கும் பிரத்யேக சிகிச்சை."
    },
    ar: {
      name: "مساج الرأس والكتفين والظهر",
      tag: "لإزالة التشنجات",
      shortDescription: "تركيز عميق على عضلات الرقبة والأكتاف وأعلى الظهر للتخلص من الصداع وتيبس الجلوس الطويل."
    },
    ru: {
      name: "Массаж головы, шеи, плеч и спины",
      tag: "Против стресса",
      shortDescription: "Интенсивная проработка воротниковой зоны и верхней части спины для снятия спазмов и головной боли."
    },
    de: {
      name: "Kopf-, Schulter- & Rückenmassage",
      tag: "Büro-Entspannung",
      shortDescription: "Fokussierte Tiefenmassage gegen Nackenverspannungen, Bildschirmmüdigkeit und Spannungskopfschmerzen."
    },
    fr: {
      name: "Massage ciblé tête, nuque et dos",
      tag: "Anti-stress",
      shortDescription: "Soin intense pour dénouer les trapèzes raides, la nuque bloquée et soulager les céphalées de tension."
    }
  },

  "oil-massage": {
    en: {
      name: "Therapeutic Oil Massage",
      tag: "Popular",
      shortDescription: "Deep gliding strokes with warm botanical oils targeting muscle knots and fatigue."
    },
    th: {
      name: "นวดน้ำมันคลายเส้นเพื่อสุขภาพ",
      tag: "ยอดนิยม",
      shortDescription: "การผสมผสานระหว่างการนวดรีดเส้นและน้ำมันธรรมชาติ ช่วยคลายกล้ามเนื้อชั้นลึกอย่างนุ่มนวล"
    },
    ja: {
      name: "セラピー・オイルマッサージ",
      tag: "人気コース",
      shortDescription: "温かい植物オイルを使用し、ロングストロークと心地よい圧で深層の筋肉のコリを滑らかにほぐします。"
    },
    zh: {
      name: "经典草本精油深层舒缓按摩",
      tag: "人气热选",
      shortDescription: "温热天然植物调和油配合深层推抚与按压手法，滋养肌肤的同时瓦解深层肌肉乳酸堆积。"
    },
    ko: {
      name: "테라피 오일 마사지",
      tag: "인기 프로그램",
      shortDescription: "따뜻한 보태니컬 오일과 부드럽고 깊은 스트로크로 근육 속 뭉침을 시원하게 이완시켜줍니다."
    },
    hi: {
      name: "चिकित्सीय तेल मालिश",
      tag: "लोकप्रिय",
      shortDescription: "गर्म प्राकृतिक तेलों के साथ मांसपेशियों की गहरी मालिश, जो थकान को तुरंत मिटाती है।"
    },
    ta: {
      name: "மருத்துவ எண்ணெய் மசாஜ்",
      tag: "பிரபலமானது",
      shortDescription: "வெதுவெதுப்பான இயற்கை எண்ணெய்களுடன் கூடிய ஆழமான தசை மசாஜ்."
    },
    ar: {
      name: "مساج الزيوت العلاجية الدافئة",
      tag: "شائع جداً",
      shortDescription: "حركات تدليك انسيابية عميقة بالزيوت النباتية الدافئة لتفكيك العقد العضلية والتخلص من الإجهاد."
    },
    ru: {
      name: "Терапевтический масляный массаж",
      tag: "Популярный",
      shortDescription: "Глубокие скользящие движения с теплым маслом, эффективно снимающие мышечные зажимы."
    },
    de: {
      name: "Therapeutische Ölmassage",
      tag: "Sehr beliebt",
      shortDescription: "Fließende, tiefenwirksame Streichungen mit warmen Ölen zur Lösung hartnäckiger Muskelblockaden."
    },
    fr: {
      name: "Massage thérapeutique aux huiles",
      tag: "Populaire",
      shortDescription: "Mouvements fluides et profonds aux huiles végétales tièdes pour dissoudre les nœuds musculaires."
    }
  },

  "aroma-massage": {
    en: {
      name: "Pure Botanical Aroma Massage",
      tag: "Relaxing",
      shortDescription: "Gentle sensory relaxation infused with pure natural lavender and lemongrass extracts."
    },
    th: {
      name: "นวดน้ำมันอโรมาเธอราพีบริสุทธิ์",
      tag: "ผ่อนคลายลึก",
      shortDescription: "กลิ่นหอมระเหยจากลาเวนเดอร์และตะไคร้หอมธรรมชาติ ช่วยปลอบประโลมระบบประสาทและทำให้นอนหลับสบาย"
    },
    ja: {
      name: "ピュア・アロマテラピーマッサージ",
      tag: "極上の癒やし",
      shortDescription: "ラベンダーやレモングラスの天然精油を使用。心地よい香りに包まれ、精神的なストレスを優しく解放します。"
    },
    zh: {
      name: "纯萃植物香薰芳疗SPA",
      tag: "静心安神",
      shortDescription: "甄选纯天然薰衣草与柠檬草精油，轻柔淋巴排毒手法抚平焦虑，深层改善失眠与疲倦。"
    },
    ko: {
      name: "순수 보태니컬 아로마 마사지",
      tag: "심신 힐링",
      shortDescription: "천연 라벤더와 레몬그라스 에센셜 오일의 향기로 신경계를 진정시키고 깊은 숙면을 유도합니다."
    },
    hi: {
      name: "प्योर एरोमाथेरेपी मालिश",
      tag: "मानसिक शांति",
      shortDescription: "लैवेंडर और लेमनग्रास के सुगंधित प्राकृतिक तेलों से मन और मस्तिष्क को गहरा सुकून दें।"
    },
    ta: {
      name: "அரோமாதெரபி நறுமண மசாஜ்",
      tag: "மன அமைதி",
      shortDescription: "நறுமண மூலிகை எண்ணெய்கள் மூலம் மன அழுத்தத்தை குறைக்கும் மென்மையான மசாஜ்."
    },
    ar: {
      name: "مساج الأروماثيرابي بالزيوت العطرية",
      tag: "استرخاء فاخر",
      shortDescription: "تدليك ناعم مهدئ بمستخلصات اللافندر وعشب الليمون لتهدئة الأعصاب والنوم العميق الهانئ."
    },
    ru: {
      name: "Аромамассаж с натуральными маслами",
      tag: "Полный релакс",
      shortDescription: "Нежный массаж с эфирными маслами лаванды и лемонграсса для гармонизации нервной системы."
    },
    de: {
      name: "Reine botanische Aromamassage",
      tag: "Tiefenentspannung",
      shortDescription: "Sanfte schwedische Massage mit Bio-Lavendel und Zitronengras für inneren Seelenfrieden."
    },
    fr: {
      name: "Massage aromathérapie aux essences botaniques",
      tag: "Détente sensorielle",
      shortDescription: "Effleurages doux aux huiles de lavande et citronnelle pour apaiser l'esprit et retrouver le sommeil."
    }
  },

  "coconut-oil-massage": {
    en: {
      name: "Cold-Pressed Coconut Oil Massage",
      tag: "Skin Nourishing",
      shortDescription: "100% virgin tropical coconut oil therapy for intense skin hydration and gentle relaxation."
    },
    th: {
      name: "นวดน้ำมันมะพร้าวสกัดเย็นธรรมชาติ",
      tag: "บำรุงผิวล้ำลึก",
      shortDescription: "น้ำมันมะพร้าวบริสุทธิ์เกรดพรีเมียม อุดมด้วยวิตามินอี ช่วยฟื้นฟูผิวแห้งกร้านจากการโดนแดดให้กลับมาเนียนนุ่ม"
    },
    ja: {
      name: "ココナッツオイルマッサージ",
      tag: "美肌・保湿",
      shortDescription: "タイ産100%天然ヴァージンココナッツオイルを使用。日焼け後の肌をしっとりと保湿し、南国の香りで癒やします。"
    },
    zh: {
      name: "冷榨纯椰子油滋养按摩",
      tag: "深层美肤",
      shortDescription: "采用泰国高品质初榨冷榨椰子油，富含天然抗氧化剂与维生素E，晒后修复与滋润嫩肤首选。"
    },
    ko: {
      name: "콜드프레스 코코넛 오일 마사지",
      tag: "피부 보습",
      shortDescription: "100% 천연 엑스트라 버진 코코넛 오일로 건조하고 햇빛에 지친 피부에 풍부한 수분과 영양을 공급합니다."
    },
    hi: {
      name: "कोल्ड-प्रेस्ड नारियल तेल मालिश",
      tag: "त्वचा पोषण",
      shortDescription: "शुद्ध नारियल तेल द्वारा त्वचा को नमी और प्राकृतिक चमक प्रदान करने वाली सुकूनभरी मालिश।"
    },
    ta: {
      name: "தேங்காய் எண்ணெய் ஊட்டச்சத்து மசாஜ்",
      tag: "தோல் பராமரிப்பு",
      shortDescription: "இயற்கை தேங்காய் எண்ணெய் மூலம் சருமத்திற்கு ஈரப்பதம் மற்றும் பொலிவு தரும் சிகிச்சை."
    },
    ar: {
      name: "مساج زيت جوز الهند الطبيعي البكر",
      tag: "ترطيب للبشرة",
      shortDescription: "علاج بزيت جوز الهند العضوي النقي لترطيب البشرة بعمق وتغذيتها بعد التعرض للشمس."
    },
    ru: {
      name: "Массаж с кокосовым маслом холодного отжима",
      tag: "Питание кожи",
      shortDescription: "100% натуральное кокосовое масло глубоко увлажняет кожу, делая ее бархатистой и сияющей."
    },
    de: {
      name: "Kaltgepresste Kokosöl-Massage",
      tag: "Intensive Hautpflege",
      shortDescription: "Natives Bio-Kokosöl nährt sonnenbeanspruchte Haut intensiv und verleiht einen zarten Tropenduft."
    },
    fr: {
      name: "Massage à l'huile de coco vierge",
      tag: "Hydratation intense",
      shortDescription: "Huile de coco pressée à froid gorgée de vitamine E pour régénérer la peau après le soleil."
    }
  },

  "lotion-massage": {
    en: {
      name: "Silky Botanical Lotion Massage",
      tag: "Light & Fresh",
      shortDescription: "Smooth, non-greasy moisturizing massage with delicate botanical lotions."
    },
    th: {
      name: "นวดโลชั่นบำรุงผิวเนียนนุ่ม",
      tag: "ซึมไว ไม่เหนอะหนะ",
      shortDescription: "สัมผัสความชุ่มชื้นแบบไม่เหนียวเหนอะหนะด้วยโลชั่นสูตรสมุนไพรธรรมชาติ เหมาะสำหรับผู้ที่ไม่ชอบความมันของน้ำมัน"
    },
    ja: {
      name: "シルキー・ボタニカルローションマッサージ",
      tag: "ベタつかない保湿",
      shortDescription: "オイルのベタつきが苦手な方に。さらりとした保湿ローションが肌に素早く浸透し、しっとり爽やかに整えます。"
    },
    zh: {
      name: "丝滑草本植萃乳液按摩",
      tag: "清爽滋润",
      shortDescription: "适合不喜油腻肤感的宾客。轻盈细腻的天然草本润肤乳快速渗透角质层，令肌肤水润清爽。"
    },
    ko: {
      name: "실키 보태니컬 로션 마사지",
      tag: "산뜻한 보습",
      shortDescription: "오일 특유의 끈적임 없이 산뜻하게 흡수되는 보태니컬 로션으로 부드럽고 매끄러운 피부를 선사합니다."
    },
    hi: {
      name: "सिल्की बॉडी लोशन मालिश",
      tag: "हल्का व ताजा",
      shortDescription: "बिना चिपचिपाहट के त्वचा को कोमल और तरोताजा रखने वाली सुगंधित लोशन मालिश।"
    },
    ta: {
      name: "லோஷன் மென்மை மசாஜ்",
      tag: "புத்துணர்ச்சி",
      shortDescription: "பிசுபிசுப்பு இல்லாத மூலிகை லோஷன் மூலம் சருமத்தை மென்மையாக்கும் மசாஜ்."
    },
    ar: {
      name: "مساج باللوشن المرطب المنعش",
      tag: "غير دهني",
      shortDescription: "تدليك ناعم بلوشن نباتي سريع الامتصاص، مثالي لمن يفضلون ترطيباً خفيفاً غير دهني."
    },
    ru: {
      name: "Массаж с шелковистым лосьоном",
      tag: "Без липкости",
      shortDescription: "Легкий нежирный лосьон быстро впитывается, увлажняя кожу и оставляя ощущение свежести."
    },
    de: {
      name: "Seidige Pflege-Lotionmassage",
      tag: "Leicht & Erfrischend",
      shortDescription: "Nicht fettende, tiefenwirksame Feuchtigkeitspflege für alle, die eine leichtere Textur als Öl bevorzugen."
    },
    fr: {
      name: "Massage à la lotion soyeuse hydratante",
      tag: "Texture légère",
      shortDescription: "Massage fluide et non gras avec une lotion délicate pour une peau douce sans effet collant."
    }
  },

  "hot-oil-massage": {
    en: {
      name: "Deep Restorative Hot Oil Massage",
      tag: "Deep Heat Therapy",
      shortDescription: "Therapeutic warm heated essential oils penetrating deep into tired muscles."
    },
    th: {
      name: "นวดน้ำมันร้อนเพื่อการฟื้นฟูล้ำลึก",
      tag: "บำบัดด้วยความร้อน",
      shortDescription: "น้ำมันอุ่นๆ ช่วยขยายหลอดเลือดและส่งผ่านความร้อนลึกถึงชั้นกล้ามเนื้อ บรรเทาอาการเมื่อยล้าเรื้อรังได้อย่างดีเยี่ยม"
    },
    ja: {
      name: "極上ホットオイルマッサージ",
      tag: "温熱深層セラピー",
      shortDescription: "心地よく温めた特製アロマオイルを贅沢に使用。熱の力で血行を促し、頑固な筋肉のコリを芯から溶かします。"
    },
    zh: {
      name: "温感热精油深层经络调理",
      tag: "温阳排湿",
      shortDescription: "温热精油缓缓流淌并渗入肌理，配合渗透性推拿手法扩张毛细血管，快速驱散体内湿寒与僵硬。"
    },
    ko: {
      name: "딥 핫 오일 테라피 마사지",
      tag: "온열 딥티슈",
      shortDescription: "따뜻하게 데운 에센셜 오일이 근육 깊숙이 온기를 전달하여 만성 피로와 뭉친 근육을 부드럽게 녹여줍니다."
    },
    hi: {
      name: "गर्म तेल उपचारात्मक मालिश",
      tag: "गहरी गर्मी थेरेपी",
      shortDescription: "गर्म तेल की गर्माहट मांसपेशियों में गहराई तक जाकर पुराने दर्द और अकड़न को तुरंत समाप्त करती है।"
    },
    ta: {
      name: "சூடான எண்ணெய் ஆழ்ந்த மசாஜ்",
      tag: "வெப்ப சிகிச்சை",
      shortDescription: "சூடான மூலிகை எண்ணெய் கொண்டு தசை இறுக்கங்களை போக்கும் ஆழமான சிகிச்சை."
    },
    ar: {
      name: "مساج الزيت الساخن المهدئ للأعصاب",
      tag: "حرارة علاجية",
      shortDescription: "زيوت عطرية ساخنة تتغلغل في أنسجة العضلات المتعبة لإذابة التشنجات ومنح راحة فائقة."
    },
    ru: {
      name: "Глубокий массаж с горячим маслом",
      tag: "Тепловая терапия",
      shortDescription: "Теплое масло глубоко согревает мышцы, улучшает кровообращение и снимает хроническое напряжение."
    },
    de: {
      name: "Wärmende Hot-Oil-Massage",
      tag: "Tiefenwärme",
      shortDescription: "Angewärmte Öle dringen tief in die Muskulatur ein und lösen auch tief sitzende chronische Verspannungen."
    },
    fr: {
      name: "Massage réparateur à l'huile chaude",
      tag: "Chaleur thérapeutique",
      shortDescription: "L'huile chaude pénètre au cœur des fibres musculaires pour dénouer les tensions les plus tenaces."
    }
  },

  "thai-hot-herbal-bag": {
    en: {
      name: "Thai Hot Herbal Compress (Luk Pra Kob)",
      tag: "Traditional Remedy",
      shortDescription: "Steamed organic herbal pouches pressed into tired muscles to relieve aches and inflammation."
    },
    th: {
      name: "นวดประคบสมุนไพรไทยสด (ลูกประคบ)",
      tag: "ภูมิปัญญาไทยแท้",
      shortDescription: "ลูกประคบผ้าฝ้ายนึ่งร้อน บรรจุสมุนไพรสด เช่น ไพล ขมิ้น ตะไคร้ การบูร ช่วยลดการอักเสบและคลายกล้ามเนื้อ"
    },
    ja: {
      name: "タイ伝統生ハーブボール温熱療法",
      tag: "伝統ハーブ療法",
      shortDescription: "蒸したてのハーブボール（プライ、レモングラス、ウコン等）を体にリズミカルに押し当て、炎症や痛みを鎮めます。"
    },
    zh: {
      name: "泰式古法热蒸草药球按压护理",
      tag: "宫廷草本古方",
      shortDescription: "将新鲜蒸热的棉布草药球（含生姜、姜黄、柠檬草、樟脑等）循经络热敷按压，消炎祛痛、通经活络。"
    },
    ko: {
      name: "타이 핫 허브볼 테라피 (룩프라콥)",
      tag: "전통 약초 요법",
      shortDescription: "스팀으로 쪄낸 천연 허브볼(레몬그라스, 울금, 플라이)을 혈자리에 꾹꾹 눌러 염증과 근육통을 완화합니다."
    },
    hi: {
      name: "थाई गर्म हर्बल बैग मालिश (पोटली)",
      tag: "पारंपरिक जड़ी-बूटी",
      shortDescription: "गर्म भाप से तैयार हर्बल पोटली से सिकाई कर शरीर के दर्द व सूजन को दूर करने वाली प्राचीन थाई विधि।"
    },
    ta: {
      name: "தாய் மூலிகை பொட்டல சிகிச்சை",
      tag: "பாரம்பரிய முறை",
      shortDescription: "சூடான மூலிகை பொட்டலங்கள் மூலம் உடலின் வீக்கம் மற்றும் வலிகளை குறைக்கும் சிகிச்சை."
    },
    ar: {
      name: "المساج بالكمادات العشبية التايلاندية (لوك برا كوب)",
      tag: "علاج تقليدي ملكي",
      shortDescription: "كمادات قطنية ساخنة محشوة بالأعشاب الطازجة لتسكين آلام المفاصل وإزالة الالتهابات العضلية."
    },
    ru: {
      name: "Тайский массаж горячими травяными мешочками",
      tag: "Древний рецепт",
      shortDescription: "Распаренные полотняные мешочки с лечебными травами прижимаются к биологически активным точкам тела."
    },
    de: {
      name: "Traditionelle Kräuterstempelmassage (Luk Pra Kob)",
      tag: "Königliche Heilkunst",
      shortDescription: "Gedämpfte Leinenbeutel mit frischem Ingwer, Zitronengras und Kurkuma lindern Schmerzen und Entzündungen."
    },
    fr: {
      name: "Massage thaï traditionnel aux pochons d'herbes",
      tag: "Remède ancestral",
      shortDescription: "Pochons de coton chauds remplis d'herbes médicinales pour soulager les courbatures et drainer le corps."
    }
  },

  "hot-oil-herbal-bag": {
    en: {
      name: "Hot Oil & Herbal Compress Ritual",
      tag: "Master Specialty",
      shortDescription: "The ultimate therapeutic fusion: warm botanical oils followed by steamed herbal compresses."
    },
    th: {
      name: "นวดน้ำมันร้อนผสานลูกประคบสมุนไพร",
      tag: "ศาสตร์ขั้นสูง",
      shortDescription: "การผสมผสานขั้นสุดยอดระหว่างนวดน้ำมันอุ่นคลายเส้นลึก และการประคบสมุนไพรร้อนเพื่อการฟื้นฟูร่างกายแบบองค์รวม"
    },
    ja: {
      name: "ホットオイル＆ハーブボール贅沢コース",
      tag: "至高の極上ケア",
      shortDescription: "温かいアロマオイルトリートメントと伝統ハーブボールの相乗効果で、心身を究極のリラクゼーションへと導きます。"
    },
    zh: {
      name: "温热精油与热蒸草药球双重至尊理疗",
      tag: "大师级疗愈",
      shortDescription: "强强联手的奢华水疗：先以温热植物精油推通全身结节，再以热蒸草药球深层温灸经络，效果倍增。"
    },
    ko: {
      name: "핫 오일 & 허브볼 시그니처 리추얼",
      tag: "마스터 스페셜",
      shortDescription: "따뜻한 보태니컬 오일 마사지와 김이 모락모락 나는 약초 허브볼의 완벽한 조화로 완성되는 프리미엄 케어."
    },
    hi: {
      name: "गर्म तेल व हर्बल पोटली संगम",
      tag: "सर्वोच्च थेरेपी",
      shortDescription: "गर्म तेल मालिश और हर्बल पोटली का सबसे शक्तिशाली संयोजन, जो शरीर को पूरी तरह नया जीवन देता है।"
    },
    ta: {
      name: "சூடான எண்ணெய் & மூலிகை சிறப்பு சிகிச்சை",
      tag: "முழுமையான நலம்",
      shortDescription: "சூடான எண்ணெய் மற்றும் மூலிகை பொட்டலங்களின் இணைந்த அற்புதம்."
    },
    ar: {
      name: "جلسة الزيت الساخن والكمادات العشبية المزدوجة",
      tag: "العلاج الأرقى",
      shortDescription: "مزيج فاخر يجمع بين فوائد الزيوت الدافئة وتأثير الكمادات العشبية الساخنة لراحة مطلقة."
    },
    ru: {
      name: "Ритуал: горячее масло и травяные мешочки",
      tag: "Премиум уход",
      shortDescription: "Идеальное сочетание массажа с теплым маслом и прогревания горячими тайскими травами."
    },
    de: {
      name: "Kombination: Hot-Oil & Kräuterstempel-Ritual",
      tag: "Meister-Spezialität",
      shortDescription: "Die vollendete Kombination aus wärmender Tiefenölmassage und bedampften Kräuterstempeln."
    },
    fr: {
      name: "Rituel combiné huile chaude et pochons d'herbes",
      tag: "Soin d'exception",
      shortDescription: "La fusion parfaite de l'huile tiède décontractante et de la phytothérapie des pochons chauds."
    }
  },

  "body-scrub": {
    en: {
      name: "Organic Glow Body Scrub & Polish",
      tag: "Skin Renewal",
      shortDescription: "Gentle natural exfoliation with crushed jasmine rice and botanical nectar for luminous skin."
    },
    th: {
      name: "สครับและขัดผิวกายด้วยสารสกัดธรรมชาติ",
      tag: "ผลัดเซลล์ผิว",
      shortDescription: "ขัดผิวอย่างอ่อนโยนด้วยข้าวหอมมะลิบดละเอียดและน้ำผึ้งบริสุทธิ์ ขจัดเซลล์ผิวเก่า เผยผิวใหม่กระจ่างใสเนียนนุ่ม"
    },
    ja: {
      name: "オーガニックボディースクラブ＆ポリッシュ",
      tag: "つるつる美肌",
      shortDescription: "天然ジャスミンライスと植物ネクターの天然スクラブで古い角質を優しく除去。シルクのような透明肌へ導きます。"
    },
    zh: {
      name: "天然有机茉莉米浆全身温和去角质",
      tag: "透亮嫩肤",
      shortDescription: "细腻天然茉莉香米微粒与植物凝萃轻柔褪去暗沉老化角质，促进肌肤新生，重现丝滑光泽。"
    },
    ko: {
      name: "오가닉 글로우 바디 스크럽 & 폴리시",
      tag: "각질 케어",
      shortDescription: "천연 재스민 쌀가루와 식물성 넥타로 자극 없이 묵은 각질을 정돈하여 매끄럽고 윤기 나는 피부로 가꿔줍니다."
    },
    hi: {
      name: "ऑर्गेनिक बॉडी स्क्रब व त्वचा पॉलिश",
      tag: "चमकदार त्वचा",
      shortDescription: "प्राकृतिक घटकों द्वारा मृत त्वचा को हटाकर शरीर को रेशमी चमक और कोमलता प्रदान करें।"
    },
    ta: {
      name: "இயற்கை உடல் ஸ்க்ரப் & பளபளப்பு",
      tag: "சருமப் பொலிவு",
      shortDescription: "இயற்கை பொருட்கள் மூலம் சருமத்தை பளபளப்பாக மாற்றும் உடல் ஸ்க்ரப்."
    },
    ar: {
      name: "تقشير وتلميع الجسم بالمكونات العضوية",
      tag: "نضارة البشرة",
      shortDescription: "تقشير طبيعي لطيف بحبيبات أرز الياسمين وخلاصات الزهور للتخلص من الجلد الميت واستعادة نضارة البشرة."
    },
    ru: {
      name: "Органический скраб и пилинг для тела",
      tag: "Сияние кожи",
      shortDescription: "Мягкое отшелушивание с рисовой пудрой и цветочными нектарами делает кожу невероятно гладкой."
    },
    de: {
      name: "Organisches Körperpeeling & Pflege",
      tag: "Samtweiche Haut",
      shortDescription: "Sanfte Exfoliation mit gemahlenem Jasminreis und pflanzlicher Pflege für ein strahlendes Hautbild."
    },
    fr: {
      name: "Gommage corporel bio éclat & douceur",
      tag: "Peau neuve",
      shortDescription: "Exfoliation naturelle au riz jasmin pour éliminer les cellules mortes et sublimer l'éclat de la peau."
    }
  },

  "zen-harmony-package": {
    en: {
      name: "Siam Zen Complete Harmony Package",
      tag: "Top Rated Package",
      shortDescription: "Our signature head-to-toe ritual: 60m Thai or Foot + 60m Warm Oil + Herbal Tea."
    },
    th: {
      name: "แพ็กเกจสยามเซน คอมพลีท ฮาร์โมนี",
      tag: "แพ็กเกจยอดนิยม",
      shortDescription: "การดูแลครบวงจร 2 ชม.: นวดไทยหรือฝ่าเท้า 60 นาที + นวดน้ำมันอุ่น 60 นาที พร้อมชงชาสมุนไพรต้อนรับ"
    },
    ja: {
      name: "サイアム・ゼン 至高のハーモニーパッケージ",
      tag: "至福の2時間",
      shortDescription: "全身を癒やす贅沢な2時間コース：タイ古式または足つぼ60分＋温オイル60分＋ウェルカム特製ハーブティー。"
    },
    zh: {
      name: "暹罗禅意至臻身心和合尊享套餐",
      tag: "好评榜TOP 1",
      shortDescription: "2小时全方位平衡：60分钟泰式古法或足底推拿 + 60分钟温热草本精油护理 + 赠送养生香兰草本茶。"
    },
    ko: {
      name: "시암 젠 컴플리트 하모니 스페셜 패키지",
      tag: "만족도 1위",
      shortDescription: "머리부터 발끝까지 2시간 풀코스: 타이 또는 발 마사지 60분 + 웜 오일 테라피 60분 + 유기농 허브티 세트."
    },
    hi: {
      name: "सियाम ज़ेन संपूर्ण सामंजस्य पैकेज",
      tag: "सर्वश्रेष्ठ पैकेज",
      shortDescription: "2 घंटे का संपूर्ण स्पा अनुभव: 60 मिनट थाई या फुट + 60 मिनट वॉर्म ऑयल मालिश + पारंपरिक हर्बल चाय।"
    },
    ta: {
      name: "சியாம் ஜென் முழுமையான ஸ்பா தொகுப்பு",
      tag: "சிறந்த தொகுப்பு",
      shortDescription: "2 மணி நேர முழுமையான சிகிச்சை: 60 நிமிடம் தாய்/கால் மசாஜ் + 60 நிமிடம் எண்ணெய் மசாஜ் + மூலிகை தேநீர்."
    },
    ar: {
      name: "باقة سيام زن المتكاملة للاسترخاء التام",
      tag: "الباقة الأكثر تقييماً",
      shortDescription: "ساعتان من الدلال الشامل: 60 دقيقة تايلاندي أو قدمين + 60 دقيقة زيت دافئ + شاي أعشاب ضيافة مجاني."
    },
    ru: {
      name: "Спа-пакет «Гармония Сиама»",
      tag: "Выбор гостей",
      shortDescription: "2 часа абсолютного блаженства: 60 мин тайский или стопы + 60 мин теплое масло + органический чай."
    },
    de: {
      name: "Siam Zen Complete Harmony Verwöhnpaket",
      tag: "Bestes Gesamtpaket",
      shortDescription: "2 Stunden Wohlfühlzeit: 60 Min. Thai oder Fuß + 60 Min. Warmölmassage + biologischer Willkommenstee."
    },
    fr: {
      name: "Forfait complet Harmonie Siam Zen",
      tag: "Forfait d'exception",
      shortDescription: "2 heures de pur bien-être : 60 min Thaï ou pieds + 60 min huile tiède + dégustation de thé bio."
    }
  },
  "office-syndrome-ritual": {
    en: {
      name: "Office Syndrome Recovery Ritual",
      tag: "Locals & Expats Favorite",
      shortDescription: "Targeted upper back, neck, shoulders & cranial acupressure with warm herbal plai balm to cure screen fatigue."
    },
    th: {
      name: "คอร์สบำบัดออฟฟิศซินโดรม",
      tag: "ยอดนิยมสำหรับคนทำงาน",
      shortDescription: "นวดเน้นคอบ่าไหล่ สะบัก และหลังส่วนบน ผสานยาหม่องไพลร้อนสมุนไพร เพื่อคลายพังผืดและแก้ปวดเกร็งจากการทำงาน"
    },
    ja: {
      name: "オフィスシンドローム改善コース",
      tag: "デスクワーク・在住者に人気",
      shortDescription: "長時間のPC作業による首・肩のコリ、肩甲骨、背中を集中的にほぐし、温かいプライ（タイハーブ）バームで深部まで緩めます。"
    },
    zh: {
      name: "办公室久坐综合症缓解套餐",
      tag: "上班族与长居首选",
      shortDescription: "针对久坐与手机低头族，深度按压肩颈、肩胛骨与上背经络，配合温热泰式草本膏快速化解僵硬结节。"
    },
    ko: {
      name: "오피스 신드롬 집중 케어 코스",
      tag: "직장인 추천 코스",
      shortDescription: "장시간 컴퓨터와 스마트폰으로 굳어진 목, 어깨, 승모근, 등을 집중 지압하고 따뜻한 타이 허브 밤으로 깊은 뭉침을 풀어드립니다."
    },
    hi: {
      name: "ऑफिस सिंड्रोम रिकवरी पैकेज",
      tag: "कार्यक्षेत्र पसंदीदा",
      shortDescription: "गर्दन, कंधों और पीठ के ऊपरी हिस्से के तनाव को दूर करने के लिए विशेष एक्यूप्रेशर और वॉर्म हर्बल बाम।"
    },
    ta: {
      name: "அலுவலக உடல் சோர்வு நீக்கும் சிகிச்சை",
      tag: "பணியாளர்கள் தேர்வு",
      shortDescription: "கழுத்து, தோள்பட்டை மற்றும் முதுகு வலிகளை நீக்கும் இலக்கு வைக்கப்பட்ட அக்குபிரஷர் மற்றும் மூலிகை சிகிச்சை."
    },
    ar: {
      name: "جلسة علاج متلازمة العمل المكتبي والرقبة",
      tag: "المفضل للمقيمين",
      shortDescription: "تدليك مركز للرقبة والأكتاف وأعلى الظهر مع مرهم الأعشاب الدافئ لتخفيف إجهاد الجلوس الطويل والكمبيوتر."
    },
    ru: {
      name: "Программа «Анти-офисный синдром»",
      tag: "Выбор для сидячей работы",
      shortDescription: "Глубокая проработка шеи, плеч, лопаток и верхней части спины с согревающим тайским травяным бальзамом."
    },
    de: {
      name: "Office-Syndrom Entspannungsritual",
      tag: "Ideal bei Bildschirmarbeit",
      shortDescription: "Gezielte Akupressur für Nacken, Schultern und oberen Rücken mit wärmendem thailändischem Kräuterbalsam."
    },
    fr: {
      name: "Rituel Anti-Syndrome du Bureau",
      tag: "Idéal Télétravail & Bureau",
      shortDescription: "Soulagement ciblé de la nuque, des épaules et du haut du dos avec baume tiède aux herbes thaïlandaises."
    }
  },
  "jetlag-recovery-combo": {
    en: {
      name: "Jet-Lag & Flight Recovery Combo",
      tag: "Traveler's Choice",
      shortDescription: "60m Revitalizing Foot Reflexology + 60m Deep Tissue Aroma Oil for arriving travelers."
    },
    th: {
      name: "แพ็กเกจฟื้นฟูหลังเดินทางไกล (Jet-Lag)",
      tag: "ยอดนิยมสำหรับนักท่องเที่ยว",
      shortDescription: "นวดเท้าผ่อนคลาย 60 นาที + นวดน้ำมันอโรมาผ่อนคลายกล้ามเนื้อ 60 นาที เพื่อระบายความล้าและฟื้นฟูระบบการไหลเวียนหลังบิน"
    },
    ja: {
      name: "時差ボケ＆フライトリカバリーコンボ",
      tag: "旅行者人気No.1",
      shortDescription: "フライト後のむくみを解消する足つぼ60分＋全身を包み込むアロマオイル60分で、旅の疲れをリセットします。"
    },
    zh: {
      name: "长途飞行与时差恢复黄金套餐",
      tag: "游客首选组合",
      shortDescription: "60分钟足底经络去水肿＋60分钟全身芳香精油深度放松，迅速消除飞机舟车劳顿，恢复活力。"
    },
    ko: {
      name: "시차 적응 & 장시간 비행 피로회복 콤보",
      tag: "여행자 필수 코스",
      shortDescription: "비행 후 다리 붓기를 빼주는 발 마사지 60분 + 전신 아로마 오일 60분으로 지친 몸을 완벽하게 재충전하세요."
    },
    hi: {
      name: "जेट-लैग और यात्रा थकान निवारक कॉम्बो",
      tag: "यात्रियों की पसंद",
      shortDescription: "लंबी उड़ानों के बाद 60 मिनट फुट रिफ्लेक्सोलॉजी + 60 मिनट डीप टिशू अरोमा ऑयल मालिश।"
    },
    ta: {
      name: "விமான பயண சோர்வு நீக்கும் காம்போ",
      tag: "பயணிகள் விருப்பம்",
      shortDescription: "60 நிமிடம் கால் மசாஜ் + 60 நிமிடம் அரோமா எண்ணெய் மசாஜ் மூலம் பயண சோர்வை போக்கும் சிறப்பு சிகிச்சை."
    },
    ar: {
      name: "باقة التعافي من السفر وإرهاق الطيران",
      tag: "خيار المسافرين الأول",
      shortDescription: "60 دقيقة تدليك وتنشيط القدمين + 60 دقيقة مساج بالزيوت العطرية للاسترخاء العميق بعد الرحلات الجوية."
    },
    ru: {
      name: "Пакет «Восстановление после перелета»",
      tag: "Идеально после дороги",
      shortDescription: "60 мин массажа уставших стоп + 60 мин расслабляющего арома-массажа для быстрого снятия джетлага."
    },
    de: {
      name: "Jetlag & Flug-Erholungs-Kombi",
      tag: "Empfehlung für Reisende",
      shortDescription: "60 Min. vitalisierende Fußreflexzonenmassage + 60 Min. Tiefen-Aromaölmassage nach Langstreckenflügen."
    },
    fr: {
      name: "Combo Récupération Post-Vol & Décalage Horaire",
      tag: "Le Choix des Voyageurs",
      shortDescription: "60 min de réflexologie plantaire + 60 min de massage aux huiles aromatiques pour récupérer du vol."
    }
  },
  "shoppers-revival-package": {
    en: {
      name: "Sukhumvit Shopper's Leg & Shoulder Revival",
      tag: "Post-Shopping Relief",
      shortDescription: "60m Foot Reflexology + 30m Head, Neck & Shoulders to melt walking fatigue."
    },
    th: {
      name: "แพ็กเกจคลายเมื่อยหลังช้อปปิ้ง",
      tag: "คลายเมื่อยขาก้าวเดิน",
      shortDescription: "นวดเท้าผ่อนคลาย 60 นาที + นวดคอบ่าไหล่ 30 นาที คลายกล้ามเนื้อขาที่เมื่อยล้าและไหล่ที่เกร็งจากการถือถุงช้อปปิ้ง"
    },
    ja: {
      name: "お買い物帰りの足＆肩リフレッシュコース",
      tag: "ショッピング後の癒し",
      shortDescription: "ターミナル21等で歩き疲れた足裏・ふくらはぎ60分＋荷物で凝った首・肩30分の即効リフレッシュ。"
    },
    zh: {
      name: "素坤逸购物暴走舒缓套餐",
      tag: "逛街购物必备",
      shortDescription: "60分钟足底和小腿排酸减压＋30分钟肩颈头部释压，专为商场购物暴走游客定制。"
    },
    ko: {
      name: "쇼핑 후 다리 & 어깨 힐링 패키지",
      tag: "쇼핑 후 필수 코스",
      shortDescription: "쇼핑몰을 걸어 지친 발과 종아리 60분 + 무거운 짐으로 뭉친 목과 어깨 30분 집중 릴랙스."
    },
    hi: {
      name: "शॉपिंग थकान निवारक लेग व शोल्डर पैकेज",
      tag: "शॉपिंग के बाद राहत",
      shortDescription: "पैदल चलने की थकान के लिए 60 मिनट फुट रिफ्लेक्सोलॉजी + 30 मिनट सिर, गर्दन और कंधे की मालिश।"
    },
    ta: {
      name: "ஷாப்பிங் சோர்வு நீக்கும் சிகிச்சை",
      tag: "ஷாப்பிங் பின் ஆசுவாசம்",
      shortDescription: "60 நிமிடம் கால் மசாஜ் + 30 நிமிடம் தலை, கழுத்து மற்றும் தோள்பட்டை மசாஜ்."
    },
    ar: {
      name: "باقة إنعاش القدمين والأكتاف بعد التسوق",
      tag: "راحة بعد التسوق",
      shortDescription: "60 دقيقة تدليك للقدمين المرهقتين من المشي + 30 دقيقة للرأس والرقبة والأكتاف المشدودة من حمل الأكياس."
    },
    ru: {
      name: "Экспресс-восстановление после шопинга",
      tag: "После долгих прогулок",
      shortDescription: "60 мин массажа уставших ног + 30 мин проработки плеч и шеи после походов по торговым центрам Бангкока."
    },
    de: {
      name: "Shopper's Erholungs-Paket für Beine & Schultern",
      tag: "Nach dem Einkaufsbummel",
      shortDescription: "60 Min. Fußreflexzonenmassage + 30 Min. Nacken- & Schultermassage nach dem Shoppingtag."
    },
    fr: {
      name: "Revitalisation Après-Shopping Jambes & Épaules",
      tag: "Soulagement Après-Shopping",
      shortDescription: "60 min de réflexologie plantaire + 30 min tête, nuque et épaules pour effacer la fatigue de la marche."
    }
  }
};
