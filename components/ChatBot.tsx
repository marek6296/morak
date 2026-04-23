"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ── Types ──────────────────────────────────────────────────────────────────
type Message = { id: string; from: "bot" | "user"; text: string };

// ── Static data ────────────────────────────────────────────────────────────
const QUICK_REPLIES = [
  { id: "ceny",    label: "💰 Aké sú vaše ceny?" },
  { id: "postup",  label: "📋 Postup objednávky" },
  { id: "zaruky",  label: "🛡️ Záruky a certifikácie" },
  { id: "pobocky", label: "📍 Kde pôsobíte?" },
  { id: "ponuka",  label: "✉️ Chcem cenovú ponuku" },
  { id: "dotacia", label: "🌿 Dotácia 7 500 €" },
];

const ANSWERS: Record<string, string> = {
  ceny:
    "Orientačné ceny našich služieb:\n\n" +
    "🔆 Fotovoltika: od 4 500 € (6 kWp s montážou)\n" +
    "❄️ Klimatizácia: od 1 100 € (split jednotka)\n" +
    "📷 Kamerový systém: od 890 € (4 kamery)\n" +
    "⚡ Elektroinštalácia: podľa rozsahu projektu\n\n" +
    "Cenová ponuka na mieru je vždy zdarma a nezáväzná.",

  postup:
    "Náš postup je jednoduchý:\n\n" +
    "1️⃣ Bezplatná konzultácia a obhliadka\n" +
    "2️⃣ Cenová ponuka do 24 hodín\n" +
    "3️⃣ Zmluva s pevnou cenou bez prekvapení\n" +
    "4️⃣ Realizácia certifikovaným tímom\n" +
    "5️⃣ Odovzdanie s dokumentáciou a zárukou\n\n" +
    "Od prvého kontaktu po odovzdanie zvyčajne 2–4 týždne.",

  zaruky:
    "Naše záruky a certifikácie:\n\n" +
    "✅ 5-ročná záruka na montážne práce\n" +
    "✅ Výrobcovská záruka 10–25 rokov na komponenty\n" +
    "✅ Oprávnenia §22 a §23, certifikáty SOI\n" +
    "✅ Certifikát pre F-plyny a prácu vo výškach\n" +
    "✅ Kompletná dokumentácia a revízia v cene\n\n" +
    "Záručný aj pozáručný servis po celom Slovensku.",

  pobocky:
    "Pôsobíme na celom Slovensku.\n\n" +
    "📍 Sídlo: Prešov\n" +
    "🚗 Pokrývame: Košický, Prešovský kraj a okolie\n" +
    "📞 Servisná reakcia do 24 hodín\n\n" +
    "Obhliadku urobíme kdekoľvek — stačí nás kontaktovať.",

  ponuka:
    "Radi vám pripravíme ponuku zadarmo!\n\n" +
    "📞 +421 903 123 456\n" +
    "✉️ info@morak.sk\n" +
    "📋 Formulár v sekcii Kontakt na webe\n\n" +
    "Odpovedáme do 24 hodín — priamo od technika, nie call-centrum.",

  dotacia:
    "Dotácia Zelená domácnostiam III:\n\n" +
    "💰 Až 7 500 € na fotovoltickú elektrárňu\n" +
    "📊 Pokrýva 30–50 % celkovej ceny inštalácie\n" +
    "🏠 Platí pre rodinné domy aj bytovky\n" +
    "📋 Vybavenie dotácie zaistíme komplet za vás\n\n" +
    "Celú byrokraciu od registrácie po záverečné vyúčtovanie riešime my.",
};

const WELCOME =
  "Dobrý deň! Som MORAK Asistent 👋\n\n" +
  "Pomôžem vám s informáciami o fotovoltike, klimatizáciách, kamerových systémoch a elektroinštaláciách.\n\n" +
  "Vyberte tému alebo napíšte otázku:";

const GENERIC =
  "Ďakujeme za vašu otázku! Náš tím vám odpovie do 24 hodín.\n\n" +
  "📞 +421 903 123 456\n✉️ info@morak.sk";

// ── Helpers ────────────────────────────────────────────────────────────────
let _id = 0;
const uid = () => String(++_id);
const botMsg  = (text: string): Message => ({ id: uid(), from: "bot",  text });
const userMsg = (text: string): Message => ({ id: uid(), from: "user", text });

function playPing() {
  try {
    const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx  = new AC();
    const osc  = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = "sine";
    osc.frequency.value = 880;
    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.07, ctx.currentTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.35);
  } catch { /* ignore */ }
}

// ── Icons (inline SVG, no extra deps) ─────────────────────────────────────
const IconChat = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const IconClose = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const IconSend = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);
const BotAvatar = ({ size = 28 }: { size?: number }) => (
  <div
    className="flex-shrink-0 flex items-center justify-center rounded-full"
    style={{ width: size, height: size, background: "linear-gradient(135deg,#22c55e,#16a34a)" }}
  >
    <svg width={size * 0.52} height={size * 0.52} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  </div>
);

