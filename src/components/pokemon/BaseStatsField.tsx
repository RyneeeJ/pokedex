import StatsBar from "./StatsBar";

export default function BaseStatsField({
  stat,
  value,
}: {
  stat:
    | "hp"
    | "attack"
    | "defense"
    | "specialattack"
    | "specialdefense"
    | "speed";
  value: number;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="w-1/5 text-xs font-medium text-[#855300]">{stat}</div>
      <div className="flex-1">
        <StatsBar value={value} stat={stat} />
      </div>
      <div className="w-1/5 text-right text-xs font-medium">{value}</div>
    </div>
  );
}
