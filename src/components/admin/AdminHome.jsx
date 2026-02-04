

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import api from "../../api/api";

export default function AdminHome() {
  const [orders, setOrders] = useState([]);
  const [productCount, setProductCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH DASHBOARD DATA ================= */
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) return;

    const fetchDashboardData = async () => {
      try {
        const [productsRes, usersRes, ordersRes] = await Promise.all([
          api.get("/admin/products?page=1&pageSize=1"),
          api.get("/admin/users?page=1&pageSize=1"),
          api.get("/admin/orders?page=1&pageSize=1000"),
        ]);

        const ordersData = ordersRes.data?.data?.data || [];
        setOrders(Array.isArray(ordersData) ? ordersData : []);
        setProductCount(productsRes.data?.data?.total || 0);
        setUserCount(usersRes.data?.data?.total || 0);
      } catch (err) {
        console.error("Dashboard load failed", err);
        setOrders([]);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  /* ================= SAFE DATA ================= */
  const safeOrders = Array.isArray(orders) ? orders : [];

  /* ================= PIE DATA ================= */
  const statusCounts = safeOrders.reduce((acc, o) => {
    const status = o.status || "Pending";
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {});

  const orderStatusData = Object.entries(statusCounts).map(
    ([name, value]) => ({ name, value })
  );

  // Luxury Monochromatic Palette
  const COLORS = ["#FFFFFF", "#A1A1AA", "#52525B", "#27272A"];

  /* ================= BAR DATA ================= */
  const salesData = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const dateStr = date.toISOString().split("T")[0];

    const dailyOrders = safeOrders.filter(
      o => o.orderDate?.split("T")[0] === dateStr
    );

    return {
      date: dateStr,
      sales: dailyOrders.reduce(
        (sum, o) => sum + (o.totalAmount || 0),
        0
      ),
    };
  }).reverse();

  /* ================= LINE DATA ================= */
  const usersVsOrdersData = Array.from({ length: 12 }, (_, i) => ({
    month: new Date(0, i).toLocaleString("default", { month: "short" }),
    orders: safeOrders.filter(
      o => new Date(o.orderDate).getMonth() === i
    ).length,
    users: 0, 
  }));

  /* ================= RENDER ================= */
  if (loading) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
        <div className="w-12 h-12 border-2 border-zinc-800 border-t-white rounded-full animate-spin mb-4" />
        <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-500">Initializing DAOR Systems</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black px-4 py-12 md:py-20 flex justify-center md:ml-14">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl w-full bg-zinc-950 border border-zinc-800/50 p-6 md:p-12 rounded-[2.5rem] space-y-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      >
        <header>
          <h2 className="text-3xl md:text-5xl font-serif italic tracking-tight text-white text-center">
            Dashboard Overview
          </h2>
          <p className="text-center text-zinc-500 text-[10px] uppercase tracking-[0.4em] mt-4">
            Real-time Performance Analytics
          </p>
        </header>

        {/* ================= COUNTS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Stat label="Total Products" value={productCount} />
          <Stat label="Registered Users" value={userCount} />
          <Stat label="Total Orders" value={safeOrders.length} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* ================= PIE ================= */}
            <ChartCard title="Order Distribution">
            {orderStatusData.length === 0 ? (
                <Empty />
            ) : (
                <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie 
                        data={orderStatusData} 
                        dataKey="value" 
                        outerRadius={100} 
                        innerRadius={60} 
                        paddingAngle={5}
                        stroke="none"
                    >
                    {orderStatusData.map((_, i) => (
                        <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                    </Pie>
                    <Tooltip 
                        contentStyle={{ backgroundColor: '#09090b', border: '1px solid #27272a', borderRadius: '12px', fontSize: '12px' }}
                        itemStyle={{ color: '#fff' }}
                    />
                    <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px' }} />
                </PieChart>
                </ResponsiveContainer>
            )}
            </ChartCard>

            {/* ================= LINE ================= */}
            <ChartCard title="Annual Order Flow">
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={usersVsOrdersData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#18181b" vertical={false} />
                <XAxis dataKey="month" stroke="#52525b" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="#52525b" fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip 
                    contentStyle={{ backgroundColor: '#09090b', border: '1px solid #27272a', borderRadius: '12px' }}
                />
                <Line 
                    type="monotone" 
                    dataKey="orders" 
                    stroke="#ffffff" 
                    strokeWidth={3} 
                    dot={{ r: 4, fill: '#000', strokeWidth: 2, stroke: '#fff' }} 
                    activeDot={{ r: 6 }}
                />
                </LineChart>
            </ResponsiveContainer>
            </ChartCard>
        </div>

        {/* ================= BAR ================= */}
        <ChartCard title="Revenue Stream (Last 30 Days)">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#18181b" vertical={false} />
              <XAxis dataKey="date" stroke="#52525b" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(str) => str.split('-')[2]} />
              <YAxis stroke="#52525b" fontSize={10} tickLine={false} axisLine={false} />
              <Tooltip 
                cursor={{fill: 'rgba(255,255,255,0.05)'}}
                contentStyle={{ backgroundColor: '#09090b', border: '1px solid #27272a', borderRadius: '12px' }}
              />
              <Bar dataKey="sales" fill="#ffffff" radius={[4, 4, 0, 0]} barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </motion.div>
    </div>
  );
}

/* ================= HELPERS ================= */

const Stat = ({ label, value }) => (
  <div className="bg-zinc-900/40 border border-zinc-800/50 p-8 rounded-3xl group hover:border-white/20 transition-all duration-500">
    <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-2 group-hover:text-zinc-300 transition-colors">{label}</p>
    <p className="text-4xl font-serif italic text-white">{value.toLocaleString()}</p>
  </div>
);

const ChartCard = ({ title, children }) => (
  <div className="bg-zinc-900/20 border border-zinc-800/50 p-6 md:p-8 rounded-[2rem]">
    <h3 className="text-[11px] uppercase tracking-[0.4em] text-zinc-400 font-bold mb-8 text-center">{title}</h3>
    {children}
  </div>
);

const Empty = () => (
  <div className="flex items-center justify-center h-[300px]">
    <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 italic">No data available for display</p>
  </div>
);