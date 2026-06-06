# Arrivo Design System

**Tagline:** Your whole trip, ready.  
**Theme:** Midnight Mist  
**Product type:** Country-specific international trip readiness planner  
**Primary audience:** First-time or overwhelmed international travelers

---

## 1. Product North Star

### Brand promise
Arrivo replaces chaotic international travel planning with one personalized, sequenced readiness plan that helps travelers know what to do, when to do it, and what to have ready when they land.

### Core product idea
A traveler picks a country, answers a short set of practical questions, and Arrivo generates a country-specific plan covering visa, flights, accommodation, transport, money, communication, cultural prep, pre-departure tasks, and an offline Landing Day Hub.

### Positioning
Arrivo is not another itinerary app. It is a **country-specific readiness planner** for the moments before, during, and immediately after arrival.

### Product POV
The traveler does not need more tabs, generic inspiration, or another booking funnel. They need a clear sequence:

1. What matters now
2. What can wait
3. What needs to be saved before landing
4. What to open when they arrive

### Experience principles

1. **Warm in emotion, cool in interface**  
   Let travel photography carry warmth. Keep the interface monochromatic, calm, and professional.

2. **Comprehensive, not cluttered**  
   The product should make the traveler feel everything is covered without overwhelming them.

3. **Sequenced, not scattered**  
   Every screen should clarify what to do next.

4. **Practical, not therapeutic**  
   Reduce anxiety through structure, clarity, and preparedness, not wellness language.

5. **Arrival-ready**  
   The Landing Day Hub must feel instantly usable offline.

---

## 2. Visual Theme Direction

### Theme name
**Midnight Mist**

### Theme summary
A restrained, cinematic, monochromatic travel interface built from deep navy, slate, mist, and steel-blue accents. Sunset warmth appears in photography, not primary UI controls.

### Desired feeling
Arrivo should feel like a premium travel companion: composed, international, polished, and trustworthy.

### Design keywords
Cinematic, monochromatic, premium, organized, calm, editorial, prepared, international, mobile-native.

### Inspiration translation
The original visual inspiration uses warm sunset imagery, but the UI itself is mostly dark, translucent, and restrained. Arrivo should follow that logic:

- Destination photos can be warm.
- UI panels should stay cool and neutral.
- Buttons should rely on contrast, not saturated color.
- Active states should be subtle and structural.
- Avoid neon glows and heavy orange UI.

### What to avoid

- Bright orange buttons across the app
- Neon green active states
- Generic map-app blue
- Overly beige wellness-app softness
- Corporate dashboard density
- Pure black backgrounds
- Low-contrast gray text on glass

---

## 3. Brand Identity

### Name
**Arrivo**

### Tagline
**Your whole trip, ready.**

### Logo concept
A refined arrival-route mark: a rounded path line resolving into a destination point, horizon, or subtle arrival marker. The mark should suggest movement becoming readiness.

### Logo behavior

- Use the full wordmark on splash, cover, and major brand moments.
- Use the app mark alone in compact headers, loading states, and navigation.
- Avoid overly literal globe marks unless simplified heavily.
- The logo should feel premium, clear, and app-icon friendly.

### Brand personality

| Trait | UI expression |
|---|---|
| Prepared | Progress, status, and next-step clarity |
| Cinematic | Destination imagery and atmospheric overlays |
| Professional | Restrained palette and clean type |
| Trustworthy | High contrast, consistent components, predictable flow |
| Country-specific | Local details, phrases, logistics, and arrival context |

---

## 4. Color System — Midnight Mist

### Color strategy
Arrivo should use a **cool monochromatic UI system**. The warmth comes from destination imagery, not from system colors.

The interface should be built primarily from:

- deep navy backgrounds
- slate cards
- mist text
- fog secondary text
- steel-blue accents
- light CTAs for high contrast

### Core tokens

| Token | Hex | Use |
|---|---:|---|
| `--ink` | `#0E1520` | App background |
| `--midnight` | `#131D2A` | Primary surfaces |
| `--slate` | `#1B2736` | Cards and panels |
| `--slate-2` | `#243244` | Elevated or selected surfaces |
| `--border` | `#334255` | Dividers and outlines |
| `--mist` | `#F1F4F7` | Primary text and high-emphasis surfaces |
| `--fog` | `#C5CED8` | Secondary text |
| `--smoke` | `#8D99A8` | Metadata and tertiary text |
| `--steel` | `#6B7D92` | Primary accent |
| `--steel-soft` | `#8193A8` | Active, hover, and progress accent |
| `--glass` | `rgba(19,29,42,0.72)` | Glass overlays |
| `--glass-strong` | `rgba(14,21,32,0.86)` | Strong overlays and nav |
| `--white-glass` | `rgba(255,255,255,0.07)` | Subtle control fills |

