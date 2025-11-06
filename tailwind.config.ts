import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        display: ["var(--font-display)", "Inter", "sans-serif"]
      },
      backgroundImage: {
        "grid-glow": "radial-gradient(circle at center, rgba(80,156,255,0.12), transparent 65%)",
        "noise-texture": "url('/noise.png')"
      },
      colors: {
        brand: {
          50: "#EBF5FF",
          100: "#D1E8FF",
          200: "#A2D1FF",
          300: "#73BAFF",
          400: "#4494FF",
          500: "#1C6CFF",
          600: "#144FCE",
          700: "#0D399C",
          800: "#07236A",
          900: "#021138"
        }
      },
      boxShadow: {
        primary: "0 20px 45px -20px rgba(26, 107, 255, 0.55)",
        neon: "0 0 40px rgba(28, 108, 255, 0.52)",
        surface: "0 25px 58px -24px rgba(8, 12, 32, 0.55)"
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.95" }
        },
        "float-y": {
          "0%, 100%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(10px)" }
        },
        "tilt-glow": {
          "0%, 100%": { transform: "rotate(-1.5deg)" },
          "50%": { transform: "rotate(1.5deg)" }
        }
      },
      animation: {
        "pulse-slow": "pulse-slow 8s ease-in-out infinite",
        "float-y": "float-y 12s ease-in-out infinite",
        "tilt-glow": "tilt-glow 16s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
