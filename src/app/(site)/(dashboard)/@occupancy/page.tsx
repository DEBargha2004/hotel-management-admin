import ProgressBar from "@/components/custom/progressbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home } from "lucide-react";

async function get() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

export default async function Occupancy() {
  await get();
  const occupancyRate = 50;
  return (
    <Card>
      <CardHeader className="flex-row justify-between items-center">
        <CardTitle className="font-medium text-gray-500">
          Occupancy Rate
        </CardTitle>
        <Home className="text-blue-500" />
      </CardHeader>
      <CardContent className="flex justify-start items-center gap-4">
        {/* @ts-ignore */}
        <ProgressBar
          value={occupancyRate}
          text={`${occupancyRate}%`}
          styles={{
            path: { stroke: "#3b82f6" },
            text: { fill: "#3b82f6", fontSize: "25px" },
            root: {
              height: "65px",
              width: "65px",
            },
          }}
        />
        <div className="space-y-1">
          <p className="text-sm text-gray-500">Available Rooms</p>
          <h2 className="text-2xl font-medium">10/20</h2>
        </div>
      </CardContent>
    </Card>
  );
}
