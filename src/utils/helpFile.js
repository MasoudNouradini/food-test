export function formatToCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "EUR"
  }).format(value);
}
