"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useSearchParamsChange = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const setter = (key: string, value: string | string[]) => {
    const params = new URLSearchParams(searchParams);
    params.set(key, value.toString());
    return params.toString();
  };

  const getter = (key: string) => {
    return searchParams.get(key);
  };

  const replace = (searchParams: string) => {
    console.log(searchParams);
    router.replace(pathname + "?" + searchParams);
  };

  const deleteParam = (searchParams: string, key: string) => {
    const params = new URLSearchParams(searchParams);
    params.delete(key);
    return params.toString();
  };
  return { getter, setter, replace, deleteParam };
};
