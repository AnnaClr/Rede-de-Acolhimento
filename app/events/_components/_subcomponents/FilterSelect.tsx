type FilterSelectProps = {
  id: string;
  label: string;
  placeholder: string;
};

export default function FilterSelect({ id, label, placeholder }: FilterSelectProps) {
  return (
    <>
      <label className="sr-only" htmlFor={id}>
        {label}
      </label>
      <select className="select" id={id} defaultValue="">
        <option value="">{placeholder}</option>
      </select>
    </>
  );
}
