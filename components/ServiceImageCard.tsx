import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  image: string;
};

export default function ServiceImageCard({ title, image }: Props) {
  return (
    <Link
      href="http://zahnspange-sablania.termin365.at/"
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div
        className="
          rounded-2xl
          overflow-hidden
          bg-white
          shadow-sm
          hover:shadow-xl
          transition-all duration-300
          hover:-translate-y-1
        "
      >
        <div className="relative w-full h-52">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="p-5 text-center">
          <h3
            className="
              text-[#0f2e5c]
              font-semibold
              text-lg
            "
          >
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
