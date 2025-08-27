import { Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./pages/Welcome.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import UserDashboard from "./pages/UserDashboard.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import EditTurf from "./pages/EditTurf.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";


export default function App() {
return (
<Routes>
<Route path="/" element={<Welcome />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />


{/* Admin routes */}
<Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
<Route path="/admin" element={<AdminDashboard />} />
<Route path="/admin/turfs/:id/edit" element={<EditTurf />} />
</Route>


{/* User routes */}
<Route element={<ProtectedRoute allowedRoles={["user", "admin"]} />}>
<Route path="/user" element={<UserDashboard />} />
<Route path="/cart" element={<Cart />} />
<Route path="/checkout" element={<Checkout />} />
</Route>


<Route path="*" element={<Navigate to="/" replace />} />
</Routes>
);
}