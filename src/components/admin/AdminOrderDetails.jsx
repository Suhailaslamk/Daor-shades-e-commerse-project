import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../api/api";

export default function AdminOrderDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    api.get(`/admin/orders/${id}`).then(res => {
      setOrder(res.data.data);
    });
  }, [id]);

  if (!order) return <p className="text-white">Loading...</p>;

  

  return (
  <div className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ml-10">
    {/* Header Section */}
    <div className="p-6 md:p-10 border-b border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-transparent">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-serif italic tracking-wide text-white">
            Order <span className="text-zinc-500">#{order.id}</span>
          </h2>
          <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mt-2">
            Placed on {new Date(order.orderDate).toLocaleDateString(undefined, { dateStyle: 'long' })}
          </p>
        </div>
        <div className="flex flex-col items-end">
          <span className={`px-4 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold border ${
            order.status.toLowerCase() === 'delivered' 
              ? 'border-emerald-500/50 text-emerald-400 bg-emerald-500/5' 
              : 'border-white/20 text-white bg-white/5'
          }`}>
            {order.status}
          </span>
        </div>
      </div>

      {/* Summary Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-1">Customer</p>
          <p className="text-white text-sm font-medium">{order.email}</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-1">Time</p>
          <p className="text-white text-sm font-medium">{new Date(order.orderDate).toLocaleTimeString()}</p>
        </div>
        <div className="md:text-right">
          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-1">Total Amount</p>
          <p className="text-2xl font-serif text-white">₹{order.totalAmount.toLocaleString()}</p>
        </div>
      </div>
    </div>

    {/* Products Table Section */}
    <div className="p-6 md:p-10">
      <h3 className="text-[11px] uppercase tracking-[0.4em] text-zinc-400 mb-6 font-bold">Items Purchased</h3>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-zinc-800">
              <th className="pb-4 text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium">Product</th>
              <th className="pb-4 text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium text-center">Qty</th>
              <th className="pb-4 text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium text-right">Price</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-900">
            {order.items.map((i, idx) => (
              <tr key={idx} className="group transition-colors hover:bg-white/[0.02]">
                <td className="py-5">
                  <p className="text-white text-sm font-medium tracking-wide group-hover:translate-x-1 transition-transform duration-300">
                    {i.productName}
                  </p>
                </td>
                <td className="py-5 text-center">
                  <span className="text-zinc-400 text-sm tabular-nums">{i.quantity}</span>
                </td>
                <td className="py-5 text-right">
                  <span className="text-white text-sm tabular-nums font-medium">₹{i.price.toLocaleString()}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    {/* Footer Detail */}
    <div className="bg-zinc-900/30 px-10 py-4 border-t border-zinc-800 text-center">
      <p className="text-[9px] uppercase tracking-[0.5em] text-zinc-600">
        Thank you for choosing DAOR
      </p>
    </div>
  </div>
);
}
