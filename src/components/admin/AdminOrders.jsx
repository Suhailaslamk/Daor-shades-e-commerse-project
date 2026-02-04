

import { Eye, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import api from "../../api/api";
import { Navigate, useNavigate } from "react-router-dom";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [loading, setLoading] = useState(true);
  const [desc, setDesc] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchOrders();
  }, [page, sortBy]);

  useEffect(() => {
    const delay = setTimeout(() => {
      setPage(1);
      fetchOrders();
    }, 500); // 👈 debounce 500ms

    return () => clearTimeout(delay);
  }, [search]);

  const PAGE_SIZE = 10;

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const res = await api.get("/admin/orders", {
        params: {
          page,
          pageSize: PAGE_SIZE,
          search,
          sortBy,
        },
      });

      setOrders(res.data.data.data);
      setTotal(res.data.data.total);
    } catch (err) {
      console.error("Failed to fetch orders", err);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (orderId, status) => {
    try {
      await api.put("/admin/orders/status", {
        orderId,
        status,
      });
      fetchOrders(); // refresh
    } catch (err) {
      console.error("Failed to update status", err);
      alert("Invalid status transition");
    }
  };

 


  return (
  <div className="min-h-screen bg-black px-4 py-12 md:py-20 flex justify-center">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-zinc-950 border border-zinc-800/50 rounded-3xl p-6 md:p-12 w-full max-w-7xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
    >
      <header className="mb-12">
        <h2 className="text-3xl md:text-5xl font-serif italic tracking-tight text-white text-center">
          Manage Orders
        </h2>
        <p className="text-center text-zinc-500 text-[10px] uppercase tracking-[0.4em] mt-4">
          Administrative Control Panel
        </p>
      </header>

      {/* Search & Filters Section */}
      <div className="flex flex-col lg:flex-row gap-4 mb-10 items-center justify-between">
        <div className="relative w-full lg:max-w-md">
          <input
            type="text"
            placeholder="Search by email or order ID..."
            value={search}
            onChange={(e) => {
              setPage(1);
              setSearch(e.target.value);
            }}
            className="w-full bg-zinc-900/50 border border-zinc-800 text-white px-6 py-3.5 rounded-full text-sm outline-none focus:border-white/50 transition-all placeholder:text-zinc-600"
          />
        </div>

        <div className="flex items-center gap-3 w-full lg:w-auto">
          <select
            value={sortBy}
            onChange={(e) => {
              setPage(1);
              setSortBy(e.target.value);
            }}
            className="flex-1 lg:flex-none bg-zinc-900/50 border border-zinc-800 text-zinc-300 px-6 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold outline-none focus:border-white/50 appearance-none cursor-pointer"
          >
            <option value="date">Sort by: Date</option>
            <option value="amount">Sort by: Amount</option>
          </select>

          <button
            onClick={() => setDesc((d) => !d)}
            className="px-6 py-3.5 bg-white text-black rounded-full text-[10px] uppercase tracking-tighter font-black hover:bg-zinc-200 transition-all active:scale-95"
          >
            {desc ? "↓ Descending" : "↑ Ascending"}
          </button>
        </div>
      </div>

      {loading ? (
        <div className="py-20 flex justify-center">
          <div className="w-8 h-8 border-2 border-zinc-800 border-t-white rounded-full animate-spin" />
        </div>
      ) : orders.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-zinc-500 font-serif italic text-xl">No orders found in the archives.</p>
        </div>
      ) : (
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full border-separate border-spacing-y-2">
            <thead>
              <tr className="text-zinc-500">
                <th className="px-6 py-4 text-left text-[10px] uppercase tracking-[0.2em] font-semibold">Order ID</th>
                <th className="px-6 py-4 text-left text-[10px] uppercase tracking-[0.2em] font-semibold">User</th>
                <th className="px-6 py-4 text-left text-[10px] uppercase tracking-[0.2em] font-semibold">Total</th>
                <th className="px-6 py-4 text-center text-[10px] uppercase tracking-[0.2em] font-semibold">Status</th>
                <th className="px-6 py-4 text-left text-[10px] uppercase tracking-[0.2em] font-semibold">Date</th>
                <th className="px-6 py-4 text-center text-[10px] uppercase tracking-[0.2em] font-semibold">Actions</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="group bg-zinc-900/20 hover:bg-zinc-900/50 transition-all duration-300"
                >
                  <td className="px-6 py-5 rounded-l-2xl border-y border-l border-zinc-800 group-hover:border-zinc-700">
                    <span className="font-mono text-xs text-zinc-400">#{order.id}</span>
                  </td>
                  <td className="px-6 py-5 border-y border-zinc-800 group-hover:border-zinc-700">
                    <p className="text-white text-sm font-medium">{order.email}</p>
                  </td>
                  <td className="px-6 py-5 border-y border-zinc-800 group-hover:border-zinc-700">
                    <span className="text-white font-semibold">₹{order.totalAmount.toLocaleString()}</span>
                  </td>
                  <td className="px-6 py-5 border-y border-zinc-800 group-hover:border-zinc-700 text-center">
                    <select
                      value={order.status}
                      onChange={(e) => handleStatusChange(order.id, Number(e.target.value))}
                      className="bg-black border border-zinc-800 text-[10px] uppercase tracking-widest font-bold text-zinc-300 px-3 py-1.5 rounded-lg outline-none focus:border-white transition-all cursor-pointer"
                    >
                      <option value={1}>Pending</option>
                      <option value={7}>Payment Pending</option>
                      <option value={8}>COD</option>
                      <option value={9}>Confirmed</option>
                      <option value={2}>Paid</option>
                      <option value={3}>Processing</option>
                      <option value={4}>Shipped</option>
                      <option value={5}>Delivered</option>
                      <option value={6}>Cancelled</option>
                    </select>
                  </td>
                  <td className="px-6 py-5 border-y border-zinc-800 group-hover:border-zinc-700">
                    <span className="text-zinc-500 text-xs">
                      {new Date(order.orderDate).toLocaleDateString()}
                    </span>
                  </td>
                  <td className="px-6 py-5 rounded-r-2xl border-y border-r border-zinc-800 group-hover:border-zinc-700 text-center">
                    <button
                      onClick={() => navigate(`/admin/orders/${order.id}`)}
                      className="p-2 text-zinc-500 hover:text-white transition-colors"
                    >
                      <Eye size={20} strokeWidth={1.5} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination */}
      <div className="flex items-center justify-between mt-12 pt-8 border-t border-zinc-900">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="text-[11px] uppercase tracking-[0.2em] font-bold text-white disabled:text-zinc-700 transition-colors"
        >
          &larr; Previous
        </button>

        <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
          Page <span className="text-white">{page}</span> of {Math.ceil(total / PAGE_SIZE)}
        </span>

        <button
          disabled={page * PAGE_SIZE >= total}
          onClick={() => setPage((p) => p + 1)}
          className="text-[11px] uppercase tracking-[0.2em] font-bold text-white disabled:text-zinc-700 transition-colors"
        >
          Next &rarr;
        </button>
      </div>
    </motion.div>
  </div>
);
}
