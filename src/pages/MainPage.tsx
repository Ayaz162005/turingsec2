import Company from "../components/shared/Company";
import Header from "../components/shared/Header";
import InfoPart from "../components/shared/InfoPart";
import ShortInfo from "../components/shared/ShortInfo";

export default function MainPage() {
  return (
    <div className="">
      <Header />
      <Company />
      <InfoPart />
      <ShortInfo />
    </div>
  );
}
