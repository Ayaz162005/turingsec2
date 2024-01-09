import LeaderLine from "../component/LeaderLine";

export default function LeaderBoard() {
  return (
    <section className="px-16 pb-4">
      <h2 className="font-bold text-[32px] my-6">Leaderboard</h2>
      <div className="space-y-4">
        <LeaderLine />
        <LeaderLine />
        <LeaderLine />
        <LeaderLine />
        <LeaderLine />
      </div>
    </section>
  );
}
