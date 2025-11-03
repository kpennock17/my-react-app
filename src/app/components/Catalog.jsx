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
