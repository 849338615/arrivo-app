/* -------------------------------------------------------------------------- */
/*  Templated fallback plan.                                                  */
/*                                                                            */
/*  Builds a complete, genuinely useful TripPlan for ANY country from         */
/*  ground-truth facts alone — no LLM required. This is the no-key fallback   */
/*  and the client's last resort if /api is unreachable. Briefings are        */
/*  sensible-generic rather than richly tailored; emergency numbers are       */
/*  the real vetted values.                                                   */
/* -------------------------------------------------------------------------- */

import type {
  Category,
  DayCard,
  PhraseGroup,
  PredepartureGroup,
  Task,
  TripAnswers,
  TripPlan,
} from './plan'
import { languageMeta } from './plan'
import type { CountryFacts } from './facts'
import { emergencyContactsFor } from './emergency'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function fmt(d: Date): string {
  return `${MONTHS[d.getUTCMonth()]} ${d.getUTCDate()}`
}
function addDays(base: Date, n: number): Date {
  const d = new Date(base)
  d.setUTCDate(d.getUTCDate() + n)
  return d
}

const CAT = {
  visa: 'Visa & documents',
  flights: 'Flights & stay',
  transport: 'Local transport',
  money: 'Money & payments',
  connectivity: 'Connectivity',
  culture: 'Culture & etiquette',
  landing: 'Landing Day Hub',
} as const

