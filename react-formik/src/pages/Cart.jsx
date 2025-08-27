import { useEffect, useState } from "react";
import { getCart, updateCartItem, removeCartItem, getCurrentUser } from "../services/ApiService.js";
import UserNavbar from "../components/UserNavbar.jsx";

export default function Cart() {
  const user = getCurrentUser();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busyIds, setBusyIds] = useState(new Set());

  // Safely refresh cart (handles null user)
  async function refresh() {
    setLoading(true);
    try {
      if (!user?.id) {
        setItems([]);
        return;
      }
      const data = await getCart(user.id);
      setItems(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Failed to load cart:", err);
      alert("Failed to load cart. Check console for details.");
      setItems([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { refresh(); }, []); // run once

  const total = items.reduce((sum, i) => sum + (Number(i.price) || 0) * (Number(i.qty) || 0), 0);

  async function safeAction(id, fn) {
    setBusyIds(prev => new Set(prev).add(id));
    try {
      await fn();
      await refresh();
    } catch (err) {
      console.error(err);
      alert("Action failed. See console.");
    } finally {
      setBusyIds(prev => { const s = new Set(prev); s.delete(id); return s; });
    }
  }

  return (
    <div>
      <UserNavbar />
      <div className="container py-4">
        <h4 className="mb-3">Your Cart</h4>

        {loading && <p>Loading...</p>}

        {!loading && (!items || items.length === 0) && (
          <p className="text-muted">Cart is empty.</p>
        )}

        {!loading && items && items.length > 0 && (
          <div className="table-responsive">
            <table className="table align-middle">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {items.map(i => (
                  <tr key={i.id}>
                    <td>{i.title}</td>
                    <td>₹{i.price}</td>
                    <td style={{ maxWidth: 120 }}>
                      <div className="input-group">
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          disabled={busyIds.has(i.id)}
                          onClick={() => {
                            // if qty 1 -> remove, else decrement
                            safeAction(i.id, async () => {
                              if (Number(i.qty) > 1) await updateCartItem(i.id, { qty: Number(i.qty) - 1 });
                              else await removeCartItem(i.id);
                            });
                          }}
                        >-</button>

                        <input
                          className="form-control form-control-sm text-center"
                          value={i.qty}
                          readOnly
                        />

                        <button
                          className="btn btn-outline-secondary btn-sm"
                          disabled={busyIds.has(i.id)}
                          onClick={() => safeAction(i.id, async () => {
                            await updateCartItem(i.id, { qty: Number(i.qty) + 1 });
                          })}
                        >+</button>
                      </div>
                    </td>
                    <td>₹{(Number(i.price) || 0) * (Number(i.qty) || 0)}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        disabled={busyIds.has(i.id)}
                        onClick={() => safeAction(i.id, async () => { await removeCartItem(i.id); })}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="d-flex justify-content-end">
              <h5>Total: ₹{total}</h5>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
