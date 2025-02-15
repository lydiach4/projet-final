import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center text-cyan-700 mb-12">
          Get in Touch with Us
        </h1>

        <div className="flex flex-col gap-10 md:flex-row justify-between">
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl font-semibold text-cyan-950 underline">
              Contact Details:
            </h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>
                <span className="font-semibold text-cyan-700">
                  Phone Number:
                </span>{" "}
                +213000500201
              </li>
              <li>
                <span className="font-semibold text-cyan-700">Email:</span>{" "}
                <a href="https://www.gmail.com"> healwellclinic@gmail.com </a>
              </li>
              <li>
                <span className="font-semibold text-cyan-700">Address:</span>{" "}
                Cite 822 Log LPP Amirouche Reghaia, Alger
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="flex-1 text-center">
            <h2 className="text-2xl font-semibold text-cyan-950 underline mb-4">
              Follow Us:
            </h2>
            <ul className="flex justify-center gap-6">
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="facebook.png"
                    alt="Facebook"
                    className="h-12 w-12 hover:scale-110 transition duration-300"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="instagram.png"
                    alt="Instagram"
                    className="h-12 w-12 hover:scale-110 transition duration-300"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="linkedin.png"
                    alt="LinkedIn"
                    className="h-12 w-12 hover:scale-110 transition duration-300"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
