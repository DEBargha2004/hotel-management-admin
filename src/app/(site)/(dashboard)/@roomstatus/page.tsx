import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { roomStatus } from "@/constants/db";
import { cn } from "@/lib/utils";
import { RoomStatus } from "@/types/room-status";
import {
  Armchair,
  BedDouble,
  Sparkles,
  TicketCheck,
  Wrench,
} from "lucide-react";

async function get() {
  return new Promise((resolve) => setTimeout(resolve, 4000));
}

export default async function Page() {
  await get();
  return (
    <Card className="@6xl:col-span-5 @container">
      <CardHeader>
        <CardTitle className="font-medium text-lg">Room Status</CardTitle>
      </CardHeader>
      <CardContent className="grid @4xl:grid-cols-3 @3xl:grid-cols-3 @xl:grid-cols-2 gap-4">
        {Array.from({ length: 14 }).map((_, i) => {
          const index = i % roomStatus.length;
          const Icon = RoomIcon({
            status: roomStatus[index].value,
          });
          const variant = BadgeVariant({
            status: roomStatus[index].value,
          });
          return (
            <Card
              key={i}
              className="cursor-pointer transition-all hover:bg-muted"
            >
              <CardHeader className="flex-row justify-between items-center space-y-0">
                <CardTitle className="font-medium">#{i}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <Badge
                  className={cn(
                    "rounded-full",
                    `hover:${variant.bg}`,
                    variant.bg,
                    variant.text,
                  )}
                >
                  {roomStatus[index].label}
                </Badge>
              </CardContent>
            </Card>
          );
        })}
      </CardContent>
    </Card>
  );
}

function RoomIcon({ status }: { status: RoomStatus }) {
  switch (status) {
    case "occupied":
      return BedDouble;
    case "vacant":
      return BedDouble;
    case "reserved":
      return Armchair;
    case "booked":
      return TicketCheck;
    case "cleaning":
      return Sparkles;
    case "maintenance":
      return Wrench;
  }
}

function BadgeVariant({ status }: { status: RoomStatus }): {
  bg: string;
  text: string;
} {
  switch (status) {
    case "occupied":
      return {
        bg: "bg-blue-50 hover:bg-blue-100 dark:bg-blue-400/15 dark:hover:bg-blue-400/20",
        text: "text-blue-600",
      };
    case "vacant":
      return {
        bg: "bg-green-50 hover:bg-green-100 dark:bg-green-400/15 dark:hover:bg-green-400/20",
        text: "text-green-600",
      };
    case "reserved":
      return {
        bg: "bg-purple-50 hover:bg-purple-100 dark:bg-purple-400/15 dark:hover:bg-purple-400/20",
        text: "text-purple-600",
      };
    case "booked":
      return {
        bg: "bg-orange-50 hover:bg-orange-100 dark:bg-orange-400/15 dark:hover:bg-orange-400/20",
        text: "text-orange-600",
      };
    case "cleaning":
      return {
        bg: "bg-amber-50 hover:bg-amber-100 dark:bg-amber-400/15 dark:hover:bg-amber-400/20",
        text: "text-amber-600",
      };
    case "maintenance":
      return {
        bg: "bg-rose-50 hover:bg-rose-100 dark:bg-rose-400/15 dark:hover:bg-rose-400/20",
        text: "text-rose-600",
      };
  }
}
