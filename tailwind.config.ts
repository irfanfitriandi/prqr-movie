import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: '#FF3B30', // Red accent
        secondary: '#1E1E1E', // Dark background
        tertiary: '#2A2A2A', // Lighter dark background
        textSecondary: '#D1D5DB', // Light gray text
        highlight: '#FFD700', // Yellow (used for ratings)
        muted: '#4B5563', // Gray for less emphasized text
      },
    },
  },
}
