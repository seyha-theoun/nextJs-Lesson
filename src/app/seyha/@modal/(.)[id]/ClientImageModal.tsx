"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { flowerImages } from "../../flower";
import { DialogDescription } from "@radix-ui/react-dialog";

export default function ClientImageModal({ id }: { id: string }) {
  const router = useRouter();
  const photo = flowerImages.find((p) => p.id === id);

  if (!photo) return null;

  return (
    <Dialog open={true} onOpenChange={() => router.back()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-pink-500 text-4xl">Flower For U</DialogTitle>
          <DialogDescription className="text-pink-500 text-3xl">{photo.description}</DialogDescription>
        </DialogHeader>
        <Image
          src={photo.src}
          alt={photo.description}
          className="object-fill rounded-4xl  w-full h-100"
        />
      </DialogContent>
    </Dialog>
  );
}
