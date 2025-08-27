import { useEffect, useState } from "react";
import { createBooking, clearCartForUser, getCart, getCurrentUser } from "../services/ApiService.js";
import UserNavbar from "../components/UserNavbar.jsx";


export default function Checkout() {
const user = getCurrentUser();
const [items, setItems] = useState([]);
const total = items.reduce((s, i) => s + i.price * i.qty, 0);


async function refresh() { setItems(await getCart(user.id)); }
useEffect(() => { refresh(); }, []);


async function handleCheckout() {
if (!items.length) return alert("Cart is empty");
await createBooking(user.id, items);
await clearCartForUser(user.id);
await refresh();
alert("Booking confirmed!");
}
return (
<div>
<UserNavbar />
<div className="container py-4" style={{maxWidth: 720}}>
<h4 className="mb-3">Checkout</h4>
{!items.length ? (
<p className="text-muted">Nothing to checkout.</p>
) : (
<div className="card shadow-sm">
<div className="card-body">
<ul className="list-group list-group-flush mb-3">
{items.map(i => (
<li key={i.id} className="list-group-item d-flex justify-content-between">
<span>{i.title} × {i.qty}</span>
<strong>₹{i.price * i.qty}</strong>
</li>
))}
</ul>
<div className="d-flex justify-content-between">
<span className="fw-bold">Total</span>
<span className="fw-bold">₹{total}</span>
</div>
</div>
<div className="card-footer text-end">
<button className="btn btn-success" onClick={handleCheckout}>Confirm Booking</button>
</div>
</div>
)}
</div>
</div>
);
}