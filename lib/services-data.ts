export type IconKey =
  | "solar"
  | "climate"
  | "camera"
  | "electric"
  | "check"
  | "battery"
  | "charger"
  | "house"
  | "shield"
  | "badge"
  | "tools"
  | "chat"
  | "certified"
  | "spark";

export type ServiceData = {
  slug: string;
  title: string;
  eyebrow: string;
  heroLead: string;
  heroImage: string;
  icon: IconKey;
  hookTitle: string;
  hookSubtitle: string;
  highlights: { icon: IconKey; label: string; value: string }[];
  features: { icon: IconKey; title: string; text: string }[];
  includes: string[];
  gallery: string[];
  faq: { q: string; a: string }[];
};

export const SERVICE_DATA: Record<string, ServiceData> = {
  fotovoltika: {
    slug: "fotovoltika",
    title: "Fotovoltické elektrárne",
    eyebrow: "Služba 01 — Fotovoltika",
    heroLead:
      "Navrhujeme a montujeme fotovoltické elektrárne, ktoré pokryjú reálnu spotrebu vašej domácnosti alebo firmy. Všetko s dotáciou Zelená domácnostiam III a plnou dokumentáciou.",
    heroImage:
      "https://images.unsplash.com/photo-1655300256335-beef51a914fe?w=1600&q=80&auto=format&fit=crop",
    icon: "solar",
    hookTitle: "Dotácia až 7 500 €",
    hookSubtitle: "Zelená domácnostiam III + ročná úspora až 1 800 €",
    highlights: [
      { icon: "spark", label: "Úspora ročne až", value: "1 800 €" },
      { icon: "badge", label: "Dotácia až", value: "7 500 €" },
      { icon: "shield", label: "Záruka panelov", value: "25 rokov" }
    ],
    features: [
      {
        icon: "house",
        title: "Strechy rodinných domov",
        text: "On-grid aj hybridné zostavy 4 – 12 kWp šité na typ strechy, sklon a orientáciu."
      },
      {
        icon: "battery",
        title: "Batériové úložiská",
        text: "LiFePO4 batérie BYD, Dyness, Huawei s možnosťou postupného rozširovania kapacity."
      },
      {
        icon: "charger",
        title: "Nabíjacie stanice pre EV",
        text: "Jednofázové aj trojfázové wallboxy s integráciou do fotovoltického systému."
      },
      {
        icon: "certified",
        title: "Dotácie na kľúč",
        text: "Vybavíme registráciu, dokumentáciu, kontrolu SIEA aj záverečné vyúčtovanie."
      }
    ],
    includes: [
      "Osobná obhliadka a 3D návrh rozloženia panelov",
      "Panely Tier-1 triedy (Jinko, JA Solar, AIKO)",
      "Meniče GoodWe, Fronius, Huawei alebo SMA",
      "Montáž, pripojenie do distribučnej sústavy, revízia",
      "Konfigurácia aplikácie pre sledovanie výroby",
      "Záručný aj pozáručný servis"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583345237708-add35a664d77?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/flagged/photo-1566838616631-f2618f74a6a2?w=1200&q=80&auto=format&fit=crop"
    ],
    faq: [
      {
        q: "Koľko ušetrím s fotovoltickou elektrárňou ročne?",
        a: "Pri typickej 6 kWp zostave a priemernej spotrebe rodinného domu sa úspora pohybuje medzi 900 a 1 500 € ročne. S batériou a vyššou vlastnou spotrebou sa môže priblížiť až k 1 800 €."
      },
      {
        q: "Aká je návratnosť investície?",
        a: "S dotáciou Zelená domácnostiam III a aktuálnymi cenami energií sa návratnosť pohybuje medzi 4 a 6 rokmi v závislosti od profilu spotreby a toho, či sa rozhodnete pre batériu."
      },
      {
        q: "Je moja strecha vhodná pre fotovoltiku?",
        a: "Vhodné sú orientácie juh, juhovýchod aj juhozápad. Rovnako však vieme navrhnúť riešenie pre východo-západné usporiadanie. Každý objekt posúdime individuálne po obhliadke."
      }
    ]
  },

  klimatizacie: {
    slug: "klimatizacie",
    title: "Klimatizácie a tepelné čerpadlá",
    eyebrow: "Služba 02 — Klimatizácie",
    heroLead:
      "Ticho, efektívne, s certifikovanou montážou. Inštalujeme klimatizácie a tepelné čerpadlá, ktoré chladia v lete, kúria v zime a šetria náklady po celý rok.",
    heroImage:
      "https://images.unsplash.com/photo-1766788466565-768128d89ce4?w=1600&q=80&auto=format&fit=crop",
    icon: "climate",
    hookTitle: "Klimatizácia na kľúč od 1 100 €",
    hookSubtitle: "Tichá A+++ jednotka s montážou a zárukou 5 rokov",
    highlights: [
      { icon: "spark", label: "Úroveň hluku od", value: "19 dB" },
      { icon: "badge", label: "Energetická trieda", value: "A+++" },
      { icon: "shield", label: "Záruka výrobcu", value: "5 rokov" }
    ],
    features: [
      {
        icon: "house",
        title: "Nástenné a multi-split",
        text: "Jedna vonkajšia jednotka pre 2 – 5 vnútorných. Ideálne pre byty a rodinné domy."
      },
      {
        icon: "tools",
        title: "Kanálové klimatizácie",
        text: "Skryté do podhľadu pre kancelárie, reštaurácie a showroomy bez kompromisov v dizajne."
      },
      {
        icon: "battery",
        title: "Tepelné čerpadlá",
        text: "Vzduch-vzduch a vzduch-voda pre celoročné kúrenie a prípravu teplej vody."
      },
      {
        icon: "certified",
        title: "Servis s F-plynmi",
        text: "Pravidelné prehliadky a záznamy podľa vyhlášky pre zariadenia s chladivami."
      }
    ],
    includes: [
      "Výpočet tepelných strát a dimenzovanie výkonu",
      "Značky Daikin, Mitsubishi, LG, Samsung, Gree",
      "Profesionálna montáž vrátane prác vo výškach",
      "Zatrubkovanie s medenými rozvodmi a izoláciou",
      "Revízia elektrického pripojenia a spustenie",
      "Zazmluvnený ročný servis s čistením"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1766788466565-768128d89ce4?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1695668544997-0d342ec08036?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1642749776312-aa42ce20c9f5?w=1200&q=80&auto=format&fit=crop"
    ],
    faq: [
      {
        q: "Koľko stojí bežná klimatizácia do bytu na kľúč?",
        a: "Kompletná nástenná split jednotka značkovej triedy pre jednu miestnosť vychádza od 1 100 € vrátane montáže, materiálu a spustenia. Konkrétna cena závisí od zložitosti inštalácie."
      },
      {
        q: "Je klimatizácia vhodná aj na kúrenie?",
        a: "Áno, moderné jednotky inverter triedy A+++ kúria spoľahlivo a ekonomicky až do vonkajšej teploty −20 °C. Pri tepelnom čerpadle vzduch-vzduch sa náklady na vykurovanie znižujú v priemere o 40 – 55 %."
      },
      {
        q: "Ako často treba klimatizáciu servisovať?",
        a: "Odporúčame aspoň jednu prehliadku ročne — čistenie výparníkov, kontrolu tesnosti chladiaceho okruhu a dezinfekciu. Pri firemných inštaláciách je to zákonná povinnosť."
      }
    ]
  },

  "kamerove-systemy": {
    slug: "kamerove-systemy",
    title: "Kamerové a zabezpečovacie systémy",
    eyebrow: "Služba 03 — Kamerové systémy",
    heroLead:
      "4K IP kamery, nočné videnie, inteligentná detekcia pohybu a vzdialený prístup z mobilu. Navrhujeme systémy, ktoré skutočne fungujú — nielen svietia ako atrapa.",
    heroImage:
      "https://images.unsplash.com/photo-1543963233-c815c054b782?w=1600&q=80&auto=format&fit=crop",
    icon: "camera",
    hookTitle: "4K kamerový systém od 890 €",
    hookSubtitle: "Vzdialený prístup z mobilu a GDPR dokumentácia v cene",
    highlights: [
      { icon: "spark", label: "Rozlíšenie až", value: "4K UHD" },
      { icon: "shield", label: "Záznam až", value: "90 dní" },
      { icon: "badge", label: "GDPR kompletne", value: "v cene" }
    ],
    features: [
      {
        icon: "house",
        title: "Domácnosti",
        text: "Diskrétne IP kamery s nočným videním, detekcia osoby a vozidla, upozornenia v aplikácii."
      },
      {
        icon: "tools",
        title: "Firmy a prevádzky",
        text: "Riešenia so stovkami kamier, NVR nahrávaním, integráciou s alarmom a prístupovými systémami."
      },
      {
        icon: "shield",
        title: "Alarmy a senzory",
        text: "Bezdrôtové alarmy s pripojením na PCO a senzory detekcie dymu, úniku vody a plynov."
      },
      {
        icon: "certified",
        title: "GDPR dokumentácia",
        text: "Informačné tabule, záznamový list a DPIA posúdenie pre firemné prevádzky."
      }
    ],
    includes: [
      "Obhliadka s návrhom umiestnenia kamier",
      "Značky Hikvision, Dahua, Ubiquiti, Axis",
      "Prípravu kabeláže UTP Cat6 / optika",
      "NVR rekordér s diskom pre dlhodobý záznam",
      "Konfigurácia vzdialeného prístupu cez aplikáciu",
      "Školenie obsluhy a záručný servis"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1543963233-c815c054b782?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1640826028382-e209fad88fa7?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1739203469638-d6f54c24a5da?w=1200&q=80&auto=format&fit=crop"
    ],
    faq: [
      {
        q: "Koľko kamier zvyčajne potrebuje rodinný dom?",
        a: "Pre rodinný dom sa typicky inštalujú 4 až 8 kamier — pokryjú vstupné dvere, garáž, záhradu a zadné strany objektu. Finálny počet závisí od rozlohy pozemku a zorného uhla kamier."
      },
      {
        q: "Môžem sledovať kamery z mobilu, keď som v zahraničí?",
        a: "Áno, všetky naše inštalácie obsahujú vzdialený prístup cez šifrované cloudové spojenie. Live prenos aj prehliadanie archívu zvládnete odkiaľkoľvek na svete."
      },
      {
        q: "Ako dlho sa ukladá záznam?",
        a: "V závislosti od kapacity disku a počtu kamier typicky 14 až 90 dní. Pre pamäťovo úsporný záznam využívame H.265+ kompresiu a smart detekciu, ktorá nahráva len pri udalosti."
      }
    ]
  },

  elektroinstalacie: {
    slug: "elektroinstalacie",
    title: "Elektroinštalácie a revízie",
    eyebrow: "Služba 04 — Elektroinštalácie",
    heroLead:
      "Od prvého káblového vývodu po odovzdanie s úradnou revíziou. Realizujeme silnoprúdové aj slaboprúdové rozvody pre novostavby, rekonštrukcie a priemyselné objekty.",
    heroImage:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1600&q=80&auto=format&fit=crop",
    icon: "electric",
    hookTitle: "Elektroinštalácia s úradnou revíziou v cene",
    hookSubtitle: "Nasadenie do 7 dní • oprávnenie §22 / §23",
    highlights: [
      { icon: "badge", label: "Oprávnenie", value: "§22 / §23" },
      { icon: "shield", label: "Revízia", value: "v cene" },
      { icon: "spark", label: "Nasadenie do", value: "7 dní" }
    ],
    features: [
      {
        icon: "house",
        title: "Novostavby a rekonštrukcie",
        text: "Kompletné rozvody na kľúč — od projektu po kolaudačnú revíziu."
      },
      {
        icon: "tools",
        title: "Rozvádzače a bleskozvody",
        text: "Montáž, dimenzovanie a pravidelné revízie podľa normy STN 33 2000."
      },
      {
        icon: "charger",
        title: "Wallboxy a smart home",
        text: "Nabíjacie stanice pre elektromobily a komplexné domové automatizácie."
      },
      {
        icon: "certified",
        title: "Úradné revízie",
        text: "Odborné prehliadky a skúšky so zápisom do úradnej revíznej správy."
      }
    ],
    includes: [
      "Podklad pre stavebné povolenie a projektovú dokumentáciu",
      "Silnoprúdové a slaboprúdové rozvody",
      "Rozvádzače, stúpacie vedenia, bleskozvody",
      "Štruktúrovaná kabeláž UTP a optické siete",
      "Inteligentné riadenie Loxone, Niko, KNX",
      "Revízna správa s platnosťou po celom Slovensku"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1751486289947-4f5f5961b3aa?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1754620906571-9ba64bd3ffb4?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80&auto=format&fit=crop"
    ],
    faq: [
      {
        q: "Potrebujem revíziu aj pri menšej rekonštrukcii?",
        a: "Áno, pri každom zásahu do elektroinštalácie odporúčame uskutočniť odbornú prehliadku. Pre novostavby, prestavby alebo zmenu istenia je revízia povinná a slúži aj pre poisťovne."
      },
      {
        q: "Vediete projekt od začiatku do konca?",
        a: "Áno. Poskytujeme kompletný servis od predbežného návrhu cez realizačný projekt, samotnú realizáciu, vyjadrenie distribučnej spoločnosti až po záverečnú revíziu."
      },
      {
        q: "Vykonávate aj 24-hodinovú pohotovosť?",
        a: "Áno, pre firemných klientov prevádzkujeme pohotovosť 24/7. Pre rezidenčných klientov zabezpečujeme servisný výjazd do 24 hodín od nahlásenia."
      }
    ]
  }
};
