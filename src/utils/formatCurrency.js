export const formatCurrency = (value) => {
  const formatted = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(value);

  return formatted.replace("₦", "₦ ");
};
