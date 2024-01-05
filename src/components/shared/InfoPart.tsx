import { Button } from "../ui/button";

export default function InfoPart() {
  return (
    <div className="bg-[#D9D9D9] dark:bg-slate-900 flex flex-col lg:flex-row py-8">
      <div className="min-w-[50%] flex">
        <img
          src="/assets/images/Vector.svg"
          alt=""
          width={180}
          className="m-auto"
        />
      </div>
      <div className="text-center mt-2 lg:text-left lg:mt-0 px-16 lg:px-0">
        <h2 className="text-[35px] font-bold leading-[45px] mb-2">
          Enabling global efforts{" "}
          <span className=" lg:block inline ">to create a more secure</span>{" "}
          online environment
        </h2>
        <p className="xl:w-[50%] lg:w-[70%] w-full">
          informatio nformatio ninf ormationi nformationi nformationin format
          ioninformationinf ormati oninfo rmatio ninformationf ormation informa
          tionin formation information informa tioninformat ioninformat ionin
          formation
        </p>
        <Button className="hover:scale-110 transition-all duration-300 rounded-xl hover:bg-blue-800 dark:hover:bg-violet-900 dark:hover:text-white mt-4">
          Get more information
        </Button>
      </div>
    </div>
  );
}
