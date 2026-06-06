import type {
  Category,
  DayCard,
  EmergencyContact,
  Hotel,
  PhraseGroup,
  PredepartureGroup,
  Task,
  TripPlan,
} from './lib/plan'

/* Re-export domain types so existing `from '../data'` imports keep working. */
export type {
  Category,
  DayBlock,
  DayCard,
  EmergencyContact,
  Hotel,
  PhraseGroup,
  PhraseItem,
  PredepartureItem,
  PredepartureGroup,
  Task,
  TaskStatus,
  TripPlan,
} from './lib/plan'

export type ScreenId =
  | 'splash'
  | 'country'
  | 'date'
  | 'duration'
  | 'travelers'
  | 'tripType'
  | 'budget'
  | 'preparedness'
  | 'loading'
  | 'dashboard'
  | 'briefing'
  | 'itinerary'
  | 'predeparture'
  | 'landing'

export type Tab = 'plan' | 'briefings' | 'itinerary' | 'landing'

/* -------------------------------------------------------------------------- */
/*  Featured destinations — curated images for the search screen's default    */
/*  suggestions. The full searchable list lives in lib/countries.ts.          */
/* -------------------------------------------------------------------------- */

export const COUNTRIES = [
  {
    code: 'CN',
    name: 'China',
    city: 'Shanghai',
    image:
      'https://images.unsplash.com/photo-1545893835-abaa50cbe628?auto=format&fit=crop&w=900&q=80',
  },
  {
    code: 'JP',
    name: 'Japan',
    city: 'Tokyo',
    image:
      'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=900&q=80',
  },
  {
    code: 'VN',
    name: 'Vietnam',
    city: 'Hanoi',
    image:
      'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=80',
  },
  {
    code: 'MA',
    name: 'Morocco',
    city: 'Marrakech',
    image:
      'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=900&q=80',
  },
  {
    code: 'IT',
    name: 'Italy',
    city: 'Rome',
    image:
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=900&q=80',
  },
  {
    code: 'PE',
    name: 'Peru',
    city: 'Cusco',
    image:
      'https://images.unsplash.com/photo-1531968455001-5c5272a41129?auto=format&fit=crop&w=900&q=80',
  },
]

export const TRIP_TYPES = [
  { id: 'culture', label: 'Culture', icon: 'BowlFood' },
  { id: 'food', label: 'Food', icon: 'ForkKnife' },
  { id: 'outdoors', label: 'Outdoors', icon: 'Mountains' },
  { id: 'city', label: 'City', icon: 'Buildings' },
  { id: 'offbeat', label: 'Off-the-beaten-path', icon: 'Compass' },
]

export const TRAVELERS = [
  { id: 'solo', label: 'Solo', sub: 'Just me', icon: 'User' },
  { id: 'couple', label: 'Couple', sub: 'Two of us', icon: 'Users' },
  { id: 'family', label: 'Family', sub: 'With kids', icon: 'UsersThree' },
  { id: 'group', label: 'Group', sub: 'Friends or more', icon: 'UsersFour' },
]

export const PREP_ANCHORS = [
  'Just dreaming',
  'Picked dates',
  'Booked flights',
  'Fully booked',
]

/* -------------------------------------------------------------------------- */
/*  China content — the canonical example plan. Doubles as (a) the offline    */
/*  sample, (b) the AI's few-shot exemplar, (c) the China mock-fallback path. */
/* -------------------------------------------------------------------------- */

