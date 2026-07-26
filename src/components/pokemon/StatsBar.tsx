import { Progress } from "../ui/progress";

const STATS_COLORS = {
  hp: "**:data-[slot=progress-indicator]:bg-[#22c55e]",
  attack: "**:data-[slot=progress-indicator]:bg-[#ef4444]",
  defense: "**:data-[slot=progress-indicator]:bg-[#3b82f6]",
  specialattack: "**:data-[slot=progress-indicator]:bg-[#f97316]",
  specialdefense: "**:data-[slot=progress-indicator]:bg-[#8b5cf6]",
  speed: "**:data-[slot=progress-indicator]:bg-[#eab308]",
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
