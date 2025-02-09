import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="border-t border-black mt-20 max-w-7xl mx-auto">
        <div className="flex p-3 justify-between text-cyan-950">
          <Link href={"/"}>
            <img src="logo.png" alt="logo" className="h-[80px] mt-6 " />
          </Link>

          <div className="mt-6">
            <h1 className="font-bold text-lg underline ">Contact : </h1>
            <ul className="text-lg align-middle ">
              <li>
                <span className="font-semibold">Phone Number:</span>
                +213000500201
              </li>
              <li>
                <span className=" font-semibold">Email: </span>
                healwellclinic@gmail.com
              </li>
              <li>
                <span className=" font-semibold">Adress: </span>
                cite 822 log LPP Amirouche Reghaia Alger
              </li>
            </ul>
          </div>
          <div className="text-center m-6">
            <h1 className="text-lg m-3 underline font-bold"> Social Media: </h1>
            <ul className="flex gap-4 ">
              <li>
                {" "}
                <a href="facebook.com">
                  <img src="facebook.png" alt="facebook" className="h-[50px]" />
                </a>
              </li>
              <li>
                <a href="ig.com">
                  {" "}
                  <img
                    src="instagram.png"
                    alt="instagram"
                    className="h-[50px]"
                  />
                </a>
              </li>
              <li>
                <a href="linkedin">
                  <img src="linkedin.png" alt="linkedin" className="h-[50px]" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="text-center font-light p-3"> Copyright © 2025 HealWell</p>
      </footer>
    </>
  );
}
export default Footer;
