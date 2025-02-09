import Link from "next/link";

function Navbar() {
  return (
    <>
      <header className="max-w-7xl mx-auto mb-14">
        <nav className="m-2 p-2 flex justify-between mt-3 items-center">
          <Link href={"/"}>
            {" "}
            <img src="./logo.png" alt="" className="w-[200px] h-[60px]" />
          </Link>

          <ul className="flex gap-10 ">
            <Link className="text-xl font-light  text-cyan-950 " href={"/"}>
              Home
            </Link>
            <Link className="text-xl font-light text-cyan-950 " href={"/"}>
              About
            </Link>
            <Link
              className="text-xl font-light text-cyan-950 "
              href={"/offers"}
            >
              Offers
            </Link>
          </ul>
          <Link
            href={"/booking"}
            className="text-xl font-light border-2 border-gray-500 bg-cyan-700 text-white  rounded-full p-4 hover:opacity-20"
          >
            Book an Appointment
          </Link>
        </nav>
      </header>
    </>
  );
}
export default Navbar;