const CHINA_CATEGORIES: Category[] = [
  {
    id: 'visa',
    name: 'Visa & documents',
    icon: 'IdentificationCard',
    total: 4,
    done: 0,
    nextTaskId: 'visa-apply',
    blurb: 'Apply for China L Visa',
  },
  {
    id: 'flights',
    name: 'Flights & stay',
    icon: 'AirplaneTilt',
    total: 5,
    done: 0,
    nextTaskId: 'flights-compare',
    blurb: 'Compare flight windows',
  },
  {
    id: 'transport',
    name: 'Local transport',
    icon: 'TrainSimple',
    total: 4,
    done: 0,
    nextTaskId: 'rail-book',
    blurb: 'Learn high-speed rail booking',
  },
  {
    id: 'money',
    name: 'Money & payments',
    icon: 'Wallet',
    total: 4,
    done: 0,
    nextTaskId: 'wechat-pay',
    blurb: 'Set up WeChat Pay',
  },
  {
    id: 'connectivity',
    name: 'Connectivity',
    icon: 'GlobeHemisphereWest',
    total: 3,
    done: 0,
    nextTaskId: 'vpn',
    blurb: 'Choose VPN before departure',
  },
  {
    id: 'culture',
    name: 'Culture & etiquette',
    icon: 'HandHeart',
    total: 4,
    done: 0,
    nextTaskId: 'dining',
    blurb: 'Learn dining basics',
  },
  {
    id: 'landing',
    name: 'Landing Day Hub',
    icon: 'MapPin',
    total: 3,
    done: 0,
    nextTaskId: 'hotel-offline',
    blurb: 'Save hotel address offline',
  },
]

