import { Progress } from "../ui/progress";

const STATS_COLORS = {
  HP: "**:data-[slot=progress-indicator]:bg-[#22c55e]",
  Attack: "**:data-[slot=progress-indicator]:bg-[#ef4444]",
  Defense: "**:data-[slot=progress-indicator]:bg-[#3b82f6]",
  Speed: "**:data-[slot=progress-indicator]:bg-[#eab308]",
} as const;

export default function StatsBar({
  value,
  stat,
}: {
  value: number;
  stat: keyof typeof STATS_COLORS;
}) {
  return (
    <Progress
      className={`h-2 **:data-[slot=progress-indicator]:rounded-full ${STATS_COLORS[stat]}`}
      value={value}
    />
  );
}