// ── Main component ─────────────────────────────────────────────────────────
export default function ChatBot() {
  const [open, setOpen]               = useState(false);
  const [messages, setMessages]       = useState<Message[]>([botMsg(WELCOME)]);
  const [typing, setTyping]           = useState(false);
  const [input, setInput]             = useState("");
  const [showReplies, setShowReplies] = useState(true);
  const [unread, setUnread]           = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef  = useRef<HTMLInputElement>(null);

  // Scroll to bottom on new content
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing, showReplies]);

  // Focus input & clear unread on open
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 280);
      setUnread(false);
    }
  }, [open]);

  const sendBotReply = useCallback((text: string) => {
    setTyping(true);
    setShowReplies(false);
    const delay = 1100 + Math.random() * 700;
    setTimeout(() => {
      setTyping(false);
      setMessages(prev => [...prev, botMsg(text)]);
      setShowReplies(true);
      playPing();
      if (!open) setUnread(true);
    }, delay);
  }, [open]);

  const handleQuickReply = (id: string, label: string) => {
    setMessages(prev => [...prev, userMsg(label)]);
    sendBotReply(ANSWERS[id]);
  };

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;
    setMessages(prev => [...prev, userMsg(text)]);
    setInput("");
    sendBotReply(GENERIC);
  };

  // ── Render ───────────────────────────────────────────────────────────────
  return (
    <>
      {/* ── Chat window ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1,    y: 0  }}
            exit=  {{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "bottom right" }}
            /* mobile: full screen | sm+: floating window */
            className="fixed z-[70] flex flex-col overflow-hidden bg-white shadow-2xl
                       inset-0 rounded-none
                       sm:inset-auto sm:bottom-[88px] sm:right-5 sm:w-[370px] sm:h-[580px] sm:rounded-3xl"
          >
            {/* Header */}
            <div
              className="flex flex-shrink-0 items-center justify-between px-5 py-4"
              style={{ background: "linear-gradient(135deg,#0B1220 0%,#1a2740 100%)" }}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <BotAvatar size={40} />
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 bg-green-400"
                        style={{ borderColor: "#0B1220" }} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">MORAK Asistent</p>
                  <p className="text-[11px] text-green-400">Online · odpovie do 24h</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:bg-white/10"
              >
                <IconClose size={14} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto space-y-3 px-4 py-4"
                 style={{ background: "#f5f7fa" }}>
              {messages.map(msg => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex items-end gap-2 ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.from === "bot" && <BotAvatar size={28} />}
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-[13.5px] leading-relaxed whitespace-pre-line ${
                      msg.from === "user"
                        ? "rounded-br-sm text-white"
                        : "rounded-bl-sm text-gray-900 shadow-sm"
                    }`}
                    style={
                      msg.from === "user"
                        ? { background: "linear-gradient(135deg,#22c55e,#16a34a)" }
                        : { background: "#ffffff", border: "1px solid #e5e7eb" }
                    }
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              <AnimatePresence>
                {typing && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-end gap-2"
                  >
                    <BotAvatar size={28} />
                    <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-sm border border-gray-200 bg-white px-4 py-3 shadow-sm">
                      {[0, 1, 2].map(i => (
                        <motion.span
                          key={i}
                          className="block h-2 w-2 rounded-full bg-gray-400"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.55, repeat: Infinity, delay: i * 0.14 }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Quick-reply buttons */}
              <AnimatePresence>
                {showReplies && !typing && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-wrap gap-2 pt-1"
                  >
                    {QUICK_REPLIES.map(qr => (
                      <button
                        key={qr.id}
                        onClick={() => handleQuickReply(qr.id, qr.label)}
                        className="rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-[12px] font-medium text-green-800 transition-all hover:border-green-400 hover:bg-green-100 active:scale-95"
                      >
                        {qr.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={bottomRef} />
            </div>

            {/* Input bar */}
            <div className="flex-shrink-0 border-t border-gray-100 bg-white px-4 py-3">
              <div className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-2.5">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && handleSend()}
                  placeholder="Napíšte otázku…"
                  className="flex-1 bg-transparent text-[13.5px] text-gray-900 placeholder-gray-400 outline-none"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all disabled:opacity-30"
                  style={{ background: "linear-gradient(135deg,#22c55e,#16a34a)" }}
                >
                  <IconSend />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating trigger button ── */}
      <motion.button
        onClick={() => setOpen(v => !v)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        aria-label={open ? "Zavrieť chat" : "Otvoriť chat"}
        className="fixed bottom-5 right-5 z-[65] flex h-14 w-14 items-center justify-center rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.28)]"
        style={{ background: "linear-gradient(135deg,#22c55e 0%,#16a34a 100%)" }}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0,   opacity: 1 }}
              exit=   {{ rotate:  90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <IconClose size={20} />
            </motion.div>
          ) : (
            <motion.div key="chat"
              initial={{ rotate:  90, opacity: 0 }}
              animate={{ rotate:   0, opacity: 1 }}
              exit=   {{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <IconChat />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Unread badge */}
        <AnimatePresence>
          {unread && !open && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white"
            >
              1
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
