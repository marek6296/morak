import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem"
      },
      screens: {
        "2xl": "1280px"
      }
    },
    extend: {
      opacity: {
        "8": "0.08",
        "12": "0.12",
        "15": "0.15",
        "18": "0.18",
        "85": "0.85"
      },
      colors: {
        brand: {
          DEFAULT: "#7FCC1F",
          50: "#F4FBEA",
          100: "#E6F5CC",
          200: "#CDEC9D",
          300: "#B0DF6A",
          400: "#95D43E",
          500: "#7FCC1F",
          600: "#65A615",
          700: "#4E7F14",
          800: "#3A5F11",
          900: "#27410C"
        },
        ink: {
          DEFAULT: "#0B1220",
          50: "#F7F8FA",
          100: "#EEF0F4",
          200: "#D7DCE5",
          300: "#A9B2C0",
          400: "#6C7689",
          500: "#3E4656",
          600: "#26304A",
          700: "#161E33",
          800: "#0E1528",
          900: "#0B1220"
        },
        cream: "#FAFAF7"
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      },
      fontSize: {
        "display-2xl": ["clamp(3rem, 7vw, 5.75rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "display-xl": ["clamp(2.5rem, 5vw, 4.25rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-lg": ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }]
      },
      backgroundImage: {
        "radial-fade": "radial-gradient(1200px 600px at 50% 0%, rgba(127,204,31,0.12), transparent 60%)",
        "grid-faint": "linear-gradient(to right, rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.05) 1px, transparent 1px)"
      },
      boxShadow: {
        soft: "0 1px 2px rgba(11,18,32,0.04), 0 8px 24px rgba(11,18,32,0.06)",
        lift: "0 10px 40px -10px rgba(11,18,32,0.18)",
        ring: "0 0 0 1px rgba(11,18,32,0.08)"
      },
      animation: {
        "fade-up": "fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
        "marquee": "marquee 40s linear infinite"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
