import React from "react";
import { FlowerImage, flowerImages } from "./flower";
import Image from "next/image";
import Link from "next/link";

export default async function FlowerPhotos() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("test loading");
    }, 500);
  });
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-7xl font-light tracking-widest uppercase text-gray-800">
          Flower For U
        </h1>
        
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {flowerImages.map((a, index) => (
          <Link key={index} href={`/seyha/${a.id}`} scroll={false}>
            <div
              key={index}
              className="group relative overflow-hidden rounded bg-gray-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="aspect-4/5 relative w-full">
                <Image
                  src={a.src}
                  alt={a.description}
                  
                  
                  fill
                  className="object-fill "
                />
              </div>

              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
