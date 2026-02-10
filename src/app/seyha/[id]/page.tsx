import React from "react";
import { FlowerImage, flowerImages } from "../flower";
import Image from "next/image";
import Link from "next/link";

export default async function ImageDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo: FlowerImage | undefined = flowerImages.find((p) => p.id === id);

  if (!photo) {
    return (
      <div className="min-h-screen grid place-items-center bg-neutral-950 px-6">
        <div className="text-center">
          <h2 className="text-2xl font-light text-white">Image not found</h2>
          <Link
            href="/seyha/"
            className="mt-6 inline-flex items-center gap-2 text-sm text-amber-300 hover:text-amber-200 transition"
          >
            <span className="-translate-y-[1px]">←</span> Return to Gallery
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="pointer-events-none fixed inset-0 opacity-60">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-pink-500/30 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-amber-400/25 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <Link
          href="/seyha/"
          className="inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition"
        >
          <span className="transition-transform hover:-translate-x-1">←</span>
          Back
        </Link>

        <main className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="relative overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10 shadow-2xl">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={photo.src}
                alt={photo.description}
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] tracking-[0.25em] uppercase text-white/80 ring-1 ring-white/10 backdrop-blur">
                Featured
                <span className="h-1 w-1 rounded-full bg-amber-300" />
                Flower
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-xs tracking-[0.35em] uppercase text-white/60">
                Flower For U
              </p>
              <h1 className="mt-4 text-4xl md:text-6xl font-light tracking-tight">
                <span className="bg-gradient-to-r from-amber-200 via-pink-200 to-violet-200 bg-clip-text text-transparent">
                  {photo.description || "Flower Species"}
                </span>
              </h1>
              <div className="mt-6 h-px w-28 bg-gradient-to-r from-amber-300/70 to-transparent" />
            </div>

            <p className="text-base md:text-lg leading-relaxed text-white/70 max-w-xl">
              A soft, modern portrait that highlights delicate textures, color
              harmony, and the calm mood of the scene—crafted to feel elegant
              and minimal.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 backdrop-blur">
                <p className="text-[11px] uppercase tracking-[0.25em] text-white/50">
                  Artist
                </p>
                <p className="mt-2 text-sm font-medium text-white/85">
                  FlowerForU
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 backdrop-blur">
                <p className="text-[11px] uppercase tracking-[0.25em] text-white/50">
                  Year
                </p>
                <p className="mt-2 text-sm font-medium text-white/85">2024</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="rounded-full bg-white/5 ring-1 ring-white/10 px-4 py-2 text-xs text-white/70">
                Portrait
              </span>
              <span className="rounded-full bg-white/5 ring-1 ring-white/10 px-4 py-2 text-xs text-white/70">
                Nature
              </span>
              <span className="rounded-full bg-white/5 ring-1 ring-white/10 px-4 py-2 text-xs text-white/70">
                Minimal
              </span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
