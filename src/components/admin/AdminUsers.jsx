
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { UserCog, Bell, ChevronLeft, ChevronRight, ShieldAlert } from "lucide-react";
import api from "../../api/api";
import { Link } from "react-router-dom";
import AdminSendNotification from "./AdminSendNotification";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const [total, setTotal] = useState(0);
  const [notifyOpen, setNotifyOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await api.get(`/admin/users?page=${page}&pageSize=${pageSize}`);
        setTotal(res.data.data.total);
        const usersData = res.data.data.users.map(u => ({
          id: u.id,
          fullName: u.fullName,
          email: u.email,
          role: u.role === 2 ? "admin" : u.role === 1 ? "user" : "user",
          isBlocked: u.isBlocked
        }));
        setUsers(usersData);
      } catch (err) {
        console.error("Failed to fetch users", err);
      }
    };
    fetchUsers();
  }, [page]);

  const handleBlockChange = async (id, block) => {
    try {
      await api.put("/admin/users/block", { userId: id, block });
      setUsers(prev =>
        prev.map(u => (u.id === id ? { ...u, isBlocked: block } : u))
      );
    } catch {
      alert("Failed to change status");
    }
  };

  const handleRoleChange = async (id, role) => {
    try {
      const backendRole = role.charAt(0).toUpperCase() + role.slice(1);
      await api.put(`/admin/users/role?userId=${id}&role=${backendRole}`);
      setUsers(prev =>
        prev.map(u => (u.id === id ? { ...u, role } : u))
      );
    } catch {
      alert("Failed to change role");
    }
  };

  const totalPages = Math.ceil(total / pageSize);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 md:py-24 flex flex-col items-center md:ml-14 selection:bg-white selection:text-black">
      <div className="max-w-6xl w-full">
        
        {/* --- Header Section --- */}
        <header className="mb-24 space-y-6 text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center gap-4"
          >
            <span className="h-[1px] w-10 bg-zinc-800" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 font-bold">Member Directory</span>
            <span className="h-[1px] w-10 bg-zinc-800" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif italic tracking-tighter"
          >
            User <span className="text-zinc-600">Permissions</span>
          </motion.h2>
        </header>

        {users.length === 0 ? (
          <div className="py-40 text-center border border-dashed border-zinc-900 rounded-[3rem]">
            <ShieldAlert size={32} className="text-zinc-800 mx-auto mb-6" strokeWidth={1} />
            <p className="text-zinc-500 font-serif italic text-2xl tracking-tight">The directory is currently uninhabited.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {/* List View instead of complex table for better Atelier feel */}
            {users.map((u) => (
              <motion.div
                key={u.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="group grid grid-cols-1 md:grid-cols-12 items-center gap-6 bg-zinc-950/40 border border-zinc-900 p-8 rounded-[2.5rem] hover:bg-zinc-900/40 hover:border-zinc-700 transition-all duration-500"
              >
                {/* Identity */}
                <div className="md:col-span-4 space-y-1">
                  <p className="text-[14px] uppercase tracking-[0.1em] font-black group-hover:text-white">
                    {u.fullName}
                  </p>
                  <p className="text-[12px] text-zinc-500 font-light truncate">{u.email}</p>
                </div>

                {/* Status Selector */}
                <div className="md:col-span-2">
                  <select
                    value={u.isBlocked ? "blocked" : "active"}
                    onChange={(e) => handleBlockChange(u.id, e.target.value === "blocked")}
                    className={`w-full bg-black border border-zinc-800 text-[9px] uppercase tracking-widest font-black px-4 py-2 rounded-full outline-none transition-all cursor-pointer appearance-none text-center ${
                      u.isBlocked ? "text-rose-500 border-rose-500/20" : "text-emerald-500 border-emerald-500/20"
                    }`}
                  >
                    <option value="active">● Access Active</option>
                    <option value="blocked">○ Blocked</option>
                  </select>
                </div>

                {/* Role Selector */}
                <div className="md:col-span-2">
                  <select
                    value={u.role}
                    onChange={(e) => handleRoleChange(u.id, e.target.value)}
                    className="w-full bg-black border border-zinc-800 text-[9px] uppercase tracking-widest font-black text-zinc-400 px-4 py-2 rounded-full outline-none focus:border-white transition-all cursor-pointer appearance-none text-center"
                  >
                    <option value="user">Privilege: User</option>
                    <option value="admin">Privilege: Admin</option>
                  </select>
                </div>

                {/* Actions */}
                <div className="md:col-span-4 flex items-center justify-end gap-3">
                  <button
                    onClick={() => {
                      setSelectedUser(u);
                      setNotifyOpen(true);
                    }}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all duration-300"
                  >
                    <Bell size={14} />
                    <span className="text-[9px] uppercase tracking-[0.2em] font-bold">Notify</span>
                  </button>

                  <Link
                    to={`/admin/users/${u.id}`}
                    className="p-2.5 text-zinc-500 hover:text-white hover:bg-zinc-800 rounded-full transition-all duration-300"
                    title="View details"
                  >
                    <UserCog size={18} strokeWidth={1.5} />
                  </Link>
                </div>
              </motion.div>
            ))}

            {/* Pagination */}
            <footer className="flex items-center justify-between mt-20 pt-12 border-t border-zinc-900">
              <button
                disabled={page === 1}
                onClick={() => setPage((p) => p - 1)}
                className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-500 hover:text-white disabled:opacity-10 transition-all hover:-translate-x-2"
              >
                <ChevronLeft size={16} strokeWidth={3} /> Prev
              </button>

              <div className="px-6 py-2 bg-zinc-900/30 border border-zinc-900 rounded-full">
                <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-mono">
                  {page} / {totalPages}
                </span>
              </div>

              <button
                disabled={users.length < pageSize}
                onClick={() => setPage((p) => p + 1)}
                className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-500 hover:text-white disabled:opacity-10 transition-all hover:translate-x-2"
              >
                Next <ChevronRight size={16} strokeWidth={3} />
              </button>
            </footer>
          </div>
        )}
      </div>

      {/* Notification Modal Logic preserved */}
      {notifyOpen && selectedUser && (
        <AdminSendNotification
          user={selectedUser}
          onClose={() => {
            setNotifyOpen(false);
            setSelectedUser(null);
          }}
        />
      )}
    </div>
  );
}