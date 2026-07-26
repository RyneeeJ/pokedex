import type { BaseStats } from "@/lib/types/pokemon";
import BaseStatsField from "./BaseStatsField";

export default function FeaturedPokemonBaseStats({
  baseStats,
}: {
  baseStats: BaseStats;
}) {
  const mappedBaseStats = Object.entries(baseStats).map((entry) => ({
    stat: entry[0] as keyof BaseStats,
    value: entry[1],
  }));

  return (
    <div className="space-y-3">
      <div className="font-semibold">Base Stats</div>
      <div className="space-y-2.5">
        {mappedBaseStats.map((stat) => (
          <BaseStatsField key={stat.stat} stat={stat.stat} value={stat.value} />
        ))}
      </div>
    </div>
  );
}
