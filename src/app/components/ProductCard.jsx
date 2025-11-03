'use client';

export default function ProductCard({ product, onAdd }) {
  const { name, price, stock } = product;
  return (
    <div className="border rounded-xl p-4 shadow">
      <h3 className="font-semibold">{name}</h3>
      <p>${price}</p>
      <p className={stock === 0 ? 'text-red-500' : 'text-green-600'}>
        {stock > 0 ? `In stock: ${stock}` : 'Out of stock'}
      </p>
      <button
        className="mt-2 bg-blue-500 text-white px-3 py-1 rounded disabled:bg-gray-400"
        disabled={stock === 0}
        onClick={() => onAdd(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}
