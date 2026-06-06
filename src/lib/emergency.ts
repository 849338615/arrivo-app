/* -------------------------------------------------------------------------- */
/*  Vetted emergency numbers, keyed by ISO 3166-1 alpha-2.                    */
/*                                                                            */
/*  SAFETY-CRITICAL: this data is hand-curated and must NEVER be generated    */
/*  by the LLM. Countries not listed fall back to GSM-universal 112, which    */
/*  routes to local emergency services on mobile networks across most of      */
/*  the world.                                                                */
/* -------------------------------------------------------------------------- */

import type { EmergencyContact } from './plan'

type Numbers = {
  general?: string
  police?: string
  ambulance?: string
  fire?: string
}

const DATA: Record<string, Numbers> = {
  // North America
  US: { general: '911' },
  CA: { general: '911' },
  MX: { general: '911' },
  // Europe — 112 reaches police/ambulance/fire across the EU/EEA
  GB: { general: '999', police: '999', ambulance: '999' },
  IE: { general: '112' },
  FR: { general: '112', police: '17', ambulance: '15', fire: '18' },
  DE: { general: '112', police: '110' },
  IT: { general: '112', police: '113', ambulance: '118' },
  ES: { general: '112' },
  PT: { general: '112' },
  NL: { general: '112' },
  BE: { general: '112' },
  CH: { general: '112', police: '117', ambulance: '144' },
  AT: { general: '112' },
  GR: { general: '112', police: '100', ambulance: '166' },
  SE: { general: '112' },
  NO: { general: '112', police: '112', ambulance: '113' },
  DK: { general: '112' },
  FI: { general: '112' },
  IS: { general: '112' },
  PL: { general: '112' },
  CZ: { general: '112' },
  HU: { general: '112' },
  RO: { general: '112' },
  HR: { general: '112' },
  RS: { general: '112', police: '192', ambulance: '194' },
  RU: { general: '112', police: '102', ambulance: '103' },
  UA: { general: '112', police: '102', ambulance: '103' },
  TR: { general: '112' },
  // Asia
  CN: { police: '110', ambulance: '120', fire: '119' },
  JP: { police: '110', ambulance: '119', fire: '119' },
  KR: { police: '112', ambulance: '119', fire: '119' },
  TW: { police: '110', ambulance: '119' },
  HK: { general: '999' },
  IN: { general: '112', police: '100', ambulance: '102' },
  TH: { general: '191', police: '191', ambulance: '1669' },
  VN: { police: '113', ambulance: '115', fire: '114' },
  ID: { general: '112', police: '110', ambulance: '118' },
  MY: { general: '999', police: '999' },
  SG: { police: '999', ambulance: '995', fire: '995' },
  PH: { general: '911' },
  NP: { police: '100', ambulance: '102' },
  LK: { general: '119', police: '119', ambulance: '1990' },
  KH: { police: '117', ambulance: '119', fire: '118' },
  MM: { general: '999' },
  // Middle East
  AE: { general: '112', police: '999', ambulance: '998' },
  SA: { police: '999', ambulance: '997', fire: '998' },
  QA: { general: '999' },
  IL: { police: '100', ambulance: '101', fire: '102' },
  JO: { general: '911' },
  // Africa
  EG: { police: '122', ambulance: '123', fire: '180' },
  MA: { police: '19', ambulance: '15' },
  ZA: { general: '112', police: '10111', ambulance: '10177' },
  KE: { general: '999', police: '999' },
  TZ: { general: '112', police: '112' },
  NG: { general: '112', police: '112' },
  GH: { general: '112', police: '191' },
  // Oceania
  AU: { general: '000' },
  NZ: { general: '111' },
  FJ: { general: '911', police: '917', ambulance: '911' },
  // Latin America
  BR: { police: '190', ambulance: '192', fire: '193' },
  AR: { general: '911', police: '911', ambulance: '107' },
  CL: { police: '133', ambulance: '131', fire: '132' },
  CO: { general: '123' },
  PE: { police: '105', ambulance: '106', fire: '116' },
  EC: { general: '911' },
  BO: { police: '110', ambulance: '118' },
  UY: { general: '911', police: '911', ambulance: '105' },
  CR: { general: '911' },
  PA: { general: '911' },
  GT: { general: '110', ambulance: '123' },
  DO: { general: '911' },
  CU: { police: '106', ambulance: '104' },
}

const STATE_DEPT_LINE = '+1 888 407 4747' // US citizens overseas emergency line

/**
 * Build the urgent + consular contacts for a country. Local numbers come from
 * the vetted table (or 112 fallback); the consular line is the official US
 * Bureau of Consular Affairs number when the traveler is from the US.
 */
export function emergencyContactsFor(
  code: string,
  homeCountry = 'United States',
): EmergencyContact[] {
  const n = DATA[code?.toUpperCase?.() ?? ''] ?? { general: '112' }
  const out: EmergencyContact[] = []

  if (n.police && n.ambulance && n.police !== n.ambulance) {
    out.push({ label: 'Police', number: n.police, kind: 'urgent' })
    out.push({ label: 'Medical', number: n.ambulance, kind: 'urgent' })
    if (n.fire && n.fire !== n.police && n.fire !== n.ambulance) {
      out.push({ label: 'Fire', number: n.fire, kind: 'urgent' })
    }
  } else {
    const general = n.general ?? n.police ?? n.ambulance ?? '112'
    out.push({ label: 'Emergency', number: general, kind: 'urgent' })
    if (n.police && n.police !== general) {
      out.push({ label: 'Police', number: n.police, kind: 'urgent' })
    }
  }

  if (/united states|usa|u\.s\.|america/i.test(homeCountry)) {
    out.push({
      label: 'U.S. citizens abroad · State Dept',
      number: STATE_DEPT_LINE,
      kind: 'consular',
    })
  }
  return out
}

/** True when we have country-specific data (vs. the 112 fallback). */
export function hasVettedEmergency(code: string): boolean {
  return Boolean(DATA[code?.toUpperCase?.() ?? ''])
}
