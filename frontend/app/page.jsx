import Link from "next/link";

function Landing() {
  return (
    <>
      <div className="flex gap-10 max-w-7xl mx-auto  items-center ">
        <div className="flex align-middle  gap-6 flex-col">
          <h1 className="text-7xl font-bold ">
            Healing <span className="text-cyan-700"> Hands</span> <br />
            Caring <span className="text-cyan-700">Hearts</span>
          </h1>
          <p className="my-8 text-3xl font-medium text-justify leading-10 mr-20 ">
            Your journey to better health starts here. <br />
            Schedule a consultation with Dr.Aknouche, a trusted expert dedicated
            to providing compassionate and personalized care.
          </p>{" "}
          <div className=" flex gap-5">
            <Link
              href="/booking"
              className=" font-light rounded-full text-xl p-4 border-2 hover:bg-white hover:text-black border-gray-500 text-white bg-cyan-700  "
            >
              Book an Appointment
            </Link>
            <button className="rounded-full font-light text-xl  hover:bg-cyan-700 hover:text-white p-4 border-2 border-cyan-950 ">
              Contact Us
            </button>
          </div>
        </div>
        <img
          src="HeroSection.jpg"
          alt="img"
          className="rounded-2xl h-[600px]  "
        />{" "}
      </div>

      <div className="my-28 flex gap-5 max-w-7xl mx-auto ">
        <img src="steto.jpg" alt="image" className="rounded-xl h-[400px]" />
        <div className="flex flex-col mx-auto p-16 ">
          <h1 className="text-4xl font-bold mb-6 text-left text-cyan-700 ">
            {" "}
            Why Book With Us ?{" "}
          </h1>
          <ul className="space-y-3 ">
            <li>
              <span className=" font-semibold">Easy Scheduling:</span> a
              seamless process to book appointments im minutes{" "}
            </li>
            <li>
              <span className=" font-semibold">Trusted Professional:</span>{" "}
              qualified and experienced specialist
            </li>
            <li>
              <span className=" font-semibold"> No Long Wait Times:</span> get
              care when you need it most
            </li>
          </ul>
          <Link
            className="rounded-full m-6 p-3 text-center border border-gray-500 text-xl font-light hover:bg-cyan-700 hover:text-white "
            href={"/booking"}
          >
            {" "}
            Book Now !
          </Link>
        </div>
      </div>
    </>
  );
}
export default Landing;
