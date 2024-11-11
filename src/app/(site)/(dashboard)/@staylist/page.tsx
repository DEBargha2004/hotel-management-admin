import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Plus } from "lucide-react";

async function get() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

export default async function Page() {
  const res = await get();
  return (
    <Card className="@container">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle className="font-medium text-lg">Recent Stays</CardTitle>
        <Button>
          <Plus />
          <span>New Booking</span>
        </Button>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="check-in">
          <TabsList>
            <TabsTrigger value="check-in">Check In</TabsTrigger>
            <TabsTrigger value="check-out">Check Out</TabsTrigger>
          </TabsList>
          <TabsContent value="check-in">
            <StayList />
          </TabsContent>
          <TabsContent value="check-out">
            <StayList />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

function StayList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Guests</TableHead>
          <TableHead>Room</TableHead>
          <TableHead>Check In</TableHead>
          <TableHead>Check Out</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: 4 }).map((_, i) => (
          <TableRow key={i}>
            <TooltipProvider delayDuration={20}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <TableCell
                    className="flex justify-start items-center gap-2 relative p-8"
                    style={{ width: 4 * 16 + 35 }}
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Avatar
                        key={i}
                        className={cn(
                          "h-8 w-8 absolute border border-muted-foreground/40",
                          "@lg:w-10 @lg:h-10",
                        )}
                        style={{ left: `${i * 16}px` }}
                      >
                        <AvatarImage />
                        <AvatarFallback className="@lg:text-sm text-xs">
                          AD
                        </AvatarFallback>
                      </Avatar>
                    ))}
                  </TableCell>
                </TooltipTrigger>
                <TooltipContent align="center">3 Guests</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TableCell className="font-medium">20{i}</TableCell>
            <TableCell className="text-muted-foreground whitespace-nowrap">
              {format(new Date(), "dd MMM yyyy")}
            </TableCell>
            <TableCell className="text-muted-foreground whitespace-nowrap">
              {format(new Date(), "dd MMM yyyy")}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
