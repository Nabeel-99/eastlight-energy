import { Button } from "../ui/button";
import Link from "next/link";

const GetStarted = () => {
  return (
    <section className="relative  overflow-hidden flex flex-col items-center p-10 lg:p-20 justify-center bg-black rounded-3xl border-2 border-teal-400/20 hover:border-teal-400 hover:shadow-md hover:shadow-teal-400 transition-colors duration-300 ease-in-out text-white max-w-6xl  2xl:container mx-auto w-full">
      <div className="absolute  inset-0 w-full h-full rounded-b-3xl shadow-xl shadow-cyan-500/10 z-0">
        <img
          src={"/panelfour.jpg"}
          alt=""
          className="w-full h-full object-cover rounded-b-3xl"
        />
      </div>
      <div className="absolute inset-0 w-full rounded-b-3xl h-full bg-linear-to-t from-[#010706]/60 via-[#010706]/80 to-[#010706]  z-10" />
      <div className="flex flex-col gap-2 w-full z-30">
        <p className="text-[3rem] lg:text-[6rem] lg:leading-30 text-center">
          READY TO <br /> <span className="">GO SOLAR?</span>
        </p>

        <div className="flex justify-center gap-4 mt-4">
          <Link
            href={"/services/solar-installations"}
            className="max-lg:w-full"
          >
            {" "}
            <Button className="flex bg-[#24a090] text-white hover:bg-teal-500 hover:ring-teal-500 hover:-translate-y-1 hover:shadow-md hover:shadow-yellow-500  md:p-6 md:px-8 md:text-base max-lg:w-full md:rounded-full  items-center  gap-2">
              Book Solar Installation
            </Button>
          </Link>
        </div>
      </div>
      {/* <div className="w-full ">
        <div className="rounded-xl shadow-md  hidden md:block -right-10  absolute  xl:right-20 -top-10  lg:w-56 lg:h-56">
          <Image
            src={"/solar.jpg"}
            alt="solar"
            width={150}
            height={150}
            className="object-cover rounded-xl rotate-12 w-full h-full"
          />
        </div>
        <div className="rounded-xl shadow-md  hidden md:block  absolute -left-10 -bottom-30  xl:left-20 lg:-bottom-10  lg:w-56 lg:h-56">
          <Image
            src={"/solartwo.png.avif"}
            alt="solar"
            width={150}
            height={150}
            className="object-cover rounded-xl rotate-12 w-full h-full"
          />
        </div>
      </div> */}
    </section>
  );
};

export default GetStarted;
