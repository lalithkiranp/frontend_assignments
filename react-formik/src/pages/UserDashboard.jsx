import { useEffect, useState } from "react";
import UserNavbar from "../components/UserNavbar.jsx";
import TurfCard from "../components/TurfCard.jsx";
import { getTurfs, addToCart, getCurrentUser } from "../services/ApiService.js";


export default function UserDashboard() {
const [turfs, setTurfs] = useState([]);


useEffect(() => { (async () => setTurfs(await getTurfs()))(); }, []);


async function handleAdd(turf) {
const user = getCurrentUser();
await addToCart(user.id, turf, 1);
alert("Added to cart!");
}
return (
<div>
<UserNavbar />
<div className="container py-4">
<div className="row row-cols-1 row-cols-md-3 g-3">
{turfs.map(t => (
<div className="col" key={t.id}><TurfCard turf={t} onAdd={handleAdd} /></div>
))}
</div>
{!turfs.length && <p className="text-muted mt-3">No turfs yet. Ask admin to add some.</p>}
</div>
</div>
);
}