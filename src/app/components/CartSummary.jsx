'use client';

export default function CartSummary({ cart, onRemove, onReset }) {
  const total = cart.reduce((sum, p) => sum + p.price, 0);
  const counts = cart.reduce((acc, item) => {
    acc[item.id] = (acc[item.id] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="border p-4 rounded-xl shadow space-y-2">
      <h2 className="font-bold">Cart Summary</h2>
      <p>Items: {cart.length}</p>
      <p>Total: ${total}</p>
      <ul>
        {Object.entries(counts).map(([id, qty]) => (
          <li key={id}>
            {id}: {qty}{' '}
            <button
              onClick={() => onRemove(id)}
              className="text-sm text-red-500 underline"
            >
              −
            </button>
          </li>
        ))}
      </ul>
      {cart.length > 0 && (
        <button
          onClick={onReset}
          className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
        >
          Clear Cart
        </button>
      )}
    </div>
  );
}
