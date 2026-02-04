// import { useEffect, useState } from "react";
// import { useAdmin } from "./AdminContext/AdminContext";
// import { motion } from 'framer-motion'
// export default function AdminAddProducts({onClose,editingProduct}){
// const {addProduct,editProduct} = useAdmin()



// const [formData, setFormData] = useState({
//     name: "",
//     price: "",
//     stock: "",
//     category: "",
//     image: "",
   
//   });

//  useEffect(() => {
//     if (editingProduct) setFormData(editingProduct);
//   }, [editingProduct]);

// const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };


//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (editingProduct) {
//       await editProduct(editingProduct.id, formData);
//     } else {
//       await addProduct(formData);
//     }

//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black/60  backdrop-blur flex justify-center items-center text-white z-50">
//       <motion.div
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         className="bg-gray-900 p-8 rounded-2xl w-full max-w-lg shadow-lg border border-gray-800"
//       >
//         <h2 className="text-2xl font-semibold mb-6 text-center">
//           {editingProduct ? "Edit Product" : "Add Product"}
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <input
//             type="text"
//             name="name"
//             placeholder="Product Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
//           />
//           <input
//             type="number"
//             name="price"
//             placeholder="Price"
//             value={formData.price}
//             onChange={handleChange}
//             className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
//           />
//           <input
//             type="text"
//             name="category"
//             placeholder="Category"
//             value={formData.category}
//             onChange={handleChange}
//             className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
//           />
//           <input
//             type="number"
//             name="stock"
//             placeholder="Stock"
//             value={formData.stock}
//             onChange={handleChange}
//             className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
//           />
//           <input
//             type="text"
//             name="image"
//             placeholder="Image URL"
//             value={formData.image}
//             onChange={handleChange}
//             className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
//           />

          
//           {formData.image && (
//             <div className="mt-4 flex justify-center">
//               <img
//                 src={formData.image}
//                 alt="Preview"
//                 className="w-32 h-32 object-cover rounded-lg border border-gray-700"
//               />
//             </div>
//           )}

//           <div className="flex justify-end gap-3 mt-6">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-5 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-5 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg"
//             >
//               {editingProduct ? "Update" : "Add"}
//             </button>
//           </div>
//         </form>
//       </motion.div>
//     </div>
//   );
// }






import { useEffect, useState } from "react";
import api from "../../api/api";

export default function AdminProductForm({ editingProduct, onClose }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    description: "",
    categoryId: "",
    imageFile: null,
  });

  useEffect(() => {
    if (editingProduct) {
      setForm({
        name: editingProduct.name,
        price: editingProduct.price,
        stock: editingProduct.stock,
        description: editingProduct.description,
        categoryId: editingProduct.categoryId,
        imageFile: null,
      });
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("Name", form.name);
    data.append("Price", form.price);
    data.append("Stock", form.stock);
    data.append("Description", form.description);
    data.append("CategoryId", form.categoryId);

    if (form.imageFile) {
      data.append("ImageFile", form.imageFile);
    }

    try {
      if (editingProduct) {
        await api.patch(`/admin/products/${editingProduct.id}`, data);
      } else {
        await api.post("/admin/products", data);
      }
      onClose();
    } catch (err) {
      console.error("Save failed", err);
    }
  };

 
return (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[150] p-4">
    <form
      onSubmit={handleSubmit}
      className="bg-zinc-950 border border-zinc-800 p-6 md:p-10 rounded-2xl w-full max-w-xl shadow-2xl animate-in fade-in zoom-in duration-300"
    >
      <h2 className="text-2xl md:text-3xl font-serif italic tracking-wide text-white mb-8 text-center">
        {editingProduct ? "Edit Product" : "Add New Product"}
      </h2>

      <div className="space-y-5">
        {/* Name Field */}
        <div>
          <label className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-1.5 ml-1">Product Name</label>
          <input
            name="name"
            placeholder="e.g. Signature Silk Scarf"
            onChange={handleChange}
            value={form.name}
            className="w-full p-3 bg-zinc-900 border border-zinc-800 text-white focus:border-white outline-none transition-all duration-300 rounded-lg placeholder:text-zinc-600 text-sm"
          />
        </div>

        {/* Price & Stock Row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-1.5 ml-1">Price ($)</label>
            <input
              name="price"
              type="number"
              placeholder="0.00"
              onChange={handleChange}
              value={form.price}
              className="w-full p-3 bg-zinc-900 border border-zinc-800 text-white focus:border-white outline-none transition-all duration-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-1.5 ml-1">Stock Qty</label>
            <input
              name="stock"
              type="number"
              placeholder="0"
              onChange={handleChange}
              value={form.stock}
              className="w-full p-3 bg-zinc-900 border border-zinc-800 text-white focus:border-white outline-none transition-all duration-300 rounded-lg text-sm"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-1.5 ml-1">Description</label>
          <textarea
            name="description"
            placeholder="Describe the craftsmanship..."
            onChange={handleChange}
            value={form.description}
            rows={3}
            className="w-full p-3 bg-zinc-900 border border-zinc-800 text-white focus:border-white outline-none transition-all duration-300 rounded-lg placeholder:text-zinc-600 text-sm resize-none"
          />
        </div>

        {/* Category & Image Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-1.5 ml-1">Category ID</label>
            <input
              name="categoryId"
              type="number"
              placeholder="1"
              onChange={handleChange}
              value={form.categoryId}
              className="w-full p-3 bg-zinc-900 border border-zinc-800 text-white focus:border-white outline-none transition-all duration-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-1.5 ml-1">Product Image</label>
            <input
              name="imageFile"
              type="file"
              onChange={handleChange}
              className="w-full text-xs text-zinc-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-[10px] file:uppercase file:font-bold file:bg-zinc-800 file:text-white hover:file:bg-zinc-700 transition-all cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-end gap-3 mt-10">
        <button
          type="button"
          onClick={onClose}
          className="px-8 py-3 text-[11px] uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-8 py-3 bg-white text-black text-[11px] uppercase tracking-widest font-bold rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg"
        >
          {editingProduct ? "Update Product" : "Create Product"}
        </button>
      </div>
    </form>
  </div>
)
}