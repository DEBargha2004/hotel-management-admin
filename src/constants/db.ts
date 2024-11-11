export const sexList = [
  { id: 1, value: 1, label: "Male" },
  { id: 2, value: 2, label: "Female" },
  { id: 3, value: 3, label: "Other" },
] as const;

export const foodTypes = [
  {
    id: 1,
    value: 1,
    label: "Veg",
  },
  {
    id: 2,
    value: 2,
    label: "Non-Veg",
  },
] as const;

export const mediaTypes = [
  {
    id: 1,
    value: 1,
    label: "Image",
  },
  {
    id: 2,
    value: 2,
    label: "Video",
  },
] as const;

export const paymentMethods = [
  {
    id: 1,
    value: 1,
    label: "Cash",
  },
  {
    id: 2,
    value: 2,
    label: "Card",
  },
  {
    id: 3,
    value: 3,
    label: "UPI",
  },
] as const;

export const notificationStatus = [
  {
    label: "Info",
    value: "info",
  },
  {
    label: "Completed",
    value: "completed",
  },
  {
    label: "Warning",
    value: "warning",
  },
  {
    label: "Incomplete",
    value: "incomplete",
  },
] as const;

export const roomStatus = [
  {
    label: "Vacant",
    value: "vacant",
  },
  {
    label: "Occupied",
    value: "occupied",
  },
  {
    label: "Reserved",
    value: "reserved",
  },
  {
    label: "Booked",
    value: "booked",
  },
  {
    label: "Cleaning",
    value: "cleaning",
  },
  {
    label: "Maintenance",
    value: "maintenance",
  },
] as const;
