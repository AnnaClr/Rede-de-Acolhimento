type FilterChipProps = {
  label: string;
  category: string;
  active?: boolean;
  onClick?: (category: string) => void;
};

export default function FilterChip({ label, category, active = false, onClick }: FilterChipProps) {
  return (
    <button
      className={`filter-chip${active ? " active" : ""}`}
      data-cat={category}
      type="button"
      onClick={() => onClick?.(category)}
    >
      {label}
    </button>
  );
}
