import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RevenueSplitBarChart } from "./_components/barchart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

async function get() {
  return new Promise((resolve) => setTimeout(resolve, 4000));
}

export default async function Page() {
  await get();
  const weekly_chartData = [
    { date: "2024-07-15", hotel: 450, restaurent: 300 },
    { date: "2024-07-16", hotel: 380, restaurent: 420 },
    { date: "2024-07-17", hotel: 520, restaurent: 120 },
    { date: "2024-07-18", hotel: 140, restaurent: 550 },
    { date: "2024-07-19", hotel: 600, restaurent: 350 },
    { date: "2024-07-20", hotel: 480, restaurent: 400 },
    { date: "2024-07-21", hotel: 400, restaurent: 300 },
  ];

  const monthly_chartData = [
    { date: "2024-07-1", hotel: 450, restaurent: 300 },
    { date: "2024-07-8", hotel: 380, restaurent: 420 },
    { date: "2024-07-15", hotel: 520, restaurent: 120 },
    { date: "2024-07-22", hotel: 140, restaurent: 550 },
    { date: "2024-07-29", hotel: 600, restaurent: 350 },
  ];

  const yearly_chartData = [
    { date: "2024-01-01", hotel: 450, restaurent: 300 },
    { date: "2024-02-01", hotel: 380, restaurent: 420 },
    { date: "2024-03-01", hotel: 410, restaurent: 310 },
    { date: "2024-04-01", hotel: 430, restaurent: 290 },
    { date: "2024-05-01", hotel: 460, restaurent: 320 },
    { date: "2024-06-01", hotel: 400, restaurent: 350 },
    { date: "2024-07-01", hotel: 420, restaurent: 370 },
    { date: "2024-08-01", hotel: 440, restaurent: 340 },
    { date: "2024-09-01", hotel: 460, restaurent: 330 },
    { date: "2024-10-01", hotel: 480, restaurent: 360 },
    { date: "2024-11-01", hotel: 450, restaurent: 380 },
    { date: "2024-12-01", hotel: 470, restaurent: 400 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-medium text-lg">
          Food Revenue Split
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue={"week"}>
          <TabsList>
            <TabsTrigger value="week">Week</TabsTrigger>
            <TabsTrigger value="month">Month</TabsTrigger>
            <TabsTrigger value="year">Year</TabsTrigger>
          </TabsList>
          <TabsContent value="week">
            <RevenueSplitBarChart chartData={weekly_chartData} format="week" />
          </TabsContent>
          <TabsContent value="month">
            <RevenueSplitBarChart
              chartData={monthly_chartData}
              format="month"
            />
          </TabsContent>
          <TabsContent value="year">
            <RevenueSplitBarChart chartData={yearly_chartData} format="year" />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
