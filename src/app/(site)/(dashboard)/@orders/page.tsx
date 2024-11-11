import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dot, Utensils } from "lucide-react";

async function get() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
}

export default async function Orders() {
  await get();
  return (
    <Card>
      <CardHeader className="flex-row justify-between items-center">
        <CardTitle className="font-medium text-gray-500">
          Total Orders
        </CardTitle>
        <Utensils className="text-yellow-500 h-5 w-5" />
      </CardHeader>
      <CardContent className="space-y-1">
        <h2 className="text-2xl font-medium">34</h2>
        <p className="flex items-center text-sm gap-4">
          <span className="flex items-center">
            <Dot className="text-green-500 scale-125" />
            <span className="text-muted-foreground">12 Hotel</span>
          </span>

          <span className="flex items-center">
            <Dot className="text-yellow-500 scale-125" />
            <span className="text-muted-foreground">23 Restaurent</span>
          </span>
        </p>
      </CardContent>
    </Card>
  );
}
