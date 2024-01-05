import CompanyBox from "../component/CompanyBox";

export default function Company() {
  return (
    <div className="px-16 pb-20">
      <h2 className="font-bold text-[32px] my-6">Company</h2>

      <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-6">
        <CompanyBox />
        <CompanyBox />
        <CompanyBox />
        <CompanyBox />
      </div>
    </div>
  );
}