### Semantic tokens

| Token | Value | Use |
|---|---:|---|
| `background/app` | `#0E1520` | Root app background |
| `background/surface` | `#131D2A` | Main sections and screen surfaces |
| `background/card` | `#1B2736` | Standard cards |
| `background/elevated` | `#243244` | Selected cards, raised cards, active panels |
| `background/glass` | `rgba(19,29,42,0.72)` | Frosted overlays over imagery |
| `background/glass-strong` | `rgba(14,21,32,0.86)` | High-readability overlays |
| `text/primary` | `#F1F4F7` | Main text |
| `text/secondary` | `#C5CED8` | Supporting copy |
| `text/muted` | `#8D99A8` | Metadata and tertiary labels |
| `text/inverse` | `#0E1520` | Text on light CTA |
| `border/default` | `#334255` | Card borders and dividers |
| `border/subtle` | `rgba(255,255,255,0.08)` | Glass borders |
| `border/active` | `#8193A8` | Selected or focused state |
| `accent/primary` | `#6B7D92` | Progress, active UI, tabs |
| `accent/active` | `#8193A8` | Stronger active state |
| `button/primary/bg` | `#F1F4F7` | Main CTA background |
| `button/primary/text` | `#0E1520` | Main CTA text |
| `button/secondary/bg` | `rgba(255,255,255,0.07)` | Secondary CTA background |
| `button/secondary/text` | `#F1F4F7` | Secondary CTA text |

### Status colors

Use restrained status colors. Do not rely on color alone; pair status with icon, label, or shape.

| Status | Color | Treatment |
|---|---:|---|
| Ready / active | `#8193A8` | Filled dot, active line, selected border |
| Upcoming | `#5E6D80` | Muted dot or low-fill chip |
| Complete | `#A8B5C3` | Check icon plus subtle fill |
| Critical | `#9B8B80` | Muted warm-gray; use sparingly |
| Offline | `#C5CED8` | Cloud-slash/check icon plus label |
| Disabled | `#566273` | Low-emphasis text or control |

### Warmth rule
Sunset tones should live primarily in:

- destination photos
- photo grading
- optional deck accents
- rare editorial highlights

Avoid using sunset orange for:

- primary buttons
- selected chips
- progress bars
- navigation highlights
- frequent UI states

### Recommended color ratio

- 50% ink / midnight backgrounds
- 25% slate cards and glass surfaces
- 15% destination imagery
- 7% mist / fog text
- 3% steel accents

---

## 5. Accessibility and Contrast

### High-contrast pairings

Use these pairings for critical text and controls:

| Foreground | Background | Use |
|---|---|---|
| `#F1F4F7` | `#0E1520` | Primary text on app background |
| `#F1F4F7` | `#131D2A` | Primary text on surfaces |
| `#F1F4F7` | `#1B2736` | Primary text on cards |
| `#0E1520` | `#F1F4F7` | Primary CTA text |
| `#C5CED8` | `#0E1520` | Secondary text on app background |

### Accessibility rules

- Do not use `smoke` for essential text under 14px.
- Use `mist` for all primary headings and critical information.
- Use `fog` for supporting copy.
- Use `smoke` only for metadata, timestamps, helper labels, or inactive states.
- All text over photography requires a dark gradient or glass-strong panel.
- Do not communicate task state by color alone.
- Use icons, labels, progress text, and spacing to reinforce state.

### Image readability rules

For image-backed screens, use a gradient overlay:

```css
background:
  linear-gradient(
    180deg,
    rgba(14, 21, 32, 0.10) 0%,
    rgba(14, 21, 32, 0.56) 48%,
    rgba(14, 21, 32, 0.94) 100%
  ),
  url(destination-image.jpg);
background-size: cover;
background-position: center;
```

For busy photos, place text inside a strong glass panel:

```css
background: rgba(14, 21, 32, 0.86);
backdrop-filter: blur(24px);
border: 1px solid rgba(255, 255, 255, 0.08);
```

---

## 6. Photography System

### Role of photography
Photography gives Arrivo emotional warmth and destination specificity. The UI should not compete with the imagery.

### Image style

Use imagery that feels cinematic and practical:

- airports and arrival halls
- skyline at dusk or blue hour
- trains and transit
- hotel/taxi moments
- street-level city scenes
- cultural landmarks with atmosphere
- food markets and local context

### China V1 photography direction

Recommended image subjects:

