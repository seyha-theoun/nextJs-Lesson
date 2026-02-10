import { Link } from "lucide-react";
import { FlowerImage, flowerImages } from "./flower";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-light tracking-widest uppercase text-gray-800">
          Flower For U
        </h1>
        <div className="h-1 w-20 bg-amber-400 mx-auto mt-4"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {flowerImages.map((a, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl bg-gray-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
          >
            <div className="aspect-4/5 relative w-full bg-gray-200"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
