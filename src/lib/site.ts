export const SITE = {
  name: "SMART CARE TV",
  tagline: "Simple reminder and notification software for TV screens.",
  supportEmail: "support@smartcaretv.net",
  privacyEmail: "support@smartcaretv.net",
  legalName: "Smart Care TV LLC",
  address: "1001 S MAIN ST STE 500, KALISPELL, MT 59901",
  jurisdiction: "the State of Montana, United States",
};

export type Duration = {
  id: string;
  label: string;
  months: number;
  note: string;
  prices: number[]; // index 0 => 1 device
};

export const DURATIONS: Duration[] = [
  { id: "1-month", label: "1 Month", months: 1, note: "Recurring subscription billed monthly", prices: [35, 55, 75, 100] },
  { id: "3-months", label: "3 Months", months: 3, note: "Recurring subscription billed every 3 months", prices: [100, 135, 150, 170] },
  { id: "6-months", label: "6 Months", months: 6, note: "Recurring subscription billed every 6 months", prices: [180, 210, 240, 260] },
  { id: "1-year", label: "1 Year", months: 12, note: "Recurring subscription billed annually", prices: [350, 500, 600, 700] },
];

export function formatBillingPeriod(months: number) {
  if (months === 1) return "monthly";
  if (months === 12) return "annually";
  return `every ${months} months`;
}

export function formatBillingPeriodLabel(months: number) {
  if (months === 1) return "Billed monthly";
  if (months === 12) return "Billed annually";
  return `Billed every ${months} months`;
}

export function getMonthlyPrice(price: number, months: number) {
  return Math.round((price / months) * 100) / 100;
}

export function findPlan(durationId?: string, devices?: number) {
  const duration = DURATIONS.find((d) => d.id === durationId);
  if (!duration || !devices || devices < 1 || devices > 4) return null;
  const price = duration.prices[devices - 1];
  if (price === undefined) return null;
  return {
    duration,
    devices,
    price,
    monthlyPrice: getMonthlyPrice(price, duration.months),
  };
}