- Shanghai skyline at night or blue hour
- PVG arrival hall
- Beijing hutong street scene
- Xi’an city wall or train station
- high-speed rail platform
- hotel exterior or lobby
- Mandarin signage
- taxi or metro context

### Image treatment

- Slightly cool shadows
- Warm highlights retained in the image only
- Dark overlay for readability
- Avoid oversaturated travel-poster colors
- Avoid influencer-style vacation imagery

---

## 7. Typography

### Font families

| Role | Font | Notes |
|---|---|---|
| Display | Sora or Manrope | Premium geometric personality |
| Body | Inter | Legible, practical, mobile-native |
| Mandarin | Noto Sans SC or Source Han Sans | Chinese characters and pinyin |
| Numbers / metadata | Inter | Times, airport codes, counts |

### Type scale

| Token | Size | Line height | Weight | Use |
|---|---:|---:|---:|---|
| `display/hero` | 44 | 52 | 700 | Splash and title moments |
| `display/xl` | 36 | 44 | 700 | Destination hero headers |
| `display/lg` | 30 | 38 | 700 | Dashboard reveal, Landing Hub hero |
| `heading/lg` | 24 | 32 | 700 | Major screen sections |
| `heading/md` | 20 | 28 | 650 | Card titles, briefing titles |
| `heading/sm` | 18 | 24 | 650 | Section labels |
| `body/lg` | 18 | 28 | 400 | Onboarding prompts and important body copy |
| `body/md` | 16 | 24 | 400 | Default body |
| `body/sm` | 14 | 20 | 400 | Helper copy and compact cards |
| `label/md` | 14 | 18 | 650 | Buttons, tabs, chips |
| `label/sm` | 12 | 16 | 650 | Status labels and metadata |
| `caption` | 11 | 14 | 500 | Tiny metadata only |
| `airport/code` | 34 | 38 | 700 | Route cards and transit details |

### Typography rules

- Use sentence case for most UI copy.
- Use uppercase only for small system labels, such as `OFFLINE`, `READY NOW`, or airport codes.
- Use `mist` for headings and primary text.
- Use `fog` for secondary text.
- Do not use low-contrast text on image headers.
- Mandarin taxi-facing content should be at least 24px.

---

## 8. Spacing, Layout, and Grid

### Mobile frame

Target device: **iPhone 15 Pro**

- Frame: 393 × 852
- Safe area top: 59
- Safe area bottom: 34
- Horizontal margin: 24
- Card padding: 16–20
- Default section gap: 24
- Bottom nav height: 76 plus safe area

### Spacing scale

| Token | Value | Use |
|---|---:|---|
| `space/2xs` | 4 | Icon gaps, tiny metadata |
| `space/xs` | 8 | Compact internal spacing |
| `space/sm` | 12 | Rows, form spacing |
| `space/md` | 16 | Default card padding |
| `space/lg` | 24 | Section spacing |
| `space/xl` | 32 | Hero and screen rhythm |
| `space/2xl` | 48 | Onboarding and reveal moments |
| `space/3xl` | 64 | Deck and presentation spacing |

### Layout rules

- Use full-bleed imagery for splash and selected hero moments.
- Use dark cards and glass panels for structured content.
- Keep onboarding to one question per screen.
- Keep dashboard dense enough to feel comprehensive, but organized enough to show the next action immediately.
- Landing Day Hub should trade cinematic effect for readability.

---

## 9. Shape, Glass, Borders, and Elevation

### Radius tokens

| Token | Value | Use |
|---|---:|---|
| `radius/xs` | 6 | Small tags and compact controls |
| `radius/sm` | 10 | Inputs and chips |
| `radius/md` | 16 | Rows and itinerary cards |
| `radius/lg` | 24 | Cards and sheets |
| `radius/xl` | 30 | Large glass panels |
| `radius/full` | 999 | Pills, avatars, primary buttons |

### Glass styles

| Token | Style | Use |
|---|---|---|
| `glass/default` | `rgba(19,29,42,0.72)` + blur 20 | Cards over images |
| `glass/strong` | `rgba(14,21,32,0.86)` + blur 24 | Text-heavy overlays |
| `glass/light` | `rgba(255,255,255,0.07)` + blur 18 | Inputs and secondary controls |

### Elevation tokens

| Token | Shadow | Use |
|---|---|---|
| `elevation/none` | none | Flat surfaces |
| `elevation/card` | `0 10px 28px rgba(0,0,0,0.22)` | Standard cards |
| `elevation/lifted` | `0 18px 44px rgba(0,0,0,0.32)` | Active or tapped cards |
| `elevation/nav` | `0 -12px 36px rgba(0,0,0,0.30)` | Bottom navigation |
| `elevation/modal` | `0 24px 70px rgba(0,0,0,0.42)` | Sheets and modals |

