import { Navigate, Outlet } from "react-router-dom";
import { getCurrentUser } from "../services/ApiService.js";


export default function ProtectedRoute({ allowedRoles = [] }) {
const user = getCurrentUser();
if (!user) return <Navigate to="/login" replace />;
if (allowedRoles.length && !allowedRoles.includes(user.role)) {
// role mismatch -> send to their dashboard
return <Navigate to={user.role === "admin" ? "/admin" : "/user"} replace />;
}
return <Outlet />;
}