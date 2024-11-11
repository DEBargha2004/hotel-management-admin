"use client";

import GuestCreateForm from "@/components/custom/forms/guest-create-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <Dialog
      defaultOpen
      onOpenChange={(e) => {
        if (!e) router.back();
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Guest</DialogTitle>
        </DialogHeader>
        <GuestCreateForm />
      </DialogContent>
    </Dialog>
  );
}