const CHINA_TASKS: Record<string, Task> = {
  'visa-apply': {
    id: 'visa-apply',
    title: 'Apply for your China L Visa',
    category: 'Visa & documents',
    status: 'ready',
    duration: '30–45 min to start',
    why: 'Most U.S. travelers need a visa before entering mainland China. Starting early prevents processing time from blocking your trip.',
    steps: [
      'Confirm your passport validity (6+ months)',
      'Gather itinerary and accommodation details',
      'Complete the visa application',
      'Book or follow the correct consulate process',
    ],
    cta: 'Start visa checklist',
    needs: ['Valid passport', 'Hotel address', 'Itinerary draft', 'Recent photo'],
    headsUp: 'Visa processing varies by consulate. Starting at least 3–4 weeks before your flight keeps you out of trouble.',
  },
  'passport-validity': {
    id: 'passport-validity',
    title: 'Check your passport validity',
    category: 'Visa & documents',
    status: 'ready',
    duration: '5 min',
    why: 'China requires your passport to be valid for at least 6 months past your return date and to have at least 2 blank visa pages. Catching this now avoids a last-minute renewal scramble.',
    steps: [
      'Find your passport and check the expiry date',
      'Count 6 months past your return date',
      'Flip through and confirm 2+ blank visa pages',
      'Renew now if anything is short',
    ],
    cta: 'Mark passport ready',
    needs: ['Your passport in hand'],
    headsUp: 'Routine US passport renewal currently runs 6–8 weeks. Expedited is 2–3 weeks for an extra fee.',
  },
  'health-declaration': {
    id: 'health-declaration',
    title: 'Fill the health declaration form',
    category: 'Visa & documents',
    status: 'upcoming',
    duration: '5 min',
    why: 'China customs requires a digital health declaration via the China Customs app or QR code, completed within 24 hours of arrival. Doing it from your hotel Wi-Fi the night before makes the airport faster.',
    steps: [
      'Save the China Customs QR link to your home screen',
      'Have your flight number and hotel address handy',
      'Submit the form within 24 hours of landing',
      'Screenshot the resulting QR code',
    ],
    cta: 'Save QR shortcut',
    needs: ['Flight number', 'Hotel address', 'Passport details'],
    headsUp: 'The QR is single-use and expires. Generate it the day of your flight, not earlier.',
  },
  'itinerary-proof': {
    id: 'itinerary-proof',
    title: 'Print itinerary & accommodation proof',
    category: 'Visa & documents',
    status: 'upcoming',
    duration: '10 min',
    why: 'Border officers occasionally ask for printed proof of your return flight and hotel reservations. A folded printout in your daypack avoids stress at PVG.',
    steps: [
      'Export your flight confirmation as PDF',
      'Export your hotel confirmation as PDF',
      'Print one copy of each, fold into your daypack',
    ],
    cta: 'Mark proofs printed',
  },

  'flights-compare': {
    id: 'flights-compare',
    title: 'Compare flight windows to PVG',
    category: 'Flights & stay',
    status: 'upcoming',
    duration: '25 min',
    why: 'Direct flights to Shanghai vary widely in price across departure days. Comparing a flexible window typically saves 10–20%.',
    steps: [
      'Pick your earliest and latest departure days',
      'Compare nonstop versus one-stop options',
      'Lock in seats once price stabilizes',
    ],
    cta: 'Open flight comparison',
    needs: ['Travel dates', 'Departure airport', 'Passenger count'],
    headsUp: 'Tuesday and Wednesday departures from SFO/LAX are typically 8–15% cheaper than Friday or Sunday.',
  },
  'book-flight': {
    id: 'book-flight',
    title: 'Book your flight',
    category: 'Flights & stay',
    status: 'upcoming',
    duration: '30 min',
    why: 'Once you’ve compared windows, booking through a major OTA or directly with the airline locks in price and lets you choose seats early. Direct-with-airline makes changes easier if plans shift.',
    steps: [
      'Confirm passenger names exactly match passports',
      'Book through the airline or a trusted OTA',
      'Save the e-ticket PDF to Landing Day Hub',
    ],
    cta: 'Open booking partners',
    needs: ['Passport details for each traveler', 'Payment method'],
  },
  'book-hotel': {
    id: 'book-hotel',
    title: 'Book your Shanghai hotel',
    category: 'Flights & stay',
    status: 'upcoming',
    duration: '20 min',
    why: 'Booking a hotel in Jing’an or the Bund gives you metro access and walkable evenings. Free-cancellation rates let you lock in early without committing.',
    steps: [
      'Choose a neighborhood (Jing’an, Bund, or Xintiandi)',
      'Filter to free-cancellation rates',
      'Save the hotel’s Mandarin address to Landing Day Hub',
    ],
    cta: 'Compare hotels',
    headsUp: 'Some smaller hotels in China don’t accept foreign passports. Filter for "foreigner-friendly" or stick with international chains.',
  },
  'seat-selection': {
    id: 'seat-selection',
    title: 'Pick your seats',
    category: 'Flights & stay',
    status: 'upcoming',
    duration: '10 min',
    why: 'A 12-hour flight feels very different from a window vs. middle seat. Selecting seats early — sometimes free, sometimes a small fee — is worth doing the day you book.',
    steps: [
      'Open the airline app with your booking reference',
      'Pick seats together if traveling as a group',
      'Note your seat numbers in Landing Day Hub',
    ],
    cta: 'Open seat map',
  },
  'arrival-buffer': {
    id: 'arrival-buffer',
    title: 'Plan your first night',
    category: 'Flights & stay',
    status: 'upcoming',
    duration: '10 min',
    why: 'PVG → city is about 60–90 minutes. Plan zero activities for your first evening — just hotel check-in, a light meal nearby, and sleep. Jet lag wins are won here.',
    steps: [
      'Note check-in time at your hotel',
      'Save 1–2 walkable dinner spots near the hotel',
      'Set an alarm for the next morning, not tonight',
    ],
    cta: 'Mark first-night plan ready',
  },

  'rail-book': {
    id: 'rail-book',
    title: 'Learn high-speed rail booking',
    category: 'Local transport',
    status: 'upcoming',
    duration: '15 min',
    why: 'Beijing → Xi’an → Shanghai is fastest by high-speed rail. Booking opens 15 days ahead and seats sell out on weekends.',
    steps: [
      'Create a Trip.com or 12306 account',
      'Reserve Beijing → Xi’an',
      'Reserve Xi’an → Shanghai',
    ],
    cta: 'Open rail guide',
    needs: ['Passport details for each traveler'],
    headsUp: 'Bring your passport to the station — it’s your ticket. Aim to arrive 45 minutes early for the security and ID check.',
  },
  'metro-card': {
    id: 'metro-card',
    title: 'Set up Shanghai Metro on your phone',
    category: 'Local transport',
    status: 'upcoming',
    duration: '10 min',
    why: 'Shanghai Metro accepts Apple Pay, Alipay, and WeChat Pay via QR. Setting it up before you land means tapping in on day one without a paper card.',
    steps: [
      'Add the Shanghai Metro card to Apple Pay',
      'Or open the Metro Daduhui mini-program in Alipay',
      'Test the QR opens offline',
    ],
    cta: 'Open metro setup',
  },
  'taxi-apps': {
    id: 'taxi-apps',
    title: 'Install Didi (with English mode)',
    category: 'Local transport',
    status: 'upcoming',
    duration: '10 min',
    why: 'Didi is China’s Uber. The English-mode app accepts international cards and is the easiest way to get a taxi without explaining your address out loud.',
    steps: [
      'Install Didi from the App Store',
      'Switch language to English in settings',
      'Add an international payment card',
    ],
    cta: 'Open Didi guide',
    headsUp: 'Outside major cities, Didi can take longer at peak hours. Have your hotel address in Mandarin as a backup.',
  },
  'pvg-to-city': {
    id: 'pvg-to-city',
    title: 'Plan PVG → city transit',
    category: 'Local transport',
    status: 'upcoming',
    duration: '10 min',
    why: 'From PVG you have three options: Maglev + Metro (fastest, ~¥50), Metro Line 2 direct (cheapest, ~¥8), or taxi (~¥200). Pick now so you’re not deciding while jet-lagged.',
    steps: [
      'Pick your default option for arrival night',
      'Save the directions to Landing Day Hub',
      'Note backup option in case your default closes',
    ],
    cta: 'Save transit plan',
  },

  'wechat-pay': {
    id: 'wechat-pay',
    title: 'Set up WeChat Pay before you leave',
    category: 'Money & payments',
    status: 'ready',
    duration: '15 min',
    why: 'Many everyday payments in China rely on mobile payment apps. Setting this up before departure reduces friction at restaurants, transit points, and shops.',
    steps: [
      'Install WeChat and complete identity verification',
      'Link an international card',
      'Test a small payment before flying',
    ],
    cta: 'Open setup steps',
    needs: ['Phone number', 'International credit card', 'Passport for verification'],
    headsUp: 'WeChat Pay now accepts Visa and Mastercard for foreigners, but verification can take a few hours. Don’t leave it until the night before.',
  },
  alipay: {
    id: 'alipay',
    title: 'Set up Alipay (Tour Pass)',
    category: 'Money & payments',
    status: 'upcoming',
    duration: '15 min',
    why: 'Alipay is more widely accepted than WeChat Pay outside Tier-1 cities. The Tour Pass mini-program lets foreign cards work without a Chinese bank account.',
    steps: [
      'Install Alipay from the App Store',
      'Open the Tour Pass mini-program',
      'Top up with an international card',
    ],
    cta: 'Open Alipay guide',
  },
  'cash-pickup': {
    id: 'cash-pickup',
    title: 'Order ¥1,500 in cash',
    category: 'Money & payments',
    status: 'upcoming',
    duration: '10 min to order',
    why: 'You won’t need much cash, but ¥1,500 covers a backup taxi, a market vendor who only takes cash, and tips. Order from your bank now to avoid airport ATM fees.',
    steps: [
      'Order ¥1,500 from your bank or AAA',
      'Pick up 3–5 days before flying',
      'Split between wallet and a hidden pouch',
    ],
    cta: 'Mark cash ready',
  },
  'forex-card': {
    id: 'forex-card',
    title: 'Pick a no-foreign-fee card',
    category: 'Money & payments',
    status: 'upcoming',
    duration: '5 min',
    why: 'Most US cards charge a 3% foreign transaction fee. A Chase Sapphire, Capital One, or Schwab debit card waives it — that’s real money on a 2-week trip.',
    steps: [
      'Pick a card with no foreign transaction fee',
      'Notify your bank of travel dates',
      'Bring a backup card from a different network',
    ],
    cta: 'Mark card ready',
  },

  vpn: {
    id: 'vpn',
    title: 'Choose your VPN before departure',
    category: 'Connectivity',
    status: 'ready',
    duration: '20 min',
    why: 'Some familiar apps and websites may not work the same way in China. Choose and test your connectivity plan before you arrive.',
    steps: [
      'Compare VPNs known to work in China',
      'Install on every device you bring',
      'Test the connection before flying',
    ],
    cta: 'Compare options',
    needs: ['Each device you’re bringing', 'A payment method for the subscription'],
    headsUp: 'You must install the VPN app before landing. App stores in China often block VPN downloads.',
  },
  esim: {
    id: 'esim',
    title: 'Activate an eSIM for arrival',
    category: 'Connectivity',
    status: 'upcoming',
    duration: '10 min',
    why: 'An eSIM (Airalo, Holafly, or Nomad) gives you data the moment you land — no SIM swap, no airport kiosk. Most plans cost $20–40 for 2 weeks.',
    steps: [
      'Pick a China-coverage eSIM plan',
      'Install the eSIM but don’t activate yet',
      'Activate when you land at PVG',
    ],
    cta: 'Compare eSIM plans',
    headsUp: 'Some eSIM providers route through Hong Kong, which means you can access Google and Instagram without a VPN.',
  },
  'apps-download': {
    id: 'apps-download',
    title: 'Download essential China apps',
    category: 'Connectivity',
    status: 'upcoming',
    duration: '15 min',
    why: 'A short list of apps replaces what you’d normally use. Downloading them before you fly avoids App Store restrictions inside China.',
    steps: [
      'Install Pleco (Chinese dictionary)',
      'Install Maps.me (offline maps)',
      'Install Google Translate + download Chinese offline pack',
    ],
    cta: 'Open app checklist',
  },

  dining: {
    id: 'dining',
    title: 'Learn dining basics',
    category: 'Culture & etiquette',
    status: 'upcoming',
    duration: '10 min',
    why: 'Tipping, ordering, and table etiquette differ from the U.S. A short read avoids awkward moments.',
    steps: ['Read the dining etiquette card', 'Save it offline'],
    cta: 'Read etiquette card',
    headsUp: 'Tipping is not expected in China and can sometimes confuse staff. Service charges, when present, are already included.',
  },
  'tipping-etiquette': {
    id: 'tipping-etiquette',
    title: 'Understand tipping & service norms',
    category: 'Culture & etiquette',
    status: 'upcoming',
    duration: '5 min',
    why: 'Tipping isn’t customary in mainland China. High-end hotels and tour guides accept tips, but restaurants and taxis don’t expect them.',
    steps: [
      'Skip tips at restaurants and taxis',
      'Tip ¥20–50 for hotel housekeeping if you wish',
      'Tip ¥100–200/day for private tour guides',
    ],
    cta: 'Mark read',
  },
  'greeting-basics': {
    id: 'greeting-basics',
    title: 'Learn 10 essential phrases',
    category: 'Culture & etiquette',
    status: 'upcoming',
    duration: '15 min',
    why: 'You don’t need to be fluent. Ten phrases — hello, thank you, how much, where is, please — cover 80% of daily interactions and earn instant goodwill.',
    steps: [
      'Read the Mandarin phrase card',
      'Practice the audio for hello, thank you, sorry',
      'Save the card to Landing Day Hub',
    ],
    cta: 'Open phrase card',
  },
  'language-app': {
    id: 'language-app',
    title: 'Set up offline translation',
    category: 'Culture & etiquette',
    status: 'upcoming',
    duration: '10 min',
    why: 'Google Translate’s camera mode reads menus and signs in real time. Downloading the Chinese language pack means it works offline at a market stall.',
    steps: [
      'Open Google Translate',
      'Download the Chinese (Simplified) offline pack',
      'Test the camera mode on a Chinese label',
    ],
    cta: 'Open setup guide',
  },

  'hotel-offline': {
    id: 'hotel-offline',
    title: 'Save your hotel address offline',
    category: 'Landing Day Hub',
    status: 'upcoming',
    duration: '2 min',
    why: 'Showing a Mandarin address to a taxi driver is the fastest way from PVG to your hotel.',
    steps: ['Confirm hotel name and address', 'Save to Landing Day Hub'],
    cta: 'Save to hub',
  },
  'emergency-contacts-save': {
    id: 'emergency-contacts-save',
    title: 'Save emergency contacts offline',
    category: 'Landing Day Hub',
    status: 'upcoming',
    duration: '5 min',
    why: 'Police (110), medical (120), and your nearest US Consulate all in one offline card means you’re never more than a tap from help — even without a signal.',
    steps: [
      'Save US Consulate Shanghai: +86 21 8011 2400',
      'Save US Embassy Beijing: +86 10 8531 3000',
      'Confirm 110 (police) and 120 (medical) are in Landing Hub',
    ],
    cta: 'Save contacts',
  },
  'offline-map': {
    id: 'offline-map',
    title: 'Download offline maps',
    category: 'Landing Day Hub',
    status: 'upcoming',
    duration: '5 min',
    why: 'Google Maps is unreliable in China. Maps.me or Apple Maps with offline regions downloaded means you have walking directions even without data or VPN.',
    steps: [
      'Download Shanghai region in Apple Maps or Maps.me',
      'Download Beijing region',
      'Download Xi’an region',
    ],
    cta: 'Open download guide',
  },
}

