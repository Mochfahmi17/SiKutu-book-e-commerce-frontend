export default function formatToMoney(money: number) {
  return Intl.NumberFormat("us-US", {
    style: "currency",
    currency: "USD",
  }).format(money);
}
