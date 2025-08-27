import { Link } from "react-router-dom";


export default function Welcome() {
return (
<div className="container py-5 d-flex flex-column align-items-center justify-content-center" style={{minHeight: "100vh"}}>
<h1 className="mb-3 text-center">Welcome to Turf Management System</h1>
<p className="text-muted mb-4 text-center">Browse, book, and manage sports turfs with ease.</p>
<div className="d-flex gap-3">
<Link to="/login" className="btn btn-primary">Login</Link>
<Link to="/register" className="btn btn-outline-primary">Register</Link>
</div>
</div>
);
}