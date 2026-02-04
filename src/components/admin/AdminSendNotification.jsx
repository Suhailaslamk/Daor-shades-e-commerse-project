import { useState } from "react";
import api from "../../api/api";

export default function AdminSendNotification({ user, onClose }) {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const send = async () => {
    if (!title || !message) return;

    setLoading(true);
    try {
      await api.post("/admin/notifications/send", {
        userId: user.id,
        title,
        message,
      });
      onClose();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-6 rounded-lg w-full max-w-md">
        <h2 className="text-white text-lg mb-4">
          Send notification to {user.email}
        </h2>

        <input
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="w-full mb-3 p-2 bg-gray-800 text-white rounded"
        />

        <textarea
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          className="w-full mb-4 p-2 bg-gray-800 text-white rounded"
        />

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="text-gray-400">
            Cancel
          </button>
          <button
            onClick={send}
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}