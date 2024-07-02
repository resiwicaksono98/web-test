export function formatRupiah(amount, withSymbol = true) {
  const formatted = amount.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  })

  return withSymbol ? formatted : formatted.replace('Rp', '').trim()
}
