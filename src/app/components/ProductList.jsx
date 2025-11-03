'use client';
const products = [
    { id: 'p1', name: 'Laptop', price: 1200, category: 'Electronics', stock: 5 },
    { id: 'p2', name: 'Frame', price: 150, category: 'Home Decor', stock: 3 },
    { id: 'p3', name: 'Phone', price: 900, category: 'Electronics', stock: 4 },
    { id: 'p4', name: 'Sweater', price: 900, category: 'Clothing', stock: 4 },
    { id: 'p5', name: 'Pencil', price: 900, category: 'School', stock: 4 },
    { id: 'p6', name: 'Speaker', price: 900, category: 'Electronics', stock: 4 },
    { id: 'p7', name: 'Watch', price: 900, category: 'Electronics', stock: 4 },
    { id: 'p8', name: 'Blanket', price: 900, category: 'Furniture', stock: 4 },
    { id: 'p9', name: 'Candle', price: 900, category: 'Home Decor', stock: 4 },
    { id: 'p10', name: 'Shirt', price: 900, category: 'Clothing', stock: 4 },
];
export default function ProductList() {
    return(
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((p) => (
                    <li key = {p.id}>{p.name} - ${p.price}</li>
                ))};
            </ul>
        </div>
    );
}