export function buildTemplatedPlan(
  facts: CountryFacts,
  answers: TripAnswers,
  opts: { homeCountry?: string } = {},
): TripPlan {
  const homeCountry = opts.homeCountry ?? 'United States'
  const name = facts.name
  const capital = facts.capital
  const lang = facts.primaryLanguage
  const curCode = facts.currency.code
  const langMeta = languageMeta(lang)

  const tasks: Record<string, Task> = {
    't-passport': {
      id: 't-passport',
      title: 'Check your passport validity',
      category: CAT.visa,
      status: 'ready',
      duration: '5 min',
      why: `Many countries require your passport to stay valid for 6 months past your return date, with blank pages for stamps. Catching this now avoids a last-minute renewal scramble before ${name}.`,
      steps: [
        'Find your passport and check the expiry date',
        'Count 6 months past your planned return',
        'Confirm you have 2+ blank pages',
        'Renew now if anything is short',
      ],
      cta: 'Mark passport ready',
      needs: ['Your passport in hand'],
    },
    't-entry': {
      id: 't-entry',
      title: `Check ${name} entry & visa rules`,
      category: CAT.visa,
      status: 'ready',
      duration: '20 min',
      why: `Entry requirements depend on your nationality. Confirm whether ${homeCountry} passport holders need a visa, an eTA, or visa-free entry for ${name}, and how long you can stay.`,
      steps: [
        `Check your government's official travel advice for ${name}`,
        'Note any visa, eTA, or entry-fee requirement',
        'Apply early if a visa is required',
      ],
      cta: 'Open entry rules',
      headsUp: 'Visa processing times vary widely. Starting 3–4 weeks before departure keeps you out of trouble.',
    },
    't-insurance': {
      id: 't-insurance',
      title: 'Get travel insurance',
      category: CAT.visa,
      status: 'upcoming',
      duration: '15 min',
      why: 'A medical emergency abroad can be expensive. A simple travel-medical policy covers hospital care, evacuation, and trip disruptions.',
      steps: ['Compare a few travel-insurance providers', 'Pick medical + trip-cancellation cover', 'Save the policy PDF offline'],
      cta: 'Compare insurance',
    },
    't-docs': {
      id: 't-docs',
      title: 'Save copies of key documents',
      category: CAT.visa,
      status: 'upcoming',
      duration: '10 min',
      why: 'If your passport is lost or stolen, digital and paper copies make replacement far faster at the embassy.',
      steps: ['Photograph passport, visa, and insurance', 'Store copies in your phone + cloud', 'Pack one printed set separately'],
      cta: 'Mark copies saved',
    },

    't-compare': {
      id: 't-compare',
      title: `Compare flights to ${capital}`,
      category: CAT.flights,
      status: 'upcoming',
      duration: '25 min',
      why: `Fares to ${capital} swing widely by day of week. Comparing a flexible window typically saves 10–20%.`,
      steps: ['Set your earliest and latest departure days', 'Compare nonstop vs. one-stop', 'Lock in once the price stabilizes'],
      cta: 'Open flight comparison',
      needs: ['Travel dates', 'Departure airport', 'Passenger count'],
    },
    't-book-flight': {
      id: 't-book-flight',
      title: 'Book your flight',
      category: CAT.flights,
      status: 'upcoming',
      duration: '30 min',
      why: 'Booking direct with the airline locks in price and makes changes easier if plans shift.',
      steps: ['Confirm names match passports exactly', 'Book with the airline or a trusted OTA', 'Save the e-ticket to your Landing Day Hub'],
      cta: 'Open booking partners',
      needs: ['Passport details', 'Payment method'],
    },
    't-book-stay': {
      id: 't-book-stay',
      title: `Book your ${capital} stay`,
      category: CAT.flights,
      status: 'upcoming',
      duration: '20 min',
      why: 'A central, well-connected neighborhood makes everything easier. Free-cancellation rates let you lock in early without committing.',
      steps: ['Pick a central neighborhood', 'Filter to free-cancellation rates', `Save the address (in ${lang}) to your Landing Day Hub`],
      cta: 'Compare stays',
    },
    't-first-night': {
      id: 't-first-night',
      title: 'Plan your first night',
      category: CAT.flights,
      status: 'upcoming',
      duration: '10 min',
      why: 'Plan zero activities for arrival evening — just check-in, a light meal nearby, and sleep. Jet-lag wins are won here.',
      steps: ['Note your check-in time', 'Save 1–2 walkable dinner spots', 'Set tomorrow’s alarm, not tonight’s'],
      cta: 'Mark first-night plan ready',
    },

    't-transfer': {
      id: 't-transfer',
      title: `Plan your airport → ${capital} transfer`,
      category: CAT.transport,
      status: 'upcoming',
      duration: '10 min',
      why: 'Deciding how you’ll get from the airport to your stay before you fly means no negotiating while jet-lagged.',
      steps: ['Compare train, official taxi, and rideshare', 'Pick your arrival-night default', 'Save directions to your Landing Day Hub'],
      cta: 'Save transit plan',
    },
    't-transit': {
      id: 't-transit',
      title: 'Set up local transit payment',
      category: CAT.transport,
      status: 'upcoming',
      duration: '10 min',
      why: `Most ${name} cities use a tap card or mobile pass for metro and buses. Setting it up early means tapping in on day one.`,
      steps: ['Find the local transit card or app', 'Check if your phone’s contactless works', 'Top up or link a card'],
      cta: 'Open transit setup',
    },
    't-rideshare': {
      id: 't-rideshare',
      title: 'Install the local taxi / rideshare app',
      category: CAT.transport,
      status: 'upcoming',
      duration: '10 min',
      why: 'A local rideshare app avoids cash haggling and language friction, and usually gives an upfront price.',
      steps: ['Find the dominant local rideshare app', 'Install and add a payment card', 'Set your home language if available'],
      cta: 'Open rideshare guide',
    },

    't-card': {
      id: 't-card',
      title: 'Pick a no-foreign-fee card',
      category: CAT.money,
      status: 'ready',
      duration: '5 min',
      why: 'Most cards charge a ~3% foreign transaction fee. A no-FX-fee card saves real money across a multi-week trip.',
      steps: ['Pick a card with no foreign transaction fee', 'Notify your bank of travel dates', 'Bring a backup card on another network'],
      cta: 'Mark card ready',
    },
    't-cash': {
      id: 't-cash',
      title: curCode && curCode !== 'USD' ? `Get some ${curCode} cash` : 'Get some local cash',
      category: CAT.money,
      status: 'upcoming',
      duration: '10 min',
      why: 'Even where cards are common, a little local cash covers markets, small vendors, and tips. Order from your bank to dodge airport-ATM fees.',
      steps: ['Order a modest amount before you fly', 'Pick up 3–5 days ahead', 'Split between wallet and a hidden pouch'],
      cta: 'Mark cash ready',
    },
    't-payments': {
      id: 't-payments',
      title: 'Check accepted payment methods',
      category: CAT.money,
      status: 'upcoming',
      duration: '10 min',
      why: `Card vs. cash vs. mobile-pay norms vary a lot. Knowing what ${name} expects avoids awkward checkout moments.`,
      steps: ['Check whether cards are widely accepted', 'See if a local mobile wallet dominates', 'Plan a cash buffer for cash-only spots'],
      cta: 'Read payments note',
    },

    't-esim': {
      id: 't-esim',
      title: 'Activate an eSIM for arrival',
      category: CAT.connectivity,
      status: 'ready',
      duration: '10 min',
      why: 'An eSIM (Airalo, Holafly, Nomad) gives you data the moment you land — no SIM swap, no airport kiosk.',
      steps: [`Pick a ${name}-coverage eSIM plan`, 'Install but don’t activate yet', 'Activate when you land'],
      cta: 'Compare eSIM plans',
    },
    't-maps': {
      id: 't-maps',
      title: `Download offline maps of ${capital}`,
      category: CAT.connectivity,
      status: 'upcoming',
      duration: '5 min',
      why: 'Offline maps mean walking directions even with no data or signal on arrival day.',
      steps: [`Download the ${capital} region in your maps app`, 'Pin your hotel and the airport', 'Test it in airplane mode'],
      cta: 'Open download guide',
    },
    't-apps': {
      id: 't-apps',
      title: 'Download key travel apps',
      category: CAT.connectivity,
      status: 'upcoming',
      duration: '15 min',
      why: 'A short list of apps — translation, transit, rideshare, maps — replaces what you’d normally reach for at home.',
      steps: ['Install a translation app + offline language pack', 'Add transit and rideshare apps', 'Sign in while you still have home Wi-Fi'],
      cta: 'Open app checklist',
    },

    't-etiquette': {
      id: 't-etiquette',
      title: `Learn ${name} etiquette basics`,
      category: CAT.culture,
      status: 'upcoming',
      duration: '10 min',
      why: 'Greetings, dress, and dining customs differ. A short read avoids unintended rudeness and earns goodwill.',
      steps: [`Read a short ${name} etiquette primer`, 'Note any dress norms for sacred sites', 'Save it offline'],
      cta: 'Read etiquette card',
    },
    't-phrases': {
      id: 't-phrases',
      title: `Learn 10 essential ${lang} phrases`,
      category: CAT.culture,
      status: 'upcoming',
      duration: '15 min',
      why: 'Ten phrases — hello, thank you, how much, where is, please — cover most daily interactions and earn instant goodwill.',
      steps: ['Open your Landing Day phrase card', 'Practice hello, thank you, sorry', 'Save the card offline'],
      cta: 'Open phrase card',
    },
    't-tipping': {
      id: 't-tipping',
      title: 'Understand tipping norms',
      category: CAT.culture,
      status: 'upcoming',
      duration: '5 min',
      why: `Tipping expectations range from mandatory to mildly rude. Knowing the ${name} norm keeps every checkout smooth.`,
      steps: ['Check the tipping norm for restaurants', 'Check taxis and hotels', 'Keep small notes handy if tips are expected'],
      cta: 'Mark read',
    },

    't-save-hotel': {
      id: 't-save-hotel',
      title: 'Save your hotel address offline',
      category: CAT.landing,
      status: 'upcoming',
      duration: '2 min',
      why: `Showing your address in ${lang} to a taxi driver is the fastest way from the airport to your door.`,
      steps: ['Confirm hotel name and address', `Save it in ${lang} + English`, 'Add it to your Landing Day Hub'],
      cta: 'Save to hub',
    },
    't-save-emergency': {
      id: 't-save-emergency',
      title: 'Save emergency contacts offline',
      category: CAT.landing,
      status: 'upcoming',
      duration: '5 min',
      why: 'Local emergency numbers plus your embassy in one offline card means help is always a tap away — even without signal.',
      steps: ['Confirm the local emergency numbers', 'Save your embassy contact', 'Keep them in your Landing Day Hub'],
      cta: 'Save contacts',
    },
    't-save-maps': {
      id: 't-save-maps',
      title: 'Download offline maps',
      category: CAT.landing,
      status: 'upcoming',
      duration: '5 min',
      why: 'Offline regions give you walking directions on arrival without data or a connection.',
      steps: [`Download ${capital} offline`, 'Pin hotel + airport', 'Test in airplane mode'],
      cta: 'Open download guide',
    },
  }

  const categories: Category[] = [
    { id: 'visa', name: CAT.visa, icon: 'IdentificationCard', total: 4, done: 0, nextTaskId: 't-entry', blurb: `Check ${name} entry rules` },
    { id: 'flights', name: CAT.flights, icon: 'AirplaneTilt', total: 4, done: 0, nextTaskId: 't-compare', blurb: `Compare flights to ${capital}` },
    { id: 'transport', name: CAT.transport, icon: 'TrainSimple', total: 3, done: 0, nextTaskId: 't-transfer', blurb: 'Plan local transport' },
    { id: 'money', name: CAT.money, icon: 'Wallet', total: 3, done: 0, nextTaskId: 't-card', blurb: 'Pick a no-fee card' },
    { id: 'connectivity', name: CAT.connectivity, icon: 'GlobeHemisphereWest', total: 3, done: 0, nextTaskId: 't-esim', blurb: 'Activate an eSIM' },
    { id: 'culture', name: CAT.culture, icon: 'HandHeart', total: 3, done: 0, nextTaskId: 't-phrases', blurb: `Learn ${lang} basics` },
    { id: 'landing', name: CAT.landing, icon: 'MapPin', total: 3, done: 0, nextTaskId: 't-save-hotel', blurb: 'Save hotel address offline' },
  ]

  const briefingBuckets = {
    now: ['t-passport', 't-entry', 't-card', 't-esim'],
    soon: ['t-insurance', 't-docs', 't-compare', 't-book-flight', 't-book-stay', 't-first-night', 't-transfer', 't-transit', 't-rideshare', 't-cash', 't-payments', 't-apps'],
    final: ['t-maps', 't-etiquette', 't-phrases', 't-tipping', 't-save-hotel', 't-save-emergency', 't-save-maps'],
  }

  // Dates: assume a near-future window.
  const start = addDays(new Date(), 45)
  const dur = Math.max(1, answers.durationDays || 7)
  const end = addDays(start, dur - 1)

  const itineraryDays: DayCard[] = [
    {
      dayNumber: 1,
      city: capital,
      date: fmt(start),
      kind: 'arrival',
      blocks: [
        { slot: 'morning', label: `Arrive in ${capital}`, detail: 'Clear immigration, pick up data, head to your stay', meta: 'Buffer day — no plans' },
        { slot: 'afternoon', label: 'Settle in', detail: 'Drop bags, short orientation walk nearby' },
        { slot: 'evening', label: 'Easy first dinner', detail: 'Somewhere walkable, early night to beat jet lag' },
      ],
    },
    {
      dayNumber: 2,
      city: capital,
      date: fmt(addDays(start, 1)),
      kind: 'explore',
      blocks: [
        { slot: 'morning', label: 'Old town & landmarks', detail: `The historic heart of ${capital}` },
        { slot: 'afternoon', label: 'A signature museum or market', detail: 'Pace yourself — leave room to wander' },
        { slot: 'evening', label: 'Local dinner', detail: 'Try a regional specialty' },
      ],
    },
    {
      dayNumber: dur,
      city: capital,
      date: fmt(end),
      kind: 'transit',
      blocks: [
        { slot: 'morning', label: 'Slow morning', detail: 'Last coffee, pack out, store bags if needed' },
        { slot: 'afternoon', label: 'Head to the airport', detail: 'Leave buffer for check-in and security', meta: 'Departure day' },
        { slot: 'evening', label: 'Fly home', detail: 'Save offline boarding passes' },
      ],
    },
  ]

  const phrases: PhraseGroup[] = [
    { group: 'Greetings', items: [{ en: 'Hello.', local: '' }, { en: 'Thank you.', local: '' }, { en: 'Excuse me / Sorry.', local: '' }, { en: 'Do you speak English?', local: '' }] },
    { group: 'Taxi', items: [{ en: 'Please take me to this address.', local: '' }, { en: 'How much is the fare?', local: '' }, { en: 'Please stop here.', local: '' }] },
    { group: 'Restaurant', items: [{ en: 'A table for two, please.', local: '' }, { en: 'The menu, please.', local: '' }, { en: 'The check, please.', local: '' }] },
    { group: 'Payment', items: [{ en: 'How much is this?', local: '' }, { en: 'Can I pay by card?', local: '' }, { en: 'That’s too expensive.', local: '' }] },
    { group: 'Emergency', items: [{ en: 'I need help.', local: '' }, { en: 'Please call the police.', local: '' }, { en: 'Where is the nearest hospital?', local: '' }] },
  ]

  const predeparture: PredepartureGroup[] = [
    {
      group: 'Documents',
      items: [
        { id: 'pp', label: 'Passport packed', linkedTaskId: 't-passport' },
        { id: 'entry', label: 'Entry/visa rules confirmed', linkedTaskId: 't-entry' },
        { id: 'insurance', label: 'Travel insurance saved', linkedTaskId: 't-insurance' },
        { id: 'copies', label: 'Document copies stored' },
      ],
    },
    {
      group: 'Money',
      items: [
        { id: 'card', label: 'No-fee card packed', linkedTaskId: 't-card' },
        { id: 'cash', label: 'Local cash on hand', linkedTaskId: 't-cash' },
      ],
    },
    {
      group: 'Connectivity',
      items: [
        { id: 'esim', label: 'eSIM activated for arrival', linkedTaskId: 't-esim' },
        { id: 'maps', label: 'Offline maps downloaded', linkedTaskId: 't-maps' },
        { id: 'apps', label: 'Key apps downloaded', linkedTaskId: 't-apps' },
      ],
    },
    {
      group: 'Arrival',
      items: [
        { id: 'addr', label: 'Hotel address saved offline', linkedTaskId: 't-save-hotel' },
        { id: 'transit', label: 'Airport → city transfer planned', linkedTaskId: 't-transfer' },
        { id: 'emergency', label: 'Emergency contacts saved', linkedTaskId: 't-save-emergency' },
      ],
    },
  ]

  return {
    country: { code: facts.code, name, capital, region: facts.region, flag: facts.flag },
    heroCity: capital,
    heroImage: '',
    arrivalAirport: { code: '', city: capital },
    currency: facts.currency,
    languages: facts.languages.length ? facts.languages : [lang],
    phraseLang: { name: lang, bcp47: langMeta.bcp47, hasRomanization: false },
    homeCountry,
    summary: `Your readiness plan for ${name}, sequenced from now to landing day.`,
    visaLabel: 'Check entry rules',
    categories,
    tasks,
    briefingBuckets,
    itinerary: {
      routeTitle: capital,
      dateRange: `${fmt(start)} – ${fmt(end)}`,
      cities: [{ code: facts.code, name: capital, days: dur, image: '', stayLabel: 'City-centre stay' }],
      legs: [],
    },
    itineraryDays,
    hotel: { name: '', addressLocal: '', addressEn: '', neighborhood: '', city: capital },
    phrases,
    emergencyContacts: emergencyContactsFor(facts.code, homeCountry),
    predeparture,
    isTemplated: true,
  }
}
