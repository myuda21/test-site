import type { Config } from "tailwindcss";

export default {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        mulish: ['var(--font-mulish)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
