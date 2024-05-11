import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        'primary-green': 'hsl(75, 94%, 57%)',
        'white': 'hsl(0, 0%, 100%)',
        'grey': 'hsl(0, 0%, 20%)',
        'dark-grey': 'hsl(0, 0%, 12%)',
        'off-black': 'hsl(0, 0%, 8%)',
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
