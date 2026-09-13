import type { SupportedLanguage } from './types';

export interface UIStrings {
  // Navigation
  nav_treatments: string;
  nav_locations: string;
  nav_heritage: string;
  nav_gallery: string;
  nav_reviews: string;
  nav_faq: string;
  nav_book: string;
  nav_whatsapp: string;

  // Hero Section
  hero_badge: string;
  hero_title_1: string;
  hero_title_2: string;
  hero_desc: string;
  hero_change_branch: string;
  hero_cta: string;
  hero_open_daily: string;

  // Trust badges
  trust_licensed: string;
  trust_hygiene: string;
  trust_bts: string;
  trust_experience: string;

  // Filter categories
  cat_all: string;
  cat_massage: string;
  cat_oil: string;
  cat_specialty: string;
  cat_packages: string;

  // Treatment card UI
  select_duration: string;
  price_for: string;
  mins: string;
  net_fees: string;
  book_session: string;
  view_details: string;
  benefits_title: string;

  // Branch picker
  branches_title: string;
  branches_subtitle: string;
  address_label: string;
  nearest_station: string;
  opening_hours: string;
  direct_phone: string;
  book_this_branch: string;
  get_directions: string;
  selected_badge: string;

  // Booking Modal
  booking_title: string;
  booking_subtitle: string;
  step_branch: string;
  step_therapy: string;
  step_duration: string;
  step_datetime: string;
  step_guests: string;
  step_pressure: string;
  pressure_soft: string;
  pressure_medium: string;
  pressure_strong: string;
  guest_1: string;
  guest_2: string;
  guest_group: string;
  whatsapp_confirm_btn: string;
  whatsapp_hint: string;

  // Mobile Action Dock
  dock_call: string;
  dock_whatsapp: string;
  dock_book: string;
  dock_switch_branch: string;

  // About Section
  about_tag: string;
  about_title: string;
  about_desc_1: string;
  about_desc_2: string;
}

