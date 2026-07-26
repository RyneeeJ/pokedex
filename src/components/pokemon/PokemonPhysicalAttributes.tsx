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
  let formattedValue: string[] = [];

  if (attribute === "Abilities") {
    formattedValue = value.map((ability) =>
      ability
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
    );
  }
  return (
    <div className="flex flex-col items-start">
      <span className="text-xs font-semibold text-[#855300] uppercase">
        {attribute}
      </span>

      <span className="font-semibold">
        {attribute === "Abilities"
          ? formattedValue.join(", ")
          : `${value} ${ATTRIBUTE_UNITS[attribute]}`}
      </span>
    </div>
  );
}
