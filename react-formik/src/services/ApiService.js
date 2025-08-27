import axios from "axios";


const api = axios.create({
baseURL: "http://localhost:5000", // JSON Server
});


// Auth helpers using JSON Server (mock)
export async function login(email, password) {
const { data } = await api.get(`/users`, { params: { email, password } });
const user = data[0];
if (!user) throw new Error("Invalid credentials");
localStorage.setItem("turf_user", JSON.stringify(user));
return user;
}


export function getCurrentUser() {
const raw = localStorage.getItem("turf_user");
return raw ? JSON.parse(raw) : null;
}


export function logout() {
localStorage.removeItem("turf_user");
}


// Users
export async function registerUser(payload) {
// enforce role user by default
const newUser = { ...payload, role: "user" };
const { data } = await api.post("/users", newUser);
return data;
}


// Turfs CRUD
export async function getTurfs() {
const { data } = await api.get("/turfs");
return data;
}
export async function getTurf(id) {
const { data } = await api.get(`/turfs/${id}`);
return data;
}
export async function addTurf(payload) {
const { data } = await api.post("/turfs", payload);
return data;
}
export async function updateTurf(id, payload) {
const { data } = await api.put(`/turfs/${id}`, payload);
return data;
}
export async function deleteTurf(id) {
await api.delete(`/turfs/${id}`);
}


// Cart (scoped by userId)
export async function getCart(userId) {
const { data } = await api.get("/cart", { params: { userId } });
return data;
}
export async function addToCart(userId, turf, qty = 1) {
// if already in cart, bump qty
const { data: existing } = await api.get("/cart", { params: { userId, turfId: turf.id } });
if (existing.length) {
const item = existing[0];
const { data } = await api.patch(`/cart/${item.id}`, { qty: item.qty + qty });
return data;
}
const payload = { userId, turfId: turf.id, title: turf.title, price: turf.price, qty };
const { data } = await api.post("/cart", payload);
return data;
}
export async function updateCartItem(id, patch) {
const { data } = await api.patch(`/cart/${id}`, patch);
return data;
}
export async function removeCartItem(id) {
await api.delete(`/cart/${id}`);
}
export async function clearCartForUser(userId) {
const items = await getCart(userId);
await Promise.all(items.map(i => api.delete(`/cart/${i.id}`)));
}


// Bookings
export async function getAllBookings() {
const { data } = await api.get("/bookings");
return data;
}
export async function getBookingsByUser(userId) {
const { data } = await api.get("/bookings", { params: { userId } });
return data;
}
export async function createBooking(userId, items) {
const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
const payload = { userId, items, total, createdAt: new Date().toISOString() };
const { data } = await api.post("/bookings", payload);
return data;
}


export default api;