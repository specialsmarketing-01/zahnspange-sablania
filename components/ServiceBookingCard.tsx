import Image from "next/image";
import { BOOKING_URL } from "@/lib/site";

interface ServiceBookingCardProps {
  title: string;
  description: string;
  imageSrc: string;
  bookLabel: string;
}

export default function ServiceBookingCard({
  title,
  description,
  imageSrc,
  bookLabel,
}: ServiceBookingCardProps) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:border-[#0f2e5c] hover:shadow-xl"
    >
      <div className="relative aspect-[5/3] w-full bg-gray-100">
        <Image
          src={imageSrc}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-lg font-semibold text-[#0f2e5c]">{title}</h3>
        <p className="mb-4 text-sm text-gray-600">{description}</p>
        <span className="inline-flex items-center justify-center rounded-xl bg-[#0f2e5c] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-[#163d78]">
          {bookLabel}
        </span>
      </div>
    </a>
  );
}
