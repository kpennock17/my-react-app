'use client';

export default function CategoryFilter({ value, onChange }) {
  const categories = ['', 'Electronics', 'Furniture', 'Appliances'];

  return (
    <div>
      <label className="block font-semibold mb-1">Category</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border p-2 w-full rounded"
      >
        {categories.map((c) => (
          <option key={c} value={c}>
            {c || 'All'}
          </option>
        ))}
      </select>
    </div>
  );
}