### Border rules

- Use subtle borders instead of bright outlines.
- Default border: `#334255`
- Glass border: `rgba(255,255,255,0.08)`
- Active border: `#8193A8`
- Avoid heavy glows.
- Avoid saturated orange outlines.

---

## 10. Component System

## 10.1 Buttons

### Primary button

Use for the main action on a screen.

```css
height: 56px;
border-radius: 999px;
padding: 0 24px;
background: #F1F4F7;
color: #0E1520;
font: 650 14px/18px Inter;
box-shadow: 0 10px 28px rgba(0,0,0,0.22);
```

Examples:

- Continue
- Generate my plan
- Start with visa
- Open Landing Day Hub

### Primary button states

| State | Style |
|---|---|
| Default | Mist fill, ink text |
| Pressed | Slightly darker mist, reduced shadow |
| Disabled | Slate fill, smoke text |
| Loading | Small spinner or pulsing Arrivo mark |

### Secondary button

Use for lower-priority actions.

```css
height: 52px;
border-radius: 999px;
padding: 0 20px;
background: rgba(255,255,255,0.07);
border: 1px solid #334255;
color: #F1F4F7;
font: 650 14px/18px Inter;
```

Examples:

- Back
- Edit answers
- View later
- Skip for now

### Text button

Use only for low-priority inline actions.

- Text: `fog`
- Hover/active: `mist`
- No underline unless in paragraph text

### Icon button

```css
width: 44px;
height: 44px;
border-radius: 999px;
background: rgba(255,255,255,0.07);
color: #C5CED8;
```

---

## 10.2 Inputs

### Glass search field

```css
height: 52px;
border-radius: 10px;
padding: 0 16px;
background: rgba(255,255,255,0.07);
border: 1px solid #334255;
color: #F1F4F7;
backdrop-filter: blur(18px);
```

Placeholder text: `smoke`

Examples:

- “Where?”
- “Search countries”

### Date picker field

- Surface: `slate`
- Border: `border/default`
- Active border: `steel-soft`
- Text: `mist`
- Helper text: `fog`

### Slider

Use for duration, budget, and preparedness.

| Element | Color |
|---|---|
| Track inactive | `#334255` |
| Track active | `#8193A8` |
| Thumb | `#F1F4F7` |
| Thumb border | `#8193A8` |
| Labels | `#8D99A8` |

Avoid orange slider fills.

### Segmented control

- Container: `glass/light`
- Selected: `slate-2`
- Selected border: `steel-soft`
- Unselected text: `fog`
- Selected text: `mist`

---

## 10.3 Cards

### Base card

```css
border-radius: 24px;
padding: 20px;
background: #1B2736;
border: 1px solid #334255;
box-shadow: 0 10px 28px rgba(0,0,0,0.22);
```

### Glass card

```css
border-radius: 24px;
padding: 20px;
background: rgba(19,29,42,0.72);
backdrop-filter: blur(20px);
border: 1px solid rgba(255,255,255,0.08);
box-shadow: 0 10px 28px rgba(0,0,0,0.22);
```

### Selected card

```css
background: #243244;
border: 1px solid #8193A8;
```

### Destination card

Contains:

- Destination image
- Dark overlay
- Country name
- City label
- Selected icon or check
- Subtle steel border when selected

Selected state:

- Border: `steel-soft`
- Check icon: `mist` on `slate-2`
- No orange glow

### Plan category card

Contains:

- Category icon
- Category name
- Task count
- One next task preview
- Status indicator

Example:

**Visa & documents**  
4 tasks pending  
Ready: Apply for your China L Visa.

### Briefing card

Contains:

- Status chip
- Task title
- Why it matters summary
- Time estimate
- One CTA

### Route card

Used for flights, rail, and city-to-city movement.

```css
border-radius: 16px;
padding: 18px 20px;
background: #1B2736;
border-bottom: 1px solid rgba(255,255,255,0.08);
```

Contains:

- Origin
- Destination
- Transport icon
- Duration/stops
- Status dot
- Expand/collapse control

---

## 10.4 Navigation

### Bottom navigation

Tabs:

1. Plan
2. Briefings
3. Itinerary
4. Landing

Style:

```css
height: 76px;
background: rgba(14,21,32,0.86);
backdrop-filter: blur(24px);
border-top: 1px solid rgba(255,255,255,0.08);
box-shadow: 0 -12px 36px rgba(0,0,0,0.30);
```

Active state:

- Icon: `mist`
- Label: `mist`
- Optional active dot/line: `steel-soft`

Inactive state:

