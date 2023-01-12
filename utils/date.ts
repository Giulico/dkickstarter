import type { BigNumber } from 'ethers'

export function bigNumberToDate(
  bNDate: BigNumber & { hex: string },
  options?: { [key: string]: string }
): string {
  if (!bNDate) {
    return ''
  }

  const opt = options || {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  const timestamp = bNDate.hex ? parseInt(bNDate.hex) : 0
  const date = new Date(timestamp * 1000) // date in milliseconds

  return date.toLocaleDateString('en-US', opt)
}
