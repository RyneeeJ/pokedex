import BaseStatsField from "./BaseStatsField";

export default function FeaturedPokemonBaseStats() {
  return (
    <div className="space-y-3">
      <div className="font-semibold">Base Stats</div>
      <div className="space-y-2.5">
        <BaseStatsField stat="HP" value={35} />
        <BaseStatsField stat="Attack" value={55} />
        <BaseStatsField stat="Defense" value={40} />
        <BaseStatsField stat="Speed" value={90} />
      </div>
    </div>
  );
}
