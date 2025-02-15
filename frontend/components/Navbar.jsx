import Link from "next/link";

function Navbar() {
  return (
    <>
      <header className="max-w-7xl mx-auto mb-14">
        <nav className="m-4 p-4 flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <Link href={"/"} className="flex items-center">
            <img
              src="./logo.png"
              alt="Logo"
              className="w-[200px] h-[60px] object-contain"
            />
          </Link>

          {/* Navigation Links */}
          <ul className="flex gap-10 text-lg font-medium">
            <li>
              <Link
                className="text-cyan-950 hover:text-cyan-700 transition duration-300"
                href={"/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-cyan-950 hover:text-cyan-700 transition duration-300"
                href={"/about"}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-cyan-950 hover:text-cyan-700 transition duration-300"
                href={"/booking"}
              >
                Booking
              </Link>
            </li>
          </ul>

          {/* Book an Appointment Button */}
          <Link
            href={"/login"}
            className="text-xl font-semibold border-2 border-cyan-700 bg-cyan-700 text-white rounded-full py-3 px-6 transition duration-300 hover:bg-cyan-600 hover:border-cyan-600"
          >
            Log in
          </Link>
        </nav>
      </header>
    </>
  );
}
export default Navbar;
