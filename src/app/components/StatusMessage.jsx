'use client';

export default function StatusMessage({ status, count }) {
  const messages = {
    loading: 'Loading products...',
    error: 'Failed to load products. Please try again.',
    empty: 'No products match your filters.',
    ready: ''
  };

  return (
    <div className="text-center text-gray-600 p-8">
      <p>{messages[status]}</p>
      {status === 'ready' && count === 0 && <p>No products available.</p>}
    </div>
  );
}
