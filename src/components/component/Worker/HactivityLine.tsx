import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
export default function HactivityLine({ data, index, page, setPage }) {
  return (
    <div
      className={`flex justify-between ${
        index == 0 ? "bg-[#2451F5]" : "bg-[#023059] border-b border-black"
      } text-white  h-[60px] items-center sm:px-8 px-0 sm:text-[18px] text-[14px]`}
    >
      <div
        className={`flex-1 text-center ${
          page === 2 ? "hidden" : "block"
        } lg:block`}
      >
        {index == 0 ? (
          <div className="relative">Hunter</div>
        ) : (
          <div className="flex items-center gap-3 justify-center">
            <div className="hexagon">
              <img src="/assets/images/testimg1.jpeg" alt="" />
            </div>
            <div className="flex flex-col te">{data.huntername}</div>
          </div>
        )}
      </div>
      <div
        className={`flex-1 text-center ${
          page === 2 ? "hidden" : "block"
        } lg:block`}
      >
        {index == 0 ? (
          <div className="relative">
            <button
              onClick={() => setPage(2)}
              className="absolute right-0 lg:hidden block"
            >
              <IoIosArrowForward />
            </button>
            Bug tag
          </div>
        ) : (
          data.bugtag
        )}
      </div>
      <div
        className={`flex-1 text-center ${
          page === 1 ? "hidden" : "block"
        } lg:block`}
      >
        {" "}
        {index == 0 ? (
          <div className="relative">
            <button
              className="absolute left-0 block lg:hidden"
              onClick={() => setPage(1)}
            >
              <IoIosArrowBack />
            </button>
            Status
          </div>
        ) : (
          <div className="text-[#FFEC86]">{data.status}</div>
        )}
      </div>
      <div
        className={`flex-1 text-center ${
          page === 1 ? "hidden" : "block"
        } lg:block `}
      >
        {" "}
        {index == 0 ? "Date" : data.date}
      </div>
    </div>
  );
}