- Icon: `smoke`
- Label: `smoke`

### Header variants

| Header | Use |
|---|---|
| Cinematic splash header | Splash and opening moment |
| Destination hero header | Country/trip overview |
| Dashboard header | Plan reveal and home dashboard |
| Detail header | Briefing and itinerary detail |
| Landing header | Offline hub with status |

---

## 10.5 Progress and Status Components

### Onboarding progress

- Completed: `steel-soft`
- Current: `mist`
- Upcoming: `border/default`
- Keep thin and unobtrusive.

### Trip readiness progress

Shows:

- number of completed or ready steps
- total plan size
- next recommended task

Example:

**0/27 steps**  
Start with your visa briefing.

Progress style:

- Track: `border/default`
- Fill: `steel-soft`
- No neon or orange fill

### Status dot system

| Dot | Meaning |
|---|---|
| Mist dot | Current / selected |
| Steel dot | Ready / active |
| Smoke dot | Upcoming |
| Warm-gray dot | Critical |
| Hollow dot | Future or incomplete |

### Status chips

```css
height: 28px;
border-radius: 999px;
padding: 0 10px;
background: rgba(129,147,168,0.14);
border: 1px solid rgba(129,147,168,0.32);
color: #C5CED8;
font: 650 12px/16px Inter;
```

Examples:

- Ready now
- Saved offline
- Critical
- Upcoming
- Takes 10 min

---

## 10.6 Chips and Tags

### Multi-select chips

Used for trip type.

- Height: 44
- Radius: full
- Selected fill: `slate-2`
- Selected border: `steel-soft`
- Unselected fill: `white-glass`
- Text: `mist` or `fog`

Examples:

- Culture
- Food
- Outdoors
- City
- Off-the-beaten-path

### Metadata tags

- Fill: transparent or `white-glass`
- Text: `smoke`
- Border: subtle only

---

## 10.7 Sheets and Modals

### Bottom sheet

```css
border-radius: 28px 28px 0 0;
background: #131D2A;
border-top: 1px solid rgba(255,255,255,0.08);
box-shadow: 0 24px 70px rgba(0,0,0,0.42);
```

Use for:

- briefing details
- country selection details
- flexible date options
- confirmation states

### Modal rules

- Avoid unnecessary confirmation modals.
- Prefer inline confirmation.
- Use high contrast for important actions.

---

## 11. Product-Specific Patterns

## 11.1 Onboarding Flow

### Goal
Make the traveler feel Arrivo can create a complete readiness plan with only a few practical answers.

### Design rules

- One question per screen.
- Use cinematic imagery in the background or header.
- Keep controls monochromatic.
- Use one primary CTA.
- Do not use orange as the selected state.
- Use practical reassurance, not emotional coaching.

### Screens

#### 1. Splash

Copy:

**Where are we going?**

Components:

- Arrivo wordmark
- Full-bleed destination image
- Dark gradient overlay
- Glass search field
- Primary CTA

#### 2. Country picker

Copy:

**Where are we going?**

Components:

- Search field
- Destination image cards
- Selected country card
- Primary CTA

Selected country style:

- `slate-2` overlay
- `steel-soft` border
- small `mist` check icon

#### 3. Date picker

Copy:

**When are you going?**

Options:

- Exact dates
- Flexible
- Within 3 months

#### 4. Duration

Copy:

**For how long?**

Default demo value:

**18 days**

Slider:

- active fill: steel-soft
- thumb: mist

#### 5. Travelers

Copy:

**Who’s traveling?**

Options:

- Solo
- Couple
- Family
- Group

Selected card:

- steel border
- mist check
- no orange glow

#### 6. Trip type

Copy:

**What kind of trip?**

Options:

- Culture
- Food
- Outdoors
- City
- Off-the-beaten-path

#### 7. Budget

Copy:

**What’s your budget range?**

Use a monochrome slider and clear value label.

#### 8. Preparedness

Copy:

**How prepared are you?**

Slider anchors:

- Just dreaming
- Picked dates
- Booked flights
- Fully booked

Supporting line:

**We’ll guide you through everything for China.**

CTA:

**Generate my plan**

#### 9. Loading

Copy:

**Generating your personalized plan…**

Checklist items:

- Visa
- Flights
- Rail
- Money
- Landing Day

Style:

- dark glass panels
- steel progress states
- no bright neon

#### 10. Dashboard reveal

Copy:

**Your China plan is ready.**

Must show:

- China trip summary
- 27-step readiness plan
- progress indicator
- category cards
- clear first action

Primary CTA:

**Start with visa**

---

## 11.2 Personalized Dashboard

### Dashboard hierarchy