const CHINA_BRIEFING_BUCKETS = {
  now: ['visa-apply', 'wechat-pay', 'vpn'],
  soon: [
    'passport-validity',
    'health-declaration',
    'itinerary-proof',
    'flights-compare',
    'book-flight',
    'book-hotel',
    'seat-selection',
    'arrival-buffer',
    'rail-book',
    'metro-card',
    'taxi-apps',
    'alipay',
    'forex-card',
    'esim',
    'apps-download',
  ],
  final: [
    'cash-pickup',
    'pvg-to-city',
    'dining',
    'tipping-etiquette',
    'greeting-basics',
    'language-app',
    'hotel-offline',
    'emergency-contacts-save',
    'offline-map',
  ],
}

const CHINA_CITIES = [
  { code: 'PEK', name: 'Beijing', days: 6, image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=900&q=80', stayLabel: 'Hutong stay near Houhai' },
  { code: 'XIY', name: 'Xi’an', days: 4, image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=900&q=80', stayLabel: 'City wall hotel' },
  { code: 'SHA', name: 'Shanghai', days: 8, image: 'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=900&q=80', stayLabel: 'Jing’an boutique' },
]

const CHINA_LEGS = [
  { from: 'SFO', to: 'PEK', mode: 'plane' as const, duration: '12h 35m', stops: 'Nonstop · United', status: 'booked' as const },
  { from: 'PEK', to: 'XIY', mode: 'rail' as const, duration: '4h 30m', stops: 'High-speed rail · G87', status: 'planned' as const },
  { from: 'XIY', to: 'SHA', mode: 'rail' as const, duration: '6h 10m', stops: 'High-speed rail · G1976', status: 'planned' as const },
  { from: 'PVG', to: 'SFO', mode: 'plane' as const, duration: '11h 50m', stops: 'Nonstop · United', status: 'booked' as const },
]

const CHINA_ITINERARY_DAYS: DayCard[] = [
  {
    dayNumber: 1,
    city: 'Beijing',
    date: 'Sep 14',
    kind: 'arrival',
    blocks: [
      { slot: 'morning', label: 'Landing at PEK', detail: 'Touch down 11:25 · taxi to hutong stay', meta: 'Buffer day — no plans' },
      { slot: 'afternoon', label: 'Soft arrival walk', detail: 'Houhai lake loop, late lunch nearby' },
      { slot: 'evening', label: 'Early dinner', detail: 'Quiet noodles at the hutong, in bed by 9pm' },
    ],
  },
  {
    dayNumber: 7,
    city: 'Beijing → Xi’an',
    date: 'Sep 20',
    kind: 'transit',
    blocks: [
      { slot: 'morning', label: 'Pack out', detail: 'Breakfast at hotel · Didi to Beijing West Station' },
      { slot: 'afternoon', label: 'G87 high-speed rail', detail: '13:30 → 18:00 · Business class · 4h 30m', meta: 'Arrive 45 min early — passport ID check' },
      { slot: 'evening', label: 'Check in · City wall', detail: 'Hotel near South Gate, sunset walk on the wall' },
    ],
  },
  {
    dayNumber: 11,
    city: 'Xi’an → Shanghai',
    date: 'Sep 24',
    kind: 'transit',
    blocks: [
      { slot: 'morning', label: 'Muslim Quarter breakfast', detail: 'Last yangrou paomo · pack out by 11am' },
      { slot: 'afternoon', label: 'G1976 high-speed rail', detail: '14:10 → 20:20 · Business class · 6h 10m' },
      { slot: 'evening', label: 'Arrive Jing’an', detail: 'Late check-in at The Middle House · light dinner' },
    ],
  },
]

const CHINA_HOTEL: Hotel = {
  name: 'The Middle House',
  addressLocal: '上海市静安区陕西北路366号',
  roman: 'Shànghǎi Shì Jìng’ān Qū Shǎnxī Běi Lù 366 Hào',
  addressEn: '366 Middle Shaanxi Rd, Jing’an, Shanghai',
  neighborhood: 'Jing’an',
  city: 'Shanghai',
}

const CHINA_PHRASES: PhraseGroup[] = [
  {
    group: 'Taxi',
    items: [
      { en: 'Please take me to this address.', local: '请带我去这个地址。', roman: 'Qǐng dài wǒ qù zhège dìzhǐ.' },
      { en: 'Please use the meter.', local: '请打表。', roman: 'Qǐng dǎ biǎo.' },
      { en: 'How long will it take?', local: '需要多长时间？', roman: 'Xūyào duō cháng shíjiān?' },
      { en: 'Please stop here.', local: '请在这里停。', roman: 'Qǐng zài zhèlǐ tíng.' },
      { en: 'Could I get a receipt?', local: '可以给我发票吗？', roman: 'Kěyǐ gěi wǒ fāpiào ma?' },
    ],
  },
  {
    group: 'Hotel',
    items: [
      { en: 'I have a reservation under this name.', local: '我用这个名字订了房间。', roman: 'Wǒ yòng zhège míngzì dìngle fángjiān.' },
      { en: 'Could I get the Wi-Fi password?', local: '请问无线网络密码是多少？', roman: 'Qǐngwèn wúxiàn wǎngluò mìmǎ shì duōshǎo?' },
      { en: 'What time is breakfast?', local: '早餐几点开始？', roman: 'Zǎocān jǐ diǎn kāishǐ?' },
      { en: 'Could you call a taxi for me?', local: '可以帮我叫出租车吗？', roman: 'Kěyǐ bāng wǒ jiào chūzūchē ma?' },
    ],
  },
  {
    group: 'Restaurant',
    items: [
      { en: 'Could I see the menu, please?', local: '请给我菜单。', roman: 'Qǐng gěi wǒ càidān.' },
      { en: 'I don’t eat meat.', local: '我不吃肉。', roman: 'Wǒ bù chī ròu.' },
      { en: 'Not too spicy, please.', local: '请不要太辣。', roman: 'Qǐng bùyào tài là.' },
      { en: 'I’m allergic to peanuts.', local: '我对花生过敏。', roman: 'Wǒ duì huāshēng guòmǐn.' },
      { en: 'The check, please.', local: '请结账。', roman: 'Qǐng jiézhàng.' },
    ],
  },
  {
    group: 'Payment',
    items: [
      { en: 'Can I pay by card?', local: '可以刷卡吗？', roman: 'Kěyǐ shuākǎ ma?' },
      { en: 'Cash or WeChat Pay?', local: '现金还是微信支付？', roman: 'Xiànjīn háishì wēixìn zhīfù?' },
      { en: 'How much is this?', local: '这个多少钱？', roman: 'Zhège duōshǎo qián?' },
      { en: 'That’s too expensive.', local: '太贵了。', roman: 'Tài guì le.' },
    ],
  },
  {
    group: 'Emergency',
    items: [
      { en: 'I need help.', local: '我需要帮助。', roman: 'Wǒ xūyào bāngzhù.' },
      { en: 'Please call the police.', local: '请叫警察。', roman: 'Qǐng jiào jǐngchá.' },
      { en: 'I lost my passport.', local: '我的护照丢了。', roman: 'Wǒ de hùzhào diū le.' },
      { en: 'Where is the nearest hospital?', local: '最近的医院在哪里？', roman: 'Zuìjìn de yīyuàn zài nǎlǐ?' },
    ],
  },
]

const CHINA_EMERGENCY: EmergencyContact[] = [
  { label: 'Police', number: '110', kind: 'urgent' },
  { label: 'Medical', number: '120', kind: 'urgent' },
  { label: 'US Consulate Shanghai', number: '+86 21 8011 2400', kind: 'consular' },
  { label: 'US Embassy Beijing', number: '+86 10 8531 3000', kind: 'consular' },
]

const CHINA_PREDEPARTURE: PredepartureGroup[] = [
  {
    group: 'Documents',
    items: [
      { id: 'pp', label: 'Passport packed', sub: 'Valid through 2027-04', linkedTaskId: 'passport-validity' },
      { id: 'visa-saved', label: 'Visa saved offline', linkedTaskId: 'visa-apply' },
      { id: 'copies', label: 'Backup copies in your bag' },
      { id: 'health-qr', label: 'Health declaration QR ready', linkedTaskId: 'health-declaration' },
    ],
  },
  {
    group: 'Money',
    items: [
      { id: 'wechat-tested', label: 'WeChat Pay tested', linkedTaskId: 'wechat-pay' },
      { id: 'cash', label: '¥1,500 cash on hand', linkedTaskId: 'cash-pickup' },
      { id: 'forex-card', label: 'No-fee card packed', linkedTaskId: 'forex-card' },
    ],
  },
  {
    group: 'Connectivity',
    items: [
      { id: 'vpn-installed', label: 'VPN installed and tested', linkedTaskId: 'vpn' },
      { id: 'predep-esim', label: 'eSIM activated for arrival', linkedTaskId: 'esim' },
      { id: 'apps', label: 'Pleco, Maps.me, Translate downloaded', linkedTaskId: 'apps-download' },
    ],
  },
  {
    group: 'Arrival',
    items: [
      { id: 'addr-zh', label: 'Hotel address saved in Mandarin', linkedTaskId: 'hotel-offline' },
      { id: 'predep-offline-map', label: 'Offline map of Shanghai downloaded', linkedTaskId: 'offline-map' },
      { id: 'transit', label: 'PVG → city transit plan saved', linkedTaskId: 'pvg-to-city' },
      { id: 'emergency', label: 'Embassy & emergency contacts saved', linkedTaskId: 'emergency-contacts-save' },
    ],
  },
]

export const CHINA_PLAN: TripPlan = {
  country: { code: 'CN', name: 'China', capital: 'Beijing', region: 'Asia', flag: '🇨🇳' },
  heroCity: 'Shanghai',
  heroImage: COUNTRIES[0].image,
  arrivalAirport: { code: 'PVG', city: 'Shanghai' },
  currency: { code: 'CNY', symbol: '¥', usdRate: 7.24 },
  languages: ['Mandarin Chinese'],
  phraseLang: { name: 'Mandarin', bcp47: 'zh-CN', hasRomanization: true },
  homeCountry: 'United States',
  summary: 'A first international trip across Beijing, Xi’an, and Shanghai — sequenced from now to landing day.',
  visaLabel: 'L Visa · 30 days',
  categories: CHINA_CATEGORIES,
  tasks: CHINA_TASKS,
  briefingBuckets: CHINA_BRIEFING_BUCKETS,
  itinerary: {
    routeTitle: 'Beijing → Xi’an → Shanghai',
    dateRange: 'Sep 14 – Oct 1',
    cities: CHINA_CITIES,
    legs: CHINA_LEGS,
  },
  itineraryDays: CHINA_ITINERARY_DAYS,
  hotel: CHINA_HOTEL,
  phrases: CHINA_PHRASES,
  emergencyContacts: CHINA_EMERGENCY,
  predeparture: CHINA_PREDEPARTURE,
}

export const HERO_IMAGE =
  'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80'

// Atmospheric backgrounds for each onboarding question (country-neutral).
export const ONBOARDING_BACKGROUNDS = {
  date: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80',
  duration: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=1200&q=80',
  travelers: 'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=1200&q=80',
  tripType: 'https://images.unsplash.com/photo-1545893835-abaa50cbe628?auto=format&fit=crop&w=1200&q=80',
  budget: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80',
  preparedness: 'https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?auto=format&fit=crop&w=1200&q=80',
}
