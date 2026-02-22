import { BOOKING_URL } from "@/lib/site";

export default function GlobalContactBar() {
  return (
    <section className="bg-[#f3f5f9] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <h2 className="text-center text-2xl font-semibold text-[#0f2e5c] mb-8">
          How can we help you?
        </h2>

        <div className="bg-white rounded-2xl shadow-sm border p-6 space-y-6">

          <div className="grid md:grid-cols-3 gap-6 text-sm">

            <div>
              <p className="font-semibold text-gray-500 uppercase">
                Opening Hours
              </p>
              <p className="text-[#0f2e5c] font-medium">
                Mo–Fr: 10–17 Uhr
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-500 uppercase">
                Telephone
              </p>
              <a
                href="tel:+4313306090"
                className="text-[#0f2e5c] font-medium hover:underline"
              >
                +43 1 3306090
              </a>
            </div>

            <div>
              <p className="font-semibold text-gray-500 uppercase">
                Email
              </p>
              <a
                href="mailto:info@zahnspange-sablania.at"
                className="text-[#0f2e5c] font-medium hover:underline"
              >
                info@zahnspange-sablania.at
              </a>
            </div>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">

            <a href="tel:+4313306090"
              className="rounded-xl border p-4 text-center hover:bg-gray-50">
              Call
            </a>

            <a href="mailto:info@zahnspange-sablania.at"
              className="rounded-xl border p-4 text-center hover:bg-gray-50">
              Email
            </a>

            <div className="rounded-xl border p-4 text-center">
              Hours
            </div>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border p-4 text-center hover:bg-gray-50"
            >
              Menü
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
