import { Link, useNavigate } from "react-router-dom";
import { logout, getCurrentUser } from "../services/ApiService.js";


export default function UserNavbar() {
const navigate = useNavigate();
const user = getCurrentUser();
return (
<nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
<Link className="navbar-brand" to="/user">Turf</Link>
<div className="navbar-nav">
<Link className="nav-link" to="/user">Browse Turfs</Link>
<Link className="nav-link" to="/cart">Cart</Link>
<Link className="nav-link" to="/checkout">Checkout</Link>
</div>
<div className="ms-auto d-flex align-items-center gap-3">
<span className="text-muted">{user?.name}</span>
<button className="btn btn-outline-secondary btn-sm" onClick={() => { logout(); navigate("/"); }}>Logout</button>
</div>
</nav>
);
}