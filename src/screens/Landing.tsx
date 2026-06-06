import { useState } from 'react'
import {
  ArrowsOut,
  Bed,
  Buildings,
  CaretDown,
  CaretRight,
  CloudSlash,
  CurrencyDollarSimple,
  Eye,
  ForkKnife,
  HandWaving,
  Lifebuoy,
  MapPin,
  PaperPlaneTilt,
  Phone,
  ShieldWarning,
  SpeakerHigh,
  Taxi,
  Translate,
  TrainSimple,
  Wallet,
  X,
  type Icon as PIcon,
} from '@phosphor-icons/react'
import { usePlan } from '../lib/PlanContext'
import { DestinationImage, Sheet } from '../components'
import type { TripPlan } from '../lib/plan'

const METRO_BG =
  'https://images.unsplash.com/photo-1551522435-a13afa10f103?auto=format&fit=crop&w=1200&q=80'

const GROUP_ICON: Record<string, PIcon> = {
  Greetings: HandWaving,
  Taxi: MapPin,
  Hotel: Bed,
  Restaurant: ForkKnife,
  Payment: Wallet,
  Emergency: ShieldWarning,
}

function speak(text: string, lang: string) {
  try {
    if (!text || typeof window === 'undefined' || !window.speechSynthesis) return
    const u = new SpeechSynthesisUtterance(text)
    if (lang) u.lang = lang
    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(u)
  } catch {
    /* speech synthesis unsupported — non-fatal */
  }
}

function formatRate(rate: number): string {
  if (!rate || rate <= 0) return '—'
  return rate >= 100 ? Math.round(rate).toLocaleString() : rate.toFixed(2)
}

