export const BASE_HOST: string =
  process.env.NEXT_PHASE === 'phase-production-build'
    ? 'https://dkickstarter.vercel.app'
    : 'http://localhost:3000'
