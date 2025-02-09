import Link from "next/link";

function login() {
  return (
    <>
      <h1 className="text-7xl font-light text-center max-w-7xl mx-auto p-7 ">
        {" "}
        Login{" "}
      </h1>
      <form className=" border rounded-xl max-w-5xl p-16 flex flex-col gap-5 mx-auto ">
        <label className="text-xl font-light " htmlFor="email">
          {" "}
          Email:
        </label>
        <input
          className="border rounded-xl text-xl p-3  border-black"
          type="email"
          placeholder="Email "
        />
        <label className="text-xl font-light  " htmlFor="password">
          {" "}
          Password:
        </label>
        <input
          className="border rounded-xl text-xl p-3  border-black"
          type="password"
          placeholder="Password"
        />
        <div className="text-center">
          <Link
            href={"/dashboard"}
            className="rounded-full border font-light text-xl  py-4 px-9  border-cyan-700"
          >
            Login
          </Link>
        </div>
      </form>
    </>
  );
}
export default login;
