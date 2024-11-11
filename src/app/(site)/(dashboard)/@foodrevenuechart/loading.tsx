import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-medium text-lg">
          Food Revenue Split
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Skeleton className="w-[180px] min-h-10" />
        <Skeleton className="w-full min-h-[300px]" />
      </CardContent>
    </Card>
  );
}
