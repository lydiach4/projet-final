import Link from "next/link";

function Landing() {
  return (
    <>
      <div className="flex gap-16 max-w-7xl mx-auto items-center px-6 md:px-12 py-20">
        <div className="flex flex-col gap-6 max-w-lg">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
            Healing <span className="text-cyan-700">Hands</span> <br />
            Caring <span className="text-cyan-700">Hearts</span>
          </h1>
          <p className="my-8 text-xl md:text-3xl font-medium text-gray-700 tracking-wide leading-relaxed">
            Your journey to better health starts here. <br />
            Schedule a consultation with Dr. Aknouche, a trusted expert
            dedicated to providing compassionate and personalized care.
          </p>
          <div className="flex gap-5">
            <Link
              href="/booking"
              className="font-semibold rounded-full text-xl py-4 px-8 border-2 border-cyan-700 hover:bg-cyan-500 transition duration-300 text-white bg-cyan-700 shadow-lg"
            >
              Book an Appointment
            </Link>
            <Link
              href="/about"
              className="font-semibold rounded-full text-xl py-4 px-8 border-2 border-cyan-700 hover:bg-cyan-500 hover:text-white transition duration-300 shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <img
          src="HeroSection.jpg"
          alt="Hero Image"
          className="rounded-2xl h-[500px] md:h-[600px] object-cover shadow-xl ml-10"
        />
      </div>

      <div className="my-28 flex gap-5 max-w-7xl mx-auto px-6 md:px-12">
        {/* Image Section */}
        <img
          src="steto.jpg"
          alt="image"
          className="rounded-xl shadow-lg w-full md:w-[500px] h-[400px] object-cover"
        />

        {/* Text Content */}
        <div className="flex flex-col justify-center mx-auto p-8 md:p-16 space-y-6">
          <h1 className="text-4xl font-extrabold text-cyan-700 text-center md:text-left">
            Why Book With Us?
          </h1>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>
              <span className="font-semibold text-cyan-700">
                Easy Scheduling:
              </span>{" "}
              A seamless process to book appointments in minutes.
            </li>
            <li>
              <span className="font-semibold text-cyan-700">
                Trusted Professionals:
              </span>{" "}
              Qualified and experienced specialists.
            </li>
            <li>
              <span className="font-semibold text-cyan-700">
                No Long Wait Times:
              </span>{" "}
              Get care when you need it most.
            </li>
          </ul>
          <Link
            href="/booking"
            className="block w-full sm:w-auto text-center py-3 px-8 mt-6 text-xl font-medium rounded-full bg-cyan-700 text-white hover:bg-cyan-600 transition duration-300 shadow-md"
          >
            Book Now!
          </Link>
        </div>
      </div>
    </>
  );
}
export default Landing;
