"use client";

import { useRef } from "react";
import { Input } from "../ui/input";

export default function CalendarDateSelector({
  value,
  onChange,
  open,
  onOpenChange,
}: {
  value?: string;
  onChange?: (value: string) => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <Input
      type="date"
      ref={ref}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
    />
  );
}
