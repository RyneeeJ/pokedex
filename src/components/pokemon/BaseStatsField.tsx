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
  let formattedStat = "";
  if (stat === "hp") {
    formattedStat = "HP";
  } else if (stat === "attack") {
    formattedStat = "Attack";
  } else if (stat === "defense") {
    formattedStat = "Defense";
  } else if (stat === "specialattack") {
    formattedStat = "SP. ATK";
  } else if (stat === "specialdefense") {
    formattedStat = "SP. DEF";
  } else if (stat === "speed") {
    formattedStat = "Speed";
  }
  return (
    <div className="flex items-center justify-between">
      <div className="w-1/5 text-xs font-medium text-[#855300]">
        {formattedStat}
      </div>
      <div className="flex-1">
        <StatsBar value={value} stat={stat} />
      </div>
      <div className="w-1/5 text-right text-xs font-medium">{value}</div>
    </div>
  );
}