1. Destination hero / trip summary
2. Plan readiness progress
3. Next best action
4. Category cards
5. Upcoming tasks
6. Bottom navigation

### Dashboard hero example

**Your China plan is ready.**  
China · 18 days · solo  
0/27 steps

### Next best action card

**Ready now**  
Apply for your China L Visa  
You’ll need this before departure. Arrivo will walk you through the steps.

CTA:

**Start with visa**

### Category cards

| Category | Tasks | First task |
|---|---:|---|
| Visa & documents | 4 | Apply for China L Visa |
| Flights & stay | 5 | Compare flight windows |
| Local transport | 4 | Learn high-speed rail booking |
| Money & payments | 4 | Set up WeChat Pay |
| Connectivity | 3 | Choose VPN before departure |
| Culture & etiquette | 4 | Learn dining basics |
| Landing Day Hub | 3 | Save hotel address offline |

---

## 11.3 Briefing System

### Briefing structure
Every briefing should use this format:

1. **Why this matters**
2. **What to do**
3. **How long it takes**
4. **One CTA**

### Briefing detail layout

Header:

- Status chip
- Task title
- Category
- Time estimate

Body:

- Why this matters
- What to do
- Checklist
- External link or action

Footer:

- Mark done
- Save for later

### Example: Visa briefing

**Apply for your China L Visa**

**Why this matters**  
Most U.S. travelers need a visa before entering mainland China. Starting early prevents processing time from blocking your trip.

**What to do**

- Confirm your passport validity.
- Gather itinerary and accommodation details.
- Complete the visa application.
- Book or follow the correct consulate process.

**How long it takes**  
30–45 minutes to start; processing varies.

CTA:

**Start visa checklist**

### Example: WeChat Pay briefing

**Set up WeChat Pay before you leave**

**Why this matters**  
Many everyday payments in China rely on mobile payment apps. Setting this up before departure reduces friction at restaurants, transit points, and shops.

CTA:

**Open setup steps**

### Example: VPN briefing

**Choose your VPN before departure**

**Why this matters**  
Some familiar apps and websites may not work the same way in China. Choose and test your connectivity plan before you arrive.

CTA:

**Compare options**

---

## 11.4 Itinerary System

### Itinerary overview

Demo route:

**Beijing → Xi’an → Shanghai**

Sections:

- route header
- city sequence
- booked/missing status
- transport between cities
- day cards

### Route display style

Use compact professional route cards:

- large city or airport codes
- small transport icon
- muted line or dot sequence
- expandable detail row
- booking partner metadata

### Day card anatomy

- Day number
- City
- Date
- Morning / afternoon / evening blocks
- Transport notes
- Reservation status

### Rule
Do not pitch Arrivo as a full AI itinerary generator. The itinerary is organized planning support, not the core product promise.

---

## 11.5 Pre-Departure Checklist

### Goal
Give the traveler confidence the night before departure without creating panic.

Header:

**Tonight: final pre-departure checklist.**

Sections:

- Documents
- Money
- Connectivity
- Packing
- Arrival

Checklist examples:

- Passport packed
- Visa saved offline
- WeChat Pay tested
- VPN installed and tested
- Hotel address saved in Mandarin
- Offline map downloaded

### Checklist row style

- Icon or checkbox
- Task title
- Optional subtitle
- Status chip when needed
- Large tap target

---

## 11.6 Landing Day Hub

### Goal
Be instantly useful when the traveler lands at PVG with limited or no connectivity.

### Core rule
Landing Day Hub must work **100% offline** and visually communicate reliability.

### Visual approach
Use the Midnight Mist system, but increase contrast and reduce decorative imagery.

Header:

**Welcome to Shanghai. Your offline guide is ready.**

Include:

- Offline badge
- Current city
- Airport: PVG
- Last synced timestamp

### Priority order

1. Hotel address for taxi driver
2. Emergency contacts
3. Transit/subway map
4. Key Mandarin phrases
5. Currency quick reference
6. Full itinerary

### Taxi address card

This should be the most usable card in the app.

Content:

- Hotel name
- Address in Mandarin characters
- Pinyin
- “Show to driver” action
- Saved offline status

### Phrase card

Group phrases by situation:

- Taxi
- Hotel
- Restaurant
- Payment
- Emergency

Each phrase row:

- English
- Mandarin characters
- Pinyin
- Optional audio icon later

### Offline status language

Use explicit labels:

- Saved offline
- Available without internet
- Last updated yesterday

Avoid vague sync language.

---

## 12. Motion System

### Motion principles

1. **Reveal readiness**  
   Motion should make Arrivo feel like it is organizing complexity.

