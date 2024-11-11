"use client";

import { Bar, BarChart, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Format, getDateOptions } from "@/functions/get-date-options";

type ChartData = { date: string; hotel: number; restaurent: number };

const chartConfig = {
  hotel: {
    label: "Hotel",
    color: "hsl(var(--chart-1))",
  },
  restaurent: {
    label: "Restaurant",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function RevenueSplitBarChart({
  chartData,
  format,
}: {
  chartData: ChartData[];
  format: Format;
}) {
  return (
    <ChartContainer config={chartConfig}>
      <BarChart accessibilityLayer data={chartData}>
        <XAxis
          dataKey="date"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => getDateOptions(value, format)}
        />
        <Bar
          dataKey="hotel"
          stackId="a"
          fill="var(--color-hotel)"
          radius={[0, 0, 4, 4]}
        />
        <Bar
          dataKey="restaurent"
          stackId="a"
          fill="var(--color-restaurent)"
          radius={[4, 4, 0, 0]}
        />
        <ChartTooltip
          content={
            <ChartTooltipContent
              hideLabel
              className="w-[180px]"
              formatter={(value, name, item, index) => (
                <>
                  <div
                    className="h-2.5 w-2.5 shrink-0 rounded-[2px] bg-[--color-bg]"
                    style={
                      {
                        "--color-bg": `var(--color-${name})`,
                      } as React.CSSProperties
                    }
                  />
                  {chartConfig[name as keyof typeof chartConfig]?.label || name}
                  <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                    <span className="font-normal text-muted-foreground">₹</span>
                    {value}
                  </div>
                  {/* Add this after the last item */}
                  {index === 1 && (
                    <div className="mt-1.5 flex basis-full items-center border-t pt-1.5 text-xs font-medium text-foreground">
                      Total
                      <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                        <span className="font-normal text-muted-foreground">
                          ₹
                        </span>
                        {item.payload.hotel + item.payload.restaurent}
                      </div>
                    </div>
                  )}
                </>
              )}
            />
          }
          cursor={false}
          defaultIndex={1}
        />
      </BarChart>
    </ChartContainer>
  );
}
