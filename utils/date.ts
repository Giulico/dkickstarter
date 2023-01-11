export function bigNumberToDate(
  bNDate: { hex: string },
  options?: { [key: string]: string }
): string {
  const opt = options || {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  const timestamp = parseInt(bNDate.hex)
  const date = new Date(timestamp * 1000) // date in milliseconds

  return date.toLocaleDateString('en-US', opt)
}
