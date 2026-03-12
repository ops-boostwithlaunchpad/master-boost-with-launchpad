/** Merge Tailwind classes safely */
export function cn(...inputs: string[]) {
  return inputs.filter(Boolean).join(' ')
}

/** Format currency values */
export function formatCurrency(value: number): string {
  if (value >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(1)}M`
  }
  if (value >= 1_000) {
    return `$${(value / 1_000).toFixed(0)}K`
  }
  return `$${value.toFixed(0)}`
}

/** Format number with commas */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat('en-US').format(value)
}

/** Format percentage */
export function formatPercent(value: number): string {
  return `${value.toFixed(0)}%`
}
