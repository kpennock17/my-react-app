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
