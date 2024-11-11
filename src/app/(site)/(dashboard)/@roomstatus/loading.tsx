import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <Card className="@6xl:col-span-5 @container">
      <CardHeader>
        <CardTitle className="font-medium text-lg">Room Status</CardTitle>
      </CardHeader>
      <CardContent className="grid @4xl:grid-cols-3 @3xl:grid-cols-3 @xl:grid-cols-2 gap-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <Skeleton key={i} className="w-full min-h-[114px] rounded-xl" />
        ))}
      </CardContent>
    </Card>
  );
}
