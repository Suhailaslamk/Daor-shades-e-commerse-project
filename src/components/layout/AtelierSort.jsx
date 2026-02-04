import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function AtelierSort({ setSort }) {
  const [open, setOpen] = useState(false);
  const [label, setLabel] = useState("Sort by");

  const options = [
    { label: "Featured", value: "" },
    { label: "Price: Low → High", value: "price" },
    { label: "Price: High → Low", value: "priceHighLow" },
  ];

  const handleSelect = (opt) => {
    setSort(opt.value);
    setLabel(opt.label);
    setOpen(false);
  };

  return (
    <div className="relative">
      {/* Trigger */}
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-zinc-500 hover:text-black transition-all"
      >
        {label}
        <ChevronDown
          size={14}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            className="absolute right-0 mt-6 w-56 bg-white border border-zinc-200 shadow-xl z-50"
          >
            {options.map(opt => (
              <button
                key={opt.label}
                onClick={() => handleSelect(opt)}
                className="w-full text-left px-6 py-4 text-[11px] uppercase tracking-widest text-zinc-600 hover:bg-zinc-50 hover:text-black transition-all"
              >
                {opt.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
