import { StaticImageData } from "next/image";
import photo1 from "./photos/photo1.jpg";
import photo2 from "./photos/photo2.jpg";
import photo3 from "./photos/photo3.jpg";
import photo4 from "./photos/photo4.jpg";
import photo5 from "./photos/photo5.jpg";
import photo6 from "./photos/photo6.jpg";
import photo7 from "./photos/photo7.jpg";
import photo8 from "./photos/photo8.jpg";

export type FlowerImage = {
  id: string;
  src: StaticImageData;
  description: string;
};
export const flowerImages: FlowerImage[] = [
  {
    id: "1",
    src: photo1,
    description: "Rose - Symbol of Love",
  },
  {
    id: "2",
    src: photo2,
    description: "Sunflower - Bright and Cheerful",
  },
  {
    id: "3",
    src: photo3,
    description: "Tulip - Perfect Spring Beauty",
  },
  {
    id: "4",
    src: photo4,
    description: "Orchid - Exotic Elegance",
  },
  {
    id: "5",
    src: photo5,
    description: "Lily - Pure and Graceful",
  },
  {
    id: "6",
    src: photo6,
    description: "Daisy - Innocence and Joy",
  },
  {
    id: "7",
    src: photo7,
    description: "Peony - Rich and Romantic",
  },
  {
    id: "8",
    src: photo8,
    description: "Lavender - Calm and Healing",
  },
];
