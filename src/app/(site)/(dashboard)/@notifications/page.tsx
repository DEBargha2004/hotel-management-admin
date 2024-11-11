import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { notificationStatus } from "@/constants/db";
import { cn } from "@/lib/utils";
import { NotificationStatus } from "@/types/notification-status";
import {
  Bell,
  CircleAlert,
  CircleCheckBig,
  Siren,
  TriangleAlert,
} from "lucide-react";

async function get() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

export default async function Page() {
  await get();
  return (
    <Card className="@6xl:col-span-3 @container">
      <CardHeader className="space-y-0 flex-row items-center justify-between">
        <CardTitle className="font-medium text-lg">Notifications</CardTitle>
        <div className="h-8 w-8 rounded-full grid place-content-center relative bg-muted">
          <Bell className="h-5 w-5 text-muted-foreground" />
          <div className="absolute top-0 right-0 h-2 w-2 bg-destructive rounded-full" />
        </div>
      </CardHeader>
      <CardContent className="grid @4xl:grid-cols-2 gap-2">
        {Array.from({ length: 6 }).map((_, i) => {
          const index = i % notificationStatus.length;

          const Icon = NotificationIcon({
            status: notificationStatus[index].value,
          });
          const Variant = NotificationVariant({
            status: notificationStatus[index].value,
          });

          return (
            <Card
              key={i}
              className={cn(Variant.bg, "", "cursor-pointer transition-all")}
            >
              <CardHeader className="flex-row justify-between items-center space-y-0 gap-2 p-4 pb-1">
                <Icon className={cn("h-6 w-6", Variant.text)} />
                <CardTitle className="w-full font-medium text-sm text-gray-800 dark:text-muted-foreground">
                  Heading Of Notification
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0 pl-[47px]">
                <CardDescription className="text-gray-500 sm:text-sm text-xs">
                  Description of Notification Room 302 is closed for the day
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </CardContent>
      <CardFooter className="">
        <Button className="w-full">View All Notifications</Button>
      </CardFooter>
    </Card>
  );
}

function NotificationIcon({ status }: { status: NotificationStatus }) {
  switch (status) {
    case "warning":
      return TriangleAlert;
    case "completed":
      return CircleCheckBig;
    case "incomplete":
      return Siren;
    case "info":
      return CircleAlert;
  }
}

function NotificationVariant({ status }: { status: NotificationStatus }) {
  switch (status) {
    case "warning":
      return {
        bg: "bg-amber-50 hover:bg-amber-100 dark:bg-amber-400/15 dark:hover:bg-amber-400/20",
        text: "text-amber-600",
      };
    case "completed":
      return {
        bg: "bg-green-50 hover:bg-green-100 dark:bg-green-400/15 dark:hover:bg-green-400/20",
        text: "text-green-600",
      };
    case "incomplete":
      return {
        bg: "bg-red-50 hover:bg-red-100 dark:bg-red-400/15 dark:hover:bg-red-400/20",
        text: "text-red-600 ",
      };
    case "info":
      return {
        bg: "bg-blue-50 hover:bg-blue-100 dark:bg-blue-400/15 dark:hover:bg-blue-400/20",
        text: "text-blue-600",
      };
  }
}
