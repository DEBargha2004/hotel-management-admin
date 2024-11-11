import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dot, UsersRound } from "lucide-react";

async function get() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
}

export default async function Bookings() {
  await get();
  return (
    <Card>
      <CardHeader className="flex-row justify-between items-center">
        <CardTitle className="font-medium text-gray-500">
          Today&rsquo;s Bookings
        </CardTitle>
        <UsersRound className="text-primary h-5 w-5" />
      </CardHeader>
      <CardContent className="space-y-1">
        <h2 className="text-2xl font-medium">23</h2>
        <p className="flex items-center text-sm">
          <span className="text-primary">12 check-ins</span>
          <Dot />
          <span className="text-destructive">11 check-outs</span>
        </p>
      </CardContent>
    </Card>
  );
}
