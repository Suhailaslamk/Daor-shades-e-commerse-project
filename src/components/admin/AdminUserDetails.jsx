import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/api";

export default function AdminUserDetails() {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const [userRes, ordersRes] = await Promise.all([
          api.get(`/admin/users/${id}`),
          api.get(`/admin/users/${id}/orders`)
        ]);

        setUser(userRes.data.data);
        setOrders(ordersRes.data.data);
      } catch (err) {
        console.error("Failed to fetch user details", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [id]);

  if (loading) {
    return <p className="text-center text-slate-400">Loading...</p>;
  }

  if (!user) {
    return <p className="text-center text-red-400">User not found</p>;
  }

  return (
    <div className="min-h-screen bg-gray-950 p-6 text-slate-200 ml-10">
      <h2 className="text-3xl mb-6">User Details</h2>

      {/* USER INFO */}
      <div className="bg-gray-900 p-4 rounded-lg mb-8">
        <p><strong>Name:</strong> {user.fullName}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p>
          <strong>Status:</strong>{" "}
          {user.isBlocked ? "Blocked" : "Active"}
        </p>
        <p>
          <strong>Joined:</strong>{" "}
          {new Date(user.createdAt).toLocaleDateString()}
        </p>
      </div>

      {/* ORDERS */}
      <h3 className="text-2xl mb-4">Orders</h3>

      {orders.length === 0 ? (
        <p className="text-slate-400">No orders found</p>
      ) : (
        <table className="w-full border border-gray-800">
          <thead className="bg-gray-800">
            <tr>
              <th className="p-2">Order ID</th>
              <th className="p-2">Total</th>
              <th className="p-2">Status</th>
              <th className="p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(o => (
              <tr key={o.id} className="border-t border-gray-800">
                <td className="p-2 text-center">{o.id}</td>
                <td className="p-2 text-center">₹{o.totalAmount}</td>
                <td className="p-2 text-center">{o.status}</td>
                <td className="p-2 text-center">
                  {new Date(o.orderDate).toLocaleDateString()}
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
