import { useEffect, useState } from "react";
import api from "../api/api";
import { useAuth } from "../context/authcontext";

export  function useNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  const fetchNotifications = async () => {
    try {
      const res = await api.get("/notifications/my");
      setNotifications(res.data.data || []);
    } catch {
      setNotifications([]);
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (id) => {
    await api.put(`/notifications/${id}/read`);
    setNotifications(prev =>
      prev.map(n => n.id === id ? { ...n, isRead: true } : n)
    );
  };

  useEffect(() => {
  if (user) {
    fetchNotifications();
  }
}, [user]);

  return { notifications, loading, markAsRead };
}