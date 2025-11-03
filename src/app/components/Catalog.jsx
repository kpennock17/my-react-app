'use client';
import { useEffect, useState } from 'react';
import ProductList from './ProductList';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';
import CartSummary from './CartSummary';
import StatusMessage from './StatusMessage';

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [cart, setCart] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFiltered(data);
        setStatus('ready');
      })
      .catch(() => setStatus('error'));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProducts(prev =>
        prev.map(p => ({
          ...p,
          stock: Math.max(0, p.stock + Math.floor(Math.random() * 3 - 1))
        }))
      );
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let list = [...products];
    if (category) list = list.filter(p => p.category === category);
    if (maxPrice) list = list.filter(p => p.price <= parseFloat(maxPrice));
    setFiltered(list);
  }, [category, maxPrice, products]);

  const addToCart = (product) => {
    if (product.stock <= 0) return;
    setCart(prev => [...prev, product]);
  };

   const removeOne = (id) => {
    const idx = cart.findIndex(i => i.id === id);
    if (idx > -1) {
      const newCart = [...cart];
      newCart.splice(idx, 1);
      setCart(newCart);
    }
  };

  const resetCart = () => setCart([]);

  if (status !== 'ready')
    return <StatusMessage status={status} count={filtered.length} />;

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-1 space-y-4">
        <CategoryFilter value={category} onChange={setCategory} />
        <PriceFilter value={maxPrice} onChange={setMaxPrice} />
        <CartSummary cart={cart} onRemove={removeOne} onReset={resetCart} />
      </div>
      <div className="col-span-3">
        {filtered.length === 0 ? (
          <StatusMessage status="empty" count={0} />
        ) : (
          <ProductList products={filtered} onAdd={addToCart} />
        )}
      </div>
    </div>
  );
}
