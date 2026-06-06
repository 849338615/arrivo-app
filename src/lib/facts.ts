/* -------------------------------------------------------------------------- */
/*  Offline country facts.                                                    */
/*                                                                            */
/*  Reads from the bundled FACTS_DATA snapshot (generated once from free      */
/*  public APIs) — no network at runtime. Drives the templated plan for any   */
/*  country that doesn't ship a curated plan.                                 */
/* -------------------------------------------------------------------------- */

import { countryByCode, flagEmoji } from './countries'
import type { Currency } from './plan'
import { FACTS_DATA } from './factsData'

export type CountryFacts = {
  code: string
  name: string
  capital: string
  region: string
  flag: string
  currency: Currency
  languages: string[]
  primaryLanguage: string
}

export function factsFor(code: string, fallbackName?: string): CountryFacts {
  const cc = (code || '').toUpperCase()
  const row = countryByCode(cc)
  const name = row?.name ?? fallbackName ?? cc
  const f = FACTS_DATA[cc]
  const languages = f?.languages?.length ? f.languages : []
  return {
    code: cc,
    name,
    capital: f?.capital || 'the capital',
    region: f?.region || '',
    flag: f?.flag || flagEmoji(cc),
    currency: {
      code: f?.currencyCode || 'USD',
      symbol: f?.currencySymbol || '$',
      usdRate: f?.usdRate && f.usdRate > 0 ? f.usdRate : 1,
    },
    languages,
    primaryLanguage: languages[0] ?? 'the local language',
  }
}
