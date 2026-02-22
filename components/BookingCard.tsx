import Image from "next/image";
import { BOOKING_URL } from "@/data/bookingServices";

interface BookingCardProps {
  title: string;
  description: string;
  image: string;
  buttonLabel: string;
}

export default function BookingCard({
  title,
  description,
  image,
  buttonLabel,
}: BookingCardProps) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:border-[#0f2e5c] hover:shadow-xl"
    >
      <div className="relative aspect-[5/3] w-full bg-gray-100">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <h3 className="absolute bottom-0 left-0 right-0 p-4 text-lg font-semibold text-white drop-shadow-md">
          {title}
        </h3>
      </div>
      <div className="p-5">
        <p className="mb-4 text-sm text-gray-600">{description}</p>
        <span className="inline-flex items-center justify-center rounded-xl bg-[#0f2e5c] px-4 py-2.5 text-sm font-semibold text-white transition duration-200 group-hover:bg-[#163d78]">
          {buttonLabel}
        </span>
      </div>
    </a>
  );
}
