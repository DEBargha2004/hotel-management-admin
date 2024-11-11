import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <Card className="@container">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle className="font-medium text-lg">Recent Stays</CardTitle>
        <Skeleton className="h-10 min-w-[138px]" />
      </CardHeader>
      <CardContent className="space-y-3">
        <Skeleton className="w-[175px] min-h-10" />
        <Skeleton className="w-full min-h-[300px]" />
      </CardContent>
    </Card>
  );
}
