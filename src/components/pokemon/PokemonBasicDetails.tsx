import { Badge } from "../ui/badge";

export default function PokemonBasicDetails({
  baseDetails,
  size = "sm",
}: {
  baseDetails: {
    id: number;
    name: string;
    types: string[];
  };
  size?: "sm" | "lg";
}) {
  const sizeStyles = {
    sm: {
      name: "text-[18px]",
      badge: "px-2 py-1.5 text-[0.65rem]",
      id: "text-[12px]",
      space: "space-y-1.5",
    },
    lg: {
      name: "text-2xl",
      badge: "px-3 py-2.5 text-base",
      id: "text-[16px]",
      space: "space-y-2",
    },
  };
  return (
    <div className={sizeStyles[size].space}>
      {/* ID */}
      <span className={`mb-1 text-[#855300] ${sizeStyles[size].id}`}>
        #{baseDetails.id.toString().padStart(3, "0")}
      </span>
      {/* Name */}
      <div className={`font-bold ${sizeStyles[size].name}`}>
        {baseDetails.name}
      </div>
      {/* Types */}
      <div className="flex gap-2">
        {baseDetails.types.map((type) => (
          <Badge
            style={{ backgroundColor: `var(--type-${type.toLowerCase()})` }}
            className={sizeStyles[size].badge}
            key={type}
          >
            {type.toUpperCase()}
          </Badge>
        ))}
      </div>
    </div>
  );
}