export const UI_TRANSLATIONS: Record<SupportedLanguage, UIStrings> = {
  en: {
    nav_treatments: "Treatments & Pricing",
    nav_locations: "Locations",
    nav_heritage: "Our Heritage",
    nav_gallery: "Gallery",
    nav_reviews: "Reviews",
    nav_faq: "FAQ",
    nav_book: "Book Session",
    nav_whatsapp: "WhatsApp",

    hero_badge: "Authentic Thai Healing Since 2002 • 23 Years of Mastery",
    hero_title_1: "Rebalance Your Body.",
    hero_title_2: "Awaken Your Serenity.",
    hero_desc: "Escape Bangkok’s bustling energy. Experience authentic Royal Thai acupressure, restorative herbal heat therapies, and customized botanical oil treatments in our tranquil private sanctuaries.",
    hero_change_branch: "Change Branch ▾",
    hero_cta: "Book Your Sanctuary Session",
    hero_open_daily: "Open Daily 9:00 AM – Midnight",

    trust_licensed: "Licensed Master Therapists",
    trust_hygiene: "Sanitized Private Suites",
    trust_bts: "Steps from BTS Nana & Asok",
    trust_experience: "23+ Years of Heritage",

    cat_all: "All Therapies",
    cat_massage: "Thai & Reflexology",
    cat_oil: "Aromatherapy & Oils",
    cat_specialty: "Herbal & Heat",
    cat_packages: "Spa Packages",

    select_duration: "SELECT SESSION DURATION:",
    price_for: "PRICE FOR",
    mins: "Mins",
    net_fees: "Net / No Hidden Taxes or Fees",
    book_session: "Book Session",
    view_details: "Treatment Details",
    benefits_title: "Key Therapeutic Benefits:",

    branches_title: "Five Tranquil Sanctuaries in Sukhumvit",
    branches_subtitle: "Find your nearest sanctuary along the Sukhumvit corridor. Each branch features serene private suites, certified master therapists, and authentic herbal hospitality.",
    address_label: "ADDRESS:",
    nearest_station: "NEAREST STATION:",
    opening_hours: "OPENING HOURS:",
    direct_phone: "DIRECT PHONE:",
    book_this_branch: "Book This Branch",
    get_directions: "Map",
    selected_badge: "Active Selection",

    booking_title: "Reserve Your Sanctuary Session",
    booking_subtitle: "Instant booking dispatch directly to your branch concierge on WhatsApp.",
    step_branch: "1. Select Branch",
    step_therapy: "2. Choose Therapy",
    step_duration: "3. Preferred Duration",
    step_datetime: "4. Preferred Date & Time",
    step_guests: "5. Number of Guests",
    step_pressure: "6. Preferred Pressure",
    pressure_soft: "Soft & Relaxing",
    pressure_medium: "Medium / Balanced",
    pressure_strong: "Firm / Deep Tissue",
    guest_1: "1 Guest (Solo)",
    guest_2: "2 Guests (Couple)",
    guest_group: "3+ Guests (Group)",
    whatsapp_confirm_btn: "Confirm via WhatsApp",
    whatsapp_hint: "Connects directly to branch concierge • No upfront payment required",

    dock_call: "Call",
    dock_whatsapp: "WhatsApp",
    dock_book: "Book Now",
    dock_switch_branch: "(tap to switch)",

    about_tag: "Our Heritage & Craft",
    about_title: "23 Years of Authentic Healing Arts on Sukhumvit",
    about_desc_1: "Founded in 2002, Chacha Massage was born from a passion to preserve authentic Royal Thai healing traditions amidst Bangkok’s rapid modernization.",
    about_desc_2: "Every licensed therapist undergoes rigorous apprenticeships in Wat Pho energy lines (Sen), anatomy, and herbal blending."
  },

  th: {
    nav_treatments: "รายการนวดและราคา",
    nav_locations: "สาขาของเรา",
    nav_heritage: "ประวัติและความเป็นมา",
    nav_gallery: "ภาพบรรยากาศ",
    nav_reviews: "รีวิวลูกค้า",
    nav_faq: "คำถามที่พบบ่อย",
    nav_book: "จองเวลา",
    nav_whatsapp: "แชทไลน์/WhatsApp",

    hero_badge: "ศาสตร์การนวดไทยโบราณแท้ ตั้งแต่ปี 2545 • ประสบการณ์กว่า 23 ปี",
    hero_title_1: "ฟื้นฟูสมดุลร่างกาย.",
    hero_title_2: "สัมผัสความผ่อนคลายแท้จริง.",
    hero_desc: "หลีกหนีความวุ่นวายใจกลางกรุงเทพฯ สัมผัสประสบการณ์นวดแผนไทยราชสำนัก ประคบสมุนไพรร้อน และนวดน้ำมันหอมระเหยในห้องส่วนตัวอันเงียบสงบ",
    hero_change_branch: "เปลี่ยนสาขา ▾",
    hero_cta: "จองช่วงเวลาผ่อนคลายของคุณ",
    hero_open_daily: "เปิดบริการทุกวัน 9:00 - 24:00 น. (เที่ยงคืน)",

    trust_licensed: "หมอนวดมืออาชีพมีใบประกอบวิชาชีพ",
    trust_hygiene: "ห้องส่วนตัวสะอาดและฆ่าเชื้อทุกครั้ง",
    trust_bts: "ใกล้ BTS นานา และ อโศก เดินสะดวก",
    trust_experience: "ประสบการณ์ยาวนานกว่า 23 ปี",

    cat_all: "บริการทั้งหมด",
    cat_massage: "นวดไทย & กดจุดฝ่าเท้า",
    cat_oil: "นวดน้ำมัน & อโรมา",
    cat_specialty: "ประคบสมุนไพร & ขัดผิว",
    cat_packages: "แพ็กเกจสปา",

    select_duration: "เลือกระยะเวลานวด:",
    price_for: "ราคาสำหรับ",
    mins: "นาที",
    net_fees: "ราคาสุทธิ / ไม่มีบวกเพิ่ม",
    book_session: "จองเวลานวด",
    view_details: "รายละเอียดการนวด",
    benefits_title: "ประโยชน์ต่อสุขภาพ:",

    branches_title: "5 สาขาใจกลางสุขุมวิท พร้อมต้อนรับคุณ",
    branches_subtitle: "เลือกสาขาที่สะดวกที่สุดบนถนนสุขุมวิท แต่ละสาขาพร้อมห้องนวดส่วนตัว หมอนวดผู้เชี่ยวชาญ และการต้อนรับอย่างอบอุ่น",
    address_label: "ที่อยู่:",
    nearest_station: "สถานีรถไฟฟ้าใกล้เคียง:",
    opening_hours: "เวลาเปิด-ปิด:",
    direct_phone: "เบอร์โทรศัพท์สาขา:",
    book_this_branch: "เลือกจองสาขานี้",
    get_directions: "แผนที่",
    selected_badge: "สาขาที่เลือก",

    booking_title: "จองบริการนวดล่วงหน้า",
    booking_subtitle: "ส่งข้อมูลการจองตรงถึงฝ่ายต้อนรับของสาขาผ่าน WhatsApp สะดวกรวดเร็ว",
    step_branch: "1. เลือกสาขา",
    step_therapy: "2. เลือกบริการนวด",
    step_duration: "3. ระยะเวลาที่ต้องการ",
    step_datetime: "4. วันและเวลา",
    step_guests: "5. จำนวนผู้รับบริการ",
    step_pressure: "6. น้ำหนักการนวดที่ชอบ",
    pressure_soft: "เบา / เน้นผ่อนคลาย",
    pressure_medium: "ปานกลาง / พอดีๆ",
    pressure_strong: "หนัก / เน้นคลายเส้น",
    guest_1: "1 ท่าน (เดี่ยว)",
    guest_2: "2 ท่าน (คู่)",
    guest_group: "3 ท่านขึ้นไป (กลุ่ม)",
    whatsapp_confirm_btn: "ยืนยันการจองผ่าน WhatsApp",
    whatsapp_hint: "เชื่อมต่อไปยังสาขาโดยตรง • ไม่ต้องชำระเงินล่วงหน้า",

    dock_call: "โทร",
    dock_whatsapp: "WhatsApp",
    dock_book: "จองเลย",
    dock_switch_branch: "(แตะเปลี่ยนสาขา)",

    about_tag: "ประวัติศาสตร์และปณิธาน",
    about_title: "23 ปี แห่งการสืบสานศาสตร์การนวดไทยบนถนนสุขุมวิท",
    about_desc_1: "ก่อตั้งขึ้นในปี 2545 ชาช่า มาสซาจ มุ่งมั่นอนุรักษ์ศาสตร์การนวดไทยตามแนวทางวัดโพธิ์โบราณ",
    about_desc_2: "หมอนวดทุกคนผ่านการฝึกอบรมอย่างเข้มข้นทั้งกายวิภาคและเส้นประธานสิบ เพื่อสุขภาพที่ดีที่สุดของคุณ"
  },

  ja: {
    nav_treatments: "メニュー＆料金",
    nav_locations: "店舗案内",
    nav_heritage: "当店のこだわり",
    nav_gallery: "ギャラリー",
    nav_reviews: "口コミ",
    nav_faq: "よくある質問",
    nav_book: "ご予約",
    nav_whatsapp: "WhatsApp予約",

    hero_badge: "2002年創業・伝統の本格タイ古式マッサージ（創業23年）",
    hero_title_1: "心と体の調和を取り戻す。",
    hero_title_2: "至福の癒やしをご体験ください。",
    hero_desc: "バンコクの喧騒を忘れ、静寂なプライベート空間へ。熟練セラピストによる伝統タイ古式、温かい薬草ハーブボール、贅沢なアロマオイルで深いリラクゼーションをお届けします。",
    hero_change_branch: "店舗を変更 ▾",
    hero_cta: "今すぐ癒やしの時間を予約",
    hero_open_daily: "年中無休 9:00〜深夜24:00",

    trust_licensed: "国家資格・熟練セラピスト在籍",
    trust_hygiene: "完全消毒・静かな個室完備",
    trust_bts: "BTSナナ駅・アソーク駅からすぐ",
    trust_experience: "23年以上の信頼と実績",

    cat_all: "全メニュー",
    cat_massage: "タイ古式＆足つぼ",
    cat_oil: "アロマ＆オイル",
    cat_specialty: "ハーブ温熱＆スクラブ",
    cat_packages: "スパパッケージ",

    select_duration: "施術時間を選択:",
    price_for: "料金（",
    mins: "分）",
    net_fees: "税込・サービス料込（追加料金なし）",
    book_session: "このコースを予約",
    view_details: "コース詳細",
    benefits_title: "主な効果・効能:",

    branches_title: "スクンビット通り沿い 5つの癒やしの隠れ家",
    branches_subtitle: "ナナ〜アソークの便利な立地。全店舗に落ち着いたプライベート個室、熟練セラピスト、伝統のおもてなしを備えています。",
    address_label: "住所:",
    nearest_station: "最寄り駅:",
    opening_hours: "営業時間:",
    direct_phone: "直通電話番号:",
    book_this_branch: "この店舗を予約",
    get_directions: "Googleマップ",
    selected_badge: "選択中の店舗",

    booking_title: "オンラインご予約",
    booking_subtitle: "店舗のコンシェルジュへWhatsAppで直接メッセージをお送りいただけます。",
    step_branch: "1. 店舗の選択",
    step_therapy: "2. メニューの選択",
    step_duration: "3. 施術時間",
    step_datetime: "4. ご希望の日時",
    step_guests: "5. ご利用人数",
    step_pressure: "6. 強さのお好み",
    pressure_soft: "やさしめ（リラックス）",
    pressure_medium: "ふつう（おすすめ）",
    pressure_strong: "強め（コリ解消）",
    guest_1: "1名様",
    guest_2: "2名様（ペア）",
    guest_group: "3名様以上（グループ）",
    whatsapp_confirm_btn: "WhatsAppで予約確認を送る",
    whatsapp_hint: "店舗スタッフへ直接繋がります • 事前決済不要",

    dock_call: "電話",
    dock_whatsapp: "WhatsApp",
    dock_book: "予約する",
    dock_switch_branch: "(店舗を変更)",

    about_tag: "当店の歴史と技",
    about_title: "スクンビットで23年、受け継がれる本物のタイ伝統療法",
    about_desc_1: "2002年に創業したチャチャマッサージは、伝統的なタイ古式マッサージの真髄を守り続けています。",
    about_desc_2: "セラピストはワットポー直伝のエネルギーライン（セン）と解剖学の厳しい研修を修了したプロフェッショナルです。"
  },

  zh: {
    nav_treatments: "疗程与价格",
    nav_locations: "门店分店",
    nav_heritage: "品牌历史",
    nav_gallery: "环境相册",
    nav_reviews: "宾客评价",
    nav_faq: "常见问题",
    nav_book: "立即预约",
    nav_whatsapp: "WhatsApp预约",

    hero_badge: "始于2002年 • 23年正宗皇家泰式古法按摩传承",
    hero_title_1: "重塑身心平衡。",
    hero_title_2: "唤醒内在宁静。",
    hero_desc: "远离曼谷都市喧嚣，在宁静典雅的独立包厢中，尊享正宗泰式穴位拉伸、热蒸草药球以及纯天然植物精油水疗护理。",
    hero_change_branch: "切换分店 ▾",
    hero_cta: "预约您的身心水疗体验",
    hero_open_daily: "每日营业 9:00 - 午夜24:00",

    trust_licensed: "持证资深技师团队",
    trust_hygiene: "严格消毒独立私密包厢",
    trust_bts: "近BTS Nana与Asok轻轨站",
    trust_experience: "23年曼谷口碑品牌",

    cat_all: "全部疗程",
    cat_massage: "泰式古法 & 足底反射",
    cat_oil: "植物精油 & 香薰",
    cat_specialty: "热草药球 & 身体去角质",
    cat_packages: "尊享套餐",

    select_duration: "选择疗程时长:",
    price_for: "价格（",
    mins: "分钟）",
    net_fees: "净价实付 / 无任何隐藏税费",
    book_session: "预约此疗程",
    view_details: "疗程详情",
    benefits_title: "主要疗效：",

    branches_title: "曼谷素坤逸核心区 5大宁静水疗分店",
    branches_subtitle: "无论您下榻何处，都能轻松抵达。所有分店均配备高品质独立私房、专业技师与传统香草养生茶点。",
    address_label: "地址:",
    nearest_station: "邻近轻轨/地铁:",
    opening_hours: "营业时间:",
    direct_phone: "分店电话:",
    book_this_branch: "预约此分店",
    get_directions: "查看地图",
    selected_badge: "当前分店",

    booking_title: "水疗预约",
    booking_subtitle: "您的预约信息将通过WhatsApp直接发送至分店前台，即刻确认。",
    step_branch: "1. 选择分店",
    step_therapy: "2. 选择疗程",
    step_duration: "3. 疗程时长",
    step_datetime: "4. 预约日期与时间",
    step_guests: "5. 宾客人数",
    step_pressure: "6. 按摩力度喜好",
    pressure_soft: "柔和舒适",
    pressure_medium: "适中力道",
    pressure_strong: "深层酸爽（重度）",
    guest_1: "1位 (单人)",
    guest_2: "2位 (情侣/双人)",
    guest_group: "3位以上 (家庭/团队)",
    whatsapp_confirm_btn: "通过WhatsApp提交预约",
    whatsapp_hint: "直接对接分店前台接待 • 无需提前预付定金",

    dock_call: "电话",
    dock_whatsapp: "WhatsApp",
    dock_book: "马上预约",
    dock_switch_branch: "(点击换店)",

    about_tag: "品牌历史与传承",
    about_title: "素坤逸路23年传承的正宗泰式疗愈艺术",
    about_desc_1: "创立于2002年，Chacha Massage 始终致力于弘扬曼谷正统皇家泰式按摩技艺。",
    about_desc_2: "每位理疗师均经过卧佛寺古法经络理论（Sen）与解剖学的严谨培训，带来真正的深层放松。"
  },

  ko: {
    nav_treatments: "스파 메뉴 & 가격",
    nav_locations: "지점 안내",
    nav_heritage: "브랜드 소개",
    nav_gallery: "갤러리",
    nav_reviews: "이용 후기",
    nav_faq: "자주 묻는 질문",
    nav_book: "예약하기",
    nav_whatsapp: "왓츠앱 문의",

    hero_badge: "2002년 설립 • 23년 전통의 정통 로열 타이 마사지",
    hero_title_1: "몸의 균형을 되찾고,",
    hero_title_2: "깊은 평온을 깨우다.",
    hero_desc: "방콕 도심의 활기 속에서 만나는 고요한 안식처. 정통 타이 지압, 따뜻한 천연 허브볼 요법, 맞춤형 아로마 오일 테라피로 지친 몸을 편안하게 회복하세요.",
    hero_change_branch: "지점 변경 ▾",
    hero_cta: "지금 스파 세션 예약하기",
    hero_open_daily: "매일 영업: 오전 9:00 - 자정 24:00",

    trust_licensed: "공인 자격증 보유 마스터 테라피스트",
    trust_hygiene: "완벽 살균 프라이빗 룸",
    trust_bts: "BTS 나나역 & 아속역 인접",
    trust_experience: "23년 이상의 검증된 역사",

    cat_all: "전체 프로그램",
    cat_massage: "타이 & 발 마사지",
    cat_oil: "아로마 & 오일",
    cat_specialty: "허브볼 & 스크럽",
    cat_packages: "스파 패키지",

    select_duration: "관리 시간 선택:",
    price_for: "요금 (",
    mins: "분)",
    net_fees: "세금/봉사료 포함 최종 금액",
    book_session: "이 코스 예약",
    view_details: "상세 정보",
    benefits_title: "주요 건강 효능:",

    branches_title: "수쿰빗 중심가 5개 지점",
    branches_subtitle: "수쿰빗 어디서나 가까운 지점을 방문하세요. 아늑한 개인 룸과 전문 테라피스트가 따뜻한 환대로 맞이합니다.",
    address_label: "주소:",
    nearest_station: "가까운 역:",
    opening_hours: "영업 시간:",
    direct_phone: "지점 직통 전화:",
    book_this_branch: "이 지점 예약",
    get_directions: "구글 지도",
    selected_badge: "선택된 지점",

    booking_title: "스파 예약",
    booking_subtitle: "예약 세부 정보가 왓츠앱을 통해 지점 컨시어지로 바로 전송됩니다.",
    step_branch: "1. 지점 선택",
    step_therapy: "2. 프로그램 선택",
    step_duration: "3. 이용 시간",
    step_datetime: "4. 날짜 및 시간",
    step_guests: "5. 인원 수",
    step_pressure: "6. 마사지 강도",
    pressure_soft: "부드럽게 (릴랙스)",
    pressure_medium: "보통 (추천)",
    pressure_strong: "강하게 (딥티슈)",
    guest_1: "1인 (싱글)",
    guest_2: "2인 (커플)",
    guest_group: "3인 이상 (단체)",
    whatsapp_confirm_btn: "왓츠앱으로 예약 전송",
    whatsapp_hint: "지점 매니저와 직접 연결 • 사전 결제 불필요",

    dock_call: "전화",
    dock_whatsapp: "WhatsApp",
    dock_book: "지금 예약",
    dock_switch_branch: "(지점 변경)",

    about_tag: "전통과 역사",
    about_title: "수쿰빗에서 23년 동안 이어온 정통 타이 치유 예술",
    about_desc_1: "2002년 문을 연 차차 마사지는 정통 왓포 양식의 타이 치유 전통을 온전히 보존해오고 있습니다.",
    about_desc_2: "모든 공인 테라피스트는 에너지 라인(센)과 인체 해부학에 대한 철저한 수련을 거쳐 최고의 관리를 제공합니다."
  },

  hi: {
    nav_treatments: "उपचार और मूल्य",
    nav_locations: "स्थान",
    nav_heritage: "हमारी विरासत",
    nav_gallery: "तस्वीरें",
    nav_reviews: "समीक्षाएं",
    nav_faq: "अक्सर पूछे जाने वाले प्रश्न",
    nav_book: "बुकिंग करें",
    nav_whatsapp: "व्हाट्सएप",

    hero_badge: "2002 से प्रामाणिक थाई मालिश • 23 वर्षों का अनुभव",
    hero_title_1: "शरीर का संतुलन लौटाएं।",
    hero_title_2: "मानसिक शांति का अनुभव करें।",
    hero_desc: "बैंकाक की भागदौड़ से दूर, हमारे शांत निजी कक्षों में प्रामाणिक थाई एक्यूप्रेशर, हर्बल हीट थेरेपी और सुगंधित तेल मालिश का आनंद लें।",
    hero_change_branch: "शाखा बदलें ▾",
    hero_cta: "अपना सत्र बुक करें",
    hero_open_daily: "प्रतिदिन सुबह 9:00 से मध्यरात्रि 12:00 बजे तक",

    trust_licensed: "प्रमाणित मास्टर थेरेपिस्ट",
    trust_hygiene: "स्वच्छ व सुरक्षित निजी कमरे",
    trust_bts: "BTS नाना व असोक स्टेशन के पास",
    trust_experience: "23+ वर्षों की विश्वसनीय सेवा",

    cat_all: "सभी सेवाएं",
    cat_massage: "थाई और फुट रिफ्लेक्सोलॉजी",
    cat_oil: "अरोमा और तेल मालिश",
    cat_specialty: "हर्बल और बॉडी स्क्रब",
    cat_packages: "स्पा पैकेज",

    select_duration: "समय अवधि चुनें:",
    price_for: "मूल्य (",
    mins: "मिनट)",
    net_fees: "कुल मूल्य / कोई छुपा हुआ शुल्क नहीं",
    book_session: "सत्र बुक करें",
    view_details: "विवरण देखें",
    benefits_title: "मुख्य स्वास्थ्य लाभ:",

    branches_title: "सुखुमवित में 5 शांत व आरामदायक शाखाएं",
    branches_subtitle: "सुखुमवित में अपनी निकटतम शाखा चुनें। हर शाखा में निजी कक्ष, प्रशिक्षित थेरेपिस्ट और गर्मजोशी भरा स्वागत उपलब्ध है।",
    address_label: "पता:",
    nearest_station: "निकटतम स्टेशन:",
    opening_hours: "खुलने का समय:",
    direct_phone: "सीधा फोन नंबर:",
    book_this_branch: "इस शाखा को चुनें",
    get_directions: "गूगल मैप्स",
    selected_badge: "चयनित शाखा",

    booking_title: "स्पा बुकिंग करें",
    booking_subtitle: "आपकी बुकिंग जानकारी सीधे शाखा प्रबंधक को व्हाट्सएप पर भेजी जाएगी।",
    step_branch: "1. शाखा चुनें",
    step_therapy: "2. थेरेपी चुनें",
    step_duration: "3. समय अवधि",
    step_datetime: "4. पसंदीदा दिनांक व समय",
    step_guests: "5. अतिथियों की संख्या",
    step_pressure: "6. दबाव का स्तर",
    pressure_soft: "हल्का व आरामदायक",
    pressure_medium: "मध्यम / संतुलित",
    pressure_strong: "मजबूत / गहरा दबाव",
    guest_1: "1 व्यक्ति",
    guest_2: "2 व्यक्ति (जोड़ा)",
    guest_group: "3+ व्यक्ति (समूह)",
    whatsapp_confirm_btn: "व्हाट्सएप पर पुष्टि करें",
    whatsapp_hint: "सीधे शाखा से जुड़ें • अग्रिम भुगतान की आवश्यकता नहीं",

    dock_call: "कॉल करें",
    dock_whatsapp: "व्हाट्सएप",
    dock_book: "अभी बुक करें",
    dock_switch_branch: "(शाखा बदलें)",

    about_tag: "हमारी परंपरा",
    about_title: "सुखुमवित पर 23 वर्षों से प्रामाणिक स्वास्थ्य सेवा",
    about_desc_1: "2002 में स्थापित, चाचा मसाज प्राचीन थाई उपचार कला को पूरी निष्ठा के साथ संजोए हुए है।",
    about_desc_2: "हमारे सभी चिकित्सक वाट फो की पारंपरिक ऊर्जा रेखाओं (सेन) में प्रशिक्षित हैं।"
  },

  ta: {
    nav_treatments: "சிகிச்சைகள் & கட்டணம்",
    nav_locations: "கிளைகள்",
    nav_heritage: "எங்கள் பாரம்பரியம்",
    nav_gallery: "புகைப்படங்கள்",
    nav_reviews: "மதிப்புரைகள்",
    nav_faq: "கேள்வி-பதில்",
    nav_book: "முன்பதிவு செய்",
    nav_whatsapp: "வாட்ஸ்அப்",

    hero_badge: "2002 முதல் உண்மையான தாய் மசாஜ் • 23 ஆண்டுகள் அனுபவம்",
    hero_title_1: "உடலை புத்துணர்ச்சியடைய செய்யுங்கள்.",
    hero_title_2: "அமைதியை உணருங்கள்.",
    hero_desc: "பாங்காக் நகரின் பரபரப்பில் இருந்து விலகி, எங்கள் அமைதியான தனி அறைகளில் பாரம்பரிய தாய் மசாஜ் மற்றும் மூலிகை எண்ணெய் சிகிச்சைகளை அனுபவியுங்கள்.",
    hero_change_branch: "கிளையை மாற்றவும் ▾",
    hero_cta: "மசாஜ் முன்பதிவு செய்யவும்",
    hero_open_daily: "தினமும் காலை 9:00 முதல் நள்ளிரவு 12:00 வரை",

    trust_licensed: "அங்கீகரிக்கப்பட்ட நிபுணர்கள்",
    trust_hygiene: "சுத்தமான தனி அறைகள்",
    trust_bts: "BTS நானா & அசோக் அருகில்",
    trust_experience: "23+ ஆண்டுகள் பாரம்பரியம்",

    cat_all: "அனைத்து சிகிச்சைகள்",
    cat_massage: "தாய் & கால் மசாஜ்",
    cat_oil: "அரோமா & எண்ணெய் மசாஜ்",
    cat_specialty: "மூலிகை & ஸ்க்ரப்",
    cat_packages: "ஸ்பா தொகுப்புகள்",

    select_duration: "நேரத்தை தேர்வு செய்க:",
    price_for: "கட்டணம் (",
    mins: "நிமிடம்)",
    net_fees: "நிகர கட்டணம் / கூடுதல் கட்டணம் இல்லை",
    book_session: "முன்பதிவு செய்",
    view_details: "விவரங்கள்",
    benefits_title: "முக்கிய நன்மைகள்:",

    branches_title: "சுகும்விட்டில் 5 கிளைகள்",
    branches_subtitle: "சுகும்விட் பகுதியில் உள்ள உங்களுக்கு அருகிலுள்ள கிளையை தேர்வு செய்யுங்கள்.",
    address_label: "முகவரி:",
    nearest_station: "அருகிலுள்ள நிலையம்:",
    opening_hours: "நேரம்:",
    direct_phone: "தொலைபேசி:",
    book_this_branch: "இக்கிளையை தேர்வு செய்க",
    get_directions: "வரைபடம்",
    selected_badge: "தேர்ந்தெடுக்கப்பட்டது",

    booking_title: "முன்பதிவு செய்யவும்",
    booking_subtitle: "வாட்ஸ்அப் மூலம் உடனடியாக கிளை மேலாளருடன் தொடர்பு கொண்டு உறுதி செய்யலாம்.",
    step_branch: "1. கிளை தேர்வு",
    step_therapy: "2. சிகிச்சை தேர்வு",
    step_duration: "3. நேரம்",
    step_datetime: "4. நாள் & நேரம்",
    step_guests: "5. நபர்களின் எண்ணிக்கை",
    step_pressure: "6. மசாஜ் அழுத்தம்",
    pressure_soft: "மென்மையானது",
    pressure_medium: "நடுத்தரமானது",
    pressure_strong: "ஆழ்ந்த அழுத்தம்",
    guest_1: "1 நபர்",
    guest_2: "2 நபர்கள் (ஜோடி)",
    guest_group: "3+ நபர்கள்",
    whatsapp_confirm_btn: "வாட்ஸ்அப் மூலம் உறுதிசெய்",
    whatsapp_hint: "நேரடி முன்பதிவு • முன் பணம் தேவையில்லை",

    dock_call: "அழைக்க",
    dock_whatsapp: "WhatsApp",
    dock_book: "முன்பதிவு",
    dock_switch_branch: "(கிளை மாற்ற)",

    about_tag: "பாரம்பரியம்",
    about_title: "சுகும்விட்டில் 23 ஆண்டுகள் பாரம்பரிய தாய் மசாஜ் சேவை",
    about_desc_1: "2002 ஆம் ஆண்டு தொடங்கப்பட்ட சாச்சா மசாஜ் உண்மையான பாரம்பரிய முறைகளை தொடர்ந்து வழங்கி வருகிறது.",
    about_desc_2: "அனைத்து சிகிச்சையாளர்களும் முறையான பயிற்சி பெற்ற தொழில்முறை நிபுணர்கள்."
  },

  ar: {
    nav_treatments: "العلاجات والأسعار",
    nav_locations: "فروعنا",
    nav_heritage: "تاريخنا",
    nav_gallery: "معرض الصور",
    nav_reviews: "آراء العملاء",
    nav_faq: "الأسئلة الشائعة",
    nav_book: "حجز موعد",
    nav_whatsapp: "واتساب",

    hero_badge: "علاج تايلاندي أصيل منذ عام 2002 • 23 عاماً من الخبرة",
    hero_title_1: "استعد توازن جسدك.",
    hero_title_2: "واستمتع بالسكينة المطلقة.",
    hero_desc: "اهرب من صخب بانكوك إلى ملاذنا الهادئ. تمتع بالمساج التايلاندي الملكي الأصيل، والعلاج بالكمادات العشبية الساخنة والزيوت الطبيعية في أجنحة خاصة وفائقة الخصوصية.",
    hero_change_branch: "تغيير الفرع ▾",
    hero_cta: "احجز جلستك المهدئة الآن",
    hero_open_daily: "مفتوح يومياً من 9:00 صباحاً حتى منتصف الليل",

    trust_licensed: "أخصائيون محترفون ومرخصون",
    trust_hygiene: "أجنحة خاصة ومعقمة بالكامل",
    trust_bts: "خطوات من محطتي نانا وأسوك BTS",
    trust_experience: "أكثر من 23 عاماً من التميز",

    cat_all: "جميع الجلسات",
    cat_massage: "تايلاندي ورفلكسولوجي",
    cat_oil: "زيوت عطرية وأروما",
    cat_specialty: "أعشاب وحرارة وساونا",
    cat_packages: "باقات السبا المميزة",

    select_duration: "اختر مدة الجلسة:",
    price_for: "السعر لـ",
    mins: "دقيقة",
    net_fees: "شامل الضريبة والخدمة / بدون رسوم خفية",
    book_session: "احجز هذه الجلسة",
    view_details: "تفاصيل الجلسة",
    benefits_title: "الفوائد العلاجية:",

    branches_title: "5 فروع هادئة وفاخرة في سوخومفيت",
    branches_subtitle: "فروعنا قريبة منك في شارع سوخومفيت ونانا. تشتمل على غرف خاصة فاخرة، معالجين خبراء وحسن ضيافة تايلاندية.",
    address_label: "العنوان:",
    nearest_station: "أقرب محطة قطار:",
    opening_hours: "أوقات العمل:",
    direct_phone: "الهاتف المباشر:",
    book_this_branch: "احجز في هذا الفرع",
    get_directions: "الموقع على الخريطة",
    selected_badge: "الفرع المختار",

    booking_title: "حجز جلسة مساج",
    booking_subtitle: "يتم إرسال تفاصيل حجزك مباشرة إلى خدمة العملاء عبر الواتساب لتأكيد فوري.",
    step_branch: "1. اختر الفرع",
    step_therapy: "2. نوع المساج",
    step_duration: "3. مدة الجلسة",
    step_datetime: "4. التاريخ والوقت",
    step_guests: "5. عدد الأشخاص",
    step_pressure: "6. قوة المساج المفضلة",
    pressure_soft: "خفيف وهادئ (استرخاء)",
    pressure_medium: "متوسط / متوازن",
    pressure_strong: "قوي / علاج عميق للأنسجة",
    guest_1: "شخص واحد",
    guest_2: "شخصان (زوجي)",
    guest_group: "3 أشخاص فأكثر (مجموعة)",
    whatsapp_confirm_btn: "تأكيد الحجز عبر واتساب",
    whatsapp_hint: "تواصل مباشر مع الفرع • لا يلزم الدفع المسبق",

    dock_call: "اتصال",
    dock_whatsapp: "واتساب",
    dock_book: "احجز الآن",
    dock_switch_branch: "(تغيير الفرع)",

    about_tag: "تاريخنا وأصالتنا",
    about_title: "23 عاماً من العلاج التايلاندي الأصيل في سوخومفيت",
    about_desc_1: "تأسس تشاتشا مساج عام 2002 للحفاظ على تقاليد الشفاء التايلاندية الملكية في قلب بانكوك.",
    about_desc_2: "يخضع جميع أخصائيينا لتدريب مكثف في خطوط الطاقة الحيوية التايلاندية لضمان راحتك وسلامتك."
  },

  ru: {
    nav_treatments: "Услуги и цены",
    nav_locations: "Наши салоны",
    nav_heritage: "О нас",
    nav_gallery: "Галерея",
    nav_reviews: "Отзывы",
    nav_faq: "Вопросы и ответы",
    nav_book: "Забронировать",
    nav_whatsapp: "WhatsApp",

    hero_badge: "Традиционный тайский массаж с 2002 года • 23 года опыта",
    hero_title_1: "Восстановите баланс тела.",
    hero_title_2: "Обретите внутреннюю гармонию.",
    hero_desc: "Отдохните от ритма Бангкока в нашем тихом спа-оазисе. Аутентичный королевский тайский массаж, горячие травяные компрессы и натуральные аромамасла в уютных приватных комнатах.",
    hero_change_branch: "Выбрать салон ▾",
    hero_cta: "Записаться на массаж",
    hero_open_daily: "Ежедневно с 9:00 до полуночи",

    trust_licensed: "Сертифицированные мастера",
    trust_hygiene: "Стерильные приватные комнаты",
    trust_bts: "Рядом со станциями BTS Nana и Asok",
    trust_experience: "Более 23 лет безупречной репутации",

    cat_all: "Все услуги",
    cat_massage: "Тайский и массаж стоп",
    cat_oil: "Масла и ароматерапия",
    cat_specialty: "Травяные мешочки и скрабы",
    cat_packages: "Спа-пакеты",

    select_duration: "ВЫБЕРИТЕ ПРОДОЛЖИТЕЛЬНОСТЬ:",
    price_for: "СТОИМОСТЬ ЗА",
    mins: "мин",
    net_fees: "Итоговая цена / Без скрытых доплат",
    book_session: "Записаться",
    view_details: "Подробнее",
    benefits_title: "Польза для здоровья:",

    branches_title: "5 уютных салонов в районе Сукхумвит",
    branches_subtitle: "Выберите ближайший к вам салон вдоль Сукхумвита. Каждый салон оснащен комфортабельными отдельными комнатами и предлагает высочайший уровень сервиса.",
    address_label: "АДРЕС:",
    nearest_station: "БЛИЖАЙШЕЕ МЕТРО:",
    opening_hours: "ЧАСЫ РАБОТЫ:",
    direct_phone: "ТЕЛЕФОН САЛОНА:",
    book_this_branch: "Выбрать этот салон",
    get_directions: "Карта",
    selected_badge: "Выбранный салон",

    booking_title: "Онлайн-бронирование",
    booking_subtitle: "Ваша заявка будет мгновенно отправлена администратору в WhatsApp.",
    step_branch: "1. Выберите салон",
    step_therapy: "2. Выберите процедуру",
    step_duration: "3. Продолжительность",
    step_datetime: "4. Дата и время",
    step_guests: "5. Количество гостей",
    step_pressure: "6. Сила нажатия",
    pressure_soft: "Мягкий (релакс)",
    pressure_medium: "Средний (баланс)",
    pressure_strong: "Сильный (глубокий массаж)",
    guest_1: "1 гость",
    guest_2: "2 гостя (для двоих)",
    guest_group: "3+ гостей (группа)",
    whatsapp_confirm_btn: "Подтвердить через WhatsApp",
    whatsapp_hint: "Прямая связь с салоном • Без предоплаты",

    dock_call: "Звонок",
    dock_whatsapp: "WhatsApp",
    dock_book: "Запись",
    dock_switch_branch: "(сменить салон)",

    about_tag: "Наши традиции",
    about_title: "23 года целительских традиций в центре Бангкока",
    about_desc_1: "Основанный в 2002 году салон Chacha Massage хранит древние традиции монастыря Ват Пхо.",
    about_desc_2: "Каждый мастер проходит строгую сертификацию по энергетическим линиям (Сен) и анатомии."
  },

  de: {
    nav_treatments: "Behandlungen & Preise",
    nav_locations: "Standorte",
    nav_heritage: "Über uns",
    nav_gallery: "Galerie",
    nav_reviews: "Bewertungen",
    nav_faq: "FAQ",
    nav_book: "Termin buchen",
    nav_whatsapp: "WhatsApp",

    hero_badge: "Authentische Thai-Heilkunst seit 2002 • 23 Jahre Meisterschaft",
    hero_title_1: "Bringen Sie Körper & Geist",
    hero_title_2: "wieder in Einklang.",
    hero_desc: "Entfliehen Sie dem Trubel Bangkoks in unseren ruhigen Privaträumen. Erleben Sie authentische traditionelle Thai-Massage, wärmende Kräuterstempel und hochwertige Aromaöle.",
    hero_change_branch: "Filiale wechseln ▾",
    hero_cta: "Jetzt Wellness-Termin buchen",
    hero_open_daily: "Täglich geöffnet von 9:00 bis Mitternacht",

    trust_licensed: "Zertifizierte Meister-Therapeuten",
    trust_hygiene: "Desinfizierte Privaträume",
    trust_bts: "Direkt an BTS Nana & Asok",
    trust_experience: "Über 23 Jahre Tradition",

    cat_all: "Alle Behandlungen",
    cat_massage: "Thai & Fußreflexzonen",
    cat_oil: "Aroma & Ölmassagen",
    cat_specialty: "Kräuterstempel & Peelings",
    cat_packages: "Spa-Pakete",

    select_duration: "DAUER WÄHLEN:",
    price_for: "PREIS FÜR",
    mins: "Min.",
    net_fees: "Endpreis / Keine versteckten Gebühren",
    book_session: "Behandlung buchen",
    view_details: "Details ansehen",
    benefits_title: "Wirkung und Vorteile:",

    branches_title: "5 Wohlfühl-Oasen im Herzen von Sukhumvit",
    branches_subtitle: "Wählen Sie Ihren Wunschstandort in Bangkok. Alle Filialen bieten private Räume und traditionelle thailändische Gastfreundschaft.",
    address_label: "ADRESSE:",
    nearest_station: "NÄCHSTE BTS/MRT:",
    opening_hours: "ÖFFNUNGSZEITEN:",
    direct_phone: "DIREKTE TELEFONNUMMER:",
    book_this_branch: "Diese Filiale buchen",
    get_directions: "Google Maps",
    selected_badge: "Ausgewählte Filiale",

    booking_title: "Termin reservieren",
    booking_subtitle: "Ihre Anfrage wird direkt per WhatsApp an unseren Empfang weitergeleitet.",
    step_branch: "1. Filiale wählen",
    step_therapy: "2. Behandlung wählen",
    step_duration: "3. Dauer",
    step_datetime: "4. Wunschdatum & Uhrzeit",
    step_guests: "5. Anzahl der Gäste",
    step_pressure: "6. Gewünschte Intensität",
    pressure_soft: "Sanft & entspannend",
    pressure_medium: "Mittel / ausgewogen",
    pressure_strong: "Kräftig / Tiefengewebe",
    guest_1: "1 Person",
    guest_2: "2 Personen (Paar)",
    guest_group: "3+ Personen (Gruppe)",
    whatsapp_confirm_btn: "Per WhatsApp anfragen",
    whatsapp_hint: "Direkter Kontakt zum Salon • Keine Vorauszahlung nötig",

    dock_call: "Anrufen",
    dock_whatsapp: "WhatsApp",
    dock_book: "Buchen",
    dock_switch_branch: "(Filiale wechseln)",

    about_tag: "Tradition & Handwerk",
    about_title: "23 Jahre authentische Thaimassage auf der Sukhumvit Road",
    about_desc_1: "Gegründet im Jahr 2002 widmet sich Chacha Massage der Bewahrung traditioneller königlicher Heilmethoden.",
    about_desc_2: "Unsere Therapeuten sind in traditionellen Energielinien (Sen) und Anatomie ausgebildet."
  },

  fr: {
    nav_treatments: "Soins & Tarifs",
    nav_locations: "Nos Salons",
    nav_heritage: "Notre Histoire",
    nav_gallery: "Galerie",
    nav_reviews: "Avis Clients",
    nav_faq: "FAQ",
    nav_book: "Réserver",
    nav_whatsapp: "WhatsApp",

    hero_badge: "Massage traditionnel thaïlandais depuis 2002 • 23 ans d'excellence",
    hero_title_1: "Rééquilibrez votre corps.",
    hero_title_2: "Éveillez votre sérénité.",
    hero_desc: "Échappez à l'effervescence de Bangkok dans nos suites privées et paisibles. Découvrez le massage thaï royal, les pochons d'herbes chaudes et les huiles aromatiques bienfaisantes.",
    hero_change_branch: "Changer de salon ▾",
    hero_cta: "Réserver votre séance bien-être",
    hero_open_daily: "Ouvert tous les jours de 9h00 à minuit",

    trust_licensed: "Thérapeutes diplômés d'État",
    trust_hygiene: "Suites privées et stérilisées",
    trust_bts: "À quelques pas de BTS Nana et Asok",
    trust_experience: "Plus de 23 ans de savoir-faire",

    cat_all: "Tous les soins",
    cat_massage: "Thaï & Réflexologie",
    cat_oil: "Huiles & Aromathérapie",
    cat_specialty: "Herbes chaudes & Gommage",
    cat_packages: "Forfaits Spa",

    select_duration: "CHOISIR LA DURÉE :",
    price_for: "TARIF POUR",
    mins: "min",
    net_fees: "Prix net / Pas de frais cachés",
    book_session: "Réserver ce soin",
    view_details: "Détails du soin",
    benefits_title: "Bienfaits thérapeutiques :",

    branches_title: "5 Havres de Paix à Sukhumvit",
    branches_subtitle: "Trouvez le salon le plus proche de votre hôtel. Chacun offre des cabines privées climatisées et un accueil chaleureux.",
    address_label: "ADRESSE :",
    nearest_station: "STATION LA PLUS PROCHE :",
    opening_hours: "HORAIRES :",
    direct_phone: "TÉLÉPHONE DIRECT :",
    book_this_branch: "Choisir ce salon",
    get_directions: "Plan d'accès",
    selected_badge: "Salon sélectionné",

    booking_title: "Réservation en ligne",
    booking_subtitle: "Votre demande est envoyée directement à la réception du salon via WhatsApp.",
    step_branch: "1. Choisir le salon",
    step_therapy: "2. Choisir le soin",
    step_duration: "3. Durée du soin",
    step_datetime: "4. Date et heure souhaitées",
    step_guests: "5. Nombre de personnes",
    step_pressure: "6. Pression souhaitée",
    pressure_soft: "Douce & relaxante",
    pressure_medium: "Moyenne / équilibrée",
    pressure_strong: "Ferme / tissus profonds",
    guest_1: "1 personne",
    guest_2: "2 personnes (duo)",
    guest_group: "3+ personnes (groupe)",
    whatsapp_confirm_btn: "Confirmer sur WhatsApp",
    whatsapp_hint: "Liaison directe avec le salon • Aucun prépaiement exigé",

    dock_call: "Appeler",
    dock_whatsapp: "WhatsApp",
    dock_book: "Réserver",
    dock_switch_branch: "(changer de salon)",

    about_tag: "Tradition & Savoir-faire",
    about_title: "23 ans d'art thérapeutique traditionnel thaïlandais",
    about_desc_1: "Fondé en 2002, Chacha Massage perpétue les rituels de guérison thaïlandais inspirés de Wat Pho.",
    about_desc_2: "Nos praticiens certifiés maîtrisent les lignes d'énergie (Sen) et l'anatomie pour une détente absolue."
  }
};
