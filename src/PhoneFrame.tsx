import type { ReactNode } from 'react'

/* iPhone 15 Pro shell — 393 × 852, with notch + dynamic island */
export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden sm:p-8">
      {/* Frame — only renders on >= 480 wide; on phones we go fullscreen */}
      <div className="hidden h-[852px] max-h-[calc(100vh-32px)] w-[393px] max-w-full sm:block">
        <div className="relative h-full w-full overflow-hidden rounded-[58px] border border-white/10 bg-ink shadow-[0_50px_120px_-20px_rgba(0,0,0,0.75),0_0_0_10px_#0b0d12,0_0_0_11px_#1a1d24]">
          {/* Dynamic island */}
          <div className="absolute left-1/2 top-3 z-30 h-[34px] w-[120px] -translate-x-1/2 rounded-full bg-black" />
          {/* Status bar */}
          <StatusBar />
          {/* Body */}
          <div className="absolute inset-0 overflow-hidden">{children}</div>
        </div>
      </div>

      {/* Mobile / small viewport — true fullscreen. No simulated status bar
          here: the real device already shows one, so drawing a second "9:41"
          bar only duplicates it. Screens carry their own safe-area-aware top
          spacing, and content sits flush to the edges. */}
      <div className="relative block h-full w-full sm:hidden">
        <div className="absolute inset-0">{children}</div>
      </div>
    </div>
  )
}

function StatusBar({ mobile = false }: { mobile?: boolean }) {
  return (
    <div
      className={`pointer-events-none absolute left-0 right-0 top-0 z-20 flex h-[59px] items-center justify-between px-7 text-[14px] font-semibold text-mist ${
        mobile ? 'pt-[env(safe-area-inset-top)]' : ''
      }`}
    >
      <span className="tracking-tight">9:41</span>
      <div className="flex items-center gap-1.5">
        <SignalIcon />
        <WifiIcon />
        <BatteryIcon />
      </div>
    </div>
  )
}

function SignalIcon() {
  /* 4 equal-width bars, increasing height, bottom-aligned — iOS cellular */
  return (
    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden>
      <rect x="0" y="8" width="3" height="3.5" rx="1" fill="currentColor" />
      <rect x="4.7" y="5.8" width="3" height="5.7" rx="1" fill="currentColor" />
      <rect x="9.4" y="3.3" width="3" height="8.2" rx="1" fill="currentColor" />
      <rect x="14.1" y="0.8" width="3" height="10.7" rx="1" fill="currentColor" />
    </svg>
  )
}

function WifiIcon() {
  /* Three concentric arcs + dot around (8, 10.2), fanning ±48° to fill the
     full box height — matches the weight of the signal bars. iOS wifi. */
  return (
    <svg width="17" height="12" viewBox="0 0 16 12" fill="none" aria-hidden>
      <path
        d="M1.76 4.58A8.4 8.4 0 0114.24 4.58"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M3.84 6.45A5.6 5.6 0 0112.16 6.45"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M5.85 8.26A2.9 2.9 0 0110.15 8.26"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <circle cx="8" cy="10.2" r="1.25" fill="currentColor" />
    </svg>
  )
}

function BatteryIcon() {
  /* Translucent casing + solid fill + terminal nub — iOS battery (near full) */
  return (
    <svg width="27" height="12" viewBox="0 0 27 12" fill="none" aria-hidden>
      <rect
        x="0.5"
        y="0.5"
        width="23"
        height="11"
        rx="3.4"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.4"
      />
      <rect x="2" y="2" width="20" height="8" rx="1.8" fill="currentColor" />
      <path
        d="M25 4.2a1 1 0 011 1v1.6a1 1 0 01-1 1V4.2z"
        fill="currentColor"
        opacity="0.4"
      />
    </svg>
  )
}