export function Landing(_props: { onBack: () => void }) {
  void _props
  const plan = usePlan()
  const { hotel, phraseLang, currency, arrivalAirport, heroCity } = plan
  const [openGroup, setOpenGroup] = useState<string>(plan.phrases[0]?.group ?? '')
  const [showDriver, setShowDriver] = useState(false)
  const [showTransit, setShowTransit] = useState(false)

  const airportChip = arrivalAirport.code
    ? `${arrivalAirport.code} · ${arrivalAirport.city}`
    : arrivalAirport.city
  const hasHotelAddress = Boolean(hotel.addressLocal || hotel.addressEn)
  const bigAddress = hotel.addressLocal || hotel.addressEn

  return (
    <>
    <div className="slide-in scroll-area flex h-full w-full flex-col overflow-y-auto bg-ink no-select">
      {/* Header — offline pill + welcome (sits below the global top app bar) */}
      <header className="border-b border-border-default px-6 pb-6 pt-[148px]">
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5 backdrop-blur-md">
            <CloudSlash size={13} weight="fill" className="text-steel-soft" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-steel-soft">
              Offline ready
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-fog">
            <PaperPlaneTilt size={11} weight="fill" />
            {airportChip}
          </span>
        </div>
        <h1 className="mt-3 font-display text-[34px] font-bold leading-[40px] tracking-[-0.015em] text-mist">
          Welcome to {heroCity}.
        </h1>
        <p className="mt-1.5 text-[15px] leading-[22px] text-smoke">
          Your offline guide is ready.
        </p>
        <p className="mt-2 inline-flex items-center gap-1.5 text-[11.5px] font-medium text-smoke">
          <span className="h-1 w-1 rounded-full bg-steel-soft" />
          Saved offline · works without internet
        </p>
      </header>

      {/* Body */}
      <main className="flex flex-col gap-4 px-6 py-6 pb-32">
        {/* Hero: Hotel address — the most useful card in the app */}
        <section className="rounded-3xl border border-border-default bg-slate p-5 shadow-card">
          <div className="mb-5 flex items-start justify-between">
            <h2 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-smoke">
              Hotel address
            </h2>
            <MapPin size={18} className="text-smoke" />
          </div>
          {hasHotelAddress ? (
            <>
              <div className="mb-5">
                <p
                  lang={hotel.addressLocal ? phraseLang.bcp47 || undefined : undefined}
                  className="font-display text-[32px] font-bold leading-[42px] tracking-[-0.005em] text-mist"
                >
                  {bigAddress}
                </p>
                {hotel.name && (
                  <p className="mt-3 font-display text-[18px] font-semibold tracking-[-0.005em] text-fog">
                    {hotel.name}
                  </p>
                )}
                {hotel.roman && (
                  <p className="mt-1 text-[13px] leading-[18px] text-smoke">{hotel.roman}</p>
                )}
                {hotel.addressLocal && hotel.addressEn && (
                  <p className="text-[13px] leading-[18px] text-smoke">{hotel.addressEn}</p>
                )}
              </div>
              <button
                onClick={() => setShowDriver(true)}
                className="tappable flex h-[52px] w-full items-center justify-center gap-2.5 rounded-full bg-mist text-[14px] font-semibold leading-[18px] text-ink shadow-card"
              >
                <Taxi size={18} weight="fill" />
                Show to driver
              </button>
            </>
          ) : (
            <div className="rounded-2xl border border-dashed border-border-default bg-midnight/60 p-5 text-center">
              <Bed size={22} className="mx-auto text-smoke" />
              <p className="mt-2 text-[14px] font-medium text-fog">
                Save your hotel address here once you book.
              </p>
              <p className="mt-1 text-[12px] text-smoke">
                We’ll keep it offline in {hotel.city} for taxi drivers.
              </p>
            </div>
          )}
        </section>

        {/* Bento grid */}
        <section className="grid grid-cols-2 gap-3">
          {/* Transit — full-width tile */}
          <button
            onClick={() => setShowTransit(true)}
            className="tappable border-trans relative col-span-2 h-[180px] overflow-hidden rounded-2xl border border-border-default bg-midnight text-left shadow-card"
          >
            <DestinationImage
              src={METRO_BG}
              query={`${heroCity} metro transit station`}
              place={heroCity}
              className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.32] mix-blend-luminosity"
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'linear-gradient(0deg, rgba(19,29,42,1) 0%, rgba(19,29,42,0.78) 50%, rgba(19,29,42,0.10) 100%)',
              }}
            />
            <div className="relative z-10 flex h-full flex-col justify-end p-5">
              <div className="flex items-end justify-between">
                <div>
                  <TrainSimple size={20} className="mb-1.5 text-mist" />
                  <h3 className="font-display text-[20px] font-semibold tracking-[-0.005em] text-mist">
                    {heroCity} transit
                  </h3>
                  <p className="mt-1 text-[11.5px] font-medium leading-[16px] text-fog">
                    {arrivalAirport.code ? `${arrivalAirport.code} → city centre` : 'Routes & passes'}
                  </p>
                  <p className="mt-1 inline-flex items-center gap-1 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-steel-soft">
                    <CloudSlash size={10} weight="fill" />
                    Saved offline
                  </p>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.07] text-mist backdrop-blur-md">
                  <ArrowsOut size={16} weight="bold" />
                </span>
              </div>
            </div>
          </button>

          {/* Currency */}
          <div className="flex h-[140px] flex-col justify-between rounded-2xl border border-border-default bg-slate p-4 shadow-card">
            <CurrencyDollarSimple size={20} className="text-smoke" />
            <div>
              <h3 className="font-display text-[16px] font-semibold tracking-[-0.005em] text-mist">
                Currency
              </h3>
              <p className="mt-1.5 text-[11px] text-smoke">1 USD =</p>
              <p className="font-display text-[22px] font-bold leading-none tracking-[-0.01em] text-mist">
                {currency.symbol}
                {formatRate(currency.usdRate)}
                <span className="ml-1 text-[12px] font-medium text-fog">{currency.code}</span>
              </p>
            </div>
          </div>

          {/* Entry / visa */}
          <div className="flex h-[140px] flex-col justify-between rounded-2xl border border-border-default bg-slate p-4 shadow-card">
            <Eye size={20} className="text-smoke" />
            <div>
              <h3 className="font-display text-[16px] font-semibold tracking-[-0.005em] text-mist">
                Entry
              </h3>
              <p className="mt-1.5 line-clamp-2 font-display text-[17px] font-bold leading-[21px] tracking-[-0.005em] text-mist">
                {plan.visaLabel}
              </p>
              <p className="mt-1 text-[11px] text-smoke">Confirm official rules</p>
            </div>
          </div>
        </section>

        {/* Embassy & emergency — full-width card */}
        <section className="rounded-2xl border border-border-default bg-slate p-5 shadow-card">
          <div className="mb-4 flex items-start justify-between">
            <div>
              <h3 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-smoke">
                Embassy &amp; emergency
              </h3>
              <p className="mt-1 text-[12.5px] text-fog">
                Saved for offline use. Tap to call.
              </p>
            </div>
            <Lifebuoy size={20} className="text-warm-gray" />
          </div>
          <ul className="divide-y divide-white/[0.06]">
            {plan.emergencyContacts.map((c) => (
              <li
                key={`${c.label}-${c.number}`}
                className="flex items-center justify-between gap-3 py-3 first:pt-0 last:pb-0"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                      c.kind === 'urgent'
                        ? 'bg-warm-gray/[0.18] text-warm-gray'
                        : 'bg-white/[0.07] text-fog'
                    }`}
                  >
                    {c.kind === 'urgent' ? (
                      <ShieldWarning size={16} weight="fill" />
                    ) : (
                      <Buildings size={16} weight="fill" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[13.5px] font-semibold leading-[18px] text-mist">
                      {c.label}
                    </div>
                    <div className="text-[11.5px] text-smoke">
                      {c.kind === 'urgent' ? 'Urgent help' : 'Consular services'}
                    </div>
                  </div>
                </div>
                <a
                  href={`tel:${c.number.replace(/\s+/g, '')}`}
                  className="tappable inline-flex h-9 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-white/[0.08] bg-white/[0.05] px-3.5 text-[12.5px] font-semibold tabular-nums text-mist"
                >
                  <Phone size={13} weight="fill" className="shrink-0" />
                  {c.number}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Phrases */}
        {plan.phrases.length > 0 && (
          <section>
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-smoke">
                {phraseLang.name} phrases
              </h3>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-smoke">
                <CloudSlash size={12} />
                Saved offline
              </span>
            </div>
            <div className="space-y-2">
              {plan.phrases.map((g) => {
                const open = openGroup === g.group
                const Icon = GROUP_ICON[g.group] ?? Translate
                return (
                  <div
                    key={g.group}
                    className="overflow-hidden rounded-2xl border border-border-default bg-slate shadow-card"
                  >
                    <button
                      onClick={() => setOpenGroup(open ? '' : g.group)}
                      className="tappable flex w-full items-center gap-3 px-4 py-3.5 text-left"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.07] text-fog">
                        <Icon size={16} />
                      </div>
                      <div className="flex-1 text-[15px] font-semibold text-mist">
                        {g.group}
                      </div>
                      <div className="text-[11px] font-medium text-smoke">
                        {g.items.length} phrases
                      </div>
                      {open ? (
                        <CaretDown size={14} className="text-smoke" />
                      ) : (
                        <CaretRight size={14} className="text-smoke" />
                      )}
                    </button>
                    {open && (
                      <ul className="border-t border-white/[0.06]">
                        {g.items.map((p, i) => (
                          <PhraseRow
                            key={i}
                            phrase={p}
                            plan={plan}
                            last={i === g.items.length - 1}
                          />
                        ))}
                      </ul>
                    )}
                  </div>
                )
              })}
            </div>
          </section>
        )}
      </main>
    </div>

    {/* Show-to-driver — full-screen, high-contrast, the most useful screen
        when you step off the plane. Tap anywhere to dismiss. */}
    {showDriver && (
      <DriverScreen
        hotel={hotel}
        bcp47={phraseLang.bcp47}
        onClose={() => setShowDriver(false)}
      />
    )}

    {/* Transit guidance */}
    <Sheet
      open={showTransit}
      onClose={() => setShowTransit(false)}
      eyebrow="Saved offline"
      title={`${heroCity} transit`}
    >
      <TransitGuide
        city={heroCity}
        airport={arrivalAirport}
        currencyCode={currency.code}
      />
    </Sheet>
    </>
  )
}

/* -------------------------------------------------------------------------- */
/*  Show-to-driver — the signature offline card, full screen                  */
/* -------------------------------------------------------------------------- */

function DriverScreen({
  hotel,
  bcp47,
  onClose,
}: {
  hotel: TripPlan['hotel']
  bcp47: string
  onClose: () => void
}) {
  const local = hotel.addressLocal || hotel.addressEn
  const hasLocal = Boolean(hotel.addressLocal)
  return (
    <div className="absolute inset-0 z-50 flex flex-col bg-ink no-select">
      <div className="flex items-center justify-between px-6 pt-[64px]">
        <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-smoke">
          <Taxi size={14} weight="fill" className="text-steel-soft" />
          Show this to your driver
        </span>
        <button
          onClick={onClose}
          aria-label="Close"
          className="tappable flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.07] text-fog"
        >
          <X size={18} weight="bold" />
        </button>
      </div>

      <button
        onClick={onClose}
        className="scale-in flex flex-1 flex-col items-center justify-center px-7 text-center"
      >
        {hotel.name && (
          <div className="mb-5 font-display text-[17px] font-semibold text-fog">
            {hotel.name}
          </div>
        )}
        <p
          lang={hasLocal ? bcp47 || undefined : undefined}
          className="font-display text-[40px] font-bold leading-[50px] tracking-[-0.01em] text-mist"
        >
          {local}
        </p>
        {hotel.roman && (
          <p className="mt-4 text-[16px] leading-[22px] text-smoke">{hotel.roman}</p>
        )}
        {hasLocal && hotel.addressEn && (
          <p className="mt-2 text-[14px] leading-[20px] text-smoke">{hotel.addressEn}</p>
        )}
      </button>

      <div className="flex items-center justify-center gap-2 px-6 pb-10 text-[12px] text-smoke">
        <CloudSlash size={13} weight="fill" />
        Saved offline · tap anywhere to close
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Transit guide — honest, general arrival guidance (no invented specifics)  */
/* -------------------------------------------------------------------------- */

function TransitGuide({
  city,
  airport,
  currencyCode,
}: {
  city: string
  airport: { code: string; city: string }
  currencyCode: string
}) {
  const fromLabel = airport.code || airport.city || 'the airport'
  const options: Array<{ icon: PIcon; title: string; detail: string }> = [
    {
      icon: TrainSimple,
      title: 'Airport train or bus',
      detail: `Usually the cheapest way from ${fromLabel} into ${city}. Buy a ticket or stored-value card at the station kiosk.`,
    },
    {
      icon: Taxi,
      title: 'Official taxi rank',
      detail: 'Use the marked rank outside arrivals. Agree the fare or confirm the meter is on before you set off.',
    },
    {
      icon: MapPin,
      title: 'Ride-hailing',
      detail: 'If a ride-hailing app is common here, set your pickup to the rideshare zone, not the taxi rank.',
    },
  ]
  return (
    <>
      <p className="text-[13.5px] leading-[20px] text-fog">
        How travellers usually get from {fromLabel} to central {city}. Confirm
        live times and prices when you land.
      </p>
      <div className="mt-4 space-y-2.5">
        {options.map((o) => {
          const Icon = o.icon
          return (
            <div
              key={o.title}
              className="flex gap-3 rounded-2xl border border-border-default bg-slate p-4"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.07] text-fog">
                <Icon size={17} weight="fill" />
              </span>
              <div className="min-w-0">
                <div className="text-[14px] font-semibold text-mist">{o.title}</div>
                <div className="mt-0.5 text-[12.5px] leading-[18px] text-smoke">
                  {o.detail}
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-2xl border border-border-default bg-midnight px-4 py-3 text-[12.5px] text-smoke">
        <Wallet size={15} className="shrink-0 text-smoke" />
        Keep small {currencyCode || 'local'} notes for fares — not every operator
        takes cards.
      </div>
    </>
  )
}

function PhraseRow({
  phrase,
  plan,
  last,
}: {
  phrase: { en: string; local: string; roman?: string }
  plan: TripPlan
  last: boolean
}) {
  const hasLocal = Boolean(phrase.local)
  return (
    <li className={`px-4 py-3.5 ${last ? '' : 'border-b border-white/[0.05]'}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          {hasLocal ? (
            <>
              <div className="text-[12px] font-medium text-fog">{phrase.en}</div>
              <div
                lang={plan.phraseLang.bcp47 || undefined}
                className="mt-1 font-display text-[18px] font-semibold leading-tight text-mist"
              >
                {phrase.local}
              </div>
              {phrase.roman && (
                <div className="mt-0.5 text-[11.5px] text-smoke">{phrase.roman}</div>
              )}
            </>
          ) : (
            <div className="text-[15px] font-medium leading-snug text-mist">{phrase.en}</div>
          )}
        </div>
        <button
          aria-label="Play"
          onClick={() =>
            speak(
              hasLocal ? phrase.local : phrase.en,
              hasLocal ? plan.phraseLang.bcp47 : 'en-US',
            )
          }
          className="tappable mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.07] text-fog"
        >
          <SpeakerHigh size={14} />
        </button>
      </div>
    </li>
  )
}
