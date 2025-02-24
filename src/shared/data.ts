import { Icons } from "@/components/ui/icons";
import { LucideProps } from "lucide-react";
import { JSX } from "react";

export type FilterType = {
  id: string;
  label: string;
  value: string;
  icon?: (props: LucideProps) => JSX.Element;
};

export const eventFilters = [
  {
    id: `nS6bapRc-PP85up-xFojv`,
    label: "Bookings",
    link: "/timeline",
    basePath: "/",
  },
];

export const currencies = [
  {
    id: "inr",
    label: "Indian Rupee - INR",
    value: "INR",
  },
  {
    id: "usd",
    label: "US Dollar - USD",
    value: "USD",
  },
  {
    id: "eur",
    label: "Euro - EUR",
    value: "EUR",
  },
  {
    id: "gbp",
    label: "British Pound - GBP",
    value: "GBP",
  },
  {
    id: "jpy",
    label: "Japanese Yen - JPY",
    value: "JPY",
  },
];
