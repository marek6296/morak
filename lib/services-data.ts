import type { ComponentType, SVGProps } from "react";
import {
  SolarIcon,
  ClimateIcon,
  CameraIcon,
  ElectricIcon,
  CheckIcon,
  BatteryIcon,
  ChargerIcon,
  HouseIcon,
  ShieldIcon,
  BadgeIcon,
  ToolsIcon,
  ChatIcon,
  CertifiedIcon,
  SparkIcon
} from "@/components/icons";

type IconType = ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;

export type ServiceData = {
  slug: string;
  title: string;
  eyebrow: string;
  heroLead: string;
  heroImage: string;
  icon: IconType;
  highlights: { icon: IconType; label: string; value: string }[];
  features: { icon: IconType; title: string; text: string }[];
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
      "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=1600&q=80&auto=format&fit=crop",
    icon: SolarIcon,
    highlights: [
      { icon: SparkIcon, label: "Úspora ročne až", value: "1 800 €" },
      { icon: BadgeIcon, label: "Dotácia až", value: "7 500 €" },
      { icon: ShieldIcon, label: "Záruka panelov", value: "25 rokov" }
    ],
    features: [
      {
        icon: HouseIcon,
        title: "Strechy rodinných domov",
        text: "On-grid aj hybridné zostavy 4 – 12 kWp šité na typ strechy, sklon a orientáciu."
      },
      {
        icon: BatteryIcon,
        title: "Batériové úložiská",
        text: "LiFePO4 batérie BYD, Dyness, Huawei s možnosťou postupného rozširovania kapacity."
      },
      {
        icon: ChargerIcon,
        title: "Nabíjacie stanice pre EV",
        text: "Jednofázové aj trojfázové wallboxy s integráciou do fotovoltického systému."
      },
      {
        icon: CertifiedIcon,
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
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548337138-e87d889cc369?w=1200&q=80&auto=format&fit=crop"
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
      "https://images.unsplash.com/photo-1631545308456-1e3cc78eb37d?w=1600&q=80&auto=format&fit=crop",
    icon: ClimateIcon,
    highlights: [
      { icon: SparkIcon, label: "Úroveň hluku od", value: "19 dB" },
      { icon: BadgeIcon, label: "Energetická trieda", value: "A+++" },
      { icon: ShieldIcon, label: "Záruka výrobcu", value: "5 rokov" }
    ],
    features: [
      {
        icon: HouseIcon,
        title: "Nástenné a multi-split",
        text: "Jedna vonkajšia jednotka pre 2 – 5 vnútorných. Ideálne pre byty a rodinné domy."
      },
      {
        icon: ToolsIcon,
        title: "Kanálové klimatizácie",
        text: "Skryté do podhľadu pre kancelárie, reštaurácie a showroomy bez kompromisov v dizajne."
      },
      {
        icon: BatteryIcon,
        title: "Tepelné čerpadlá",
        text: "Vzduch-vzduch a vzduch-voda pre celoročné kúrenie a prípravu teplej vody."
      },
      {
        icon: CertifiedIcon,
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
      "https://images.unsplash.com/photo-1617850687395-620757feb1f3?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531973486364-5fa64260d75b?w=1200&q=80&auto=format&fit=crop"
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
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1600&q=80&auto=format&fit=crop",
    icon: CameraIcon,
    highlights: [
      { icon: SparkIcon, label: "Rozlíšenie až", value: "4K UHD" },
      { icon: ShieldIcon, label: "Záznam až", value: "90 dní" },
      { icon: BadgeIcon, label: "GDPR kompletne", value: "v cene" }
    ],
    features: [
      {
        icon: HouseIcon,
        title: "Domácnosti",
        text: "Diskrétne IP kamery s nočným videním, detekcia osoby a vozidla, upozornenia v aplikácii."
      },
      {
        icon: ToolsIcon,
        title: "Firmy a prevádzky",
        text: "Riešenia so stovkami kamier, NVR nahrávaním, integráciou s alarmom a prístupovými systémami."
      },
      {
        icon: ShieldIcon,
        title: "Alarmy a senzory",
        text: "Bezdrôtové alarmy s pripojením na PCO a senzory detekcie dymu, úniku vody a plynov."
      },
      {
        icon: CertifiedIcon,
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
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1200&q=80&auto=format&fit=crop"
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
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1600&q=80&auto=format&fit=crop",
    icon: ElectricIcon,
    highlights: [
      { icon: BadgeIcon, label: "Oprávnenie", value: "§22 / §23" },
      { icon: ShieldIcon, label: "Revízia", value: "v cene" },
      { icon: SparkIcon, label: "Nasadenie do", value: "7 dní" }
    ],
    features: [
      {
        icon: HouseIcon,
        title: "Novostavby a rekonštrukcie",
        text: "Kompletné rozvody na kľúč — od projektu po kolaudačnú revíziu."
      },
      {
        icon: ToolsIcon,
        title: "Rozvádzače a bleskozvody",
        text: "Montáž, dimenzovanie a pravidelné revízie podľa normy STN 33 2000."
      },
      {
        icon: ChargerIcon,
        title: "Wallboxy a smart home",
        text: "Nabíjacie stanice pre elektromobily a komplexné domové automatizácie."
      },
      {
        icon: CertifiedIcon,
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
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=1200&q=80&auto=format&fit=crop",
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
