import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

async function get() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
}

export default async function Revenue() {
  await get();
  return (
    <Card>
      <CardHeader className="flex-row justify-between items-center">
        <CardTitle className="font-medium text-gray-500">
          Today&rsquo;s Revenue
        </CardTitle>
        <TrendingUp className="text-green-500 h-5 w-5" />
      </CardHeader>
      <CardContent className="space-y-1">
        <h2 className="text-2xl font-medium">₹ 2,340</h2>
        <p className="text-muted-foreground text-sm">
          <span className="text-green-500">+3.5% </span>from yesterday
        </p>
      </CardContent>
    </Card>
  );
}
