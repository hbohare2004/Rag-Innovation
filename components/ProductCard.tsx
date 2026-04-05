import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  benefits: string[];
}

export default function ProductCard({
  image,
  title,
  description,
  benefits,
}: ProductCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm card-hover h-full flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-navy mb-2">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-5">
          {description}
        </p>
        <ul className="space-y-2.5 mt-auto">
          {benefits.map((b) => (
            <li key={b} className="flex items-center gap-2.5 text-sm text-gray-700">
              <CheckCircle2 size={16} className="text-primary shrink-0" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
