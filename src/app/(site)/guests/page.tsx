import {
  PageDescription,
  PageHeader,
  PageTitle,
} from "@/components/custom/page-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { StarFilledIcon } from "@radix-ui/react-icons";
import {
  CheckCircle,
  Info,
  MoreVertical,
  Pencil,
  Plus,
  SlidersHorizontal,
  Trash2,
  TriangleAlert,
} from "lucide-react";
import Link from "next/link";
import Filter from "./_components/filter";
import SearchInput from "./_components/search-input";
import { Suspense } from "react";

const address = "Joynagar lane 1, Agartala, Tripura";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // const params = await searchParams
  // const page = params.page || 1;
  // const per_page = params.per_page || 10;
  // const query = params.query || "";

  return (
    <main className="space-y-6">
      <header className="flex justify-between items-center">
        <PageHeader>
          <PageTitle>Guest Management</PageTitle>
          <PageDescription>Manage and view guest information</PageDescription>
        </PageHeader>
        <div>
          <Link href="/guests/add">
            <Button>
              <Plus />
              <span className="sm:inline hidden">Add Guest</span>
            </Button>
          </Link>
        </div>
      </header>
      <div className="flex justify-between items-center gap-3">
        <Suspense>
          <SearchInput />
        </Suspense>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant={"outline"} className="px-3">
              <SlidersHorizontal />
              <span className="sm:inline hidden">Filter</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent align="end" className="border-2">
            <Suspense>
              <Filter />
            </Suspense>
          </PopoverContent>
        </Popover>
      </div>

      <div className="bg-card border rounded-xl overflow-hidden @container">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="p-5">Guest</TableHead>
              <TableHead className="@4xl:table-cell hidden">Phone</TableHead>
              <TableHead className="@xl:table-cell hidden">DOB</TableHead>
              <TableHead className="@2xl:table-cell hidden">Address</TableHead>
              <TableHead className="@3xl:table-cell hidden">
                Occupation
              </TableHead>
              <TableHead className="@lg:table-cell hidden">Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map((_, i) => (
              <TableRow key={i}>
                <TableCell className="p-5 flex justify-start items-center gap-2">
                  <Avatar className="border">
                    <AvatarImage src={""} />
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <div className="flex gap-1 items-center">
                      <h2 className="font-medium text-base whitespace-nowrap">
                        Debargha Saha
                      </h2>
                      {i % 3 === 0 && (
                        <StarFilledIcon className="text-yellow-500" />
                      )}
                      <span className="[&>*]:h-4 [&>*]:w-4">
                        {i % 2 === 0 ? (
                          <CheckCircle className="text-green-500" />
                        ) : (
                          <TriangleAlert className="text-yellow-500" />
                        )}
                      </span>
                    </div>
                    <p className="text-muted-foreground">abc@gmail.com</p>
                    <p className="@4xl:hidden block text-muted-foreground">
                      1234567890
                    </p>
                    <p className="@3xl:hidden block text-muted-foreground">
                      JS Software Developer
                    </p>
                    <p className="@2xl:hidden block text-muted-foreground">
                      {address}
                    </p>
                    <Badge
                      className="rounded-full whitespace-nowrap @lg:hidden inline-block"
                      variant={"success"}
                    >
                      Checked In
                    </Badge>
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground @4xl:table-cell hidden">
                  +91 1234567890
                </TableCell>
                <TableCell className="text-muted-foreground whitespace-nowrap @xl:table-cell hidden">
                  {new Date().toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </TableCell>
                <TooltipProvider delayDuration={20}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <TableCell className="text-muted-foreground max-w-[80px] truncate @2xl:table-cell hidden">
                        {address}
                      </TableCell>
                    </TooltipTrigger>
                    <TooltipContent className="text-sm font-medium bg-secondary text-secondary-foreground/70 border-2 p-3 max-w-[200px]">
                      {address}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TableCell className="@3xl:table-cell hidden text-muted-foreground">
                  JS Software Developer
                </TableCell>
                <TableCell className="@lg:table-cell hidden">
                  <Badge
                    className="rounded-full whitespace-nowrap"
                    variant={"success"}
                  >
                    Checked In
                  </Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        className="h-10 w-10 p-0 rounded-full flex justify-center items-center"
                        variant={"ghost"}
                      >
                        <MoreVertical className="h-5 w-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Pencil className="mr-2 h-4 w-4" />
                        <span>Edit</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Info className="mr-2 h-4 w-4" />
                        <span>Details</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="hover:bg-destructive [&>svg]:text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        <span>Delete</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex justify-between items-center p-5 border-t">
          <span className="text-muted-foreground text-sm">
            1 to 10 of <span className="font-medium">100</span> guests
          </span>
          <div className="flex justify-start gap-2">
            <Button variant={"secondary"} className="border text-xs px-3 h-8">
              Prev
            </Button>
            <Button className="text-xs px-3 h-8">Next</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
