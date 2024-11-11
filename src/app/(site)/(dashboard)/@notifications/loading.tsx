import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <Card className="@6xl:col-span-3 @container">
      <CardHeader className="space-y-0 flex-row items-center justify-between">
        <CardTitle className="font-medium text-lg">Notifications</CardTitle>
        <Skeleton className="h-8 w-8 rounded-full" />
      </CardHeader>
      <CardContent className="grid @4xl:grid-cols-2 gap-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="w-full min-h-20 rounded-xl" />
        ))}
      </CardContent>
    </Card>
  );
}
