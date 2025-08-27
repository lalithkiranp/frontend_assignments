import { Link, useNavigate } from "react-router-dom";
import { logout, getCurrentUser } from "../services/ApiService.js";


export default function AdminNavbar() {
const navigate = useNavigate();
const user = getCurrentUser();
return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
<Link className="navbar-brand" to="/admin">Turf Admin</Link>
<div className="navbar-nav">
<Link className="nav-link" to="/admin">Home</Link>
<Link className="nav-link" to="/admin">Manage Turfs</Link>
<Link className="nav-link" to="/admin">View Bookings</Link>
</div>
<div className="ms-auto text-white d-flex align-items-center gap-3">
<span>{user?.name}</span>
<button className="btn btn-outline-light btn-sm" onClick={() => { logout(); navigate("/"); }}>Logout</button>
</div>
</nav>
);
}