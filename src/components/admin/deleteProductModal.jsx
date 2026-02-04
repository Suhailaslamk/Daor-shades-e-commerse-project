import { useState } from "react";
import api from "../../api/api";
import { motion } from "framer-motion";

export default function DeleteProductModal({ product, onClose, onDeleted }) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      await api.delete(`/admin/products/${product.id}`);
      onDeleted();
    } catch (err) {
      alert("Failed to delete product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-gray-900 border border-gray-800 rounded-xl p-6 w-full max-w-md"
      >
        <h2 className="text-xl text-white mb-4">Delete Product</h2>

        <p className="text-gray-400 mb-6">
          Are you sure you want to delete{" "}
          <span className="text-white font-semibold">
            {product.name}
          </span>
          ?  
          This action cannot be undone.
        </p>

        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded"
            disabled={loading}
          >
            Cancel
          </button>

          <button
            onClick={handleDelete}
            disabled={loading}
            className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded text-white"
          >
            {loading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