2. **Cinematic, not flashy**  
   Use fade, subtle parallax, blur, and lift.

3. **No glowing neon feedback**  
   Active states should feel polished and restrained.

### Motion tokens

| Token | Value | Use |
|---|---:|---|
| `motion/fast` | 120ms | Tap feedback |
| `motion/base` | 200ms | Chip select, tab change |
| `motion/slow` | 360ms | Screen transitions |
| `motion/reveal` | 700ms | Dashboard reveal |
| `motion/stagger` | 140ms | Category cards appearing |
| `motion/hero-pan` | 900ms | Subtle photo movement |

### Easing

| Token | Curve |
|---|---|
| `ease/out` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| `ease/in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` |
| `ease/soft` | `cubic-bezier(0.25, 0.8, 0.25, 1)` |

### Signature animations

#### Personalized plan reveal

- Destination image darkens slightly.
- Arrivo mark pulses softly in mist.
- Header appears: “Your China plan is ready.”
- Readiness count animates from 0 to 27.
- Category cards fade up with a 140ms stagger.
- First ready task receives a subtle steel active indicator.

#### Briefing card tap

- Card lifts 4px.
- Border shifts to steel-soft.
- Detail sheet slides up with soft ease-out.

#### Landing Hub

- Offline badge appears immediately.
- Critical address card appears without delay.
- No decorative animation should block urgent information.

---

## 13. Iconography

### Icon style

Use **Phosphor icons** or a similarly rounded line icon set.

### Icon rules

- Stroke: 1.75–2px
- Default size: 24px
- Metadata icons: 16–18px
- Feature icons: 32–40px
- Use `fog` for default icons
- Use `mist` for active icons
- Use `steel-soft` sparingly for progress or selected state

### Recommended mappings

| Concept | Icon |
|---|---|
| Visa | Passport |
| Flights | Airplane Tilt |
| Hotel | Bed |
| Rail | Train |
| Money | Wallet |
| WeChat Pay | Credit Card / Chat Circle |
| VPN | Wifi Slash / Globe Hemispheres |
| Culture | Bowl Food / Hands |
| Landing Hub | Map Pin / Compass |
| Offline | Cloud Slash |
| Checklist | CheckCircle |
| Search | Magnifying Glass |
| Voice input | Microphone |

---

## 14. Figma Implementation

### Page structure

1. `00 Cover`
2. `01 Foundations`
3. `02 Components`
4. `03 Patterns`
5. `04 Mobile Frames`
6. `05 Deck Exports`

### Figma variable groups

Create variables for:

- color
- typography
- spacing
- radius
- elevation
- glass blur
- motion notes

### Component naming

Use slash-based names:

- `Button/Primary/Default`
- `Button/Secondary/Default`
- `Button/Icon/Default`
- `Card/Base`
- `Card/Glass`
- `Card/Destination`
- `Card/Plan Category`
- `Card/Briefing`
- `Card/Route`
- `Input/Search Glass`
- `Input/Slider`
- `Chip/Multi Select`
- `Chip/Status`
- `Navigation/Bottom Tabs`
- `Header/Destination Hero`
- `Header/Dashboard`
- `Hub/Taxi Address Card`

### Component build order

1. Color variables
2. Typography styles
3. Base surfaces and glass cards
4. Buttons
5. Inputs and sliders
6. Chips and status tags
7. Destination cards
8. Plan category cards
9. Briefing cards
10. Route cards
11. Navigation and headers
12. Landing Hub modules
13. Final screens

---

## 15. Screen Inventory

### Brand frames

#### 0a. Cover frame

Include:

- Arrivo logo
- tagline
- cinematic app mockup
- destination image
- Midnight Mist palette

#### 0b. Style guide

Include:

- color tokens
- type scale
- buttons
- cards
- chips
- route cards
- navigation
- motion notes

### Onboarding frames

1. Splash
2. Country picker
3. When?
4. For how long?
5. Who’s traveling?
6. What kind of trip?
7. Budget range
8. Preparedness + reassurance
9. Generating plan
10. Personalized dashboard reveal

### Briefing frames

11. Briefings timeline view
12. Visa briefing detail
13. WeChat Pay briefing detail
14. VPN briefing detail

### Itinerary frames

15. Itinerary overview
16. Day detail

### Pre-departure and landing frames

17. Pre-departure checklist
18. Landing Day Hub

### Optional polish frames

19. Lock screen notification preview
20. Empty state

---

## 16. Deck and Judging Alignment

### Winning product story

**Before Arrivo:** 47 tabs, scattered advice, no clear order.  
**With Arrivo:** seven questions, one personalized plan, sequenced briefings, and offline confidence on landing day.

