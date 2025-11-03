'use client';

export default function PriceFilter({ value, onChange }) {
  return (
    <div>
      <label className="block font-semibold mb-1">Max Price</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="e.g. 500"
        className="border p-2 w-full rounded"
      />
    </div>
  );
}
