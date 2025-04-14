import type { Config } from "tailwindcss";

export default {
    darkMode: "class",
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        ekka: {
          primary: 'hsl(var(--ekka-primary))',
          secondary: 'hsl(var(--ekka-secondary))',
          accent: 'hsl(var(--ekka-accent))',
          dark: 'hsl(var(--ekka-dark))',
          light: 'hsl(var(--ekka-light))',
          success: 'hsl(var(--ekka-success))',
          warning: 'hsl(var(--ekka-warning))',
          info: 'hsl(var(--ekka-info))',
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      screens: {
        'xs': '480px',  // Extra small screens
        'sm': '640px',  // Small screens, mobile phones
        'md': '768px',  // Medium screens, tablets
        'lg': '1024px', // Large screens, laptops
        'xl': '1280px', // Extra large screens, desktops
        '2xl': '1536px', // 2XL screens, large desktops
      },
      container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      },
      fontSize: {
        'xxs': '0.625rem',   // Extra extra small
        'xs': '0.75rem',     // Extra small
        'sm': '0.875rem',    // Small
        'base': '1rem',      // Base
        'lg': '1.125rem',    // Large
        'xl': '1.25rem',     // Extra large
        '2xl': '1.5rem',     // 2XL
        '3xl': '1.875rem',   // 3XL
        '4xl': '2.25rem',    // 4XL
        '5xl': '3rem',       // 5XL
        '6xl': '3.75rem',    // 6XL
        '7xl': '4.5rem',     // 7XL
        '8xl': '6rem',       // 8XL
        '9xl': '8rem',       // 9XL
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
