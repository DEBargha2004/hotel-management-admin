"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useSearchParamsChange } from "@/hooks/use-searchparams-change";
import { cn } from "@/lib/utils";

const rowsCountPerPage = [10, 20, 30, 40, 50];

export default function Filter({}: {}) {
  const { replace, setter, getter, deleteParam } = useSearchParamsChange();

  const perPage = getter("per_page") || "10";
  const verified = getter("verified") || "false";
  const starred = getter("starred") || "false";
  const checkedIn = getter("checked_in") || "false";

  return (
    <div
      className={cn(
        "grid grid-cols-2 [&>section]:space-y-1 gap-4",
        "[&>div]:flex [&>div]:items-center [&>div]:justify-between [&>div]:gap-2",
      )}
      suppressHydrationWarning
    >
      <section className="col-span-2">
        <Label>Rows per page</Label>
        <Select
          defaultValue="10"
          value={perPage}
          onValueChange={(value) =>
            replace(deleteParam(setter("per_page", value), "page"))
          }
        >
          <SelectTrigger className="w-full bg-background">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {rowsCountPerPage.map((row) => (
              <SelectItem key={row} value={row.toString()}>
                {row}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </section>
      <div>
        <Label>Verified</Label>
        <Switch
          checked={verified === "true"}
          onCheckedChange={(value) =>
            replace(deleteParam(setter("verified", `${value}`), "page"))
          }
          className="block"
        />
      </div>
      <div>
        <Label>Starred</Label>
        <Switch
          checked={starred === "true"}
          onCheckedChange={(value) =>
            replace(deleteParam(setter("starred", `${value}`), "page"))
          }
          className="block"
        />
      </div>
      <div>
        <Label>Checked In</Label>
        <Switch
          checked={checkedIn === "true"}
          onCheckedChange={(value) =>
            replace(deleteParam(setter("checked_in", `${value}`), "page"))
          }
          className="block"
        />
      </div>
    </div>
  );
}
