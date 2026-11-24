type FilterSelectProps = {
  id: string;
  label: string;
  placeholder: string;
  options?: { value: string; label: string }[];
  value?: string;
  onChange?: (value: string) => void;
};

export default function FilterSelect({
  id,
  label,
  placeholder,
  options = [],
  value = "",
  onChange,
}: FilterSelectProps) {
  return (
    <>
      <label className="sr-only" htmlFor={id}>
        {label}
      </label>
      <select
        className="select"
        id={id}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
}
