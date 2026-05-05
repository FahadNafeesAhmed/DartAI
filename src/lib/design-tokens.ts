export const tokens = {
  colors: {
    dark: {
      background: '#000000',
      surface1: '#0A0A0A',
      surface2: '#111111',
      borderSubtle: '#1A1A1A',
      borderDefault: '#262626',
      borderEmphasis: '#404040',
      textPrimary: '#FAFAFA',
      textSecondary: '#A1A1AA',
      textTertiary: '#71717A',
    },
    light: {
      background: '#FFFFFF',
      surface1: '#FAFAFA',
      surface2: '#F4F4F5',
      borderSubtle: '#E4E4E7',
      borderDefault: '#D4D4D8',
      textPrimary: '#0A0A0A',
      textSecondary: '#52525B',
      textTertiary: '#71717A',
    },
    brand: {
      primary: '#4F46E5',
      accent: '#818CF8',
    },
    status: {
      success: '#10B981',
      warning: '#F59E0B',
      danger: '#EF4444',
    }
  },
  typography: {
    display: 'text-[clamp(2rem,3vw+1rem,3rem)] font-[600] tracking-[-0.03em]',
    h1: 'text-[24px] font-[600] tracking-[-0.02em]',
    h2: 'text-[18px] font-[600]',
    h3: 'text-[14px] font-[600]',
    body: 'text-[14px] leading-[1.5] font-[400]',
    small: 'text-[13px] leading-[1.4]',
    caption: 'text-[12px] uppercase tracking-[0.05em]',
    mono: 'font-mono'
  },
  radius: {
    default: 'rounded-md', // 6px
    card: 'rounded-lg', // 8px
    full: 'rounded-full',
  }
};
