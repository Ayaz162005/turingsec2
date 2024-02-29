import { useSearchParams } from "react-router-dom";

export default function Line({ text }: { text?: string }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const line = searchParams.get("line");
  return (
    <div
      className={`h-[70px] bg-[#2B5D83] flex flex-col justify-center px-8 border-b border-black cursor-pointer
      hover:opacity-70 transition-all duration-300 ease-in-out ${
        line == text ? "opacity-70" : ""
      }`}
      onClick={() => {
        setSearchParams({ ...searchParams, line: text || "2632738829" });
      }}
    >
      <p className="sm:text-[16px] text-[14px] font-[600]">
        {text || "2632738829"}
      </p>
    </div>
  );
}
