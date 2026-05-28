import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        twitch: {
          DEFAULT: "#9146FF",
          light: "#A970FF",
          dark: "#6441A4",
        },
        pink: {
          mango: "#FFB5C5",
          hot: "#FF8FB3",
          deep: "#FF6FA0",
        },
        peach: {
          mango: "#FFD3A5",
          deep: "#FFB877",
          warm: "#FF9F66",
        },
        lavender: {
          mango: "#C8A2FF",
        },
        bg: {
          deep: "#2A1530",
          card: "#3A1F40",
          paper: "#4A2A52",
        },
        accent: {
          cyan: "#66F7FF",
          gold: "#FFE27A",
        },
        cream: {
          50: "#FFF8EC",
          100: "#FFE8C8",
          200: "#FFD9A8",
        },
        paper: {
          DEFAULT: "#FFF6E5",
          pink: "#FFE3EE",
          mint: "#D9F7EC",
          lilac: "#EFE3FF",
          peach: "#FFE0CC",
          sky: "#D8F0FF",
        },
        labubu: {
          peach: "#FFD3B0",
          pink: "#FFC2DD",
          mint: "#B8F2D8",
          lilac: "#D4BAFF",
          cream: "#FFE9C9",
          coral: "#FFB5B5",
        },
      },
      fontFamily: {
        display: ["var(--font-fredoka)", "system-ui", "sans-serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        hand: ["var(--font-caveat)", "cursive"],
        serif: ["var(--font-gloock)", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-mango": "linear-gradient(135deg, #FFB5C5 0%, #FFD3A5 50%, #FFE9C9 100%)",
        "gradient-twitch": "linear-gradient(135deg, #9146FF 0%, #C8A2FF 100%)",
        "gradient-pink-peach": "linear-gradient(135deg, #FF8FB3 0%, #FFB877 100%)",
        "gradient-lavender-purple": "linear-gradient(135deg, #C8A2FF 0%, #9146FF 100%)",
        "gradient-cyber": "linear-gradient(135deg, #FFB5C5 0%, #C8A2FF 50%, #FFB877 100%)",
      },
      boxShadow: {
        "glow-purple": "0 0 40px rgba(145, 70, 255, 0.4)",
        "glow-pink": "0 0 40px rgba(255, 140, 203, 0.4)",
        "glow-peach": "0 0 40px rgba(255, 179, 71, 0.4)",
        "glow-cyan": "0 0 40px rgba(102, 247, 255, 0.4)",
        "glow-soft": "0 0 60px rgba(200, 162, 255, 0.3)",
        "inner-glow": "inset 0 0 30px rgba(145, 70, 255, 0.15)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "bounce-slow": "bounce 3s ease-in-out infinite",
        "wiggle": "wiggle 2s ease-in-out infinite",
        "blob": "blob 7s infinite",
        "sparkle": "sparkle 1.5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1", filter: "brightness(1)" },
          "50%": { opacity: "0.85", filter: "brightness(1.2)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
        sparkle: {
          "0%, 100%": { opacity: "0", transform: "scale(0)" },
          "50%": { opacity: "1", transform: "scale(1)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
