/* AUTO-GENERATED curated demo plans (AI-authored, photos baked in).
   Do not edit by hand — regenerate with pregen.mjs. */
import type { TripPlan } from './plan'

export const CURATED_PLANS: Record<string, TripPlan> = {
  "JP": {
    "country": {
      "code": "JP",
      "name": "Japan",
      "capital": "Tokyo",
      "region": "Asia",
      "flag": "🇯🇵"
    },
    "heroCity": "Tokyo",
    "heroImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg/1280px-Skyscrapers_of_Shinjuku_2009_January.jpg",
    "arrivalAirport": {
      "code": "NRT",
      "city": "Tokyo"
    },
    "currency": {
      "code": "JPY",
      "symbol": "¥",
      "usdRate": 159.93404
    },
    "languages": [
      "Japanese"
    ],
    "phraseLang": {
      "name": "Japanese",
      "bcp47": "ja-JP",
      "hasRomanization": true
    },
    "homeCountry": "United States",
    "summary": "12-day Japan tour for a US couple focused on food and culture. Start with Tokyo, move to Kyoto for traditional temples and kaiseki, finish in Osaka for street food and nightlife. Pre-departure: visa-free entry, IC card setup, meal reservations. Landing day: pocket WiFi pickup, JR Pass validation, neighborhood orientation.",
    "visaLabel": "Visa-free · 90 days",
    "categories": [
      {
        "id": "visa",
        "name": "Visa & documents",
        "icon": "IdentificationCard",
        "total": 3,
        "done": 0,
        "nextTaskId": "passport-check",
        "blurb": "US citizens get 90 days visa-free. Ensure passport validity and check entry requirements."
      },
      {
        "id": "flights",
        "name": "Flights & stay",
        "icon": "AirplaneTilt",
        "total": 2,
        "done": 0,
        "nextTaskId": "book-flights",
        "blurb": "Book flights to Tokyo, accommodation in central neighborhoods, and plan your route through Kyoto and Osaka."
      },
      {
        "id": "transport",
        "name": "Local transport",
        "icon": "TrainSimple",
        "total": 2,
        "done": 0,
        "nextTaskId": "jr-pass",
        "blurb": "Japan runs on punctual rail. Secure a JR Pass for intercity travel and IC card for city transit."
      },
      {
        "id": "money",
        "name": "Money & payments",
        "icon": "Wallet",
        "total": 3,
        "done": 0,
        "nextTaskId": "notify-bank",
        "blurb": "Japan is cash-forward outside major chains. Notify your bank, carry yen, and load a Suica card."
      },
      {
        "id": "connectivity",
        "name": "Connectivity",
        "icon": "GlobeHemisphereWest",
        "total": 3,
        "done": 0,
        "nextTaskId": "pocket-wifi",
        "blurb": "Mobile data is essential for maps and restaurant reservations. Rent pocket WiFi or buy a SIM before arrival."
      },
      {
        "id": "culture",
        "name": "Culture & etiquette",
        "icon": "HandHeart",
        "total": 3,
        "done": 0,
        "nextTaskId": "reserve-meals",
        "blurb": "Japanese hospitality and dining culture reward preparation. Learn key phrases and make restaurant reservations early."
      },
      {
        "id": "landing",
        "name": "Landing Day Hub",
        "icon": "MapPin",
        "total": 0,
        "done": 0,
        "nextTaskId": "collect-pocket-wifi",
        "blurb": "First-day essentials: collect pocket WiFi, validate JR Pass, orient yourself to your neighborhood."
      }
    ],
    "tasks": {
      "passport-check": {
        "id": "passport-check",
        "title": "Confirm passport validity and photo page",
        "category": "Visa & documents",
        "status": "ready",
        "duration": "5 min",
        "why": "US citizens enter Japan visa-free but need a passport valid for your entire stay; you may be asked to show it at entry.",
        "steps": [
          "Check your passport expiration date (must be after your return date).",
          "Have a clear photo of the passport data page ready for your records."
        ],
        "cta": "Verify passport"
      },
      "entry-form": {
        "id": "entry-form",
        "title": "Complete Japan entry form (Disembarkation Card) before landing",
        "category": "Visa & documents",
        "status": "upcoming",
        "duration": "10 min on the plane",
        "why": "You'll receive this form on your flight; completing it before landing speeds the entry queue and immigration screening.",
        "steps": [
          "Request the form from cabin crew near the end of your flight.",
          "Fill it legibly with your passport number, address of stay, and contact details."
        ],
        "cta": "Know the form"
      },
      "travel-insurance": {
        "id": "travel-insurance",
        "title": "Purchase travel insurance with medical coverage",
        "category": "Visa & documents",
        "status": "ready",
        "duration": "15 min",
        "why": "Medical care in Japan is efficient but costs out-of-pocket without insurance; coverage is peace of mind for 12 days abroad.",
        "steps": [
          "Compare plans from World Nomads, Allianz, or your US insurance broker.",
          "Select a plan covering trip cancellation and emergency medical care."
        ],
        "cta": "Get a quote"
      },
      "book-flights": {
        "id": "book-flights",
        "title": "Book round-trip flights Tokyo–Kyoto–Osaka–Tokyo",
        "category": "Flights & stay",
        "status": "ready",
        "duration": "45 min to 1 hr",
        "why": "Flight prices and seat availability tighten fast; booking 6–8 weeks ahead locks better fares and gives time for changes.",
        "steps": [
          "Search Google Flights or Skyscanner for USA to Tokyo (NRT or HND) departures.",
          "Add return flights from Osaka or Tokyo; compare rail + flight costs—often rail is cheaper."
        ],
        "cta": "Search flights",
        "needs": [
          "Passport number",
          "Intended travel dates"
        ],
        "headsUp": "Consider flying into NRT (Narita, farther) and out of HND (Haneda, closer) to save ground time."
      },
      "book-hotels": {
        "id": "book-hotels",
        "title": "Reserve hotels in Tokyo, Kyoto, and Osaka",
        "category": "Flights & stay",
        "status": "ready",
        "duration": "1 hr",
        "why": "Mid-range hotels in good food neighborhoods book quickly; advance booking ensures choice and better rates.",
        "steps": [
          "Search Booking.com or Agoda for 5–6 nights in Tokyo (Shibuya, Shinjuku, or Asakusa), 3–4 in Kyoto (Gion or Higashiyama), 2–3 in Osaka (Dotonbori).",
          "Confirm free cancellation and breakfast inclusion."
        ],
        "cta": "Compare rates"
      },
      "jr-pass": {
        "id": "jr-pass",
        "title": "Purchase a 7-day JR Pass before departure",
        "category": "Local transport",
        "status": "ready",
        "duration": "20 min",
        "why": "JR Pass covers unlimited trains between Tokyo, Kyoto, and Osaka—essential value for your route—but must be purchased outside Japan.",
        "steps": [
          "Buy an exchange order from a travel agent or JapanRailPass.com.",
          "Plan which 7 days of your trip will yield the most train rides (typically intercity Shinkansen days)."
        ],
        "cta": "Order JR Pass",
        "needs": [
          "Passport number"
        ],
        "headsUp": "Activate your pass on your landing day or a day you know you'll take multiple long trains—you can't split the 7 days."
      },
      "ic-card": {
        "id": "ic-card",
        "title": "Understand how to load a Suica or Pasmo card on arrival",
        "category": "Local transport",
        "status": "upcoming",
        "duration": "10 min now, 5 min on arrival",
        "why": "IC cards are required for local metro, bus, and train passes in Tokyo, Kyoto, and Osaka; you can buy and load them at any station.",
        "steps": [
          "Read the JR East Suica guide (available at JR-east.co.jp) to understand card types.",
          "On arrival, head to any station ticket office and ask for a rechargeable Suica card with ¥2,000 or ¥3,000 initial balance."
        ],
        "cta": "Learn Suica basics"
      },
      "notify-bank": {
        "id": "notify-bank",
        "title": "Notify your US bank of travel dates",
        "category": "Money & payments",
        "status": "ready",
        "duration": "10 min",
        "why": "Banks flag foreign transactions as fraud; a heads-up prevents card blocks in Japan and keeps withdrawals flowing.",
        "steps": [
          "Call or log into your bank's app and file a travel notice.",
          "List Japan as your destination and your trip dates."
        ],
        "cta": "Notify your bank"
      },
      "yen-withdrawal": {
        "id": "yen-withdrawal",
        "title": "Plan yen withdrawal at Narita or Haneda ATM",
        "category": "Money & payments",
        "status": "upcoming",
        "duration": "5 min on arrival",
        "why": "Japan is heavily cash-based outside central Tokyo; withdrawing yen immediately at the airport ensures you can pay taxis, small shops, and temples.",
        "steps": [
          "Locate an ATM (Seven Bank ATMs are everywhere and accept US cards).",
          "Withdraw ¥50,000–¥80,000 for your first 2–3 days."
        ],
        "cta": "Know ATM locations"
      },
      "cash-etiquette": {
        "id": "cash-etiquette",
        "title": "Learn cash-handling customs to avoid offense",
        "category": "Money & payments",
        "status": "upcoming",
        "duration": "5 min",
        "why": "Japan has strict payment etiquette (never hand cash directly, don't count it in front of the cashier); knowing these rules makes every transaction smooth.",
        "steps": [
          "Read a short guide on how to place cash in the small tray provided at registers.",
          "Remember: tipping is not expected or welcome; the total shown is always final."
        ],
        "cta": "Master payment etiquette"
      },
      "pocket-wifi": {
        "id": "pocket-wifi",
        "title": "Pre-order pocket WiFi or SIM card for airport pickup",
        "category": "Connectivity",
        "status": "ready",
        "duration": "20 min",
        "why": "Mobile data is critical for maps, restaurant reservations, and language translation; renting before departure guarantees a device waiting at arrival.",
        "steps": [
          "Book a pocket WiFi from Japan Experience or Global Advanced Communications for delivery to your hotel or airport counter.",
          "Alternatively, buy a SIM card online and pick it up at the airport."
        ],
        "cta": "Reserve WiFi",
        "needs": [
          "Hotel address in Tokyo"
        ],
        "headsUp": "Pocket WiFi runs ¥800–1,500/day; if you only need occasional data, a SIM card (~¥3,000 for 10GB) may be cheaper."
      },
      "messaging-app": {
        "id": "messaging-app",
        "title": "Download LINE and ensure it's linked to your phone",
        "category": "Connectivity",
        "status": "ready",
        "duration": "10 min",
        "why": "LINE is the primary messaging and payments app in Japan; you'll need it to contact restaurants, hotels, and taxis.",
        "steps": [
          "Install LINE from the App Store or Google Play.",
          "Create an account and link it to your phone number or email."
        ],
        "cta": "Install LINE"
      },
      "translation-app": {
        "id": "translation-app",
        "title": "Download Google Translate and Tabelog for offline use",
        "category": "Connectivity",
        "status": "upcoming",
        "duration": "15 min",
        "why": "Tabelog (Japan's restaurant review site) has no English version; Google Translate with offline packs lets you read menus and reviews without data.",
        "steps": [
          "Download Google Translate app and add Japanese + English offline language packs.",
          "Install Tabelog (Japanese app) and bookmark your meal research before the trip."
        ],
        "cta": "Set up apps"
      },
      "reserve-meals": {
        "id": "reserve-meals",
        "title": "Research and pre-book 4–5 signature meals",
        "category": "Culture & etiquette",
        "status": "ready",
        "duration": "1–1.5 hrs",
        "why": "Top kaiseki restaurants in Kyoto and sushi bars in Osaka book out months ahead; making reservations early is the only way to secure them for a food-focused trip.",
        "steps": [
          "Search Tabelog.com (English version) for top-rated restaurants: one kaiseki in Kyoto, one sushi in Osaka, one ramen shop in Tokyo.",
          "Email reservations to restaurants with your dates; many accept English emails or use OpenTable Japan."
        ],
        "cta": "Book meals",
        "needs": [
          "Hotel address in each city",
          "Rough daily schedule",
          "Any dietary restrictions"
        ],
        "headsUp": "Kaiseki restaurants often require payment in advance or a credit card hold; confirm cancellation policy."
      },
      "temple-etiquette": {
        "id": "temple-etiquette",
        "title": "Learn temple and shrine etiquette before visiting",
        "category": "Culture & etiquette",
        "status": "upcoming",
        "duration": "20 min",
        "why": "Kyoto's temples require respectful behavior (bow before entering, remove shoes, keep silence in prayer halls); knowing the rules beforehand shows respect and enriches your visit.",
        "steps": [
          "Watch a 5-min YouTube guide on 'visiting Japanese temples' etiquette.",
          "Note key actions: bow at entrance, ring the bell, wash hands and mouth at the purification station before entering."
        ],
        "cta": "Learn temple customs"
      },
      "festival-check": {
        "id": "festival-check",
        "title": "Check for local festivals on your travel dates",
        "category": "Culture & etiquette",
        "status": "ready",
        "duration": "15 min",
        "why": "Japan's seasonal festivals are iconic food and culture moments; traveling during a matsuri (festival) adds authentic experience and means booking lodging earlier.",
        "steps": [
          "Search 'Japan festivals [your dates]' on Time Out Japan or Japan Travel.",
          "Cross-check with your planned city dates to see if a nearby matsuri aligns with your trip."
        ],
        "cta": "Find festivals"
      },
      "collect-pocket-wifi": {
        "id": "collect-pocket-wifi",
        "title": "Pick up pocket WiFi at airport counter or hotel",
        "category": "Landing",
        "status": "upcoming",
        "duration": "10 min",
        "why": "WiFi is your lifeline on day one—maps, reservations, and transit info depend on it; collecting it immediately frees you to explore without data anxiety.",
        "steps": [
          "Locate your pocket WiFi provider's counter (usually near the South Exit of Narita Terminal 1 or Haneda Terminal 1/2).",
          "Test the connection before leaving the airport; add the phone number to your contacts."
        ],
        "cta": "Know pickup location"
      },
      "validate-jr": {
        "id": "validate-jr",
        "title": "Validate your JR Pass at a JR East office",
        "category": "Landing",
        "status": "upcoming",
        "duration": "15 min",
        "why": "Your JR Pass exchange order is worthless until you activate it; doing this on arrival day lets you use trains immediately for your first intercity leg.",
        "steps": [
          "Go to the JR East Travel Service Center at Narita Terminal 1 or Haneda Terminal 1F (near the South Exit).",
          "Present your exchange order and passport, select your 7-day activation window, and collect your pass."
        ],
        "cta": "Know where to validate",
        "headsUp": "JR offices have English-speaking staff; lines move quickly if you go first thing after clearing immigration."
      },
      "neighborhood-walk": {
        "id": "neighborhood-walk",
        "title": "Take a 30-minute walk around your Tokyo hotel neighborhood",
        "category": "Landing",
        "status": "upcoming",
        "duration": "30 min",
        "why": "Orienting yourself on day one to local convenience stores (konbini), vending machines, and small restaurants builds confidence and helps you spot your next meal.",
        "steps": [
          "Leave your hotel after settling in and walk two blocks in each direction.",
          "Visit a 7-Eleven or Family Mart to load your Suica card and grab a drink; note the closest ramen or udon shop."
        ],
        "cta": "Explore on foot"
      },
      "onsen-plan": {
        "id": "onsen-plan",
        "title": "Research public baths (onsen/sento) near your hotels",
        "category": "Landing",
        "status": "upcoming",
        "duration": "20 min",
        "why": "Public baths are a cultural cornerstone and budget-friendly wind-down; knowing locations and etiquette ahead lets you use them confidently.",
        "steps": [
          "Search 'sento near [your hotel neighborhood]' or use the Sento Map app.",
          "Read etiquette: wash thoroughly before entering the bath, don't submerge your towel, and observe gender-separated areas."
        ],
        "cta": "Locate sento"
      }
    },
    "briefingBuckets": {
      "now": [
        "passport-check",
        "travel-insurance",
        "book-flights",
        "book-hotels",
        "jr-pass",
        "notify-bank",
        "pocket-wifi",
        "messaging-app",
        "reserve-meals",
        "festival-check"
      ],
      "soon": [
        "entry-form",
        "ic-card",
        "yen-withdrawal",
        "cash-etiquette",
        "translation-app",
        "temple-etiquette",
        "neighborhood-walk",
        "onsen-plan"
      ],
      "final": [
        "collect-pocket-wifi",
        "validate-jr"
      ]
    },
    "itinerary": {
      "routeTitle": "Tokyo – Kyoto – Osaka: Food & Culture Loop",
      "dateRange": "Late March – April (cherry blossoms) or October–November (fall foliage)",
      "cities": [
        {
          "code": "JP",
          "name": "Tokyo",
          "days": 5,
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg/1280px-Skyscrapers_of_Shinjuku_2009_January.jpg",
          "stayLabel": "Modern capital, street food, tech culture"
        },
        {
          "code": "JP",
          "name": "Kyoto",
          "days": 4,
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Kiyomizu.jpg/1280px-Kiyomizu.jpg",
          "stayLabel": "Temples, traditional kaiseki, geisha district"
        },
        {
          "code": "JP",
          "name": "Osaka",
          "days": 3,
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Osaka_Castle_02bs3200.jpg/1280px-Osaka_Castle_02bs3200.jpg",
          "stayLabel": "Dotonbori street food, nightlife, local flavors"
        }
      ],
      "legs": [
        {
          "from": "Tokyo (NRT/HND)",
          "to": "Tokyo city",
          "mode": "plane",
          "duration": "60 min (NRT Express)",
          "stops": "Narita Express to central Tokyo",
          "status": "booked"
        },
        {
          "from": "Tokyo",
          "to": "Kyoto",
          "mode": "plane",
          "duration": "2 hrs 15 min",
          "stops": "Shinkansen (2.5 hrs) preferred for JR Pass value",
          "status": "planned"
        },
        {
          "from": "Kyoto",
          "to": "Osaka",
          "mode": "rail",
          "duration": "75 min",
          "stops": "JR Haruka Limited Express",
          "status": "planned"
        },
        {
          "from": "Osaka",
          "to": "Tokyo (HND)",
          "mode": "plane",
          "duration": "1.5 hrs",
          "stops": "Return flight or Shinkansen (2.5 hrs)",
          "status": "planned"
        }
      ]
    },
    "itineraryDays": [
      {
        "dayNumber": 1,
        "city": "Tokyo",
        "date": "Day 1 (arrival)",
        "kind": "arrival",
        "blocks": [
          {
            "slot": "morning",
            "label": "Land at Narita or Haneda",
            "detail": "Clear immigration, collect pocket WiFi, validate JR Pass, withdraw yen."
          },
          {
            "slot": "afternoon",
            "label": "Narita Express to central Tokyo",
            "detail": "Take the N'EX train to your Shibuya or Shinjuku hotel. Check in and rest."
          },
          {
            "slot": "evening",
            "label": "Dinner in your neighborhood",
            "detail": "Walk nearby and eat at a local ramen or izakaya. Test your Suica card and LINE app."
          }
        ]
      },
      {
        "dayNumber": 3,
        "city": "Kyoto",
        "date": "Day 3 (representative explore day)",
        "kind": "explore",
        "blocks": [
          {
            "slot": "morning",
            "label": "Visit Fushimi Inari shrine",
            "detail": "Early start to beat crowds on the iconic vermillion torii path. Wear comfortable walking shoes."
          },
          {
            "slot": "afternoon",
            "label": "Explore Gion geisha district",
            "detail": "Walk Hanamikoji Street, visit small temples and shops. Spot geisha heading to evening appointments (5–7 PM)."
          },
          {
            "slot": "evening",
            "label": "Kaiseki dinner (reserved)",
            "detail": "Enjoy your pre-booked multi-course meal at a traditional restaurant. Course typically runs 2–3 hours."
          }
        ]
      }
    ],
    "hotel": {
      "name": "Hotel Gracery Shinjuku",
      "addressLocal": "東京都新宿区歌舞伎町1-19-1",
      "roman": "Tōkyō-to Shinjuku-ku Kabukichō 1-19-1",
      "addressEn": "1-19-1 Kabukicho, Shinjuku, Tokyo",
      "neighborhood": "Shinjuku",
      "city": "Tokyo"
    },
    "phrases": [
      {
        "group": "Greetings",
        "items": [
          {
            "en": "Hello",
            "local": "こんにちは",
            "roman": "Konnichiwa"
          },
          {
            "en": "Thank you",
            "local": "ありがとうございます",
            "roman": "Arigatō gozaimasu"
          },
          {
            "en": "Excuse me",
            "local": "すみません",
            "roman": "Sumimasen"
          }
        ]
      },
      {
        "group": "Taxi",
        "items": [
          {
            "en": "Please take me to this address",
            "local": "この住所に行ってください",
            "roman": "Kono jūsho ni itte kudasai"
          },
          {
            "en": "How much is the fare?",
            "local": "いくらですか",
            "roman": "Ikura desu ka"
          },
          {
            "en": "Keep the change",
            "local": "おつりは結構です",
            "roman": "Otsuri wa kekkō desu"
          }
        ]
      },
      {
        "group": "Restaurant",
        "items": [
          {
            "en": "A table for two, please",
            "local": "二人ですお願いします",
            "roman": "Futari desu onegai shimasu"
          },
          {
            "en": "What do you recommend?",
            "local": "おすすめは何ですか",
            "roman": "Osusume wa nan desu ka"
          },
          {
            "en": "The bill, please",
            "local": "お会計をお願いします",
            "roman": "Okaikei wo onegai shimasu"
          }
        ]
      },
      {
        "group": "Payment",
        "items": [
          {
            "en": "Do you accept credit cards?",
            "local": "クレジットカードは使えますか",
            "roman": "Kurejitto kādo wa tsukaemasu ka"
          },
          {
            "en": "I'll pay with cash",
            "local": "現金で払います",
            "roman": "Genkin de harai masu"
          },
          {
            "en": "Is there a discount?",
            "local": "割引はありますか",
            "roman": "Waribiki wa arimasu ka"
          }
        ]
      },
      {
        "group": "Emergency",
        "items": [
          {
            "en": "Help!",
            "local": "助けてください",
            "roman": "Tasukete kudasai"
          },
          {
            "en": "I need a doctor",
            "local": "医者が必要です",
            "roman": "Isha ga hitsuyō desu"
          },
          {
            "en": "I've lost my passport",
            "local": "パスポートを失くしました",
            "roman": "Pasupōto wo nakushi mashita"
          }
        ]
      }
    ],
    "emergencyContacts": [
      {
        "label": "Police",
        "number": "110",
        "kind": "urgent"
      },
      {
        "label": "Medical",
        "number": "119",
        "kind": "urgent"
      },
      {
        "label": "U.S. citizens abroad · State Dept",
        "number": "+1 888 407 4747",
        "kind": "consular"
      }
    ],
    "predeparture": [
      {
        "group": "Before You Book",
        "items": [
          {
            "id": "dates-set",
            "label": "Confirm your travel dates"
          },
          {
            "id": "budget-confirm",
            "label": "Set daily budget (mid-range: ¥10,000–15,000 per person/day)"
          }
        ]
      },
      {
        "group": "This Week",
        "items": [
          {
            "id": "passport",
            "label": "Check passport expiration (valid 90+ days)"
          },
          {
            "id": "flights-search",
            "label": "Search flights to Tokyo NRT/HND"
          },
          {
            "id": "bank-notify",
            "label": "Notify your bank of travel"
          },
          {
            "id": "jr-order",
            "label": "Order 7-day JR Pass exchange"
          }
        ]
      },
      {
        "group": "Two Weeks Out",
        "items": [
          {
            "id": "hotels-book",
            "label": "Book hotels in Tokyo, Kyoto, Osaka"
          },
          {
            "id": "meals-reserve",
            "label": "Reserve 4–5 signature restaurants"
          },
          {
            "id": "wifi-order",
            "label": "Pre-order pocket WiFi for airport pickup"
          },
          {
            "id": "sim-research",
            "label": "Compare SIM card providers as backup option"
          }
        ]
      },
      {
        "group": "One Week Out",
        "items": [
          {
            "id": "itin-detail",
            "label": "Finalize daily itinerary (temple hours, transit times)"
          },
          {
            "id": "apps-download",
            "label": "Install LINE, Google Translate, Tabelog, Suica app"
          },
          {
            "id": "packing-check",
            "label": "Check weather, pack layers and comfortable walking shoes"
          },
          {
            "id": "entry-form-review",
            "label": "Review Disembarkation Card requirements (you'll complete on plane)"
          }
        ]
      }
    ]
  },
  "IT": {
    "country": {
      "code": "IT",
      "name": "Italy",
      "capital": "Rome",
      "region": "Europe",
      "flag": "🇮🇹"
    },
    "heroCity": "Rome",
    "heroImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Trevi_Fountain%2C_Rome%2C_Italy_2_-_May_2007.jpg/1280px-Trevi_Fountain%2C_Rome%2C_Italy_2_-_May_2007.jpg",
    "arrivalAirport": {
      "code": "FCO",
      "city": "Rome"
    },
    "currency": {
      "code": "EUR",
      "symbol": "€",
      "usdRate": 0.861602
    },
    "languages": [
      "Italian",
      "Catalan"
    ],
    "phraseLang": {
      "name": "Italian",
      "bcp47": "it-IT",
      "hasRomanization": false
    },
    "homeCountry": "United States",
    "summary": "A 12-day food and culture tour of Italy for a US couple, spanning Rome, Florence, and the Amalfi Coast. This plan prioritizes practical preparation for seamless arrival and authentic dining experiences in each region.",
    "visaLabel": "Visa-free · 90 days",
    "categories": [
      {
        "id": "visa",
        "name": "Visa & documents",
        "icon": "IdentificationCard",
        "total": 3,
        "done": 0,
        "nextTaskId": "visa-check",
        "blurb": "US citizens enjoy visa-free entry to Italy for up to 90 days. Ensure your passport is valid for the entire trip and register your itinerary details."
      },
      {
        "id": "flights",
        "name": "Flights & stay",
        "icon": "AirplaneTilt",
        "total": 3,
        "done": 0,
        "nextTaskId": "flights-book",
        "blurb": "Book flights well in advance for better rates. Lock in mid-range hotels in central Rome, Florence, and the Amalfi Coast to maximize walkability and local dining access."
      },
      {
        "id": "transport",
        "name": "Local transport",
        "icon": "TrainSimple",
        "total": 3,
        "done": 0,
        "nextTaskId": "transport-trains",
        "blurb": "Italy relies on regional trains for city-to-city travel and walkable city centers. Plan your train routes and download Trenitalia or regional apps."
      },
      {
        "id": "money",
        "name": "Money & payments",
        "icon": "Wallet",
        "total": 3,
        "done": 0,
        "nextTaskId": "money-cards",
        "blurb": "Italy is increasingly card-friendly in cities but carries are still common, especially in smaller towns and trattorias. Set up contactless payments and have a backup cash plan."
      },
      {
        "id": "connectivity",
        "name": "Connectivity",
        "icon": "GlobeHemisphereWest",
        "total": 3,
        "done": 0,
        "nextTaskId": "connectivity-sim",
        "blurb": "A local SIM or eSIM keeps you connected for maps, translation, and restaurant reservations. EU rates are reasonable if roaming."
      },
      {
        "id": "culture",
        "name": "Culture & etiquette",
        "icon": "HandHeart",
        "total": 3,
        "done": 0,
        "nextTaskId": "culture-dining",
        "blurb": "Dining culture is central to Italy. Learn meal timing, tipping norms, and regional specialties to eat like a local and respect restaurant customs."
      },
      {
        "id": "landing",
        "name": "Landing Day Hub",
        "icon": "MapPin",
        "total": 3,
        "done": 0,
        "nextTaskId": "landing-map",
        "blurb": "Your essential arrivals checklist: map your hotel, test transit, change money, and reserve dinner. All tasks here save offline for your first evening."
      }
    ],
    "tasks": {
      "visa-check": {
        "id": "visa-check",
        "title": "Confirm your US passport is valid for Italy",
        "category": "Visa & documents",
        "status": "ready",
        "duration": "5 min",
        "why": "US citizens are visa-free in Italy for 90 days, but your passport must be valid through your departure date. An expired or expiring passport will stop you at the airport.",
        "steps": [
          "Check your passport expiration date on the front.",
          "Confirm it remains valid through the end of your trip plus 3 months as a buffer."
        ],
        "cta": "Verify passport"
      },
      "visa-copies": {
        "id": "visa-copies",
        "title": "Make copies of your passport and cards",
        "category": "Visa & documents",
        "status": "upcoming",
        "duration": "10 min",
        "why": "A photocopy or photo in your phone of passport and card front/backs speeds up replacement if lost, without needing your originals.",
        "steps": [
          "Photograph or scan the photo page of your passport and both sides of your main credit/debit cards.",
          "Save them in a secure cloud folder (Google Drive, iCloud) separate from originals."
        ],
        "cta": "Back up documents"
      },
      "visa-itinerary": {
        "id": "visa-itinerary",
        "title": "Register your arrival itinerary online",
        "category": "Visa & documents",
        "status": "upcoming",
        "duration": "15 min",
        "why": "The EU Travel Information and Authorization System (ETIAS) launches in 2025 for non-EU travelers; registering early avoids last-minute delays and is now standard practice.",
        "steps": [
          "Visit the Italy/EU tourism website or ETIAS portal when open.",
          "Enter your flight dates, hotel addresses, and approximate dates for each city."
        ],
        "cta": "Register itinerary",
        "headsUp": "If ETIAS is not yet live, bookmark the link and check one month before travel."
      },
      "flights-book": {
        "id": "flights-book",
        "title": "Book transatlantic flights and within-Italy trains",
        "category": "Flights & stay",
        "status": "ready",
        "duration": "1–2 hours",
        "why": "Securing flights now locks in fares before price jumps. Booking trains (Rome–Florence–Amalfi) early gives you seat choice and direct routes.",
        "steps": [
          "Search Google Flights or Kayak for US–Rome direct flights; compare Alitalia, United, and budget carriers.",
          "Book Trenitalia Freccia (fast trains) between cities on Trenitalia.com or Trainline.eu."
        ],
        "cta": "Book flights & trains",
        "needs": [
          "Passport number",
          "Birth dates for both travelers"
        ]
      },
      "flights-hotels": {
        "id": "flights-hotels",
        "title": "Reserve mid-range hotels in Rome, Florence, and Amalfi",
        "category": "Flights & stay",
        "status": "ready",
        "duration": "1 hour",
        "why": "Good locations in city centers unlock walkable neighborhoods with the best trattorias and minimize transport friction. Mid-range avoids both tourist traps and uncomfortable hostels.",
        "steps": [
          "Search Booking.com or Airbnb for 3-star hotels in Trastevere (Rome), Santa Maria Novella (Florence), and Positano/Amalfi town center.",
          "Check free cancellation and confirm address for train station proximity."
        ],
        "cta": "Lock accommodations"
      },
      "flights-insurance": {
        "id": "flights-insurance",
        "title": "Purchase travel and medical insurance",
        "category": "Flights & stay",
        "status": "upcoming",
        "duration": "20 min",
        "why": "Trip cancellation and medical coverage protects both your investment and unexpected health costs abroad. As a US couple, you likely have no Italian health coverage.",
        "steps": [
          "Get a quote from Allianz, World Nomads, or your credit card provider's coverage.",
          "Check if your policy covers trip delays, medical evacuation, and pre-existing conditions."
        ],
        "cta": "Buy insurance"
      },
      "transport-trains": {
        "id": "transport-trains",
        "title": "Download Trenitalia app and plan your city routes",
        "category": "Local transport",
        "status": "ready",
        "duration": "20 min",
        "why": "The Trenitalia app is your booking and real-time gateway for all long-distance trains; city apps let you navigate metros, trams, and buses offline.",
        "steps": [
          "Download Trenitalia and the Rome Metro, Florence ATAF, and SITA Costiera (Amalfi buses) apps.",
          "Plan your itinerary: Rome (Termini station) → Florence (Santa Maria Novella) → Salerno (for Amalfi, 1 hour bus)."
        ],
        "cta": "Set up transit apps"
      },
      "transport-stations": {
        "id": "transport-stations",
        "title": "Bookmark train station addresses and arrival procedures",
        "category": "Local transport",
        "status": "upcoming",
        "duration": "10 min",
        "why": "Having station locations and taxi/airport transfer instructions ready avoids confusion and delays on arrival day.",
        "steps": [
          "Save the addresses of Roma Termini, Firenze SMN, and Salerno Central Station in your maps app offline.",
          "Note taxi stand locations and download Uber or a local taxi app (MyTaxi, Taxi.it)."
        ],
        "cta": "Save station details"
      },
      "transport-regional": {
        "id": "transport-regional",
        "title": "Research the Amalfi Coast regional bus system",
        "category": "Local transport",
        "status": "upcoming",
        "duration": "15 min",
        "why": "The Amalfi Coast has no trains; the scenic SITA bus network connects coastal villages. Understanding stops, schedules, and buy-on-board policies prevents missed rides.",
        "steps": [
          "Visit SITA-sudtrasporti.it; bookmark schedules for Salerno–Amalfi–Positano.",
          "Note that tickets are sold at tabacchi (tobacco shops) and kiosks, rarely on buses."
        ],
        "cta": "Amalfi bus guide"
      },
      "money-cards": {
        "id": "money-cards",
        "title": "Notify your US banks of your Italy travel dates",
        "category": "Money & payments",
        "status": "ready",
        "duration": "10 min",
        "why": "Alerting your bank prevents cards being declined for 'suspicious' foreign activity and ensures contactless payments work uninterrupted.",
        "steps": [
          "Call your primary credit card and debit card issuers (numbers on card back); give them your travel dates.",
          "Confirm no foreign-transaction fees; if high, consider a backup card (Charles Schwab, Wise)."
        ],
        "cta": "Notify banks"
      },
      "money-contactless": {
        "id": "money-contactless",
        "title": "Enable contactless and NFC payments on your phone",
        "category": "Money & payments",
        "status": "ready",
        "duration": "10 min",
        "why": "Italy is becoming cashless in cities and tourist areas. Apple Pay, Google Pay, or Samsung Pay works everywhere cards are accepted and avoids needing to tap your physical card.",
        "steps": [
          "Add your US debit/credit card to your phone's wallet app (Apple Wallet, Google Pay).",
          "Test a small contactless payment at a local store before departure."
        ],
        "cta": "Set up mobile payments",
        "headsUp": "Some smaller trattorias and markets still prefer cash—keep €100–150 on hand."
      },
      "money-cash": {
        "id": "money-cash",
        "title": "Plan your cash strategy: exchange or ATM withdrawals",
        "category": "Money & payments",
        "status": "upcoming",
        "duration": "15 min",
        "why": "Withdrawing cash from Italian ATMs (Bancomats) at favorable exchange rates beats airport exchange. Knowing ATM locations near hotels prevents hunting for cash mid-trip.",
        "steps": [
          "Confirm your debit card has no foreign ATM fees (or use Wise); plan to withdraw €200–300 at Rome airport or the first Bancomat.",
          "Locate ATMs near your three hotels using Google Maps offline."
        ],
        "cta": "Cash withdrawal plan"
      },
      "connectivity-sim": {
        "id": "connectivity-sim",
        "title": "Buy an Italian eSIM or local SIM before you board",
        "category": "Connectivity",
        "status": "ready",
        "duration": "15 min",
        "why": "An Italian data plan gives you maps, restaurant reservations, and translation without roaming fees. eSIM buys happen instantly; physical SIMs from Vodafone or TIM are cheap at the airport.",
        "steps": [
          "If your phone supports eSIM (iPhone XS+, most recent Android), buy a prepaid eSIM from Holafly or Airalo before takeoff.",
          "Alternatively, pick up a Vodafone or TIM SIM at Rome Fiumicino airport upon arrival for €10–15."
        ],
        "cta": "Arrange data plan"
      },
      "connectivity-offline": {
        "id": "connectivity-offline",
        "title": "Download offline maps for all three cities",
        "category": "Connectivity",
        "status": "upcoming",
        "duration": "30 min",
        "why": "Offline maps of Rome, Florence, and the Amalfi Coast work without a connection, saving data and letting you navigate neighborhoods without a signal.",
        "steps": [
          "In Google Maps, search each city, tap the name, select 'Download', and save the full metro area.",
          "Repeat for Rome, Florence, and Salerno/Amalfi Coast."
        ],
        "cta": "Download maps"
      },
      "connectivity-apps": {
        "id": "connectivity-apps",
        "title": "Install translation, restaurant, and cultural guides",
        "category": "Connectivity",
        "status": "upcoming",
        "duration": "20 min",
        "why": "Google Translate, Michelin Guide, and Atlante dei Sapori (food culture) keep you in the loop for dining language, restaurant quality, and regional dishes.",
        "steps": [
          "Download Google Translate, Michelin Guide, and the Michelin/TripAdvisor apps.",
          "Save bookmarks for Gambero Rosso (Italian restaurant ratings) and local food blogs you discover."
        ],
        "cta": "Install apps"
      },
      "culture-dining": {
        "id": "culture-dining",
        "title": "Learn Italian meal timing, etiquette, and regional food",
        "category": "Culture & etiquette",
        "status": "ready",
        "duration": "30 min",
        "why": "Italian dining culture is core to your trip. Eating breakfast early, understanding the midday pausa (pause), and timing dinner like locals unlock better meals and respect restaurant rhythms.",
        "steps": [
          "Read up on colazione (breakfast 7–10am, usually sweet), pranzo (lunch 12:30–2pm, the main meal), and cena (dinner 8:30pm+, lighter).",
          "Learn regional specialties: Rome (carbonara, cacio e pepe), Florence (bistecca fiorentina, ribollita), Amalfi (pasta con le melanzane, fresh seafood)."
        ],
        "cta": "Dining culture guide"
      },
      "culture-tipping": {
        "id": "culture-tipping",
        "title": "Understand Italian tipping and payment customs",
        "category": "Culture & etiquette",
        "status": "ready",
        "duration": "10 min",
        "why": "Italians don't tip like Americans; leaving 5–10% for good service or rounding up is appreciated but not expected. Knowing this avoids awkward moments and overpaying.",
        "steps": [
          "Confirm tipping is discretionary (not automatic); 5% on larger bills or rounding to the nearest euro is normal.",
          "Understand service charge (servizio) is sometimes included; ask 'Servizio incluso?' before paying."
        ],
        "cta": "Tipping etiquette"
      },
      "culture-phrases": {
        "id": "culture-phrases",
        "title": "Memorize key Italian dining and greeting phrases",
        "category": "Culture & etiquette",
        "status": "upcoming",
        "duration": "20 min",
        "why": "Speaking a few Italian phrases earns warmth from locals and respect in trattorias. Italians appreciate effort even if your accent is imperfect.",
        "steps": [
          "Practice greetings (Ciao, Buongiorno, Grazie), food requests (Un tavolo per due, Senza sale), and 'Delizioso!' (Delicious!).",
          "Use the phrase guide in this plan as your cheat sheet in restaurants."
        ],
        "cta": "Learn phrases"
      },
      "landing-map": {
        "id": "landing-map",
        "title": "Map your first evening: hotel, dinner reservation, and cash",
        "category": "Landing Day Hub",
        "status": "upcoming",
        "duration": "20 min",
        "why": "Arriving jet-lagged and hungry, you need one clear plan: get to your hotel, withdraw cash, and eat well. Pre-reserving dinner removes decision-making fatigue.",
        "steps": [
          "Confirm your Rome hotel address in offline maps; note the taxi or Metro route from Fiumicino airport (30 min, ~€16 taxi or Metro+walk).",
          "Reserve dinner at one highly-rated trattoria in Trastevere for your arrival evening (6:30pm or 8:00pm seating)."
        ],
        "cta": "Plan arrival night"
      },
      "landing-wifi": {
        "id": "landing-wifi",
        "title": "Save your hotel WiFi login and restaurant reservations offline",
        "category": "Landing Day Hub",
        "status": "upcoming",
        "duration": "10 min",
        "why": "Arriving with weak signal or no data, your hotel WiFi and restaurant confirmations (saved as screenshots or PDFs) keep you grounded while you settle in.",
        "steps": [
          "Screenshot your hotel booking and WiFi credentials; store in a note app or cloud drive you can access offline.",
          "Screenshot all restaurant reservation confirmations (or have emailed confirmations saved to your phone)."
        ],
        "cta": "Offline confirmations"
      },
      "landing-emergency": {
        "id": "landing-emergency",
        "title": "Save emergency contacts and your embassy address",
        "category": "Landing Day Hub",
        "status": "upcoming",
        "duration": "5 min",
        "why": "If something goes wrong, you need the US Embassy in Rome and medical emergency numbers in a place you can reach without data or battery.",
        "steps": [
          "Write down the US Embassy in Rome address and phone number in a notes app or on paper.",
          "Save Italian emergency numbers: 112 (police/ambulance), 118 (medical), 115 (fire)."
        ],
        "cta": "Save contacts"
      }
    },
    "briefingBuckets": {
      "now": [
        "visa-check",
        "flights-book",
        "flights-hotels",
        "transport-trains",
        "money-cards",
        "money-contactless",
        "connectivity-sim",
        "culture-dining",
        "culture-tipping"
      ],
      "soon": [
        "visa-copies",
        "visa-itinerary",
        "flights-insurance",
        "transport-stations",
        "transport-regional",
        "money-cash",
        "connectivity-offline",
        "connectivity-apps",
        "culture-phrases"
      ],
      "final": [
        "landing-map",
        "landing-wifi",
        "landing-emergency"
      ]
    },
    "itinerary": {
      "routeTitle": "Rome, Florence & Amalfi Coast: 12 Days of Food & Culture",
      "dateRange": "Late April–mid-May or September–early October (spring or fall shoulder seasons with moderate crowds and pleasant weather)",
      "cities": [
        {
          "code": "FCO",
          "name": "Rome",
          "days": 4,
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Trevi_Fountain%2C_Rome%2C_Italy_2_-_May_2007.jpg/1280px-Trevi_Fountain%2C_Rome%2C_Italy_2_-_May_2007.jpg",
          "stayLabel": "Arrival & monuments"
        },
        {
          "code": "FLR",
          "name": "Florence",
          "days": 4,
          "image": "",
          "stayLabel": "Renaissance & Tuscan food"
        },
        {
          "code": "NAP",
          "name": "Amalfi Coast",
          "days": 4,
          "image": "",
          "stayLabel": "Coastal villages & seafood"
        }
      ],
      "legs": [
        {
          "from": "New York (or US hub)",
          "to": "Rome",
          "mode": "plane",
          "duration": "9–10 hours",
          "stops": "Nonstop or 1 stop (depending on carrier)",
          "status": "planned"
        },
        {
          "from": "Rome",
          "to": "Florence",
          "mode": "rail",
          "duration": "2.5 hours",
          "stops": "Direct Freccia train (Termini to Santa Maria Novella)",
          "status": "planned"
        },
        {
          "from": "Florence",
          "to": "Salerno (for Amalfi)",
          "mode": "rail",
          "duration": "4 hours",
          "stops": "Direct Freccia or IC train, then 1-hour SITA bus to Amalfi town",
          "status": "planned"
        },
        {
          "from": "Amalfi Coast",
          "to": "Rome",
          "mode": "rail",
          "duration": "5 hours",
          "stops": "Return via Salerno–Florence–Rome or fly from Naples",
          "status": "planned"
        }
      ]
    },
    "itineraryDays": [
      {
        "dayNumber": 1,
        "city": "Rome",
        "date": "Day of arrival",
        "kind": "arrival",
        "blocks": [
          {
            "slot": "morning",
            "label": "Arrive at Fiumicino; clear immigration",
            "detail": "Follow signs to baggage claim and customs. If purchasing a SIM, the kiosk is pre-security. Exchange a small amount of cash or use Bancomat ATM near Terminal 3."
          },
          {
            "slot": "afternoon",
            "label": "Transfer to hotel in Trastevere; rest & freshen up",
            "detail": "Take Metro Line B + walk (~45 min, €1.50), or taxi (~30 min, €16 fixed fare). Check in, rest, shower. Grab a coffee and pasticceria (pastry) near your hotel."
          },
          {
            "slot": "evening",
            "label": "Early dinner in Trastevere",
            "detail": "Head to your pre-reserved trattoria. Order cacio e pepe or carbonara—Roman classics. Walk Via della Scala and Vicolo del Piede for the neighborhood feeling. Back to hotel by 10pm for sleep."
          }
        ]
      },
      {
        "dayNumber": 3,
        "city": "Florence",
        "date": "Representative day",
        "kind": "explore",
        "blocks": [
          {
            "slot": "morning",
            "label": "Colazione (breakfast) & Uffizi Gallery or Duomo",
            "detail": "Breakfast at a café: espresso and cornetto (croissant). Enter Uffizi 30 min after opening or book timed entry. Climb the dome of the Duomo for city views if lines are short."
          },
          {
            "slot": "afternoon",
            "label": "Lunch in the Oltrarno neighborhood",
            "detail": "Cross the Ponte Vecchio and eat at a local osteria: ribollita (Tuscan vegetable stew), pappardelle (wide ribbon pasta), or bistecca fiorentina (grilled steak). Browse artisan workshops and leather shops on Via Guicciardini."
          },
          {
            "slot": "evening",
            "label": "Wine at a neighborhood enoteca, light cena",
            "detail": "Walk through Piazzale Michelangelo at sunset (2km from downtown, worth it). Settle into a wine bar in Sant'Ambrogio for Tuscan wine and antipasti. Dinner is lighter after the big midday meal."
          }
        ]
      },
      {
        "dayNumber": 8,
        "city": "Amalfi Coast",
        "date": "Representative day",
        "kind": "explore",
        "blocks": [
          {
            "slot": "morning",
            "label": "Colazione in Positano or Amalfi town; beach or town walk",
            "detail": "Breakfast overlooking the sea. Walk the steep narrow streets of Positano (pastel buildings, boutiques) or Amalfi (the cathedral, main piazza). Take photos from the clifftop promenade."
          },
          {
            "slot": "afternoon",
            "label": "Lunch: fresh pasta con le melanzane or seafood pasta",
            "detail": "Find a beachfront or piazza restaurant. Order pasta alla norma, spaghetti alle vongole (clams), or fresh mozzarella with local lemons. Local limoncello (lemon liqueur) is served chilled as an after-dinner digestivo."
          },
          {
            "slot": "evening",
            "label": "Boat tour or evening stroll; casual seaside dinner",
            "detail": "If weather permits, take a 1-hour boat tour of grottoes or nearby Capri. Return by 7:30pm for cena: grilled branzino (sea bass) or seafood pasta. Gelato walk along the promenade after dinner."
          }
        ]
      }
    ],
    "hotel": {
      "name": "Hotel Artemide (illustrative: mid-range, central Rome)",
      "addressLocal": "Via Nazionale, 22",
      "addressEn": "22 Via Nazionale, Rome 00184",
      "neighborhood": "Near Termini & Trastevere access",
      "city": "Rome"
    },
    "phrases": [
      {
        "group": "Greetings",
        "items": [
          {
            "en": "Good morning / Good evening",
            "local": "Buongiorno / Buonasera",
            "roman": ""
          },
          {
            "en": "Thank you very much",
            "local": "Grazie mille",
            "roman": ""
          },
          {
            "en": "Excuse me / I'm sorry",
            "local": "Scusi / Mi scusi",
            "roman": ""
          }
        ]
      },
      {
        "group": "Taxi & transport",
        "items": [
          {
            "en": "Please take me to this address",
            "local": "Mi porti a questo indirizzo, per favore",
            "roman": ""
          },
          {
            "en": "How much to [location]?",
            "local": "Quanto costa per [location]?",
            "roman": ""
          },
          {
            "en": "One train ticket to Florence, please",
            "local": "Un biglietto per Firenze, per favore",
            "roman": ""
          }
        ]
      },
      {
        "group": "Restaurant",
        "items": [
          {
            "en": "A table for two, please",
            "local": "Un tavolo per due, per favore",
            "roman": ""
          },
          {
            "en": "The menu / The wine list, please",
            "local": "Il menu / La lista dei vini, per favore",
            "roman": ""
          },
          {
            "en": "Delicious! My compliments to the chef",
            "local": "Delizioso! I miei complimenti allo chef",
            "roman": ""
          }
        ]
      },
      {
        "group": "Payment",
        "items": [
          {
            "en": "The bill, please / Is service included?",
            "local": "Il conto, per favore / Servizio incluso?",
            "roman": ""
          },
          {
            "en": "Do you accept cards?",
            "local": "Accettate carte di credito?",
            "roman": ""
          },
          {
            "en": "Where is the ATM (Bancomat)?",
            "local": "Dov'è il Bancomat?",
            "roman": ""
          }
        ]
      },
      {
        "group": "Emergency",
        "items": [
          {
            "en": "I need help / Call an ambulance",
            "local": "Ho bisogno di aiuto / Chiamate un'ambulanza",
            "roman": ""
          },
          {
            "en": "Where is the nearest pharmacy?",
            "local": "Dov'è la farmacia più vicina?",
            "roman": ""
          },
          {
            "en": "Do you speak English?",
            "local": "Parla inglese?",
            "roman": ""
          }
        ]
      }
    ],
    "emergencyContacts": [
      {
        "label": "Police",
        "number": "113",
        "kind": "urgent"
      },
      {
        "label": "Medical",
        "number": "118",
        "kind": "urgent"
      },
      {
        "label": "U.S. citizens abroad · State Dept",
        "number": "+1 888 407 4747",
        "kind": "consular"
      }
    ],
    "predeparture": [
      {
        "group": "Passport & visas",
        "items": [
          {
            "id": "passport-validity",
            "label": "Confirm passport valid through trip end +3 months"
          },
          {
            "id": "passport-copies",
            "label": "Photograph passport & cards; save in secure cloud"
          }
        ]
      },
      {
        "group": "Flights & accommodation",
        "items": [
          {
            "id": "flights-booked",
            "label": "Confirm flight confirmations (e-tickets saved)"
          },
          {
            "id": "trains-booked",
            "label": "Trenitalia reservations for Rome–Florence–Salerno legs"
          },
          {
            "id": "hotels-booked",
            "label": "All three hotel confirmations & check-in times noted"
          }
        ]
      },
      {
        "group": "Money & payments",
        "items": [
          {
            "id": "banks-notified",
            "label": "Called card issuers; confirmed travel dates & zero fraud holds"
          },
          {
            "id": "mobile-pay-enabled",
            "label": "Apple Pay / Google Pay linked to primary card"
          },
          {
            "id": "atm-plan",
            "label": "Debit card confirmed no int'l fees; ATM locations saved in Maps"
          }
        ]
      },
      {
        "group": "Connectivity",
        "items": [
          {
            "id": "esim-or-sim",
            "label": "eSIM purchased or SIM planned at Rome airport"
          },
          {
            "id": "maps-offline",
            "label": "Offline maps downloaded: Rome, Florence, Amalfi Coast"
          },
          {
            "id": "apps-installed",
            "label": "Trenitalia, Google Translate, Michelin Guide, local transit apps"
          }
        ]
      },
      {
        "group": "On arrival",
        "items": [
          {
            "id": "first-night-dinner",
            "label": "Trattoria reservation made for arrival evening in Rome"
          },
          {
            "id": "hotel-wifi",
            "label": "Hotel WiFi credentials & booking confirmations screenshot"
          },
          {
            "id": "emergency-numbers",
            "label": "US Embassy Rome & Italian emergency numbers (112, 118) saved"
          }
        ]
      }
    ]
  },
  "FR": {
    "country": {
      "code": "FR",
      "name": "France",
      "capital": "Paris",
      "region": "Europe",
      "flag": "🇫🇷"
    },
    "heroCity": "Paris",
    "heroImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1280px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
    "arrivalAirport": {
      "code": "CDG",
      "city": "Paris"
    },
    "currency": {
      "code": "EUR",
      "symbol": "€",
      "usdRate": 0.861602
    },
    "languages": [
      "French"
    ],
    "phraseLang": {
      "name": "French",
      "bcp47": "fr-FR",
      "hasRomanization": false
    },
    "homeCountry": "United States",
    "summary": "12-day food and culture road trip through Paris and Provence—a mid-range plan for two travelers. Focus on building French conversational confidence, setting up contactless payments, booking key restaurants and regional trains in advance, and arriving with offline guides for neighborhoods and local markets.",
    "visaLabel": "Visa-free · 90 days",
    "categories": [
      {
        "id": "visa",
        "name": "Visa & documents",
        "icon": "IdentificationCard",
        "total": 3,
        "done": 0,
        "nextTaskId": "visa-check",
        "blurb": "US passport holders are visa-free in France for up to 90 days within the Schengen zone. Confirm passport validity and carry proof of return travel."
      },
      {
        "id": "flights",
        "name": "Flights & stay",
        "icon": "AirplaneTilt",
        "total": 3,
        "done": 0,
        "nextTaskId": "flights-book",
        "blurb": "Book your transatlantic flight and regional trains between Paris and Provence. For mid-range comfort and food focus, book boutique hotels or well-reviewed apartments in walkable neighborhoods."
      },
      {
        "id": "transport",
        "name": "Local transport",
        "icon": "TrainSimple",
        "total": 3,
        "done": 0,
        "nextTaskId": "ratp-navigo",
        "blurb": "Paris runs on the RATP métro and buses; Provence is best navigated by train and occasional rental car. Set up ticketing and navigation apps before arrival."
      },
      {
        "id": "money",
        "name": "Money & payments",
        "icon": "Wallet",
        "total": 3,
        "done": 0,
        "nextTaskId": "contactless-enable",
        "blurb": "France is highly card-based. Set up contactless payment and know your card's foreign-transaction fees before you leave."
      },
      {
        "id": "connectivity",
        "name": "Connectivity",
        "icon": "GlobeHemisphereWest",
        "total": 3,
        "done": 0,
        "nextTaskId": "sim-plan",
        "blurb": "Get a French SIM or roaming plan, activate offline maps, and download restaurant reservation confirmations. Connectivity is good in cities and towns but patchy in rural Provence."
      },
      {
        "id": "culture",
        "name": "Culture & etiquette",
        "icon": "HandHeart",
        "total": 3,
        "done": 0,
        "nextTaskId": "french-phrases",
        "blurb": "Learn essential French greetings and dining etiquette. Respect meal timing (lunch 12–2pm, dinner after 7pm) and always greet shopkeepers."
      },
      {
        "id": "landing",
        "name": "Landing Day Hub",
        "icon": "MapPin",
        "total": 0,
        "done": 0,
        "nextTaskId": "cdg-transport",
        "blurb": "Your first day tasks: clear CDG, reach your Paris hotel, buy a RATP Navigo or carnet of 10 métro tickets, grab a SIM if needed, and confirm your first restaurant reservation."
      }
    ],
    "tasks": {
      "visa-check": {
        "id": "visa-check",
        "title": "Confirm passport validity (6+ months)",
        "category": "Visa & documents",
        "status": "ready",
        "duration": "5 min",
        "why": "US citizens need a passport valid for the duration of stay in France. Entry is visa-free but passport strength matters.",
        "steps": [
          "Check your passport expiration date",
          "If it expires within 6 months of your return, renew it now via the State Department"
        ],
        "cta": "Check expiration",
        "needs": [
          "Your passport"
        ]
      },
      "visa-return": {
        "id": "visa-return",
        "title": "Gather proof of return travel",
        "category": "Visa & documents",
        "status": "upcoming",
        "duration": "10 min",
        "why": "French border agents may ask for onward or return travel proof. Have a return flight confirmation or itinerary ready.",
        "steps": [
          "Save your return flight confirmation email or booking reference",
          "Keep a copy in your phone and a printed backup"
        ],
        "cta": "Save confirmations"
      },
      "visa-insurance": {
        "id": "visa-insurance",
        "title": "Consider travel and health insurance",
        "category": "Visa & documents",
        "status": "upcoming",
        "duration": "20 min",
        "why": "Travel insurance covers trip cancellations and medical emergencies abroad. Not required but strongly recommended for 12-day trips.",
        "steps": [
          "Compare plans on InsureMyTrip or World Nomads",
          "Choose a mid-range plan with medical and cancel-for-any-reason coverage"
        ],
        "cta": "Get a quote"
      },
      "flights-book": {
        "id": "flights-book",
        "title": "Book your transatlantic flight to Paris",
        "category": "Flights & stay",
        "status": "ready",
        "duration": "30–45 min",
        "why": "12-day trips require flights booked well in advance to secure good fares and convenient departure times.",
        "steps": [
          "Search Kayak or Google Flights for departures to Paris CDG from your home airport",
          "Book the flight and save your confirmation; set a calendar reminder 24 hours before check-in"
        ],
        "cta": "Search flights",
        "headsUp": "Spring (April–May) and fall (September–October) are prime seasons—book now to avoid steep prices."
      },
      "flights-trains": {
        "id": "flights-trains",
        "title": "Book regional trains (Paris to Provence)",
        "category": "Flights & stay",
        "status": "upcoming",
        "duration": "20 min",
        "why": "The SNCF Provence-bound trains fill quickly during peak season. Book direct Paris–Avignon or Paris–Lyon on SNCF.com to secure good times.",
        "steps": [
          "Visit sncf.com and select your dates and preferred route (e.g., Paris → Avignon)",
          "Book early-morning or mid-afternoon trains to maximize time at each destination"
        ],
        "cta": "Book on SNCF",
        "needs": [
          "Your arrival date in Paris",
          "Planned Provence departure date"
        ]
      },
      "flights-hotels": {
        "id": "flights-hotels",
        "title": "Book boutique hotels or apartments in walkable neighborhoods",
        "category": "Flights & stay",
        "status": "upcoming",
        "duration": "45 min",
        "why": "A food-focused couple benefits from staying in historic neighborhoods (e.g., Marais in Paris, Vieux Avignon in Provence) with easy access to markets, restaurants and streets to explore.",
        "steps": [
          "Search Booking.com or Airbnb for mid-range stays in Marais (Paris) and Vieux Avignon (Provence)",
          "Prioritize places within walking distance of metro/train stations and local markets"
        ],
        "cta": "Search neighborhoods",
        "needs": [
          "12-day itinerary split (e.g., 6 nights Paris, 4 nights Provence, 2 flexible)"
        ]
      },
      "ratp-navigo": {
        "id": "ratp-navigo",
        "title": "Download the RATP app for Paris métro navigation",
        "category": "Local transport",
        "status": "ready",
        "duration": "10 min",
        "why": "The RATP app shows real-time métro and bus schedules in Paris. Having it offline-ready removes navigation stress on arrival.",
        "steps": [
          "Download the RATP (Île-de-France Mobilités) app to your phone",
          "Save the metro map as a PDF or screenshot key lines (Line 1, 4, 5 cover most tourist areas)"
        ],
        "cta": "Download RATP app"
      },
      "ratp-tickets": {
        "id": "ratp-tickets",
        "title": "Plan Paris metro payment (Navigo carnet vs. daily pass)",
        "category": "Local transport",
        "status": "upcoming",
        "duration": "5 min",
        "why": "Paris métro tickets are cheap; choosing a carnet (10-pack) or a daily pass in advance saves you from lines at machines.",
        "steps": [
          "Decide: a carnet of 10 tickets (€17, best for 3–4 journeys/day) or a Navigo Découverte week pass (€34, best for heavy use)",
          "Buy on arrival at a station ticket window or via the RATP app"
        ],
        "cta": "Plan your pass"
      },
      "ratp-rental": {
        "id": "ratp-rental",
        "title": "Reserve a car for Provence exploration",
        "category": "Local transport",
        "status": "upcoming",
        "duration": "20 min",
        "why": "Provence villages and lavender fields are best reached by car. Mid-range rentals from Avignon or Marseille are affordable and give you flexibility.",
        "steps": [
          "Reserve a compact car via Rentalcars.com or Hertz for your Provence dates",
          "Confirm pickup near your Provence hotel or train station"
        ],
        "cta": "Search rentals",
        "headsUp": "Book early; summer inventory is tight. International Driving Permit is not required for US drivers but carry it anyway."
      },
      "contactless-enable": {
        "id": "contactless-enable",
        "title": "Enable contactless payment on your credit/debit card",
        "category": "Money & payments",
        "status": "ready",
        "duration": "10 min",
        "why": "France is almost cashless; contactless (tap) payments work everywhere. Enabling this avoids the need for cash withdrawals.",
        "steps": [
          "Call your card issuer or use their app to enable contactless; most US cards have this by default",
          "Test the feature at a store before you leave the US"
        ],
        "cta": "Enable contactless",
        "needs": [
          "Your card issuer's phone number or app"
        ]
      },
      "contactless-fees": {
        "id": "contactless-fees",
        "title": "Check your card's foreign-transaction fees",
        "category": "Money & payments",
        "status": "ready",
        "duration": "5 min",
        "why": "Many US cards charge 2–3% on foreign purchases. Finding a no-fee option (e.g., Charles Schwab, some travel cards) saves hundreds over 12 days.",
        "steps": [
          "Log into your card's website or call the issuer to confirm the foreign-transaction fee",
          "If it's >1.5%, apply for a travel credit card (Charles Schwab Investor Checking or Altitude Reserve) before you leave"
        ],
        "cta": "Check fees"
      },
      "contactless-atm": {
        "id": "contactless-atm",
        "title": "Know where to withdraw cash as backup",
        "category": "Money & payments",
        "status": "upcoming",
        "duration": "5 min",
        "why": "Some small markets and rural restaurants still accept only cash. Knowing ATM locations (especially near your hotels) is a safe fallback.",
        "steps": [
          "Identify ATMs near your Paris hotel (BNP Paribas, Crédit Agricole) and Provence hotel",
          "Plan to withdraw €200–300 on arrival for contingencies"
        ],
        "cta": "Note ATM locations"
      },
      "sim-plan": {
        "id": "sim-plan",
        "title": "Arrange a French SIM or roaming plan",
        "category": "Connectivity",
        "status": "ready",
        "duration": "15 min",
        "why": "Using local data and SMS avoids roaming charges. A French SIM (€15–20 for 10GB) or a managed roaming plan ensures you stay connected for navigation and reservations.",
        "steps": [
          "Either: buy an Orange, Free, or Bouygues SIM at the CDG airport (€20 with data), or activate a roaming package through your US carrier (T-Mobile's Pass or Verizon TravelPass)",
          "Test connection before leaving the airport"
        ],
        "cta": "Choose connectivity option",
        "headsUp": "If you buy a French SIM, carriers will ask for a French phone number; use your hotel's or a temporary one."
      },
      "sim-offline": {
        "id": "sim-offline",
        "title": "Download offline maps and restaurant guides",
        "category": "Connectivity",
        "status": "ready",
        "duration": "20 min",
        "why": "Rural Provence has spotty signal. Offline maps (Google Maps, Maps.me) and saved restaurant confirmations let you navigate confidently without constant data.",
        "steps": [
          "In Google Maps, search your hotel areas and download offline maps for Paris and Provence regions",
          "Save all restaurant reservation confirmations as PDFs in your phone"
        ],
        "cta": "Download maps and confirmations"
      },
      "sim-translation": {
        "id": "sim-translation",
        "title": "Install Google Translate or iTranslate offline",
        "category": "Connectivity",
        "status": "upcoming",
        "duration": "10 min",
        "why": "Offline translation helps decode menus, signs, and brief conversations in smaller towns or markets.",
        "steps": [
          "Download Google Translate app and enable offline French→English",
          "Optional: take a screenshot of key phrases (food terms, prices) to have as visual reference"
        ],
        "cta": "Install translator"
      },
      "french-phrases": {
        "id": "french-phrases",
        "title": "Learn essential French greetings and dining courtesies",
        "category": "Culture & etiquette",
        "status": "ready",
        "duration": "30 min",
        "why": "French people appreciate effort to speak their language, especially in restaurants and shops. Knowing 10–15 key phrases earns goodwill and improves your meals.",
        "steps": [
          "Spend 30 minutes memorizing greetings, 'please/thank you', and basic food questions (see Phrases section below)",
          "Practice pronunciation with Google Translate or YouTube videos"
        ],
        "cta": "Start learning phrases"
      },
      "french-etiquette": {
        "id": "french-etiquette",
        "title": "Understand French meal timing and dining etiquette",
        "category": "Culture & etiquette",
        "status": "upcoming",
        "duration": "10 min",
        "why": "French dining has strict customs (lunch 12–2pm, dinner after 7pm; never ask for modifications). Respecting these prevents awkward moments and gets you better service.",
        "steps": [
          "Note that breakfast is small (coffee, pastry), lunch is the main meal, dinner is lighter",
          "Read one article on French dining etiquette (no ice in water, bread on table, pace matters) before your first restaurant"
        ],
        "cta": "Read etiquette guide"
      },
      "french-markets": {
        "id": "french-markets",
        "title": "Research famous food markets and bistros in your neighborhoods",
        "category": "Culture & etiquette",
        "status": "upcoming",
        "duration": "45 min",
        "why": "A food-focused couple should know the key markets (Bastille, Marché Provençal in Antibes) and iconic bistros in your hotel neighborhoods before arrival.",
        "steps": [
          "Browse Michelin Guide, LaFourchette.com, and Eater Paris for well-reviewed mid-range bistros near your hotels",
          "Make a list of 6–8 restaurants and reserve via TheFork app or direct websites"
        ],
        "cta": "Browse and book restaurants"
      },
      "cdg-transport": {
        "id": "cdg-transport",
        "title": "Plan your CDG airport → Paris hotel route",
        "category": "Landing",
        "status": "upcoming",
        "duration": "10 min",
        "why": "Arriving at a massive airport is stressful. Pre-booking your transfer or learning the RER train eliminates confusion and gets you to your hotel on time.",
        "steps": [
          "Choose: RER B train from CDG to your metro station (€12, 30–45 min) or a pre-booked transfer (€40–60)",
          "Save the RER station map; trains run every 5–10 min"
        ],
        "cta": "Book transfer or note RER route"
      },
      "cdg-essentials": {
        "id": "cdg-essentials",
        "title": "Save a checklist for your first 2 hours in Paris",
        "category": "Landing",
        "status": "upcoming",
        "duration": "5 min",
        "why": "Landing checklists (clear customs, find luggage, buy SIM, reach hotel, confirm restaurant) keep you focused and avoid forgetting key tasks.",
        "steps": [
          "Write down: 1) Clear customs, 2) Buy SIM (if plan), 3) Get metro carnet, 4) Reach hotel, 5) Call restaurant to confirm",
          "Screenshot the checklist and your hotel address in your phone"
        ],
        "cta": "Create landing checklist"
      },
      "cdg-emergency": {
        "id": "cdg-emergency",
        "title": "Save emergency contact info and your hotel address",
        "category": "Landing",
        "status": "upcoming",
        "duration": "5 min",
        "why": "In a lost-luggage or medical scenario, instant access to your hotel, consulate, and emergency contacts avoids panic and delays.",
        "steps": [
          "Write your hotel name, address, and phone number in your phone notes and as a screenshot",
          "Store the US Embassy Paris number (33-1-4312-2222) and your travel insurance provider's 24/7 line"
        ],
        "cta": "Save addresses and numbers"
      }
    },
    "briefingBuckets": {
      "now": [
        "visa-check",
        "flights-book",
        "ratp-navigo",
        "contactless-enable",
        "contactless-fees",
        "sim-plan",
        "sim-offline",
        "french-phrases"
      ],
      "soon": [
        "visa-return",
        "visa-insurance",
        "flights-trains",
        "flights-hotels",
        "ratp-tickets",
        "ratp-rental",
        "contactless-atm",
        "sim-translation",
        "french-etiquette",
        "french-markets"
      ],
      "final": [
        "cdg-transport",
        "cdg-essentials",
        "cdg-emergency"
      ]
    },
    "itinerary": {
      "routeTitle": "Paris & Provence: 12 Days of Food and Culture",
      "dateRange": "April–May or September–October (shoulder season)",
      "cities": [
        {
          "code": "CDG",
          "name": "Paris",
          "days": 6,
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1280px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
          "stayLabel": "Marais neighborhood"
        },
        {
          "code": "AVN",
          "name": "Provence",
          "days": 4,
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Lavender_field_and_Mont_Ventoux.jpg/1280px-Lavender_field_and_Mont_Ventoux.jpg",
          "stayLabel": "Vieux Avignon"
        },
        {
          "code": "FR",
          "name": "Flexible (Marseille or return)",
          "days": 2,
          "image": "",
          "stayLabel": "buffer days"
        }
      ],
      "legs": [
        {
          "from": "Your US city",
          "to": "Paris (CDG)",
          "mode": "plane",
          "duration": "8–10 hours",
          "stops": "direct or 1 stop",
          "status": "planned"
        },
        {
          "from": "Paris",
          "to": "Avignon",
          "mode": "rail",
          "duration": "2h 30m",
          "stops": "direct SNCF TGV",
          "status": "planned"
        },
        {
          "from": "Provence (car)",
          "to": "Return to Avignon → Paris",
          "mode": "car",
          "duration": "4–5 days local driving",
          "stops": "Avignon, Arles, Les Baux, Vaison-la-Romaine",
          "status": "planned"
        },
        {
          "from": "Paris (return leg)",
          "to": "Your US city",
          "mode": "plane",
          "duration": "8–10 hours",
          "stops": "direct or 1 stop",
          "status": "planned"
        }
      ]
    },
    "itineraryDays": [
      {
        "dayNumber": 1,
        "city": "Paris",
        "date": "Arrival day",
        "kind": "arrival",
        "blocks": [
          {
            "slot": "morning",
            "label": "Land at CDG, clear customs",
            "detail": "Take RER B train or pre-booked transfer to Marais hotel (30–45 min). Check in early if possible.",
            "meta": "Checklist: customs, luggage, SIM, métro carnet"
          },
          {
            "slot": "afternoon",
            "label": "Rest and orient",
            "detail": "Drop bags, shower, walk around Marais. Grab a coffee and pastry. Confirm your dinner reservation.",
            "meta": "Marais is compact and walkable; get your bearings"
          },
          {
            "slot": "evening",
            "label": "First dinner in Paris",
            "detail": "Dine at a mid-range bistro in Marais (e.g., La Belle Hortense or L'As du Fallafel). Arrive by 7:30 PM.",
            "meta": "Light meal; preserve your appetite for the week ahead"
          }
        ]
      },
      {
        "dayNumber": 2,
        "city": "Paris",
        "date": "Day 2 (exploratory)",
        "kind": "explore",
        "blocks": [
          {
            "slot": "morning",
            "label": "Marais market and breakfast",
            "detail": "Visit Marché des Enfants Rouges (covered market, stunning). Buy fresh fruit, cheese, charcuterie.",
            "meta": "Open 8 AM–1 PM. Arrive early for the best selection."
          },
          {
            "slot": "afternoon",
            "label": "Explore galleries, cafés, and side streets",
            "detail": "Wander Place des Vosges. Browse galleries and vintage shops. Sit in a café with a coffee and people-watch.",
            "meta": "Marais is the heart of Paris food and culture; no agenda needed"
          },
          {
            "slot": "evening",
            "label": "Lunch-style dinner (light bistro or wine bar)",
            "detail": "Try a small wine bar or casual bistro. Share small plates (terrines, pâtés, cheeses). Example: Le Baron Rouge.",
            "meta": "Wine bars are intimate and affordable; perfect for couples"
          }
        ]
      }
    ],
    "hotel": {
      "name": "Hotel Bastille Speria",
      "addressLocal": "1 Rue de la Bastille, 75004 Paris",
      "roman": "",
      "addressEn": "1 Bastille Street, Marais, Paris 75004",
      "neighborhood": "Marais",
      "city": "Paris"
    },
    "phrases": [
      {
        "group": "Greetings",
        "items": [
          {
            "en": "Hello / Good morning",
            "local": "Bonjour",
            "roman": ""
          },
          {
            "en": "Good evening",
            "local": "Bonsoir",
            "roman": ""
          },
          {
            "en": "Thank you / Thank you very much",
            "local": "Merci / Merci beaucoup",
            "roman": ""
          }
        ]
      },
      {
        "group": "Taxi",
        "items": [
          {
            "en": "To [this address], please",
            "local": "À [cette adresse], s'il vous plaît",
            "roman": ""
          },
          {
            "en": "How much to the Marais?",
            "local": "Combien pour le Marais?",
            "roman": ""
          },
          {
            "en": "Can you take me to the métro station?",
            "local": "Pouvez-vous m'amener à la station de métro?",
            "roman": ""
          }
        ]
      },
      {
        "group": "Restaurant",
        "items": [
          {
            "en": "A table for two, please",
            "local": "Une table pour deux, s'il vous plaît",
            "roman": ""
          },
          {
            "en": "What do you recommend?",
            "local": "Qu'est-ce que vous recommandez?",
            "roman": ""
          },
          {
            "en": "The bill, please",
            "local": "L'addition, s'il vous plaît",
            "roman": ""
          }
        ]
      },
      {
        "group": "Payment",
        "items": [
          {
            "en": "Can I pay by card?",
            "local": "Puis-je payer par carte?",
            "roman": ""
          },
          {
            "en": "Do you take contactless?",
            "local": "Acceptez-vous le sans contact?",
            "roman": ""
          },
          {
            "en": "Where is the ATM?",
            "local": "Où est le distributeur?",
            "roman": ""
          }
        ]
      },
      {
        "group": "Emergency",
        "items": [
          {
            "en": "Help!",
            "local": "À l'aide!",
            "roman": ""
          },
          {
            "en": "Where is the nearest pharmacy?",
            "local": "Où est la pharmacie la plus proche?",
            "roman": ""
          },
          {
            "en": "I need a doctor",
            "local": "J'ai besoin d'un médecin",
            "roman": ""
          }
        ]
      }
    ],
    "emergencyContacts": [
      {
        "label": "Police",
        "number": "17",
        "kind": "urgent"
      },
      {
        "label": "Medical",
        "number": "15",
        "kind": "urgent"
      },
      {
        "label": "Fire",
        "number": "18",
        "kind": "urgent"
      },
      {
        "label": "U.S. citizens abroad · State Dept",
        "number": "+1 888 407 4747",
        "kind": "consular"
      }
    ],
    "predeparture": [
      {
        "group": "Flights & Stay",
        "items": [
          {
            "id": "booking-screenshots",
            "label": "Screenshot all booking confirmations",
            "sub": "Flight, hotels, train, rental car, restaurants"
          },
          {
            "id": "luggage-allowance",
            "label": "Confirm baggage allowance and pack",
            "sub": "Check airline weight limits; pack light for Paris métro"
          },
          {
            "id": "check-in-24h",
            "label": "Check in online 24 hours before flight",
            "sub": "Reserve your seat; avoid the airport queue"
          }
        ]
      },
      {
        "group": "Money & Documents",
        "items": [
          {
            "id": "passport-photocopy",
            "label": "Photocopy your passport (ID page + visa page if any)",
            "linkedTaskId": "visa-check",
            "sub": "Keep a copy separate from original"
          },
          {
            "id": "card-copy",
            "label": "Note your card details separately from the card itself",
            "linkedTaskId": "contactless-enable",
            "sub": "In case of loss; also write down issuer's fraud number"
          },
          {
            "id": "travel-insurance-cert",
            "label": "Download travel insurance policy and emergency line number",
            "linkedTaskId": "visa-insurance",
            "sub": "Save as PDF in your phone"
          }
        ]
      },
      {
        "group": "Connectivity & Navigation",
        "items": [
          {
            "id": "maps-downloaded",
            "label": "Download offline maps for Paris, Provence, and route",
            "linkedTaskId": "sim-offline",
            "sub": "Google Maps, Maps.me, or OsmAnd"
          },
          {
            "id": "apps-installed",
            "label": "Install RATP, SNCF Connect, Google Translate, TheFork",
            "linkedTaskId": "ratp-navigo",
            "sub": "Test all apps at home before you fly"
          },
          {
            "id": "confirmations-saved",
            "label": "Save restaurant and hotel confirmations as PDFs",
            "linkedTaskId": "sim-offline",
            "sub": "In case of connectivity issues"
          }
        ]
      },
      {
        "group": "Pre-Flight Checklist",
        "items": [
          {
            "id": "weather-check",
            "label": "Check weather and pack accordingly",
            "sub": "Light layers for shoulder season; comfortable walking shoes"
          },
          {
            "id": "power-adaptor",
            "label": "Bring a US-to-EU power adapter",
            "sub": "France uses Type C/E plugs; USB-C adapters are common"
          },
          {
            "id": "departure-prep",
            "label": "Charge all devices and arrive at airport 3 hours early",
            "sub": "International flight: arrive early, bring power bank"
          }
        ]
      }
    ]
  },
  "ES": {
    "country": {
      "code": "ES",
      "name": "Spain",
      "capital": "Madrid",
      "region": "Europe",
      "flag": "🇪🇸"
    },
    "heroCity": "Barcelona",
    "heroImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Aerial_view_of_Barcelona%2C_Spain_%2851227309370%29_edited.jpg/1280px-Aerial_view_of_Barcelona%2C_Spain_%2851227309370%29_edited.jpg",
    "arrivalAirport": {
      "code": "BCN",
      "city": "Barcelona"
    },
    "currency": {
      "code": "EUR",
      "symbol": "€",
      "usdRate": 0.861602
    },
    "languages": [
      "Spanish",
      "Catalan",
      "Basque",
      "Galician"
    ],
    "phraseLang": {
      "name": "Spanish",
      "bcp47": "es-ES",
      "hasRomanization": false
    },
    "homeCountry": "United States",
    "summary": "A 12-day food and culture immersion across Spain's three cultural capitals: Barcelona's Catalan design and markets, Madrid's art museums and tapas bars, and Seville's flamenco and Andalusian tradition. This plan readies you with payment systems, transit passes, language essentials, and cultural grounding so you arrive confident and eat well everywhere.",
    "visaLabel": "Visa-free · 90 days",
    "categories": [
      {
        "id": "visa",
        "name": "Visa & documents",
        "icon": "IdentificationCard",
        "total": 3,
        "done": 0,
        "nextTaskId": "visa-confirm",
        "blurb": "US citizens enter Spain visa-free for up to 90 days. Verify passport validity and keep digital copies."
      },
      {
        "id": "flights",
        "name": "Flights & stay",
        "icon": "AirplaneTilt",
        "total": 3,
        "done": 0,
        "nextTaskId": "flights-book",
        "blurb": "Book your Barcelona arrival, Madrid connection, and Seville stay. Mix hotels and riads for authentic neighborhood life."
      },
      {
        "id": "transport",
        "name": "Local transport",
        "icon": "TrainSimple",
        "total": 3,
        "done": 0,
        "nextTaskId": "transport-barcelona-card",
        "blurb": "Load regional T-Casual cards, learn metro systems, book intercity trains via Renfe. Budget EUR 60–80 for ground transport across all three cities."
      },
      {
        "id": "money",
        "name": "Money & payments",
        "icon": "Wallet",
        "total": 3,
        "done": 0,
        "nextTaskId": "money-wise",
        "blurb": "EUR is the only currency. Load Wise multi-currency card, set up contactless payments, notify your bank of travel dates."
      },
      {
        "id": "connectivity",
        "name": "Connectivity",
        "icon": "GlobeHemisphereWest",
        "total": 3,
        "done": 0,
        "nextTaskId": "connectivity-sim",
        "blurb": "Grab a Spanish SIM (Vodafone, Orange, Movistar) or eSIM at arrival for maps, translation, and restaurant reservations."
      },
      {
        "id": "culture",
        "name": "Culture & etiquette",
        "icon": "HandHeart",
        "total": 3,
        "done": 0,
        "nextTaskId": "culture-meals",
        "blurb": "Spanish meal times shift late. Dinner rarely starts before 20:00. Learn tapas etiquette, flamenco history, and when to tip (not expected but appreciated)."
      },
      {
        "id": "landing",
        "name": "Landing Day Hub",
        "icon": "MapPin",
        "total": 3,
        "done": 0,
        "nextTaskId": "landing-transport",
        "blurb": "Arrive at Barcelona-El Prat, collect transport card and SIM, head to Gothic Quarter. Save this page and phrases for offline use."
      }
    ],
    "tasks": {
      "visa-confirm": {
        "id": "visa-confirm",
        "title": "Confirm your US passport is valid through your return date",
        "category": "Visa & documents",
        "status": "ready",
        "duration": "5 min",
        "why": "US citizens are visa-free in Spain for 90 days, but your passport must be valid on entry; check it this week.",
        "steps": [
          "Pull your passport and verify the expiration date is after your return date.",
          "If expiring within 6 months, renew it now at your local passport office."
        ],
        "cta": "Check passport",
        "needs": [
          "Your passport"
        ]
      },
      "visa-copies": {
        "id": "visa-copies",
        "title": "Photograph both pages of your passport and store them securely",
        "category": "Visa & documents",
        "status": "ready",
        "duration": "5 min",
        "why": "A copy in your cloud and phone speeds up emergency replacement if your passport is lost or stolen abroad.",
        "steps": [
          "Photograph the identity page and the data page with your phone.",
          "Upload to a password-protected cloud folder (Google Drive, OneDrive, etc.) and note the link."
        ],
        "cta": "Back up passport"
      },
      "visa-travel-auth": {
        "id": "visa-travel-auth",
        "title": "Register with the US State Department's Smart Traveler Enrollment Program (STEP)",
        "category": "Visa & documents",
        "status": "upcoming",
        "duration": "10 min",
        "why": "STEP alerts the embassy if there's an emergency in Spain, so they can reach you quickly.",
        "steps": [
          "Visit step.state.gov and log in with your passport details.",
          "Register your trip, hotel address, and emergency contact."
        ],
        "cta": "Enroll in STEP"
      },
      "flights-book": {
        "id": "flights-book",
        "title": "Book your round-trip flights to Barcelona and internal trains to Madrid and Seville",
        "category": "Flights & stay",
        "status": "ready",
        "duration": "1–2 hours",
        "why": "You've picked dates; locking flights and intercity transport now secures better prices and guarantees seat availability across three cities.",
        "steps": [
          "Search Skyscanner, Google Flights, or Kayak for US to Barcelona (BCN) arrival and return, aiming for mid-morning arrival.",
          "Book Barcelona–Madrid (Renfe AVE train, 2.5 hrs) and Madrid–Seville (Renfe AVE, 2.5 hrs) on Renfe.com or through the Renfe app."
        ],
        "cta": "Book flights & trains",
        "needs": [
          "Travel dates",
          "Flexible budget view"
        ],
        "headsUp": "Renfe high-speed trains fill quickly on weekends — book 2–3 weeks ahead if traveling Friday–Sunday."
      },
      "flights-stay": {
        "id": "flights-stay",
        "title": "Reserve three accommodations: Gothic Quarter or Eixample in Barcelona, Gran Via area in Madrid, Triana in Seville",
        "category": "Flights & stay",
        "status": "ready",
        "duration": "1–1.5 hours",
        "why": "A mid-range riad or small hotel in each food-culture neighborhood keeps you close to markets, restaurants, and cultural sites while staying within budget.",
        "steps": [
          "Search Booking.com, Airbnb, or Fustel for mid-range hotels or apartments with kitchen access in each city.",
          "Confirm cancellation policy and that the address is walkable to major food markets (La Boqueria, Plaza Mayor, Mercado de Triana)."
        ],
        "cta": "Book accommodations",
        "needs": [
          "Nightly budget (€70–120 mid-range)",
          "Exact arrival and departure dates"
        ]
      },
      "flights-confirm": {
        "id": "flights-confirm",
        "title": "Add travel insurance and confirm all bookings 30 days before departure",
        "category": "Flights & stay",
        "status": "upcoming",
        "duration": "20 min",
        "why": "Confirmation and travel insurance protect your nonrefundable bookings and cover cancellation, delays, and medical emergencies.",
        "steps": [
          "Purchase annual travel insurance through World Nomads, Allianz, or your credit card issuer.",
          "Forward your flight and hotel confirmation emails to your insurance provider and verify coverage includes Spain."
        ],
        "cta": "Confirm & insure"
      },
      "transport-barcelona-card": {
        "id": "transport-barcelona-card",
        "title": "Buy a T-Casual 10-journey card for Barcelona metro and bus, or load a T-mobilitat card",
        "category": "Local transport",
        "status": "ready",
        "duration": "15 min (at arrival)",
        "why": "Barcelona's metro and bus system runs on contactless cards; having one in advance or buying at the airport saves time and entry friction on Day 1.",
        "steps": [
          "At Barcelona-El Prat airport, find the TMB customer service desk (Terminal 1 or 2) and ask for a T-Casual card (10 journeys, ~€11).",
          "Or buy the Ferrocarrils de la Generalitat (FGC) day pass if you plan to visit Montserrat monastery (€35 day trip)."
        ],
        "cta": "Get transport card",
        "headsUp": "Taxis and uber are widely available but metro is fastest during 08:00–14:00 and 17:00–21:00 rush hours."
      },
      "transport-madrid-metro": {
        "id": "transport-madrid-metro",
        "title": "Purchase a Zona A 10-journey abono (multi-day pass) for Madrid's metro and bus upon arrival",
        "category": "Local transport",
        "status": "upcoming",
        "duration": "10 min",
        "why": "Madrid's metro is extensive and cheap (€2.20 per journey or ~€15 for 10-journey pass); buying a pass simplifies transfers between neighborhoods and museums.",
        "steps": [
          "At your Madrid accommodation or at any metro station kiosk, buy a 10-journey abono (Zona A covers central Madrid).",
          "Load it onto a contactless card or use single tickets if you prefer flexibility."
        ],
        "cta": "Get Madrid passes"
      },
      "transport-seville-stay": {
        "id": "transport-seville-stay",
        "title": "Book a rental bike or walk Seville's compact old town; purchase a T-Lite pass for tram if exploring outlying neighborhoods",
        "category": "Local transport",
        "status": "upcoming",
        "duration": "10 min",
        "why": "Seville is walkable and flat; a €5 bike rental gives you flexibility to reach riverside markets and flamenco venues without taxi friction.",
        "steps": [
          "Reserve a bike 1 day ahead from a local rental shop (Sevici, the city-run bike-share, requires residency; use private rentals instead).",
          "Or plan to walk and use the tram (€1.50 per journey) for longer distances to neighborhoods like Triana."
        ],
        "cta": "Plan Seville mobility"
      },
      "money-wise": {
        "id": "money-wise",
        "title": "Open a Wise (formerly TransferWise) multi-currency account and load EUR before you leave",
        "category": "Money & payments",
        "status": "ready",
        "duration": "30 min to set up, then fund it",
        "why": "Wise gives you real EUR exchange rates and zero foreign transaction fees in Spain, saving 2–3% versus your home bank on every payment.",
        "steps": [
          "Download Wise, verify your identity, and link your US bank account.",
          "Transfer USD to your Wise EUR wallet at mid-market rates; aim for €1,500–2,000 for 12 days at mid-range budget (€70–80/day)."
        ],
        "cta": "Open Wise",
        "needs": [
          "US bank account routing number",
          "Photo ID"
        ],
        "headsUp": "Wise funding takes 1–3 business days; initiate this now, not the week of departure."
      },
      "money-notify-bank": {
        "id": "money-notify-bank",
        "title": "Notify your primary US bank and credit cards of your Spain travel dates",
        "category": "Money & payments",
        "status": "ready",
        "duration": "10 min",
        "why": "Banks block foreign transactions to prevent fraud; advance notice prevents your card from being declined when you pay for meals or hotels.",
        "steps": [
          "Call your bank's fraud department or use their app to set a travel alert with your Spain dates.",
          "Confirm all card names on your account and the support number they'll call if a flagged transaction occurs."
        ],
        "cta": "Alert your bank"
      },
      "money-cash": {
        "id": "money-cash",
        "title": "Withdraw EUR 200–300 cash from an ATM upon arrival in Barcelona; use it sparingly for small vendors",
        "category": "Money & payments",
        "status": "upcoming",
        "duration": "5 min (at arrival)",
        "why": "Most of Spain is cashless, but small tapas bars, street markets, and rural train stations may not accept cards; cash covers those gaps.",
        "steps": [
          "At Barcelona airport, find an Axe or Caixabank ATM and withdraw EUR 250 using your Wise card (lowest fee).",
          "Keep cash in your hotel safe and use it only for street food, museum donations, or unmarked vendors."
        ],
        "cta": "Withdraw cash at arrival"
      },
      "connectivity-sim": {
        "id": "connectivity-sim",
        "title": "Buy a Spanish SIM or eSIM at Barcelona airport for 12 days of data, or activate it the night before you depart",
        "category": "Connectivity",
        "status": "ready",
        "duration": "15 min (at arrival) or 10 min before departure",
        "why": "A local SIM ensures you have data for maps, translating menus, and making restaurant reservations without relying on airport Wi-Fi.",
        "steps": [
          "At Barcelona-El Prat or online before arrival, buy a prepaid SIM from Vodafone (most widely available), Orange, or Movistar with 10–15 GB data for ~€20.",
          "Alternatively, activate an eSIM from Airalo or Holafly (€15–20) before departure if your phone supports it."
        ],
        "cta": "Get Spanish SIM or eSIM",
        "headsUp": "Spanish SIMs require minimal setup; Vodafone SIMs activate immediately at the airport kiosk."
      },
      "connectivity-apps": {
        "id": "connectivity-apps",
        "title": "Download offline maps, translation apps, and restaurant guides before boarding",
        "category": "Connectivity",
        "status": "ready",
        "duration": "20 min",
        "why": "Offline tools work without data and save battery; essential for navigating narrow medieval streets and reading menus.",
        "steps": [
          "Download Google Maps offline (Barcelona, Madrid, Seville regions), install DeepL or Google Translate, and save a PDF of your hotel addresses.",
          "Install Michelin Guide Spain, HappyCow (for vegetarian restaurants), or Tripadvisor for reservation backup if Wi-Fi fails."
        ],
        "cta": "Download offline tools"
      },
      "connectivity-calls": {
        "id": "connectivity-calls",
        "title": "Set your phone to airplane mode by default and use only your Spanish SIM or Wi-Fi to avoid roaming charges",
        "category": "Connectivity",
        "status": "upcoming",
        "duration": "5 min",
        "why": "Roaming charges can surprise you; keeping airplane mode on and switching intentionally to Spanish network prevents accidental overages.",
        "steps": [
          "Before departure, set your phone's cellular to 'Spain SIM only' or manually disable roaming in Settings > Mobile.",
          "Test Wi-Fi at your Barcelona hotel before venturing out; most accommodations and cafés provide free Wi-Fi."
        ],
        "cta": "Set airplane mode protocol"
      },
      "culture-meals": {
        "id": "culture-meals",
        "title": "Learn Spanish meal culture: breakfast is light, lunch is 13:00–15:00, dinner starts at 20:00+, and tapas are for grazing, not filling",
        "category": "Culture & etiquette",
        "status": "ready",
        "duration": "10 min",
        "why": "Spain's meal rhythm is different from the US; understanding timing and customs eliminates awkward restaurant waits and lets you eat when food is best.",
        "steps": [
          "Read a 5-min primer on Spanish dining etiquette (e.g., 'Dinner at a Spanish restaurant' on Culture Trip or Spain Tourism board).",
          "Plan your days: light breakfast, long lunch with wine, evening paseo (walk), then late dinner. Book restaurants for 20:30 or later."
        ],
        "cta": "Learn meal culture"
      },
      "culture-flamenco": {
        "id": "culture-flamenco",
        "title": "Watch two 10-minute flamenco clips and read the history of tablaos (flamenco venues) before Seville",
        "category": "Culture & etiquette",
        "status": "upcoming",
        "duration": "15 min",
        "why": "Seville is the cradle of flamenco; basic context deepens your experience and helps you spot authentic tablaos versus tourist traps.",
        "steps": [
          "Watch clips from Paco de Lucía or Camarón de la Isla on YouTube; read 'History of Flamenco' on Andalusian tourism sites.",
          "Book a mid-range tablao in Seville (e.g., El Rinconcillo or Peña La Platería, €30–60 with drink) 2 weeks ahead; note: best shows are 21:00–23:00."
        ],
        "cta": "Prep for flamenco"
      },
      "culture-tipping": {
        "id": "culture-tipping",
        "title": "Understand Spanish tipping norms: tip is never mandatory, but 5–10% is appreciated in upscale restaurants; tapas bars, rounding up is standard",
        "category": "Culture & etiquette",
        "status": "upcoming",
        "duration": "5 min",
        "why": "Tipping confusion wastes goodwill; knowing when and how much to tip feels natural and shows respect for service staff.",
        "steps": [
          "Note: in Spain, service is included in prices. Leave small coins or 5% in restaurants, nothing in casual bars unless service was exceptional.",
          "For restaurants with white tablecloths and wine service, 8–10% is welcome but not expected."
        ],
        "cta": "Review tipping etiquette"
      },
      "landing-transport": {
        "id": "landing-transport",
        "title": "Collect your T-Casual metro card or eSIM at Barcelona-El Prat, then take Line L9 or a taxi to your Gothic Quarter hotel",
        "category": "Landing Day Hub",
        "status": "upcoming",
        "duration": "30 min from landing to hotel",
        "why": "Your first 30 minutes set the tone; a direct route to a central neighborhood lets you settle, orient, and eat early dinner by 20:00.",
        "steps": [
          "Exit baggage claim, head to TMB customer service (near ground transport) and buy a T-Casual or ask your accommodation for metro directions.",
          "Take Line L9 to Liceu (Gothic Quarter) or Passeig de Gràcia (Eixample); from airport, metro takes 35–40 min and costs ~€1.15 per journey."
        ],
        "cta": "Get to your hotel",
        "headsUp": "L9 runs every 7–8 min; no reservation needed. Ask your hotel for your exact address in Catalan (if relevant) — metro staff speak it fluently."
      },
      "landing-orientation": {
        "id": "landing-orientation",
        "title": "On arrival evening, walk your neighborhood for 1 hour, locate a supermarket, a tapas bar, and your nearest metro station, then rest",
        "category": "Landing Day Hub",
        "status": "upcoming",
        "duration": "1 hour",
        "why": "A neighborhood walk builds confidence, reduces jet lag by moving your body, and reveals the best local restaurants before hunger panics you.",
        "steps": [
          "Drop bags, change into comfortable shoes, and take 30 min to find a local Carrefour or Mercadona supermarket (they're everywhere) and the metro entrance.",
          "Pick a nearby tapas bar for 19:30–20:30 dinner (not too early); ask your hotelier for a recommendation to avoid tourist trap."
        ],
        "cta": "Walk your neighborhood"
      },
      "landing-food": {
        "id": "landing-food",
        "title": "Visit La Boqueria market in Barcelona, Plaza Mayor in Madrid, or Mercado de Triana in Seville on your first full day in each city",
        "category": "Landing Day Hub",
        "status": "upcoming",
        "duration": "1.5–2 hours",
        "why": "Markets are the heart of Spanish food culture; you'll spot seasonal produce, taste local jamón and cheese, and meet vendors who run the kitchen of the city.",
        "steps": [
          "Go mid-morning (10:00–13:00) to avoid crowds; bring a small bag and budget €20–30 to try samples and buy breakfast ingredients.",
          "Ask a vendor, 'Qué es especial hoy?' (What's special today?) — they'll point you to the season's best and might offer a taste."
        ],
        "cta": "Visit the market"
      }
    },
    "briefingBuckets": {
      "now": [
        "visa-confirm",
        "visa-copies",
        "flights-book",
        "flights-stay",
        "money-wise",
        "money-notify-bank",
        "transport-barcelona-card",
        "connectivity-sim",
        "connectivity-apps",
        "culture-meals"
      ],
      "soon": [
        "visa-travel-auth",
        "flights-confirm",
        "transport-madrid-metro",
        "transport-seville-stay",
        "money-cash",
        "connectivity-calls",
        "culture-flamenco",
        "culture-tipping"
      ],
      "final": [
        "landing-transport",
        "landing-orientation",
        "landing-food"
      ]
    },
    "itinerary": {
      "routeTitle": "12-day Spain: Barcelona, Madrid & Seville",
      "dateRange": "Late May–September (peak season), April–May or October (ideal for food and crowds)",
      "cities": [
        {
          "code": "BCN",
          "name": "Barcelona",
          "days": 4,
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Aerial_view_of_Barcelona%2C_Spain_%2851227309370%29_edited.jpg/1280px-Aerial_view_of_Barcelona%2C_Spain_%2851227309370%29_edited.jpg",
          "stayLabel": "Gothic Quarter or Eixample"
        },
        {
          "code": "MAD",
          "name": "Madrid",
          "days": 4,
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Plaza_Mayor_De_Madrid_%28215862629%29_edited.jpeg/1280px-Plaza_Mayor_De_Madrid_%28215862629%29_edited.jpeg",
          "stayLabel": "Gran Via or Chueca"
        },
        {
          "code": "SVQ",
          "name": "Seville",
          "days": 4,
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Sevilla_Cathedral_-_Southeast.jpg/1280px-Sevilla_Cathedral_-_Southeast.jpg",
          "stayLabel": "Triana or Santa Cruz"
        }
      ],
      "legs": [
        {
          "from": "US",
          "to": "Barcelona",
          "mode": "plane",
          "duration": "9–11 hours",
          "stops": "None preferred (direct), or one stop depending on routing",
          "status": "booked"
        },
        {
          "from": "Barcelona",
          "to": "Madrid",
          "mode": "rail",
          "duration": "2.5 hours (Renfe AVE high-speed)",
          "stops": "None",
          "status": "booked"
        },
        {
          "from": "Madrid",
          "to": "Seville",
          "mode": "rail",
          "duration": "2.5 hours (Renfe AVE)",
          "stops": "None",
          "status": "booked"
        },
        {
          "from": "Seville",
          "to": "US",
          "mode": "plane",
          "duration": "9–11 hours",
          "stops": "One stop typical (Madrid or other European hub)",
          "status": "planned"
        }
      ]
    },
    "itineraryDays": [
      {
        "dayNumber": 1,
        "city": "Barcelona",
        "date": "Day 1 (Arrival)",
        "kind": "arrival",
        "blocks": [
          {
            "slot": "morning",
            "label": "Arrive and transfer",
            "detail": "Touch down at Barcelona-El Prat, collect your T-Casual metro card or confirm eSIM is active, and take Line L9 to your Gothic Quarter hotel."
          },
          {
            "slot": "afternoon",
            "label": "Rest and neighborhood walk",
            "detail": "Check in, rest for 1–2 hours, then take a 1-hour walk to find your local metro, supermarket (Mercadona), and a corner tapas bar."
          },
          {
            "slot": "evening",
            "label": "First dinner",
            "detail": "Have dinner at 20:00–20:30 at your neighborhood tapas bar. Order jamón ibérico, pan con tomate, and a glass of Vermouth or local wine to ground yourself in Spanish food culture."
          }
        ]
      },
      {
        "dayNumber": 2,
        "city": "Barcelona",
        "date": "Day 2 (Explore)",
        "kind": "explore",
        "blocks": [
          {
            "slot": "morning",
            "label": "La Boqueria market and breakfast",
            "detail": "Head to La Boqueria market at 10:00. Taste jamón, queso, and fresh juice from stall owners. Buy breakfast ingredients and a snack for later."
          },
          {
            "slot": "afternoon",
            "label": "Sagrada Familia or Gothic Quarter walk",
            "detail": "Book Sagrada Familia online (timed entry, €30) or wander the Gothic Quarter's narrow streets. Stop at a café for vermouth and tapas at 13:00 (local lunch hour)."
          },
          {
            "slot": "evening",
            "label": "Park Güell sunset and dinner",
            "detail": "Take the metro to Park Güell (book in advance, €14 entry), enjoy sunset over the city, then return to your neighborhood for a late dinner at 21:00."
          }
        ]
      }
    ],
    "hotel": {
      "name": "Casa Vicens or similar (mid-range boutique)",
      "addressLocal": "Carrer de Montsió, 24, Barcelona",
      "roman": "",
      "addressEn": "24 Montsió Street, Gothic Quarter, Barcelona 08002",
      "neighborhood": "Gothic Quarter (Barri Gòtic)",
      "city": "Barcelona"
    },
    "phrases": [
      {
        "group": "Greetings",
        "items": [
          {
            "en": "Hello, how are you?",
            "local": "Hola, ¿cómo estás?",
            "roman": ""
          },
          {
            "en": "Thank you very much.",
            "local": "Muchas gracias.",
            "roman": ""
          },
          {
            "en": "Excuse me, do you speak English?",
            "local": "Disculpa, ¿hablas inglés?",
            "roman": ""
          }
        ]
      },
      {
        "group": "Taxi & Transport",
        "items": [
          {
            "en": "Please take me to this address.",
            "local": "Por favor, llévame a esta dirección.",
            "roman": ""
          },
          {
            "en": "How much is the metro card?",
            "local": "¿Cuánto cuesta el abono de metro?",
            "roman": ""
          },
          {
            "en": "Which line goes to the station?",
            "local": "¿Cuál es la línea para la estación?",
            "roman": ""
          }
        ]
      },
      {
        "group": "Restaurant & Food",
        "items": [
          {
            "en": "What is the special today?",
            "local": "¿Cuál es el plato del día?",
            "roman": ""
          },
          {
            "en": "A glass of red wine and some tapas, please.",
            "local": "Un vaso de vino tinto y unas tapas, por favor.",
            "roman": ""
          },
          {
            "en": "The bill, please.",
            "local": "La cuenta, por favor.",
            "roman": ""
          }
        ]
      },
      {
        "group": "Payment",
        "items": [
          {
            "en": "Can I pay by card?",
            "local": "¿Puedo pagar con tarjeta?",
            "roman": ""
          },
          {
            "en": "Do you take contactless payment?",
            "local": "¿Aceptas pago sin contacto?",
            "roman": ""
          },
          {
            "en": "I need an ATM.",
            "local": "Necesito un cajero automático.",
            "roman": ""
          }
        ]
      },
      {
        "group": "Emergency & Help",
        "items": [
          {
            "en": "Help, I'm lost.",
            "local": "Ayuda, estoy perdido.",
            "roman": ""
          },
          {
            "en": "I need a doctor or hospital.",
            "local": "Necesito un médico u hospital.",
            "roman": ""
          },
          {
            "en": "Where is the nearest police station?",
            "local": "¿Dónde está la comisaría más cercana?",
            "roman": ""
          }
        ]
      }
    ],
    "emergencyContacts": [
      {
        "label": "Emergency",
        "number": "112",
        "kind": "urgent"
      },
      {
        "label": "U.S. citizens abroad · State Dept",
        "number": "+1 888 407 4747",
        "kind": "consular"
      }
    ],
    "predeparture": [
      {
        "group": "Documents & borders",
        "items": [
          {
            "id": "pd-passport",
            "label": "Passport valid through return date",
            "sub": "Check expiration and make digital copies."
          },
          {
            "id": "pd-travel-insurance",
            "label": "Travel insurance active",
            "sub": "Covers cancellation, delays, and medical emergencies in Spain.",
            "linkedTaskId": "flights-confirm"
          },
          {
            "id": "pd-step-enrolled",
            "label": "Enrolled in STEP (Smart Traveler)",
            "sub": "Embassy can contact you in emergencies.",
            "linkedTaskId": "visa-travel-auth"
          }
        ]
      },
      {
        "group": "Flights & accommodations",
        "items": [
          {
            "id": "pd-flights-confirm",
            "label": "All flights confirmed (BCN, MAD, SVQ returns)",
            "sub": "Forward confirmations to your email and insurance provider.",
            "linkedTaskId": "flights-confirm"
          },
          {
            "id": "pd-hotels-confirm",
            "label": "Three accommodations confirmed and paid",
            "sub": "Barcelona, Madrid, Seville. Save confirmation emails and note cancellation policies.",
            "linkedTaskId": "flights-stay"
          },
          {
            "id": "pd-trains-confirm",
            "label": "Renfe intercity trains booked (BCN–MAD, MAD–SVQ)",
            "sub": "Download Renfe app or save confirmation PDFs.",
            "linkedTaskId": "flights-book"
          }
        ]
      },
      {
        "group": "Money & payments",
        "items": [
          {
            "id": "pd-wise-funded",
            "label": "Wise EUR wallet loaded with €1,500–2,000",
            "sub": "Gives you real exchange rates and no foreign fees.",
            "linkedTaskId": "money-wise"
          },
          {
            "id": "pd-bank-alert",
            "label": "Bank and credit cards notified of Spain travel",
            "sub": "Fraud alerts will not block legitimate purchases.",
            "linkedTaskId": "money-notify-bank"
          },
          {
            "id": "pd-cash-plan",
            "label": "Plan to withdraw €250 at Barcelona airport ATM",
            "sub": "Use sparingly for markets and small vendors.",
            "linkedTaskId": "money-cash"
          }
        ]
      },
      {
        "group": "Connectivity & apps",
        "items": [
          {
            "id": "pd-sim-ready",
            "label": "Spanish SIM or eSIM active before arrival",
            "sub": "10–15 GB data for 12 days from Vodafone, Orange, or Movistar.",
            "linkedTaskId": "connectivity-sim"
          },
          {
            "id": "pd-apps-downloaded",
            "label": "Offline maps, translation app, restaurant guides downloaded",
            "sub": "Google Maps (Barcelona, Madrid, Seville), DeepL, Michelin Guide Spain, HappyCow.",
            "linkedTaskId": "connectivity-apps"
          },
          {
            "id": "pd-roaming-disabled",
            "label": "Home country roaming disabled; airplane mode set to default",
            "sub": "Use only Spanish SIM or Wi-Fi.",
            "linkedTaskId": "connectivity-calls"
          }
        ]
      },
      {
        "group": "Culture & dining",
        "items": [
          {
            "id": "pd-meal-times",
            "label": "Spanish meal culture understood: lunch 13:00–15:00, dinner 20:00+",
            "sub": "Plan reservations for 20:30 or later.",
            "linkedTaskId": "culture-meals"
          },
          {
            "id": "pd-flamenco-booked",
            "label": "Flamenco tablao reserved in Seville",
            "sub": "Book 2–3 weeks ahead for mid-range venues (€30–60 with drink).",
            "linkedTaskId": "culture-flamenco"
          },
          {
            "id": "pd-market-plan",
            "label": "First-day market visits planned (La Boqueria, Plaza Mayor, Mercado Triana)",
            "sub": "Go mid-morning (10:00–13:00); bring a small bag and €20–30.",
            "linkedTaskId": "landing-food"
          }
        ]
      }
    ]
  },
  "TH": {
    "country": {
      "code": "TH",
      "name": "Thailand",
      "capital": "Bangkok",
      "region": "Asia",
      "flag": "🇹🇭"
    },
    "heroCity": "Bangkok",
    "heroImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/4Y1A1159_Bangkok_%2833536795515%29.jpg/1280px-4Y1A1159_Bangkok_%2833536795515%29.jpg",
    "arrivalAirport": {
      "code": "",
      "city": "Bangkok"
    },
    "currency": {
      "code": "THB",
      "symbol": "฿",
      "usdRate": 32.727905
    },
    "languages": [
      "Thai"
    ],
    "phraseLang": {
      "name": "Thai",
      "bcp47": "th-TH",
      "hasRomanization": false
    },
    "homeCountry": "United States",
    "summary": "Your readiness plan for Thailand, sequenced from now to landing day.",
    "visaLabel": "Check entry rules",
    "categories": [
      {
        "id": "visa",
        "name": "Visa & documents",
        "icon": "IdentificationCard",
        "total": 4,
        "done": 0,
        "nextTaskId": "t-entry",
        "blurb": "Check Thailand entry rules"
      },
      {
        "id": "flights",
        "name": "Flights & stay",
        "icon": "AirplaneTilt",
        "total": 4,
        "done": 0,
        "nextTaskId": "t-compare",
        "blurb": "Compare flights to Bangkok"
      },
      {
        "id": "transport",
        "name": "Local transport",
        "icon": "TrainSimple",
        "total": 3,
        "done": 0,
        "nextTaskId": "t-transfer",
        "blurb": "Plan local transport"
      },
      {
        "id": "money",
        "name": "Money & payments",
        "icon": "Wallet",
        "total": 3,
        "done": 0,
        "nextTaskId": "t-card",
        "blurb": "Pick a no-fee card"
      },
      {
        "id": "connectivity",
        "name": "Connectivity",
        "icon": "GlobeHemisphereWest",
        "total": 3,
        "done": 0,
        "nextTaskId": "t-esim",
        "blurb": "Activate an eSIM"
      },
      {
        "id": "culture",
        "name": "Culture & etiquette",
        "icon": "HandHeart",
        "total": 3,
        "done": 0,
        "nextTaskId": "t-phrases",
        "blurb": "Learn Thai basics"
      },
      {
        "id": "landing",
        "name": "Landing Day Hub",
        "icon": "MapPin",
        "total": 3,
        "done": 0,
        "nextTaskId": "t-save-hotel",
        "blurb": "Save hotel address offline"
      }
    ],
    "tasks": {
      "t-passport": {
        "id": "t-passport",
        "title": "Check your passport validity",
        "category": "Visa & documents",
        "status": "ready",
        "duration": "5 min",
        "why": "Many countries require your passport to stay valid for 6 months past your return date, with blank pages for stamps. Catching this now avoids a last-minute renewal scramble before Thailand.",
        "steps": [
          "Find your passport and check the expiry date",
          "Count 6 months past your planned return",
          "Confirm you have 2+ blank pages",
          "Renew now if anything is short"
        ],
        "cta": "Mark passport ready",
        "needs": [
          "Your passport in hand"
        ]
      },
      "t-entry": {
        "id": "t-entry",
        "title": "Check Thailand entry & visa rules",
        "category": "Visa & documents",
        "status": "ready",
        "duration": "20 min",
        "why": "Entry requirements depend on your nationality. Confirm whether United States passport holders need a visa, an eTA, or visa-free entry for Thailand, and how long you can stay.",
        "steps": [
          "Check your government's official travel advice for Thailand",
          "Note any visa, eTA, or entry-fee requirement",
          "Apply early if a visa is required"
        ],
        "cta": "Open entry rules",
        "headsUp": "Visa processing times vary widely. Starting 3–4 weeks before departure keeps you out of trouble."
      },
      "t-insurance": {
        "id": "t-insurance",
        "title": "Get travel insurance",
        "category": "Visa & documents",
        "status": "upcoming",
        "duration": "15 min",
        "why": "A medical emergency abroad can be expensive. A simple travel-medical policy covers hospital care, evacuation, and trip disruptions.",
        "steps": [
          "Compare a few travel-insurance providers",
          "Pick medical + trip-cancellation cover",
          "Save the policy PDF offline"
        ],
        "cta": "Compare insurance"
      },
      "t-docs": {
        "id": "t-docs",
        "title": "Save copies of key documents",
        "category": "Visa & documents",
        "status": "upcoming",
        "duration": "10 min",
        "why": "If your passport is lost or stolen, digital and paper copies make replacement far faster at the embassy.",
        "steps": [
          "Photograph passport, visa, and insurance",
          "Store copies in your phone + cloud",
          "Pack one printed set separately"
        ],
        "cta": "Mark copies saved"
      },
      "t-compare": {
        "id": "t-compare",
        "title": "Compare flights to Bangkok",
        "category": "Flights & stay",
        "status": "upcoming",
        "duration": "25 min",
        "why": "Fares to Bangkok swing widely by day of week. Comparing a flexible window typically saves 10–20%.",
        "steps": [
          "Set your earliest and latest departure days",
          "Compare nonstop vs. one-stop",
          "Lock in once the price stabilizes"
        ],
        "cta": "Open flight comparison",
        "needs": [
          "Travel dates",
          "Departure airport",
          "Passenger count"
        ]
      },
      "t-book-flight": {
        "id": "t-book-flight",
        "title": "Book your flight",
        "category": "Flights & stay",
        "status": "upcoming",
        "duration": "30 min",
        "why": "Booking direct with the airline locks in price and makes changes easier if plans shift.",
        "steps": [
          "Confirm names match passports exactly",
          "Book with the airline or a trusted OTA",
          "Save the e-ticket to your Landing Day Hub"
        ],
        "cta": "Open booking partners",
        "needs": [
          "Passport details",
          "Payment method"
        ]
      },
      "t-book-stay": {
        "id": "t-book-stay",
        "title": "Book your Bangkok stay",
        "category": "Flights & stay",
        "status": "upcoming",
        "duration": "20 min",
        "why": "A central, well-connected neighborhood makes everything easier. Free-cancellation rates let you lock in early without committing.",
        "steps": [
          "Pick a central neighborhood",
          "Filter to free-cancellation rates",
          "Save the address (in Thai) to your Landing Day Hub"
        ],
        "cta": "Compare stays"
      },
      "t-first-night": {
        "id": "t-first-night",
        "title": "Plan your first night",
        "category": "Flights & stay",
        "status": "upcoming",
        "duration": "10 min",
        "why": "Plan zero activities for arrival evening — just check-in, a light meal nearby, and sleep. Jet-lag wins are won here.",
        "steps": [
          "Note your check-in time",
          "Save 1–2 walkable dinner spots",
          "Set tomorrow’s alarm, not tonight’s"
        ],
        "cta": "Mark first-night plan ready"
      },
      "t-transfer": {
        "id": "t-transfer",
        "title": "Plan your airport → Bangkok transfer",
        "category": "Local transport",
        "status": "upcoming",
        "duration": "10 min",
        "why": "Deciding how you’ll get from the airport to your stay before you fly means no negotiating while jet-lagged.",
        "steps": [
          "Compare train, official taxi, and rideshare",
          "Pick your arrival-night default",
          "Save directions to your Landing Day Hub"
        ],
        "cta": "Save transit plan"
      },
      "t-transit": {
        "id": "t-transit",
        "title": "Set up local transit payment",
        "category": "Local transport",
        "status": "upcoming",
        "duration": "10 min",
        "why": "Most Thailand cities use a tap card or mobile pass for metro and buses. Setting it up early means tapping in on day one.",
        "steps": [
          "Find the local transit card or app",
          "Check if your phone’s contactless works",
          "Top up or link a card"
        ],
        "cta": "Open transit setup"
      },
      "t-rideshare": {
        "id": "t-rideshare",
        "title": "Install the local taxi / rideshare app",
        "category": "Local transport",
        "status": "upcoming",
        "duration": "10 min",
        "why": "A local rideshare app avoids cash haggling and language friction, and usually gives an upfront price.",
        "steps": [
          "Find the dominant local rideshare app",
          "Install and add a payment card",
          "Set your home language if available"
        ],
        "cta": "Open rideshare guide"
      },
      "t-card": {
        "id": "t-card",
        "title": "Pick a no-foreign-fee card",
        "category": "Money & payments",
        "status": "ready",
        "duration": "5 min",
        "why": "Most cards charge a ~3% foreign transaction fee. A no-FX-fee card saves real money across a multi-week trip.",
        "steps": [
          "Pick a card with no foreign transaction fee",
          "Notify your bank of travel dates",
          "Bring a backup card on another network"
        ],
        "cta": "Mark card ready"
      },
      "t-cash": {
        "id": "t-cash",
        "title": "Get some THB cash",
        "category": "Money & payments",
        "status": "upcoming",
        "duration": "10 min",
        "why": "Even where cards are common, a little local cash covers markets, small vendors, and tips. Order from your bank to dodge airport-ATM fees.",
        "steps": [
          "Order a modest amount before you fly",
          "Pick up 3–5 days ahead",
          "Split between wallet and a hidden pouch"
        ],
        "cta": "Mark cash ready"
      },
      "t-payments": {
        "id": "t-payments",
        "title": "Check accepted payment methods",
        "category": "Money & payments",
        "status": "upcoming",
        "duration": "10 min",
        "why": "Card vs. cash vs. mobile-pay norms vary a lot. Knowing what Thailand expects avoids awkward checkout moments.",
        "steps": [
          "Check whether cards are widely accepted",
          "See if a local mobile wallet dominates",
          "Plan a cash buffer for cash-only spots"
        ],
        "cta": "Read payments note"
      },
      "t-esim": {
        "id": "t-esim",
        "title": "Activate an eSIM for arrival",
        "category": "Connectivity",
        "status": "ready",
        "duration": "10 min",
        "why": "An eSIM (Airalo, Holafly, Nomad) gives you data the moment you land — no SIM swap, no airport kiosk.",
        "steps": [
          "Pick a Thailand-coverage eSIM plan",
          "Install but don’t activate yet",
          "Activate when you land"
        ],
        "cta": "Compare eSIM plans"
      },
      "t-maps": {
        "id": "t-maps",
        "title": "Download offline maps of Bangkok",
        "category": "Connectivity",
        "status": "upcoming",
        "duration": "5 min",
        "why": "Offline maps mean walking directions even with no data or signal on arrival day.",
        "steps": [
          "Download the Bangkok region in your maps app",
          "Pin your hotel and the airport",
          "Test it in airplane mode"
        ],
        "cta": "Open download guide"
      },
      "t-apps": {
        "id": "t-apps",
        "title": "Download key travel apps",
        "category": "Connectivity",
        "status": "upcoming",
        "duration": "15 min",
        "why": "A short list of apps — translation, transit, rideshare, maps — replaces what you’d normally reach for at home.",
        "steps": [
          "Install a translation app + offline language pack",
          "Add transit and rideshare apps",
          "Sign in while you still have home Wi-Fi"
        ],
        "cta": "Open app checklist"
      },
      "t-etiquette": {
        "id": "t-etiquette",
        "title": "Learn Thailand etiquette basics",
        "category": "Culture & etiquette",
        "status": "upcoming",
        "duration": "10 min",
        "why": "Greetings, dress, and dining customs differ. A short read avoids unintended rudeness and earns goodwill.",
        "steps": [
          "Read a short Thailand etiquette primer",
          "Note any dress norms for sacred sites",
          "Save it offline"
        ],
        "cta": "Read etiquette card"
      },
      "t-phrases": {
        "id": "t-phrases",
        "title": "Learn 10 essential Thai phrases",
        "category": "Culture & etiquette",
        "status": "upcoming",
        "duration": "15 min",
        "why": "Ten phrases — hello, thank you, how much, where is, please — cover most daily interactions and earn instant goodwill.",
        "steps": [
          "Open your Landing Day phrase card",
          "Practice hello, thank you, sorry",
          "Save the card offline"
        ],
        "cta": "Open phrase card"
      },
      "t-tipping": {
        "id": "t-tipping",
        "title": "Understand tipping norms",
        "category": "Culture & etiquette",
        "status": "upcoming",
        "duration": "5 min",
        "why": "Tipping expectations range from mandatory to mildly rude. Knowing the Thailand norm keeps every checkout smooth.",
        "steps": [
          "Check the tipping norm for restaurants",
          "Check taxis and hotels",
          "Keep small notes handy if tips are expected"
        ],
        "cta": "Mark read"
      },
      "t-save-hotel": {
        "id": "t-save-hotel",
        "title": "Save your hotel address offline",
        "category": "Landing Day Hub",
        "status": "upcoming",
        "duration": "2 min",
        "why": "Showing your address in Thai to a taxi driver is the fastest way from the airport to your door.",
        "steps": [
          "Confirm hotel name and address",
          "Save it in Thai + English",
          "Add it to your Landing Day Hub"
        ],
        "cta": "Save to hub"
      },
      "t-save-emergency": {
        "id": "t-save-emergency",
        "title": "Save emergency contacts offline",
        "category": "Landing Day Hub",
        "status": "upcoming",
        "duration": "5 min",
        "why": "Local emergency numbers plus your embassy in one offline card means help is always a tap away — even without signal.",
        "steps": [
          "Confirm the local emergency numbers",
          "Save your embassy contact",
          "Keep them in your Landing Day Hub"
        ],
        "cta": "Save contacts"
      },
      "t-save-maps": {
        "id": "t-save-maps",
        "title": "Download offline maps",
        "category": "Landing Day Hub",
        "status": "upcoming",
        "duration": "5 min",
        "why": "Offline regions give you walking directions on arrival without data or a connection.",
        "steps": [
          "Download Bangkok offline",
          "Pin hotel + airport",
          "Test in airplane mode"
        ],
        "cta": "Open download guide"
      }
    },
    "briefingBuckets": {
      "now": [
        "t-passport",
        "t-entry",
        "t-card",
        "t-esim"
      ],
      "soon": [
        "t-insurance",
        "t-docs",
        "t-compare",
        "t-book-flight",
        "t-book-stay",
        "t-first-night",
        "t-transfer",
        "t-transit",
        "t-rideshare",
        "t-cash",
        "t-payments",
        "t-apps"
      ],
      "final": [
        "t-maps",
        "t-etiquette",
        "t-phrases",
        "t-tipping",
        "t-save-hotel",
        "t-save-emergency",
        "t-save-maps"
      ]
    },
    "itinerary": {
      "routeTitle": "Bangkok",
      "dateRange": "Jul 19 – Jul 30",
      "cities": [
        {
          "code": "TH",
          "name": "Bangkok",
          "days": 12,
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/4Y1A1159_Bangkok_%2833536795515%29.jpg/1280px-4Y1A1159_Bangkok_%2833536795515%29.jpg",
          "stayLabel": "City-centre stay"
        }
      ],
      "legs": []
    },
    "itineraryDays": [
      {
        "dayNumber": 1,
        "city": "Bangkok",
        "date": "Jul 19",
        "kind": "arrival",
        "blocks": [
          {
            "slot": "morning",
            "label": "Arrive in Bangkok",
            "detail": "Clear immigration, pick up data, head to your stay",
            "meta": "Buffer day — no plans"
          },
          {
            "slot": "afternoon",
            "label": "Settle in",
            "detail": "Drop bags, short orientation walk nearby"
          },
          {
            "slot": "evening",
            "label": "Easy first dinner",
            "detail": "Somewhere walkable, early night to beat jet lag"
          }
        ]
      },
      {
        "dayNumber": 2,
        "city": "Bangkok",
        "date": "Jul 20",
        "kind": "explore",
        "blocks": [
          {
            "slot": "morning",
            "label": "Old town & landmarks",
            "detail": "The historic heart of Bangkok"
          },
          {
            "slot": "afternoon",
            "label": "A signature museum or market",
            "detail": "Pace yourself — leave room to wander"
          },
          {
            "slot": "evening",
            "label": "Local dinner",
            "detail": "Try a regional specialty"
          }
        ]
      },
      {
        "dayNumber": 12,
        "city": "Bangkok",
        "date": "Jul 30",
        "kind": "transit",
        "blocks": [
          {
            "slot": "morning",
            "label": "Slow morning",
            "detail": "Last coffee, pack out, store bags if needed"
          },
          {
            "slot": "afternoon",
            "label": "Head to the airport",
            "detail": "Leave buffer for check-in and security",
            "meta": "Departure day"
          },
          {
            "slot": "evening",
            "label": "Fly home",
            "detail": "Save offline boarding passes"
          }
        ]
      }
    ],
    "hotel": {
      "name": "",
      "addressLocal": "",
      "addressEn": "",
      "neighborhood": "",
      "city": "Bangkok"
    },
    "phrases": [
      {
        "group": "Greetings",
        "items": [
          {
            "en": "Hello.",
            "local": ""
          },
          {
            "en": "Thank you.",
            "local": ""
          },
          {
            "en": "Excuse me / Sorry.",
            "local": ""
          },
          {
            "en": "Do you speak English?",
            "local": ""
          }
        ]
      },
      {
        "group": "Taxi",
        "items": [
          {
            "en": "Please take me to this address.",
            "local": ""
          },
          {
            "en": "How much is the fare?",
            "local": ""
          },
          {
            "en": "Please stop here.",
            "local": ""
          }
        ]
      },
      {
        "group": "Restaurant",
        "items": [
          {
            "en": "A table for two, please.",
            "local": ""
          },
          {
            "en": "The menu, please.",
            "local": ""
          },
          {
            "en": "The check, please.",
            "local": ""
          }
        ]
      },
      {
        "group": "Payment",
        "items": [
          {
            "en": "How much is this?",
            "local": ""
          },
          {
            "en": "Can I pay by card?",
            "local": ""
          },
          {
            "en": "That’s too expensive.",
            "local": ""
          }
        ]
      },
      {
        "group": "Emergency",
        "items": [
          {
            "en": "I need help.",
            "local": ""
          },
          {
            "en": "Please call the police.",
            "local": ""
          },
          {
            "en": "Where is the nearest hospital?",
            "local": ""
          }
        ]
      }
    ],
    "emergencyContacts": [
      {
        "label": "Police",
        "number": "191",
        "kind": "urgent"
      },
      {
        "label": "Medical",
        "number": "1669",
        "kind": "urgent"
      },
      {
        "label": "U.S. citizens abroad · State Dept",
        "number": "+1 888 407 4747",
        "kind": "consular"
      }
    ],
    "predeparture": [
      {
        "group": "Documents",
        "items": [
          {
            "id": "pp",
            "label": "Passport packed",
            "linkedTaskId": "t-passport"
          },
          {
            "id": "entry",
            "label": "Entry/visa rules confirmed",
            "linkedTaskId": "t-entry"
          },
          {
            "id": "insurance",
            "label": "Travel insurance saved",
            "linkedTaskId": "t-insurance"
          },
          {
            "id": "copies",
            "label": "Document copies stored"
          }
        ]
      },
      {
        "group": "Money",
        "items": [
          {
            "id": "card",
            "label": "No-fee card packed",
            "linkedTaskId": "t-card"
          },
          {
            "id": "cash",
            "label": "Local cash on hand",
            "linkedTaskId": "t-cash"
          }
        ]
      },
      {
        "group": "Connectivity",
        "items": [
          {
            "id": "esim",
            "label": "eSIM activated for arrival",
            "linkedTaskId": "t-esim"
          },
          {
            "id": "maps",
            "label": "Offline maps downloaded",
            "linkedTaskId": "t-maps"
          },
          {
            "id": "apps",
            "label": "Key apps downloaded",
            "linkedTaskId": "t-apps"
          }
        ]
      },
      {
        "group": "Arrival",
        "items": [
          {
            "id": "addr",
            "label": "Hotel address saved offline",
            "linkedTaskId": "t-save-hotel"
          },
          {
            "id": "transit",
            "label": "Airport → city transfer planned",
            "linkedTaskId": "t-transfer"
          },
          {
            "id": "emergency",
            "label": "Emergency contacts saved",
            "linkedTaskId": "t-save-emergency"
          }
        ]
      }
    ]
  },
  "VN": {
    "country": {
      "code": "VN",
      "name": "Vietnam",
      "capital": "Hanoi",
      "region": "Asia",
      "flag": "🇻🇳"
    },
    "heroCity": "Hanoi",
    "heroImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Hanoi_skyline_with_Ba_Vi_Mountain.jpg/1280px-Hanoi_skyline_with_Ba_Vi_Mountain.jpg",
    "arrivalAirport": {
      "code": "",
      "city": "Hanoi"
    },
    "currency": {
      "code": "VND",
      "symbol": "₫",
      "usdRate": 26229.601391
    },
    "languages": [
      "Vietnamese"
    ],
    "phraseLang": {
      "name": "Vietnamese",
      "bcp47": "vi-VN",
      "hasRomanization": false
    },
    "homeCountry": "United States",
    "summary": "Your readiness plan for Vietnam, sequenced from now to landing day.",
    "visaLabel": "Check entry rules",
    "categories": [
      {
        "id": "visa",
        "name": "Visa & documents",
        "icon": "IdentificationCard",
        "total": 4,
        "done": 0,
        "nextTaskId": "t-entry",
        "blurb": "Check Vietnam entry rules"
      },
      {
        "id": "flights",
        "name": "Flights & stay",
        "icon": "AirplaneTilt",
        "total": 4,
        "done": 0,
        "nextTaskId": "t-compare",
        "blurb": "Compare flights to Hanoi"
      },
      {
        "id": "transport",
        "name": "Local transport",
        "icon": "TrainSimple",
        "total": 3,
        "done": 0,
        "nextTaskId": "t-transfer",
        "blurb": "Plan local transport"
      },
      {
        "id": "money",
        "name": "Money & payments",
        "icon": "Wallet",
        "total": 3,
        "done": 0,
        "nextTaskId": "t-card",
        "blurb": "Pick a no-fee card"
      },
      {
        "id": "connectivity",
        "name": "Connectivity",
        "icon": "GlobeHemisphereWest",
        "total": 3,
        "done": 0,
        "nextTaskId": "t-esim",
        "blurb": "Activate an eSIM"
      },
      {
        "id": "culture",
        "name": "Culture & etiquette",
        "icon": "HandHeart",
        "total": 3,
        "done": 0,
        "nextTaskId": "t-phrases",
        "blurb": "Learn Vietnamese basics"
      },
      {
        "id": "landing",
        "name": "Landing Day Hub",
        "icon": "MapPin",
        "total": 3,
        "done": 0,
        "nextTaskId": "t-save-hotel",
        "blurb": "Save hotel address offline"
      }
    ],
    "tasks": {
      "t-passport": {
        "id": "t-passport",
        "title": "Check your passport validity",
        "category": "Visa & documents",
        "status": "ready",
        "duration": "5 min",
        "why": "Many countries require your passport to stay valid for 6 months past your return date, with blank pages for stamps. Catching this now avoids a last-minute renewal scramble before Vietnam.",
        "steps": [
          "Find your passport and check the expiry date",
          "Count 6 months past your planned return",
          "Confirm you have 2+ blank pages",
          "Renew now if anything is short"
        ],
        "cta": "Mark passport ready",
        "needs": [
          "Your passport in hand"
        ]
      },
      "t-entry": {
        "id": "t-entry",
        "title": "Check Vietnam entry & visa rules",
        "category": "Visa & documents",
        "status": "ready",
        "duration": "20 min",
        "why": "Entry requirements depend on your nationality. Confirm whether United States passport holders need a visa, an eTA, or visa-free entry for Vietnam, and how long you can stay.",
        "steps": [
          "Check your government's official travel advice for Vietnam",
          "Note any visa, eTA, or entry-fee requirement",
          "Apply early if a visa is required"
        ],
        "cta": "Open entry rules",
        "headsUp": "Visa processing times vary widely. Starting 3–4 weeks before departure keeps you out of trouble."
      },
      "t-insurance": {
        "id": "t-insurance",
        "title": "Get travel insurance",
        "category": "Visa & documents",
        "status": "upcoming",
        "duration": "15 min",
        "why": "A medical emergency abroad can be expensive. A simple travel-medical policy covers hospital care, evacuation, and trip disruptions.",
        "steps": [
          "Compare a few travel-insurance providers",
          "Pick medical + trip-cancellation cover",
          "Save the policy PDF offline"
        ],
        "cta": "Compare insurance"
      },
      "t-docs": {
        "id": "t-docs",
        "title": "Save copies of key documents",
        "category": "Visa & documents",
        "status": "upcoming",
        "duration": "10 min",
        "why": "If your passport is lost or stolen, digital and paper copies make replacement far faster at the embassy.",
        "steps": [
          "Photograph passport, visa, and insurance",
          "Store copies in your phone + cloud",
          "Pack one printed set separately"
        ],
        "cta": "Mark copies saved"
      },
      "t-compare": {
        "id": "t-compare",
        "title": "Compare flights to Hanoi",
        "category": "Flights & stay",
        "status": "upcoming",
        "duration": "25 min",
        "why": "Fares to Hanoi swing widely by day of week. Comparing a flexible window typically saves 10–20%.",
        "steps": [
          "Set your earliest and latest departure days",
          "Compare nonstop vs. one-stop",
          "Lock in once the price stabilizes"
        ],
        "cta": "Open flight comparison",
        "needs": [
          "Travel dates",
          "Departure airport",
          "Passenger count"
        ]
      },
      "t-book-flight": {
        "id": "t-book-flight",
        "title": "Book your flight",
        "category": "Flights & stay",
        "status": "upcoming",
        "duration": "30 min",
        "why": "Booking direct with the airline locks in price and makes changes easier if plans shift.",
        "steps": [
          "Confirm names match passports exactly",
          "Book with the airline or a trusted OTA",
          "Save the e-ticket to your Landing Day Hub"
        ],
        "cta": "Open booking partners",
        "needs": [
          "Passport details",
          "Payment method"
        ]
      },
      "t-book-stay": {
        "id": "t-book-stay",
        "title": "Book your Hanoi stay",
        "category": "Flights & stay",
        "status": "upcoming",
        "duration": "20 min",
        "why": "A central, well-connected neighborhood makes everything easier. Free-cancellation rates let you lock in early without committing.",
        "steps": [
          "Pick a central neighborhood",
          "Filter to free-cancellation rates",
          "Save the address (in Vietnamese) to your Landing Day Hub"
        ],
        "cta": "Compare stays"
      },
      "t-first-night": {
        "id": "t-first-night",
        "title": "Plan your first night",
        "category": "Flights & stay",
        "status": "upcoming",
        "duration": "10 min",
        "why": "Plan zero activities for arrival evening — just check-in, a light meal nearby, and sleep. Jet-lag wins are won here.",
        "steps": [
          "Note your check-in time",
          "Save 1–2 walkable dinner spots",
          "Set tomorrow’s alarm, not tonight’s"
        ],
        "cta": "Mark first-night plan ready"
      },
      "t-transfer": {
        "id": "t-transfer",
        "title": "Plan your airport → Hanoi transfer",
        "category": "Local transport",
        "status": "upcoming",
        "duration": "10 min",
        "why": "Deciding how you’ll get from the airport to your stay before you fly means no negotiating while jet-lagged.",
        "steps": [
          "Compare train, official taxi, and rideshare",
          "Pick your arrival-night default",
          "Save directions to your Landing Day Hub"
        ],
        "cta": "Save transit plan"
      },
      "t-transit": {
        "id": "t-transit",
        "title": "Set up local transit payment",
        "category": "Local transport",
        "status": "upcoming",
        "duration": "10 min",
        "why": "Most Vietnam cities use a tap card or mobile pass for metro and buses. Setting it up early means tapping in on day one.",
        "steps": [
          "Find the local transit card or app",
          "Check if your phone’s contactless works",
          "Top up or link a card"
        ],
        "cta": "Open transit setup"
      },
      "t-rideshare": {
        "id": "t-rideshare",
        "title": "Install the local taxi / rideshare app",
        "category": "Local transport",
        "status": "upcoming",
        "duration": "10 min",
        "why": "A local rideshare app avoids cash haggling and language friction, and usually gives an upfront price.",
        "steps": [
          "Find the dominant local rideshare app",
          "Install and add a payment card",
          "Set your home language if available"
        ],
        "cta": "Open rideshare guide"
      },
      "t-card": {
        "id": "t-card",
        "title": "Pick a no-foreign-fee card",
        "category": "Money & payments",
        "status": "ready",
        "duration": "5 min",
        "why": "Most cards charge a ~3% foreign transaction fee. A no-FX-fee card saves real money across a multi-week trip.",
        "steps": [
          "Pick a card with no foreign transaction fee",
          "Notify your bank of travel dates",
          "Bring a backup card on another network"
        ],
        "cta": "Mark card ready"
      },
      "t-cash": {
        "id": "t-cash",
        "title": "Get some VND cash",
        "category": "Money & payments",
        "status": "upcoming",
        "duration": "10 min",
        "why": "Even where cards are common, a little local cash covers markets, small vendors, and tips. Order from your bank to dodge airport-ATM fees.",
        "steps": [
          "Order a modest amount before you fly",
          "Pick up 3–5 days ahead",
          "Split between wallet and a hidden pouch"
        ],
        "cta": "Mark cash ready"
      },
      "t-payments": {
        "id": "t-payments",
        "title": "Check accepted payment methods",
        "category": "Money & payments",
        "status": "upcoming",
        "duration": "10 min",
        "why": "Card vs. cash vs. mobile-pay norms vary a lot. Knowing what Vietnam expects avoids awkward checkout moments.",
        "steps": [
          "Check whether cards are widely accepted",
          "See if a local mobile wallet dominates",
          "Plan a cash buffer for cash-only spots"
        ],
        "cta": "Read payments note"
      },
      "t-esim": {
        "id": "t-esim",
        "title": "Activate an eSIM for arrival",
        "category": "Connectivity",
        "status": "ready",
        "duration": "10 min",
        "why": "An eSIM (Airalo, Holafly, Nomad) gives you data the moment you land — no SIM swap, no airport kiosk.",
        "steps": [
          "Pick a Vietnam-coverage eSIM plan",
          "Install but don’t activate yet",
          "Activate when you land"
        ],
        "cta": "Compare eSIM plans"
      },
      "t-maps": {
        "id": "t-maps",
        "title": "Download offline maps of Hanoi",
        "category": "Connectivity",
        "status": "upcoming",
        "duration": "5 min",
        "why": "Offline maps mean walking directions even with no data or signal on arrival day.",
        "steps": [
          "Download the Hanoi region in your maps app",
          "Pin your hotel and the airport",
          "Test it in airplane mode"
        ],
        "cta": "Open download guide"
      },
      "t-apps": {
        "id": "t-apps",
        "title": "Download key travel apps",
        "category": "Connectivity",
        "status": "upcoming",
        "duration": "15 min",
        "why": "A short list of apps — translation, transit, rideshare, maps — replaces what you’d normally reach for at home.",
        "steps": [
          "Install a translation app + offline language pack",
          "Add transit and rideshare apps",
          "Sign in while you still have home Wi-Fi"
        ],
        "cta": "Open app checklist"
      },
      "t-etiquette": {
        "id": "t-etiquette",
        "title": "Learn Vietnam etiquette basics",
        "category": "Culture & etiquette",
        "status": "upcoming",
        "duration": "10 min",
        "why": "Greetings, dress, and dining customs differ. A short read avoids unintended rudeness and earns goodwill.",
        "steps": [
          "Read a short Vietnam etiquette primer",
          "Note any dress norms for sacred sites",
          "Save it offline"
        ],
        "cta": "Read etiquette card"
      },
      "t-phrases": {
        "id": "t-phrases",
        "title": "Learn 10 essential Vietnamese phrases",
        "category": "Culture & etiquette",
        "status": "upcoming",
        "duration": "15 min",
        "why": "Ten phrases — hello, thank you, how much, where is, please — cover most daily interactions and earn instant goodwill.",
        "steps": [
          "Open your Landing Day phrase card",
          "Practice hello, thank you, sorry",
          "Save the card offline"
        ],
        "cta": "Open phrase card"
      },
      "t-tipping": {
        "id": "t-tipping",
        "title": "Understand tipping norms",
        "category": "Culture & etiquette",
        "status": "upcoming",
        "duration": "5 min",
        "why": "Tipping expectations range from mandatory to mildly rude. Knowing the Vietnam norm keeps every checkout smooth.",
        "steps": [
          "Check the tipping norm for restaurants",
          "Check taxis and hotels",
          "Keep small notes handy if tips are expected"
        ],
        "cta": "Mark read"
      },
      "t-save-hotel": {
        "id": "t-save-hotel",
        "title": "Save your hotel address offline",
        "category": "Landing Day Hub",
        "status": "upcoming",
        "duration": "2 min",
        "why": "Showing your address in Vietnamese to a taxi driver is the fastest way from the airport to your door.",
        "steps": [
          "Confirm hotel name and address",
          "Save it in Vietnamese + English",
          "Add it to your Landing Day Hub"
        ],
        "cta": "Save to hub"
      },
      "t-save-emergency": {
        "id": "t-save-emergency",
        "title": "Save emergency contacts offline",
        "category": "Landing Day Hub",
        "status": "upcoming",
        "duration": "5 min",
        "why": "Local emergency numbers plus your embassy in one offline card means help is always a tap away — even without signal.",
        "steps": [
          "Confirm the local emergency numbers",
          "Save your embassy contact",
          "Keep them in your Landing Day Hub"
        ],
        "cta": "Save contacts"
      },
      "t-save-maps": {
        "id": "t-save-maps",
        "title": "Download offline maps",
        "category": "Landing Day Hub",
        "status": "upcoming",
        "duration": "5 min",
        "why": "Offline regions give you walking directions on arrival without data or a connection.",
        "steps": [
          "Download Hanoi offline",
          "Pin hotel + airport",
          "Test in airplane mode"
        ],
        "cta": "Open download guide"
      }
    },
    "briefingBuckets": {
      "now": [
        "t-passport",
        "t-entry",
        "t-card",
        "t-esim"
      ],
      "soon": [
        "t-insurance",
        "t-docs",
        "t-compare",
        "t-book-flight",
        "t-book-stay",
        "t-first-night",
        "t-transfer",
        "t-transit",
        "t-rideshare",
        "t-cash",
        "t-payments",
        "t-apps"
      ],
      "final": [
        "t-maps",
        "t-etiquette",
        "t-phrases",
        "t-tipping",
        "t-save-hotel",
        "t-save-emergency",
        "t-save-maps"
      ]
    },
    "itinerary": {
      "routeTitle": "Hanoi",
      "dateRange": "Jul 19 – Jul 30",
      "cities": [
        {
          "code": "VN",
          "name": "Hanoi",
          "days": 12,
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Hanoi_skyline_with_Ba_Vi_Mountain.jpg/1280px-Hanoi_skyline_with_Ba_Vi_Mountain.jpg",
          "stayLabel": "City-centre stay"
        }
      ],
      "legs": []
    },
    "itineraryDays": [
      {
        "dayNumber": 1,
        "city": "Hanoi",
        "date": "Jul 19",
        "kind": "arrival",
        "blocks": [
          {
            "slot": "morning",
            "label": "Arrive in Hanoi",
            "detail": "Clear immigration, pick up data, head to your stay",
            "meta": "Buffer day — no plans"
          },
          {
            "slot": "afternoon",
            "label": "Settle in",
            "detail": "Drop bags, short orientation walk nearby"
          },
          {
            "slot": "evening",
            "label": "Easy first dinner",
            "detail": "Somewhere walkable, early night to beat jet lag"
          }
        ]
      },
      {
        "dayNumber": 2,
        "city": "Hanoi",
        "date": "Jul 20",
        "kind": "explore",
        "blocks": [
          {
            "slot": "morning",
            "label": "Old town & landmarks",
            "detail": "The historic heart of Hanoi"
          },
          {
            "slot": "afternoon",
            "label": "A signature museum or market",
            "detail": "Pace yourself — leave room to wander"
          },
          {
            "slot": "evening",
            "label": "Local dinner",
            "detail": "Try a regional specialty"
          }
        ]
      },
      {
        "dayNumber": 12,
        "city": "Hanoi",
        "date": "Jul 30",
        "kind": "transit",
        "blocks": [
          {
            "slot": "morning",
            "label": "Slow morning",
            "detail": "Last coffee, pack out, store bags if needed"
          },
          {
            "slot": "afternoon",
            "label": "Head to the airport",
            "detail": "Leave buffer for check-in and security",
            "meta": "Departure day"
          },
          {
            "slot": "evening",
            "label": "Fly home",
            "detail": "Save offline boarding passes"
          }
        ]
      }
    ],
    "hotel": {
      "name": "",
      "addressLocal": "",
      "addressEn": "",
      "neighborhood": "",
      "city": "Hanoi"
    },
    "phrases": [
      {
        "group": "Greetings",
        "items": [
          {
            "en": "Hello.",
            "local": ""
          },
          {
            "en": "Thank you.",
            "local": ""
          },
          {
            "en": "Excuse me / Sorry.",
            "local": ""
          },
          {
            "en": "Do you speak English?",
            "local": ""
          }
        ]
      },
      {
        "group": "Taxi",
        "items": [
          {
            "en": "Please take me to this address.",
            "local": ""
          },
          {
            "en": "How much is the fare?",
            "local": ""
          },
          {
            "en": "Please stop here.",
            "local": ""
          }
        ]
      },
      {
        "group": "Restaurant",
        "items": [
          {
            "en": "A table for two, please.",
            "local": ""
          },
          {
            "en": "The menu, please.",
            "local": ""
          },
          {
            "en": "The check, please.",
            "local": ""
          }
        ]
      },
      {
        "group": "Payment",
        "items": [
          {
            "en": "How much is this?",
            "local": ""
          },
          {
            "en": "Can I pay by card?",
            "local": ""
          },
          {
            "en": "That’s too expensive.",
            "local": ""
          }
        ]
      },
      {
        "group": "Emergency",
        "items": [
          {
            "en": "I need help.",
            "local": ""
          },
          {
            "en": "Please call the police.",
            "local": ""
          },
          {
            "en": "Where is the nearest hospital?",
            "local": ""
          }
        ]
      }
    ],
    "emergencyContacts": [
      {
        "label": "Police",
        "number": "113",
        "kind": "urgent"
      },
      {
        "label": "Medical",
        "number": "115",
        "kind": "urgent"
      },
      {
        "label": "Fire",
        "number": "114",
        "kind": "urgent"
      },
      {
        "label": "U.S. citizens abroad · State Dept",
        "number": "+1 888 407 4747",
        "kind": "consular"
      }
    ],
    "predeparture": [
      {
        "group": "Documents",
        "items": [
          {
            "id": "pp",
            "label": "Passport packed",
            "linkedTaskId": "t-passport"
          },
          {
            "id": "entry",
            "label": "Entry/visa rules confirmed",
            "linkedTaskId": "t-entry"
          },
          {
            "id": "insurance",
            "label": "Travel insurance saved",
            "linkedTaskId": "t-insurance"
          },
          {
            "id": "copies",
            "label": "Document copies stored"
          }
        ]
      },
      {
        "group": "Money",
        "items": [
          {
            "id": "card",
            "label": "No-fee card packed",
            "linkedTaskId": "t-card"
          },
          {
            "id": "cash",
            "label": "Local cash on hand",
            "linkedTaskId": "t-cash"
          }
        ]
      },
      {
        "group": "Connectivity",
        "items": [
          {
            "id": "esim",
            "label": "eSIM activated for arrival",
            "linkedTaskId": "t-esim"
          },
          {
            "id": "maps",
            "label": "Offline maps downloaded",
            "linkedTaskId": "t-maps"
          },
          {
            "id": "apps",
            "label": "Key apps downloaded",
            "linkedTaskId": "t-apps"
          }
        ]
      },
      {
        "group": "Arrival",
        "items": [
          {
            "id": "addr",
            "label": "Hotel address saved offline",
            "linkedTaskId": "t-save-hotel"
          },
          {
            "id": "transit",
            "label": "Airport → city transfer planned",
            "linkedTaskId": "t-transfer"
          },
          {
            "id": "emergency",
            "label": "Emergency contacts saved",
            "linkedTaskId": "t-save-emergency"
          }
        ]
      }
    ]
  },
  "MA": {
    "country": {
      "code": "MA",
      "name": "Morocco",
      "capital": "Rabat",
      "region": "Africa",
      "flag": "🇲🇦"
    },
    "heroCity": "Rabat",
    "heroImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Morocco_-_Rabat_%2831387775324%29.jpg/1280px-Morocco_-_Rabat_%2831387775324%29.jpg",
    "arrivalAirport": {
      "code": "",
      "city": "Rabat"
    },
    "currency": {
      "code": "MAD",
      "symbol": "د.م.",
      "usdRate": 9.196119
    },
    "languages": [
      "Arabic",
      "Berber"
    ],
    "phraseLang": {
      "name": "Arabic",
      "bcp47": "ar-SA",
      "hasRomanization": false
    },
    "homeCountry": "United States",
    "summary": "Your readiness plan for Morocco, sequenced from now to landing day.",
    "visaLabel": "Check entry rules",
    "categories": [
      {
        "id": "visa",
        "name": "Visa & documents",
        "icon": "IdentificationCard",
        "total": 4,
        "done": 0,
        "nextTaskId": "t-entry",
        "blurb": "Check Morocco entry rules"
      },
      {
        "id": "flights",
        "name": "Flights & stay",
        "icon": "AirplaneTilt",
        "total": 4,
        "done": 0,
        "nextTaskId": "t-compare",
        "blurb": "Compare flights to Rabat"
      },
      {
        "id": "transport",
        "name": "Local transport",
        "icon": "TrainSimple",
        "total": 3,
        "done": 0,
        "nextTaskId": "t-transfer",
        "blurb": "Plan local transport"
      },
      {
        "id": "money",
        "name": "Money & payments",
        "icon": "Wallet",
        "total": 3,
        "done": 0,
        "nextTaskId": "t-card",
        "blurb": "Pick a no-fee card"
      },
      {
        "id": "connectivity",
        "name": "Connectivity",
        "icon": "GlobeHemisphereWest",
        "total": 3,
        "done": 0,
        "nextTaskId": "t-esim",
        "blurb": "Activate an eSIM"
      },
      {
        "id": "culture",
        "name": "Culture & etiquette",
        "icon": "HandHeart",
        "total": 3,
        "done": 0,
        "nextTaskId": "t-phrases",
        "blurb": "Learn Arabic basics"
      },
      {
        "id": "landing",
        "name": "Landing Day Hub",
        "icon": "MapPin",
        "total": 3,
        "done": 0,
        "nextTaskId": "t-save-hotel",
        "blurb": "Save hotel address offline"
      }
    ],
    "tasks": {
      "t-passport": {
        "id": "t-passport",
        "title": "Check your passport validity",
        "category": "Visa & documents",
        "status": "ready",
        "duration": "5 min",
        "why": "Many countries require your passport to stay valid for 6 months past your return date, with blank pages for stamps. Catching this now avoids a last-minute renewal scramble before Morocco.",
        "steps": [
          "Find your passport and check the expiry date",
          "Count 6 months past your planned return",
          "Confirm you have 2+ blank pages",
          "Renew now if anything is short"
        ],
        "cta": "Mark passport ready",
        "needs": [
          "Your passport in hand"
        ]
      },
      "t-entry": {
        "id": "t-entry",
        "title": "Check Morocco entry & visa rules",
        "category": "Visa & documents",
        "status": "ready",
        "duration": "20 min",
        "why": "Entry requirements depend on your nationality. Confirm whether United States passport holders need a visa, an eTA, or visa-free entry for Morocco, and how long you can stay.",
        "steps": [
          "Check your government's official travel advice for Morocco",
          "Note any visa, eTA, or entry-fee requirement",
          "Apply early if a visa is required"
        ],
        "cta": "Open entry rules",
        "headsUp": "Visa processing times vary widely. Starting 3–4 weeks before departure keeps you out of trouble."
      },
      "t-insurance": {
        "id": "t-insurance",
        "title": "Get travel insurance",
        "category": "Visa & documents",
        "status": "upcoming",
        "duration": "15 min",
        "why": "A medical emergency abroad can be expensive. A simple travel-medical policy covers hospital care, evacuation, and trip disruptions.",
        "steps": [
          "Compare a few travel-insurance providers",
          "Pick medical + trip-cancellation cover",
          "Save the policy PDF offline"
        ],
        "cta": "Compare insurance"
      },
      "t-docs": {
        "id": "t-docs",
        "title": "Save copies of key documents",
        "category": "Visa & documents",
        "status": "upcoming",
        "duration": "10 min",
        "why": "If your passport is lost or stolen, digital and paper copies make replacement far faster at the embassy.",
        "steps": [
          "Photograph passport, visa, and insurance",
          "Store copies in your phone + cloud",
          "Pack one printed set separately"
        ],
        "cta": "Mark copies saved"
      },
      "t-compare": {
        "id": "t-compare",
        "title": "Compare flights to Rabat",
        "category": "Flights & stay",
        "status": "upcoming",
        "duration": "25 min",
        "why": "Fares to Rabat swing widely by day of week. Comparing a flexible window typically saves 10–20%.",
        "steps": [
          "Set your earliest and latest departure days",
          "Compare nonstop vs. one-stop",
          "Lock in once the price stabilizes"
        ],
        "cta": "Open flight comparison",
        "needs": [
          "Travel dates",
          "Departure airport",
          "Passenger count"
        ]
      },
      "t-book-flight": {
        "id": "t-book-flight",
        "title": "Book your flight",
        "category": "Flights & stay",
        "status": "upcoming",
        "duration": "30 min",
        "why": "Booking direct with the airline locks in price and makes changes easier if plans shift.",
        "steps": [
          "Confirm names match passports exactly",
          "Book with the airline or a trusted OTA",
          "Save the e-ticket to your Landing Day Hub"
        ],
        "cta": "Open booking partners",
        "needs": [
          "Passport details",
          "Payment method"
        ]
      },
      "t-book-stay": {
        "id": "t-book-stay",
        "title": "Book your Rabat stay",
        "category": "Flights & stay",
        "status": "upcoming",
        "duration": "20 min",
        "why": "A central, well-connected neighborhood makes everything easier. Free-cancellation rates let you lock in early without committing.",
        "steps": [
          "Pick a central neighborhood",
          "Filter to free-cancellation rates",
          "Save the address (in Arabic) to your Landing Day Hub"
        ],
        "cta": "Compare stays"
      },
      "t-first-night": {
        "id": "t-first-night",
        "title": "Plan your first night",
        "category": "Flights & stay",
        "status": "upcoming",
        "duration": "10 min",
        "why": "Plan zero activities for arrival evening — just check-in, a light meal nearby, and sleep. Jet-lag wins are won here.",
        "steps": [
          "Note your check-in time",
          "Save 1–2 walkable dinner spots",
          "Set tomorrow’s alarm, not tonight’s"
        ],
        "cta": "Mark first-night plan ready"
      },
      "t-transfer": {
        "id": "t-transfer",
        "title": "Plan your airport → Rabat transfer",
        "category": "Local transport",
        "status": "upcoming",
        "duration": "10 min",
        "why": "Deciding how you’ll get from the airport to your stay before you fly means no negotiating while jet-lagged.",
        "steps": [
          "Compare train, official taxi, and rideshare",
          "Pick your arrival-night default",
          "Save directions to your Landing Day Hub"
        ],
        "cta": "Save transit plan"
      },
      "t-transit": {
        "id": "t-transit",
        "title": "Set up local transit payment",
        "category": "Local transport",
        "status": "upcoming",
        "duration": "10 min",
        "why": "Most Morocco cities use a tap card or mobile pass for metro and buses. Setting it up early means tapping in on day one.",
        "steps": [
          "Find the local transit card or app",
          "Check if your phone’s contactless works",
          "Top up or link a card"
        ],
        "cta": "Open transit setup"
      },
      "t-rideshare": {
        "id": "t-rideshare",
        "title": "Install the local taxi / rideshare app",
        "category": "Local transport",
        "status": "upcoming",
        "duration": "10 min",
        "why": "A local rideshare app avoids cash haggling and language friction, and usually gives an upfront price.",
        "steps": [
          "Find the dominant local rideshare app",
          "Install and add a payment card",
          "Set your home language if available"
        ],
        "cta": "Open rideshare guide"
      },
      "t-card": {
        "id": "t-card",
        "title": "Pick a no-foreign-fee card",
        "category": "Money & payments",
        "status": "ready",
        "duration": "5 min",
        "why": "Most cards charge a ~3% foreign transaction fee. A no-FX-fee card saves real money across a multi-week trip.",
        "steps": [
          "Pick a card with no foreign transaction fee",
          "Notify your bank of travel dates",
          "Bring a backup card on another network"
        ],
        "cta": "Mark card ready"
      },
      "t-cash": {
        "id": "t-cash",
        "title": "Get some MAD cash",
        "category": "Money & payments",
        "status": "upcoming",
        "duration": "10 min",
        "why": "Even where cards are common, a little local cash covers markets, small vendors, and tips. Order from your bank to dodge airport-ATM fees.",
        "steps": [
          "Order a modest amount before you fly",
          "Pick up 3–5 days ahead",
          "Split between wallet and a hidden pouch"
        ],
        "cta": "Mark cash ready"
      },
      "t-payments": {
        "id": "t-payments",
        "title": "Check accepted payment methods",
        "category": "Money & payments",
        "status": "upcoming",
        "duration": "10 min",
        "why": "Card vs. cash vs. mobile-pay norms vary a lot. Knowing what Morocco expects avoids awkward checkout moments.",
        "steps": [
          "Check whether cards are widely accepted",
          "See if a local mobile wallet dominates",
          "Plan a cash buffer for cash-only spots"
        ],
        "cta": "Read payments note"
      },
      "t-esim": {
        "id": "t-esim",
        "title": "Activate an eSIM for arrival",
        "category": "Connectivity",
        "status": "ready",
        "duration": "10 min",
        "why": "An eSIM (Airalo, Holafly, Nomad) gives you data the moment you land — no SIM swap, no airport kiosk.",
        "steps": [
          "Pick a Morocco-coverage eSIM plan",
          "Install but don’t activate yet",
          "Activate when you land"
        ],
        "cta": "Compare eSIM plans"
      },
      "t-maps": {
        "id": "t-maps",
        "title": "Download offline maps of Rabat",
        "category": "Connectivity",
        "status": "upcoming",
        "duration": "5 min",
        "why": "Offline maps mean walking directions even with no data or signal on arrival day.",
        "steps": [
          "Download the Rabat region in your maps app",
          "Pin your hotel and the airport",
          "Test it in airplane mode"
        ],
        "cta": "Open download guide"
      },
      "t-apps": {
        "id": "t-apps",
        "title": "Download key travel apps",
        "category": "Connectivity",
        "status": "upcoming",
        "duration": "15 min",
        "why": "A short list of apps — translation, transit, rideshare, maps — replaces what you’d normally reach for at home.",
        "steps": [
          "Install a translation app + offline language pack",
          "Add transit and rideshare apps",
          "Sign in while you still have home Wi-Fi"
        ],
        "cta": "Open app checklist"
      },
      "t-etiquette": {
        "id": "t-etiquette",
        "title": "Learn Morocco etiquette basics",
        "category": "Culture & etiquette",
        "status": "upcoming",
        "duration": "10 min",
        "why": "Greetings, dress, and dining customs differ. A short read avoids unintended rudeness and earns goodwill.",
        "steps": [
          "Read a short Morocco etiquette primer",
          "Note any dress norms for sacred sites",
          "Save it offline"
        ],
        "cta": "Read etiquette card"
      },
      "t-phrases": {
        "id": "t-phrases",
        "title": "Learn 10 essential Arabic phrases",
        "category": "Culture & etiquette",
        "status": "upcoming",
        "duration": "15 min",
        "why": "Ten phrases — hello, thank you, how much, where is, please — cover most daily interactions and earn instant goodwill.",
        "steps": [
          "Open your Landing Day phrase card",
          "Practice hello, thank you, sorry",
          "Save the card offline"
        ],
        "cta": "Open phrase card"
      },
      "t-tipping": {
        "id": "t-tipping",
        "title": "Understand tipping norms",
        "category": "Culture & etiquette",
        "status": "upcoming",
        "duration": "5 min",
        "why": "Tipping expectations range from mandatory to mildly rude. Knowing the Morocco norm keeps every checkout smooth.",
        "steps": [
          "Check the tipping norm for restaurants",
          "Check taxis and hotels",
          "Keep small notes handy if tips are expected"
        ],
        "cta": "Mark read"
      },
      "t-save-hotel": {
        "id": "t-save-hotel",
        "title": "Save your hotel address offline",
        "category": "Landing Day Hub",
        "status": "upcoming",
        "duration": "2 min",
        "why": "Showing your address in Arabic to a taxi driver is the fastest way from the airport to your door.",
        "steps": [
          "Confirm hotel name and address",
          "Save it in Arabic + English",
          "Add it to your Landing Day Hub"
        ],
        "cta": "Save to hub"
      },
      "t-save-emergency": {
        "id": "t-save-emergency",
        "title": "Save emergency contacts offline",
        "category": "Landing Day Hub",
        "status": "upcoming",
        "duration": "5 min",
        "why": "Local emergency numbers plus your embassy in one offline card means help is always a tap away — even without signal.",
        "steps": [
          "Confirm the local emergency numbers",
          "Save your embassy contact",
          "Keep them in your Landing Day Hub"
        ],
        "cta": "Save contacts"
      },
      "t-save-maps": {
        "id": "t-save-maps",
        "title": "Download offline maps",
        "category": "Landing Day Hub",
        "status": "upcoming",
        "duration": "5 min",
        "why": "Offline regions give you walking directions on arrival without data or a connection.",
        "steps": [
          "Download Rabat offline",
          "Pin hotel + airport",
          "Test in airplane mode"
        ],
        "cta": "Open download guide"
      }
    },
    "briefingBuckets": {
      "now": [
        "t-passport",
        "t-entry",
        "t-card",
        "t-esim"
      ],
      "soon": [
        "t-insurance",
        "t-docs",
        "t-compare",
        "t-book-flight",
        "t-book-stay",
        "t-first-night",
        "t-transfer",
        "t-transit",
        "t-rideshare",
        "t-cash",
        "t-payments",
        "t-apps"
      ],
      "final": [
        "t-maps",
        "t-etiquette",
        "t-phrases",
        "t-tipping",
        "t-save-hotel",
        "t-save-emergency",
        "t-save-maps"
      ]
    },
    "itinerary": {
      "routeTitle": "Rabat",
      "dateRange": "Jul 19 – Jul 30",
      "cities": [
        {
          "code": "MA",
          "name": "Rabat",
          "days": 12,
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Morocco_-_Rabat_%2831387775324%29.jpg/1280px-Morocco_-_Rabat_%2831387775324%29.jpg",
          "stayLabel": "City-centre stay"
        }
      ],
      "legs": []
    },
    "itineraryDays": [
      {
        "dayNumber": 1,
        "city": "Rabat",
        "date": "Jul 19",
        "kind": "arrival",
        "blocks": [
          {
            "slot": "morning",
            "label": "Arrive in Rabat",
            "detail": "Clear immigration, pick up data, head to your stay",
            "meta": "Buffer day — no plans"
          },
          {
            "slot": "afternoon",
            "label": "Settle in",
            "detail": "Drop bags, short orientation walk nearby"
          },
          {
            "slot": "evening",
            "label": "Easy first dinner",
            "detail": "Somewhere walkable, early night to beat jet lag"
          }
        ]
      },
      {
        "dayNumber": 2,
        "city": "Rabat",
        "date": "Jul 20",
        "kind": "explore",
        "blocks": [
          {
            "slot": "morning",
            "label": "Old town & landmarks",
            "detail": "The historic heart of Rabat"
          },
          {
            "slot": "afternoon",
            "label": "A signature museum or market",
            "detail": "Pace yourself — leave room to wander"
          },
          {
            "slot": "evening",
            "label": "Local dinner",
            "detail": "Try a regional specialty"
          }
        ]
      },
      {
        "dayNumber": 12,
        "city": "Rabat",
        "date": "Jul 30",
        "kind": "transit",
        "blocks": [
          {
            "slot": "morning",
            "label": "Slow morning",
            "detail": "Last coffee, pack out, store bags if needed"
          },
          {
            "slot": "afternoon",
            "label": "Head to the airport",
            "detail": "Leave buffer for check-in and security",
            "meta": "Departure day"
          },
          {
            "slot": "evening",
            "label": "Fly home",
            "detail": "Save offline boarding passes"
          }
        ]
      }
    ],
    "hotel": {
      "name": "",
      "addressLocal": "",
      "addressEn": "",
      "neighborhood": "",
      "city": "Rabat"
    },
    "phrases": [
      {
        "group": "Greetings",
        "items": [
          {
            "en": "Hello.",
            "local": ""
          },
          {
            "en": "Thank you.",
            "local": ""
          },
          {
            "en": "Excuse me / Sorry.",
            "local": ""
          },
          {
            "en": "Do you speak English?",
            "local": ""
          }
        ]
      },
      {
        "group": "Taxi",
        "items": [
          {
            "en": "Please take me to this address.",
            "local": ""
          },
          {
            "en": "How much is the fare?",
            "local": ""
          },
          {
            "en": "Please stop here.",
            "local": ""
          }
        ]
      },
      {
        "group": "Restaurant",
        "items": [
          {
            "en": "A table for two, please.",
            "local": ""
          },
          {
            "en": "The menu, please.",
            "local": ""
          },
          {
            "en": "The check, please.",
            "local": ""
          }
        ]
      },
      {
        "group": "Payment",
        "items": [
          {
            "en": "How much is this?",
            "local": ""
          },
          {
            "en": "Can I pay by card?",
            "local": ""
          },
          {
            "en": "That’s too expensive.",
            "local": ""
          }
        ]
      },
      {
        "group": "Emergency",
        "items": [
          {
            "en": "I need help.",
            "local": ""
          },
          {
            "en": "Please call the police.",
            "local": ""
          },
          {
            "en": "Where is the nearest hospital?",
            "local": ""
          }
        ]
      }
    ],
    "emergencyContacts": [
      {
        "label": "Police",
        "number": "19",
        "kind": "urgent"
      },
      {
        "label": "Medical",
        "number": "15",
        "kind": "urgent"
      },
      {
        "label": "U.S. citizens abroad · State Dept",
        "number": "+1 888 407 4747",
        "kind": "consular"
      }
    ],
    "predeparture": [
      {
        "group": "Documents",
        "items": [
          {
            "id": "pp",
            "label": "Passport packed",
            "linkedTaskId": "t-passport"
          },
          {
            "id": "entry",
            "label": "Entry/visa rules confirmed",
            "linkedTaskId": "t-entry"
          },
          {
            "id": "insurance",
            "label": "Travel insurance saved",
            "linkedTaskId": "t-insurance"
          },
          {
            "id": "copies",
            "label": "Document copies stored"
          }
        ]
      },
      {
        "group": "Money",
        "items": [
          {
            "id": "card",
            "label": "No-fee card packed",
            "linkedTaskId": "t-card"
          },
          {
            "id": "cash",
            "label": "Local cash on hand",
            "linkedTaskId": "t-cash"
          }
        ]
      },
      {
        "group": "Connectivity",
        "items": [
          {
            "id": "esim",
            "label": "eSIM activated for arrival",
            "linkedTaskId": "t-esim"
          },
          {
            "id": "maps",
            "label": "Offline maps downloaded",
            "linkedTaskId": "t-maps"
          },
          {
            "id": "apps",
            "label": "Key apps downloaded",
            "linkedTaskId": "t-apps"
          }
        ]
      },
      {
        "group": "Arrival",
        "items": [
          {
            "id": "addr",
            "label": "Hotel address saved offline",
            "linkedTaskId": "t-save-hotel"
          },
          {
            "id": "transit",
            "label": "Airport → city transfer planned",
            "linkedTaskId": "t-transfer"
          },
          {
            "id": "emergency",
            "label": "Emergency contacts saved",
            "linkedTaskId": "t-save-emergency"
          }
        ]
      }
    ]
  },
  "PE": {
    "country": {
      "code": "PE",
      "name": "Peru",
      "capital": "Lima",
      "region": "Americas",
      "flag": "🇵🇪"
    },
    "heroCity": "Lima",
    "heroImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Bas%C3%ADlica_Catedral_Metropolitana_de_Lima_%28cropped%29.jpg/1280px-Bas%C3%ADlica_Catedral_Metropolitana_de_Lima_%28cropped%29.jpg",
    "arrivalAirport": {
      "code": "LIM",
      "city": "Lima"
    },
    "currency": {
      "code": "PEN",
      "symbol": "S/ ",
      "usdRate": 3.405651
    },
    "languages": [
      "Aymara",
      "Quechua",
      "Spanish"
    ],
    "phraseLang": {
      "name": "Aymara",
      "bcp47": "",
      "hasRomanization": true
    },
    "homeCountry": "United States",
    "summary": "A 12-day culinary and cultural immersion across Peru's highlands and coast. Start in Lima's food scene, trek to Machu Picchu via the Sacred Valley, and end in Cusco. This plan prioritizes local payment methods, altitude acclimatization, and authentic dining experiences while managing logistics for a mid-range couple.",
    "visaLabel": "Visa-free · 180 days",
    "categories": [
      {
        "id": "visa",
        "name": "Visa & documents",
        "icon": "IdentificationCard",
        "total": 3,
        "done": 0,
        "nextTaskId": "passport-check",
        "blurb": "US citizens are visa-free in Peru for 180 days. Ensure your passport is valid and prepare for customs declarations."
      },
      {
        "id": "flights",
        "name": "Flights & stay",
        "icon": "AirplaneTilt",
        "total": 3,
        "done": 0,
        "nextTaskId": "book-flights",
        "blurb": "Book round-trip flights to Lima and reserve mid-range hotels in food-focused neighborhoods. Lock in Machu Picchu tickets early."
      },
      {
        "id": "transport",
        "name": "Local transport",
        "icon": "TrainSimple",
        "total": 3,
        "done": 0,
        "nextTaskId": "book-bus-trains",
        "blurb": "Peru relies on long-distance buses and domestic flights. Download Didi and Bolt for city transport; book train tickets to Machu Picchu in advance."
      },
      {
        "id": "money",
        "name": "Money & payments",
        "icon": "Wallet",
        "total": 3,
        "done": 0,
        "nextTaskId": "set-up-currency",
        "blurb": "Withdraw PEN soles in Lima. Most restaurants and markets accept cash; card payments are less common outside tourist zones."
      },
      {
        "id": "connectivity",
        "name": "Connectivity",
        "icon": "GlobeHemisphereWest",
        "total": 3,
        "done": 0,
        "nextTaskId": "activate-data",
        "blurb": "Buy a local SIM or activate an international plan. Internet is reliable in cities but spotty in rural areas and mountains."
      },
      {
        "id": "culture",
        "name": "Culture & etiquette",
        "icon": "HandHeart",
        "total": 4,
        "done": 0,
        "nextTaskId": "learn-phrases",
        "blurb": "Learn basic Spanish and Aymara greetings. Respect indigenous communities, especially in the highlands. Ask before photographing people or ceremonies."
      },
      {
        "id": "landing",
        "name": "Landing Day Hub",
        "icon": "MapPin",
        "total": 0,
        "done": 0,
        "nextTaskId": "airport-arrival",
        "blurb": "Guides to navigate Lima's airport, secure your first hotel, eat well on arrival night, and orient yourself before heading to the highlands."
      }
    ],
    "tasks": {
      "passport-check": {
        "id": "passport-check",
        "title": "Verify your passport is valid through your return date",
        "category": "Visa & documents",
        "status": "ready",
        "duration": "5 min",
        "why": "US citizens can enter Peru visa-free, but your passport must be valid for the entire trip. Border agents check this on arrival.",
        "steps": [
          "Open your passport and note the expiration date.",
          "Confirm it is at least one day past your return flight date."
        ],
        "cta": "Check passport"
      },
      "customs-form": {
        "id": "customs-form",
        "title": "Prepare to declare cash over $10,000 USD",
        "category": "Visa & documents",
        "status": "upcoming",
        "duration": "10 min",
        "why": "Peruvian customs requires declaration of cash over $10k. Most travelers won't hit this limit, but filing correctly avoids delays.",
        "steps": [
          "Check whether you're carrying over $10k in physical currency.",
          "If yes, download the Peru ADUANAS form (Declaración de Ingreso) and complete it before landing."
        ],
        "cta": "Review requirements"
      },
      "travel-insurance": {
        "id": "travel-insurance",
        "title": "Secure travel and emergency evacuation insurance",
        "category": "Visa & documents",
        "status": "ready",
        "duration": "20 min",
        "why": "High altitude (Cusco, Machu Picchu) can trigger altitude sickness. Insurance covering evacuation and medical care is essential for peace of mind.",
        "steps": [
          "Purchase a plan that covers high-altitude activities and medical evacuation.",
          "Save your policy number and 24-hour claims line in your phone."
        ],
        "cta": "Get quote",
        "headsUp": "Many US cards exclude adventure activities — confirm your plan covers mountain trekking."
      },
      "book-flights": {
        "id": "book-flights",
        "title": "Book round-trip flights to Lima and internal flights to Cusco",
        "category": "Flights & stay",
        "status": "ready",
        "duration": "45 min",
        "why": "Flights fill up quickly, especially during high season (May–September). Early booking locks in lower fares and preferred times.",
        "steps": [
          "Search for round-trip flights LIM → your home airport, with arrival in Lima and departure from Cusco if returning via Lima.",
          "Book domestic flights Lima to Cusco (1.5 hours) on LATAM or SKY Airline; consider timing around your Machu Picchu schedule."
        ],
        "cta": "Search flights"
      },
      "book-hotels": {
        "id": "book-hotels",
        "title": "Reserve mid-range hotels in Lima, Sacred Valley, and Cusco",
        "category": "Flights & stay",
        "status": "ready",
        "duration": "30–45 min",
        "why": "Good mid-range hotels in food-focused neighborhoods fill weeks ahead. Booking now secures locations near markets, restaurants, and culture.",
        "steps": [
          "Book 3 nights in Lima's Miraflores or Barranco (food, art, ocean views).",
          "Reserve 2 nights in Sacred Valley (Urubamba or Ollantaytambo) near Inca sites.",
          "Lock in 3 nights in Cusco's historic center (Plazoleta Nazarenas or San Blas) with views of the cathedral."
        ],
        "cta": "Start bookings",
        "needs": [
          "Hotel address for visa forms"
        ]
      },
      "book-machu-picchu": {
        "id": "book-machu-picchu",
        "title": "Book Machu Picchu entry tickets and train to Aguas Calientes",
        "category": "Flights & stay",
        "status": "ready",
        "duration": "30 min",
        "why": "Machu Picchu limits daily visitors. Tickets and the train from Cusco must be reserved 2–3 weeks ahead, especially in high season.",
        "steps": [
          "Go to machupicchu.gob.pe and book your date and entry time (dawn entry offers the best light and fewest crowds).",
          "Purchase train tickets on PeruRail.com from Ollantaytambo to Aguas Calientes; book the 7:30 am Expedition train for daytime views."
        ],
        "cta": "Reserve tickets",
        "needs": [
          "Passport number",
          "Exact travel dates"
        ],
        "headsUp": "Tickets sell out 2–3 weeks in high season. Book now to avoid gaps in your itinerary."
      },
      "book-bus-trains": {
        "id": "book-bus-trains",
        "title": "Book long-distance buses (Lima–Cusco) or domestic flights",
        "category": "Local transport",
        "status": "upcoming",
        "duration": "20 min",
        "why": "Getting from Lima to the Sacred Valley takes 22–24 hours by road or 1.5 hours by air. Booking in advance ensures comfort and schedule flexibility.",
        "steps": [
          "Compare options: fly Lima–Cusco (LATAM, SKY) vs. overnight bus (Cruz del Sur, Oltursa). Flying saves days and reduces fatigue at altitude.",
          "Book your chosen route and print or screenshot your e-ticket."
        ],
        "cta": "Compare and book"
      },
      "hire-guide": {
        "id": "hire-guide",
        "title": "Hire a local guide for Machu Picchu and Sacred Valley sites",
        "category": "Local transport",
        "status": "upcoming",
        "duration": "20 min",
        "why": "A bilingual Quechua- or Spanish-speaking guide transforms your visit, explaining archaeology, agriculture, and local culture missed on self-guided tours.",
        "steps": [
          "Book through Viator, GetYourGuide, or ask your hotel for local recommendations (often cheaper and more personalized).",
          "Confirm the guide speaks English and has expertise in pre-Incan and Incan history."
        ],
        "cta": "Find guide"
      },
      "download-apps": {
        "id": "download-apps",
        "title": "Download Didi, Google Maps, and offline maps for cities",
        "category": "Local transport",
        "status": "ready",
        "duration": "10 min",
        "why": "Taxis are common but negotiating fares can be tricky. Apps make getting around Lima and Cusco faster and safer.",
        "steps": [
          "Install Didi (Peru's main ride app), Google Maps, and Maps.me (for offline navigation in the highlands).",
          "Download offline maps for Lima, Cusco, and the Sacred Valley before your trip."
        ],
        "cta": "Get apps"
      },
      "set-up-currency": {
        "id": "set-up-currency",
        "title": "Withdraw Peruvian soles at Lima airport ATM before heading uptown",
        "category": "Money & payments",
        "status": "ready",
        "duration": "5 min",
        "why": "ATMs and card payments are less reliable in mountain towns. Getting cash immediately on arrival ensures you can eat and move around on Day 1.",
        "steps": [
          "Locate the Interbank or BCP ATM in Lima's Jorge Chávez International Airport (Arrivals hall).",
          "Withdraw 1,000–1,500 PEN (≈$300–$450 USD) to cover lodging, food, and transport for the first 2–3 days."
        ],
        "cta": "Plan ATM visit"
      },
      "notify-bank": {
        "id": "notify-bank",
        "title": "Notify your US bank of travel dates and card limits",
        "category": "Money & payments",
        "status": "ready",
        "duration": "10 min",
        "why": "Banks flag international card use as fraud by default. Advance notice prevents your card being blocked mid-trip.",
        "steps": [
          "Call or use your bank's app to record your travel dates and Peru as your destination.",
          "Request a daily withdrawal limit of at least $300 USD to accommodate mid-range dining and hotels."
        ],
        "cta": "Contact bank"
      },
      "budget-daily": {
        "id": "budget-daily",
        "title": "Plan a daily budget of $80–120 per person for mid-range comfort",
        "category": "Money & payments",
        "status": "upcoming",
        "duration": "15 min",
        "why": "Understanding spending patterns helps you pace your cash, avoid overspending on transport, and prioritize food experiences.",
        "steps": [
          "Allocate: ~$40–50 for lodging, $25–35 for meals (higher in Lima; lower in smaller towns), $15 for local transport and entry fees.",
          "Track daily spending in a note on your phone to stay within budget without micromanaging."
        ],
        "cta": "Create budget tracker"
      },
      "activate-data": {
        "id": "activate-data",
        "title": "Buy a Movistar or Claro Peru SIM card at the airport",
        "category": "Connectivity",
        "status": "ready",
        "duration": "10 min",
        "why": "Local SIM cards are cheaper and more reliable than roaming. You'll need internet to navigate, book guides, and stay in touch.",
        "steps": [
          "Visit the Movistar or Claro booth in Jorge Chávez International Airport Arrivals.",
          "Buy a SIM for ~30 PEN (~$9 USD) and top up 100 PEN (~$30) for data. 4G works in cities; expect spotty coverage above 3,500 m."
        ],
        "cta": "Get SIM"
      },
      "backup-docs": {
        "id": "backup-docs",
        "title": "Back up passport, visas, and hotel confirmations to cloud storage",
        "category": "Connectivity",
        "status": "ready",
        "duration": "10 min",
        "why": "If your phone is lost or stolen, cloud access to copies keeps your trip moving. This is especially critical in crowded areas.",
        "steps": [
          "Photograph both sides of your passport and travel insurance documents.",
          "Upload them to Google Drive or Dropbox with a strong password; keep the folder offline-accessible."
        ],
        "cta": "Upload documents"
      },
      "download-offline": {
        "id": "download-offline",
        "title": "Download offline guides and altitude health info",
        "category": "Connectivity",
        "status": "upcoming",
        "duration": "15 min",
        "why": "Internet is spotty above 3,000 m. Offline guides to Cusco, the Sacred Valley, and Machu Picchu keep you informed when you can't stream.",
        "steps": [
          "Download the Pocket Earth or WikiPedia apps and search for Cusco, Machu Picchu, and Sacred Valley.",
          "Bookmark or screenshot articles on altitude sickness, Quechua culture, and Inca history to read on buses."
        ],
        "cta": "Save guides"
      },
      "learn-phrases": {
        "id": "learn-phrases",
        "title": "Learn key Spanish and Aymara phrases for dining and navigation",
        "category": "Culture & etiquette",
        "status": "ready",
        "duration": "20 min",
        "why": "Speaking even basic phrases shows respect and opens doors with locals, especially in markets and rural areas. Food vendors and guides appreciate the effort.",
        "steps": [
          "Use Google Translate or Duolingo to practice: 'Where is a good restaurant?' and 'What is this dish?' in Spanish.",
          "Memorize Aymara greetings (Napayalla, Sullaw) and food words (ch'uño for freeze-dried potatoes, quinoa)."
        ],
        "cta": "Start learning",
        "needs": [
          "1–2 weeks for basic conversational comfort"
        ]
      },
      "research-food": {
        "id": "research-food",
        "title": "Research Lima's food scene and book 1–2 special dinners in advance",
        "category": "Culture & etiquette",
        "status": "ready",
        "duration": "30 min",
        "why": "Lima is one of the world's food capitals. Booking popular restaurants (Maido, La Mar, Astrid & Gastón) weeks ahead ensures you eat the meals you've dreamed about.",
        "steps": [
          "Read recent restaurant reviews on TripAdvisor, Eater, or Food Gipsies.",
          "Book 1–2 special dinners for your Lima nights using OpenTable or restaurants' direct websites. Confirm your US phone number for reservations."
        ],
        "cta": "Find restaurants",
        "needs": [
          "Credit card for deposit"
        ]
      },
      "photo-etiquette": {
        "id": "photo-etiquette",
        "title": "Learn photography etiquette for indigenous communities in the highlands",
        "category": "Culture & etiquette",
        "status": "upcoming",
        "duration": "15 min",
        "why": "Sacred Valley and Cusco communities are protective of their image. Asking permission and understanding sacred sites shows respect and enriches interactions.",
        "steps": [
          "Read a brief guide on indigenous Quechua culture (search 'Quechua photo etiquette Peru').",
          "Plan to ask guides before photographing ceremonies, markets, or people. Some sites prohibit photos entirely."
        ],
        "cta": "Read guide"
      },
      "altitude-prep": {
        "id": "altitude-prep",
        "title": "Consult your doctor about altitude sickness prevention and medication",
        "category": "Culture & etiquette",
        "status": "ready",
        "duration": "15 min",
        "why": "Cusco sits at 11,150 ft (3,400 m). Many travelers experience mild altitude sickness. Your doctor may recommend soroche (altitude sickness) pills or coca tea.",
        "steps": [
          "Email your doctor with your itinerary highlighting Cusco and Machu Picchu elevations.",
          "Ask about acetazolamide (Diamox) or ibuprofen; some prefer coca tea (a traditional, mild remedy)."
        ],
        "cta": "Schedule call with doctor",
        "headsUp": "Arrive in Cusco well-rested; avoid alcohol and rushing on Day 1 to acclimatize."
      },
      "airport-arrival": {
        "id": "airport-arrival",
        "title": "Navigate Lima airport: taxi to hotel, SIM, first meal",
        "category": "Landing",
        "status": "upcoming",
        "duration": "60–90 min",
        "why": "Your first hours set the tone. Staying organized at arrival prevents fatigue and gets you oriented to the city before exploring.",
        "steps": [
          "Exit to Arrivals. Use Didi app to book a car to your hotel (avoids negotiating with taxi drivers). Cost: ~100–150 PEN (~$30–$45).",
          "Stop at a convenience store (Wong, Carrefour) near your hotel to grab snacks, water, and local cash if needed."
        ],
        "cta": "Save this guide"
      },
      "first-night": {
        "id": "first-night",
        "title": "Eat dinner at a casual cevichería or market near your Lima hotel",
        "category": "Landing",
        "status": "upcoming",
        "duration": "90 min",
        "why": "Eating local food on arrival builds excitement and anchors you to Lima's food culture. Markets and casual spots are affordable and authentic.",
        "steps": [
          "Ask your hotel concierge for a nearby cevichería (fish ceviche house) or Central Market (Mercado Central de San Isidro).",
          "Order a ceviche, chicha morada (purple corn drink), and anticuchos (grilled meat skewers). Expect 35–50 PEN (~$10–$15) per person."
        ],
        "cta": "Plan dinner"
      },
      "orientation-walk": {
        "id": "orientation-walk",
        "title": "Take a guided walking tour of Lima's historic center or Miraflores on Day 2",
        "category": "Landing",
        "status": "upcoming",
        "duration": "3 hours",
        "why": "A local guide on Day 2 gives you bearings, highlights safe neighborhoods, and introduces you to Lima's layered history before heading to the highlands.",
        "steps": [
          "Book a 3-hour walking tour (Viator, GetYourGuide, or your hotel) covering Plaza Mayor, Cathedral, and Miraflores cliff views.",
          "Go early (8–9 am) to avoid crowds and heat. Wear sunscreen and bring water."
        ],
        "cta": "Book tour"
      }
    },
    "briefingBuckets": {
      "now": [
        "passport-check",
        "travel-insurance",
        "book-flights",
        "book-hotels",
        "book-machu-picchu",
        "download-apps",
        "set-up-currency",
        "notify-bank",
        "activate-data",
        "backup-docs",
        "learn-phrases",
        "research-food",
        "altitude-prep"
      ],
      "soon": [
        "customs-form",
        "book-bus-trains",
        "hire-guide",
        "budget-daily",
        "download-offline",
        "photo-etiquette"
      ],
      "final": [
        "airport-arrival",
        "first-night",
        "orientation-walk"
      ]
    },
    "itinerary": {
      "routeTitle": "Lima, Sacred Valley & Cusco: Food and Archaeology",
      "dateRange": "May–September (dry season; best weather and clearest mountain views)",
      "cities": [
        {
          "code": "LIM",
          "name": "Lima",
          "days": 3,
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Bas%C3%ADlica_Catedral_Metropolitana_de_Lima_%28cropped%29.jpg/1280px-Bas%C3%ADlica_Catedral_Metropolitana_de_Lima_%28cropped%29.jpg",
          "stayLabel": "Miraflores"
        },
        {
          "code": "URB",
          "name": "Sacred Valley",
          "days": 3,
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Urubamba_-_Valle_Sagrado_3.JPG/1280px-Urubamba_-_Valle_Sagrado_3.JPG",
          "stayLabel": "Urubamba"
        },
        {
          "code": "AFP",
          "name": "Machu Picchu",
          "days": 1,
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Machu_Picchu%2C_2023_%28012%29.jpg/1280px-Machu_Picchu%2C_2023_%28012%29.jpg",
          "stayLabel": "Day trip from Aguas Calientes"
        },
        {
          "code": "CUZ",
          "name": "Cusco",
          "days": 5,
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Vista_Calle_Suecia.jpg/1280px-Vista_Calle_Suecia.jpg",
          "stayLabel": "Historic center"
        }
      ],
      "legs": [
        {
          "from": "Lima (LIM)",
          "to": "Cusco (CUZ)",
          "mode": "plane",
          "duration": "1.5 hours",
          "stops": "Direct",
          "status": "booked"
        },
        {
          "from": "Cusco",
          "to": "Sacred Valley (Ollantaytambo)",
          "mode": "car",
          "duration": "1 hour",
          "stops": "Direct (private driver or tour operator)",
          "status": "planned"
        },
        {
          "from": "Ollantaytambo",
          "to": "Machu Picchu (via Aguas Calientes)",
          "mode": "rail",
          "duration": "2 hours train + 20 min bus",
          "stops": "Aguas Calientes station, shuttle bus to site",
          "status": "booked"
        },
        {
          "from": "Aguas Calientes",
          "to": "Cusco",
          "mode": "rail",
          "duration": "3.5 hours",
          "stops": "Return train Ollantaytambo–Cusco",
          "status": "planned"
        },
        {
          "from": "Cusco",
          "to": "Lima",
          "mode": "plane",
          "duration": "1.5 hours",
          "stops": "Direct",
          "status": "booked"
        }
      ]
    },
    "itineraryDays": [
      {
        "dayNumber": 1,
        "city": "Lima",
        "date": "Day 1 (Arrival)",
        "kind": "arrival",
        "blocks": [
          {
            "slot": "morning",
            "label": "Arrive at Jorge Chávez International Airport",
            "detail": "Clear immigration (as a US citizen, this takes 5–10 min). Collect luggage.",
            "meta": "7:00–8:30 am typical arrival window"
          },
          {
            "slot": "afternoon",
            "label": "Get local SIM, withdraw cash, reach hotel",
            "detail": "Buy Movistar/Claro SIM at airport booth. Withdraw 1,000–1,500 PEN at ATM. Use Didi to reach hotel in Miraflores.",
            "meta": "Total: ~90 min to hotel check-in"
          },
          {
            "slot": "evening",
            "label": "Rest and eat dinner at a nearby cevichería",
            "detail": "Light dinner (jet lag is real). Walk around hotel neighborhood or order room service if tired. Sleep early.",
            "meta": "Ceviche & chicha morada: 40–50 PEN per person"
          }
        ]
      },
      {
        "dayNumber": 2,
        "city": "Lima",
        "date": "Day 2 (Explore)",
        "kind": "explore",
        "blocks": [
          {
            "slot": "morning",
            "label": "Guided walking tour of historic center and/or Miraflores",
            "detail": "Meet guide at 8:00 am. Visit Plaza Mayor, Cathedral, San Francisco convent (gold altars). Or explore Miraflores' coastal cliffs, museums, and galleries.",
            "meta": "3 hours; 80–120 PEN per person"
          },
          {
            "slot": "afternoon",
            "label": "Browse Central Market or Barranco neighborhood",
            "detail": "Walk through Mercado Central for fresh fruits, handicrafts, and snacks. Grab lunch at a market stall or café.",
            "meta": "Casual lunch: 25–40 PEN per person"
          },
          {
            "slot": "evening",
            "label": "Dinner at a special restaurant (if booked) or casual spot",
            "detail": "Special dinner at Maido, La Mar, or local recommendation. Or try a smaller bistro in Barranco for a lower-key evening.",
            "meta": "Mid-range: 80–150 PEN per person; high-end: 200+ PEN"
          }
        ]
      }
    ],
    "hotel": {
      "name": "Selina Miraflores",
      "addressLocal": "Av. Pardo 535, Miraflores, Lima",
      "addressEn": "Av. Pardo 535, Miraflores, Lima",
      "neighborhood": "Miraflores",
      "city": "Lima"
    },
    "phrases": [
      {
        "group": "Greetings",
        "items": [
          {
            "en": "Hello.",
            "local": "Napayalla.",
            "roman": "Napayalla"
          },
          {
            "en": "Thank you.",
            "local": "Sullaw.",
            "roman": "Sullaw"
          },
          {
            "en": "Goodbye.",
            "local": "Alaversa.",
            "roman": "Alaversa"
          }
        ]
      },
      {
        "group": "Taxi & directions",
        "items": [
          {
            "en": "Please take me to this address.",
            "local": "Mani rut'a ukhaxa apxataña.",
            "roman": "Mani rutá ukhasa apxataña"
          },
          {
            "en": "How much to the hotel?",
            "local": "Kuantu qolqe hotel ukhaxa?",
            "roman": "Kuantu qolqe hotel ukhasa"
          },
          {
            "en": "Go straight ahead.",
            "local": "Aychuta jatha.",
            "roman": "Aychuta jatha"
          }
        ]
      },
      {
        "group": "Restaurant & food",
        "items": [
          {
            "en": "What do you recommend?",
            "local": "Kunak asintañata amuyataki?",
            "roman": "Kunak asintan ata amuyataki"
          },
          {
            "en": "One ceviche, please.",
            "local": "Paya cebiche mani.",
            "roman": "Paya cebiche mani"
          },
          {
            "en": "Is this spicy?",
            "local": "Uka ch'uqi kanuma?",
            "roman": "Uka chuqi kanuma"
          }
        ]
      },
      {
        "group": "Payment",
        "items": [
          {
            "en": "How much is this?",
            "local": "Kuantu qolqe ukhaxa?",
            "roman": "Kuantu qolqe ukhasa"
          },
          {
            "en": "Do you accept cards?",
            "local": "Tarjeta qolqe chiqañataki?",
            "roman": "Tarjeta qolqe chiquñataki"
          },
          {
            "en": "The bill, please.",
            "local": "Qolqe apxtañata mani.",
            "roman": "Qolqe apxtañata mani"
          }
        ]
      },
      {
        "group": "Emergency & help",
        "items": [
          {
            "en": "I need help.",
            "local": "Yanapta muñatañapa.",
            "roman": "Yanapta muñatañapa"
          },
          {
            "en": "Please call a doctor.",
            "local": "Imaña hampiri apxataña.",
            "roman": "Imaña hampiri apxataña"
          },
          {
            "en": "Where is the hospital?",
            "local": "Ampiri uta kunatsa kanuma?",
            "roman": "Ampiri uta kunatsa kanuma"
          }
        ]
      }
    ],
    "emergencyContacts": [
      {
        "label": "Police",
        "number": "105",
        "kind": "urgent"
      },
      {
        "label": "Medical",
        "number": "106",
        "kind": "urgent"
      },
      {
        "label": "Fire",
        "number": "116",
        "kind": "urgent"
      },
      {
        "label": "U.S. citizens abroad · State Dept",
        "number": "+1 888 407 4747",
        "kind": "consular"
      }
    ],
    "predeparture": [
      {
        "group": "Documents & health",
        "items": [
          {
            "id": "passport-valid",
            "label": "Passport valid through return date",
            "linkedTaskId": "passport-check"
          },
          {
            "id": "insurance-active",
            "label": "Travel and evacuation insurance confirmed",
            "linkedTaskId": "travel-insurance"
          },
          {
            "id": "altitude-clearance",
            "label": "Doctor's guidance on altitude sickness prevention",
            "linkedTaskId": "altitude-prep"
          }
        ]
      },
      {
        "group": "Bookings & reservations",
        "items": [
          {
            "id": "flights-booked",
            "label": "Round-trip flights LIM–CUZ confirmed",
            "linkedTaskId": "book-flights"
          },
          {
            "id": "hotels-booked",
            "label": "All three hotel nights (Lima, Sacred Valley, Cusco) confirmed",
            "linkedTaskId": "book-hotels"
          },
          {
            "id": "machu-picchu-booked",
            "label": "Machu Picchu entry and train tickets reserved",
            "linkedTaskId": "book-machu-picchu"
          }
        ]
      },
      {
        "group": "Connectivity & money",
        "items": [
          {
            "id": "bank-notified",
            "label": "Bank notified of travel; card limits raised",
            "linkedTaskId": "notify-bank"
          },
          {
            "id": "backup-uploaded",
            "label": "Passport and insurance docs backed up to cloud",
            "linkedTaskId": "backup-docs"
          },
          {
            "id": "research-done",
            "label": "Lima restaurants researched and 1–2 special meals booked",
            "linkedTaskId": "research-food"
          }
        ]
      }
    ]
  },
  "GR": {
    "country": {
      "code": "GR",
      "name": "Greece",
      "capital": "Athens",
      "region": "Europe",
      "flag": "🇬🇷"
    },
    "heroCity": "Athens",
    "heroImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Monastiraki_Square_and_Acropolis_in_Athens_%2844149181684%29.jpg/1280px-Monastiraki_Square_and_Acropolis_in_Athens_%2844149181684%29.jpg",
    "arrivalAirport": {
      "code": "ATH",
      "city": "Athens"
    },
    "currency": {
      "code": "EUR",
      "symbol": "€",
      "usdRate": 0.861602
    },
    "languages": [
      "Greek"
    ],
    "phraseLang": {
      "name": "Greek",
      "bcp47": "el-GR",
      "hasRomanization": true
    },
    "homeCountry": "United States",
    "summary": "You have 12 days to explore Greece's islands and capital. Start your visa and payment setup now, lock in ferries between islands soon, and memorize key phrases before landing. Greek hospitality, fresh seafood, and ancient sites reward careful timing — book food experiences and research neighborhoods early to avoid crowds and tourist premiums.",
    "visaLabel": "Visa-free · 90 days",
    "categories": [
      {
        "id": "visa",
        "name": "Visa & documents",
        "icon": "IdentificationCard",
        "total": 3,
        "done": 0,
        "nextTaskId": "passport-check",
        "blurb": "US citizens enter Greece visa-free for up to 90 days. Confirm your passport is valid for 6+ months beyond your return. No visa application needed."
      },
      {
        "id": "flights",
        "name": "Flights & stay",
        "icon": "AirplaneTilt",
        "total": 3,
        "done": 0,
        "nextTaskId": "flight-book",
        "blurb": "Book round-trip flights to Athens and secure mid-range accommodations in a walkable neighborhood. Consider island ferries as part of your transport planning."
      },
      {
        "id": "transport",
        "name": "Local transport",
        "icon": "TrainSimple",
        "total": 0,
        "done": 0,
        "nextTaskId": "ferry-book",
        "blurb": "Greece relies on buses, ferries between islands, and local taxis. Download offline maps and book inter-island ferries in advance during peak season."
      },
      {
        "id": "money",
        "name": "Money & payments",
        "icon": "Wallet",
        "total": 3,
        "done": 0,
        "nextTaskId": "card-notify",
        "blurb": "Greece uses EUR. Credit cards work widely in cities and tourist areas, but cash is essential on smaller islands. Notify your bank of travel dates."
      },
      {
        "id": "connectivity",
        "name": "Connectivity",
        "icon": "GlobeHemisphereWest",
        "total": 2,
        "done": 0,
        "nextTaskId": "sim-plan",
        "blurb": "Mobile coverage is reliable in cities and islands. Grab a local SIM or eSIM on arrival, or rely on your US plan with roaming. WiFi is standard in hotels and tavernas."
      },
      {
        "id": "culture",
        "name": "Culture & etiquette",
        "icon": "HandHeart",
        "total": 3,
        "done": 0,
        "nextTaskId": "food-research",
        "blurb": "Greeks value warmth and shared meals. Dinner starts late (9pm+). Tipping is optional but 5–10% is appreciated. Dress modestly at religious sites."
      },
      {
        "id": "landing",
        "name": "Landing Day Hub",
        "icon": "MapPin",
        "total": 0,
        "done": 0,
        "nextTaskId": "airport-plan",
        "blurb": "Arrive at Athens airport, exchange currency, grab a SIM, and head to your hotel. Have key phrases ready and bookmark offline maps before landing."
      }
    ],
    "tasks": {
      "passport-check": {
        "id": "passport-check",
        "title": "Confirm your passport has 6+ months validity",
        "category": "Visa & documents",
        "status": "ready",
        "duration": "5 min",
        "why": "Greece requires 6+ months passport validity at entry. A quick check now prevents discovery at the gate.",
        "steps": [
          "Open your passport and check the expiration date",
          "Confirm it expires 6+ months after your return date"
        ],
        "cta": "Check expiry",
        "needs": [
          "Your passport"
        ]
      },
      "copies-scan": {
        "id": "copies-scan",
        "title": "Scan and store passport + insurance documents",
        "category": "Visa & documents",
        "status": "ready",
        "duration": "10 min",
        "why": "Digital backups let you recover quickly if your passport is lost or your insurance info is needed abroad.",
        "steps": [
          "Photograph or scan your passport data page and insurance card",
          "Email copies to yourself or store in Google Drive"
        ],
        "cta": "Upload backups"
      },
      "entry-card": {
        "id": "entry-card",
        "title": "Know you don't need a Greek entry visa as a US citizen",
        "category": "Visa & documents",
        "status": "ready",
        "duration": "2 min",
        "why": "No visa application required — but you'll be asked on arrival about your accommodation and return flight, so have those details ready.",
        "steps": [
          "Confirm your flight dates and first hotel address",
          "Keep them on your phone or printed"
        ],
        "cta": "Verify details",
        "needs": [
          "Flight itinerary",
          "Hotel address"
        ]
      },
      "flight-book": {
        "id": "flight-book",
        "title": "Book round-trip flights to Athens (ATH)",
        "category": "Flights & stay",
        "status": "ready",
        "duration": "45 min to 1 hour",
        "why": "Early booking locks better fares and guarantees your dates; spring (April–May) and fall (September–October) offer the best weather and fewer crowds.",
        "steps": [
          "Search flights from your home city to Athens on Google Flights or Kayak",
          "Compare fares and choose departure/return times that give you full days"
        ],
        "cta": "Search flights",
        "needs": [
          "Your travel dates",
          "Preferred departure city"
        ],
        "headsUp": "Book direct flights if available — they save a full day of travel time."
      },
      "accommodation-book": {
        "id": "accommodation-book",
        "title": "Reserve a mid-range hotel in Plaka or Kolonaki, Athens",
        "category": "Flights & stay",
        "status": "ready",
        "duration": "30–45 min",
        "why": "Central neighborhoods near the Acropolis and food markets put you in the heart of Athens and cut commute times. Book early for better rates and choice.",
        "steps": [
          "Search Booking.com or Airbnb for 3–4 nights near Plaka or Kolonaki",
          "Check reviews for cleanliness and WiFi, then book"
        ],
        "cta": "Reserve hotel",
        "needs": [
          "Arrival date",
          "Number of nights"
        ],
        "headsUp": "Plaka gets crowded with tourists at night — Kolonaki is quieter and still walkable to museums."
      },
      "island-plan": {
        "id": "island-plan",
        "title": "Plan your island route (Santorini, Mykonos, or Crete)",
        "category": "Flights & stay",
        "status": "upcoming",
        "duration": "30 min",
        "why": "Choosing your islands early lets you book ferries and accommodations before peak-season sellouts. Ferry schedules are seasonal and change monthly.",
        "steps": [
          "Research 2–3 nearby islands that interest you (food and archaeology lean toward Crete; nightlife toward Mykonos)",
          "Sketch a 4–5 day island loop from Athens"
        ],
        "cta": "Map your islands"
      },
      "ferry-book": {
        "id": "ferry-book",
        "title": "Book inter-island ferries in advance",
        "category": "Transport",
        "status": "upcoming",
        "duration": "20–30 min",
        "why": "Summer ferries book up 2–3 weeks ahead. Securing seats now guarantees flexibility and often cheaper rates.",
        "steps": [
          "Visit Ferries.gr or OpenSeas to check Athens-to-island schedules and prices",
          "Book your outbound and return ferries, leaving 1–2 days slack for weather delays"
        ],
        "cta": "Reserve ferries",
        "needs": [
          "Island choices",
          "Preferred dates"
        ],
        "headsUp": "Ferry cancellations due to weather are common in winter; check weather windows close to travel."
      },
      "bus-offline": {
        "id": "bus-offline",
        "title": "Download Greece's KTEL bus app for island travel",
        "category": "Transport",
        "status": "upcoming",
        "duration": "10 min",
        "why": "KTEL buses connect towns on islands and mainland. The app shows schedules and lets you book ahead, avoiding long waits in summer.",
        "steps": [
          "Download KTEL Buses app on your phone",
          "Save your hotel address and key destinations for quick lookups"
        ],
        "cta": "Install app"
      },
      "taxi-card": {
        "id": "taxi-card",
        "title": "Know how to hail and pay for taxis in Greece",
        "category": "Transport",
        "status": "upcoming",
        "duration": "5 min",
        "why": "Taxis are common in Athens and islands but have quirks: negotiate fares on islands, use meters in Athens, and always ask for a receipt (apodeixi).",
        "steps": [
          "Learn the Greek word for taxi ('taksi') and 'meter' ('metron')",
          "Save your hotel address in English and Greek on your phone"
        ],
        "cta": "Memorize essentials"
      },
      "card-notify": {
        "id": "card-notify",
        "title": "Notify your bank of your Greece travel dates",
        "category": "Money & payments",
        "status": "ready",
        "duration": "10 min",
        "why": "Banks flag European transactions as fraud unless you alert them. One call now prevents card blocks on the first day.",
        "steps": [
          "Call your bank's travel desk or use their app to add Greece to your travel dates",
          "Confirm your card PIN and that your card works abroad"
        ],
        "cta": "Call bank",
        "needs": [
          "Your card",
          "Trip dates"
        ],
        "headsUp": "Do this 2–3 days before travel; weekends can delay processing."
      },
      "atm-plan": {
        "id": "atm-plan",
        "title": "Plan your cash strategy: EUR and where to withdraw",
        "category": "Money & payments",
        "status": "ready",
        "duration": "10 min",
        "why": "Small island tavernas, ferries, and markets often don't accept cards. Carrying €200–300 prevents frustration; ATMs are reliable in Athens and main islands.",
        "steps": [
          "Find ATM locations near your Athens hotel using Google Maps",
          "Plan to withdraw €100–150 on day 1, then small amounts as needed on islands"
        ],
        "cta": "Locate ATMs"
      },
      "card-type": {
        "id": "card-type",
        "title": "Confirm you have a chip-enabled credit or debit card",
        "category": "Money & payments",
        "status": "ready",
        "duration": "5 min",
        "why": "Greece has moved to chip cards; contactless (Apple Pay, Google Pay) is growing but not universal. Chip cards are your backup.",
        "steps": [
          "Check your card has an EMV chip (small square on the front)",
          "Test contactless tap payment at a store before you go"
        ],
        "cta": "Check card"
      },
      "wifi-apps": {
        "id": "wifi-apps",
        "title": "Download offline maps and translation apps",
        "category": "Connectivity",
        "status": "ready",
        "duration": "15 min",
        "why": "Roaming data is costly or spotty on islands. Offline maps and a translation app let you navigate and ask for directions without internet.",
        "steps": [
          "Download Google Maps offline for Athens and your chosen islands (download regions, not the whole country)",
          "Install Google Translate and allow offline language download"
        ],
        "cta": "Prep maps & translate"
      },
      "sim-plan": {
        "id": "sim-plan",
        "title": "Choose a local SIM or eSIM for Greece",
        "category": "Connectivity",
        "status": "upcoming",
        "duration": "15 min to activate",
        "why": "A local number lets you stay in touch, book taxis, and access local services. Cheaper than US roaming for a 12-day trip.",
        "steps": [
          "Research eSIM providers (like Airalo, Nomad, or local Cosmote) or plan to buy a SIM card at the Athens airport",
          "Buy and activate on day 1 so you have a local number"
        ],
        "cta": "Review options"
      },
      "food-research": {
        "id": "food-research",
        "title": "Research regional food: Crete, Cyclades, and Athens specialties",
        "category": "Culture & etiquette",
        "status": "upcoming",
        "duration": "30 min",
        "why": "Food is central to Greek culture. Pre-reading dishes, markets, and casual tavernas (no reservations, eat where Greeks eat) shapes better meals and memorable experiences.",
        "steps": [
          "Read about meze culture and ouzo etiquette; bookmark food writers like Diane Kochilas' Greek recipes",
          "Save 2–3 casual taverna recommendations per island (use Google Maps, not Michelin guides)"
        ],
        "cta": "Explore food",
        "headsUp": "Tourist trap restaurants near major sites; locals eat 1–2 blocks away at half the price."
      },
      "site-timing": {
        "id": "site-timing",
        "title": "Book Acropolis tickets and plan museum hours to beat crowds",
        "category": "Culture & etiquette",
        "status": "upcoming",
        "duration": "20 min",
        "why": "The Acropolis and museums fill by 10am in summer. Timed entry tickets (online only) save 1–2 hours and cost €2 extra.",
        "steps": [
          "Buy Acropolis timed entry online (acropolisofathens.gr) for your first or second day",
          "Plan museum visits for mornings (8–10am) or late afternoons (4–6pm)"
        ],
        "cta": "Book Acropolis"
      },
      "dress-code": {
        "id": "dress-code",
        "title": "Pack modest clothing for churches and monasteries",
        "category": "Culture & etiquette",
        "status": "upcoming",
        "duration": "5 min",
        "why": "Greek Orthodox sites require covered shoulders and knees. Lightweight wraps are practical and respectful for island monasteries.",
        "steps": [
          "Pack a light scarf or overshirt that covers shoulders",
          "Confirm your hotel location relative to active monasteries if that's an interest"
        ],
        "cta": "Check pack list"
      },
      "airport-plan": {
        "id": "airport-plan",
        "title": "Arrive early, exchange currency, and grab a SIM at Athens airport",
        "category": "Landing",
        "status": "upcoming",
        "duration": "1–1.5 hours",
        "why": "First-day logistics (money, phone connection, transport to hotel) happen smoothly if you're organized. A pre-made hotel address in Greek saves time.",
        "steps": [
          "Screenshot your hotel name and address in Greek before you land",
          "Arrive 2+ hours early, then head to ATM, currency exchange, and SIM desk in the airport terminal"
        ],
        "cta": "Pre-plan arrival"
      },
      "phrases-ready": {
        "id": "phrases-ready",
        "title": "Memorize key Greek phrases before you land",
        "category": "Landing",
        "status": "upcoming",
        "duration": "15 min",
        "why": "A few words go far in Greece. Locals respond warmly to travelers who try, and it smooths restaurant orders and taxi rides.",
        "steps": [
          "Say aloud: 'Kalinychta' (goodnight), 'Efharistó' (thank you), 'Métron parakaló' (meter, please for taxis)",
          "Save a screenshot of your phrase list on your phone"
        ],
        "cta": "Learn phrases"
      },
      "emergency-numbers": {
        "id": "emergency-numbers",
        "title": "Save Greece's emergency numbers and your hotel details",
        "category": "Landing",
        "status": "upcoming",
        "duration": "5 min",
        "why": "Fast access to help and your hotel info prevents panic if you're lost or need assistance.",
        "steps": [
          "Write down your hotel's phone number and address in your phone and a notebook",
          "Save emergency contact numbers provided by your insurance or embassy"
        ],
        "cta": "Save contacts"
      }
    },
    "briefingBuckets": {
      "now": [
        "passport-check",
        "copies-scan",
        "entry-card",
        "flight-book",
        "accommodation-book",
        "card-notify",
        "atm-plan",
        "card-type",
        "wifi-apps"
      ],
      "soon": [
        "island-plan",
        "ferry-book",
        "bus-offline",
        "taxi-card",
        "sim-plan",
        "food-research",
        "site-timing",
        "dress-code"
      ],
      "final": [
        "airport-plan",
        "phrases-ready",
        "emergency-numbers"
      ]
    },
    "itinerary": {
      "routeTitle": "Athens, Santorini & Crete: 12 Days of Greek Islands",
      "dateRange": "April–May or September–October (shoulder season for weather and fewer crowds)",
      "cities": [
        {
          "code": "ATH",
          "name": "Athens",
          "days": 3,
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Monastiraki_Square_and_Acropolis_in_Athens_%2844149181684%29.jpg/1280px-Monastiraki_Square_and_Acropolis_in_Athens_%2844149181684%29.jpg",
          "stayLabel": "Acropolis, museums, food markets"
        },
        {
          "code": "JTR",
          "name": "Santorini",
          "days": 4,
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/2011_Dimos_Thiras.png/1280px-2011_Dimos_Thiras.png",
          "stayLabel": "Caldera views, white-washed villages, sunset"
        },
        {
          "code": "HER",
          "name": "Crete",
          "days": 4,
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Island_of_Crete%2C_Greece.JPG/1280px-Island_of_Crete%2C_Greece.JPG",
          "stayLabel": "Archaeology, beaches, local tavernas"
        },
        {
          "code": "ATH",
          "name": "Return to Athens",
          "days": 1,
          "image": "",
          "stayLabel": "Evening departure"
        }
      ],
      "legs": [
        {
          "from": "Home (USA)",
          "to": "Athens (ATH)",
          "mode": "plane",
          "duration": "10–12 hours",
          "stops": "0–1 connection",
          "status": "planned"
        },
        {
          "from": "Athens",
          "to": "Santorini",
          "mode": "ferry",
          "duration": "5–7 hours",
          "stops": "Paros or Naxos",
          "status": "planned"
        },
        {
          "from": "Santorini",
          "to": "Crete (Heraklion)",
          "mode": "ferry",
          "duration": "2–2.5 hours",
          "stops": "None (direct)",
          "status": "planned"
        },
        {
          "from": "Crete",
          "to": "Athens",
          "mode": "ferry",
          "duration": "8–10 hours",
          "stops": "Evening ferry",
          "status": "planned"
        },
        {
          "from": "Athens (ATH)",
          "to": "Home (USA)",
          "mode": "plane",
          "duration": "10–12 hours",
          "stops": "0–1 connection",
          "status": "planned"
        }
      ]
    },
    "itineraryDays": [
      {
        "dayNumber": 1,
        "city": "Athens",
        "date": "Day 1 (Arrival)",
        "kind": "arrival",
        "blocks": [
          {
            "slot": "morning",
            "label": "Land & settle",
            "detail": "Arrive at Athens airport (ATH). Clear immigration, exchange currency or withdraw EUR at ATM, and buy a local SIM card. Grab a taxi or pre-booked shuttle to your hotel in Plaka.",
            "meta": "1–2 hours total"
          },
          {
            "slot": "afternoon",
            "label": "Check in & rest",
            "detail": "Drop bags at your hotel. Shower and rest for 1–2 hours. A short walk around your neighborhood lets your body acclimate.",
            "meta": "Light activity"
          },
          {
            "slot": "evening",
            "label": "First dinner",
            "detail": "Eat dinner at a casual taverna within walking distance of your hotel. Try local cheese, olives, and a simple grilled fish. Greeks eat late (9pm+), so 8pm is early."
          }
        ]
      },
      {
        "dayNumber": 2,
        "city": "Athens",
        "date": "Day 2 (Explore)",
        "kind": "explore",
        "blocks": [
          {
            "slot": "morning",
            "label": "Acropolis & museums",
            "detail": "Enter the Acropolis Museum (near your hotel) at 8am with your pre-booked ticket. Spend 2–3 hours, then walk up to the Acropolis itself for views and the Parthenon. Bring water and sunscreen.",
            "meta": "Timed entry saves 1–2 hours"
          },
          {
            "slot": "afternoon",
            "label": "Plaka & markets",
            "detail": "Walk down from the Acropolis through narrow Plaka streets. Browse local shops, snap photos, and grab a coffee or snack at a café overlooking the neighborhood. Visit a local market (like Varvakios Agora) to see fresh produce, olives, and cheeses."
          },
          {
            "slot": "evening",
            "label": "Dinner & aperitivo",
            "detail": "Return to your hotel to freshen up. Enjoy aperitivo (ouzo or wine with meze) at a rooftop bar, then dinner at another local spot. Greek meze culture—small plates shared—is central to the meal."
          }
        ]
      }
    ],
    "hotel": {
      "name": "Hotel Grande Bretagne Athens",
      "addressLocal": "Leoforos Vasilissis Sofias 1, Athina 101 91",
      "roman": "Not required for Greek (Latin script)",
      "addressEn": "1 Vasilis Sofias Avenue, Athens 101 91",
      "neighborhood": "Kolonaki",
      "city": "Athens"
    },
    "phrases": [
      {
        "group": "Greetings",
        "items": [
          {
            "en": "Good morning",
            "local": "Kalimέra",
            "roman": "Kalimé­ra"
          },
          {
            "en": "Good evening",
            "local": "Kalispέra",
            "roman": "Kalispé­ra"
          },
          {
            "en": "Thank you",
            "local": "Efharistó",
            "roman": "Efharis­tó"
          }
        ]
      },
      {
        "group": "Taxi",
        "items": [
          {
            "en": "Please use the meter",
            "local": "Métron parakaló",
            "roman": "Métron parakaló"
          },
          {
            "en": "To this address, please",
            "local": "Se aftí tin diefthynsi, parakaló",
            "roman": "Se aftí tin dief­thyni, parakaló"
          },
          {
            "en": "How much to...?",
            "local": "Póso yia...?",
            "roman": "Póso yia...?"
          }
        ]
      },
      {
        "group": "Restaurant",
        "items": [
          {
            "en": "A table for two, please",
            "local": "Éna trapézi ya dio, parakaló",
            "roman": "É­na trapé­zi ya dio, parakaló"
          },
          {
            "en": "What do you recommend?",
            "local": "Ti mas sinistáte?",
            "roman": "Ti mas sinistá­te?"
          },
          {
            "en": "The check, please",
            "local": "To logariásmó, parakaló",
            "roman": "To logariás­mó, parakaló"
          }
        ]
      },
      {
        "group": "Payment",
        "items": [
          {
            "en": "Do you accept cards?",
            "local": "Déheste kártes?",
            "roman": "Déhes­te kár­tes?"
          },
          {
            "en": "Cash only",
            "local": "Móno metirá",
            "roman": "Móno meti­rá"
          },
          {
            "en": "Keep the change",
            "local": "Giláte ta résta",
            "roman": "Giláte ta rés­ta"
          }
        ]
      },
      {
        "group": "Emergency",
        "items": [
          {
            "en": "Help!",
            "local": "Voíthia!",
            "roman": "Voí­thia!"
          },
          {
            "en": "Police",
            "local": "Astynomía",
            "roman": "Astino­mía"
          },
          {
            "en": "Hospital",
            "local": "Nosokómio",
            "roman": "Nosokó­mio"
          }
        ]
      }
    ],
    "emergencyContacts": [
      {
        "label": "Police",
        "number": "100",
        "kind": "urgent"
      },
      {
        "label": "Medical",
        "number": "166",
        "kind": "urgent"
      },
      {
        "label": "U.S. citizens abroad · State Dept",
        "number": "+1 888 407 4747",
        "kind": "consular"
      }
    ],
    "predeparture": [
      {
        "group": "Documents",
        "items": [
          {
            "id": "passport",
            "label": "Passport valid for 6+ months beyond return"
          },
          {
            "id": "copies",
            "label": "Scan of passport and travel insurance",
            "sub": "Email or cloud storage backup"
          },
          {
            "id": "return-flight",
            "label": "Return flight confirmation"
          }
        ]
      },
      {
        "group": "Payments & Money",
        "items": [
          {
            "id": "bank-notify",
            "label": "Notify your bank of Greece travel dates"
          },
          {
            "id": "chip-card",
            "label": "Chip-enabled credit or debit card"
          },
          {
            "id": "currency-plan",
            "label": "Plan to withdraw €200–300 on arrival at ATM"
          }
        ]
      },
      {
        "group": "Travel & Logistics",
        "items": [
          {
            "id": "flights-booked",
            "label": "Round-trip flights to Athens booked and confirmed"
          },
          {
            "id": "ferries-booked",
            "label": "Inter-island ferry tickets booked (Athens–Santorini–Crete–Athens)"
          },
          {
            "id": "hotel-booked",
            "label": "Hotel reservations in Athens, Santorini, and Crete confirmed"
          }
        ]
      },
      {
        "group": "Apps & Offline Content",
        "items": [
          {
            "id": "maps-offline",
            "label": "Google Maps offline for Athens and your islands",
            "sub": "Download regions before you go"
          },
          {
            "id": "translation",
            "label": "Google Translate with offline Greek enabled"
          },
          {
            "id": "transport-app",
            "label": "KTEL Buses app installed for island schedules"
          }
        ]
      },
      {
        "group": "Save Before You Fly",
        "items": [
          {
            "id": "phrases-screenshot",
            "label": "Screenshot of key Greek phrases"
          },
          {
            "id": "hotel-info",
            "label": "Hotel name, address (in Greek), and phone number"
          },
          {
            "id": "emergency-numbers",
            "label": "Greece emergency numbers and your travel insurance contact"
          }
        ]
      }
    ]
  },
  "MX": {
    "country": {
      "code": "MX",
      "name": "Mexico",
      "capital": "Mexico City",
      "region": "Americas",
      "flag": "🇲🇽"
    },
    "heroCity": "Mexico City",
    "heroImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Sobrevuelos_CDMX_HJ2A4913_%2825514321687%29_%28cropped%29.jpg/1280px-Sobrevuelos_CDMX_HJ2A4913_%2825514321687%29_%28cropped%29.jpg",
    "arrivalAirport": {
      "code": "MEX",
      "city": "Mexico City"
    },
    "currency": {
      "code": "MXN",
      "symbol": "$",
      "usdRate": 17.324617
    },
    "languages": [
      "Spanish"
    ],
    "phraseLang": {
      "name": "Spanish",
      "bcp47": "es-ES",
      "hasRomanization": false
    },
    "homeCountry": "United States",
    "summary": "A 12-day culinary and cultural immersion through Mexico's heartland: Mexico City, Oaxaca, and back. Straightforward travel for US citizens (no visa required), with essential groundwork in payments and language now, and arrival logistics to finalize before flying.",
    "visaLabel": "Visa-free · 180 days",
    "categories": [
      {
        "id": "visa",
        "name": "Visa & documents",
        "icon": "IdentificationCard",
        "total": 3,
        "done": 0,
        "nextTaskId": "passport-check",
        "blurb": "US citizens enter Mexico visa-free for up to 180 days. Confirm your passport and FMM card on arrival."
      },
      {
        "id": "flights",
        "name": "Flights & stay",
        "icon": "AirplaneTilt",
        "total": 3,
        "done": 0,
        "nextTaskId": "book-flights",
        "blurb": "Book round-trip to Mexico City and reserve mid-range hotels in walkable neighborhoods. Dates are set; lock in soon to secure better rates."
      },
      {
        "id": "transport",
        "name": "Local transport",
        "icon": "TrainSimple",
        "total": 3,
        "done": 0,
        "nextTaskId": "download-transit-apps",
        "blurb": "Mexico City and Oaxaca are walkable for culture, but buses and taxis fill gaps. Download apps and learn key routes before arrival."
      },
      {
        "id": "money",
        "name": "Money & payments",
        "icon": "Wallet",
        "total": 3,
        "done": 0,
        "nextTaskId": "notify-bank",
        "blurb": "Pesos are standard in Mexico; cards work widely in cities but cash still rules in markets and small eateries. Set up mobile payments and carry cash strategically."
      },
      {
        "id": "connectivity",
        "name": "Connectivity",
        "icon": "GlobeHemisphereWest",
        "total": 3,
        "done": 0,
        "nextTaskId": "arrange-sim",
        "blurb": "Mexico has good mobile coverage. A local SIM or eSIM keeps you connected for navigation, translation, and food research."
      },
      {
        "id": "culture",
        "name": "Culture & etiquette",
        "icon": "HandHeart",
        "total": 3,
        "done": 0,
        "nextTaskId": "learn-key-phrases",
        "blurb": "Mexican hospitality is warm but formal in greeting. Learn key phrases and respect for food traditions will deepen your experience."
      },
      {
        "id": "landing",
        "name": "Landing Day Hub",
        "icon": "MapPin",
        "total": 0,
        "done": 0,
        "nextTaskId": "airport-transit",
        "blurb": "Essentials to review and open on arrival: airport transit, first meal, currency, and how to file your FMM immigration form."
      }
    ],
    "tasks": {
      "passport-check": {
        "id": "passport-check",
        "title": "Confirm your passport is valid for 6+ months",
        "category": "Visa & documents",
        "status": "ready",
        "duration": "5 min",
        "why": "US citizens need a valid passport to enter Mexico; having 6+ months validity avoids last-minute hassles.",
        "steps": [
          "Check the expiration date on your passport.",
          "If expiring within 6 months, renew now at your local passport office."
        ],
        "cta": "Verify passport",
        "needs": [
          "Your passport"
        ]
      },
      "register-trip": {
        "id": "register-trip",
        "title": "Register your trip with the US State Department",
        "category": "Visa & documents",
        "status": "upcoming",
        "duration": "10 min",
        "why": "STEP enables the embassy to contact you in a genuine emergency and keeps your family assured.",
        "steps": [
          "Go to step.state.gov and log in with your US government credentials.",
          "Add your Mexico itinerary, accommodation, and dates."
        ],
        "cta": "Register with STEP"
      },
      "fmm-form": {
        "id": "fmm-form",
        "title": "Understand Mexico's FMM immigration form",
        "category": "Visa & documents",
        "status": "upcoming",
        "duration": "10 min",
        "why": "You'll fill out the Tourist Permit on arrival; understanding it in advance prevents delays.",
        "steps": [
          "Read the INM (National Immigration Institute) FMM requirements online.",
          "Note that you'll declare intent to travel (tourism), get a stamp and form, and keep the form safe."
        ],
        "cta": "Review FMM process"
      },
      "book-flights": {
        "id": "book-flights",
        "title": "Book round-trip flights to Mexico City",
        "category": "Flights & stay",
        "status": "ready",
        "duration": "30–45 min",
        "why": "Dates are locked. Booking soon secures better fares and ensures mid-range hotel availability in prime neighborhoods.",
        "steps": [
          "Search Kayak, Google Flights, or your preferred agent for round-trip USA–MEX–USA within your window.",
          "Book the outbound flight and return flight, aiming for midday departures to maximize first and last days."
        ],
        "cta": "Book flights",
        "headsUp": "Early morning arrivals let you check in to hotels by afternoon; late returns cost an extra night in many cases."
      },
      "book-hotels": {
        "id": "book-hotels",
        "title": "Reserve mid-range hotels in Coyoacán and Oaxaca Centro",
        "category": "Flights & stay",
        "status": "upcoming",
        "duration": "20–30 min",
        "why": "Booking soon locks in availability in walkable, food-rich neighborhoods that suit your interests.",
        "steps": [
          "Search Booking.com or Airbnb for 7 nights in Mexico City (Coyoacán district) and 4 nights in Oaxaca Centro.",
          "Confirm the hotels have WiFi, good reviews for breakfast and location, and cancel-friendly policies."
        ],
        "cta": "Book hotels",
        "needs": [
          "Itinerary dates",
          "Hotel addresses for other tasks"
        ]
      },
      "arrange-travel": {
        "id": "arrange-travel",
        "title": "Arrange transportation between Mexico City and Oaxaca",
        "category": "Flights & stay",
        "status": "upcoming",
        "duration": "15 min",
        "why": "Booking your midway bus or flight in advance locks in a smooth mid-trip transition and avoids last-minute premium pricing.",
        "steps": [
          "Use ADO (Autobuses del Oriente) or Volaris (budget airline) websites to book Mexico City–Oaxaca transport.",
          "Book return on the same apps and confirm hotel details for accurate arrival planning."
        ],
        "cta": "Book intercity transport"
      },
      "download-transit-apps": {
        "id": "download-transit-apps",
        "title": "Download Mexico City Metro and Uber for navigation",
        "category": "Local transport",
        "status": "ready",
        "duration": "10 min",
        "why": "Mexico City's Metro is cheap, fast, and English-friendly; Uber handles trips outside the network and to Oaxaca airport.",
        "steps": [
          "Install Google Maps, Uber, and the Metro CDMX app (or use Google Maps for Metro routing).",
          "Bookmark the Metro system map and note your hotel's nearest station."
        ],
        "cta": "Download transit apps"
      },
      "learn-bus-culture": {
        "id": "learn-bus-culture",
        "title": "Understand intercity bus etiquette and boarding",
        "category": "Local transport",
        "status": "upcoming",
        "duration": "10 min",
        "why": "Intercity buses (ADO, Omnibus) are safe and reliable but have unique boarding and seat systems; a quick read prevents confusion.",
        "steps": [
          "Watch a 3–5 min YouTube clip on ADO bus boarding and seat assignment.",
          "Note that you'll collect a boarding pass at the terminal and seat number is assigned — keep both until you board."
        ],
        "cta": "Quick bus guide"
      },
      "research-taxis": {
        "id": "research-taxis",
        "title": "Learn Oaxaca taxi customs and safe practices",
        "category": "Local transport",
        "status": "upcoming",
        "duration": "10 min",
        "why": "Oaxaca's taxis are inexpensive but often negotiated; knowing the norms and safe practices smooths every ride.",
        "steps": [
          "Read a brief guide on hailing taxis vs. using apps like Uber in Oaxaca.",
          "Agree on fares before boarding or use Uber; stay in established taxi stands near your hotel."
        ],
        "cta": "Oaxaca taxi guide"
      },
      "notify-bank": {
        "id": "notify-bank",
        "title": "Notify your US bank of your Mexico travel dates",
        "category": "Money & payments",
        "status": "ready",
        "duration": "5–10 min",
        "why": "Banks often flag foreign transactions; a quick heads-up prevents card blocks when you need cash withdrawals.",
        "steps": [
          "Call your bank's fraud line or log into online banking to file a travel notice.",
          "Provide your dates and mention Mexico City and Oaxaca."
        ],
        "cta": "Alert your bank"
      },
      "exchange-cash": {
        "id": "exchange-cash",
        "title": "Get 500–1000 MXN in pesos before you depart",
        "category": "Money & payments",
        "status": "upcoming",
        "duration": "15–20 min",
        "why": "Airport exchanges are poor value; carrying starter pesos covers taxis, tips, and market snacks immediately upon arrival.",
        "steps": [
          "Visit your US bank or a currency exchange service 3–5 days before departure.",
          "Request 500–1000 MXN (roughly $30–60 USD) in small bills and coins."
        ],
        "cta": "Get starter pesos"
      },
      "withdraw-atm-plan": {
        "id": "withdraw-atm-plan",
        "title": "Plan ATM withdrawal strategy and research fees",
        "category": "Money & payments",
        "status": "upcoming",
        "duration": "15 min",
        "why": "ATM fees vary widely in Mexico; a quick research session saves 5–10% on every withdrawal.",
        "steps": [
          "Check your bank's international ATM partner network (Cirrus, Plus, BBVA alliance) and fee structures.",
          "Plan to withdraw larger sums (2000–3000 MXN per trip) to minimize trips and fees."
        ],
        "cta": "Optimize ATM strategy",
        "headsUp": "BBVA and Banamex ATMs often charge less for foreign cards; use them where available."
      },
      "arrange-sim": {
        "id": "arrange-sim",
        "title": "Get a Mexican SIM card or eSIM before arrival",
        "category": "Connectivity",
        "status": "ready",
        "duration": "10–15 min",
        "why": "Local SIM gives you affordable data for maps, translation, and restaurant research without roaming charges.",
        "steps": [
          "Order a prepaid eSIM (Airalo, Holafly) with 5–8 GB data for 12 days, or buy a local SIM at MEX airport.",
          "If choosing eSIM, install it before departure so your phone's data works immediately on landing."
        ],
        "cta": "Order eSIM or plan airport SIM",
        "needs": [
          "Your phone's eSIM capability (if choosing eSIM)"
        ]
      },
      "install-translation": {
        "id": "install-translation",
        "title": "Install Google Translate and offline Mexican Spanish pack",
        "category": "Connectivity",
        "status": "ready",
        "duration": "5 min",
        "why": "Offline translation bridges gaps at markets, street food vendors, and small restaurants without internet.",
        "steps": [
          "Install Google Translate and download the Spanish (Mexico) language pack for offline use.",
          "Test the camera translation feature on a sample menu or sign."
        ],
        "cta": "Set up offline translation"
      },
      "map-offline": {
        "id": "map-offline",
        "title": "Download offline maps of Mexico City and Oaxaca",
        "category": "Connectivity",
        "status": "upcoming",
        "duration": "10 min",
        "why": "Data can be spotty in markets or transit; offline maps keep you oriented without draining battery or data.",
        "steps": [
          "Open Google Maps, search for Mexico City, and download the region offline.",
          "Repeat for Oaxaca city center and nearby towns you plan to visit."
        ],
        "cta": "Download offline maps"
      },
      "learn-key-phrases": {
        "id": "learn-key-phrases",
        "title": "Learn food and restaurant Spanish phrases",
        "category": "Culture & etiquette",
        "status": "ready",
        "duration": "20–30 min",
        "why": "Speaking even basic Spanish in restaurants and markets earns warmth and better dining experiences.",
        "steps": [
          "Use Duolingo or a phrasebook to learn greetings, restaurant requests ('¿Qué recomiendas?'), and ingredient questions.",
          "Record yourself saying key phrases and listen back to nail pronunciation."
        ],
        "cta": "Learn food phrases"
      },
      "research-food": {
        "id": "research-food",
        "title": "Research regional specialties and street food etiquette",
        "category": "Culture & etiquette",
        "status": "upcoming",
        "duration": "30–45 min",
        "why": "Understanding Oaxacan mole, tlayudas, and street vendor customs deepens your food experience and shows respect.",
        "steps": [
          "Read articles or watch videos on Oaxacan cuisine, mole types, and tlayuda traditions.",
          "Note that street vendors are safe and respected; queuing and small denominations are standard."
        ],
        "cta": "Explore food culture"
      },
      "respect-customs": {
        "id": "respect-customs",
        "title": "Understand Mexican greeting customs and tipping norms",
        "category": "Culture & etiquette",
        "status": "upcoming",
        "duration": "10 min",
        "why": "Handshakes, eye contact, and 15–20% tipping are expected; small courtesies build rapport with locals.",
        "steps": [
          "Learn that a firm handshake and direct eye contact open every interaction positively.",
          "Note that tipping 15–20% in restaurants is standard; street vendors and market vendors rarely expect tips."
        ],
        "cta": "Cultural briefing"
      },
      "airport-transit": {
        "id": "airport-transit",
        "title": "Plan your airport arrival and first taxi or Uber ride",
        "category": "Landing",
        "status": "upcoming",
        "duration": "10 min",
        "why": "MEX is large; knowing the terminal layout and best exit saves 20+ minutes and frustration on arrival.",
        "steps": [
          "Check your airline's terminal at MEX airport and note Uber pickup zones (usually Levels 6 or 7) and taxi queues.",
          "Decide: Uber at fixed rate (~500 MXN / $30) to your Coyoacán hotel, or authorized taxi (~600 MXN / $35)."
        ],
        "cta": "Map airport route"
      },
      "fmm-landing": {
        "id": "fmm-landing",
        "title": "Complete your FMM tourist permit on arrival",
        "category": "Landing",
        "status": "upcoming",
        "duration": "15–20 min",
        "why": "The FMM form is stamped on entry and required for departure; losing it complicates leaving Mexico.",
        "steps": [
          "Fill out the FMM form handed to you during immigration (or printed in-flight on many airlines).",
          "Present it with your passport at the immigration desk; keep the stamped copy safe in your passport."
        ],
        "cta": "FMM checklist",
        "headsUp": "The return portion is critical — store it with your passport and never discard it until you leave Mexico."
      },
      "first-meal": {
        "id": "first-meal",
        "title": "Book or scout your first meal in Coyoacán",
        "category": "Landing",
        "status": "upcoming",
        "duration": "15 min",
        "why": "Arriving midday and eating in your neighborhood builds orientation and excitement immediately.",
        "steps": [
          "Search Google Maps or Eater Mexico for a mid-range lunch spot in Coyoacán within walking distance of your hotel.",
          "Make a reservation if it's a sit-down restaurant, or note the hours and address for walk-in."
        ],
        "cta": "Reserve first meal"
      }
    },
    "briefingBuckets": {
      "now": [
        "passport-check",
        "book-flights",
        "notify-bank",
        "download-transit-apps",
        "arrange-sim",
        "install-translation",
        "learn-key-phrases"
      ],
      "soon": [
        "register-trip",
        "fmm-form",
        "book-hotels",
        "arrange-travel",
        "learn-bus-culture",
        "research-taxis",
        "exchange-cash",
        "withdraw-atm-plan",
        "map-offline",
        "research-food",
        "respect-customs"
      ],
      "final": [
        "airport-transit",
        "fmm-landing",
        "first-meal"
      ]
    },
    "itinerary": {
      "routeTitle": "Mexico City → Oaxaca (12 days)",
      "dateRange": "Best Nov–Mar: warm days, lower rainfall; avoid July–Sept (humid) and Christmas–Jan (crowded).",
      "cities": [
        {
          "code": "MEX",
          "name": "Mexico City",
          "days": 7,
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Sobrevuelos_CDMX_HJ2A4913_%2825514321687%29_%28cropped%29.jpg/1280px-Sobrevuelos_CDMX_HJ2A4913_%2825514321687%29_%28cropped%29.jpg",
          "stayLabel": "Coyoacán: bohemian, walkable, food-rich"
        },
        {
          "code": "OAX",
          "name": "Oaxaca",
          "days": 4,
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Oaxaqa_%2841%29.jpg/1280px-Oaxaqa_%2841%29.jpg",
          "stayLabel": "Centro: markets, colonial charm, culinary hub"
        }
      ],
      "legs": [
        {
          "from": "USA",
          "to": "Mexico City",
          "mode": "plane",
          "duration": "3–4 hours (west coast); 4–5 hours (east coast)",
          "stops": "Nonstop or 1 connection",
          "status": "booked"
        },
        {
          "from": "Mexico City",
          "to": "Oaxaca",
          "mode": "bus",
          "duration": "5–6 hours direct",
          "stops": "ADO or Volaris nonstop",
          "status": "planned"
        },
        {
          "from": "Oaxaca",
          "to": "Mexico City",
          "mode": "bus",
          "duration": "5–6 hours direct",
          "stops": "ADO nonstop return",
          "status": "planned"
        },
        {
          "from": "Mexico City",
          "to": "USA",
          "mode": "plane",
          "duration": "3–5 hours",
          "stops": "Nonstop or 1 connection",
          "status": "booked"
        }
      ]
    },
    "itineraryDays": [
      {
        "dayNumber": 1,
        "city": "Mexico City",
        "date": "Arrival day",
        "kind": "arrival",
        "blocks": [
          {
            "slot": "morning",
            "label": "Depart USA",
            "detail": "Morning or early afternoon flight to Mexico City International (MEX). Confirm your airline terminal before departure."
          },
          {
            "slot": "afternoon",
            "label": "Land and navigate MEX",
            "detail": "Immigration (FMM form), passport control, baggage claim. Exit to Uber or authorized taxi (fixed 500–600 MXN) to your Coyoacán hotel. Check in and rest."
          },
          {
            "slot": "evening",
            "label": "First meal in Coyoacán",
            "detail": "Walk to a nearby restaurant in the neighborhood. Order carne asada, chiles rellenos, or a traditional mole. Eat early, sleep to reset."
          }
        ]
      },
      {
        "dayNumber": 2,
        "city": "Mexico City",
        "date": "Day 2 (culture & food)",
        "kind": "explore",
        "blocks": [
          {
            "slot": "morning",
            "label": "Coyoacán market and café",
            "detail": "Visit Mercado de Coyoacán for fresh juices, tamales, and quesadillas. Chat with vendors. Buy produce if your hotel has a kitchen."
          },
          {
            "slot": "afternoon",
            "label": "Frida Kahlo Museum or walk",
            "detail": "Tour the Casa Azul (book online) or stroll colonial plazas and colonial churches. Stop for coffee and pan dulce (sweet bread) in a local panadería."
          },
          {
            "slot": "evening",
            "label": "Dinner at a mezcal bar",
            "detail": "Try a traditional mezcal tasting paired with botanas (small plates). Ask locals where they eat — they know the best spots."
          }
        ]
      },
      {
        "dayNumber": 3,
        "city": "Mexico City",
        "date": "Day 3 (historic center)",
        "kind": "explore",
        "blocks": [
          {
            "slot": "morning",
            "label": "Metro to Zócalo",
            "detail": "Ride the Metro (Line 2) 3 stops to Zócalo. Walk the cathedral, Palacio Nacional murals, and central plaza. Learn the Metro's rhythm."
          },
          {
            "slot": "afternoon",
            "label": "Street food crawl",
            "detail": "Try tacos al pastor from a stand, elote (street corn), and fresh fruit. Lunch budget: 80–150 MXN ($5–9). Small denominations speed transactions."
          },
          {
            "slot": "evening",
            "label": "Rest and cook or casual dinner",
            "detail": "Pick up ingredients at a nearby tienda or eat at a taquería within walking distance. Early night to prep for Oaxaca travel tomorrow."
          }
        ]
      },
      {
        "dayNumber": 4,
        "city": "Oaxaca",
        "date": "Day 4 (market and mole)",
        "kind": "explore",
        "blocks": [
          {
            "slot": "morning",
            "label": "Depart Mexico City, arrive Oaxaca",
            "detail": "ADO bus from Mexico City terminal (5–6 hours). Arrive by early evening. Uber or taxi to your Oaxaca Centro hotel. Settle in."
          },
          {
            "slot": "afternoon",
            "label": "Oaxaca Centro walk and orientation",
            "detail": "Stroll the Zócalo, visit the cathedral, and note nearby mercados. Rest from travel. Meet locals in the plaza."
          },
          {
            "slot": "evening",
            "label": "Mole tasting dinner",
            "detail": "Eat mole rojo or negro at a family-run restaurant in Centro. Ask your server what type this is and how long it simmered. 150–250 MXN ($9–15)."
          }
        ]
      },
      {
        "dayNumber": 5,
        "city": "Oaxaca",
        "date": "Day 5 (mezcal and markets)",
        "kind": "explore",
        "blocks": [
          {
            "slot": "morning",
            "label": "Central Market tour",
            "detail": "Visit Mercado 20 de Noviembre for tlayudas, chapulines (grasshoppers), and local cheese. Taste and ask vendors about origins."
          },
          {
            "slot": "afternoon",
            "label": "Mezcal distillery or workshop",
            "detail": "Book a half-day mezcal tasting tour or visit a mezcalería in Centro. Learn distillation, taste varieties, and buy a bottle."
          },
          {
            "slot": "evening",
            "label": "Casual street dinner",
            "detail": "Eat tlayudas or tacos from a street stand near your hotel. Enjoy the evening energy in the Zócalo with your mezcal purchase."
          }
        ]
      },
      {
        "dayNumber": 6,
        "city": "Oaxaca",
        "date": "Day 6 (day trip or cooking)",
        "kind": "explore",
        "blocks": [
          {
            "slot": "morning",
            "label": "Cooking class or colonial town day trip",
            "detail": "Option 1: Take a half-day cooking class in Oaxaca (learn mole, tlayuda). Option 2: Taxi to Tlacolula or Etla for village markets and mezcal."
          },
          {
            "slot": "afternoon",
            "label": "Artisan shopping or relax",
            "detail": "Browse Textiles & crafts in Centro (black pottery, weaving). Sit in a café and journal or nap."
          },
          {
            "slot": "evening",
            "label": "Final Oaxaca meal",
            "detail": "Eat at a highly-rated restaurant you've noted (ask your hotel concierge). Savor and reflect on your food journey."
          }
        ]
      },
      {
        "dayNumber": 7,
        "city": "Oaxaca",
        "date": "Day 7 (depart for Mexico City)",
        "kind": "transit",
        "blocks": [
          {
            "slot": "morning",
            "label": "Final market visit or rest",
            "detail": "Early morning walk through the market, or stay at your hotel and pack. Checkout by noon."
          },
          {
            "slot": "afternoon",
            "label": "ADO bus back to Mexico City",
            "detail": "Depart Oaxaca 1–2 PM, arrive Mexico City evening. Check into a budget hotel near the airport or rest at your original Coyoacán hotel if dates allow."
          },
          {
            "slot": "evening",
            "label": "Light dinner and packing",
            "detail": "Eat a simple meal, pack carefully, and rest. Prepare for morning departure."
          }
        ]
      },
      {
        "dayNumber": 8,
        "city": "Mexico City",
        "date": "Departure day",
        "kind": "arrival",
        "blocks": [
          {
            "slot": "morning",
            "label": "Depart Mexico City",
            "detail": "Check out of hotel. Taxi or Uber to MEX airport (1–1.5 hours). Arrive 3 hours early for international flight."
          },
          {
            "slot": "afternoon",
            "label": "Immigration and security",
            "detail": "Present passport and FMM form to exit immigration. Security, customs, and boarding for USA flight."
          },
          {
            "slot": "evening",
            "label": "Flight home",
            "detail": "Depart Mexico City in afternoon or evening. Arrive USA evening or late night (depending on time zone and flight duration)."
          }
        ]
      }
    ],
    "hotel": {
      "name": "Hotel Boutique Coyoacán",
      "addressLocal": "Callejón del Sauce 52, Coyoacán",
      "addressEn": "52 Callejón del Sauce, Coyoacán, Mexico City",
      "neighborhood": "Coyoacán",
      "city": "Mexico City"
    },
    "phrases": [
      {
        "group": "Greetings",
        "items": [
          {
            "en": "Good morning. How are you?",
            "local": "Buenos días. ¿Cómo estás?"
          },
          {
            "en": "Thank you very much.",
            "local": "Muchas gracias."
          },
          {
            "en": "Excuse me, do you speak English?",
            "local": "Disculpe, ¿hablas inglés?"
          }
        ]
      },
      {
        "group": "Taxi",
        "items": [
          {
            "en": "Please take me to this address.",
            "local": "Por favor, llévame a esta dirección."
          },
          {
            "en": "How much to the Zócalo?",
            "local": "¿Cuánto cuesta ir al Zócalo?"
          },
          {
            "en": "Can you use the meter, please?",
            "local": "¿Puedes usar el taxímetro, por favor?"
          }
        ]
      },
      {
        "group": "Restaurant",
        "items": [
          {
            "en": "What do you recommend?",
            "local": "¿Qué me recomiendas?"
          },
          {
            "en": "I'd like the mole and a mezcal, please.",
            "local": "Quisiera el mole y un mezcal, por favor."
          },
          {
            "en": "The bill, please.",
            "local": "La cuenta, por favor."
          }
        ]
      },
      {
        "group": "Payment",
        "items": [
          {
            "en": "Do you take card?",
            "local": "¿Aceptas tarjeta?"
          },
          {
            "en": "I need an ATM.",
            "local": "Necesito un cajero automático."
          },
          {
            "en": "What's the total?",
            "local": "¿Cuál es el total?"
          }
        ]
      },
      {
        "group": "Emergency",
        "items": [
          {
            "en": "Help! I need a doctor.",
            "local": "¡Ayuda! Necesito un médico."
          },
          {
            "en": "Where is the nearest pharmacy?",
            "local": "¿Dónde está la farmacia más cercana?"
          },
          {
            "en": "I've lost my passport.",
            "local": "He perdido mi pasaporte."
          }
        ]
      }
    ],
    "emergencyContacts": [
      {
        "label": "Emergency",
        "number": "911",
        "kind": "urgent"
      },
      {
        "label": "U.S. citizens abroad · State Dept",
        "number": "+1 888 407 4747",
        "kind": "consular"
      }
    ],
    "predeparture": [
      {
        "group": "Passport & travel documents",
        "items": [
          {
            "id": "passport-valid",
            "label": "Passport valid for 6+ months",
            "sub": "Check expiration date. Renew if needed."
          },
          {
            "id": "copies-made",
            "label": "Make 2 photocopies of ID page",
            "sub": "Store one copy in luggage; email another to yourself."
          },
          {
            "id": "emergency-contacts",
            "label": "Write down emergency contacts",
            "sub": "US Embassy Mexico: +52 55 5080 2000 (for reference only; use local emergency services first)"
          }
        ]
      },
      {
        "group": "Money & payment",
        "items": [
          {
            "id": "bank-notified",
            "label": "Bank notified of travel dates",
            "sub": "Call or notify via app; provide Mexico City and Oaxaca."
          },
          {
            "id": "starter-pesos",
            "label": "500–1000 MXN in pocket before departure",
            "sub": "Covers first taxi, tips, and snacks without ATM rush."
          },
          {
            "id": "card-backed-up",
            "label": "Keep second card or backup payment method",
            "sub": "Cards can be lost or blocked; carry a fallback."
          }
        ]
      },
      {
        "group": "Connectivity & navigation",
        "items": [
          {
            "id": "sim-installed",
            "label": "eSIM installed or airport SIM plan ready",
            "sub": "Test WiFi calling in case data is slow initially."
          },
          {
            "id": "offline-maps-loaded",
            "label": "Google Maps downloaded for Mexico City & Oaxaca",
            "sub": "Saves battery and data when walking neighborhoods."
          },
          {
            "id": "translation-app-ready",
            "label": "Google Translate with offline Spanish pack",
            "sub": "Test camera translation on a menu before you land."
          }
        ]
      },
      {
        "group": "Lodging & transport",
        "items": [
          {
            "id": "flight-confirmations",
            "label": "Flights booked; confirmations in email & phone",
            "sub": "Take a screenshot of each confirmation number."
          },
          {
            "id": "hotel-confirmations",
            "label": "Hotels booked; confirmations saved in email",
            "sub": "Include address, check-in time, and cancellation policy."
          },
          {
            "id": "intercity-transport",
            "label": "Mexico City–Oaxaca bus booked (ADO)",
            "sub": "Confirmation email with seat number and boarding pass."
          }
        ]
      },
      {
        "group": "Final checklist",
        "items": [
          {
            "id": "luggage-packed",
            "label": "Pack light: 1 carry-on + 1 checked bag max",
            "sub": "Mexico is warm; bring sun protection, comfortable walking shoes, and dress for casual dining."
          },
          {
            "id": "medications-carried",
            "label": "Any personal medications in original bottles",
            "sub": "TSA allows 90-day supply; carry in personal bag."
          },
          {
            "id": "itinerary-printed",
            "label": "Print or screenshot hotel addresses & flight details",
            "sub": "Backup if your phone dies or WiFi fails."
          }
        ]
      }
    ]
  }
}