### One screenshot judges should remember

The personalized dashboard reveal:

**Your China plan is ready.**  
**27 steps, sequenced from now to landing day.**

### Rubric alignment

| Rubric category | Design system support |
|---|---|
| User Journey | Onboarding → plan reveal → briefings → checklist → Landing Hub |
| UI Design | Professional monochrome theme, strong hierarchy, accessible contrast |
| Solves Problem | Replaces scattered planning with sequenced readiness |
| Presentation | Clear hero screens, concise story, strong visual polish |

### Slide visual direction

| Slide | Visual approach |
|---|---|
| Title | Arrivo logo, cinematic phone mockup, Midnight Mist palette |
| Persona | Maya story over subtle travel image |
| Problem | 47 tabs visual vs. one organized plan |
| HMW | Large text, dark spacious slide |
| Meet Arrivo | Brand reveal and product promise |
| Solution 1 | Onboarding and dashboard reveal |
| Solution 2 | Sequenced briefing cards |
| Solution 3 | Offline Landing Day Hub |
| V1 vs Later | Two-column product thinking slide |
| Closing | Maya lands at PVG with offline guide ready |

---

## 17. Design QA Checklist

### Product clarity

- Can someone understand Arrivo in five seconds from the dashboard?
- Does every screen reinforce “Your whole trip, ready”?
- Is the next step always obvious?
- Does the product feel like readiness, not generic itinerary planning?

### Visual quality

- Does the UI feel premium and restrained?
- Is orange removed from system controls?
- Does warmth come from imagery instead of buttons?
- Are glass cards readable?
- Is the contrast strong enough?
- Are selected states clear without neon?

### Content quality

- Is the copy practical and country-specific?
- Are briefings structured consistently?
- Are time estimates visible?
- Is wellness language removed?

### Usability

- Are future tasks clearly separated from ready-now tasks?
- Can Landing Day Hub be used quickly without explanation?
- Are all important tap targets at least 44 × 44?
- Does every critical state include icon or label support, not just color?

---

## 18. CSS Starter Specs

### App background

```css
.app {
  background: #0E1520;
  color: #F1F4F7;
}
```

### Hero image overlay

```css
.hero {
  background:
    linear-gradient(
      180deg,
      rgba(14, 21, 32, 0.10) 0%,
      rgba(14, 21, 32, 0.56) 48%,
      rgba(14, 21, 32, 0.94) 100%
    ),
    url(destination-image.jpg);
  background-size: cover;
  background-position: center;
}
```

### Glass card

```css
.glass-card {
  border-radius: 24px;
  padding: 20px;
  background: rgba(19, 29, 42, 0.72);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.22);
}
```

### Base card

```css
.card {
  border-radius: 24px;
  padding: 20px;
  background: #1B2736;
  border: 1px solid #334255;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.22);
}
```

### Primary button

```css
.button-primary {
  height: 56px;
  border-radius: 999px;
  padding: 0 24px;
  background: #F1F4F7;
  color: #0E1520;
  font: 650 14px/18px Inter, sans-serif;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.22);
}
```

### Secondary button

```css
.button-secondary {
  height: 52px;
  border-radius: 999px;
  padding: 0 20px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid #334255;
  color: #F1F4F7;
  font: 650 14px/18px Inter, sans-serif;
}
```

### Status chip

```css
.status-chip {
  height: 28px;
  border-radius: 999px;
  padding: 0 10px;
  background: rgba(129, 147, 168, 0.14);
  border: 1px solid rgba(129, 147, 168, 0.32);
  color: #C5CED8;
  font: 650 12px/16px Inter, sans-serif;
}
```

### Search field

```css
.search-field {
  height: 52px;
  border-radius: 10px;
  padding: 0 16px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid #334255;
  color: #F1F4F7;
  backdrop-filter: blur(18px);
}
```

### Selected card

```css
.card-selected {
  background: #243244;
  border: 1px solid #8193A8;
}
```

### Bottom navigation

```css
.bottom-nav {
  height: 76px;
  background: rgba(14, 21, 32, 0.86);
  backdrop-filter: blur(24px);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 -12px 36px rgba(0, 0, 0, 0.30);
}
```

---

## 19. Final Direction

Arrivo should feel cinematic without becoming loud. The UI should be cool, monochromatic, and professional, while destination photography provides warmth and emotion.

The strongest visual rule is:

**Warm photography. Cool interface. Clear readiness.**

This direction makes Arrivo feel closer to the original inspiration, more premium, more accessible, and less dependent on sharp accent colors. The result should feel like a polished international travel companion rather than a generic orange travel app.
