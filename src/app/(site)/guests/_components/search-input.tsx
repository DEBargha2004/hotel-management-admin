"use client";

import { Input } from "@/components/ui/input";
import { useSearchParamsChange } from "@/hooks/use-searchparams-change";
import { Search } from "lucide-react";
import { useDebounce } from "@uidotdev/usehooks";
import { useEffect, useRef, useState } from "react";

export default function SearchInput() {
  const { replace, setter, getter, deleteParam } = useSearchParamsChange();
  const render = useRef<number>(1);

  const query = getter("query") || "";
  const [queryState, setQueryState] = useState(query);
  const deboundedQuery = useDebounce(queryState, 500);

  useEffect(() => {
    if (render.current === 1) {
      render.current = 2;
      return;
    }
    replace(deleteParam(setter("query", deboundedQuery), "page"));
  }, [deboundedQuery]);

  return (
    <div className="w-full relative" suppressHydrationWarning>
      <Input
        className="pl-8 bg-background"
        placeholder="Search guests.."
        value={queryState}
        onChange={(e) => setQueryState(e.target.value)}
      />
      <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
    </div>
  );
}
