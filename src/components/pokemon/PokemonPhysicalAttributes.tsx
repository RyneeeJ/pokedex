const ATTRIBUTE_UNITS = {
  Height: "m",
  Weight: "kg",
  Abilities: "",
};

type PhysicalAttribute =
  | { attribute: "Height"; value: string }
  | { attribute: "Weight"; value: string }
  | { attribute: "Abilities"; value: string[] };

export default function PokemonPhysicalAttributes({
  attribute,
  value,
}: PhysicalAttribute) {
  return (
    <div className="flex flex-col items-start">
      <span className="text-xs font-semibold text-[#855300] uppercase">
        {attribute}
      </span>

      <span className="font-semibold">
        {attribute === "Abilities"
          ? value.join(", ")
          : `${value} ${ATTRIBUTE_UNITS[attribute]}`}
      </span>
    </div>
  );
}
